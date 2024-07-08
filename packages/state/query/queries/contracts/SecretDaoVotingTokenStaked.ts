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
  ClaimsResponse,
  Config,
  DenomResponse,
  GetHooksResponse,
  InfoResponse,
  ListStakersResponse,
  NullableAddr,
  TotalPowerAtHeightResponse,
  VotingPowerAtHeightResponse,
} from '@dao-dao/types/contracts/SecretDaoVotingTokenStaked'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { SecretDaoVotingTokenStakedQueryClient } from '../../../contracts/SecretDaoVotingTokenStaked'

export const secretDaoVotingTokenStakedQueryKeys = {
  contract: [
    {
      contract: 'secretDaoVotingTokenStaked',
    },
  ] as const,
  address: (contractAddress: string) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.contract[0],
        address: contractAddress,
      },
    ] as const,
  getConfig: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'get_config',
        args,
      },
    ] as const,
  claims: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'claims',
        args,
      },
    ] as const,
  listStakers: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'list_stakers',
        args,
      },
    ] as const,
  activeThreshold: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'active_threshold',
        args,
      },
    ] as const,
  getHooks: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'get_hooks',
        args,
      },
    ] as const,
  tokenContract: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'token_contract',
        args,
      },
    ] as const,
  denom: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'denom',
        args,
      },
    ] as const,
  isActive: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'is_active',
        args,
      },
    ] as const,
  votingPowerAtHeight: (
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
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
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'total_power_at_height',
        args,
      },
    ] as const,
  dao: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'dao',
        args,
      },
    ] as const,
  info: (contractAddress: string, args?: Record<string, unknown>) =>
    [
      {
        ...secretDaoVotingTokenStakedQueryKeys.address(contractAddress)[0],
        method: 'info',
        args,
      },
    ] as const,
}
export const secretDaoVotingTokenStakedQueries = {
  getConfig: <TData = Config>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedGetConfigQuery<TData>): UseQueryOptions<
    Config,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.getConfig(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).getConfig(),
    ...options,
  }),
  claims: <TData = ClaimsResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoVotingTokenStakedClaimsQuery<TData>): UseQueryOptions<
    ClaimsResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.claims(contractAddress, args),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).claims({
        auth: args.auth,
      }),
    ...options,
  }),
  listStakers: <TData = ListStakersResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoVotingTokenStakedListStakersQuery<TData>): UseQueryOptions<
    ListStakersResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.listStakers(
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listStakers({
        limit: args.limit,
        startAfter: args.startAfter,
      }),
    ...options,
  }),
  activeThreshold: <TData = ActiveThresholdResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedActiveThresholdQuery<TData>): UseQueryOptions<
    ActiveThresholdResponse,
    Error,
    TData
  > => ({
    queryKey:
      secretDaoVotingTokenStakedQueryKeys.activeThreshold(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).activeThreshold(),
    ...options,
  }),
  getHooks: <TData = GetHooksResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedGetHooksQuery<TData>): UseQueryOptions<
    GetHooksResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.getHooks(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).getHooks(),
    ...options,
  }),
  tokenContract: <TData = NullableAddr>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedTokenContractQuery<TData>): UseQueryOptions<
    NullableAddr,
    Error,
    TData
  > => ({
    queryKey:
      secretDaoVotingTokenStakedQueryKeys.tokenContract(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).tokenContract(),
    ...options,
  }),
  denom: <TData = DenomResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedDenomQuery<TData>): UseQueryOptions<
    DenomResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.denom(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).denom(),
    ...options,
  }),
  isActive: <TData = Boolean>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedIsActiveQuery<TData>): UseQueryOptions<
    Boolean,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.isActive(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).isActive(),
    ...options,
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoVotingTokenStakedVotingPowerAtHeightQuery<TData>): UseQueryOptions<
    VotingPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.votingPowerAtHeight(
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
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
  }: SecretDaoVotingTokenStakedTotalPowerAtHeightQuery<TData>): UseQueryOptions<
    TotalPowerAtHeightResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.totalPowerAtHeight(
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
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
  }: SecretDaoVotingTokenStakedDaoQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.dao(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).dao(),
    ...options,
  }),
  info: <TData = InfoResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoVotingTokenStakedInfoQuery<TData>): UseQueryOptions<
    InfoResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoVotingTokenStakedQueryKeys.info(contractAddress),
    queryFn: async () =>
      new SecretDaoVotingTokenStakedQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).info(),
    ...options,
  }),
}
export interface SecretDaoVotingTokenStakedReactQuery<
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
export interface SecretDaoVotingTokenStakedInfoQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<InfoResponse, TData> {}
export interface SecretDaoVotingTokenStakedDaoQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<AnyContractInfo, TData> {}
export interface SecretDaoVotingTokenStakedTotalPowerAtHeightQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<
    TotalPowerAtHeightResponse,
    TData
  > {
  args: {
    height?: number
  }
}
export interface SecretDaoVotingTokenStakedVotingPowerAtHeightQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<
    VotingPowerAtHeightResponse,
    TData
  > {
  args: {
    auth: Auth
    height?: number
  }
}
export interface SecretDaoVotingTokenStakedIsActiveQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<Boolean, TData> {}
export interface SecretDaoVotingTokenStakedDenomQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<DenomResponse, TData> {}
export interface SecretDaoVotingTokenStakedTokenContractQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<NullableAddr, TData> {}
export interface SecretDaoVotingTokenStakedGetHooksQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<GetHooksResponse, TData> {}
export interface SecretDaoVotingTokenStakedActiveThresholdQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<
    ActiveThresholdResponse,
    TData
  > {}
export interface SecretDaoVotingTokenStakedListStakersQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<ListStakersResponse, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export interface SecretDaoVotingTokenStakedClaimsQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<ClaimsResponse, TData> {
  args: {
    auth: Auth
  }
}
export interface SecretDaoVotingTokenStakedGetConfigQuery<TData>
  extends SecretDaoVotingTokenStakedReactQuery<Config, TData> {}
