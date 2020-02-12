import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CriterionCategoryLocaleAvailabilityModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryLocaleAvailabilityModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryLocaleAvailabilityModeEnum): CriterionCategoryLocaleAvailabilityModeEnum.AsObject;
  static serializeBinaryToWriter(message: CriterionCategoryLocaleAvailabilityModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryLocaleAvailabilityModeEnum;
  static deserializeBinaryFromReader(message: CriterionCategoryLocaleAvailabilityModeEnum, reader: jspb.BinaryReader): CriterionCategoryLocaleAvailabilityModeEnum;
}

export namespace CriterionCategoryLocaleAvailabilityModeEnum {
  export type AsObject = {
  }

  export enum CriterionCategoryLocaleAvailabilityMode { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ALL_LOCALES = 2,
    COUNTRY_AND_ALL_LANGUAGES = 3,
    LANGUAGE_AND_ALL_COUNTRIES = 4,
    COUNTRY_AND_LANGUAGE = 5,
  }
}

