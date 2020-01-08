import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_age_range_type_pb from '../../../../../google/ads/googleads/v1/enums/age_range_type_pb';
import * as google_ads_googleads_v1_enums_app_payment_model_type_pb from '../../../../../google/ads/googleads/v1/enums/app_payment_model_type_pb';
import * as google_ads_googleads_v1_enums_content_label_type_pb from '../../../../../google/ads/googleads/v1/enums/content_label_type_pb';
import * as google_ads_googleads_v1_enums_day_of_week_pb from '../../../../../google/ads/googleads/v1/enums/day_of_week_pb';
import * as google_ads_googleads_v1_enums_device_pb from '../../../../../google/ads/googleads/v1/enums/device_pb';
import * as google_ads_googleads_v1_enums_gender_type_pb from '../../../../../google/ads/googleads/v1/enums/gender_type_pb';
import * as google_ads_googleads_v1_enums_hotel_date_selection_type_pb from '../../../../../google/ads/googleads/v1/enums/hotel_date_selection_type_pb';
import * as google_ads_googleads_v1_enums_income_range_type_pb from '../../../../../google/ads/googleads/v1/enums/income_range_type_pb';
import * as google_ads_googleads_v1_enums_interaction_type_pb from '../../../../../google/ads/googleads/v1/enums/interaction_type_pb';
import * as google_ads_googleads_v1_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v1/enums/keyword_match_type_pb';
import * as google_ads_googleads_v1_enums_listing_custom_attribute_index_pb from '../../../../../google/ads/googleads/v1/enums/listing_custom_attribute_index_pb';
import * as google_ads_googleads_v1_enums_listing_group_type_pb from '../../../../../google/ads/googleads/v1/enums/listing_group_type_pb';
import * as google_ads_googleads_v1_enums_location_group_radius_units_pb from '../../../../../google/ads/googleads/v1/enums/location_group_radius_units_pb';
import * as google_ads_googleads_v1_enums_minute_of_hour_pb from '../../../../../google/ads/googleads/v1/enums/minute_of_hour_pb';
import * as google_ads_googleads_v1_enums_parental_status_type_pb from '../../../../../google/ads/googleads/v1/enums/parental_status_type_pb';
import * as google_ads_googleads_v1_enums_preferred_content_type_pb from '../../../../../google/ads/googleads/v1/enums/preferred_content_type_pb';
import * as google_ads_googleads_v1_enums_product_bidding_category_level_pb from '../../../../../google/ads/googleads/v1/enums/product_bidding_category_level_pb';
import * as google_ads_googleads_v1_enums_product_channel_pb from '../../../../../google/ads/googleads/v1/enums/product_channel_pb';
import * as google_ads_googleads_v1_enums_product_channel_exclusivity_pb from '../../../../../google/ads/googleads/v1/enums/product_channel_exclusivity_pb';
import * as google_ads_googleads_v1_enums_product_condition_pb from '../../../../../google/ads/googleads/v1/enums/product_condition_pb';
import * as google_ads_googleads_v1_enums_product_type_level_pb from '../../../../../google/ads/googleads/v1/enums/product_type_level_pb';
import * as google_ads_googleads_v1_enums_proximity_radius_units_pb from '../../../../../google/ads/googleads/v1/enums/proximity_radius_units_pb';
import * as google_ads_googleads_v1_enums_webpage_condition_operand_pb from '../../../../../google/ads/googleads/v1/enums/webpage_condition_operand_pb';
import * as google_ads_googleads_v1_enums_webpage_condition_operator_pb from '../../../../../google/ads/googleads/v1/enums/webpage_condition_operator_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class KeywordInfo extends jspb.Message {
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasText(): boolean;
  clearText(): void;

  getMatchType(): google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
  setMatchType(value: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordInfo): KeywordInfo.AsObject;
  static serializeBinaryToWriter(message: KeywordInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordInfo;
  static deserializeBinaryFromReader(message: KeywordInfo, reader: jspb.BinaryReader): KeywordInfo;
}

export namespace KeywordInfo {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
  }
}

