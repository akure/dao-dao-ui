import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/protorev/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  enabled: boolean;
  admin: string;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    admin: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.protorev.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
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
          message.enabled = reader.bool();
          break;
        case 2:
          message.admin = reader.string();
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
    message.enabled = object.enabled ?? false;
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enabled: object.enabled,
      admin: object.admin
    };
  },
  toAmino(message: Params, useInterfaces: boolean = false): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.admin = message.admin;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params, useInterfaces: boolean = false): ParamsAminoMsg {
    return {
      type: "osmosis/protorev/params",
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
      typeUrl: "/osmosis.protorev.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};