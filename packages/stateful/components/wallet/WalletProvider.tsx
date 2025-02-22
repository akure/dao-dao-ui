import { wallets as coin98Wallets } from '@cosmos-kit/coin98'
import { wallets as compassWallets } from '@cosmos-kit/compass'
import { Endpoints, SignerOptions } from '@cosmos-kit/core'
import { wallets as cosmosExtensionMetamaskWallets } from '@cosmos-kit/cosmos-extension-metamask'
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation'
import { wallets as exodusWallets } from '@cosmos-kit/exodus'
import { wallets as finWallets } from '@cosmos-kit/fin'
import { wallets as frontierWallets } from '@cosmos-kit/frontier'
import { wallets as keplrExtensionWallets } from '@cosmos-kit/keplr-extension'
import { wallets as keplrMobileWallets } from '@cosmos-kit/keplr-mobile'
import { wallets as leapWallets } from '@cosmos-kit/leap'
import { wallets as leapMetamaskWallets } from '@cosmos-kit/leap-metamask-cosmos-snap'
import { wallets as okxWallets } from '@cosmos-kit/okxwallet'
import { wallets as omniWallets } from '@cosmos-kit/omni'
import { ChainProvider } from '@cosmos-kit/react-lite'
import { wallets as shellWallets } from '@cosmos-kit/shell'
import { wallets as stationWallets } from '@cosmos-kit/station'
import { wallets as trustWallets } from '@cosmos-kit/trust'
import { wallets as vectisWallets } from '@cosmos-kit/vectis'
import { PromptSign, makeWeb3AuthWallets } from '@cosmos-kit/web3auth'
import { wallets as xdefiWallets } from '@cosmos-kit/xdefi'
import { assets, chains } from 'chain-registry'
import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilState, useRecoilValue } from 'recoil'

import {
  isKeplrMobileWebAtom,
  mountedInBrowserAtom,
} from '@dao-dao/state/recoil'
import { Web3AuthPrompt } from '@dao-dao/types'
import {
  CHAIN_ENDPOINTS,
  MAINNET,
  SITE_URL,
  WEB3AUTH_CLIENT_ID,
  getChainForChainId,
  getSignerOptions,
} from '@dao-dao/utils'

import { WalletUi } from '.'
import { useSyncWalletSigner, useWallet } from '../../hooks'

// Set better name for MetaMask wallets.
leapMetamaskWallets[0].walletInfo.prettyName = 'MetaMask (Leap Snap)'
cosmosExtensionMetamaskWallets[0].walletInfo.prettyName =
  'MetaMask (Cosmos Extension)'

export type WalletProviderProps = {
  // This needs to be provided by the parent component and then passed to the
  // AppContext that wraps the app. Since the AppContext uses the inbox which
  // depends on the wallet, we need to pass the setter to the wallet provider so
  // that the value can be passed to the AppContext, used by the
  // Web3AuthPromptModal in the respective app layout (DappLayout or SdaLayout).
  setWeb3AuthPrompt: Dispatch<SetStateAction<Web3AuthPrompt | undefined>>
  children: ReactNode
}

