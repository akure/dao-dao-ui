//@ts-nocheck
import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  /** Grants for code upload */
  grants: CodeGrant[];
}
export interface StoreCodeAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  value: Uint8Array;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorizationAmino {
  /** Grants for code upload */
  grants: CodeGrantAmino[];
}
export interface StoreCodeAuthorizationAminoMsg {
  type: "wasm/StoreCodeAuthorization";
  value: StoreCodeAuthorizationAmino;
}
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 */
export interface StoreCodeAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeAuthorization";
  grants: CodeGrantSDKType[];
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  /** Grants for contract executions */
  grants: ContractGrant[];
}
export interface ContractExecutionAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationAmino {
  /** Grants for contract executions */
  grants: ContractGrantAmino[];
}
export interface ContractExecutionAuthorizationAminoMsg {
  type: "wasm/ContractExecutionAuthorization";
  value: ContractExecutionAuthorizationAmino;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
  grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  /** Grants for contract migrations */
  grants: ContractGrant[];
}
export interface ContractMigrationAuthorizationProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  value: Uint8Array;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationAmino {
  /** Grants for contract migrations */
  grants: ContractGrantAmino[];
}
export interface ContractMigrationAuthorizationAminoMsg {
  type: "wasm/ContractMigrationAuthorization";
  value: ContractMigrationAuthorizationAmino;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
  grants: ContractGrantSDKType[];
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrant {
  /**
   * CodeHash is the unique identifier created by wasmvm
   * Wildcard "*" is used to specify any kind of grant.
   */
  codeHash: Uint8Array;
  /**
   * InstantiatePermission is the superset access control to apply
   * on contract creation.
   * Optional
   */
  instantiatePermission?: AccessConfig | undefined;
}
export interface CodeGrantProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CodeGrant";
  value: Uint8Array;
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrantAmino {
  /**
   * CodeHash is the unique identifier created by wasmvm
   * Wildcard "*" is used to specify any kind of grant.
   */
  code_hash: Uint8Array;
  /**
   * InstantiatePermission is the superset access control to apply
   * on contract creation.
   * Optional
   */
  instantiate_permission?: AccessConfigAmino | undefined;
}
export interface CodeGrantAminoMsg {
  type: "wasm/CodeGrant";
  value: CodeGrantAmino;
}
/** CodeGrant a granted permission for a single code */
export interface CodeGrantSDKType {
  code_hash: Uint8Array;
  instantiate_permission?: AccessConfigSDKType | undefined;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: (MaxCallsLimit & MaxFundsLimit & CombinedLimit & Any) | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: (AllowAllMessagesFilter & AcceptedMessageKeysFilter & AcceptedMessagesFilter & Any) | undefined;
}
export interface ContractGrantProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant";
  value: Uint8Array;
}
export type ContractGrantEncoded = Omit<ContractGrant, "limit" | "filter"> & {
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: MaxCallsLimitProtoMsg | MaxFundsLimitProtoMsg | CombinedLimitProtoMsg | AnyProtoMsg | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: AllowAllMessagesFilterProtoMsg | AcceptedMessageKeysFilterProtoMsg | AcceptedMessagesFilterProtoMsg | AnyProtoMsg | undefined;
};
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantAmino {
  /** Contract is the bech32 address of the smart contract */
  contract: string;
  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   */
  limit?: AnyAmino | undefined;
  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   */
  filter?: AnyAmino | undefined;
}
export interface ContractGrantAminoMsg {
  type: "wasm/ContractGrant";
  value: ContractGrantAmino;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
  contract: string;
  limit?: MaxCallsLimitSDKType | MaxFundsLimitSDKType | CombinedLimitSDKType | AnySDKType | undefined;
  filter?: AllowAllMessagesFilterSDKType | AcceptedMessageKeysFilterSDKType | AcceptedMessagesFilterSDKType | AnySDKType | undefined;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
  /** Remaining number that is decremented on each execution */
  remaining: bigint;
}
export interface MaxCallsLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit";
  value: Uint8Array;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitAmino {
  /** Remaining number that is decremented on each execution */
  remaining: string;
}
export interface MaxCallsLimitAminoMsg {
  type: "wasm/MaxCallsLimit";
  value: MaxCallsLimitAmino;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
  remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
export interface MaxFundsLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit";
  value: Uint8Array;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitAmino {
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: CoinAmino[];
}
export interface MaxFundsLimitAminoMsg {
  type: "wasm/MaxFundsLimit";
  value: MaxFundsLimitAmino;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
  amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
  $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
  /** Remaining number that is decremented on each execution */
  callsRemaining: bigint;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: Coin[];
}
export interface CombinedLimitProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit";
  value: Uint8Array;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitAmino {
  /** Remaining number that is decremented on each execution */
  calls_remaining: string;
  /** Amounts is the maximal amount of tokens transferable to the contract. */
  amounts: CoinAmino[];
}
export interface CombinedLimitAminoMsg {
  type: "wasm/CombinedLimit";
  value: CombinedLimitAmino;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
  calls_remaining: bigint;
  amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
export interface AllowAllMessagesFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
  value: Uint8Array;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterAmino {}
export interface AllowAllMessagesFilterAminoMsg {
  type: "wasm/AllowAllMessagesFilter";
  value: AllowAllMessagesFilterAmino;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  /** Messages is the list of unique keys */
  keys: string[];
}
export interface AcceptedMessageKeysFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  value: Uint8Array;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterAmino {
  /** Messages is the list of unique keys */
  keys: string[];
}
export interface AcceptedMessageKeysFilterAminoMsg {
  type: "wasm/AcceptedMessageKeysFilter";
  value: AcceptedMessageKeysFilterAmino;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}
export interface AcceptedMessagesFilterProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  value: Uint8Array;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterAmino {
  /** Messages is the list of raw contract messages */
  messages: Uint8Array[];
}
export interface AcceptedMessagesFilterAminoMsg {
  type: "wasm/AcceptedMessagesFilter";
  value: AcceptedMessagesFilterAmino;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
  $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
  messages: Uint8Array[];
}
function createBaseStoreCodeAuthorization(): StoreCodeAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
    grants: []
  };
}
export const StoreCodeAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
  encode(message: StoreCodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      CodeGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): StoreCodeAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(CodeGrant.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StoreCodeAuthorization>): StoreCodeAuthorization {
    const message = createBaseStoreCodeAuthorization();
    message.grants = object.grants?.map(e => CodeGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StoreCodeAuthorizationAmino): StoreCodeAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => CodeGrant.fromAmino(e)) : []
    };
  },
  toAmino(message: StoreCodeAuthorization, useInterfaces: boolean = false): StoreCodeAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? CodeGrant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: StoreCodeAuthorizationAminoMsg): StoreCodeAuthorization {
    return StoreCodeAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: StoreCodeAuthorization, useInterfaces: boolean = false): StoreCodeAuthorizationAminoMsg {
    return {
      type: "wasm/StoreCodeAuthorization",
      value: StoreCodeAuthorization.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: StoreCodeAuthorizationProtoMsg, useInterfaces: boolean = false): StoreCodeAuthorization {
    return StoreCodeAuthorization.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StoreCodeAuthorization): Uint8Array {
    return StoreCodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: StoreCodeAuthorization): StoreCodeAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.StoreCodeAuthorization",
      value: StoreCodeAuthorization.encode(message).finish()
    };
  }
};
function createBaseContractExecutionAuthorization(): ContractExecutionAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
    grants: []
  };
}
export const ContractExecutionAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
  encode(message: ContractExecutionAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ContractExecutionAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractExecutionAuthorization>): ContractExecutionAuthorization {
    const message = createBaseContractExecutionAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromAmino(e)) : []
    };
  },
  toAmino(message: ContractExecutionAuthorization, useInterfaces: boolean = false): ContractExecutionAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: ContractExecutionAuthorizationAminoMsg): ContractExecutionAuthorization {
    return ContractExecutionAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: ContractExecutionAuthorization, useInterfaces: boolean = false): ContractExecutionAuthorizationAminoMsg {
    return {
      type: "wasm/ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ContractExecutionAuthorizationProtoMsg, useInterfaces: boolean = false): ContractExecutionAuthorization {
    return ContractExecutionAuthorization.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContractExecutionAuthorization): Uint8Array {
    return ContractExecutionAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
      value: ContractExecutionAuthorization.encode(message).finish()
    };
  }
};
function createBaseContractMigrationAuthorization(): ContractMigrationAuthorization {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
    grants: []
  };
}
export const ContractMigrationAuthorization = {
  typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
  encode(message: ContractMigrationAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ContractMigrationAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMigrationAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractMigrationAuthorization>): ContractMigrationAuthorization {
    const message = createBaseContractMigrationAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization {
    return {
      grants: Array.isArray(object?.grants) ? object.grants.map((e: any) => ContractGrant.fromAmino(e)) : []
    };
  },
  toAmino(message: ContractMigrationAuthorization, useInterfaces: boolean = false): ContractMigrationAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: ContractMigrationAuthorizationAminoMsg): ContractMigrationAuthorization {
    return ContractMigrationAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: ContractMigrationAuthorization, useInterfaces: boolean = false): ContractMigrationAuthorizationAminoMsg {
    return {
      type: "wasm/ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ContractMigrationAuthorizationProtoMsg, useInterfaces: boolean = false): ContractMigrationAuthorization {
    return ContractMigrationAuthorization.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContractMigrationAuthorization): Uint8Array {
    return ContractMigrationAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization",
      value: ContractMigrationAuthorization.encode(message).finish()
    };
  }
};
function createBaseCodeGrant(): CodeGrant {
  return {
    codeHash: new Uint8Array(),
    instantiatePermission: undefined
  };
}
export const CodeGrant = {
  typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
  encode(message: CodeGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): CodeGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CodeGrant>): CodeGrant {
    const message = createBaseCodeGrant();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  },
  fromAmino(object: CodeGrantAmino): CodeGrant {
    return {
      codeHash: object.code_hash,
      instantiatePermission: object?.instantiate_permission ? AccessConfig.fromAmino(object.instantiate_permission) : undefined
    };
  },
  toAmino(message: CodeGrant, useInterfaces: boolean = false): CodeGrantAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeGrantAminoMsg): CodeGrant {
    return CodeGrant.fromAmino(object.value);
  },
  toAminoMsg(message: CodeGrant, useInterfaces: boolean = false): CodeGrantAminoMsg {
    return {
      type: "wasm/CodeGrant",
      value: CodeGrant.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CodeGrantProtoMsg, useInterfaces: boolean = false): CodeGrant {
    return CodeGrant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CodeGrant): Uint8Array {
    return CodeGrant.encode(message).finish();
  },
  toProtoMsg(message: CodeGrant): CodeGrantProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeGrant",
      value: CodeGrant.encode(message).finish()
    };
  }
};
function createBaseContractGrant(): ContractGrant {
  return {
    contract: "",
    limit: undefined,
    filter: undefined
  };
}
export const ContractGrant = {
  typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
  encode(message: ContractGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.limit !== undefined) {
      Any.encode((message.limit as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      Any.encode((message.filter as Any), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ContractGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.limit = useInterfaces ? (Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder(reader) as Any) : Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.filter = useInterfaces ? (Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder(reader) as Any) : Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractGrant>): ContractGrant {
    const message = createBaseContractGrant();
    message.contract = object.contract ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Any.fromPartial(object.limit) : undefined;
    message.filter = object.filter !== undefined && object.filter !== null ? Any.fromPartial(object.filter) : undefined;
    return message;
  },
  fromAmino(object: ContractGrantAmino): ContractGrant {
    return {
      contract: object.contract,
      limit: object?.limit ? Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino(object.limit) : undefined,
      filter: object?.filter ? Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino(object.filter) : undefined
    };
  },
  toAmino(message: ContractGrant, useInterfaces: boolean = false): ContractGrantAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.limit = message.limit ? Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino((message.limit as Any), useInterfaces) : undefined;
    obj.filter = message.filter ? Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino((message.filter as Any), useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractGrantAminoMsg): ContractGrant {
    return ContractGrant.fromAmino(object.value);
  },
  toAminoMsg(message: ContractGrant, useInterfaces: boolean = false): ContractGrantAminoMsg {
    return {
      type: "wasm/ContractGrant",
      value: ContractGrant.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ContractGrantProtoMsg, useInterfaces: boolean = false): ContractGrant {
    return ContractGrant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContractGrant): Uint8Array {
    return ContractGrant.encode(message).finish();
  },
  toProtoMsg(message: ContractGrant): ContractGrantProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.ContractGrant",
      value: ContractGrant.encode(message).finish()
    };
  }
};
function createBaseMaxCallsLimit(): MaxCallsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
    remaining: BigInt(0)
  };
}
export const MaxCallsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
  encode(message: MaxCallsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.remaining);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): MaxCallsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxCallsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MaxCallsLimit>): MaxCallsLimit {
    const message = createBaseMaxCallsLimit();
    message.remaining = object.remaining !== undefined && object.remaining !== null ? BigInt(object.remaining.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit {
    return {
      remaining: BigInt(object.remaining)
    };
  },
  toAmino(message: MaxCallsLimit, useInterfaces: boolean = false): MaxCallsLimitAmino {
    const obj: any = {};
    obj.remaining = message.remaining ? message.remaining.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MaxCallsLimitAminoMsg): MaxCallsLimit {
    return MaxCallsLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MaxCallsLimit, useInterfaces: boolean = false): MaxCallsLimitAminoMsg {
    return {
      type: "wasm/MaxCallsLimit",
      value: MaxCallsLimit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MaxCallsLimitProtoMsg, useInterfaces: boolean = false): MaxCallsLimit {
    return MaxCallsLimit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MaxCallsLimit): Uint8Array {
    return MaxCallsLimit.encode(message).finish();
  },
  toProtoMsg(message: MaxCallsLimit): MaxCallsLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
      value: MaxCallsLimit.encode(message).finish()
    };
  }
};
function createBaseMaxFundsLimit(): MaxFundsLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
    amounts: []
  };
}
export const MaxFundsLimit = {
  typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
  encode(message: MaxFundsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): MaxFundsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxFundsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amounts.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MaxFundsLimit>): MaxFundsLimit {
    const message = createBaseMaxFundsLimit();
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit {
    return {
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MaxFundsLimit, useInterfaces: boolean = false): MaxFundsLimitAmino {
    const obj: any = {};
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: MaxFundsLimitAminoMsg): MaxFundsLimit {
    return MaxFundsLimit.fromAmino(object.value);
  },
  toAminoMsg(message: MaxFundsLimit, useInterfaces: boolean = false): MaxFundsLimitAminoMsg {
    return {
      type: "wasm/MaxFundsLimit",
      value: MaxFundsLimit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MaxFundsLimitProtoMsg, useInterfaces: boolean = false): MaxFundsLimit {
    return MaxFundsLimit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MaxFundsLimit): Uint8Array {
    return MaxFundsLimit.encode(message).finish();
  },
  toProtoMsg(message: MaxFundsLimit): MaxFundsLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
      value: MaxFundsLimit.encode(message).finish()
    };
  }
};
function createBaseCombinedLimit(): CombinedLimit {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
    callsRemaining: BigInt(0),
    amounts: []
  };
}
export const CombinedLimit = {
  typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
  encode(message: CombinedLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callsRemaining !== BigInt(0)) {
      writer.uint32(8).uint64(message.callsRemaining);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): CombinedLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCombinedLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callsRemaining = reader.uint64();
          break;
        case 2:
          message.amounts.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CombinedLimit>): CombinedLimit {
    const message = createBaseCombinedLimit();
    message.callsRemaining = object.callsRemaining !== undefined && object.callsRemaining !== null ? BigInt(object.callsRemaining.toString()) : BigInt(0);
    message.amounts = object.amounts?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CombinedLimitAmino): CombinedLimit {
    return {
      callsRemaining: BigInt(object.calls_remaining),
      amounts: Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CombinedLimit, useInterfaces: boolean = false): CombinedLimitAmino {
    const obj: any = {};
    obj.calls_remaining = message.callsRemaining ? message.callsRemaining.toString() : undefined;
    if (message.amounts) {
      obj.amounts = message.amounts.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: CombinedLimitAminoMsg): CombinedLimit {
    return CombinedLimit.fromAmino(object.value);
  },
  toAminoMsg(message: CombinedLimit, useInterfaces: boolean = false): CombinedLimitAminoMsg {
    return {
      type: "wasm/CombinedLimit",
      value: CombinedLimit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CombinedLimitProtoMsg, useInterfaces: boolean = false): CombinedLimit {
    return CombinedLimit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CombinedLimit): Uint8Array {
    return CombinedLimit.encode(message).finish();
  },
  toProtoMsg(message: CombinedLimit): CombinedLimitProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
      value: CombinedLimit.encode(message).finish()
    };
  }
};
function createBaseAllowAllMessagesFilter(): AllowAllMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter"
  };
}
export const AllowAllMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
  encode(_: AllowAllMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): AllowAllMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowAllMessagesFilter();
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
  fromPartial(_: Partial<AllowAllMessagesFilter>): AllowAllMessagesFilter {
    const message = createBaseAllowAllMessagesFilter();
    return message;
  },
  fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter {
    return {};
  },
  toAmino(_: AllowAllMessagesFilter, useInterfaces: boolean = false): AllowAllMessagesFilterAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllowAllMessagesFilterAminoMsg): AllowAllMessagesFilter {
    return AllowAllMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AllowAllMessagesFilter, useInterfaces: boolean = false): AllowAllMessagesFilterAminoMsg {
    return {
      type: "wasm/AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: AllowAllMessagesFilterProtoMsg, useInterfaces: boolean = false): AllowAllMessagesFilter {
    return AllowAllMessagesFilter.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AllowAllMessagesFilter): Uint8Array {
    return AllowAllMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
      value: AllowAllMessagesFilter.encode(message).finish()
    };
  }
};
function createBaseAcceptedMessageKeysFilter(): AcceptedMessageKeysFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
    keys: []
  };
}
export const AcceptedMessageKeysFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
  encode(message: AcceptedMessageKeysFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): AcceptedMessageKeysFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessageKeysFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter {
    const message = createBaseAcceptedMessageKeysFilter();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  toAmino(message: AcceptedMessageKeysFilter, useInterfaces: boolean = false): AcceptedMessageKeysFilterAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: AcceptedMessageKeysFilterAminoMsg): AcceptedMessageKeysFilter {
    return AcceptedMessageKeysFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AcceptedMessageKeysFilter, useInterfaces: boolean = false): AcceptedMessageKeysFilterAminoMsg {
    return {
      type: "wasm/AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: AcceptedMessageKeysFilterProtoMsg, useInterfaces: boolean = false): AcceptedMessageKeysFilter {
    return AcceptedMessageKeysFilter.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AcceptedMessageKeysFilter): Uint8Array {
    return AcceptedMessageKeysFilter.encode(message).finish();
  },
  toProtoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
      value: AcceptedMessageKeysFilter.encode(message).finish()
    };
  }
};
function createBaseAcceptedMessagesFilter(): AcceptedMessagesFilter {
  return {
    $typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
    messages: []
  };
}
export const AcceptedMessagesFilter = {
  typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
  encode(message: AcceptedMessagesFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): AcceptedMessagesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedMessagesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AcceptedMessagesFilter>): AcceptedMessagesFilter {
    const message = createBaseAcceptedMessagesFilter();
    message.messages = object.messages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => e) : []
    };
  },
  toAmino(message: AcceptedMessagesFilter, useInterfaces: boolean = false): AcceptedMessagesFilterAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAminoMsg(object: AcceptedMessagesFilterAminoMsg): AcceptedMessagesFilter {
    return AcceptedMessagesFilter.fromAmino(object.value);
  },
  toAminoMsg(message: AcceptedMessagesFilter, useInterfaces: boolean = false): AcceptedMessagesFilterAminoMsg {
    return {
      type: "wasm/AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: AcceptedMessagesFilterProtoMsg, useInterfaces: boolean = false): AcceptedMessagesFilter {
    return AcceptedMessagesFilter.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AcceptedMessagesFilter): Uint8Array {
    return AcceptedMessagesFilter.encode(message).finish();
  },
  toProtoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
      value: AcceptedMessagesFilter.encode(message).finish()
    };
  }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder = (input: BinaryReader | Uint8Array): MaxCallsLimit | MaxFundsLimit | CombinedLimit | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return MaxCallsLimit.decode(data.value, undefined, true);
    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return MaxFundsLimit.decode(data.value, undefined, true);
    case "/cosmwasm.wasm.v1.CombinedLimit":
      return CombinedLimit.decode(data.value, undefined, true);
    default:
      return data;
  }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "wasm/MaxCallsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit",
        value: MaxCallsLimit.encode(MaxCallsLimit.fromPartial(MaxCallsLimit.fromAmino(content.value))).finish()
      });
    case "wasm/MaxFundsLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
        value: MaxFundsLimit.encode(MaxFundsLimit.fromPartial(MaxFundsLimit.fromAmino(content.value))).finish()
      });
    case "wasm/CombinedLimit":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.CombinedLimit",
        value: CombinedLimit.encode(CombinedLimit.fromPartial(CombinedLimit.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino = (content: Any, useInterfaces: boolean = false) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.MaxCallsLimit":
      return {
        type: "wasm/MaxCallsLimit",
        value: MaxCallsLimit.toAmino(MaxCallsLimit.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    case "/cosmwasm.wasm.v1.MaxFundsLimit":
      return {
        type: "wasm/MaxFundsLimit",
        value: MaxFundsLimit.toAmino(MaxFundsLimit.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    case "/cosmwasm.wasm.v1.CombinedLimit":
      return {
        type: "wasm/CombinedLimit",
        value: CombinedLimit.toAmino(CombinedLimit.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    default:
      return Any.toAmino(content, useInterfaces);
  }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder = (input: BinaryReader | Uint8Array): AllowAllMessagesFilter | AcceptedMessageKeysFilter | AcceptedMessagesFilter | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32(), true);
  switch (data.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return AllowAllMessagesFilter.decode(data.value, undefined, true);
    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return AcceptedMessageKeysFilter.decode(data.value, undefined, true);
    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return AcceptedMessagesFilter.decode(data.value, undefined, true);
    default:
      return data;
  }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "wasm/AllowAllMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.encode(AllowAllMessagesFilter.fromPartial(AllowAllMessagesFilter.fromAmino(content.value))).finish()
      });
    case "wasm/AcceptedMessageKeysFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.encode(AcceptedMessageKeysFilter.fromPartial(AcceptedMessageKeysFilter.fromAmino(content.value))).finish()
      });
    case "wasm/AcceptedMessagesFilter":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.encode(AcceptedMessagesFilter.fromPartial(AcceptedMessagesFilter.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino = (content: Any, useInterfaces: boolean = false) => {
  switch (content.typeUrl) {
    case "/cosmwasm.wasm.v1.AllowAllMessagesFilter":
      return {
        type: "wasm/AllowAllMessagesFilter",
        value: AllowAllMessagesFilter.toAmino(AllowAllMessagesFilter.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    case "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter":
      return {
        type: "wasm/AcceptedMessageKeysFilter",
        value: AcceptedMessageKeysFilter.toAmino(AcceptedMessageKeysFilter.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    case "/cosmwasm.wasm.v1.AcceptedMessagesFilter":
      return {
        type: "wasm/AcceptedMessagesFilter",
        value: AcceptedMessagesFilter.toAmino(AcceptedMessagesFilter.decode(content.value, undefined, useInterfaces), useInterfaces)
      };
    default:
      return Any.toAmino(content, useInterfaces);
  }
};