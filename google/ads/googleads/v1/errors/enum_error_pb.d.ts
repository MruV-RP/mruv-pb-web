import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class EnumErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: EnumErrorEnum): EnumErrorEnum.AsObject;
  static serializeBinaryToWriter(message: EnumErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumErrorEnum;
  static deserializeBinaryFromReader(message: EnumErrorEnum, reader: jspb.BinaryReader): EnumErrorEnum;
}

export namespace EnumErrorEnum {
  export type AsObject = {
  }

  export enum EnumError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENUM_VALUE_NOT_PERMITTED = 3,
  }
}

