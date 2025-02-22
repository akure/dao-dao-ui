import { Coin } from '@cosmjs/amino'

import {
  DaoCreationVotingConfigWithActiveThreshold,
  DurationWithUnits,
  GenericToken,
  NewDaoTier,
} from '@dao-dao/types'

export enum GovernanceTokenType {
  New,
  Existing,
}

export type CreatorData = {
  tiers: NewDaoTier[]
  // For custom errors.
  _tiersError?: undefined
  tokenType: GovernanceTokenType
  newInfo: {
    initialSupply: number
    initialTreasuryPercent: number
    imageUrl?: string
    symbol: string
    name: string
  }
  existingTokenDenom: string
  existingToken?: GenericToken & {
    _error?: undefined
  }
  existingTokenSupply?: string
  unstakingDuration: DurationWithUnits
  // If token factory denom requires a creation fee, this should be set.
  tokenFactoryDenomCreationFee?: Coin[]
} & DaoCreationVotingConfigWithActiveThreshold
