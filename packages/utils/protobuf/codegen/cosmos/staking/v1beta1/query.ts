//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorAmino, ValidatorSDKType, DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseAmino, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoAmino, HistoricalInfoSDKType, Pool, PoolAmino, PoolSDKType, Params, ParamsAmino, ParamsSDKType } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest";
  value: Uint8Array;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorsRequest";
  value: QueryValidatorsRequestAmino;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
  status: string;
  pagination?: PageRequestSDKType | undefined;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse";
  value: Uint8Array;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseAmino {
  /** validators contains all the queried validators. */
  validators: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest";
  value: Uint8Array;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorRequest";
  value: QueryValidatorRequestAmino;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
  validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator | undefined;
}
export interface QueryValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse";
  value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseAmino {
  /** validator defines the validator info. */
  validator?: ValidatorAmino | undefined;
}
export interface QueryValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorResponse";
  value: QueryValidatorResponseAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
  validator: ValidatorSDKType | undefined;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryValidatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsRequest";
  value: QueryValidatorDelegationsRequestAmino;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryValidatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseAmino {
  delegation_responses: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorDelegationsResponse";
  value: QueryValidatorDelegationsResponseAmino;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryValidatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestAmino {
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest";
  value: QueryValidatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
  validator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryValidatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseAmino {
  unbonding_responses: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse";
  value: QueryValidatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest";
  value: Uint8Array;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationRequest";
  value: QueryDelegationRequestAmino;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse | undefined;
}
export interface QueryDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse";
  value: Uint8Array;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseAmino {
  /** delegation_responses defines the delegation info of a delegation. */
  delegation_response?: DelegationResponseAmino | undefined;
}
export interface QueryDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationResponse";
  value: QueryDelegationResponseAmino;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
  delegation_response?: DelegationResponseSDKType | undefined;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryUnbondingDelegationRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryUnbondingDelegationRequestAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationRequest";
  value: QueryUnbondingDelegationRequestAmino;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond: UnbondingDelegation | undefined;
}
export interface QueryUnbondingDelegationResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseAmino {
  /** unbond defines the unbonding information of a delegation. */
  unbond?: UnbondingDelegationAmino | undefined;
}
export interface QueryUnbondingDelegationResponseAminoMsg {
  type: "cosmos-sdk/QueryUnbondingDelegationResponse";
  value: QueryUnbondingDelegationResponseAmino;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
  unbond: UnbondingDelegationSDKType | undefined;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsRequest";
  value: QueryDelegatorDelegationsRequestAmino;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses: DelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorDelegationsResponse";
  value: QueryDelegatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
  delegation_responses: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorUnbondingDelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest";
  value: QueryDelegatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
  unbonding_responses: UnbondingDelegationAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorUnbondingDelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse";
  value: QueryDelegatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
  unbonding_responses: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryRedelegationsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  src_validator_addr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dst_validator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryRedelegationsRequestAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsRequest";
  value: QueryRedelegationsRequestAmino;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
  delegator_addr: string;
  src_validator_addr: string;
  dst_validator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryRedelegationsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseAmino {
  redelegation_responses: RedelegationResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryRedelegationsResponseAminoMsg {
  type: "cosmos-sdk/QueryRedelegationsResponse";
  value: QueryRedelegationsResponseAmino;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
  redelegation_responses: RedelegationResponseSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
  value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
  delegator_addr: string;
  pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators' info of a delegator. */
  validators: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryDelegatorValidatorRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestAmino {
  /** delegator_addr defines the delegator address to query for. */
  delegator_addr: string;
  /** validator_addr defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryDelegatorValidatorRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorRequest";
  value: QueryDelegatorValidatorRequestAmino;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
  delegator_addr: string;
  validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the validator info. */
  validator: Validator | undefined;
}
export interface QueryDelegatorValidatorResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseAmino {
  /** validator defines the validator info. */
  validator?: ValidatorAmino | undefined;
}
export interface QueryDelegatorValidatorResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorResponse";
  value: QueryDelegatorValidatorResponseAmino;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
  validator: ValidatorSDKType | undefined;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: bigint;
}
export interface QueryHistoricalInfoRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestAmino {
  /** height defines at which height to query the historical info. */
  height: string;
}
export interface QueryHistoricalInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoRequest";
  value: QueryHistoricalInfoRequestAmino;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
  height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo | undefined;
}
export interface QueryHistoricalInfoResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
  value: Uint8Array;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseAmino {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfoAmino | undefined;
}
export interface QueryHistoricalInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryHistoricalInfoResponse";
  value: QueryHistoricalInfoResponseAmino;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
  hist?: HistoricalInfoSDKType | undefined;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {}
export interface QueryPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool: Pool | undefined;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
  /** pool defines the pool info. */
  pool?: PoolAmino | undefined;
}
export interface QueryPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
  pool: PoolSDKType | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType | undefined;
}
function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return {
    status: "",
    pagination: undefined
  };
}
export const QueryValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
  encode(message: QueryValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest {
    return {
      status: object.status,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorsRequest, useInterfaces: boolean = false): QueryValidatorsRequestAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsRequest, useInterfaces: boolean = false): QueryValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsRequest",
      value: QueryValidatorsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorsRequestProtoMsg, useInterfaces: boolean = false): QueryValidatorsRequest {
    return QueryValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorsRequest): Uint8Array {
    return QueryValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
      value: QueryValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorsResponse, useInterfaces: boolean = false): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsResponse, useInterfaces: boolean = false): QueryValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg, useInterfaces: boolean = false): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
  encode(message: QueryValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryValidatorRequest, useInterfaces: boolean = false): QueryValidatorRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest {
    return QueryValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorRequest, useInterfaces: boolean = false): QueryValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorRequest",
      value: QueryValidatorRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorRequestProtoMsg, useInterfaces: boolean = false): QueryValidatorRequest {
    return QueryValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorRequest): Uint8Array {
    return QueryValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
      value: QueryValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
  encode(message: QueryValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse {
    return {
      validator: object?.validator ? Validator.fromAmino(object.validator) : undefined
    };
  },
  toAmino(message: QueryValidatorResponse, useInterfaces: boolean = false): QueryValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse {
    return QueryValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorResponse, useInterfaces: boolean = false): QueryValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorResponse",
      value: QueryValidatorResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorResponseProtoMsg, useInterfaces: boolean = false): QueryValidatorResponse {
    return QueryValidatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorResponse): Uint8Array {
    return QueryValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
      value: QueryValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
  encode(message: QueryValidatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorDelegationsRequestAmino): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: object.validator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorDelegationsRequest, useInterfaces: boolean = false): QueryValidatorDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsRequestAminoMsg): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsRequest, useInterfaces: boolean = false): QueryValidatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsRequestProtoMsg, useInterfaces: boolean = false): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorDelegationsRequest): Uint8Array {
    return QueryValidatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
      value: QueryValidatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
  encode(message: QueryValidatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorDelegationsResponseAmino): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorDelegationsResponse, useInterfaces: boolean = false): QueryValidatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegation_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDelegationsResponseAminoMsg): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDelegationsResponse, useInterfaces: boolean = false): QueryValidatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorDelegationsResponseProtoMsg, useInterfaces: boolean = false): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorDelegationsResponse): Uint8Array {
    return QueryValidatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
      value: QueryValidatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return {
    validatorAddr: "",
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsRequestAmino): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: object.validator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorUnbondingDelegationsRequest, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsRequestAminoMsg): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsRequest, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsRequestProtoMsg, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorUnbondingDelegationsRequest): Uint8Array {
    return QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
      value: QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryValidatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorUnbondingDelegationsResponseAmino): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorUnbondingDelegationsResponse, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.unbonding_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorUnbondingDelegationsResponseAminoMsg): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorUnbondingDelegationsResponse, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryValidatorUnbondingDelegationsResponseProtoMsg, useInterfaces: boolean = false): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryValidatorUnbondingDelegationsResponse): Uint8Array {
    return QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
      value: QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
  encode(message: QueryDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationRequestAmino): QueryDelegationRequest {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryDelegationRequest, useInterfaces: boolean = false): QueryDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRequestAminoMsg): QueryDelegationRequest {
    return QueryDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRequest, useInterfaces: boolean = false): QueryDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRequest",
      value: QueryDelegationRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegationRequestProtoMsg, useInterfaces: boolean = false): QueryDelegationRequest {
    return QueryDelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationRequest): Uint8Array {
    return QueryDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRequest): QueryDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
      value: QueryDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return {
    delegationResponse: undefined
  };
}
export const QueryDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
  encode(message: QueryDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? DelegationResponse.fromPartial(object.delegationResponse) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationResponseAmino): QueryDelegationResponse {
    return {
      delegationResponse: object?.delegation_response ? DelegationResponse.fromAmino(object.delegation_response) : undefined
    };
  },
  toAmino(message: QueryDelegationResponse, useInterfaces: boolean = false): QueryDelegationResponseAmino {
    const obj: any = {};
    obj.delegation_response = message.delegationResponse ? DelegationResponse.toAmino(message.delegationResponse, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationResponseAminoMsg): QueryDelegationResponse {
    return QueryDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationResponse, useInterfaces: boolean = false): QueryDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationResponse",
      value: QueryDelegationResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegationResponseProtoMsg, useInterfaces: boolean = false): QueryDelegationResponse {
    return QueryDelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegationResponse): Uint8Array {
    return QueryDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationResponse): QueryDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
      value: QueryDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryUnbondingDelegationRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
  encode(message: QueryUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryUnbondingDelegationRequestAmino): QueryUnbondingDelegationRequest {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryUnbondingDelegationRequest, useInterfaces: boolean = false): QueryUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationRequestAminoMsg): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationRequest, useInterfaces: boolean = false): QueryUnbondingDelegationRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationRequestProtoMsg, useInterfaces: boolean = false): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUnbondingDelegationRequest): Uint8Array {
    return QueryUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
      value: QueryUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return {
    unbond: UnbondingDelegation.fromPartial({})
  };
}
export const QueryUnbondingDelegationResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
  encode(message: QueryUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = object.unbond !== undefined && object.unbond !== null ? UnbondingDelegation.fromPartial(object.unbond) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingDelegationResponseAmino): QueryUnbondingDelegationResponse {
    return {
      unbond: object?.unbond ? UnbondingDelegation.fromAmino(object.unbond) : undefined
    };
  },
  toAmino(message: QueryUnbondingDelegationResponse, useInterfaces: boolean = false): QueryUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbond = message.unbond ? UnbondingDelegation.toAmino(message.unbond, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingDelegationResponseAminoMsg): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnbondingDelegationResponse, useInterfaces: boolean = false): QueryUnbondingDelegationResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryUnbondingDelegationResponseProtoMsg, useInterfaces: boolean = false): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUnbondingDelegationResponse): Uint8Array {
    return QueryUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
      value: QueryUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
  encode(message: QueryDelegatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorDelegationsRequest, useInterfaces: boolean = false): QueryDelegatorDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsRequestAminoMsg): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsRequest, useInterfaces: boolean = false): QueryDelegatorDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg, useInterfaces: boolean = false): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorDelegationsRequest): Uint8Array {
    return QueryDelegatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
      value: QueryDelegatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return {
    delegationResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
  encode(message: QueryDelegatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e: any) => DelegationResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorDelegationsResponse, useInterfaces: boolean = false): QueryDelegatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegation_responses = message.delegationResponses.map(e => e ? DelegationResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegation_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorDelegationsResponseAminoMsg): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorDelegationsResponse, useInterfaces: boolean = false): QueryDelegatorDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg, useInterfaces: boolean = false): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorDelegationsResponse): Uint8Array {
    return QueryDelegatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
      value: QueryDelegatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsRequest, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsRequest, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
      value: QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return {
    unbondingResponses: [],
    pagination: undefined
  };
}
export const QueryDelegatorUnbondingDelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e: any) => UnbondingDelegation.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorUnbondingDelegationsResponse, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbonding_responses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.unbonding_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorUnbondingDelegationsResponse, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg, useInterfaces: boolean = false): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
      value: QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return {
    delegatorAddr: "",
    srcValidatorAddr: "",
    dstValidatorAddr: "",
    pagination: undefined
  };
}
export const QueryRedelegationsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
  encode(message: QueryRedelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryRedelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationsRequestAmino): QueryRedelegationsRequest {
    return {
      delegatorAddr: object.delegator_addr,
      srcValidatorAddr: object.src_validator_addr,
      dstValidatorAddr: object.dst_validator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRedelegationsRequest, useInterfaces: boolean = false): QueryRedelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.src_validator_addr = message.srcValidatorAddr;
    obj.dst_validator_addr = message.dstValidatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsRequestAminoMsg): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsRequest, useInterfaces: boolean = false): QueryRedelegationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryRedelegationsRequestProtoMsg, useInterfaces: boolean = false): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRedelegationsRequest): Uint8Array {
    return QueryRedelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
      value: QueryRedelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return {
    redelegationResponses: [],
    pagination: undefined
  };
}
export const QueryRedelegationsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
  encode(message: QueryRedelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryRedelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map(e => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationsResponseAmino): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e: any) => RedelegationResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRedelegationsResponse, useInterfaces: boolean = false): QueryRedelegationsResponseAmino {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegation_responses = message.redelegationResponses.map(e => e ? RedelegationResponse.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.redelegation_responses = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationsResponseAminoMsg): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRedelegationsResponse, useInterfaces: boolean = false): QueryRedelegationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryRedelegationsResponseProtoMsg, useInterfaces: boolean = false): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRedelegationsResponse): Uint8Array {
    return QueryRedelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
      value: QueryRedelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddr: "",
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
  encode(message: QueryDelegatorValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: object.delegator_addr,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorValidatorsRequest, useInterfaces: boolean = false): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsRequest, useInterfaces: boolean = false): QueryDelegatorValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg, useInterfaces: boolean = false): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
  encode(message: QueryDelegatorValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegatorValidatorsResponse, useInterfaces: boolean = false): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsResponse, useInterfaces: boolean = false): QueryDelegatorValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg, useInterfaces: boolean = false): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return {
    delegatorAddr: "",
    validatorAddr: ""
  };
}
export const QueryDelegatorValidatorRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
  encode(message: QueryDelegatorValidatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorValidatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorRequestAmino): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: object.delegator_addr,
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryDelegatorValidatorRequest, useInterfaces: boolean = false): QueryDelegatorValidatorRequestAmino {
    const obj: any = {};
    obj.delegator_addr = message.delegatorAddr;
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorRequestAminoMsg): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorRequest, useInterfaces: boolean = false): QueryDelegatorValidatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorRequestProtoMsg, useInterfaces: boolean = false): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorRequest): Uint8Array {
    return QueryDelegatorValidatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
      value: QueryDelegatorValidatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return {
    validator: Validator.fromPartial({})
  };
}
export const QueryDelegatorValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
  encode(message: QueryDelegatorValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryDelegatorValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorResponseAmino): QueryDelegatorValidatorResponse {
    return {
      validator: object?.validator ? Validator.fromAmino(object.validator) : undefined
    };
  },
  toAmino(message: QueryDelegatorValidatorResponse, useInterfaces: boolean = false): QueryDelegatorValidatorResponseAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorResponseAminoMsg): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorResponse, useInterfaces: boolean = false): QueryDelegatorValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorResponseProtoMsg, useInterfaces: boolean = false): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryDelegatorValidatorResponse): Uint8Array {
    return QueryDelegatorValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
      value: QueryDelegatorValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return {
    height: BigInt(0)
  };
}
export const QueryHistoricalInfoRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
  encode(message: QueryHistoricalInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryHistoricalInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHistoricalInfoRequestAmino): QueryHistoricalInfoRequest {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: QueryHistoricalInfoRequest, useInterfaces: boolean = false): QueryHistoricalInfoRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoRequestAminoMsg): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoRequest, useInterfaces: boolean = false): QueryHistoricalInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoRequestProtoMsg, useInterfaces: boolean = false): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalInfoRequest): Uint8Array {
    return QueryHistoricalInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
      value: QueryHistoricalInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return {
    hist: undefined
  };
}
export const QueryHistoricalInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
  encode(message: QueryHistoricalInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryHistoricalInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = object.hist !== undefined && object.hist !== null ? HistoricalInfo.fromPartial(object.hist) : undefined;
    return message;
  },
  fromAmino(object: QueryHistoricalInfoResponseAmino): QueryHistoricalInfoResponse {
    return {
      hist: object?.hist ? HistoricalInfo.fromAmino(object.hist) : undefined
    };
  },
  toAmino(message: QueryHistoricalInfoResponse, useInterfaces: boolean = false): QueryHistoricalInfoResponseAmino {
    const obj: any = {};
    obj.hist = message.hist ? HistoricalInfo.toAmino(message.hist, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalInfoResponseAminoMsg): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryHistoricalInfoResponse, useInterfaces: boolean = false): QueryHistoricalInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryHistoricalInfoResponseProtoMsg, useInterfaces: boolean = false): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryHistoricalInfoResponse): Uint8Array {
    return QueryHistoricalInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
      value: QueryHistoricalInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}
export const QueryPoolRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
  encode(_: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
  fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest {
    return {};
  },
  toAmino(_: QueryPoolRequest, useInterfaces: boolean = false): QueryPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolRequest, useInterfaces: boolean = false): QueryPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolRequest",
      value: QueryPoolRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg, useInterfaces: boolean = false): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    return {
      pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryPoolResponse, useInterfaces: boolean = false): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPoolResponse, useInterfaces: boolean = false): QueryPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPoolResponse",
      value: QueryPoolResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg, useInterfaces: boolean = false): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = false): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest, useInterfaces: boolean = false): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = false): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = false): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse, useInterfaces: boolean = false): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = false): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};