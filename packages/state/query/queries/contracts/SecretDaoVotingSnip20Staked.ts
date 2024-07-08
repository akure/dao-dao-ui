/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions } from '@tanstack/react-query'

import {
  ActiveThresholdResponse,
  AnyContractInfo,
  Auth,
  Boolean,
  InfoResponse,
  TotalPowerAtHeightResponse,
  VotingPowerAtHeightResponse,
} from '@dao-dao/types/contracts/SecretDaoVotingSnip20Staked'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { SecretDaoVotingSnip20StakedQueryClient } from '../../../contracts/SecretDaoVotingSnip20Staked'

export const secretDaoVotingSnip20StakedQueryKeys = {
  contract: [
    {
      contract: 'secretDaoVotingSnip20Staked',
    },
  ] as const,
  address: (contractAddress: string) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.contract[0],
        address: contractAddress,
      },
    ] as const,
  stakingContract: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'staking_contract',
        args,
      },
    ] as const,
  activeThreshold: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'active_threshold',
        args,
      },
    ] as const,
  votingPowerAtHeight: (
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'voting_power_at_height',
        args,
      },
    ] as const,
  totalPowerAtHeight: (
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'total_power_at_height',
        args,
      },
    ] as const,
  dao: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'dao',
        args,
      },
    ] as const,
  info: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'info',
        args,
      },
    ] as const,
  tokenContract: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'token_contract',
        args,
      },
    ] as const,
  isActive: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingSnip20StakedQueryKeys.address(contractAddress)[0],
        method: 'is_active',
        args,
      },
    ] as const,
}
export const secretDaoVotingSnip20StakedQueries = {
  stakingContract: <TData = AnyContractInfo>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedStakingContractQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey:
      secretDaoVotingSnip20StakedQueryKeys.stakingContract(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).stakingContract(),
    ...options,
  }),
  activeThreshold: <TData = ActiveThresholdResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedActiveThresholdQuery<TData>): UseQueryOptions<
    ActiveThresholdResponse,
    Error,
    TData
  > => ({
    queryKey:
      secretDaoVotingSnip20StakedQueryKeys.activeThreshold(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).activeThreshold(),
    ...options,
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoVotingSnip20StakedVotingPowerAtHeightQuery<TData>): UseQueryOptions<
    VotingPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingSnip20StakedQueryKeys.votingPowerAtHeight(
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).votingPowerAtHeight({
        auth: args.auth,
        height: args.height,
      }),
    ...options,
  }),
  totalPowerAtHeight: <TData = TotalPowerAtHeightResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoVotingSnip20StakedTotalPowerAtHeightQuery<TData>): UseQueryOptions<
    TotalPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingSnip20StakedQueryKeys.totalPowerAtHeight(
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).totalPowerAtHeight({
        height: args.height,
      }),
    ...options,
  }),
  dao: <TData = AnyContractInfo>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedDaoQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingSnip20StakedQueryKeys.dao(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).dao(),
    ...options,
  }),
  info: <TData = InfoResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedInfoQuery<TData>): UseQueryOptions<
    InfoResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingSnip20StakedQueryKeys.info(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).info(),
    ...options,
  }),
  tokenContract: <TData = AnyContractInfo>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedTokenContractQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey:
      secretDaoVotingSnip20StakedQueryKeys.tokenContract(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).tokenContract(),
    ...options,
  }),
  isActive: <TData = Boolean>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingSnip20StakedIsActiveQuery<TData>): UseQueryOptions<
    Boolean,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingSnip20StakedQueryKeys.isActive(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingSnip20StakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).isActive(),
    ...options,
  }),
}
export interface SecretDaoVotingSnip20StakedReactQuery<
  TResponse,
  TData = TResponse
> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface SecretDaoVotingSnip20StakedIsActiveQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<Boolean, TData> {}
export interface SecretDaoVotingSnip20StakedTokenContractQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<AnyContractInfo, TData> {}
export interface SecretDaoVotingSnip20StakedInfoQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<InfoResponse, TData> {}
export interface SecretDaoVotingSnip20StakedDaoQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<AnyContractInfo, TData> {}
export interface SecretDaoVotingSnip20StakedTotalPowerAtHeightQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<
    TotalPowerAtHeightResponse,
    TData
  > {
  args: {
    height?: number
  }
}
export interface SecretDaoVotingSnip20StakedVotingPowerAtHeightQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<
    VotingPowerAtHeightResponse,
    TData
  > {
  args: {
    auth: Auth
    height?: number
  }
}
export interface SecretDaoVotingSnip20StakedActiveThresholdQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<
    ActiveThresholdResponse,
    TData
  > {}
export interface SecretDaoVotingSnip20StakedStakingContractQuery<TData>
  extends SecretDaoVotingSnip20StakedReactQuery<AnyContractInfo, TData> {}
