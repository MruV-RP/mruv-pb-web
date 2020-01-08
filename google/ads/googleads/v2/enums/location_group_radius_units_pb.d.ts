import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class LocationGroupRadiusUnitsEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationGroupRadiusUnitsEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LocationGroupRadiusUnitsEnum): LocationGroupRadiusUnitsEnum.AsObject;
  static serializeBinaryToWriter(message: LocationGroupRadiusUnitsEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationGroupRadiusUnitsEnum;
  static deserializeBinaryFromReader(message: LocationGroupRadiusUnitsEnum, reader: jspb.BinaryReader): LocationGroupRadiusUnitsEnum;
}

export namespace LocationGroupRadiusUnitsEnum {
  export type AsObject = {
  }

  export enum LocationGroupRadiusUnits { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    METERS = 2,
    MILES = 3,
  }
}

