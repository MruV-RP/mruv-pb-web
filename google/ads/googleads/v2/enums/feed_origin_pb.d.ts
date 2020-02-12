import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedOriginEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedOriginEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedOriginEnum): FeedOriginEnum.AsObject;
  static serializeBinaryToWriter(message: FeedOriginEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedOriginEnum;
  static deserializeBinaryFromReader(message: FeedOriginEnum, reader: jspb.BinaryReader): FeedOriginEnum;
}

export namespace FeedOriginEnum {
  export type AsObject = {
  }

  export enum FeedOrigin { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    USER = 2,
    GOOGLE = 3,
  }
}

