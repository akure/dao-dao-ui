import { useWallet } from '@noahsaso/cosmodal'
import { constSelector, useRecoilValue } from 'recoil'

import {
  Cw721BaseSelectors,
  DaoVotingCw721StakedSelectors,
} from '@dao-dao/state'
import { useCachedLoading, useChain } from '@dao-dao/stateless'
import { TokenType } from '@dao-dao/types'

import { useVotingModuleAdapterOptions } from '../../../react/context'
import {
  UseGovernanceCollectionInfoOptions,
  UseGovernanceCollectionInfoResponse,
} from '../types'

export const useGovernanceCollectionInfo = ({
  fetchWalletBalance = false,
  fetchTreasuryBalance = false,
}: UseGovernanceCollectionInfoOptions = {}): UseGovernanceCollectionInfoResponse => {
  const { chain_id: chainId } = useChain()
  const { address: walletAddress } = useWallet(chainId)
  const { coreAddress, votingModuleAddress } = useVotingModuleAdapterOptions()

  const { nft_address: collectionAddress } = useRecoilValue(
    DaoVotingCw721StakedSelectors.configSelector({
      chainId,
      contractAddress: votingModuleAddress,
      params: [],
    })
  )

  const contractInfo = useRecoilValue(
    Cw721BaseSelectors.contractInfoSelector({
      chainId,
      contractAddress: collectionAddress,
      params: [],
    })
  )

  const tokenSupplyInfo = useRecoilValue(
    Cw721BaseSelectors.numTokensSelector({
      chainId,
      contractAddress: collectionAddress,
      params: [],
    })
  )

  /// Optional

  // Wallet balance
  const loadingWalletBalance = useCachedLoading(
    fetchWalletBalance && walletAddress
      ? Cw721BaseSelectors.allTokensForOwnerSelector({
          chainId,
          contractAddress: collectionAddress,
          owner: walletAddress,
        })
      : constSelector(undefined),
    undefined
  )

  // Treasury balance
  const loadingTreasuryBalance = useCachedLoading(
    fetchTreasuryBalance
      ? Cw721BaseSelectors.allTokensForOwnerSelector({
          chainId,
          contractAddress: collectionAddress,
          owner: coreAddress,
        })
      : constSelector(undefined),
    undefined
  )

  return {
    stakingContractAddress: votingModuleAddress,
    collectionAddress,
    collectionInfo: {
      name: contractInfo.name,
      symbol: contractInfo.symbol,
      totalSupply: tokenSupplyInfo.count,
    },
    token: {
      chainId,
      type: TokenType.Cw721,
      denomOrAddress: collectionAddress,
      symbol: contractInfo.symbol,
      decimals: 0,
      imageUrl: undefined,
    },
    /// Optional
    // Wallet balance
    loadingWalletBalance: loadingWalletBalance.loading
      ? { loading: true }
      : !loadingWalletBalance.data
      ? undefined
      : {
          loading: false,
          data: Number(loadingWalletBalance.data?.length),
        },
    // Treasury balance
    loadingTreasuryBalance: loadingTreasuryBalance.loading
      ? { loading: true }
      : !loadingTreasuryBalance.data
      ? undefined
      : {
          loading: false,
          data: loadingTreasuryBalance.data.length,
        },
  }
}
