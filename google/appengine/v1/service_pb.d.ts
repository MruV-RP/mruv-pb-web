import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class Service extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  getSplit(): TrafficSplit | undefined;
  setSplit(value?: TrafficSplit): void;
  hasSplit(): boolean;
  clearSplit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    name: string,
    id: string,
    split?: TrafficSplit.AsObject,
  }
}

export class TrafficSplit extends jspb.Message {
  getShardBy(): TrafficSplit.ShardBy;
  setShardBy(value: TrafficSplit.ShardBy): void;

  getAllocationsMap(): jspb.Map<string, number>;
  clearAllocationsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrafficSplit.AsObject;
  static toObject(includeInstance: boolean, msg: TrafficSplit): TrafficSplit.AsObject;
  static serializeBinaryToWriter(message: TrafficSplit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrafficSplit;
  static deserializeBinaryFromReader(message: TrafficSplit, reader: jspb.BinaryReader): TrafficSplit;
}

export namespace TrafficSplit {
  export type AsObject = {
    shardBy: TrafficSplit.ShardBy,
    allocationsMap: Array<[string, number]>,
  }

  export enum ShardBy { 
    UNSPECIFIED = 0,
    COOKIE = 1,
    IP = 2,
  }
}

