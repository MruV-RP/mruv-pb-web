import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ProductChannelExclusivityEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelExclusivityEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelExclusivityEnum): ProductChannelExclusivityEnum.AsObject;
  static serializeBinaryToWriter(message: ProductChannelExclusivityEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelExclusivityEnum;
  static deserializeBinaryFromReader(message: ProductChannelExclusivityEnum, reader: jspb.BinaryReader): ProductChannelExclusivityEnum;
}

export namespace ProductChannelExclusivityEnum {
  export type AsObject = {
  }

  export enum ProductChannelExclusivity { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SINGLE_CHANNEL = 2,
    MULTI_CHANNEL = 3,
  }
}

