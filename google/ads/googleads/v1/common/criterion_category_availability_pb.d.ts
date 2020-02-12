import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_advertising_channel_sub_type_pb from '../../../../../google/ads/googleads/v1/enums/advertising_channel_sub_type_pb';
import * as google_ads_googleads_v1_enums_advertising_channel_type_pb from '../../../../../google/ads/googleads/v1/enums/advertising_channel_type_pb';
import * as google_ads_googleads_v1_enums_criterion_category_channel_availability_mode_pb from '../../../../../google/ads/googleads/v1/enums/criterion_category_channel_availability_mode_pb';
import * as google_ads_googleads_v1_enums_criterion_category_locale_availability_mode_pb from '../../../../../google/ads/googleads/v1/enums/criterion_category_locale_availability_mode_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CriterionCategoryAvailability extends jspb.Message {
  getChannel(): CriterionCategoryChannelAvailability | undefined;
  setChannel(value?: CriterionCategoryChannelAvailability): void;
  hasChannel(): boolean;
  clearChannel(): void;

  getLocaleList(): Array<CriterionCategoryLocaleAvailability>;
  setLocaleList(value: Array<CriterionCategoryLocaleAvailability>): void;
  clearLocaleList(): void;
  addLocale(value?: CriterionCategoryLocaleAvailability, index?: number): CriterionCategoryLocaleAvailability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryAvailability): CriterionCategoryAvailability.AsObject;
  static serializeBinaryToWriter(message: CriterionCategoryAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryAvailability, reader: jspb.BinaryReader): CriterionCategoryAvailability;
}

export namespace CriterionCategoryAvailability {
  export type AsObject = {
    channel?: CriterionCategoryChannelAvailability.AsObject,
    localeList: Array<CriterionCategoryLocaleAvailability.AsObject>,
  }
}

export class CriterionCategoryChannelAvailability extends jspb.Message {
  getAvailabilityMode(): google_ads_googleads_v1_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode;
  setAvailabilityMode(value: google_ads_googleads_v1_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode): void;

  getAdvertisingChannelType(): google_ads_googleads_v1_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType;
  setAdvertisingChannelType(value: google_ads_googleads_v1_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType): void;

  getAdvertisingChannelSubTypeList(): Array<google_ads_googleads_v1_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>;
  setAdvertisingChannelSubTypeList(value: Array<google_ads_googleads_v1_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>): void;
  clearAdvertisingChannelSubTypeList(): void;
  addAdvertisingChannelSubType(value: google_ads_googleads_v1_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType, index?: number): void;

  getIncludeDefaultChannelSubType(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIncludeDefaultChannelSubType(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasIncludeDefaultChannelSubType(): boolean;
  clearIncludeDefaultChannelSubType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryChannelAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryChannelAvailability): CriterionCategoryChannelAvailability.AsObject;
  static serializeBinaryToWriter(message: CriterionCategoryChannelAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryChannelAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryChannelAvailability, reader: jspb.BinaryReader): CriterionCategoryChannelAvailability;
}

export namespace CriterionCategoryChannelAvailability {
  export type AsObject = {
    availabilityMode: google_ads_googleads_v1_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode,
    advertisingChannelType: google_ads_googleads_v1_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType,
    advertisingChannelSubTypeList: Array<google_ads_googleads_v1_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>,
    includeDefaultChannelSubType?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class CriterionCategoryLocaleAvailability extends jspb.Message {
  getAvailabilityMode(): google_ads_googleads_v1_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode;
  setAvailabilityMode(value: google_ads_googleads_v1_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode): void;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLanguageCode(): boolean;
  clearLanguageCode(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryLocaleAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryLocaleAvailability): CriterionCategoryLocaleAvailability.AsObject;
  static serializeBinaryToWriter(message: CriterionCategoryLocaleAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryLocaleAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryLocaleAvailability, reader: jspb.BinaryReader): CriterionCategoryLocaleAvailability;
}

export namespace CriterionCategoryLocaleAvailability {
  export type AsObject = {
    availabilityMode: google_ads_googleads_v1_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

