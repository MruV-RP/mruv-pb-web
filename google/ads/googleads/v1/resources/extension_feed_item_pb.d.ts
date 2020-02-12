import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_criteria_pb from '../../../../../google/ads/googleads/v1/common/criteria_pb';
import * as google_ads_googleads_v1_common_extensions_pb from '../../../../../google/ads/googleads/v1/common/extensions_pb';
import * as google_ads_googleads_v1_enums_extension_type_pb from '../../../../../google/ads/googleads/v1/enums/extension_type_pb';
import * as google_ads_googleads_v1_enums_feed_item_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_status_pb';
import * as google_ads_googleads_v1_enums_feed_item_target_device_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_target_device_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class ExtensionFeedItem extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getExtensionType(): google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType;
  setExtensionType(value: google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType): void;

  getStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStartDateTime(): boolean;
  clearStartDateTime(): void;

  getEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasEndDateTime(): boolean;
  clearEndDateTime(): void;

  getAdSchedulesList(): Array<google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo>;
  setAdSchedulesList(value: Array<google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo>): void;
  clearAdSchedulesList(): void;
  addAdSchedules(value?: google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo, index?: number): google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo;

  getDevice(): google_ads_googleads_v1_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice;
  setDevice(value: google_ads_googleads_v1_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice): void;

  getTargetedGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetedGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTargetedGeoTargetConstant(): boolean;
  clearTargetedGeoTargetConstant(): void;

  getStatus(): google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus;
  setStatus(value: google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus): void;

  getSitelinkFeedItem(): google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem | undefined;
  setSitelinkFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem): void;
  hasSitelinkFeedItem(): boolean;
  clearSitelinkFeedItem(): void;

  getStructuredSnippetFeedItem(): google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem | undefined;
  setStructuredSnippetFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem): void;
  hasStructuredSnippetFeedItem(): boolean;
  clearStructuredSnippetFeedItem(): void;

  getAppFeedItem(): google_ads_googleads_v1_common_extensions_pb.AppFeedItem | undefined;
  setAppFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.AppFeedItem): void;
  hasAppFeedItem(): boolean;
  clearAppFeedItem(): void;

  getCallFeedItem(): google_ads_googleads_v1_common_extensions_pb.CallFeedItem | undefined;
  setCallFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.CallFeedItem): void;
  hasCallFeedItem(): boolean;
  clearCallFeedItem(): void;

  getCalloutFeedItem(): google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem | undefined;
  setCalloutFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem): void;
  hasCalloutFeedItem(): boolean;
  clearCalloutFeedItem(): void;

  getTextMessageFeedItem(): google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem | undefined;
  setTextMessageFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem): void;
  hasTextMessageFeedItem(): boolean;
  clearTextMessageFeedItem(): void;

  getPriceFeedItem(): google_ads_googleads_v1_common_extensions_pb.PriceFeedItem | undefined;
  setPriceFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.PriceFeedItem): void;
  hasPriceFeedItem(): boolean;
  clearPriceFeedItem(): void;

  getPromotionFeedItem(): google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem | undefined;
  setPromotionFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem): void;
  hasPromotionFeedItem(): boolean;
  clearPromotionFeedItem(): void;

  getLocationFeedItem(): google_ads_googleads_v1_common_extensions_pb.LocationFeedItem | undefined;
  setLocationFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.LocationFeedItem): void;
  hasLocationFeedItem(): boolean;
  clearLocationFeedItem(): void;

  getAffiliateLocationFeedItem(): google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem | undefined;
  setAffiliateLocationFeedItem(value?: google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem): void;
  hasAffiliateLocationFeedItem(): boolean;
  clearAffiliateLocationFeedItem(): void;

  getTargetedCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetedCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTargetedCampaign(): boolean;
  clearTargetedCampaign(): void;

  getTargetedAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetedAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTargetedAdGroup(): boolean;
  clearTargetedAdGroup(): void;

  getExtensionCase(): ExtensionFeedItem.ExtensionCase;

  getServingResourceTargetingCase(): ExtensionFeedItem.ServingResourceTargetingCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionFeedItem): ExtensionFeedItem.AsObject;
  static serializeBinaryToWriter(message: ExtensionFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionFeedItem;
  static deserializeBinaryFromReader(message: ExtensionFeedItem, reader: jspb.BinaryReader): ExtensionFeedItem;
}

export namespace ExtensionFeedItem {
  export type AsObject = {
    resourceName: string,
    extensionType: google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType,
    startDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adSchedulesList: Array<google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo.AsObject>,
    device: google_ads_googleads_v1_enums_feed_item_target_device_pb.FeedItemTargetDeviceEnum.FeedItemTargetDevice,
    targetedGeoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus,
    sitelinkFeedItem?: google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem.AsObject,
    structuredSnippetFeedItem?: google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem.AsObject,
    appFeedItem?: google_ads_googleads_v1_common_extensions_pb.AppFeedItem.AsObject,
    callFeedItem?: google_ads_googleads_v1_common_extensions_pb.CallFeedItem.AsObject,
    calloutFeedItem?: google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem.AsObject,
    textMessageFeedItem?: google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem.AsObject,
    priceFeedItem?: google_ads_googleads_v1_common_extensions_pb.PriceFeedItem.AsObject,
    promotionFeedItem?: google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem.AsObject,
    locationFeedItem?: google_ads_googleads_v1_common_extensions_pb.LocationFeedItem.AsObject,
    affiliateLocationFeedItem?: google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem.AsObject,
    targetedCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetedAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ExtensionCase { 
    EXTENSION_NOT_SET = 0,
    SITELINK_FEED_ITEM = 2,
    STRUCTURED_SNIPPET_FEED_ITEM = 3,
    APP_FEED_ITEM = 7,
    CALL_FEED_ITEM = 8,
    CALLOUT_FEED_ITEM = 9,
    TEXT_MESSAGE_FEED_ITEM = 10,
    PRICE_FEED_ITEM = 11,
    PROMOTION_FEED_ITEM = 12,
    LOCATION_FEED_ITEM = 14,
    AFFILIATE_LOCATION_FEED_ITEM = 15,
  }

  export enum ServingResourceTargetingCase { 
    SERVING_RESOURCE_TARGETING_NOT_SET = 0,
    TARGETED_CAMPAIGN = 18,
    TARGETED_AD_GROUP = 19,
  }
}

