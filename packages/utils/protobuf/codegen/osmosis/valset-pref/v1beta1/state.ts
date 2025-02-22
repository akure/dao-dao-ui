import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreference {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  valOperAddress: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}
export interface ValidatorPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference";
  value: Uint8Array;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceAmino {
  /**
   * val_oper_address holds the validator address the user wants to delegate
   * funds to.
   */
  val_oper_address: string;
  /** weight is decimal between 0 and 1, and they all sum to 1. */
  weight: string;
}
export interface ValidatorPreferenceAminoMsg {
  type: "osmosis/valsetpref/validator-preference";
  value: ValidatorPreferenceAmino;
}
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 */
export interface ValidatorPreferenceSDKType {
  val_oper_address: string;
  weight: string;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferences {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreference[];
}
export interface ValidatorSetPreferencesProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences";
  value: Uint8Array;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesAmino {
  /** preference holds {valAddr, weight} for the user who created it. */
  preferences: ValidatorPreferenceAmino[];
}
export interface ValidatorSetPreferencesAminoMsg {
  type: "osmosis/valsetpref/validator-set-preferences";
  value: ValidatorSetPreferencesAmino;
}
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 */
export interface ValidatorSetPreferencesSDKType {
  preferences: ValidatorPreferenceSDKType[];
}
function createBaseValidatorPreference(): ValidatorPreference {
  return {
    valOperAddress: "",
    weight: ""
  };
}
export const ValidatorPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
  encode(message: ValidatorPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ValidatorPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valOperAddress = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorPreference>): ValidatorPreference {
    const message = createBaseValidatorPreference();
    message.valOperAddress = object.valOperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: ValidatorPreferenceAmino): ValidatorPreference {
    return {
      valOperAddress: object.val_oper_address,
      weight: object.weight
    };
  },
  toAmino(message: ValidatorPreference, useInterfaces: boolean = false): ValidatorPreferenceAmino {
    const obj: any = {};
    obj.val_oper_address = message.valOperAddress;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: ValidatorPreferenceAminoMsg): ValidatorPreference {
    return ValidatorPreference.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorPreference, useInterfaces: boolean = false): ValidatorPreferenceAminoMsg {
    return {
      type: "osmosis/valsetpref/validator-preference",
      value: ValidatorPreference.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorPreferenceProtoMsg, useInterfaces: boolean = false): ValidatorPreference {
    return ValidatorPreference.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorPreference): Uint8Array {
    return ValidatorPreference.encode(message).finish();
  },
  toProtoMsg(message: ValidatorPreference): ValidatorPreferenceProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
      value: ValidatorPreference.encode(message).finish()
    };
  }
};
function createBaseValidatorSetPreferences(): ValidatorSetPreferences {
  return {
    preferences: []
  };
}
export const ValidatorSetPreferences = {
  typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
  encode(message: ValidatorSetPreferences, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ValidatorSetPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSetPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorSetPreferences>): ValidatorSetPreferences {
    const message = createBaseValidatorSetPreferences();
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorSetPreferencesAmino): ValidatorSetPreferences {
    return {
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorSetPreferences, useInterfaces: boolean = false): ValidatorSetPreferencesAmino {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorSetPreferencesAminoMsg): ValidatorSetPreferences {
    return ValidatorSetPreferences.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSetPreferences, useInterfaces: boolean = false): ValidatorSetPreferencesAminoMsg {
    return {
      type: "osmosis/valsetpref/validator-set-preferences",
      value: ValidatorSetPreferences.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ValidatorSetPreferencesProtoMsg, useInterfaces: boolean = false): ValidatorSetPreferences {
    return ValidatorSetPreferences.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorSetPreferences): Uint8Array {
    return ValidatorSetPreferences.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSetPreferences): ValidatorSetPreferencesProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
      value: ValidatorSetPreferences.encode(message).finish()
    };
  }
};