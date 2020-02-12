import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdParameterErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParameterErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdParameterErrorEnum): AdParameterErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AdParameterErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParameterErrorEnum;
  static deserializeBinaryFromReader(message: AdParameterErrorEnum, reader: jspb.BinaryReader): AdParameterErrorEnum;
}

export namespace AdParameterErrorEnum {
  export type AsObject = {
  }

  export enum AdParameterError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP_CRITERION_MUST_BE_KEYWORD = 2,
    INVALID_INSERTION_TEXT_FORMAT = 3,
  }
}

