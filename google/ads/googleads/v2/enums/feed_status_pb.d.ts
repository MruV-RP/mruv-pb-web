import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedStatusEnum): FeedStatusEnum.AsObject;
  static serializeBinaryToWriter(message: FeedStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedStatusEnum;
  static deserializeBinaryFromReader(message: FeedStatusEnum, reader: jspb.BinaryReader): FeedStatusEnum;
}

export namespace FeedStatusEnum {
  export type AsObject = {
  }

  export enum FeedStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