export class PlacementInfo extends jspb.Message {
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUrl(): boolean;
  clearUrl(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacementInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlacementInfo): PlacementInfo.AsObject;
  static serializeBinaryToWriter(message: PlacementInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacementInfo;
  static deserializeBinaryFromReader(message: PlacementInfo, reader: jspb.BinaryReader): PlacementInfo;
}

export namespace PlacementInfo {
  export type AsObject = {
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MobileAppCategoryInfo extends jspb.Message {
  getMobileAppCategoryConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobileAppCategoryConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMobileAppCategoryConstant(): boolean;
  clearMobileAppCategoryConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileAppCategoryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileAppCategoryInfo): MobileAppCategoryInfo.AsObject;
  static serializeBinaryToWriter(message: MobileAppCategoryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileAppCategoryInfo;
  static deserializeBinaryFromReader(message: MobileAppCategoryInfo, reader: jspb.BinaryReader): MobileAppCategoryInfo;
}

export namespace MobileAppCategoryInfo {
  export type AsObject = {
    mobileAppCategoryConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MobileApplicationInfo extends jspb.Message {
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAppId(): boolean;
  clearAppId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileApplicationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileApplicationInfo): MobileApplicationInfo.AsObject;
  static serializeBinaryToWriter(message: MobileApplicationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileApplicationInfo;
  static deserializeBinaryFromReader(message: MobileApplicationInfo, reader: jspb.BinaryReader): MobileApplicationInfo;
}

export namespace MobileApplicationInfo {
  export type AsObject = {
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LocationInfo extends jspb.Message {
  getGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
    geoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DeviceInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_device_pb.DeviceEnum.Device;
  setType(value: google_ads_googleads_v1_enums_device_pb.DeviceEnum.Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_device_pb.DeviceEnum.Device,
  }
}

export class PreferredContentInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType;
  setType(value: google_ads_googleads_v1_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferredContentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PreferredContentInfo): PreferredContentInfo.AsObject;
  static serializeBinaryToWriter(message: PreferredContentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferredContentInfo;
  static deserializeBinaryFromReader(message: PreferredContentInfo, reader: jspb.BinaryReader): PreferredContentInfo;
}

export namespace PreferredContentInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType,
  }
}

export class ListingGroupInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType;
  setType(value: google_ads_googleads_v1_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType): void;

  getCaseValue(): ListingDimensionInfo | undefined;
  setCaseValue(value?: ListingDimensionInfo): void;
  hasCaseValue(): boolean;
  clearCaseValue(): void;

  getParentAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setParentAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasParentAdGroupCriterion(): boolean;
  clearParentAdGroupCriterion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingGroupInfo): ListingGroupInfo.AsObject;
  static serializeBinaryToWriter(message: ListingGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingGroupInfo;
  static deserializeBinaryFromReader(message: ListingGroupInfo, reader: jspb.BinaryReader): ListingGroupInfo;
}

export namespace ListingGroupInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType,
    caseValue?: ListingDimensionInfo.AsObject,
    parentAdGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListingScopeInfo extends jspb.Message {
  getDimensionsList(): Array<ListingDimensionInfo>;
  setDimensionsList(value: Array<ListingDimensionInfo>): void;
  clearDimensionsList(): void;
  addDimensions(value?: ListingDimensionInfo, index?: number): ListingDimensionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingScopeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingScopeInfo): ListingScopeInfo.AsObject;
  static serializeBinaryToWriter(message: ListingScopeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingScopeInfo;
  static deserializeBinaryFromReader(message: ListingScopeInfo, reader: jspb.BinaryReader): ListingScopeInfo;
}

export namespace ListingScopeInfo {
  export type AsObject = {
    dimensionsList: Array<ListingDimensionInfo.AsObject>,
  }
}

export class ListingDimensionInfo extends jspb.Message {
  getListingBrand(): ListingBrandInfo | undefined;
  setListingBrand(value?: ListingBrandInfo): void;
  hasListingBrand(): boolean;
  clearListingBrand(): void;

  getHotelId(): HotelIdInfo | undefined;
  setHotelId(value?: HotelIdInfo): void;
  hasHotelId(): boolean;
  clearHotelId(): void;

  getHotelClass(): HotelClassInfo | undefined;
  setHotelClass(value?: HotelClassInfo): void;
  hasHotelClass(): boolean;
  clearHotelClass(): void;

  getHotelCountryRegion(): HotelCountryRegionInfo | undefined;
  setHotelCountryRegion(value?: HotelCountryRegionInfo): void;
  hasHotelCountryRegion(): boolean;
  clearHotelCountryRegion(): void;

  getHotelState(): HotelStateInfo | undefined;
  setHotelState(value?: HotelStateInfo): void;
  hasHotelState(): boolean;
  clearHotelState(): void;

  getHotelCity(): HotelCityInfo | undefined;
  setHotelCity(value?: HotelCityInfo): void;
  hasHotelCity(): boolean;
  clearHotelCity(): void;

  getListingCustomAttribute(): ListingCustomAttributeInfo | undefined;
  setListingCustomAttribute(value?: ListingCustomAttributeInfo): void;
  hasListingCustomAttribute(): boolean;
  clearListingCustomAttribute(): void;

  getProductBiddingCategory(): ProductBiddingCategoryInfo | undefined;
  setProductBiddingCategory(value?: ProductBiddingCategoryInfo): void;
  hasProductBiddingCategory(): boolean;
  clearProductBiddingCategory(): void;

  getProductChannel(): ProductChannelInfo | undefined;
  setProductChannel(value?: ProductChannelInfo): void;
  hasProductChannel(): boolean;
  clearProductChannel(): void;

  getProductChannelExclusivity(): ProductChannelExclusivityInfo | undefined;
  setProductChannelExclusivity(value?: ProductChannelExclusivityInfo): void;
  hasProductChannelExclusivity(): boolean;
  clearProductChannelExclusivity(): void;

  getProductCondition(): ProductConditionInfo | undefined;
  setProductCondition(value?: ProductConditionInfo): void;
  hasProductCondition(): boolean;
  clearProductCondition(): void;

  getProductItemId(): ProductItemIdInfo | undefined;
  setProductItemId(value?: ProductItemIdInfo): void;
  hasProductItemId(): boolean;
  clearProductItemId(): void;

  getProductType(): ProductTypeInfo | undefined;
  setProductType(value?: ProductTypeInfo): void;
  hasProductType(): boolean;
  clearProductType(): void;

  getUnknownListingDimension(): UnknownListingDimensionInfo | undefined;
  setUnknownListingDimension(value?: UnknownListingDimensionInfo): void;
  hasUnknownListingDimension(): boolean;
  clearUnknownListingDimension(): void;

  getDimensionCase(): ListingDimensionInfo.DimensionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingDimensionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingDimensionInfo): ListingDimensionInfo.AsObject;
  static serializeBinaryToWriter(message: ListingDimensionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingDimensionInfo;
  static deserializeBinaryFromReader(message: ListingDimensionInfo, reader: jspb.BinaryReader): ListingDimensionInfo;
}

export namespace ListingDimensionInfo {
  export type AsObject = {
    listingBrand?: ListingBrandInfo.AsObject,
    hotelId?: HotelIdInfo.AsObject,
    hotelClass?: HotelClassInfo.AsObject,
    hotelCountryRegion?: HotelCountryRegionInfo.AsObject,
    hotelState?: HotelStateInfo.AsObject,
    hotelCity?: HotelCityInfo.AsObject,
    listingCustomAttribute?: ListingCustomAttributeInfo.AsObject,
    productBiddingCategory?: ProductBiddingCategoryInfo.AsObject,
    productChannel?: ProductChannelInfo.AsObject,
    productChannelExclusivity?: ProductChannelExclusivityInfo.AsObject,
    productCondition?: ProductConditionInfo.AsObject,
    productItemId?: ProductItemIdInfo.AsObject,
    productType?: ProductTypeInfo.AsObject,
    unknownListingDimension?: UnknownListingDimensionInfo.AsObject,
  }

  export enum DimensionCase { 
    DIMENSION_NOT_SET = 0,
    LISTING_BRAND = 1,
    HOTEL_ID = 2,
    HOTEL_CLASS = 3,
    HOTEL_COUNTRY_REGION = 4,
    HOTEL_STATE = 5,
    HOTEL_CITY = 6,
    LISTING_CUSTOM_ATTRIBUTE = 7,
    PRODUCT_BIDDING_CATEGORY = 13,
    PRODUCT_CHANNEL = 8,
    PRODUCT_CHANNEL_EXCLUSIVITY = 9,
    PRODUCT_CONDITION = 10,
    PRODUCT_ITEM_ID = 11,
    PRODUCT_TYPE = 12,
    UNKNOWN_LISTING_DIMENSION = 14,
  }
}

export class ListingBrandInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingBrandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingBrandInfo): ListingBrandInfo.AsObject;
  static serializeBinaryToWriter(message: ListingBrandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingBrandInfo;
  static deserializeBinaryFromReader(message: ListingBrandInfo, reader: jspb.BinaryReader): ListingBrandInfo;
}

export namespace ListingBrandInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelIdInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelIdInfo): HotelIdInfo.AsObject;
  static serializeBinaryToWriter(message: HotelIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelIdInfo;
  static deserializeBinaryFromReader(message: HotelIdInfo, reader: jspb.BinaryReader): HotelIdInfo;
}

export namespace HotelIdInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelClassInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelClassInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelClassInfo): HotelClassInfo.AsObject;
  static serializeBinaryToWriter(message: HotelClassInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelClassInfo;
  static deserializeBinaryFromReader(message: HotelClassInfo, reader: jspb.BinaryReader): HotelClassInfo;
}

export namespace HotelClassInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCountryRegionInfo extends jspb.Message {
  getCountryRegionCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryRegionCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryRegionCriterion(): boolean;
  clearCountryRegionCriterion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCountryRegionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCountryRegionInfo): HotelCountryRegionInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCountryRegionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCountryRegionInfo;
  static deserializeBinaryFromReader(message: HotelCountryRegionInfo, reader: jspb.BinaryReader): HotelCountryRegionInfo;
}

