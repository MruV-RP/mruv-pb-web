import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedItemTargetDeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetDeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetDeviceEnum): FeedItemTargetDeviceEnum.AsObject;
  static serializeBinaryToWriter(message: FeedItemTargetDeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetDeviceEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetDeviceEnum, reader: jspb.BinaryReader): FeedItemTargetDeviceEnum;
}

export namespace FeedItemTargetDeviceEnum {
  export type AsObject = {
  }

  export enum FeedItemTargetDevice { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
  }
}

