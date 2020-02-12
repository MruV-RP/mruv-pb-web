import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SharedSetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetStatusEnum): SharedSetStatusEnum.AsObject;
  static serializeBinaryToWriter(message: SharedSetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetStatusEnum;
  static deserializeBinaryFromReader(message: SharedSetStatusEnum, reader: jspb.BinaryReader): SharedSetStatusEnum;
}

export namespace SharedSetStatusEnum {
  export type AsObject = {
  }

  export enum SharedSetStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

