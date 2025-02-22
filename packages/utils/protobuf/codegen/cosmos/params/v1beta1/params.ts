import { BinaryReader, BinaryWriter } from "../../../binary";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
  title: string;
  description: string;
  changes: ParamChange[];
}
export interface ParameterChangeProposalProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal";
  value: Uint8Array;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalAmino {
  title: string;
  description: string;
  changes: ParamChangeAmino[];
}
export interface ParameterChangeProposalAminoMsg {
  type: "cosmos-sdk/ParameterChangeProposal";
  value: ParameterChangeProposalAmino;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
  $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
  title: string;
  description: string;
  changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
export interface ParamChangeProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.ParamChange";
  value: Uint8Array;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeAmino {
  subspace: string;
  key: string;
  value: string;
}
export interface ParamChangeAminoMsg {
  type: "cosmos-sdk/ParamChange";
  value: ParamChangeAmino;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
  subspace: string;
  key: string;
  value: string;
}
function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    $typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
    title: "",
    description: "",
    changes: []
  };
}
export const ParameterChangeProposal = {
  typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
  encode(message: ParameterChangeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ParameterChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParameterChangeProposal>): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParameterChangeProposalAmino): ParameterChangeProposal {
    return {
      title: object.title,
      description: object.description,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromAmino(e)) : []
    };
  },
  toAmino(message: ParameterChangeProposal, useInterfaces: boolean = false): ParameterChangeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParameterChangeProposalAminoMsg): ParameterChangeProposal {
    return ParameterChangeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ParameterChangeProposal, useInterfaces: boolean = false): ParameterChangeProposalAminoMsg {
    return {
      type: "cosmos-sdk/ParameterChangeProposal",
      value: ParameterChangeProposal.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParameterChangeProposalProtoMsg, useInterfaces: boolean = false): ParameterChangeProposal {
    return ParameterChangeProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ParameterChangeProposal): Uint8Array {
    return ParameterChangeProposal.encode(message).finish();
  },
  toProtoMsg(message: ParameterChangeProposal): ParameterChangeProposalProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode(message).finish()
    };
  }
};
function createBaseParamChange(): ParamChange {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}
export const ParamChange = {
  typeUrl: "/cosmos.params.v1beta1.ParamChange",
  encode(message: ParamChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): ParamChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParamChange>): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ParamChangeAmino): ParamChange {
    return {
      subspace: object.subspace,
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: ParamChange, useInterfaces: boolean = false): ParamChangeAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: ParamChangeAminoMsg): ParamChange {
    return ParamChange.fromAmino(object.value);
  },
  toAminoMsg(message: ParamChange, useInterfaces: boolean = false): ParamChangeAminoMsg {
    return {
      type: "cosmos-sdk/ParamChange",
      value: ParamChange.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: ParamChangeProtoMsg, useInterfaces: boolean = false): ParamChange {
    return ParamChange.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ParamChange): Uint8Array {
    return ParamChange.encode(message).finish();
  },
  toProtoMsg(message: ParamChange): ParamChangeProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParamChange",
      value: ParamChange.encode(message).finish()
    };
  }
};