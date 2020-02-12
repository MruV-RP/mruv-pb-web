import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GoogleAdsFieldCategoryEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFieldCategoryEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFieldCategoryEnum): GoogleAdsFieldCategoryEnum.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsFieldCategoryEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFieldCategoryEnum;
  static deserializeBinaryFromReader(message: GoogleAdsFieldCategoryEnum, reader: jspb.BinaryReader): GoogleAdsFieldCategoryEnum;
}

export namespace GoogleAdsFieldCategoryEnum {
  export type AsObject = {
  }

  export enum GoogleAdsFieldCategory { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE = 2,
    ATTRIBUTE = 3,
    SEGMENT = 5,
    METRIC = 6,
  }
}

