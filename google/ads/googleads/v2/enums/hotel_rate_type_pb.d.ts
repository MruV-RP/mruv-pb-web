import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class HotelRateTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelRateTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HotelRateTypeEnum): HotelRateTypeEnum.AsObject;
  static serializeBinaryToWriter(message: HotelRateTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelRateTypeEnum;
  static deserializeBinaryFromReader(message: HotelRateTypeEnum, reader: jspb.BinaryReader): HotelRateTypeEnum;
}

export namespace HotelRateTypeEnum {
  export type AsObject = {
  }

  export enum HotelRateType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNAVAILABLE = 2,
    PUBLIC_RATE = 3,
    QUALIFIED_RATE = 4,
    PRIVATE_RATE = 5,
  }
}

