import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_ad_customizer_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/ad_customizer_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_affiliate_location_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/affiliate_location_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_app_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/app_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_call_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/call_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_callout_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/callout_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_custom_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/custom_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_dsa_page_feed_criterion_field_pb from '../../../../../google/ads/googleads/v1/enums/dsa_page_feed_criterion_field_pb';
import * as google_ads_googleads_v1_enums_education_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/education_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_feed_mapping_criterion_type_pb from '../../../../../google/ads/googleads/v1/enums/feed_mapping_criterion_type_pb';
import * as google_ads_googleads_v1_enums_feed_mapping_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_mapping_status_pb';
import * as google_ads_googleads_v1_enums_flight_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/flight_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_hotel_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/hotel_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_job_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/job_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_local_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/local_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_location_extension_targeting_criterion_field_pb from '../../../../../google/ads/googleads/v1/enums/location_extension_targeting_criterion_field_pb';
import * as google_ads_googleads_v1_enums_location_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/location_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_message_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/message_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_placeholder_type_pb from '../../../../../google/ads/googleads/v1/enums/placeholder_type_pb';
import * as google_ads_googleads_v1_enums_price_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/price_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_promotion_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/promotion_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_real_estate_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/real_estate_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_sitelink_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/sitelink_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_structured_snippet_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/structured_snippet_placeholder_field_pb';
import * as google_ads_googleads_v1_enums_travel_placeholder_field_pb from '../../../../../google/ads/googleads/v1/enums/travel_placeholder_field_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FeedMapping extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFeed(): boolean;
  clearFeed(): void;

  getAttributeFieldMappingsList(): Array<AttributeFieldMapping>;
  setAttributeFieldMappingsList(value: Array<AttributeFieldMapping>): void;
  clearAttributeFieldMappingsList(): void;
  addAttributeFieldMappings(value?: AttributeFieldMapping, index?: number): AttributeFieldMapping;

  getStatus(): google_ads_googleads_v1_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus;
  setStatus(value: google_ads_googleads_v1_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus): void;

  getPlaceholderType(): google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType;
  setPlaceholderType(value: google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType): void;

  getCriterionType(): google_ads_googleads_v1_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType;
  setCriterionType(value: google_ads_googleads_v1_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType): void;

  getTargetCase(): FeedMapping.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMapping.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMapping): FeedMapping.AsObject;
  static serializeBinaryToWriter(message: FeedMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMapping;
  static deserializeBinaryFromReader(message: FeedMapping, reader: jspb.BinaryReader): FeedMapping;
}

export namespace FeedMapping {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributeFieldMappingsList: Array<AttributeFieldMapping.AsObject>,
    status: google_ads_googleads_v1_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatus,
    placeholderType: google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType,
    criterionType: google_ads_googleads_v1_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionType,
  }

  export enum TargetCase { 
    TARGET_NOT_SET = 0,
    PLACEHOLDER_TYPE = 3,
    CRITERION_TYPE = 4,
  }
}

export class AttributeFieldMapping extends jspb.Message {
  getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasFeedAttributeId(): boolean;
  clearFeedAttributeId(): void;

  getFieldId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFieldId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasFieldId(): boolean;
  clearFieldId(): void;

  getSitelinkField(): google_ads_googleads_v1_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField;
  setSitelinkField(value: google_ads_googleads_v1_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField): void;

  getCallField(): google_ads_googleads_v1_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField;
  setCallField(value: google_ads_googleads_v1_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField): void;

  getAppField(): google_ads_googleads_v1_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField;
  setAppField(value: google_ads_googleads_v1_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField): void;

  getLocationField(): google_ads_googleads_v1_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderField;
  setLocationField(value: google_ads_googleads_v1_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderField): void;

  getAffiliateLocationField(): google_ads_googleads_v1_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField;
  setAffiliateLocationField(value: google_ads_googleads_v1_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField): void;

  getCalloutField(): google_ads_googleads_v1_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField;
  setCalloutField(value: google_ads_googleads_v1_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField): void;

  getStructuredSnippetField(): google_ads_googleads_v1_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField;
  setStructuredSnippetField(value: google_ads_googleads_v1_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField): void;

  getMessageField(): google_ads_googleads_v1_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField;
  setMessageField(value: google_ads_googleads_v1_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField): void;

  getPriceField(): google_ads_googleads_v1_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField;
  setPriceField(value: google_ads_googleads_v1_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField): void;

