import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MatchingFunctionContextTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingFunctionContextTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingFunctionContextTypeEnum): MatchingFunctionContextTypeEnum.AsObject;
  static serializeBinaryToWriter(message: MatchingFunctionContextTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingFunctionContextTypeEnum;
  static deserializeBinaryFromReader(message: MatchingFunctionContextTypeEnum, reader: jspb.BinaryReader): MatchingFunctionContextTypeEnum;
}

export namespace MatchingFunctionContextTypeEnum {
  export type AsObject = {
  }

  export enum MatchingFunctionContextType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FEED_ITEM_ID = 2,
    DEVICE_NAME = 3,
  }
}