export const WalletProvider = ({
  setWeb3AuthPrompt,
  children,
}: WalletProviderProps) => {
  const { t } = useTranslation()

  // Google, Apple, Discord, Twitter
  const web3AuthWallets = useMemo(
    () =>
      makeWeb3AuthWallets({
        loginMethods: [
          {
            provider: 'google',
            name: 'Google',
            logo: 'https://bafkreihcbb7vqxb3ee52kn5fnsf4rzqtjru5n6q2k4ungbw7k3ljpnhhvm.ipfs.nftstorage.link/',
          },
          {
            provider: 'apple',
            name: 'Apple',
            logo: 'https://bafkreih5fbwcnzq4xmarrgcf5wkr5mpx5gfia2loj5fruaa542v7kwv5iq.ipfs.nftstorage.link/',
          },
          {
            provider: 'discord',
            name: 'Discord',
            logo: 'https://bafkreifssoo7ljepiix4tvrpe4gbqlyhwx6vu6rtir4ou45pj7nv5mjnhm.ipfs.nftstorage.link/',
          },
          {
            provider: 'twitter',
            name: 'Twitter',
            logo: 'https://bafkreibfs3mpmwmaxqakpkpss7pjoe4tl2td3ghxt2mi75pyvrm47qn4jy.ipfs.nftstorage.link/',
          },
        ],
        client: {
          clientId: WEB3AUTH_CLIENT_ID,
          web3AuthNetwork: MAINNET ? 'cyan' : 'testnet',
        },
        promptSign: (...params: Parameters<PromptSign>): Promise<boolean> =>
          new Promise((resolve) =>
            setWeb3AuthPrompt({
              signData: params[1],
              resolve: (approved) => {
                setWeb3AuthPrompt(undefined)
                resolve(approved)
              },
            })
          ),
      }),
    [setWeb3AuthPrompt]
  )

  const signerOptions: SignerOptions = {
    // cosmos-kit has an older version of the package. This is a workaround.
    signingStargate: getSignerOptions as any,
    // cosmos-kit has an older version of the package. This is a workaround.
    signingCosmwasm: getSignerOptions as any,
  }

  // Auto-connect to Keplr mobile web if in that context.
  const mountedInBrowser = useRecoilValue(mountedInBrowserAtom)
  const [isKeplrMobileWeb, setIsKeplrMobileWeb] =
    useRecoilState(isKeplrMobileWebAtom)
  useEffect(() => {
    if (!mountedInBrowser) {
      return
    }

    ;(async () => {
      setIsKeplrMobileWeb(
        (await (await import('@keplr-wallet/stores')).getKeplrFromWindow())
          ?.mode === 'mobile-web'
      )
    })()
  }, [mountedInBrowser, setIsKeplrMobileWeb])

  const allWallets = [
    ...leapMetamaskWallets,
    // Alphabetize.
    ...[
      ...keplrExtensionWallets,
      // Only allow Keplr Mobile on mainnet since it can't use testnet.
      ...(MAINNET ? keplrMobileWallets : []),
      ...leapWallets.filter((w) => !leapMetamaskWallets.includes(w)),
      ...stationWallets,
      ...vectisWallets,
      ...trustWallets,
      ...cosmostationWallets,
      ...coin98Wallets,
      ...omniWallets,
      ...shellWallets,
      ...xdefiWallets,
      ...okxWallets,
      ...finWallets,
      ...compassWallets,
      ...frontierWallets,
      ...cosmosExtensionMetamaskWallets,
      ...exodusWallets,
    ].sort((a, b) =>
      a.walletInfo.prettyName.localeCompare(b.walletInfo.prettyName)
    ),
    // Google, Apple, Discord, Twitter
    ...web3AuthWallets,
  ]

  return (
    <ChainProvider
      assetLists={assets}
      chains={chains}
      endpointOptions={{
        // Disable endpoint validation.
        isLazy: true,
        // Load all custom chain endpoints into wallet provider.
        endpoints: Object.entries(CHAIN_ENDPOINTS).reduce(
          (acc, [chainId, { rpc, rest }]) => ({
            ...acc,
            [getChainForChainId(chainId).chain_name]: {
              rpc: [rpc],
              rest: [rest],
            },
          }),
          {} as Record<string, Endpoints>
        ),
      }}
      signerOptions={signerOptions}
      walletConnectOptions={{
        signClient: {
          // https://cloud.walletconnect.com
          projectId: '2021db728d55be8401efaf25f4e534cd',
          relayUrl: 'wss://relay.walletconnect.org',
          metadata: {
            name: t('meta.title'),
            description: t('meta.description'),
            url: SITE_URL,
            icons: ['https://daodao.zone/daodao.png'],
          },
        },
      }}
      walletModal={WalletUi}
      wallets={
        // If Keplr Mobile in-app browser, only allow Keplr Extension. Keplr
        // Mobile wallet works via WalletConnect from a desktop, but not in-app.
        isKeplrMobileWeb ? keplrExtensionWallets : allWallets
      }
    >
      <InnerWalletProvider>{children}</InnerWalletProvider>
    </ChainProvider>
  )
}

const InnerWalletProvider = ({ children }: PropsWithChildren<{}>) => {
  useSyncWalletSigner()

  const { isWalletConnected, isWalletDisconnected, walletRepo, wallet } =
    useWallet()

  // Refresh connection on wallet change.
  useEffect(() => {
    if (typeof window === 'undefined' || !isWalletConnected || !wallet) {
      return
    }

    const refresh = async () => {
      // Ensure connection still alive, and disconnect on failure.
      try {
        await walletRepo.connect(wallet.name)
      } catch {
        await walletRepo.disconnect(wallet.name).catch(console.error)
      }
    }

    wallet.connectEventNamesOnWindow?.forEach((eventName) => {
      window.addEventListener(eventName, refresh)
    })

    // Clean up on unmount.
    return () => {
      wallet.connectEventNamesOnWindow?.forEach((eventName) => {
        window.removeEventListener(eventName, refresh)
      })
    }
  }, [isWalletConnected, wallet, walletRepo])

  // Auto-connect to Keplr mobile web if in that context.
  const isKeplrMobileWeb = useRecoilValue(isKeplrMobileWebAtom)
  useEffect(() => {
    if (!isKeplrMobileWeb || !isWalletDisconnected) {
      return
    }

    walletRepo.connect(keplrExtensionWallets[0].walletName)
  }, [isKeplrMobileWeb, isWalletDisconnected, walletRepo])

  return <>{children}</>
}
