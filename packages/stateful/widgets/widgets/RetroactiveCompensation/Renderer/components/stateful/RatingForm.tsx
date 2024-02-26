import { fromBase64, toHex } from '@cosmjs/encoding'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useRecoilValue, useSetRecoilState, waitForAll } from 'recoil'

import {
  cosmWasmClientForChainSelector,
  genericTokenWithUsdPriceSelector,
} from '@dao-dao/state/recoil'
import {
  Loader,
  useCachedLoadable,
  useChain,
  useDaoInfoContext,
} from '@dao-dao/stateless'
import { TokenType } from '@dao-dao/types'

import {
  AddressInput,
  EntityDisplay,
  SuspenseLoader,
  Trans,
} from '../../../../../../components'
import { useWallet } from '../../../../../../hooks/useWallet'
import { refreshStatusAtom } from '../../atoms'
import { usePostRequest } from '../../hooks/usePostRequest'
import { statusSelector } from '../../selectors'
import { RatingsFormData } from '../../types'
import { prepareContributionFormData } from '../../utils'
import {
  ContributionRatingData,
  NominationForm,
  RatingForm as StatelessRatingForm,
} from '../stateless/RatingForm'

interface RatingFormProps {
  data: ContributionRatingData
  reloadData: () => Promise<void>
}

export const RatingForm = ({ data, reloadData }: RatingFormProps) => {
  const { t } = useTranslation()
  const { chain_id: chainId } = useChain()
  const { coreAddress } = useDaoInfoContext()
  const { hexPublicKey } = useWallet({
    loadAccount: true,
  })

  const client = useRecoilValue(cosmWasmClientForChainSelector(chainId))
  const postRequest = usePostRequest()

  const statusLoadable = useCachedLoadable(
    !hexPublicKey.loading
      ? statusSelector({
          daoAddress: coreAddress,
          walletPublicKey: hexPublicKey.data,
        })
      : undefined
  )
  const setRefreshStatus = useSetRecoilState(
    refreshStatusAtom({
      daoAddress: coreAddress,
    })
  )

  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const onSubmit = useCallback(
    async (data: RatingsFormData) => {
      setLoadingSubmit(true)

      try {
        await postRequest(`/${coreAddress}/rate`, { ...data })
        toast.success(t('success.ratingsSubmitted'))
        // Reload status on success.
        setRefreshStatus((id) => id + 1)
      } catch (err) {
        console.error(err)
        toast.error(err instanceof Error ? err.message : JSON.stringify(err))
      } finally {
        setLoadingSubmit(false)
      }
    },
    [coreAddress, postRequest, setRefreshStatus, t]
  )

  const tokenPrices = useCachedLoadable(
    statusLoadable.state === 'hasValue' && statusLoadable.contents
      ? waitForAll(
          statusLoadable.contents.survey.attributes.flatMap(
            ({ nativeTokens, cw20Tokens }) => [
              ...nativeTokens.map(({ denom }) =>
                genericTokenWithUsdPriceSelector({
                  chainId,
                  type: TokenType.Native,
                  denomOrAddress: denom,
                })
              ),
              ...cw20Tokens.map(({ address }) =>
                genericTokenWithUsdPriceSelector({
                  chainId,
                  type: TokenType.Cw20,
                  denomOrAddress: address,
                })
              ),
            ]
          )
        )
      : undefined
  )

  const [loadingNominate, setLoadingNominate] = useState(false)
  const onNominate = useCallback(
    async (formData: NominationForm) => {
      setLoadingNominate(true)

      try {
        // Get public key from address.
        const account = await client.getAccount(formData.contributor)
        if (!account?.pubkey?.value) {
          throw new Error(t('error.addressNotFoundOnChain'))
        }
        const contributorPublicKey = toHex(fromBase64(account.pubkey.value))

        // Nominate.
        await postRequest(`/${coreAddress}/nominate`, {
          ...prepareContributionFormData(formData),
          contributor: contributorPublicKey,
        })
        toast.success(t('success.nominationSubmitted'))

        // Reload data so nomination appears if data already loaded.
        if (data) {
          await reloadData()
        }
      } catch (err) {
        console.error(err)
        toast.error(err instanceof Error ? err.message : JSON.stringify(err))
      } finally {
        setLoadingNominate(false)
      }
    },
    [client, coreAddress, data, postRequest, reloadData, t]
  )

  return (
    <SuspenseLoader
      fallback={<Loader />}
      forceFallback={
        statusLoadable.state === 'loading' || tokenPrices.state === 'loading'
      }
    >
      {statusLoadable.state === 'hasValue' &&
        !!statusLoadable.contents &&
        tokenPrices.state === 'hasValue' && (
          <StatelessRatingForm
            AddressInput={AddressInput}
            EntityDisplay={EntityDisplay}
            Trans={Trans}
            data={data}
            loadingNominate={loadingNominate}
            loadingSubmit={loadingSubmit || statusLoadable.updating}
            onNominate={onNominate}
            onSubmit={onSubmit}
            status={statusLoadable.contents}
            tokenPrices={tokenPrices.contents}
          />
        )}
    </SuspenseLoader>
  )
}
