import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedAttributeReferenceErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedAttributeReferenceErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedAttributeReferenceErrorEnum): FeedAttributeReferenceErrorEnum.AsObject;
  static serializeBinaryToWriter(message: FeedAttributeReferenceErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedAttributeReferenceErrorEnum;
  static deserializeBinaryFromReader(message: FeedAttributeReferenceErrorEnum, reader: jspb.BinaryReader): FeedAttributeReferenceErrorEnum;
}

export namespace FeedAttributeReferenceErrorEnum {
  export type AsObject = {
  }

  export enum FeedAttributeReferenceError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_REFERENCE_REMOVED_FEED = 2,
    INVALID_FEED_NAME = 3,
    INVALID_FEED_ATTRIBUTE_NAME = 4,
  }
}

