import { HowToVoteRounded } from '@mui/icons-material'
import clsx from 'clsx'
import { ComponentType, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../buttons'
import { DropdownIconButton } from '../icon_buttons'
import { Loader } from '../logo/Loader'
import { NoContent } from '../NoContent'

export interface ProposalListProps<T extends { proposalId: string }> {
  ProposalLine: ComponentType<T>
  openProposals: T[]
  historyProposals: T[]
  // Override array length as count.
  historyCount?: number
  createNewProposalHref: string
  canLoadMore: boolean
  loadMore: () => void
  loadingMore: boolean
  isMember: boolean
  DiscordNotifierConfigureModal: ComponentType | undefined
}

export const ProposalList = <T extends { proposalId: string }>({
  ProposalLine,
  openProposals,
  historyProposals,
  historyCount,
  createNewProposalHref,
  canLoadMore,
  loadMore,
  loadingMore,
  isMember,
  DiscordNotifierConfigureModal,
}: ProposalListProps<T>) => {
  const { t } = useTranslation()

  const [historyExpanded, setHistoryExpanded] = useState(true)

  return openProposals.length > 0 || historyProposals.length > 0 ? (
    <div className="border-t border-border-secondary py-6">
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <p className="title-text text-text-body">{t('title.proposals')}</p>

        {DiscordNotifierConfigureModal && <DiscordNotifierConfigureModal />}
      </div>

      {!!openProposals.length && (
        <div className="mb-9 space-y-1">
          {openProposals.map((props) => (
            <ProposalLine {...props} key={props.proposalId} />
          ))}
        </div>
      )}

      <div className="link-text mt-3 ml-2 flex flex-row items-center gap-3 text-text-secondary">
        <DropdownIconButton
          className="text-icon-primary"
          open={historyExpanded}
          toggle={() => setHistoryExpanded((e) => !e)}
        />

        <p>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          {t('title.history')} •{' '}
          {t('title.numProposals', {
            count: historyCount ?? historyProposals.length,
          })}
        </p>
      </div>

      <div className={clsx(!historyExpanded && 'hidden')}>
        <div className="mt-6 space-y-1">
          {historyProposals.map((props) => (
            <ProposalLine {...props} key={props.proposalId} />
          ))}
        </div>

        {(canLoadMore || loadingMore) && (
          <div className="mt-4 flex flex-row justify-end">
            <Button
              className="secondary"
              loading={loadingMore}
              onClick={loadMore}
            >
              {t('button.loadMore')}
            </Button>
          </div>
        )}
      </div>
    </div>
  ) : // If loading but no proposals are loaded yet, just show loader.
  loadingMore ? (
    <div className="border-t border-border-secondary pt-6">
      <Loader fill={false} />
    </div>
  ) : (
    <NoContent
      Icon={HowToVoteRounded}
      actionNudge={t('info.createFirstOneQuestion')}
      body={t('info.noProposalsYet')}
      buttonLabel={t('button.newProposal')}
      href={isMember ? createNewProposalHref : undefined}
    />
  )
}
