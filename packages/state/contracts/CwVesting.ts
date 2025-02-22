import { Coin, StdFee } from '@cosmjs/amino'
import {
  CosmWasmClient,
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'

import {
  Binary,
  Timestamp,
  Uint128,
  Uint64,
} from '@dao-dao/types/contracts/common'
import {
  OwnershipForAddr,
  StakeTrackerQuery,
  Vest,
} from '@dao-dao/types/contracts/CwVesting'
import { CHAIN_GAS_MULTIPLIER } from '@dao-dao/utils'

export interface CwVestingReadOnlyInterface {
  contractAddress: string
  ownership: () => Promise<OwnershipForAddr>
  info: () => Promise<Vest>
  distributable: ({ t }: { t?: Timestamp }) => Promise<Uint128>
  vested: ({ t }: { t?: Timestamp }) => Promise<Uint128>
  totalToVest: () => Promise<Uint128>
  vestDuration: () => Promise<Uint64>
  stake: (query: StakeTrackerQuery) => Promise<Uint128>
}
export class CwVestingQueryClient implements CwVestingReadOnlyInterface {
  client: CosmWasmClient
  contractAddress: string

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client
    this.contractAddress = contractAddress
    this.ownership = this.ownership.bind(this)
    this.info = this.info.bind(this)
    this.distributable = this.distributable.bind(this)
    this.vested = this.vested.bind(this)
    this.totalToVest = this.totalToVest.bind(this)
    this.vestDuration = this.vestDuration.bind(this)
    this.stake = this.stake.bind(this)
  }

  ownership = async (): Promise<OwnershipForAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownership: {},
    })
  }
  info = async (): Promise<Vest> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {},
    })
  }
  distributable = async ({ t }: { t?: Timestamp }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      distributable: {
        t,
      },
    })
  }
  vested = async ({ t }: { t?: Timestamp }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vested: {
        t,
      },
    })
  }
  totalToVest = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_to_vest: {},
    })
  }
  vestDuration = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vest_duration: {},
    })
  }
  stake = async (query: StakeTrackerQuery): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      stake: query,
    })
  }
}
export interface CwVestingInterface extends CwVestingReadOnlyInterface {
  contractAddress: string
  sender: string
  receive: (
    {
      amount,
      msg,
      sender,
    }: {
      amount: Uint128
      msg: Binary
      sender: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  distribute: (
    {
      amount,
    }: {
      amount?: Uint128
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  cancel: (
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  delegate: (
    {
      amount,
      validator,
    }: {
      amount: Uint128
      validator: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  redelegate: (
    {
      amount,
      dstValidator,
      srcValidator,
    }: {
      amount: Uint128
      dstValidator: string
      srcValidator: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  undelegate: (
    {
      amount,
      validator,
    }: {
      amount: Uint128
      validator: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  setWithdrawAddress: (
    {
      address,
    }: {
      address: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  withdrawDelegatorReward: (
    {
      validator,
    }: {
      validator: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  // Batch withdraw rewards from multiple validators.
  withdrawDelegatorRewards: (
    {
      validators,
    }: {
      validators: string[]
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  withdrawCanceledPayment: (
    {
      amount,
    }: {
      amount?: Uint128
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  registerSlash: (
    {
      amount,
      duringUnbonding,
      time,
      validator,
    }: {
      amount: Uint128
      duringUnbonding: boolean
      time: Timestamp
      validator: string
    },
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
  updateOwnership: (
    fee?: number | StdFee | 'auto',
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>
}
export class CwVestingClient
  extends CwVestingQueryClient
  implements CwVestingInterface
{
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string

  constructor(
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string
  ) {
    super(client, contractAddress)
    this.client = client
    this.sender = sender
    this.contractAddress = contractAddress
    this.receive = this.receive.bind(this)
    this.distribute = this.distribute.bind(this)
    this.cancel = this.cancel.bind(this)
    this.delegate = this.delegate.bind(this)
    this.redelegate = this.redelegate.bind(this)
    this.undelegate = this.undelegate.bind(this)
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this)
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this)
    this.withdrawDelegatorRewards = this.withdrawDelegatorRewards.bind(this)
    this.withdrawCanceledPayment = this.withdrawCanceledPayment.bind(this)
    this.registerSlash = this.registerSlash.bind(this)
    this.updateOwnership = this.updateOwnership.bind(this)
  }

  receive = async (
    {
      amount,
      msg,
      sender,
    }: {
      amount: Uint128
      msg: Binary
      sender: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        receive: {
          amount,
          msg,
          sender,
        },
      },
      fee,
      memo,
      funds
    )
  }
  distribute = async (
    {
      amount,
    }: {
      amount?: Uint128
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        distribute: {
          amount,
        },
      },
      fee,
      memo,
      funds
    )
  }
  cancel = async (
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        cancel: {},
      },
      fee,
      memo,
      funds
    )
  }
  delegate = async (
    {
      amount,
      validator,
    }: {
      amount: Uint128
      validator: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        delegate: {
          amount,
          validator,
        },
      },
      fee,
      memo,
      funds
    )
  }
  redelegate = async (
    {
      amount,
      dstValidator,
      srcValidator,
    }: {
      amount: Uint128
      dstValidator: string
      srcValidator: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        redelegate: {
          amount,
          dst_validator: dstValidator,
          src_validator: srcValidator,
        },
      },
      fee,
      memo,
      funds
    )
  }
  undelegate = async (
    {
      amount,
      validator,
    }: {
      amount: Uint128
      validator: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        undelegate: {
          amount,
          validator,
        },
      },
      fee,
      memo,
      funds
    )
  }
  setWithdrawAddress = async (
    {
      address,
    }: {
      address: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        set_withdraw_address: {
          address,
        },
      },
      fee,
      memo,
      funds
    )
  }
  withdrawDelegatorReward = async (
    {
      validator,
    }: {
      validator: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        withdraw_delegator_reward: {
          validator,
        },
      },
      fee,
      memo,
      funds
    )
  }
  // Batch withdraw rewards from multiple validators.
  withdrawDelegatorRewards = async (
    {
      validators,
    }: {
      validators: string[]
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string
  ): Promise<ExecuteResult> => {
    return await this.client.executeMultiple(
      this.sender,
      validators.map((validator) => ({
        contractAddress: this.contractAddress,
        msg: {
          withdraw_delegator_reward: {
            validator,
          },
        },
      })),
      fee,
      memo
    )
  }
  withdrawCanceledPayment = async (
    {
      amount,
    }: {
      amount?: Uint128
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        withdraw_canceled_payment: {
          amount,
        },
      },
      fee,
      memo,
      funds
    )
  }
  registerSlash = async (
    {
      amount,
      duringUnbonding,
      time,
      validator,
    }: {
      amount: Uint128
      duringUnbonding: boolean
      time: Timestamp
      validator: string
    },
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        register_slash: {
          amount,
          during_unbonding: duringUnbonding,
          time,
          validator,
        },
      },
      fee,
      memo,
      funds
    )
  }
  updateOwnership = async (
    fee: number | StdFee | 'auto' = CHAIN_GAS_MULTIPLIER,
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        update_ownership: {},
      },
      fee,
      memo,
      funds
    )
  }
}