export namespace HotelCountryRegionInfo {
  export type AsObject = {
    countryRegionCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelStateInfo extends jspb.Message {
  getStateCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStateCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStateCriterion(): boolean;
  clearStateCriterion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelStateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelStateInfo): HotelStateInfo.AsObject;
  static serializeBinaryToWriter(message: HotelStateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelStateInfo;
  static deserializeBinaryFromReader(message: HotelStateInfo, reader: jspb.BinaryReader): HotelStateInfo;
}

export namespace HotelStateInfo {
  export type AsObject = {
    stateCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelCityInfo extends jspb.Message {
  getCityCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCityCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCityCriterion(): boolean;
  clearCityCriterion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCityInfo): HotelCityInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCityInfo;
  static deserializeBinaryFromReader(message: HotelCityInfo, reader: jspb.BinaryReader): HotelCityInfo;
}

export namespace HotelCityInfo {
  export type AsObject = {
    cityCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListingCustomAttributeInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  getIndex(): google_ads_googleads_v1_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex;
  setIndex(value: google_ads_googleads_v1_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingCustomAttributeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingCustomAttributeInfo): ListingCustomAttributeInfo.AsObject;
  static serializeBinaryToWriter(message: ListingCustomAttributeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingCustomAttributeInfo;
  static deserializeBinaryFromReader(message: ListingCustomAttributeInfo, reader: jspb.BinaryReader): ListingCustomAttributeInfo;
}

export namespace ListingCustomAttributeInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    index: google_ads_googleads_v1_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex,
  }
}

export class ProductBiddingCategoryInfo extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  getLevel(): google_ads_googleads_v1_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel;
  setLevel(value: google_ads_googleads_v1_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBiddingCategoryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBiddingCategoryInfo): ProductBiddingCategoryInfo.AsObject;
  static serializeBinaryToWriter(message: ProductBiddingCategoryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBiddingCategoryInfo;
  static deserializeBinaryFromReader(message: ProductBiddingCategoryInfo, reader: jspb.BinaryReader): ProductBiddingCategoryInfo;
}

export namespace ProductBiddingCategoryInfo {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    level: google_ads_googleads_v1_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel,
  }
}

export class ProductChannelInfo extends jspb.Message {
  getChannel(): google_ads_googleads_v1_enums_product_channel_pb.ProductChannelEnum.ProductChannel;
  setChannel(value: google_ads_googleads_v1_enums_product_channel_pb.ProductChannelEnum.ProductChannel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelInfo): ProductChannelInfo.AsObject;
  static serializeBinaryToWriter(message: ProductChannelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelInfo;
  static deserializeBinaryFromReader(message: ProductChannelInfo, reader: jspb.BinaryReader): ProductChannelInfo;
}

export namespace ProductChannelInfo {
  export type AsObject = {
    channel: google_ads_googleads_v1_enums_product_channel_pb.ProductChannelEnum.ProductChannel,
  }
}

export class ProductChannelExclusivityInfo extends jspb.Message {
  getChannelExclusivity(): google_ads_googleads_v1_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity;
  setChannelExclusivity(value: google_ads_googleads_v1_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelExclusivityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelExclusivityInfo): ProductChannelExclusivityInfo.AsObject;
  static serializeBinaryToWriter(message: ProductChannelExclusivityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelExclusivityInfo;
  static deserializeBinaryFromReader(message: ProductChannelExclusivityInfo, reader: jspb.BinaryReader): ProductChannelExclusivityInfo;
}

export namespace ProductChannelExclusivityInfo {
  export type AsObject = {
    channelExclusivity: google_ads_googleads_v1_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity,
  }
}

export class ProductConditionInfo extends jspb.Message {
  getCondition(): google_ads_googleads_v1_enums_product_condition_pb.ProductConditionEnum.ProductCondition;
  setCondition(value: google_ads_googleads_v1_enums_product_condition_pb.ProductConditionEnum.ProductCondition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductConditionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductConditionInfo): ProductConditionInfo.AsObject;
  static serializeBinaryToWriter(message: ProductConditionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductConditionInfo;
  static deserializeBinaryFromReader(message: ProductConditionInfo, reader: jspb.BinaryReader): ProductConditionInfo;
}

export namespace ProductConditionInfo {
  export type AsObject = {
    condition: google_ads_googleads_v1_enums_product_condition_pb.ProductConditionEnum.ProductCondition,
  }
}

export class ProductItemIdInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductItemIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductItemIdInfo): ProductItemIdInfo.AsObject;
  static serializeBinaryToWriter(message: ProductItemIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductItemIdInfo;
  static deserializeBinaryFromReader(message: ProductItemIdInfo, reader: jspb.BinaryReader): ProductItemIdInfo;
}

export namespace ProductItemIdInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ProductTypeInfo extends jspb.Message {
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  getLevel(): google_ads_googleads_v1_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel;
  setLevel(value: google_ads_googleads_v1_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTypeInfo): ProductTypeInfo.AsObject;
  static serializeBinaryToWriter(message: ProductTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTypeInfo;
  static deserializeBinaryFromReader(message: ProductTypeInfo, reader: jspb.BinaryReader): ProductTypeInfo;
}

export namespace ProductTypeInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    level: google_ads_googleads_v1_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel,
  }
}

export class UnknownListingDimensionInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnknownListingDimensionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UnknownListingDimensionInfo): UnknownListingDimensionInfo.AsObject;
  static serializeBinaryToWriter(message: UnknownListingDimensionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnknownListingDimensionInfo;
  static deserializeBinaryFromReader(message: UnknownListingDimensionInfo, reader: jspb.BinaryReader): UnknownListingDimensionInfo;
}

export namespace UnknownListingDimensionInfo {
  export type AsObject = {
  }
}

export class HotelDateSelectionTypeInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType;
  setType(value: google_ads_googleads_v1_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelDateSelectionTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelDateSelectionTypeInfo): HotelDateSelectionTypeInfo.AsObject;
  static serializeBinaryToWriter(message: HotelDateSelectionTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelDateSelectionTypeInfo;
  static deserializeBinaryFromReader(message: HotelDateSelectionTypeInfo, reader: jspb.BinaryReader): HotelDateSelectionTypeInfo;
}

export namespace HotelDateSelectionTypeInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType,
  }
}

