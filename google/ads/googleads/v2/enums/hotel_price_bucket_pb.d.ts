import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class HotelPriceBucketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPriceBucketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPriceBucketEnum): HotelPriceBucketEnum.AsObject;
  static serializeBinaryToWriter(message: HotelPriceBucketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPriceBucketEnum;
  static deserializeBinaryFromReader(message: HotelPriceBucketEnum, reader: jspb.BinaryReader): HotelPriceBucketEnum;
}

export namespace HotelPriceBucketEnum {
  export type AsObject = {
  }

  export enum HotelPriceBucket { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LOWEST_TIED = 3,
    NOT_LOWEST = 4,
  }
}

