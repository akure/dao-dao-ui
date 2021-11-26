import { CosmosMsgFor_Empty_1, Cw20ExecuteMsg } from 'types/contracts/cw-plus'

export enum ProposalMessageType {
  Collect = 'collect',
  Custom = 'custom',
  IBC = 'ibc',
  Mint = 'mint',
  Spend = 'spend',
  Text = 'text',
  All = 'all',
}

export type MessageMapEntry = {
  id: string
  messageType: ProposalMessageType
  order: number
  message: CosmosMsgFor_Empty_1 | Cw20ExecuteMsg
}

export type MessageMap = { [key: string]: MessageMapEntry }

export function messageSort(a: MessageMapEntry, b: MessageMapEntry): number {
  if (a.order > b.order) {
    return 1
  } else if (a.order < b.order) {
    return -1
  }
  return 0
}
