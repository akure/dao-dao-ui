import { BinaryReader, BinaryWriter } from "../../binary";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distrEpochIdentifier: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.incentives.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/incentives/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  distr_epoch_identifier: string;
}
function createBaseParams(): Params {
  return {
    distrEpochIdentifier: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.incentives.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(10).string(message.distrEpochIdentifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distrEpochIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      distrEpochIdentifier: object.distr_epoch_identifier
    };
  },
  toAmino(message: Params, useInterfaces: boolean = false): ParamsAmino {
    const obj: any = {};
    obj.distr_epoch_identifier = message.distrEpochIdentifier;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params, useInterfaces: boolean = false): ParamsAminoMsg {
    return {
      type: "osmosis/incentives/params",
      value: Params.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = false): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.Params",
      value: Params.encode(message).finish()
    };
  }
};