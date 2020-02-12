import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class InternalErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InternalErrorEnum): InternalErrorEnum.AsObject;
  static serializeBinaryToWriter(message: InternalErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalErrorEnum;
  static deserializeBinaryFromReader(message: InternalErrorEnum, reader: jspb.BinaryReader): InternalErrorEnum;
}

export namespace InternalErrorEnum {
  export type AsObject = {
  }

  export enum InternalError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INTERNAL_ERROR = 2,
    ERROR_CODE_NOT_PUBLISHED = 3,
    TRANSIENT_ERROR = 4,
  }
}