export class HotelAdvanceBookingWindowInfo extends jspb.Message {
  getMinDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinDays(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasMinDays(): boolean;
  clearMinDays(): void;

  getMaxDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxDays(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasMaxDays(): boolean;
  clearMaxDays(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdvanceBookingWindowInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdvanceBookingWindowInfo): HotelAdvanceBookingWindowInfo.AsObject;
  static serializeBinaryToWriter(message: HotelAdvanceBookingWindowInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdvanceBookingWindowInfo;
  static deserializeBinaryFromReader(message: HotelAdvanceBookingWindowInfo, reader: jspb.BinaryReader): HotelAdvanceBookingWindowInfo;
}

export namespace HotelAdvanceBookingWindowInfo {
  export type AsObject = {
    minDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelLengthOfStayInfo extends jspb.Message {
  getMinNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinNights(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasMinNights(): boolean;
  clearMinNights(): void;

  getMaxNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxNights(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasMaxNights(): boolean;
  clearMaxNights(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelLengthOfStayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelLengthOfStayInfo): HotelLengthOfStayInfo.AsObject;
  static serializeBinaryToWriter(message: HotelLengthOfStayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelLengthOfStayInfo;
  static deserializeBinaryFromReader(message: HotelLengthOfStayInfo, reader: jspb.BinaryReader): HotelLengthOfStayInfo;
}

export namespace HotelLengthOfStayInfo {
  export type AsObject = {
    minNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCheckInDayInfo extends jspb.Message {
  getDayOfWeek(): google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCheckInDayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCheckInDayInfo): HotelCheckInDayInfo.AsObject;
  static serializeBinaryToWriter(message: HotelCheckInDayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCheckInDayInfo;
  static deserializeBinaryFromReader(message: HotelCheckInDayInfo, reader: jspb.BinaryReader): HotelCheckInDayInfo;
}

export namespace HotelCheckInDayInfo {
  export type AsObject = {
    dayOfWeek: google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
  }
}

export class InteractionTypeInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_interaction_type_pb.InteractionTypeEnum.InteractionType;
  setType(value: google_ads_googleads_v1_enums_interaction_type_pb.InteractionTypeEnum.InteractionType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionTypeInfo): InteractionTypeInfo.AsObject;
  static serializeBinaryToWriter(message: InteractionTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionTypeInfo;
  static deserializeBinaryFromReader(message: InteractionTypeInfo, reader: jspb.BinaryReader): InteractionTypeInfo;
}

export namespace InteractionTypeInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_interaction_type_pb.InteractionTypeEnum.InteractionType,
  }
}

export class AdScheduleInfo extends jspb.Message {
  getStartMinute(): google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour;
  setStartMinute(value: google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour): void;

  getEndMinute(): google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour;
  setEndMinute(value: google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour): void;

  getStartHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setStartHour(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasStartHour(): boolean;
  clearStartHour(): void;

  getEndHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setEndHour(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasEndHour(): boolean;
  clearEndHour(): void;

  getDayOfWeek(): google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdScheduleInfo): AdScheduleInfo.AsObject;
  static serializeBinaryToWriter(message: AdScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdScheduleInfo;
  static deserializeBinaryFromReader(message: AdScheduleInfo, reader: jspb.BinaryReader): AdScheduleInfo;
}

export namespace AdScheduleInfo {
  export type AsObject = {
    startMinute: google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour,
    endMinute: google_ads_googleads_v1_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour,
    startHour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    endHour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dayOfWeek: google_ads_googleads_v1_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
  }
}

export class AgeRangeInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType;
  setType(value: google_ads_googleads_v1_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgeRangeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgeRangeInfo): AgeRangeInfo.AsObject;
  static serializeBinaryToWriter(message: AgeRangeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgeRangeInfo;
  static deserializeBinaryFromReader(message: AgeRangeInfo, reader: jspb.BinaryReader): AgeRangeInfo;
}

export namespace AgeRangeInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType,
  }
}

export class GenderInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_gender_type_pb.GenderTypeEnum.GenderType;
  setType(value: google_ads_googleads_v1_enums_gender_type_pb.GenderTypeEnum.GenderType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GenderInfo): GenderInfo.AsObject;
  static serializeBinaryToWriter(message: GenderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderInfo;
  static deserializeBinaryFromReader(message: GenderInfo, reader: jspb.BinaryReader): GenderInfo;
}

export namespace GenderInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_gender_type_pb.GenderTypeEnum.GenderType,
  }
}

export class IncomeRangeInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType;
  setType(value: google_ads_googleads_v1_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncomeRangeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IncomeRangeInfo): IncomeRangeInfo.AsObject;
  static serializeBinaryToWriter(message: IncomeRangeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncomeRangeInfo;
  static deserializeBinaryFromReader(message: IncomeRangeInfo, reader: jspb.BinaryReader): IncomeRangeInfo;
}

export namespace IncomeRangeInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType,
  }
}

export class ParentalStatusInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType;
  setType(value: google_ads_googleads_v1_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentalStatusInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ParentalStatusInfo): ParentalStatusInfo.AsObject;
  static serializeBinaryToWriter(message: ParentalStatusInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentalStatusInfo;
  static deserializeBinaryFromReader(message: ParentalStatusInfo, reader: jspb.BinaryReader): ParentalStatusInfo;
}

export namespace ParentalStatusInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType,
  }
}

export class YouTubeVideoInfo extends jspb.Message {
  getVideoId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setVideoId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasVideoId(): boolean;
  clearVideoId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YouTubeVideoInfo.AsObject;
  static toObject(includeInstance: boolean, msg: YouTubeVideoInfo): YouTubeVideoInfo.AsObject;
  static serializeBinaryToWriter(message: YouTubeVideoInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YouTubeVideoInfo;
  static deserializeBinaryFromReader(message: YouTubeVideoInfo, reader: jspb.BinaryReader): YouTubeVideoInfo;
}

export namespace YouTubeVideoInfo {
  export type AsObject = {
    videoId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class YouTubeChannelInfo extends jspb.Message {
  getChannelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setChannelId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasChannelId(): boolean;
  clearChannelId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YouTubeChannelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: YouTubeChannelInfo): YouTubeChannelInfo.AsObject;
  static serializeBinaryToWriter(message: YouTubeChannelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YouTubeChannelInfo;
  static deserializeBinaryFromReader(message: YouTubeChannelInfo, reader: jspb.BinaryReader): YouTubeChannelInfo;
}

export namespace YouTubeChannelInfo {
  export type AsObject = {
    channelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserListInfo extends jspb.Message {
  getUserList(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserList(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUserList(): boolean;
  clearUserList(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListInfo): UserListInfo.AsObject;
  static serializeBinaryToWriter(message: UserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListInfo;
  static deserializeBinaryFromReader(message: UserListInfo, reader: jspb.BinaryReader): UserListInfo;
}

export namespace UserListInfo {
  export type AsObject = {
    userList?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ProximityInfo extends jspb.Message {
  getGeoPoint(): GeoPointInfo | undefined;
  setGeoPoint(value?: GeoPointInfo): void;
  hasGeoPoint(): boolean;
  clearGeoPoint(): void;

  getRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRadius(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasRadius(): boolean;
  clearRadius(): void;

  getRadiusUnits(): google_ads_googleads_v1_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits;
  setRadiusUnits(value: google_ads_googleads_v1_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits): void;

  getAddress(): AddressInfo | undefined;
  setAddress(value?: AddressInfo): void;
  hasAddress(): boolean;
  clearAddress(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProximityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProximityInfo): ProximityInfo.AsObject;
  static serializeBinaryToWriter(message: ProximityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProximityInfo;
  static deserializeBinaryFromReader(message: ProximityInfo, reader: jspb.BinaryReader): ProximityInfo;
}

export namespace ProximityInfo {
  export type AsObject = {
    geoPoint?: GeoPointInfo.AsObject,
    radius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    radiusUnits: google_ads_googleads_v1_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits,
    address?: AddressInfo.AsObject,
  }
}

export class GeoPointInfo extends jspb.Message {
  getLongitudeInMicroDegrees(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLongitudeInMicroDegrees(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasLongitudeInMicroDegrees(): boolean;
  clearLongitudeInMicroDegrees(): void;

  getLatitudeInMicroDegrees(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLatitudeInMicroDegrees(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasLatitudeInMicroDegrees(): boolean;
  clearLatitudeInMicroDegrees(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPointInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPointInfo): GeoPointInfo.AsObject;
  static serializeBinaryToWriter(message: GeoPointInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPointInfo;
  static deserializeBinaryFromReader(message: GeoPointInfo, reader: jspb.BinaryReader): GeoPointInfo;
}

export namespace GeoPointInfo {
  export type AsObject = {
    longitudeInMicroDegrees?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    latitudeInMicroDegrees?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class AddressInfo extends jspb.Message {
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPostalCode(): boolean;
  clearPostalCode(): void;

  getProvinceCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvinceCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProvinceCode(): boolean;
  clearProvinceCode(): void;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  getProvinceName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvinceName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProvinceName(): boolean;
  clearProvinceName(): void;

  getStreetAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStreetAddress(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStreetAddress(): boolean;
  clearStreetAddress(): void;

  getStreetAddress2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStreetAddress2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStreetAddress2(): boolean;
  clearStreetAddress2(): void;

  getCityName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCityName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCityName(): boolean;
  clearCityName(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddressInfo): AddressInfo.AsObject;
  static serializeBinaryToWriter(message: AddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressInfo;
  static deserializeBinaryFromReader(message: AddressInfo, reader: jspb.BinaryReader): AddressInfo;
}

export namespace AddressInfo {
  export type AsObject = {
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    provinceCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    provinceName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    streetAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    streetAddress2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cityName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TopicInfo extends jspb.Message {
  getTopicConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTopicConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTopicConstant(): boolean;
  clearTopicConstant(): void;

  getPathList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setPathList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearPathList(): void;
  addPath(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TopicInfo): TopicInfo.AsObject;
  static serializeBinaryToWriter(message: TopicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicInfo;
  static deserializeBinaryFromReader(message: TopicInfo, reader: jspb.BinaryReader): TopicInfo;
}

export namespace TopicInfo {
  export type AsObject = {
    topicConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pathList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class LanguageInfo extends jspb.Message {
  getLanguageConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLanguageConstant(): boolean;
  clearLanguageConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageInfo): LanguageInfo.AsObject;
  static serializeBinaryToWriter(message: LanguageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageInfo;
  static deserializeBinaryFromReader(message: LanguageInfo, reader: jspb.BinaryReader): LanguageInfo;
}

export namespace LanguageInfo {
  export type AsObject = {
    languageConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class IpBlockInfo extends jspb.Message {
  getIpAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIpAddress(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIpAddress(): boolean;
  clearIpAddress(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IpBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IpBlockInfo): IpBlockInfo.AsObject;
  static serializeBinaryToWriter(message: IpBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IpBlockInfo;
  static deserializeBinaryFromReader(message: IpBlockInfo, reader: jspb.BinaryReader): IpBlockInfo;
}

export namespace IpBlockInfo {
  export type AsObject = {
    ipAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ContentLabelInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType;
  setType(value: google_ads_googleads_v1_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentLabelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContentLabelInfo): ContentLabelInfo.AsObject;
  static serializeBinaryToWriter(message: ContentLabelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentLabelInfo;
  static deserializeBinaryFromReader(message: ContentLabelInfo, reader: jspb.BinaryReader): ContentLabelInfo;
}

export namespace ContentLabelInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType,
  }
}

export class CarrierInfo extends jspb.Message {
  getCarrierConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCarrierConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCarrierConstant(): boolean;
  clearCarrierConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarrierInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CarrierInfo): CarrierInfo.AsObject;
  static serializeBinaryToWriter(message: CarrierInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarrierInfo;
  static deserializeBinaryFromReader(message: CarrierInfo, reader: jspb.BinaryReader): CarrierInfo;
}

export namespace CarrierInfo {
  export type AsObject = {
    carrierConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserInterestInfo extends jspb.Message {
  getUserInterestCategory(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserInterestCategory(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUserInterestCategory(): boolean;
  clearUserInterestCategory(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInterestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInterestInfo): UserInterestInfo.AsObject;
  static serializeBinaryToWriter(message: UserInterestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInterestInfo;
  static deserializeBinaryFromReader(message: UserInterestInfo, reader: jspb.BinaryReader): UserInterestInfo;
}

export namespace UserInterestInfo {
  export type AsObject = {
    userInterestCategory?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class WebpageInfo extends jspb.Message {
  getCriterionName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCriterionName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCriterionName(): boolean;
  clearCriterionName(): void;

  getConditionsList(): Array<WebpageConditionInfo>;
  setConditionsList(value: Array<WebpageConditionInfo>): void;
  clearConditionsList(): void;
  addConditions(value?: WebpageConditionInfo, index?: number): WebpageConditionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageInfo): WebpageInfo.AsObject;
  static serializeBinaryToWriter(message: WebpageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageInfo;
  static deserializeBinaryFromReader(message: WebpageInfo, reader: jspb.BinaryReader): WebpageInfo;
}

export namespace WebpageInfo {
  export type AsObject = {
    criterionName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conditionsList: Array<WebpageConditionInfo.AsObject>,
  }
}

export class WebpageConditionInfo extends jspb.Message {
  getOperand(): google_ads_googleads_v1_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand;
  setOperand(value: google_ads_googleads_v1_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand): void;

  getOperator(): google_ads_googleads_v1_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator;
  setOperator(value: google_ads_googleads_v1_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator): void;

  getArgument(): google_protobuf_wrappers_pb.StringValue | undefined;
  setArgument(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasArgument(): boolean;
  clearArgument(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageConditionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageConditionInfo): WebpageConditionInfo.AsObject;
  static serializeBinaryToWriter(message: WebpageConditionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageConditionInfo;
  static deserializeBinaryFromReader(message: WebpageConditionInfo, reader: jspb.BinaryReader): WebpageConditionInfo;
}

export namespace WebpageConditionInfo {
  export type AsObject = {
    operand: google_ads_googleads_v1_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand,
    operator: google_ads_googleads_v1_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator,
    argument?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class OperatingSystemVersionInfo extends jspb.Message {
  getOperatingSystemVersionConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOperatingSystemVersionConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOperatingSystemVersionConstant(): boolean;
  clearOperatingSystemVersionConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemVersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemVersionInfo): OperatingSystemVersionInfo.AsObject;
  static serializeBinaryToWriter(message: OperatingSystemVersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemVersionInfo;
  static deserializeBinaryFromReader(message: OperatingSystemVersionInfo, reader: jspb.BinaryReader): OperatingSystemVersionInfo;
}

export namespace OperatingSystemVersionInfo {
  export type AsObject = {
    operatingSystemVersionConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class AppPaymentModelInfo extends jspb.Message {
  getType(): google_ads_googleads_v1_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType;
  setType(value: google_ads_googleads_v1_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppPaymentModelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppPaymentModelInfo): AppPaymentModelInfo.AsObject;
  static serializeBinaryToWriter(message: AppPaymentModelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppPaymentModelInfo;
  static deserializeBinaryFromReader(message: AppPaymentModelInfo, reader: jspb.BinaryReader): AppPaymentModelInfo;
}

export namespace AppPaymentModelInfo {
  export type AsObject = {
    type: google_ads_googleads_v1_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType,
  }
}

export class MobileDeviceInfo extends jspb.Message {
  getMobileDeviceConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobileDeviceConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMobileDeviceConstant(): boolean;
  clearMobileDeviceConstant(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceInfo): MobileDeviceInfo.AsObject;
  static serializeBinaryToWriter(message: MobileDeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceInfo;
  static deserializeBinaryFromReader(message: MobileDeviceInfo, reader: jspb.BinaryReader): MobileDeviceInfo;
}

export namespace MobileDeviceInfo {
  export type AsObject = {
    mobileDeviceConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CustomAffinityInfo extends jspb.Message {
  getCustomAffinity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomAffinity(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCustomAffinity(): boolean;
  clearCustomAffinity(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomAffinityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomAffinityInfo): CustomAffinityInfo.AsObject;
  static serializeBinaryToWriter(message: CustomAffinityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomAffinityInfo;
  static deserializeBinaryFromReader(message: CustomAffinityInfo, reader: jspb.BinaryReader): CustomAffinityInfo;
}

export namespace CustomAffinityInfo {
  export type AsObject = {
    customAffinity?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CustomIntentInfo extends jspb.Message {
  getCustomIntent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomIntent(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCustomIntent(): boolean;
  clearCustomIntent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomIntentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomIntentInfo): CustomIntentInfo.AsObject;
  static serializeBinaryToWriter(message: CustomIntentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomIntentInfo;
  static deserializeBinaryFromReader(message: CustomIntentInfo, reader: jspb.BinaryReader): CustomIntentInfo;
}

export namespace CustomIntentInfo {
  export type AsObject = {
    customIntent?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LocationGroupInfo extends jspb.Message {
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFeed(): boolean;
  clearFeed(): void;

  getGeoTargetConstantsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setGeoTargetConstantsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearGeoTargetConstantsList(): void;
  addGeoTargetConstants(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getRadius(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRadius(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasRadius(): boolean;
  clearRadius(): void;

  getRadiusUnits(): google_ads_googleads_v1_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits;
  setRadiusUnits(value: google_ads_googleads_v1_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationGroupInfo): LocationGroupInfo.AsObject;
  static serializeBinaryToWriter(message: LocationGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationGroupInfo;
  static deserializeBinaryFromReader(message: LocationGroupInfo, reader: jspb.BinaryReader): LocationGroupInfo;
}

export namespace LocationGroupInfo {
  export type AsObject = {
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetConstantsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    radius?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    radiusUnits: google_ads_googleads_v1_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits,
  }
}

