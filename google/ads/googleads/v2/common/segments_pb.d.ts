import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_criteria_pb from '../../../../../google/ads/googleads/v2/common/criteria_pb';
import * as google_ads_googleads_v2_enums_ad_network_type_pb from '../../../../../google/ads/googleads/v2/enums/ad_network_type_pb';
import * as google_ads_googleads_v2_enums_click_type_pb from '../../../../../google/ads/googleads/v2/enums/click_type_pb';
import * as google_ads_googleads_v2_enums_conversion_action_category_pb from '../../../../../google/ads/googleads/v2/enums/conversion_action_category_pb';
import * as google_ads_googleads_v2_enums_conversion_attribution_event_type_pb from '../../../../../google/ads/googleads/v2/enums/conversion_attribution_event_type_pb';
import * as google_ads_googleads_v2_enums_conversion_lag_bucket_pb from '../../../../../google/ads/googleads/v2/enums/conversion_lag_bucket_pb';
import * as google_ads_googleads_v2_enums_conversion_or_adjustment_lag_bucket_pb from '../../../../../google/ads/googleads/v2/enums/conversion_or_adjustment_lag_bucket_pb';
import * as google_ads_googleads_v2_enums_day_of_week_pb from '../../../../../google/ads/googleads/v2/enums/day_of_week_pb';
import * as google_ads_googleads_v2_enums_device_pb from '../../../../../google/ads/googleads/v2/enums/device_pb';
import * as google_ads_googleads_v2_enums_external_conversion_source_pb from '../../../../../google/ads/googleads/v2/enums/external_conversion_source_pb';
import * as google_ads_googleads_v2_enums_hotel_date_selection_type_pb from '../../../../../google/ads/googleads/v2/enums/hotel_date_selection_type_pb';
import * as google_ads_googleads_v2_enums_hotel_price_bucket_pb from '../../../../../google/ads/googleads/v2/enums/hotel_price_bucket_pb';
import * as google_ads_googleads_v2_enums_hotel_rate_type_pb from '../../../../../google/ads/googleads/v2/enums/hotel_rate_type_pb';
import * as google_ads_googleads_v2_enums_month_of_year_pb from '../../../../../google/ads/googleads/v2/enums/month_of_year_pb';
import * as google_ads_googleads_v2_enums_placeholder_type_pb from '../../../../../google/ads/googleads/v2/enums/placeholder_type_pb';
import * as google_ads_googleads_v2_enums_product_channel_pb from '../../../../../google/ads/googleads/v2/enums/product_channel_pb';
import * as google_ads_googleads_v2_enums_product_channel_exclusivity_pb from '../../../../../google/ads/googleads/v2/enums/product_channel_exclusivity_pb';
import * as google_ads_googleads_v2_enums_product_condition_pb from '../../../../../google/ads/googleads/v2/enums/product_condition_pb';
import * as google_ads_googleads_v2_enums_search_engine_results_page_type_pb from '../../../../../google/ads/googleads/v2/enums/search_engine_results_page_type_pb';
import * as google_ads_googleads_v2_enums_search_term_match_type_pb from '../../../../../google/ads/googleads/v2/enums/search_term_match_type_pb';
import * as google_ads_googleads_v2_enums_slot_pb from '../../../../../google/ads/googleads/v2/enums/slot_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class Segments extends jspb.Message {
  getAdNetworkType(): google_ads_googleads_v2_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType;
  setAdNetworkType(value: google_ads_googleads_v2_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType): void;

  getClickType(): google_ads_googleads_v2_enums_click_type_pb.ClickTypeEnum.ClickType;
  setClickType(value: google_ads_googleads_v2_enums_click_type_pb.ClickTypeEnum.ClickType): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionActionCategory(): google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory;
  setConversionActionCategory(value: google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory): void;

  getConversionActionName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionActionName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionActionName(): boolean;
  clearConversionActionName(): void;

  getConversionAdjustment(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setConversionAdjustment(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasConversionAdjustment(): boolean;
  clearConversionAdjustment(): void;

  getConversionAttributionEventType(): google_ads_googleads_v2_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType;
  setConversionAttributionEventType(value: google_ads_googleads_v2_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType): void;

  getConversionLagBucket(): google_ads_googleads_v2_enums_conversion_lag_bucket_pb.ConversionLagBucketEnum.ConversionLagBucket;
  setConversionLagBucket(value: google_ads_googleads_v2_enums_conversion_lag_bucket_pb.ConversionLagBucketEnum.ConversionLagBucket): void;

  getConversionOrAdjustmentLagBucket(): google_ads_googleads_v2_enums_conversion_or_adjustment_lag_bucket_pb.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket;
  setConversionOrAdjustmentLagBucket(value: google_ads_googleads_v2_enums_conversion_or_adjustment_lag_bucket_pb.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket): void;

  getDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDate(): boolean;
  clearDate(): void;

  getDayOfWeek(): google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  getDevice(): google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device;
  setDevice(value: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device): void;

  getExternalConversionSource(): google_ads_googleads_v2_enums_external_conversion_source_pb.ExternalConversionSourceEnum.ExternalConversionSource;
  setExternalConversionSource(value: google_ads_googleads_v2_enums_external_conversion_source_pb.ExternalConversionSourceEnum.ExternalConversionSource): void;

  getGeoTargetAirport(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetAirport(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetAirport(): boolean;
  clearGeoTargetAirport(): void;

  getGeoTargetCanton(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetCanton(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetCanton(): boolean;
  clearGeoTargetCanton(): void;

  getGeoTargetCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetCity(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetCity(): boolean;
  clearGeoTargetCity(): void;

  getGeoTargetCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetCountry(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetCountry(): boolean;
  clearGeoTargetCountry(): void;

  getGeoTargetCounty(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetCounty(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetCounty(): boolean;
  clearGeoTargetCounty(): void;

  getGeoTargetDistrict(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetDistrict(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetDistrict(): boolean;
  clearGeoTargetDistrict(): void;

  getGeoTargetMetro(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetMetro(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetMetro(): boolean;
  clearGeoTargetMetro(): void;

  getGeoTargetMostSpecificLocation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetMostSpecificLocation(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetMostSpecificLocation(): boolean;
  clearGeoTargetMostSpecificLocation(): void;

  getGeoTargetPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetPostalCode(): boolean;
  clearGeoTargetPostalCode(): void;

  getGeoTargetProvince(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetProvince(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetProvince(): boolean;
  clearGeoTargetProvince(): void;

  getGeoTargetRegion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetRegion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetRegion(): boolean;
  clearGeoTargetRegion(): void;

  getGeoTargetState(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetState(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGeoTargetState(): boolean;
  clearGeoTargetState(): void;

  getHotelBookingWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHotelBookingWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasHotelBookingWindowDays(): boolean;
  clearHotelBookingWindowDays(): void;

  getHotelCenterId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHotelCenterId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasHotelCenterId(): boolean;
  clearHotelCenterId(): void;

  getHotelCheckInDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCheckInDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHotelCheckInDate(): boolean;
  clearHotelCheckInDate(): void;

  getHotelCheckInDayOfWeek(): google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setHotelCheckInDayOfWeek(value: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  getHotelCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCity(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHotelCity(): boolean;
  clearHotelCity(): void;

  getHotelClass(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHotelClass(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasHotelClass(): boolean;
  clearHotelClass(): void;

  getHotelCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCountry(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHotelCountry(): boolean;
  clearHotelCountry(): void;

  getHotelDateSelectionType(): google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType;
  setHotelDateSelectionType(value: google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType): void;

  getHotelLengthOfStay(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHotelLengthOfStay(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasHotelLengthOfStay(): boolean;
  clearHotelLengthOfStay(): void;

  getHotelRateRuleId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelRateRuleId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHotelRateRuleId(): boolean;
  clearHotelRateRuleId(): void;

  getHotelRateType(): google_ads_googleads_v2_enums_hotel_rate_type_pb.HotelRateTypeEnum.HotelRateType;
  setHotelRateType(value: google_ads_googleads_v2_enums_hotel_rate_type_pb.HotelRateTypeEnum.HotelRateType): void;

  getHotelPriceBucket(): google_ads_googleads_v2_enums_hotel_price_bucket_pb.HotelPriceBucketEnum.HotelPriceBucket;
  setHotelPriceBucket(value: google_ads_googleads_v2_enums_hotel_price_bucket_pb.HotelPriceBucketEnum.HotelPriceBucket): void;

  getHotelState(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelState(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHotelState(): boolean;
  clearHotelState(): void;

  getHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHour(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasHour(): boolean;
  clearHour(): void;

  getInteractionOnThisExtension(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setInteractionOnThisExtension(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasInteractionOnThisExtension(): boolean;
  clearInteractionOnThisExtension(): void;

  getKeyword(): Keyword | undefined;
  setKeyword(value?: Keyword): void;
  hasKeyword(): boolean;
  clearKeyword(): void;

  getMonth(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMonth(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMonth(): boolean;
  clearMonth(): void;

  getMonthOfYear(): google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear;
  setMonthOfYear(value: google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear): void;

  getPartnerHotelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPartnerHotelId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPartnerHotelId(): boolean;
  clearPartnerHotelId(): void;

  getPlaceholderType(): google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType;
  setPlaceholderType(value: google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType): void;

  getProductAggregatorId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setProductAggregatorId(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasProductAggregatorId(): boolean;
  clearProductAggregatorId(): void;

  getProductBiddingCategoryLevel1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryLevel1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBiddingCategoryLevel1(): boolean;
  clearProductBiddingCategoryLevel1(): void;

  getProductBiddingCategoryLevel2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryLevel2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBiddingCategoryLevel2(): boolean;
  clearProductBiddingCategoryLevel2(): void;

  getProductBiddingCategoryLevel3(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryLevel3(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBiddingCategoryLevel3(): boolean;
  clearProductBiddingCategoryLevel3(): void;

  getProductBiddingCategoryLevel4(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryLevel4(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBiddingCategoryLevel4(): boolean;
  clearProductBiddingCategoryLevel4(): void;

  getProductBiddingCategoryLevel5(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBiddingCategoryLevel5(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBiddingCategoryLevel5(): boolean;
  clearProductBiddingCategoryLevel5(): void;

  getProductBrand(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductBrand(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductBrand(): boolean;
  clearProductBrand(): void;

  getProductChannel(): google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel;
  setProductChannel(value: google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel): void;

  getProductChannelExclusivity(): google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity;
  setProductChannelExclusivity(value: google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity): void;

  getProductCondition(): google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition;
  setProductCondition(value: google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition): void;

  getProductCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCountry(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCountry(): boolean;
  clearProductCountry(): void;

  getProductCustomAttribute0(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCustomAttribute0(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCustomAttribute0(): boolean;
  clearProductCustomAttribute0(): void;

  getProductCustomAttribute1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCustomAttribute1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCustomAttribute1(): boolean;
  clearProductCustomAttribute1(): void;

  getProductCustomAttribute2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCustomAttribute2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCustomAttribute2(): boolean;
  clearProductCustomAttribute2(): void;

  getProductCustomAttribute3(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCustomAttribute3(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCustomAttribute3(): boolean;
  clearProductCustomAttribute3(): void;

  getProductCustomAttribute4(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductCustomAttribute4(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductCustomAttribute4(): boolean;
  clearProductCustomAttribute4(): void;

  getProductItemId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductItemId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductItemId(): boolean;
  clearProductItemId(): void;

  getProductLanguage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductLanguage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductLanguage(): boolean;
  clearProductLanguage(): void;

  getProductMerchantId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setProductMerchantId(value?: google_protobuf_wrappers_pb.UInt64Value): void;
  hasProductMerchantId(): boolean;
  clearProductMerchantId(): void;

  getProductStoreId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductStoreId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductStoreId(): boolean;
  clearProductStoreId(): void;

  getProductTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTitle(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTitle(): boolean;
  clearProductTitle(): void;

  getProductTypeL1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTypeL1(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTypeL1(): boolean;
  clearProductTypeL1(): void;

  getProductTypeL2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTypeL2(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTypeL2(): boolean;
  clearProductTypeL2(): void;

  getProductTypeL3(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTypeL3(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTypeL3(): boolean;
  clearProductTypeL3(): void;

  getProductTypeL4(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTypeL4(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTypeL4(): boolean;
  clearProductTypeL4(): void;

  getProductTypeL5(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProductTypeL5(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasProductTypeL5(): boolean;
  clearProductTypeL5(): void;

  getQuarter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setQuarter(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasQuarter(): boolean;
  clearQuarter(): void;

  getSearchEngineResultsPageType(): google_ads_googleads_v2_enums_search_engine_results_page_type_pb.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType;
  setSearchEngineResultsPageType(value: google_ads_googleads_v2_enums_search_engine_results_page_type_pb.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType): void;

  getSearchTermMatchType(): google_ads_googleads_v2_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType;
  setSearchTermMatchType(value: google_ads_googleads_v2_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType): void;

  getSlot(): google_ads_googleads_v2_enums_slot_pb.SlotEnum.Slot;
  setSlot(value: google_ads_googleads_v2_enums_slot_pb.SlotEnum.Slot): void;

  getWebpage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWebpage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasWebpage(): boolean;
  clearWebpage(): void;

  getWeek(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWeek(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasWeek(): boolean;
  clearWeek(): void;

  getYear(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setYear(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasYear(): boolean;
  clearYear(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Segments.AsObject;
  static toObject(includeInstance: boolean, msg: Segments): Segments.AsObject;
  static serializeBinaryToWriter(message: Segments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Segments;
  static deserializeBinaryFromReader(message: Segments, reader: jspb.BinaryReader): Segments;
}

export namespace Segments {
  export type AsObject = {
    adNetworkType: google_ads_googleads_v2_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType,
    clickType: google_ads_googleads_v2_enums_click_type_pb.ClickTypeEnum.ClickType,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionActionCategory: google_ads_googleads_v2_enums_conversion_action_category_pb.ConversionActionCategoryEnum.ConversionActionCategory,
    conversionActionName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAdjustment?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    conversionAttributionEventType: google_ads_googleads_v2_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType,
    conversionLagBucket: google_ads_googleads_v2_enums_conversion_lag_bucket_pb.ConversionLagBucketEnum.ConversionLagBucket,
    conversionOrAdjustmentLagBucket: google_ads_googleads_v2_enums_conversion_or_adjustment_lag_bucket_pb.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket,
    date?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dayOfWeek: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
    device: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device,
    externalConversionSource: google_ads_googleads_v2_enums_external_conversion_source_pb.ExternalConversionSourceEnum.ExternalConversionSource,
    geoTargetAirport?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetCanton?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetCity?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetCountry?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetCounty?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetDistrict?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetMetro?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetMostSpecificLocation?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetPostalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetProvince?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetRegion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetState?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelBookingWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hotelCenterId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hotelCheckInDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelCheckInDayOfWeek: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
    hotelCity?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelClass?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    hotelCountry?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelDateSelectionType: google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType,
    hotelLengthOfStay?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    hotelRateRuleId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelRateType: google_ads_googleads_v2_enums_hotel_rate_type_pb.HotelRateTypeEnum.HotelRateType,
    hotelPriceBucket: google_ads_googleads_v2_enums_hotel_price_bucket_pb.HotelPriceBucketEnum.HotelPriceBucket,
    hotelState?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    interactionOnThisExtension?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    keyword?: Keyword.AsObject,
    month?: google_protobuf_wrappers_pb.StringValue.AsObject,
    monthOfYear: google_ads_googleads_v2_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear,
    partnerHotelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placeholderType: google_ads_googleads_v2_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType,
    productAggregatorId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    productBiddingCategoryLevel1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBiddingCategoryLevel2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBiddingCategoryLevel3?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBiddingCategoryLevel4?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBiddingCategoryLevel5?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productBrand?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productChannel: google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel,
    productChannelExclusivity: google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity,
    productCondition: google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition,
    productCountry?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productCustomAttribute0?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productCustomAttribute1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productCustomAttribute2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productCustomAttribute3?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productCustomAttribute4?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productItemId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productLanguage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productMerchantId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    productStoreId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTitle?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTypeL1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTypeL2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTypeL3?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTypeL4?: google_protobuf_wrappers_pb.StringValue.AsObject,
    productTypeL5?: google_protobuf_wrappers_pb.StringValue.AsObject,
    quarter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    searchEngineResultsPageType: google_ads_googleads_v2_enums_search_engine_results_page_type_pb.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType,
    searchTermMatchType: google_ads_googleads_v2_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType,
    slot: google_ads_googleads_v2_enums_slot_pb.SlotEnum.Slot,
    webpage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    week?: google_protobuf_wrappers_pb.StringValue.AsObject,
    year?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class Keyword extends jspb.Message {
  getAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;

  getInfo(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
  setInfo(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;
  hasInfo(): boolean;
  clearInfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Keyword.AsObject;
  static toObject(includeInstance: boolean, msg: Keyword): Keyword.AsObject;
  static serializeBinaryToWriter(message: Keyword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Keyword;
  static deserializeBinaryFromReader(message: Keyword, reader: jspb.BinaryReader): Keyword;
}

export namespace Keyword {
  export type AsObject = {
    adGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    info?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
  }
}