  getPromotionField(): google_ads_googleads_v1_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField;
  setPromotionField(value: google_ads_googleads_v1_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField): void;

  getAdCustomizerField(): google_ads_googleads_v1_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField;
  setAdCustomizerField(value: google_ads_googleads_v1_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField): void;

  getDsaPageFeedField(): google_ads_googleads_v1_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionField;
  setDsaPageFeedField(value: google_ads_googleads_v1_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionField): void;

  getLocationExtensionTargetingField(): google_ads_googleads_v1_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionField;
  setLocationExtensionTargetingField(value: google_ads_googleads_v1_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionField): void;

  getEducationField(): google_ads_googleads_v1_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField;
  setEducationField(value: google_ads_googleads_v1_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField): void;

  getFlightField(): google_ads_googleads_v1_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField;
  setFlightField(value: google_ads_googleads_v1_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField): void;

  getCustomField(): google_ads_googleads_v1_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField;
  setCustomField(value: google_ads_googleads_v1_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField): void;

  getHotelField(): google_ads_googleads_v1_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField;
  setHotelField(value: google_ads_googleads_v1_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField): void;

  getRealEstateField(): google_ads_googleads_v1_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField;
  setRealEstateField(value: google_ads_googleads_v1_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField): void;

  getTravelField(): google_ads_googleads_v1_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField;
  setTravelField(value: google_ads_googleads_v1_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField): void;

  getLocalField(): google_ads_googleads_v1_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField;
  setLocalField(value: google_ads_googleads_v1_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField): void;

  getJobField(): google_ads_googleads_v1_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField;
  setJobField(value: google_ads_googleads_v1_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField): void;

  getFieldCase(): AttributeFieldMapping.FieldCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeFieldMapping.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeFieldMapping): AttributeFieldMapping.AsObject;
  static serializeBinaryToWriter(message: AttributeFieldMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeFieldMapping;
  static deserializeBinaryFromReader(message: AttributeFieldMapping, reader: jspb.BinaryReader): AttributeFieldMapping;
}

export namespace AttributeFieldMapping {
  export type AsObject = {
    feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    fieldId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sitelinkField: google_ads_googleads_v1_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderField,
    callField: google_ads_googleads_v1_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderField,
    appField: google_ads_googleads_v1_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderField,
    locationField: google_ads_googleads_v1_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderField,
    affiliateLocationField: google_ads_googleads_v1_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderField,
    calloutField: google_ads_googleads_v1_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderField,
    structuredSnippetField: google_ads_googleads_v1_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderField,
    messageField: google_ads_googleads_v1_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderField,
    priceField: google_ads_googleads_v1_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderField,
    promotionField: google_ads_googleads_v1_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderField,
    adCustomizerField: google_ads_googleads_v1_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderField,
    dsaPageFeedField: google_ads_googleads_v1_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionField,
    locationExtensionTargetingField: google_ads_googleads_v1_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionField,
    educationField: google_ads_googleads_v1_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderField,
    flightField: google_ads_googleads_v1_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderField,
    customField: google_ads_googleads_v1_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderField,
    hotelField: google_ads_googleads_v1_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderField,
    realEstateField: google_ads_googleads_v1_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField,
    travelField: google_ads_googleads_v1_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderField,
    localField: google_ads_googleads_v1_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderField,
    jobField: google_ads_googleads_v1_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderField,
  }

  export enum FieldCase { 
    FIELD_NOT_SET = 0,
    SITELINK_FIELD = 3,
    CALL_FIELD = 4,
    APP_FIELD = 5,
    LOCATION_FIELD = 6,
    AFFILIATE_LOCATION_FIELD = 7,
    CALLOUT_FIELD = 8,
    STRUCTURED_SNIPPET_FIELD = 9,
    MESSAGE_FIELD = 10,
    PRICE_FIELD = 11,
    PROMOTION_FIELD = 12,
    AD_CUSTOMIZER_FIELD = 13,
    DSA_PAGE_FEED_FIELD = 14,
    LOCATION_EXTENSION_TARGETING_FIELD = 15,
    EDUCATION_FIELD = 16,
    FLIGHT_FIELD = 17,
    CUSTOM_FIELD = 18,
    HOTEL_FIELD = 19,
    REAL_ESTATE_FIELD = 20,
    TRAVEL_FIELD = 21,
    LOCAL_FIELD = 22,
    JOB_FIELD = 23,
  }
}

