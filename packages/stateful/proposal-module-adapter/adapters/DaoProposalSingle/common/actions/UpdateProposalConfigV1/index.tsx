import { useCallback } from 'react'
import { constSelector } from 'recoil'

import { Cw20BaseSelectors, isContractSelector } from '@dao-dao/state'
import {
  BallotDepositEmoji,
  useCachedLoadingWithError,
} from '@dao-dao/stateless'
import {
  ActionComponent,
  ActionContextType,
  ActionKey,
  ActionMaker,
  ContractVersion,
  ProposalModule,
  UseDecodedCosmosMsg,
  UseDefaults,
  UseTransformToCosmos,
} from '@dao-dao/types'
import { Threshold } from '@dao-dao/types/contracts/DaoProposalSingle.common'
import {
  convertDenomToMicroDenomWithDecimals,
  convertMicroDenomToDenomWithDecimals,
  makeWasmMessage,
  objectMatchesStructure,
} from '@dao-dao/utils'

import { useActionOptions } from '../../../../../../actions'
import { useVotingModuleAdapter } from '../../../../../../voting-module-adapter'
import { CONTRACT_NAMES } from '../../../constants'
import { configSelector } from '../../../contracts/CwProposalSingle.v1.recoil'
import { UpdateProposalConfigComponent } from './UpdateProposalConfigComponent'

export interface UpdateProposalConfigData {
  onlyMembersExecute: boolean

  depositRequired: boolean
  depositInfo?: {
    deposit: number
    refundFailedProposals: boolean
  }

  thresholdType: '%' | 'majority'
  thresholdPercentage?: number

  quorumEnabled: boolean
  quorumType: '%' | 'majority'
  quorumPercentage?: number

  proposalDuration: number
  proposalDurationUnits: 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds'

  allowRevoting: boolean
}

const thresholdToTQData = (
  source: Threshold
): Pick<
  UpdateProposalConfigData,
  | 'thresholdType'
  | 'thresholdPercentage'
  | 'quorumEnabled'
  | 'quorumType'
  | 'quorumPercentage'
> => {
  let thresholdType: UpdateProposalConfigData['thresholdType'] = 'majority'
  let thresholdPercentage: UpdateProposalConfigData['thresholdPercentage'] =
    undefined
  let quorumEnabled: boolean = true
  let quorumType: UpdateProposalConfigData['quorumType'] = '%'
  let quorumPercentage: UpdateProposalConfigData['quorumPercentage'] = 20

  if ('threshold_quorum' in source) {
    const { threshold, quorum } = source.threshold_quorum

    thresholdType = 'majority' in threshold ? 'majority' : '%'
    thresholdPercentage =
      'majority' in threshold ? undefined : Number(threshold.percent) * 100

    quorumType = 'majority' in quorum ? 'majority' : '%'
    quorumPercentage =
      'majority' in quorum ? undefined : Number(quorum.percent) * 100

    quorumEnabled = true
  } else if ('absolute_percentage' in source) {
    const { percentage } = source.absolute_percentage

    thresholdType = 'majority' in percentage ? 'majority' : '%'
    thresholdPercentage =
      'majority' in percentage ? undefined : Number(percentage.percent) * 100

    quorumEnabled = false
  }

  return {
    thresholdType,
    thresholdPercentage,
    quorumEnabled,
    quorumType,
    quorumPercentage,
  }
}

const typePercentageToPercentageThreshold = (
  t: 'majority' | '%',
  p: number | undefined
) => {
  if (t === 'majority') {
    return { majority: {} }
  } else {
    if (p === undefined) {
      throw new Error(
        'internal erorr: an undefined percent was configured with a non-majority threshold.'
      )
    }
    return {
      percent: (p / 100).toString(),
    }
  }
}

const maxVotingInfoToCosmos = (
  t: 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds',
  v: number
) => {
  const converter = {
    weeks: 604800,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  }

  return {
    time: converter[t] * v,
  }
}

const Component: ActionComponent = (props) => {
  const {
    hooks: { useCommonGovernanceTokenInfo },
  } = useVotingModuleAdapter()
  const commonGovernanceTokenInfo = useCommonGovernanceTokenInfo?.()

  return (
    <UpdateProposalConfigComponent
      {...props}
      options={{ commonGovernanceTokenInfo }}
    />
  )
}

