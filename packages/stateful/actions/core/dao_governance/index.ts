import { ActionCategoryKey, ActionCategoryMaker } from '@dao-dao/types'

import { makeCreateCrossChainAccountAction } from './CreateCrossChainAccount'
import { makeDaoAdminExecAction } from './DaoAdminExec'
import { makeEnableMultipleChoiceAction } from './EnableMultipleChoice'
import { makeManageStorageItemsAction } from './ManageStorageItems'
import { makeManageSubDaosAction } from './ManageSubDaos'
import { makeUpgradeV1ToV2Action } from './UpgradeV1ToV2'

export const makeDaoGovernanceActionCategory: ActionCategoryMaker = ({
  t,
  context,
}) => ({
  key: ActionCategoryKey.DaoGovernance,
  label: t('actionCategory.daoGovernanceLabel'),
  description: t('actionCategory.daoGovernanceDescription', {
    context: context.type,
  }),
  actionMakers: [
    makeEnableMultipleChoiceAction,
    makeManageSubDaosAction,
    makeManageStorageItemsAction,
    makeDaoAdminExecAction,
    makeUpgradeV1ToV2Action,
    makeCreateCrossChainAccountAction,
  ],
})
