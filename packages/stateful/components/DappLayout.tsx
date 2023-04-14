import { WalletConnectionStatus, useWalletManager } from '@noahsaso/cosmodal'
import { useRouter } from 'next/router'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import {
  constSelector,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil'

import {
  betaWarningAcceptedAtom,
  commandModalVisibleAtom,
  installWarningVisibleAtom,
  mountedInBrowserAtom,
  navigationCompactAtom,
  noKeplrAccountAtom,
  proposalCreatedCardPropsAtom,
  refreshBlockHeightAtom,
  refreshTokenUsdcPriceAtom,
} from '@dao-dao/state'
import {
  BetaWarningModal,
  DaoCreatedModal,
  InstallKeplrModal,
  NoKeplrAccountModal,
  ProposalCreatedModal,
  DappLayout as StatelessDappLayout,
  useAppContext,
  useCachedLoading,
  usePlatform,
} from '@dao-dao/stateless'

import { CommandModal } from '../command'
import { useFollowingDaos, useWalletInfo } from '../hooks'
import {
  daoCreatedCardPropsAtom,
  followingDaoDropdownInfosSelector,
  walletTokenCardInfosSelector,
} from '../recoil'
import { ConnectWallet } from './ConnectWallet'
import { IconButtonLink } from './IconButtonLink'
import { LinkWrapper } from './LinkWrapper'
import { PfpkNftSelectionModal } from './PfpkNftSelectionModal'
import { SidebarWallet } from './SidebarWallet'
import { SyncFollowingModal } from './SyncFollowingModal'

export const DappLayout = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const mountedInBrowser = useRecoilValue(mountedInBrowserAtom)
  const [installWarningVisible, setInstallWarningVisible] = useRecoilState(
    installWarningVisibleAtom
  )
  const [noKeplrAccount, setNoKeplrAccount] = useRecoilState(noKeplrAccountAtom)
  const [betaWarningAccepted, setBetaWarningAccepted] = useRecoilState(
    betaWarningAcceptedAtom
  )
  const [commandModalVisible, setCommandModalVisible] = useRecoilState(
    commandModalVisibleAtom
  )
  const [compact, setCompact] = useRecoilState(navigationCompactAtom)
  // DAO creation modal that persists when navigating from create page to DAO
  // page.
  const { isFollowing, setFollowing, setUnfollowing, updatingFollowing } =
    useFollowingDaos()
  const [daoCreatedCardProps, setDaoCreatedCardProps] = useRecoilState(
    daoCreatedCardPropsAtom
  )
  const [proposalCreatedCardProps, setProposalCreatedCardProps] =
    useRecoilState(proposalCreatedCardPropsAtom)

  const { rootCommandContextMaker, updateProfileNft, inbox } = useAppContext()
  // Type-check, should always be loaded for dapp.
  if (!inbox) {
    throw new Error(t('error.loadingData'))
  }

  //! WALLET CONNECTION ERROR MODALS
  const { connect, connected, error, status, connectedWallet } =
    useWalletManager()
  const {
    walletAddress,
    walletProfileData,
    refreshBalances: refreshWalletBalances,
  } = useWalletInfo()
  useEffect(() => {
    setInstallWarningVisible(
      error instanceof Error &&
        error.message === 'Failed to retrieve wallet client.'
    )
    setNoKeplrAccount(
      error instanceof Error && error.message === "key doesn't exist"
    )
  }, [error, setInstallWarningVisible, setNoKeplrAccount])

  //! COMMAND MODAL
  // Hide modal when we nav away.
  useEffect(() => {
    setCommandModalVisible(false)
  }, [router.asPath, setCommandModalVisible])
  // Detect if Mac for checking keypress.
  const { isMac } = usePlatform()
  // Handle keypress to show command modal or not.
  const handleKeyPress = useCallback(
    (event) => {
      if ((!isMac && event.ctrlKey) || event.metaKey) {
        if (event.key === 'k') {
          setCommandModalVisible((showSearch) => !showSearch)
        }
      }
    },
    [isMac, setCommandModalVisible]
  )
  // Setup command modal keypress.
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  //! Inbox
  // Inbox notifications
  const [lastProposalCount, setLastProposalCount] = useState(
    inbox.pendingItemCount
  )
  useEffect(() => {
    if (inbox.pendingItemCount > lastProposalCount) {
      setTimeout(
        () =>
          toast.success(
            t('info.itemsInInboxNotification', {
              count: inbox.pendingItemCount,
            })
          ),
        // 3 second delay.
        3 * 1000
      )
    }
    setLastProposalCount(inbox.pendingItemCount)
  }, [inbox.pendingItemCount, lastProposalCount, t])

  //! Refresh every minute. Block height, USDC conversions, and wallet balances.
  const setRefreshBlockHeight = useSetRecoilState(refreshBlockHeightAtom)
  const setRefreshUsdcPrices = useSetRecoilState(refreshTokenUsdcPriceAtom(''))
  // Refresh block height and wallet balances every minute.
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshBlockHeight((id) => id + 1)
      setRefreshUsdcPrices((id) => id + 1)
      if (walletAddress) {
        refreshWalletBalances()
      }
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [
    refreshWalletBalances,
    setRefreshBlockHeight,
    setRefreshUsdcPrices,
    walletAddress,
  ])

  //! Following DAOs
  const followingDaoDropdownInfos = useCachedLoading(
    walletAddress
      ? followingDaoDropdownInfosSelector({
          walletAddress,
        })
      : undefined,
    []
  )

  //! Wallet balances, load in background so they're ready.
  useRecoilValueLoadable(
    connectedWallet
      ? walletTokenCardInfosSelector({
          walletAddress: connectedWallet.address,
          chainId: connectedWallet.chainInfo.chainId,
        })
      : constSelector(undefined)
  )

  return (
    <StatelessDappLayout
      connect={connect}
      connectWalletButton={<ConnectWallet variant="secondary" />}
      connected={connected}
      navigationProps={{
        walletConnected: connected,
        LinkWrapper,
        inboxCount:
          inbox.loading ||
          // Prevent hydration errors by loading until mounted.
          !mountedInBrowser
            ? {
                loading: true,
              }
            : {
                loading: false,
                data: inbox.pendingItemCount,
              },
        setCommandModalVisible: () => setCommandModalVisible(true),
        version: '2.0',
        followingDaos: mountedInBrowser
          ? followingDaoDropdownInfos
          : // Prevent hydration errors by loading until mounted.
            { loading: true },
        compact,
        setCompact,
        mountedInBrowser,
      }}
      rightSidebarProps={{
        wallet: <SidebarWallet />,
      }}
      walletProfileData={
        status === WalletConnectionStatus.Connected
          ? walletProfileData
          : undefined
      }
    >
      {children}

      {/* Modals */}

      <InstallKeplrModal
        onClose={() => setInstallWarningVisible(false)}
        visible={installWarningVisible}
      />
      <NoKeplrAccountModal
        onClose={() => setNoKeplrAccount(false)}
        visible={noKeplrAccount}
      />
      <BetaWarningModal
        onClose={() => setBetaWarningAccepted(true)}
        visible={mountedInBrowser && !betaWarningAccepted}
      />
      {rootCommandContextMaker && (
        <CommandModal
          makeRootContext={rootCommandContextMaker}
          setVisible={setCommandModalVisible}
          visible={commandModalVisible}
        />
      )}
      <SyncFollowingModal />
      <PfpkNftSelectionModal
        onClose={updateProfileNft.toggle}
        visible={updateProfileNft.visible}
      />

      {daoCreatedCardProps && (
        <DaoCreatedModal
          itemProps={{
            ...daoCreatedCardProps,

            follow: {
              following: isFollowing(daoCreatedCardProps.coreAddress),
              updatingFollowing,
              onFollow: () =>
                isFollowing(daoCreatedCardProps.coreAddress)
                  ? setUnfollowing(daoCreatedCardProps.coreAddress)
                  : setFollowing(daoCreatedCardProps.coreAddress),
            },
            LinkWrapper,
            IconButtonLink,
          }}
          modalProps={{
            onClose: () => setDaoCreatedCardProps(undefined),
          }}
          subDao={!!daoCreatedCardProps.parentDao}
        />
      )}

      {proposalCreatedCardProps && (
        <ProposalCreatedModal
          itemProps={{
            ...proposalCreatedCardProps,
            LinkWrapper,
          }}
          modalProps={{
            onClose: () => setProposalCreatedCardProps(undefined),
          }}
        />
      )}
    </StatelessDappLayout>
  )
}
