import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedMappingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingStatusEnum): FeedMappingStatusEnum.AsObject;
  static serializeBinaryToWriter(message: FeedMappingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingStatusEnum;
  static deserializeBinaryFromReader(message: FeedMappingStatusEnum, reader: jspb.BinaryReader): FeedMappingStatusEnum;
}

export namespace FeedMappingStatusEnum {
  export type AsObject = {
  }

  export enum FeedMappingStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

