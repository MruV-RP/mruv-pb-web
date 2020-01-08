import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class TimeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TimeTypeEnum): TimeTypeEnum.AsObject;
  static serializeBinaryToWriter(message: TimeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeTypeEnum;
  static deserializeBinaryFromReader(message: TimeTypeEnum, reader: jspb.BinaryReader): TimeTypeEnum;
}

export namespace TimeTypeEnum {
  export type AsObject = {
  }

  export enum TimeType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NOW = 2,
    FOREVER = 3,
  }
}

