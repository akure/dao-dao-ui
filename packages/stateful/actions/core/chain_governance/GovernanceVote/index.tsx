import { useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { constSelector, useRecoilValue, useRecoilValueLoadable } from 'recoil'

import {
  chainSupportsV1GovModuleSelector,
  govProposalSelector,
  govProposalVoteSelector,
  govProposalsSelector,
} from '@dao-dao/state'
import {
  BallotDepositEmoji,
  ChainProvider,
  DaoSupportedChainPickerInput,
  Loader,
} from '@dao-dao/stateless'
import { ChainId } from '@dao-dao/types'
import {
  ActionComponent,
  ActionContextType,
  ActionKey,
  ActionMaker,
  UseDecodedCosmosMsg,
  UseDefaults,
  UseTransformToCosmos,
} from '@dao-dao/types/actions'
import {
  cwVoteOptionToGovVoteOption,
  decodePolytoneExecuteMsg,
  getChainAddressForActionOptions,
  isDecodedStargateMsg,
  loadableToLoadingData,
  makeStargateMessage,
  maybeMakePolytoneExecuteMessage,
  objectMatchesStructure,
} from '@dao-dao/utils'
import { MsgVote as MsgVoteV1 } from '@dao-dao/utils/protobuf/codegen/cosmos/gov/v1/tx'
import {
  ProposalStatus,
  VoteOption,
} from '@dao-dao/utils/protobuf/codegen/cosmos/gov/v1beta1/gov'
import { MsgVote as MsgVoteV1Beta1 } from '@dao-dao/utils/protobuf/codegen/cosmos/gov/v1beta1/tx'

import {
  GovProposalActionDisplay,
  SuspenseLoader,
} from '../../../../components'
import { TokenAmountDisplay } from '../../../../components/TokenAmountDisplay'
import { GovActionsProvider, useActionOptions } from '../../../react'
import {
  GovernanceVoteData,
  GovernanceVoteComponent as StatelessGovernanceVoteComponent,
} from './Component'

const Component: ActionComponent<undefined, GovernanceVoteData> = (props) => {
  const { isCreating, fieldNamePrefix } = props
  const options = useActionOptions()
  const { watch, setValue, setError, clearErrors } =
    useFormContext<GovernanceVoteData>()

  const chainId = watch((fieldNamePrefix + 'chainId') as 'chainId')
  const proposalId = watch(
    (props.fieldNamePrefix + 'proposalId') as 'proposalId'
  )

  // Detect whether or not this chain uses the v1 gov module.
  const supportsV1 = useRecoilValueLoadable(
    chainSupportsV1GovModuleSelector({ chainId })
  )
  useEffect(() => {
    if (supportsV1.state === 'hasValue') {
      setValue((fieldNamePrefix + 'v1') as 'v1', supportsV1.contents)
    } else {
      setValue((fieldNamePrefix + 'v1') as 'v1', undefined)
    }
  }, [supportsV1, setValue, fieldNamePrefix])

  const openProposalsLoadable = useRecoilValueLoadable(
    isCreating
      ? govProposalsSelector({
          status: ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD,
          chainId,
        })
      : constSelector(undefined)
  )

  // Prevent action from being submitted if there are no open proposals.
  useEffect(() => {
    if (
      openProposalsLoadable.state === 'hasValue' &&
      openProposalsLoadable.contents?.proposals.length === 0
    ) {
      setError((fieldNamePrefix + 'proposalId') as 'proposalId', {
        type: 'manual',
      })
    } else {
      clearErrors((fieldNamePrefix + 'proposalId') as 'proposalId')
    }
  }, [openProposalsLoadable, setError, clearErrors, fieldNamePrefix])

  // If viewing an action where we already selected and voted on a proposal,
  // load just the one we voted on and add it to the list so we can display it.
  const selectedProposal = useRecoilValue(
    !isCreating && proposalId
      ? govProposalSelector({
          proposalId: Number(proposalId),
          chainId,
        })
      : constSelector(undefined)
  )

  const address = getChainAddressForActionOptions(options, chainId)
  const existingVotesLoading = loadableToLoadingData(
    useRecoilValueLoadable(
      proposalId && address
        ? govProposalVoteSelector({
            proposalId: Number(proposalId),
            voter: address,
            chainId,
          })
        : constSelector(undefined)
    ),
    undefined
  )

  // Select first proposal once loaded if nothing selected.
  useEffect(() => {
    if (
      isCreating &&
      openProposalsLoadable.state === 'hasValue' &&
      openProposalsLoadable.contents?.proposals.length &&
      !proposalId
    ) {
      setValue(
        (fieldNamePrefix + 'proposalId') as 'proposalId',
        openProposalsLoadable.contents.proposals[0].id.toString()
      )
    }
  }, [isCreating, openProposalsLoadable, proposalId, setValue, fieldNamePrefix])

  return (
    <>
      {options.context.type === ActionContextType.Dao && (
        <DaoSupportedChainPickerInput
          disabled={!isCreating}
          fieldName={fieldNamePrefix + 'chainId'}
          onChange={() =>
            // Clear proposal on chain change.
            setValue((fieldNamePrefix + 'proposalId') as 'proposalId', '')
          }
          onlyDaoChainIds
        />
      )}

      <SuspenseLoader
        fallback={<Loader />}
        forceFallback={openProposalsLoadable.state !== 'hasValue'}
      >
        <ChainProvider chainId={chainId}>
          <GovActionsProvider>
            <StatelessGovernanceVoteComponent
              {...props}
              options={{
                proposals: [
                  ...((openProposalsLoadable.state === 'hasValue' &&
                    openProposalsLoadable.contents?.proposals) ||
                    []),
                  ...(selectedProposal ? [selectedProposal] : []),
                ],
                existingVotesLoading,
                TokenAmountDisplay,
                GovProposalActionDisplay,
              }}
            />
          </GovActionsProvider>
        </ChainProvider>
      </SuspenseLoader>
    </>
  )
}

export const makeGovernanceVoteAction: ActionMaker<GovernanceVoteData> = (
  options
) => {
  const {
    t,
    chain: { chain_id: currentChainId },
    context,
  } = options

  if (
    // Governance module cannot participate in governance.
    context.type === ActionContextType.Gov ||
    // Neutron does not use the x/gov module.
    currentChainId === ChainId.NeutronMainnet
  ) {
    return null
  }

  const useDefaults: UseDefaults<GovernanceVoteData> = () => ({
    chainId: currentChainId,
    proposalId: '',
    vote: VoteOption.VOTE_OPTION_ABSTAIN,
    v1: undefined,
  })

  const useTransformToCosmos: UseTransformToCosmos<GovernanceVoteData> = () =>
    useCallback(({ chainId, proposalId, vote, v1 }) => {
      if (v1 === undefined) {
        throw new Error(t('error.detectingGovVersionTryAgain'))
      }

      return maybeMakePolytoneExecuteMessage(
        currentChainId,
        chainId,
        makeStargateMessage({
          stargate: {
            typeUrl: v1 ? MsgVoteV1.typeUrl : MsgVoteV1Beta1.typeUrl,
            value: {
              proposalId: BigInt(proposalId || -1),
              voter: getChainAddressForActionOptions(options, chainId),
              option: vote,
              // Metadata only exists in v1.
              ...(v1 && {
                metadata: '',
              }),
            },
          },
        })
      )
    }, [])

  const useDecodedCosmosMsg: UseDecodedCosmosMsg<GovernanceVoteData> = (
    msg: Record<string, any>
  ) => {
    let chainId = currentChainId
    const decodedPolytone = decodePolytoneExecuteMsg(chainId, msg)
    if (decodedPolytone.match) {
      chainId = decodedPolytone.chainId
      msg = decodedPolytone.msg
    }

    return isDecodedStargateMsg(msg) &&
      objectMatchesStructure(msg.stargate.value, {
        proposalId: {},
        voter: {},
        option: {},
      }) &&
      // If vote Stargate message.
      (msg.stargate.typeUrl === MsgVoteV1Beta1.typeUrl ||
        msg.stargate.typeUrl === MsgVoteV1.typeUrl)
      ? {
          match: true,
          data: {
            chainId,
            proposalId: msg.stargate.value.proposalId.toString(),
            vote: msg.stargate.value.option,
            v1: msg.stargate.typeUrl === MsgVoteV1.typeUrl,
          },
        }
      : // If vote gov CosmWasm message.
      objectMatchesStructure(msg, {
          gov: {
            vote: {
              proposal_id: {},
              vote: {},
            },
          },
        })
      ? {
          match: true,
          data: {
            chainId,
            proposalId: msg.gov.vote.proposal_id.toString(),
            vote: cwVoteOptionToGovVoteOption(msg.gov.vote.vote),
            // Can't detect and doesn't matter here if already created.
            v1: undefined,
          },
        }
      : {
          match: false,
        }
  }

  return {
    key: ActionKey.GovernanceVote,
    Icon: BallotDepositEmoji,
    label: t('title.voteOnGovernanceProposal'),
    description: t('info.voteOnGovernanceProposalDescription'),
    Component,
    useDefaults,
    useTransformToCosmos,
    useDecodedCosmosMsg,
  }
}
