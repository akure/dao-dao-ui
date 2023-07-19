import { useWallet } from '@noahsaso/cosmodal'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import { ActionComponent, ActionContextType, ActionKey } from '@dao-dao/types'
import { CHAIN_GAS_MULTIPLIER, processError } from '@dao-dao/utils'

import { AddressInput } from '../../../../components'
import { useActionOptions } from '../../../react'
import { InstantiateNftCollection as StatelessInstantiateNftCollection } from './stateless/InstantiateNftCollection'

export const InstantiateNftCollection: ActionComponent = (props) => {
  const { t } = useTranslation()
  const { watch, setValue } = useFormContext()
  const {
    context,
    chainContext: {
      chainId,
      config: { codeIds },
    },
  } = useActionOptions()
  const { address: walletAddress, signingCosmWasmClient } = useWallet(chainId)

  const [instantiating, setInstantiating] = useState(false)

  const instantiateMsg = watch(props.fieldNamePrefix + 'instantiateMsg')

  const onInstantiate = async () => {
    if (!instantiateMsg) {
      toast.error(t('error.loadingData'))
      return
    }

    if (!signingCosmWasmClient || !walletAddress) {
      toast.error(t('error.logInToContinue'))
      return
    }

    setInstantiating(true)
    try {
      const { contractAddress } = await signingCosmWasmClient.instantiate(
        walletAddress,
        codeIds.Cw721Base,
        instantiateMsg,
        'NFT Collection',
        CHAIN_GAS_MULTIPLIER
      )

      // Update action form data with address.
      setValue(props.fieldNamePrefix + 'collectionAddress', contractAddress, {
        shouldValidate: true,
      })
      // Indicate that contract is ready.
      setValue(props.fieldNamePrefix + 'contractChosen', true, {
        shouldValidate: true,
      })
      // Display success.
      toast.success(t('success.nftCollectionContractInstantiated'))

      // Add display NFT action if in a DAO.
      if (props.isCreating && context.type === ActionContextType.Dao) {
        props.addAction({
          actionKey: ActionKey.ManageCw721,
          data: {
            adding: true,
            address: contractAddress,
          },
        })
      }
    } catch (err) {
      console.error(err)
      toast.error(processError(err))
    }
  }

  return (
    <StatelessInstantiateNftCollection
      {...props}
      options={{
        instantiating,
        onInstantiate,
        AddressInput,
      }}
    />
  )
}
