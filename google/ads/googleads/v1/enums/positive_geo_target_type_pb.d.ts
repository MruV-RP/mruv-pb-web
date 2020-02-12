import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PositiveGeoTargetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositiveGeoTargetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PositiveGeoTargetTypeEnum): PositiveGeoTargetTypeEnum.AsObject;
  static serializeBinaryToWriter(message: PositiveGeoTargetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositiveGeoTargetTypeEnum;
  static deserializeBinaryFromReader(message: PositiveGeoTargetTypeEnum, reader: jspb.BinaryReader): PositiveGeoTargetTypeEnum;
}

export namespace PositiveGeoTargetTypeEnum {
  export type AsObject = {
  }

  export enum PositiveGeoTargetType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DONT_CARE = 2,
    AREA_OF_INTEREST = 3,
    LOCATION_OF_PRESENCE = 4,
  }
}

