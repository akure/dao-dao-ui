import {
  constSelector,
  selectorFamily,
  waitForAll,
  waitForAllSettled,
} from 'recoil'

import {
  Account,
  AccountType,
  GenericToken,
  GenericTokenBalanceWithOwner,
  IcaAccount,
  TokenType,
  WithChainId,
} from '@dao-dao/types'
import { ICA_CHAINS_TX_PREFIX, tokensEqual } from '@dao-dao/utils'

import { isDaoSelector, isPolytoneProxySelector } from './contract'
import { DaoCoreV2Selectors } from './contracts'
import { icaRemoteAddressSelector } from './ica'
import {
  genericTokenBalanceSelector,
  genericTokenBalancesSelector,
  genericTokenDelegatedBalanceSelector,
} from './token'

// Get accounts controlled by this address, including its native chain, all
// polytone proxies, and all ICA accounts.
export const accountsSelector = selectorFamily<
  Account[],
  WithChainId<{
    address: string
    // Chain IDs to include ICAs from.
    includeIcaChains?: string[]
  }>
>({
  key: 'accounts',
  get:
    ({ chainId, address, includeIcaChains }) =>
    ({ get }) => {
      const [isDao, isPolytoneProxy] = get(
        waitForAll([
          isDaoSelector({
            chainId,
            address,
          }),
          isPolytoneProxySelector({
            chainId,
            address,
          }),
        ])
      )

      // If this is a DAO, get its polytone proxies and registered ICAs.
      const [polytoneProxies, registeredIcas] = isDao
        ? get(
            waitForAll([
              DaoCoreV2Selectors.polytoneProxiesSelector({
                chainId,
                contractAddress: address,
              }),
              DaoCoreV2Selectors.listAllItemsWithPrefixSelector({
                chainId,
                contractAddress: address,
                prefix: ICA_CHAINS_TX_PREFIX,
              }),
            ])
          )
        : []

      const mainAccount: Account = {
        chainId,
        address,
        type: isPolytoneProxy ? AccountType.Polytone : AccountType.Native,
      }

      const allAccounts: Account[] = [
        // Main account.
        mainAccount,
        // Polytone.
        ...Object.entries(polytoneProxies || {}).map(
          ([chainId, address]): Account => ({
            chainId,
            address,
            type: AccountType.Polytone,
          })
        ),
      ]

      // If main account is native, load ICA accounts.
      const icaChains =
        mainAccount.type === AccountType.Native
          ? [
              ...(registeredIcas || []).map(([key]) => key),
              ...(includeIcaChains || []),
            ]
          : []

      // Get ICA addresses controlled by native account.
      const icas = icaChains.length
        ? get(
            waitForAllSettled(
              icaChains.map((chainId) =>
                icaRemoteAddressSelector({
                  srcChainId: mainAccount.chainId,
                  address: mainAccount.address,
                  destChainId: chainId,
                })
              )
            )
          ).flatMap((addressLoadable, index): IcaAccount | [] =>
            addressLoadable.valueMaybe()
              ? {
                  type: AccountType.Ica,
                  chainId: icaChains[index],
                  address: addressLoadable.valueMaybe()!,
                }
              : []
          )
        : []

      // Add ICA accounts.
      allAccounts.push(...icas)

      return allAccounts
    },
})

export const allBalancesSelector = selectorFamily<
  GenericTokenBalanceWithOwner[],
  WithChainId<{
    address: string
    // If account is a DAO, set this to the denom of its native governance
    // token.
    nativeGovernanceTokenDenom?: string
    // If account is a DAO, set this to the address of its cw20 governance
    // token.
    cw20GovernanceTokenAddress?: string
    // Chain IDs to include ICAs from.
    includeIcaChains?: string[]
    // Only get balances for this token type.
    filter?: TokenType
    // Additional tokens to fetch balances for.
    additionalTokens?: Pick<
      GenericToken,
      'chainId' | 'type' | 'denomOrAddress'
    >[]
    // Ignore staked tokens.
    ignoreStaked?: boolean
  }>
>({
  key: 'allBalances',
  get:
    ({
      chainId: mainChainId,
      address: mainAddress,
      nativeGovernanceTokenDenom,
      cw20GovernanceTokenAddress,
      includeIcaChains,
      filter,
      additionalTokens,
      ignoreStaked,
    }) =>
    ({ get }) => {
      const allAccounts = get(
        accountsSelector({
          chainId: mainChainId,
          address: mainAddress,
          includeIcaChains,
        })
      )

      const accountBalances = get(
        waitForAll(
          allAccounts.map(({ address, chainId }) =>
            waitForAllSettled([
              // All unstaked
              genericTokenBalancesSelector({
                chainId: mainChainId,
                address: mainAddress,
                nativeGovernanceTokenDenom:
                  chainId === mainChainId
                    ? nativeGovernanceTokenDenom
                    : undefined,
                cw20GovernanceTokenAddress:
                  chainId === mainChainId
                    ? cw20GovernanceTokenAddress
                    : undefined,
                filter: {
                  tokenType: filter,
                  account: {
                    chainId,
                    address,
                  },
                },
              }),
              // Additional unstaked tokens on this account's chain.
              waitForAllSettled(
                (additionalTokens || [])
                  .filter((token) => token.chainId === chainId)
                  .map((token) =>
                    genericTokenBalanceSelector({
                      ...token,
                      address,
                    })
                  )
              ),
              // Native staked
              (!filter || filter === TokenType.Native) && !ignoreStaked
                ? genericTokenDelegatedBalanceSelector({
                    chainId,
                    walletAddress: address,
                  })
                : constSelector(undefined),
            ])
          )
        )
      )

      return allAccounts.flatMap((owner, index) => {
        // All unstaked
        const unstakedBalances = accountBalances[index][0].valueMaybe() || []
        // Additional unstaked
        const additionalUnstakedBalances =
          accountBalances[index][1]
            .valueMaybe()
            ?.flatMap((loadable) => loadable.valueMaybe() || [])
            // Remove any tokens that are already in unstakedBalances.
            .filter(
              (a) =>
                !unstakedBalances.some((b) => tokensEqual(a.token, b.token))
            ) || []

        // Native staked
        const stakedBalance = accountBalances[index][2].valueMaybe()

        const balances = [
          ...unstakedBalances,
          ...additionalUnstakedBalances,
          ...(stakedBalance
            ? [
                {
                  ...stakedBalance,
                  staked: true,
                },
              ]
            : []),
        ]

        return balances.map(
          (balance): GenericTokenBalanceWithOwner => ({
            ...balance,
            owner,
          })
        )
      })
    },
})
