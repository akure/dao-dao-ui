import { useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { constSelector, useRecoilValueLoadable } from 'recoil'

import { DaoCoreV2Selectors, walletAdminOfDaosSelector } from '@dao-dao/state'
import { JoystickEmoji, useCachedLoadable } from '@dao-dao/stateless'
import {
  ActionChainContextType,
  ActionComponent,
  ActionContextType,
  ActionKey,
  ActionMaker,
  UseDecodedCosmosMsg,
  UseDefaults,
  UseTransformToCosmos,
} from '@dao-dao/types'
import {
  isValidBech32Address,
  makeWasmMessage,
  objectMatchesStructure,
} from '@dao-dao/utils'

import {
  AddressInput,
  DaoProviders,
  EntityDisplay,
  SuspenseLoader,
} from '../../../../components'
import { daoInfoSelector } from '../../../../recoil'
import {
  useActionOptions,
  useActionsForMatching,
  useLoadedActionsAndCategories,
} from '../../../react'
import {
  DaoAdminExecData,
  DaoAdminExecOptions,
  DaoAdminExecComponent as StatelessDaoAdminExecComponent,
} from './Component'

const useDefaults: UseDefaults<DaoAdminExecData> = () => ({
  coreAddress: '',
  msgs: [],
})

type InnerOptions = Pick<DaoAdminExecOptions, 'childDaos'>

const InnerComponentLoading: ActionComponent<InnerOptions> = (props) => (
  <StatelessDaoAdminExecComponent
    {...props}
    options={{
      categories: [],
      loadedActions: {},
      actionsForMatching: [],
      childDaos: props.options.childDaos,
      AddressInput,
      EntityDisplay,
      SuspenseLoader,
    }}
  />
)

const InnerComponent: ActionComponent<InnerOptions> = (props) => {
  const { categories, loadedActions } = useLoadedActionsAndCategories({
    isCreating: props.isCreating,
  })
  const actionsForMatching = useActionsForMatching()

  return (
    <StatelessDaoAdminExecComponent
      {...props}
      options={{
        categories,
        loadedActions,
        actionsForMatching,
        childDaos: props.options.childDaos,
        AddressInput,
        EntityDisplay,
        SuspenseLoader,
      }}
    />
  )
}

const Component: ActionComponent = (props) => {
  const {
    context,
    address,
    chain: { chain_id: chainId, bech32_prefix: bech32Prefix },
  } = useActionOptions()

  // Load DAO info for chosen DAO.
  const { watch, setValue, clearErrors } = useFormContext<DaoAdminExecData>()
  const coreAddress = watch(
    (props.fieldNamePrefix + 'coreAddress') as 'coreAddress'
  )

  // Reset actions when core address changes during creation.
  useEffect(() => {
    if (props.isCreating) {
      setValue((props.fieldNamePrefix + 'msgs') as 'msgs', [])
      clearErrors((props.fieldNamePrefix + 'msgs') as 'msgs')
      setValue(
        (props.fieldNamePrefix + '_actionData') as '_actionData',
        undefined
      )
      clearErrors((props.fieldNamePrefix + '_actionData') as '_actionData')
    }
  }, [
    clearErrors,
    coreAddress,
    props.fieldNamePrefix,
    props.isCreating,
    setValue,
  ])

  const daoSubDaosLoadable = useCachedLoadable(
    context.type === ActionContextType.Dao
      ? DaoCoreV2Selectors.listAllSubDaosSelector({
          contractAddress: address,
          chainId,
          // We only care about the SubDAOs this DAO has admin powers over.
          onlyAdmin: true,
        })
      : undefined
  )
  const walletAdminOfDaosLoadable = useCachedLoadable(
    context.type === ActionContextType.Wallet ||
      context.type === ActionContextType.Gov
      ? walletAdminOfDaosSelector({
          chainId,
          walletAddress: address,
        })
      : undefined
  )
  const childDaosLoadable =
    context.type === ActionContextType.Dao
      ? daoSubDaosLoadable
      : walletAdminOfDaosLoadable

  const daoInfoLoadable = useRecoilValueLoadable(
    coreAddress && isValidBech32Address(coreAddress, bech32Prefix)
      ? daoInfoSelector({
          coreAddress,
          chainId,
        })
      : constSelector(undefined)
  )

  const options: InnerOptions = {
    childDaos:
      childDaosLoadable.state === 'hasValue'
        ? {
            loading: false,
            data: childDaosLoadable.contents.map((dao) =>
              typeof dao === 'string' ? dao : dao.addr
            ),
          }
        : { loading: true },
  }

  return daoInfoLoadable.state === 'hasValue' && !!daoInfoLoadable.contents ? (
    <SuspenseLoader
      fallback={<InnerComponentLoading {...props} options={options} />}
    >
      <DaoProviders info={daoInfoLoadable.contents}>
        <InnerComponent {...props} options={options} />
      </DaoProviders>
    </SuspenseLoader>
  ) : (
    <InnerComponentLoading {...props} options={options} />
  )
}

const useTransformToCosmos: UseTransformToCosmos<DaoAdminExecData> = () =>
  useCallback(
    ({ coreAddress, msgs }) =>
      makeWasmMessage({
        wasm: {
          execute: {
            contract_addr: coreAddress,
            funds: [],
            msg: {
              execute_admin_msgs: {
                msgs,
              },
            },
          },
        },
      }),
    []
  )

const useDecodedCosmosMsg: UseDecodedCosmosMsg<DaoAdminExecData> = (
  msg: Record<string, any>
) =>
  objectMatchesStructure(msg, {
    wasm: {
      execute: {
        contract_addr: {},
        funds: {},
        msg: {
          execute_admin_msgs: {
            msgs: {},
          },
        },
      },
    },
  })
    ? {
        match: true,
        data: {
          coreAddress: msg.wasm.execute.contract_addr,
          msgs: msg.wasm.execute.msg.execute_admin_msgs.msgs,
        },
      }
    : {
        match: false,
      }

export const makeDaoAdminExecAction: ActionMaker<DaoAdminExecData> = ({
  t,
  context,
  chainContext,
}) =>
  // Only allow using this action in DAOs or gov props on chains with CW.
  context.type === ActionContextType.Dao ||
  (context.type === ActionContextType.Gov &&
    chainContext.type !== ActionChainContextType.Any &&
    !chainContext.config.noCosmWasm)
    ? {
        key: ActionKey.DaoAdminExec,
        Icon: JoystickEmoji,
        label: t('title.daoAdminExec'),
        description: t('info.daoAdminExecDescription'),
        Component,
        useDefaults,
        useTransformToCosmos,
        useDecodedCosmosMsg,
      }
    : null
