import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GeoTargetingTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetingTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetingTypeEnum): GeoTargetingTypeEnum.AsObject;
  static serializeBinaryToWriter(message: GeoTargetingTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetingTypeEnum;
  static deserializeBinaryFromReader(message: GeoTargetingTypeEnum, reader: jspb.BinaryReader): GeoTargetingTypeEnum;
}

export namespace GeoTargetingTypeEnum {
  export type AsObject = {
  }

  export enum GeoTargetingType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AREA_OF_INTEREST = 2,
    LOCATION_OF_PRESENCE = 3,
  }
}

