import { ComponentType } from 'react'

export type InboxState = {
  loading: boolean
  refreshing: boolean
  items: InboxLoadedItemWithData[]
  refresh: () => void
}

export type InboxLoadedItem = {
  id: string
  timestamp: string | undefined
  chainId: string | undefined
  data: unknown
}

export enum InboxItemType {
  JoinedDao = 'joined_dao',
  ProposalCreated = 'proposal_created',
  ProposalExecuted = 'proposal_executed',
  ProposalClosed = 'proposal_closed',
}

export type InboxItemTypeJoinedDaoData = {
  chainId: string
  dao: string
  name: string
  imageUrl: string | undefined
}

export type InboxItemTypeProposalCreatedData = {
  chainId: string
  dao: string
  daoName: string
  imageUrl: string | undefined
  proposalId: string
  proposalTitle: string
}

export type InboxItemTypeProposalExecutedData =
  InboxItemTypeProposalCreatedData & {
    failed: boolean
    // Winning option for a multiple choice proposal.
    winningOption?: string
  }

export type InboxItemTypeProposalClosedData = InboxItemTypeProposalCreatedData

// Items from the inbox API.
export type InboxLoadedItemWithData = Omit<InboxLoadedItem, 'data'> &
  (
    | {
        type: InboxItemType.JoinedDao
        data: InboxItemTypeJoinedDaoData
      }
    | {
        type: InboxItemType.ProposalCreated
        data: InboxItemTypeProposalCreatedData
      }
    | {
        type: InboxItemType.ProposalExecuted
        data: InboxItemTypeProposalExecutedData
      }
    | {
        type: InboxItemType.ProposalClosed
        data: InboxItemTypeProposalClosedData
      }
  )

export enum InboxItemTypeMethod {
  Website = 1 << 0,
  Email = 1 << 1,
  Push = 1 << 2,
}

export type InboxItemTypeMethodData = {
  method: InboxItemTypeMethod
  i18nKey: string
  Icon: ComponentType<{ className?: string }>
}

export type InboxItemRendererProps<Data extends unknown> = {
  item: InboxLoadedItemWithData
  data: Data
  clear: () => Promise<boolean>
}

export type InboxMainItemRendererProps = {
  item: InboxLoadedItemWithData
}

export type InboxUpdateConfig = {
  // Update email. If empty or null, remove email.
  email?: string | null
  // Update notification settings per-type.
  types?: Record<string, number | null>
  // If present, verify email.
  verify?: string
  // If present, resend verification email.
  resend?: boolean
  // If present, update push settings.
  push?:
    | {
        // Add subscription.
        type: 'subscribe'
        subscription: any
      }
    | {
        // Check if subscribed or unsubscribe.
        type: 'check' | 'unsubscribe'
        p256dh: string
      }
    | {
        // Unsubscribe all subscriptions.
        type: 'unsubscribe_all'
      }
}

export type PushSubscriptionManager = {
  ready: boolean
  supported: boolean
  updating: boolean
  subscribed: boolean
  subscription: PushSubscription | undefined
  subscribe: () => Promise<void>
  unsubscribe: () => Promise<void>
  unsubscribeAll: () => Promise<void>
}

export type InboxConfig = {
  email: string | null
  verified: boolean
  types: Record<string, number | null>
  // Number of registered push subscriptions.
  pushSubscriptions: number
  // If `push` is defined in the body, returns whether or not the push is now
  // subscribed.
  pushSubscribed?: boolean
  // Allowed methods per type.
  typeAllowedMethods: Record<InboxItemType, InboxItemTypeMethod[]>
}

export type InboxApi = {
  ready: boolean
  updating: boolean
  clear: (idOrIds: string | string[]) => Promise<boolean>
  loadConfig: () => Promise<boolean>
  updateConfig: (
    data: InboxUpdateConfig,
    signatureType?: string
  ) => Promise<boolean>
  resendVerificationEmail: () => Promise<boolean>
  verify: (code: string) => Promise<boolean>
  config: InboxConfig | undefined
  push: PushSubscriptionManager
}

export enum InboxPageSlug {
  Settings = 'settings',
  Verify = 'verify',
}
