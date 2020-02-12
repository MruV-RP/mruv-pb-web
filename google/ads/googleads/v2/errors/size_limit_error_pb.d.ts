import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SizeLimitErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SizeLimitErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SizeLimitErrorEnum): SizeLimitErrorEnum.AsObject;
  static serializeBinaryToWriter(message: SizeLimitErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SizeLimitErrorEnum;
  static deserializeBinaryFromReader(message: SizeLimitErrorEnum, reader: jspb.BinaryReader): SizeLimitErrorEnum;
}

export namespace SizeLimitErrorEnum {
  export type AsObject = {
  }

  export enum SizeLimitError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUEST_SIZE_LIMIT_EXCEEDED = 2,
    RESPONSE_SIZE_LIMIT_EXCEEDED = 3,
  }
}

