import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_custom_parameter_pb from '../../../../../google/ads/googleads/v1/common/custom_parameter_pb';
import * as google_ads_googleads_v1_common_feed_common_pb from '../../../../../google/ads/googleads/v1/common/feed_common_pb';
import * as google_ads_googleads_v1_common_policy_pb from '../../../../../google/ads/googleads/v1/common/policy_pb';
import * as google_ads_googleads_v1_enums_feed_item_quality_approval_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_quality_approval_status_pb';
import * as google_ads_googleads_v1_enums_feed_item_quality_disapproval_reason_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_quality_disapproval_reason_pb';
import * as google_ads_googleads_v1_enums_feed_item_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_status_pb';
import * as google_ads_googleads_v1_enums_feed_item_validation_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_item_validation_status_pb';
import * as google_ads_googleads_v1_enums_geo_targeting_restriction_pb from '../../../../../google/ads/googleads/v1/enums/geo_targeting_restriction_pb';
import * as google_ads_googleads_v1_enums_policy_approval_status_pb from '../../../../../google/ads/googleads/v1/enums/policy_approval_status_pb';
import * as google_ads_googleads_v1_enums_policy_review_status_pb from '../../../../../google/ads/googleads/v1/enums/policy_review_status_pb';
import * as google_ads_googleads_v1_errors_feed_item_validation_error_pb from '../../../../../google/ads/googleads/v1/errors/feed_item_validation_error_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FeedItem extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFeed(): boolean;
  clearFeed(): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStartDateTime(): boolean;
  clearStartDateTime(): void;

  getEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasEndDateTime(): boolean;
  clearEndDateTime(): void;

  getAttributeValuesList(): Array<FeedItemAttributeValue>;
  setAttributeValuesList(value: Array<FeedItemAttributeValue>): void;
  clearAttributeValuesList(): void;
  addAttributeValues(value?: FeedItemAttributeValue, index?: number): FeedItemAttributeValue;

  getGeoTargetingRestriction(): google_ads_googleads_v1_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestriction;
  setGeoTargetingRestriction(value: google_ads_googleads_v1_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestriction): void;

  getUrlCustomParametersList(): Array<google_ads_googleads_v1_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v1_common_custom_parameter_pb.CustomParameter>): void;
  clearUrlCustomParametersList(): void;
  addUrlCustomParameters(value?: google_ads_googleads_v1_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v1_common_custom_parameter_pb.CustomParameter;

  getStatus(): google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus;
  setStatus(value: google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus): void;

  getPolicyInfosList(): Array<FeedItemPlaceholderPolicyInfo>;
  setPolicyInfosList(value: Array<FeedItemPlaceholderPolicyInfo>): void;
  clearPolicyInfosList(): void;
  addPolicyInfos(value?: FeedItemPlaceholderPolicyInfo, index?: number): FeedItemPlaceholderPolicyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItem): FeedItem.AsObject;
  static serializeBinaryToWriter(message: FeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItem;
  static deserializeBinaryFromReader(message: FeedItem, reader: jspb.BinaryReader): FeedItem;
}

export namespace FeedItem {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    startDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributeValuesList: Array<FeedItemAttributeValue.AsObject>,
    geoTargetingRestriction: google_ads_googleads_v1_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestriction,
    urlCustomParametersList: Array<google_ads_googleads_v1_common_custom_parameter_pb.CustomParameter.AsObject>,
    status: google_ads_googleads_v1_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatus,
    policyInfosList: Array<FeedItemPlaceholderPolicyInfo.AsObject>,
  }
}

export class FeedItemAttributeValue extends jspb.Message {
  getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasFeedAttributeId(): boolean;
  clearFeedAttributeId(): void;

  getIntegerValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setIntegerValue(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasIntegerValue(): boolean;
  clearIntegerValue(): void;

  getBooleanValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setBooleanValue(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasBooleanValue(): boolean;
  clearBooleanValue(): void;

  getStringValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStringValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStringValue(): boolean;
  clearStringValue(): void;

  getDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasDoubleValue(): boolean;
  clearDoubleValue(): void;

  getPriceValue(): google_ads_googleads_v1_common_feed_common_pb.Money | undefined;
  setPriceValue(value?: google_ads_googleads_v1_common_feed_common_pb.Money): void;
  hasPriceValue(): boolean;
  clearPriceValue(): void;

  getIntegerValuesList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setIntegerValuesList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  clearIntegerValuesList(): void;
  addIntegerValues(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

  getBooleanValuesList(): Array<google_protobuf_wrappers_pb.BoolValue>;
  setBooleanValuesList(value: Array<google_protobuf_wrappers_pb.BoolValue>): void;
  clearBooleanValuesList(): void;
  addBooleanValues(value?: google_protobuf_wrappers_pb.BoolValue, index?: number): google_protobuf_wrappers_pb.BoolValue;

  getStringValuesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setStringValuesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearStringValuesList(): void;
  addStringValues(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getDoubleValuesList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setDoubleValuesList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  clearDoubleValuesList(): void;
  addDoubleValues(value?: google_protobuf_wrappers_pb.DoubleValue, index?: number): google_protobuf_wrappers_pb.DoubleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemAttributeValue.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemAttributeValue): FeedItemAttributeValue.AsObject;
  static serializeBinaryToWriter(message: FeedItemAttributeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemAttributeValue;
  static deserializeBinaryFromReader(message: FeedItemAttributeValue, reader: jspb.BinaryReader): FeedItemAttributeValue;
}

export namespace FeedItemAttributeValue {
  export type AsObject = {
    feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    integerValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    booleanValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    stringValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
    doubleValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    priceValue?: google_ads_googleads_v1_common_feed_common_pb.Money.AsObject,
    integerValuesList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
    booleanValuesList: Array<google_protobuf_wrappers_pb.BoolValue.AsObject>,
    stringValuesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    doubleValuesList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>,
  }
}

export class FeedItemPlaceholderPolicyInfo extends jspb.Message {
  getPlaceholderType(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPlaceholderType(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasPlaceholderType(): boolean;
  clearPlaceholderType(): void;

  getFeedMappingResourceName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeedMappingResourceName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFeedMappingResourceName(): boolean;
  clearFeedMappingResourceName(): void;

  getReviewStatus(): google_ads_googleads_v1_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatus;
  setReviewStatus(value: google_ads_googleads_v1_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatus): void;

  getApprovalStatus(): google_ads_googleads_v1_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatus;
  setApprovalStatus(value: google_ads_googleads_v1_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatus): void;

  getPolicyTopicEntriesList(): Array<google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry>): void;
  clearPolicyTopicEntriesList(): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry;

  getValidationStatus(): google_ads_googleads_v1_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatus;
  setValidationStatus(value: google_ads_googleads_v1_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatus): void;

  getValidationErrorsList(): Array<FeedItemValidationError>;
  setValidationErrorsList(value: Array<FeedItemValidationError>): void;
  clearValidationErrorsList(): void;
  addValidationErrors(value?: FeedItemValidationError, index?: number): FeedItemValidationError;

  getQualityApprovalStatus(): google_ads_googleads_v1_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatus;
  setQualityApprovalStatus(value: google_ads_googleads_v1_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatus): void;

  getQualityDisapprovalReasonsList(): Array<google_ads_googleads_v1_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReason>;
  setQualityDisapprovalReasonsList(value: Array<google_ads_googleads_v1_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReason>): void;
  clearQualityDisapprovalReasonsList(): void;
  addQualityDisapprovalReasons(value: google_ads_googleads_v1_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReason, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemPlaceholderPolicyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemPlaceholderPolicyInfo): FeedItemPlaceholderPolicyInfo.AsObject;
  static serializeBinaryToWriter(message: FeedItemPlaceholderPolicyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemPlaceholderPolicyInfo;
  static deserializeBinaryFromReader(message: FeedItemPlaceholderPolicyInfo, reader: jspb.BinaryReader): FeedItemPlaceholderPolicyInfo;
}

export namespace FeedItemPlaceholderPolicyInfo {
  export type AsObject = {
    placeholderType?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    feedMappingResourceName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    reviewStatus: google_ads_googleads_v1_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatus,
    approvalStatus: google_ads_googleads_v1_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatus,
    policyTopicEntriesList: Array<google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry.AsObject>,
    validationStatus: google_ads_googleads_v1_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatus,
    validationErrorsList: Array<FeedItemValidationError.AsObject>,
    qualityApprovalStatus: google_ads_googleads_v1_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatus,
    qualityDisapprovalReasonsList: Array<google_ads_googleads_v1_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReason>,
  }
}

export class FeedItemValidationError extends jspb.Message {
  getValidationError(): google_ads_googleads_v1_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError;
  setValidationError(value: google_ads_googleads_v1_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError): void;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescription(): boolean;
  clearDescription(): void;

  getFeedAttributeIdsList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setFeedAttributeIdsList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  clearFeedAttributeIdsList(): void;
  addFeedAttributeIds(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

  getExtraInfo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExtraInfo(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasExtraInfo(): boolean;
  clearExtraInfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemValidationError): FeedItemValidationError.AsObject;
  static serializeBinaryToWriter(message: FeedItemValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemValidationError;
  static deserializeBinaryFromReader(message: FeedItemValidationError, reader: jspb.BinaryReader): FeedItemValidationError;
}

export namespace FeedItemValidationError {
  export type AsObject = {
    validationError: google_ads_googleads_v1_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feedAttributeIdsList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
    extraInfo?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

