import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import {
  averageColorSelector,
  updateProfileNftVisibleAtom,
  walletChainIdAtom,
} from '@dao-dao/state/recoil'
import {
  ChainProvider,
  Loader,
  LogInRequiredPage,
  Me as StatelessMe,
  useCachedLoadable,
  useThemeContext,
} from '@dao-dao/stateless'
import { Theme } from '@dao-dao/types'
import { SITE_URL, transformBech32Address } from '@dao-dao/utils'

import { WalletActionsProvider } from '../../actions/react/provider'
import { useWallet } from '../../hooks/useWallet'
import { useWalletInfo } from '../../hooks/useWalletInfo'
import { AllConfiguredChainSwitcher } from '../ChainSwitcher'
import { ConnectWallet } from '../ConnectWallet'
import { ProfileDisconnectedCard, ProfileHomeCard } from '../profile'
import { SuspenseLoader } from '../SuspenseLoader'
import { MeBalances } from './MeBalances'
import { MeDaos } from './MeDaos'
import { MeTransactionBuilder } from './MeTransactionBuilder'

export const Me: NextPage = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const {
    address: walletAddress = '',
    isWalletConnected,
    isWalletConnecting,
  } = useWallet()
  const { walletProfileData: profileData, updateProfileName } = useWalletInfo()

  const chainId = useRecoilValue(walletChainIdAtom)

  const { setAccentColor, theme } = useThemeContext()
  // Get average color of image URL.
  const averageImgColorLoadable = useCachedLoadable(
    profileData.loading
      ? undefined
      : averageColorSelector(profileData.profile.imageUrl)
  )

  const setUpdateProfileNftVisible = useSetRecoilState(
    updateProfileNftVisibleAtom
  )

  // Set theme's accentColor.
  useEffect(() => {
    if (router.isFallback || averageImgColorLoadable.state !== 'hasValue') {
      return
    }

    const accentColor = averageImgColorLoadable.contents

    // Only set the accent color if we have enough contrast.
    if (accentColor) {
      const rgb = accentColor
        .replace(/^rgba?\(|\s+|\)$/g, '')
        .split(',')
        .map(Number)
      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
      if (
        (theme === Theme.Dark && brightness < 100) ||
        (theme === Theme.Light && brightness > 255 - 100)
      ) {
        setAccentColor(undefined)
        return
      }
    }

    setAccentColor(accentColor ?? undefined)
  }, [
    setAccentColor,
    router.isFallback,
    theme,
    averageImgColorLoadable.state,
    averageImgColorLoadable.contents,
  ])

  return (
    <>
      <NextSeo
        description={t('info.meDescription')}
        openGraph={{
          url: SITE_URL + router.asPath,
          title: t('title.me'),
          description: t('info.meDescription'),
        }}
        title={t('title.me')}
      />

      {isWalletConnected ? (
        // Refresh all children when chain changes since state varies by chain.
        <ChainProvider key={chainId} chainId={chainId}>
          <WalletActionsProvider
            address={
              // Convert address to prevent blink on chain switch.
              walletAddress
                ? transformBech32Address(walletAddress, chainId)
                : undefined
            }
          >
            {/* Suspend to prevent hydration error since we load state on first render from localStorage. */}
            <SuspenseLoader fallback={<Loader />}>
              <StatelessMe
                ChainSwitcher={AllConfiguredChainSwitcher}
                MeBalances={MeBalances}
                MeDaos={MeDaos}
                MeTransactionBuilder={MeTransactionBuilder}
                openProfileNftUpdate={() => setUpdateProfileNftVisible(true)}
                profileData={profileData}
                rightSidebarContent={<ProfileHomeCard />}
                updateProfileName={updateProfileName}
              />
            </SuspenseLoader>
          </WalletActionsProvider>
        </ChainProvider>
      ) : (
        <LogInRequiredPage
          connectWalletButton={<ConnectWallet />}
          connecting={isWalletConnecting}
          rightSidebarContent={<ProfileDisconnectedCard />}
          title={t('title.me')}
        />
      )}
    </>
  )
}
