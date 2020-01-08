import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CriterionCategoryChannelAvailabilityModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryChannelAvailabilityModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryChannelAvailabilityModeEnum): CriterionCategoryChannelAvailabilityModeEnum.AsObject;
  static serializeBinaryToWriter(message: CriterionCategoryChannelAvailabilityModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryChannelAvailabilityModeEnum;
  static deserializeBinaryFromReader(message: CriterionCategoryChannelAvailabilityModeEnum, reader: jspb.BinaryReader): CriterionCategoryChannelAvailabilityModeEnum;
}

export namespace CriterionCategoryChannelAvailabilityModeEnum {
  export type AsObject = {
  }

  export enum CriterionCategoryChannelAvailabilityMode { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ALL_CHANNELS = 2,
    CHANNEL_TYPE_AND_ALL_SUBTYPES = 3,
    CHANNEL_TYPE_AND_SUBSET_SUBTYPES = 4,
  }
}

