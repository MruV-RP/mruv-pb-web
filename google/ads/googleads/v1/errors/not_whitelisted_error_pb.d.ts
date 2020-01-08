import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class NotWhitelistedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotWhitelistedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NotWhitelistedErrorEnum): NotWhitelistedErrorEnum.AsObject;
  static serializeBinaryToWriter(message: NotWhitelistedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotWhitelistedErrorEnum;
  static deserializeBinaryFromReader(message: NotWhitelistedErrorEnum, reader: jspb.BinaryReader): NotWhitelistedErrorEnum;
}

export namespace NotWhitelistedErrorEnum {
  export type AsObject = {
  }

  export enum NotWhitelistedError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOMER_NOT_WHITELISTED_FOR_THIS_FEATURE = 2,
  }
}

