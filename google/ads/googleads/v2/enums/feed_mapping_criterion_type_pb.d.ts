import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FeedMappingCriterionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingCriterionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingCriterionTypeEnum): FeedMappingCriterionTypeEnum.AsObject;
  static serializeBinaryToWriter(message: FeedMappingCriterionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingCriterionTypeEnum;
  static deserializeBinaryFromReader(message: FeedMappingCriterionTypeEnum, reader: jspb.BinaryReader): FeedMappingCriterionTypeEnum;
}

export namespace FeedMappingCriterionTypeEnum {
  export type AsObject = {
  }

  export enum FeedMappingCriterionType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LOCATION_EXTENSION_TARGETING = 4,
    DSA_PAGE_FEED = 3,
  }
}

