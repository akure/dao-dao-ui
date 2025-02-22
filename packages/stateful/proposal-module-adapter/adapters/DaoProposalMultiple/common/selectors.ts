import {
  RecoilValueReadOnly,
  constSelector,
  selectorFamily,
  waitForAll,
} from 'recoil'

import { blockHeightTimestampSafeSelector } from '@dao-dao/state'
import {
  CheckedDepositInfo,
  ContractVersion,
  ProposalStatus,
  WithChainId,
} from '@dao-dao/types'
import {
  CommonProposalListInfo,
  DepositInfoSelector,
} from '@dao-dao/types/proposal-module-adapter'

import { configSelector as configPreProposeSelector } from '../contracts/DaoPreProposeMultiple.recoil'
import { reverseProposalsSelector } from '../contracts/DaoProposalMultiple.recoil'

export const reverseProposalInfosSelector: (
  info: WithChainId<{
    proposalModuleAddress: string
    proposalModulePrefix: string
    startBefore: number | undefined
    limit: number | undefined
  }>
) => RecoilValueReadOnly<CommonProposalListInfo[]> = selectorFamily({
  key: 'daoProposalMultipleReverseProposalInfos',
  get:
    ({
      chainId,
      proposalModuleAddress,
      proposalModulePrefix,
      startBefore,
      limit,
    }) =>
    async ({ get }) => {
      const proposalResponses = get(
        reverseProposalsSelector({
          contractAddress: proposalModuleAddress,
          chainId,
          params: [
            {
              startBefore,
              limit,
            },
          ],
        })
      ).proposals

      const timestamps = get(
        waitForAll(
          proposalResponses.map(({ proposal: { start_height }, ...response }) =>
            // Indexer returns createdAt, so check its existence and fetch from
            // chain if not present.
            typeof response.createdAt === 'string'
              ? constSelector(new Date(response.createdAt))
              : blockHeightTimestampSafeSelector({
                  blockHeight: start_height,
                  chainId,
                })
          )
        )
      )

      const proposalInfos: CommonProposalListInfo[] = proposalResponses.map(
        ({ id, proposal: { status } }, index) => ({
          id: `${proposalModulePrefix}${id}`,
          proposalNumber: id,
          timestamp: timestamps[index],
          isOpen: status === ProposalStatus.Open,
        })
      )

      return proposalInfos
    },
})

export const makeDepositInfoSelector: (
  info: WithChainId<{
    proposalModuleAddress: string
    version: ContractVersion | null
    preProposeAddress: string | null
  }>
) => DepositInfoSelector = selectorFamily({
  key: 'daoProposalMultipleDepositInfo',
  get:
    ({ chainId, preProposeAddress }) =>
    ({ get }) => {
      let depositInfo: CheckedDepositInfo | undefined
      if (preProposeAddress) {
        const config = get(
          configPreProposeSelector({
            contractAddress: preProposeAddress,
            chainId,
            params: [],
          })
        )
        if (config.deposit_info) {
          depositInfo = config.deposit_info ?? undefined
        }
      }

      return depositInfo
    },
})

export const anyoneCanProposeSelector = selectorFamily<
  boolean,
  WithChainId<{
    // Null if doesn't have pre-propose module.
    preProposeAddress: string | null
  }>
>({
  key: 'daoPreProposeMultipleAnyoneCanPropose',
  get:
    ({ chainId, preProposeAddress }) =>
    ({ get }) => {
      if (preProposeAddress) {
        const config = get(
          configPreProposeSelector({
            contractAddress: preProposeAddress,
            chainId,
            params: [],
          })
        )

        return config.open_proposal_submission
      }

      return false
    },
})
