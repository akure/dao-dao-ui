export interface PfpkWalletProfile {
  nonce: number
  name: string | null
  nft: {
    chainId: string
    imageUrl: string
    tokenId: string
    collectionAddress: string
  } | null
  /**
   * Map chain ID to hex public key.
   */
  chains?: Record<string, string>
}

export type WalletProfileNameSource = 'pfpk' | 'stargaze'

// Move `imageUrl` out of `NFT` in case we use the Keplr profile image API or a
// fallback image as backup.
export interface WalletProfile extends PfpkWalletProfile {
  imageUrl: string
  // Whether or not the name is loaded from PFPK or Stargaze names.
  nameSource: WalletProfileNameSource
}

export interface WalletProfileUpdate {
  nonce: number
  name?: WalletProfile['name']
  nft?: {
    chainId: string
    tokenId: string
    collectionAddress: string
  } | null
}

export interface KeplrWalletProfile {
  profile:
    | {}
    | {
        imageUrl: string
        version: number
      }
}

export interface ProfileSearchHit {
  publicKey: string
  address: string
  profile: {
    name: string | null
    nft: {
      chainId: string
      collectionAddress: string
      tokenId: string
      imageUrl: string
    } | null
  }
}

// Meta info about wallet profile, including loading state and a fallback image.
export type WalletProfileData = {
  loading: boolean
  address: string
  profile: WalletProfile
  backupImageUrl: string
}
