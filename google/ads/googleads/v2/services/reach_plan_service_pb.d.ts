import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_criteria_pb from '../../../../../google/ads/googleads/v2/common/criteria_pb';
import * as google_ads_googleads_v2_enums_reach_plan_ad_length_pb from '../../../../../google/ads/googleads/v2/enums/reach_plan_ad_length_pb';
import * as google_ads_googleads_v2_enums_reach_plan_age_range_pb from '../../../../../google/ads/googleads/v2/enums/reach_plan_age_range_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class ListPlannableLocationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlannableLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlannableLocationsRequest): ListPlannableLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlannableLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlannableLocationsRequest;
  static deserializeBinaryFromReader(message: ListPlannableLocationsRequest, reader: jspb.BinaryReader): ListPlannableLocationsRequest;
}

export namespace ListPlannableLocationsRequest {
  export type AsObject = {
  }
}

export class ListPlannableLocationsResponse extends jspb.Message {
  getPlannableLocationsList(): Array<PlannableLocation>;
  setPlannableLocationsList(value: Array<PlannableLocation>): void;
  clearPlannableLocationsList(): void;
  addPlannableLocations(value?: PlannableLocation, index?: number): PlannableLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlannableLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlannableLocationsResponse): ListPlannableLocationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPlannableLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlannableLocationsResponse;
  static deserializeBinaryFromReader(message: ListPlannableLocationsResponse, reader: jspb.BinaryReader): ListPlannableLocationsResponse;
}

export namespace ListPlannableLocationsResponse {
  export type AsObject = {
    plannableLocationsList: Array<PlannableLocation.AsObject>,
  }
}

export class PlannableLocation extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getParentCountryId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentCountryId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasParentCountryId(): boolean;
  clearParentCountryId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlannableLocation.AsObject;
  static toObject(includeInstance: boolean, msg: PlannableLocation): PlannableLocation.AsObject;
  static serializeBinaryToWriter(message: PlannableLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlannableLocation;
  static deserializeBinaryFromReader(message: PlannableLocation, reader: jspb.BinaryReader): PlannableLocation;
}

export namespace PlannableLocation {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    parentCountryId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class ListPlannableProductsRequest extends jspb.Message {
  getPlannableLocationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableLocationId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableLocationId(): boolean;
  clearPlannableLocationId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlannableProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlannableProductsRequest): ListPlannableProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlannableProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlannableProductsRequest;
  static deserializeBinaryFromReader(message: ListPlannableProductsRequest, reader: jspb.BinaryReader): ListPlannableProductsRequest;
}

export namespace ListPlannableProductsRequest {
  export type AsObject = {
    plannableLocationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListPlannableProductsResponse extends jspb.Message {
  getProductMetadataList(): Array<ProductMetadata>;
  setProductMetadataList(value: Array<ProductMetadata>): void;
  clearProductMetadataList(): void;
  addProductMetadata(value?: ProductMetadata, index?: number): ProductMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlannableProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlannableProductsResponse): ListPlannableProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPlannableProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlannableProductsResponse;
  static deserializeBinaryFromReader(message: ListPlannableProductsResponse, reader: jspb.BinaryReader): ListPlannableProductsResponse;
}

export namespace ListPlannableProductsResponse {
  export type AsObject = {
    productMetadataList: Array<ProductMetadata.AsObject>,
  }
}

export class ProductMetadata extends jspb.Message {
  getPlannableProductCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableProductCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableProductCode(): boolean;
  clearPlannableProductCode(): void;

  getPlannableTargeting(): PlannableTargeting | undefined;
  setPlannableTargeting(value?: PlannableTargeting): void;
  hasPlannableTargeting(): boolean;
  clearPlannableTargeting(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ProductMetadata): ProductMetadata.AsObject;
  static serializeBinaryToWriter(message: ProductMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductMetadata;
  static deserializeBinaryFromReader(message: ProductMetadata, reader: jspb.BinaryReader): ProductMetadata;
}

export namespace ProductMetadata {
  export type AsObject = {
    plannableProductCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    plannableTargeting?: PlannableTargeting.AsObject,
  }
}

export class PlannableTargeting extends jspb.Message {
  getAgeRangesList(): Array<google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange>;
  setAgeRangesList(value: Array<google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange>): void;
  clearAgeRangesList(): void;
  addAgeRanges(value: google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange, index?: number): void;

  getGendersList(): Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo>;
  setGendersList(value: Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo>): void;
  clearGendersList(): void;
  addGenders(value?: google_ads_googleads_v2_common_criteria_pb.GenderInfo, index?: number): google_ads_googleads_v2_common_criteria_pb.GenderInfo;

