import { Header, HeaderAmino, HeaderSDKType, Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface Block {
  header: Header | undefined;
  data: Data | undefined;
  evidence: EvidenceList | undefined;
  lastCommit?: Commit | undefined;
}
export interface BlockProtoMsg {
  typeUrl: "/tendermint.types.Block";
  value: Uint8Array;
}
export interface BlockAmino {
  header?: HeaderAmino | undefined;
  data?: DataAmino | undefined;
  evidence?: EvidenceListAmino | undefined;
  last_commit?: CommitAmino | undefined;
}
export interface BlockAminoMsg {
  type: "/tendermint.types.Block";
  value: BlockAmino;
}
export interface BlockSDKType {
  header: HeaderSDKType | undefined;
  data: DataSDKType | undefined;
  evidence: EvidenceListSDKType | undefined;
  last_commit?: CommitSDKType | undefined;
}
function createBaseBlock(): Block {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    lastCommit: undefined
  };
}
export const Block = {
  typeUrl: "/tendermint.types.Block",
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Block>): Block {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
    return message;
  },
  fromAmino(object: BlockAmino): Block {
    return {
      header: object?.header ? Header.fromAmino(object.header) : undefined,
      data: object?.data ? Data.fromAmino(object.data) : undefined,
      evidence: object?.evidence ? EvidenceList.fromAmino(object.evidence) : undefined,
      lastCommit: object?.last_commit ? Commit.fromAmino(object.last_commit) : undefined
    };
  },
  toAmino(message: Block, useInterfaces: boolean = false): BlockAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header, useInterfaces) : undefined;
    obj.data = message.data ? Data.toAmino(message.data, useInterfaces) : undefined;
    obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence, useInterfaces) : undefined;
    obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockAminoMsg): Block {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockProtoMsg, useInterfaces: boolean = false): Block {
    return Block.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Block): Uint8Array {
    return Block.encode(message).finish();
  },
  toProtoMsg(message: Block): BlockProtoMsg {
    return {
      typeUrl: "/tendermint.types.Block",
      value: Block.encode(message).finish()
    };
  }
};