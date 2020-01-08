import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedItemTargetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetTypeEnum): FeedItemTargetTypeEnum.AsObject;
  static serializeBinaryToWriter(message: FeedItemTargetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetTypeEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetTypeEnum, reader: jspb.BinaryReader): FeedItemTargetTypeEnum;
}

export namespace FeedItemTargetTypeEnum {
  export type AsObject = {
  }

  export enum FeedItemTargetType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN = 2,
    AD_GROUP = 3,
    CRITERION = 4,
  }
}

