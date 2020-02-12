import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedLinkStatusEnum): FeedLinkStatusEnum.AsObject;
  static serializeBinaryToWriter(message: FeedLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedLinkStatusEnum;
  static deserializeBinaryFromReader(message: FeedLinkStatusEnum, reader: jspb.BinaryReader): FeedLinkStatusEnum;
}

export namespace FeedLinkStatusEnum {
  export type AsObject = {
  }

  export enum FeedLinkStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

