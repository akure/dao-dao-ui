import { useMemo } from 'react'
import { useSetRecoilState, waitForAll } from 'recoil'

import { updateProfileNftVisibleAtom } from '@dao-dao/state/recoil'
import {
  Loader,
  ProfileCantVoteCard,
  ProfileVoteCard,
  useCachedLoadable,
  useChain,
  useDaoInfoContext,
} from '@dao-dao/stateless'
import { CheckedDepositInfo } from '@dao-dao/types/contracts/common'

import { useMembership, useWalletInfo } from '../../hooks'
import {
  matchAndLoadCommon,
  useProposalModuleAdapter,
} from '../../proposal-module-adapter'
import { useVotingModuleAdapter } from '../../voting-module-adapter'
import { SuspenseLoader } from '../SuspenseLoader'

export interface ProfileProposalCardProps {
  onVoteSuccess: () => void | Promise<void>
}

export const ProfileProposalCard = () => {
  const chain = useChain()
  const { coreAddress, name: daoName, proposalModules } = useDaoInfoContext()
  const { walletProfileData, updateProfileName } = useWalletInfo()
  const setUpdateProfileNftVisible = useSetRecoilState(
    updateProfileNftVisibleAtom
  )

  const {
    hooks: { useLoadingWalletVoteInfo },
    components: { ProposalWalletVote },
  } = useProposalModuleAdapter()

  const {
    components: { ProfileCardMemberInfo },
    hooks: { useCommonGovernanceTokenInfo },
  } = useVotingModuleAdapter()

  const depositInfoSelectors = useMemo(
    () =>
      proposalModules.map(
        (proposalModule) =>
          matchAndLoadCommon(proposalModule, {
            chain,
            coreAddress,
          }).selectors.depositInfo
      ),
    [chain, coreAddress, proposalModules]
  )
  const proposalModuleDepositInfosLoadable = useCachedLoadable(
    waitForAll(depositInfoSelectors)
  )

  const { denomOrAddress: governanceDenomOrAddress } =
    useCommonGovernanceTokenInfo?.() ?? {}

  // Get max deposit of governance token across all proposal modules.
  const maxGovernanceTokenProposalModuleDeposit =
    proposalModuleDepositInfosLoadable.state !== 'hasValue'
      ? 0
      : Math.max(
          ...proposalModuleDepositInfosLoadable.contents
            .filter(
              (depositInfo): depositInfo is CheckedDepositInfo =>
                !!depositInfo &&
                ('cw20' in depositInfo.denom
                  ? depositInfo.denom.cw20
                  : depositInfo.denom.native) === governanceDenomOrAddress
            )
            .map(({ amount }) => Number(amount)),
          0
        )

  // If wallet is a member right now as opposed to when the proposal was open.
  // Relevant for showing them membership join info or not.
  const { isMember = false } = useMembership({
    coreAddress,
  })

  const loadingWalletVoteInfo = useLoadingWalletVoteInfo()

  // This card should only display when a wallet is connected. The wallet vote
  // info hook returns undefined when there is no wallet connected. If we are
  // here and there is no wallet connected, something is probably just loading,
  // maybe the wallet is reconnecting.
  if (!loadingWalletVoteInfo || loadingWalletVoteInfo.loading) {
    return null
  }

  const { vote, couldVote, canVote, votingPowerPercent } =
    loadingWalletVoteInfo.data

  const commonProps = {
    votingPower: votingPowerPercent,
    daoName,
    walletProfileData,
    showUpdateProfileNft: () => setUpdateProfileNftVisible(true),
    updateProfileName,
  }

  return couldVote ? (
    <ProfileVoteCard
      {...commonProps}
      vote={
        <ProposalWalletVote
          fallback={
            // If they can vote, fallback to pending to indicate that they still
            // have to vote.
            canVote ? 'pending' : 'hasNoVote'
          }
          vote={vote}
        />
      }
    />
  ) : (
    <ProfileCantVoteCard
      {...commonProps}
      isMember={isMember}
      membershipInfo={
        <SuspenseLoader fallback={<Loader size={24} />}>
          <ProfileCardMemberInfo
            cantVoteOnProposal
            maxGovernanceTokenDeposit={
              maxGovernanceTokenProposalModuleDeposit > 0
                ? maxGovernanceTokenProposalModuleDeposit.toString()
                : undefined
            }
          />
        </SuspenseLoader>
      }
    />
  )
}