  getDevicesList(): Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo>;
  setDevicesList(value: Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo>): void;
  clearDevicesList(): void;
  addDevices(value?: google_ads_googleads_v2_common_criteria_pb.DeviceInfo, index?: number): google_ads_googleads_v2_common_criteria_pb.DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlannableTargeting.AsObject;
  static toObject(includeInstance: boolean, msg: PlannableTargeting): PlannableTargeting.AsObject;
  static serializeBinaryToWriter(message: PlannableTargeting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlannableTargeting;
  static deserializeBinaryFromReader(message: PlannableTargeting, reader: jspb.BinaryReader): PlannableTargeting;
}

export namespace PlannableTargeting {
  export type AsObject = {
    ageRangesList: Array<google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange>,
    gendersList: Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo.AsObject>,
    devicesList: Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo.AsObject>,
  }
}

export class GenerateProductMixIdeasRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getPlannableLocationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableLocationId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableLocationId(): boolean;
  clearPlannableLocationId(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getBudgetMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBudgetMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasBudgetMicros(): boolean;
  clearBudgetMicros(): void;

  getPreferences(): Preferences | undefined;
  setPreferences(value?: Preferences): void;
  hasPreferences(): boolean;
  clearPreferences(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProductMixIdeasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProductMixIdeasRequest): GenerateProductMixIdeasRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateProductMixIdeasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProductMixIdeasRequest;
  static deserializeBinaryFromReader(message: GenerateProductMixIdeasRequest, reader: jspb.BinaryReader): GenerateProductMixIdeasRequest;
}

export namespace GenerateProductMixIdeasRequest {
  export type AsObject = {
    customerId: string,
    plannableLocationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    budgetMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    preferences?: Preferences.AsObject,
  }
}

export class Preferences extends jspb.Message {
  getIsSkippable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsSkippable(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasIsSkippable(): boolean;
  clearIsSkippable(): void;

  getStartsWithSound(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setStartsWithSound(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasStartsWithSound(): boolean;
  clearStartsWithSound(): void;

  getAdLength(): google_ads_googleads_v2_enums_reach_plan_ad_length_pb.ReachPlanAdLengthEnum.ReachPlanAdLength;
  setAdLength(value: google_ads_googleads_v2_enums_reach_plan_ad_length_pb.ReachPlanAdLengthEnum.ReachPlanAdLength): void;

  getTopContentOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTopContentOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasTopContentOnly(): boolean;
  clearTopContentOnly(): void;

  getHasGuaranteedPrice(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasGuaranteedPrice(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasHasGuaranteedPrice(): boolean;
  clearHasGuaranteedPrice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preferences.AsObject;
  static toObject(includeInstance: boolean, msg: Preferences): Preferences.AsObject;
  static serializeBinaryToWriter(message: Preferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preferences;
  static deserializeBinaryFromReader(message: Preferences, reader: jspb.BinaryReader): Preferences;
}

export namespace Preferences {
  export type AsObject = {
    isSkippable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    startsWithSound?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    adLength: google_ads_googleads_v2_enums_reach_plan_ad_length_pb.ReachPlanAdLengthEnum.ReachPlanAdLength,
    topContentOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasGuaranteedPrice?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class GenerateProductMixIdeasResponse extends jspb.Message {
  getProductAllocationList(): Array<ProductAllocation>;
  setProductAllocationList(value: Array<ProductAllocation>): void;
  clearProductAllocationList(): void;
  addProductAllocation(value?: ProductAllocation, index?: number): ProductAllocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateProductMixIdeasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateProductMixIdeasResponse): GenerateProductMixIdeasResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateProductMixIdeasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateProductMixIdeasResponse;
  static deserializeBinaryFromReader(message: GenerateProductMixIdeasResponse, reader: jspb.BinaryReader): GenerateProductMixIdeasResponse;
}

export namespace GenerateProductMixIdeasResponse {
  export type AsObject = {
    productAllocationList: Array<ProductAllocation.AsObject>,
  }
}

export class ProductAllocation extends jspb.Message {
  getPlannableProductCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableProductCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableProductCode(): boolean;
  clearPlannableProductCode(): void;

  getBudgetMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBudgetMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasBudgetMicros(): boolean;
  clearBudgetMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductAllocation.AsObject;
  static toObject(includeInstance: boolean, msg: ProductAllocation): ProductAllocation.AsObject;
  static serializeBinaryToWriter(message: ProductAllocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductAllocation;
  static deserializeBinaryFromReader(message: ProductAllocation, reader: jspb.BinaryReader): ProductAllocation;
}

export namespace ProductAllocation {
  export type AsObject = {
    plannableProductCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    budgetMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class GenerateReachForecastRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getCampaignDuration(): CampaignDuration | undefined;
  setCampaignDuration(value?: CampaignDuration): void;
  hasCampaignDuration(): boolean;
  clearCampaignDuration(): void;

  getCookieFrequencyCap(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setCookieFrequencyCap(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasCookieFrequencyCap(): boolean;
  clearCookieFrequencyCap(): void;

  getMinEffectiveFrequency(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setMinEffectiveFrequency(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasMinEffectiveFrequency(): boolean;
  clearMinEffectiveFrequency(): void;

  getTargeting(): Targeting | undefined;
  setTargeting(value?: Targeting): void;
  hasTargeting(): boolean;
  clearTargeting(): void;

  getPlannedProductsList(): Array<PlannedProduct>;
  setPlannedProductsList(value: Array<PlannedProduct>): void;
  clearPlannedProductsList(): void;
  addPlannedProducts(value?: PlannedProduct, index?: number): PlannedProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReachForecastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReachForecastRequest): GenerateReachForecastRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateReachForecastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReachForecastRequest;
  static deserializeBinaryFromReader(message: GenerateReachForecastRequest, reader: jspb.BinaryReader): GenerateReachForecastRequest;
}

export namespace GenerateReachForecastRequest {
  export type AsObject = {
    customerId: string,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignDuration?: CampaignDuration.AsObject,
    cookieFrequencyCap?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    minEffectiveFrequency?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    targeting?: Targeting.AsObject,
    plannedProductsList: Array<PlannedProduct.AsObject>,
  }
}

export class Targeting extends jspb.Message {
  getPlannableLocationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableLocationId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableLocationId(): boolean;
  clearPlannableLocationId(): void;

  getAgeRange(): google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange;
  setAgeRange(value: google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange): void;

  getGendersList(): Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo>;
  setGendersList(value: Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo>): void;
  clearGendersList(): void;
  addGenders(value?: google_ads_googleads_v2_common_criteria_pb.GenderInfo, index?: number): google_ads_googleads_v2_common_criteria_pb.GenderInfo;

  getDevicesList(): Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo>;
  setDevicesList(value: Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo>): void;
  clearDevicesList(): void;
  addDevices(value?: google_ads_googleads_v2_common_criteria_pb.DeviceInfo, index?: number): google_ads_googleads_v2_common_criteria_pb.DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Targeting.AsObject;
  static toObject(includeInstance: boolean, msg: Targeting): Targeting.AsObject;
  static serializeBinaryToWriter(message: Targeting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Targeting;
  static deserializeBinaryFromReader(message: Targeting, reader: jspb.BinaryReader): Targeting;
}

export namespace Targeting {
  export type AsObject = {
    plannableLocationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ageRange: google_ads_googleads_v2_enums_reach_plan_age_range_pb.ReachPlanAgeRangeEnum.ReachPlanAgeRange,
    gendersList: Array<google_ads_googleads_v2_common_criteria_pb.GenderInfo.AsObject>,
    devicesList: Array<google_ads_googleads_v2_common_criteria_pb.DeviceInfo.AsObject>,
  }
}

export class CampaignDuration extends jspb.Message {
  getDurationInDays(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDurationInDays(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasDurationInDays(): boolean;
  clearDurationInDays(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDuration.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDuration): CampaignDuration.AsObject;
  static serializeBinaryToWriter(message: CampaignDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDuration;
  static deserializeBinaryFromReader(message: CampaignDuration, reader: jspb.BinaryReader): CampaignDuration;
}

export namespace CampaignDuration {
  export type AsObject = {
    durationInDays?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class PlannedProduct extends jspb.Message {
  getPlannableProductCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlannableProductCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlannableProductCode(): boolean;
  clearPlannableProductCode(): void;

  getBudgetMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBudgetMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasBudgetMicros(): boolean;
  clearBudgetMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlannedProduct.AsObject;
  static toObject(includeInstance: boolean, msg: PlannedProduct): PlannedProduct.AsObject;
  static serializeBinaryToWriter(message: PlannedProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlannedProduct;
  static deserializeBinaryFromReader(message: PlannedProduct, reader: jspb.BinaryReader): PlannedProduct;
}

export namespace PlannedProduct {
  export type AsObject = {
    plannableProductCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    budgetMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class GenerateReachForecastResponse extends jspb.Message {
  getOnTargetAudienceMetrics(): OnTargetAudienceMetrics | undefined;
  setOnTargetAudienceMetrics(value?: OnTargetAudienceMetrics): void;
  hasOnTargetAudienceMetrics(): boolean;
  clearOnTargetAudienceMetrics(): void;

  getReachCurve(): ReachCurve | undefined;
  setReachCurve(value?: ReachCurve): void;
  hasReachCurve(): boolean;
  clearReachCurve(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReachForecastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReachForecastResponse): GenerateReachForecastResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateReachForecastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReachForecastResponse;
  static deserializeBinaryFromReader(message: GenerateReachForecastResponse, reader: jspb.BinaryReader): GenerateReachForecastResponse;
}

export namespace GenerateReachForecastResponse {
  export type AsObject = {
    onTargetAudienceMetrics?: OnTargetAudienceMetrics.AsObject,
    reachCurve?: ReachCurve.AsObject,
  }
}

export class ReachCurve extends jspb.Message {
  getReachForecastsList(): Array<ReachForecast>;
  setReachForecastsList(value: Array<ReachForecast>): void;
  clearReachForecastsList(): void;
  addReachForecasts(value?: ReachForecast, index?: number): ReachForecast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachCurve.AsObject;
  static toObject(includeInstance: boolean, msg: ReachCurve): ReachCurve.AsObject;
  static serializeBinaryToWriter(message: ReachCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachCurve;
  static deserializeBinaryFromReader(message: ReachCurve, reader: jspb.BinaryReader): ReachCurve;
}

export namespace ReachCurve {
  export type AsObject = {
    reachForecastsList: Array<ReachForecast.AsObject>,
  }
}

export class ReachForecast extends jspb.Message {
  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCostMicros(): boolean;
  clearCostMicros(): void;

  getForecast(): Forecast | undefined;
  setForecast(value?: Forecast): void;
  hasForecast(): boolean;
  clearForecast(): void;

  getForecastedProductAllocationsList(): Array<ProductAllocation>;
  setForecastedProductAllocationsList(value: Array<ProductAllocation>): void;
  clearForecastedProductAllocationsList(): void;
  addForecastedProductAllocations(value?: ProductAllocation, index?: number): ProductAllocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachForecast.AsObject;
  static toObject(includeInstance: boolean, msg: ReachForecast): ReachForecast.AsObject;
  static serializeBinaryToWriter(message: ReachForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachForecast;
  static deserializeBinaryFromReader(message: ReachForecast, reader: jspb.BinaryReader): ReachForecast;
}

export namespace ReachForecast {
  export type AsObject = {
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    forecast?: Forecast.AsObject,
    forecastedProductAllocationsList: Array<ProductAllocation.AsObject>,
  }
}

export class Forecast extends jspb.Message {
  getOnTargetReach(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOnTargetReach(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasOnTargetReach(): boolean;
  clearOnTargetReach(): void;

  getTotalReach(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalReach(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTotalReach(): boolean;
  clearTotalReach(): void;

  getOnTargetImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOnTargetImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasOnTargetImpressions(): boolean;
  clearOnTargetImpressions(): void;

  getTotalImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalImpressions(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTotalImpressions(): boolean;
  clearTotalImpressions(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Forecast.AsObject;
  static toObject(includeInstance: boolean, msg: Forecast): Forecast.AsObject;
  static serializeBinaryToWriter(message: Forecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Forecast;
  static deserializeBinaryFromReader(message: Forecast, reader: jspb.BinaryReader): Forecast;
}

export namespace Forecast {
  export type AsObject = {
    onTargetReach?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    totalReach?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    onTargetImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    totalImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class OnTargetAudienceMetrics extends jspb.Message {
  getYoutubeAudienceSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setYoutubeAudienceSize(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasYoutubeAudienceSize(): boolean;
  clearYoutubeAudienceSize(): void;

  getCensusAudienceSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCensusAudienceSize(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCensusAudienceSize(): boolean;
  clearCensusAudienceSize(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnTargetAudienceMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: OnTargetAudienceMetrics): OnTargetAudienceMetrics.AsObject;
  static serializeBinaryToWriter(message: OnTargetAudienceMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnTargetAudienceMetrics;
  static deserializeBinaryFromReader(message: OnTargetAudienceMetrics, reader: jspb.BinaryReader): OnTargetAudienceMetrics;
}

export namespace OnTargetAudienceMetrics {
  export type AsObject = {
    youtubeAudienceSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    censusAudienceSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

