import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SharedSetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetTypeEnum): SharedSetTypeEnum.AsObject;
  static serializeBinaryToWriter(message: SharedSetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetTypeEnum;
  static deserializeBinaryFromReader(message: SharedSetTypeEnum, reader: jspb.BinaryReader): SharedSetTypeEnum;
}

export namespace SharedSetTypeEnum {
  export type AsObject = {
  }

  export enum SharedSetType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NEGATIVE_KEYWORDS = 2,
    NEGATIVE_PLACEMENTS = 3,
  }
}

