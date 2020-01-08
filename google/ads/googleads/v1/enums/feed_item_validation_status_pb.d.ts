import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedItemValidationStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemValidationStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemValidationStatusEnum): FeedItemValidationStatusEnum.AsObject;
  static serializeBinaryToWriter(message: FeedItemValidationStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemValidationStatusEnum;
  static deserializeBinaryFromReader(message: FeedItemValidationStatusEnum, reader: jspb.BinaryReader): FeedItemValidationStatusEnum;
}

export namespace FeedItemValidationStatusEnum {
  export type AsObject = {
  }

  export enum FeedItemValidationStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    INVALID = 3,
    VALID = 4,
  }
}

