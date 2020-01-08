import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ProductChannelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelEnum): ProductChannelEnum.AsObject;
  static serializeBinaryToWriter(message: ProductChannelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelEnum;
  static deserializeBinaryFromReader(message: ProductChannelEnum, reader: jspb.BinaryReader): ProductChannelEnum;
}

export namespace ProductChannelEnum {
  export type AsObject = {
  }

  export enum ProductChannel { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ONLINE = 2,
    LOCAL = 3,
  }
}