export const makeUpdateProposalConfigV1ActionMaker =
  ({
    version,
    address: proposalModuleAddress,
  }: ProposalModule): ActionMaker<UpdateProposalConfigData> =>
  ({ t, context, chain: { chain_id: chainId } }) => {
    // Only v1.
    if (!version || version !== ContractVersion.V1) {
      return null
    }

    const useDefaults: UseDefaults<UpdateProposalConfigData> = () => {
      const proposalModuleConfig = useCachedLoadingWithError(
        configSelector({
          chainId,
          contractAddress: proposalModuleAddress,
        })
      )

      const proposalDepositTokenInfo = useCachedLoadingWithError(
        proposalModuleConfig.loading || proposalModuleConfig.errored
          ? undefined
          : proposalModuleConfig.data.deposit_info?.token
          ? Cw20BaseSelectors.tokenInfoSelector({
              chainId,
              contractAddress: proposalModuleConfig.data.deposit_info.token,
              params: [],
            })
          : constSelector(undefined)
      )

      if (proposalModuleConfig.loading || proposalDepositTokenInfo.loading) {
        return
      }
      if (proposalModuleConfig.errored) {
        return proposalModuleConfig.error
      }
      if (proposalDepositTokenInfo.errored) {
        return proposalDepositTokenInfo.error
      }

      const onlyMembersExecute = proposalModuleConfig.data.only_members_execute
      const depositRequired = !!proposalModuleConfig.data.deposit_info
      const depositInfo = !!proposalModuleConfig.data.deposit_info
        ? {
            deposit: convertMicroDenomToDenomWithDecimals(
              Number(proposalModuleConfig.data.deposit_info.deposit),
              // A deposit being configured implies that a token will be present.
              proposalDepositTokenInfo.data!.decimals
            ),
            refundFailedProposals:
              proposalModuleConfig.data.deposit_info.refund_failed_proposals,
          }
        : {
            deposit: 0,
            refundFailedProposals: false,
          }
      const proposalDuration =
        'time' in proposalModuleConfig.data.max_voting_period
          ? proposalModuleConfig.data.max_voting_period.time
          : 604800
      const proposalDurationUnits = 'seconds'

      const allowRevoting = proposalModuleConfig.data.allow_revoting

      return {
        onlyMembersExecute,
        depositRequired,
        depositInfo,
        proposalDuration,
        proposalDurationUnits,
        allowRevoting,
        ...thresholdToTQData(proposalModuleConfig.data.threshold),
      }
    }

    const useTransformToCosmos: UseTransformToCosmos<
      UpdateProposalConfigData
    > = () => {
      const { address } = useActionOptions()
      const {
        hooks: { useCommonGovernanceTokenInfo },
      } = useVotingModuleAdapter()
      const voteConversionDecimals =
        useCommonGovernanceTokenInfo?.().decimals ?? 0

      return useCallback(
        (data: UpdateProposalConfigData) =>
          makeWasmMessage({
            wasm: {
              execute: {
                contract_addr: proposalModuleAddress,
                funds: [],
                msg: {
                  update_config: {
                    threshold: data.quorumEnabled
                      ? {
                          threshold_quorum: {
                            quorum: typePercentageToPercentageThreshold(
                              data.quorumType,
                              data.quorumPercentage
                            ),
                            threshold: typePercentageToPercentageThreshold(
                              data.thresholdType,
                              data.thresholdPercentage
                            ),
                          },
                        }
                      : {
                          absolute_percentage: {
                            percentage: typePercentageToPercentageThreshold(
                              data.thresholdType,
                              data.thresholdPercentage
                            ),
                          },
                        },
                    max_voting_period: maxVotingInfoToCosmos(
                      data.proposalDurationUnits,
                      data.proposalDuration
                    ),
                    only_members_execute: data.onlyMembersExecute,
                    allow_revoting: data.allowRevoting,
                    dao: address,
                    ...(data.depositInfo &&
                      data.depositRequired && {
                        deposit_info: {
                          deposit: convertDenomToMicroDenomWithDecimals(
                            data.depositInfo.deposit,
                            voteConversionDecimals
                          ).toString(),
                          refund_failed_proposals:
                            data.depositInfo.refundFailedProposals,
                          token: { voting_module_token: {} },
                        },
                      }),
                  },
                },
              },
            },
          }),
        [address, voteConversionDecimals]
      )
    }

    const useDecodedCosmosMsg: UseDecodedCosmosMsg<UpdateProposalConfigData> = (
      msg: Record<string, any>
    ) => {
      const {
        hooks: { useCommonGovernanceTokenInfo },
      } = useVotingModuleAdapter()
      const voteConversionDecimals =
        useCommonGovernanceTokenInfo?.().decimals ?? 0

      const isUpdateConfig = objectMatchesStructure(msg, {
        wasm: {
          execute: {
            contract_addr: {},
            funds: {},
            msg: {
              update_config: {
                threshold: {},
                max_voting_period: {
                  time: {},
                },
                only_members_execute: {},
                allow_revoting: {},
                dao: {},
              },
            },
          },
        },
      })

      const isContract = useCachedLoadingWithError(
        isUpdateConfig
          ? isContractSelector({
              contractAddress: msg.wasm.execute.contract_addr,
              names: CONTRACT_NAMES,
              chainId,
            })
          : constSelector(false)
      )

      if (
        !isUpdateConfig ||
        isContract.loading ||
        isContract.errored ||
        !isContract.data
      ) {
        return { match: false }
      }

      const config = msg.wasm.execute.msg.update_config
      const onlyMembersExecute = config.only_members_execute
      const depositRequired = !!config.deposit_info
      const depositInfo = !!config.deposit_info
        ? {
            deposit: convertMicroDenomToDenomWithDecimals(
              Number(config.deposit_info.deposit),
              voteConversionDecimals
            ),
            refundFailedProposals: config.deposit_info.refund_failed_proposals,
          }
        : undefined

      const proposalDuration = config.max_voting_period.time
      const proposalDurationUnits = 'seconds'

      const allowRevoting = !!config.allow_revoting

      return {
        match: true,
        data: {
          onlyMembersExecute,
          depositRequired,
          depositInfo,
          proposalDuration,
          proposalDurationUnits,
          allowRevoting,
          ...thresholdToTQData(config.threshold),
        },
      }
    }

    return {
      key: ActionKey.UpdateProposalSingleConfig,
      Icon: BallotDepositEmoji,
      label: t('form.updateVotingConfigTitle', {
        context:
          // If more than one proposal module, specify which one this is.
          context.type === ActionContextType.Dao &&
          context.info.proposalModules.length > 1
            ? 'singleChoice'
            : undefined,
      }),
      description: t('info.updateVotingConfigActionDescription'),
      notReusable: true,
      Component,
      useDefaults,
      useTransformToCosmos,
      useDecodedCosmosMsg,
    }
  }
