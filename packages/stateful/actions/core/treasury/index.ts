import { ActionCategoryKey, ActionCategoryMaker } from '@dao-dao/types'

import { makeCommunityPoolDepositAction } from './CommunityPoolDeposit'
import { makeCommunityPoolTransferAction } from './CommunityPoolTransfer'
import { makeEnableRetroactiveCompensationAction } from './EnableRetroactiveCompensation'
import { makeEnableVestingPaymentsAction } from './EnableVestingPayments'
import { makeManageCw20Action } from './ManageCw20'
import { makeManageStakingAction } from './ManageStaking'
import { makeSpendAction } from './Spend'
import {
  makePerformTokenSwapAction,
  makeWithdrawTokenSwapAction,
} from './token_swap'

export const makeTreasuryActionCategory: ActionCategoryMaker = ({
  t,
  context,
}) => ({
  key: ActionCategoryKey.Treasury,
  label: t('actionCategory.treasuryLabel', {
    context: context.type,
  }),
  description: t('actionCategory.treasuryDescription', {
    context: context.type,
  }),
  actionMakers: [
    makeSpendAction,
    makeManageStakingAction,
    makeManageCw20Action,
    makePerformTokenSwapAction,
    makeWithdrawTokenSwapAction,
    makeEnableVestingPaymentsAction,
    makeEnableRetroactiveCompensationAction,
    makeCommunityPoolTransferAction,
    makeCommunityPoolDepositAction,
  ],
})
