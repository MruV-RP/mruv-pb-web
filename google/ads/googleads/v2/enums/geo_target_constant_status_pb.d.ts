import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GeoTargetConstantStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetConstantStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetConstantStatusEnum): GeoTargetConstantStatusEnum.AsObject;
  static serializeBinaryToWriter(message: GeoTargetConstantStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetConstantStatusEnum;
  static deserializeBinaryFromReader(message: GeoTargetConstantStatusEnum, reader: jspb.BinaryReader): GeoTargetConstantStatusEnum;
}

export namespace GeoTargetConstantStatusEnum {
  export type AsObject = {
  }

  export enum GeoTargetConstantStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVAL_PLANNED = 3,
  }
}

