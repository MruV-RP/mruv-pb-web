import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_keyword_plan_common_pb from '../../../../../google/ads/googleads/v2/common/keyword_plan_common_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetKeywordPlanRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanRequest): GetKeywordPlanRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeywordPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanRequest, reader: jspb.BinaryReader): GetKeywordPlanRequest;
}

export namespace GetKeywordPlanRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlansRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<KeywordPlanOperation>;
  setOperationsList(value: Array<KeywordPlanOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: KeywordPlanOperation, index?: number): KeywordPlanOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlansRequest): MutateKeywordPlansRequest.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlansRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlansRequest, reader: jspb.BinaryReader): MutateKeywordPlansRequest;
}

export namespace MutateKeywordPlansRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanOperation): KeywordPlanOperation.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanOperation;
  static deserializeBinaryFromReader(message: KeywordPlanOperation, reader: jspb.BinaryReader): KeywordPlanOperation;
}

export namespace KeywordPlanOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan.AsObject,
    update?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlansResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateKeywordPlansResult>;
  setResultsList(value: Array<MutateKeywordPlansResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateKeywordPlansResult, index?: number): MutateKeywordPlansResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlansResponse): MutateKeywordPlansResponse.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlansResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlansResponse, reader: jspb.BinaryReader): MutateKeywordPlansResponse;
}

export namespace MutateKeywordPlansResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlansResult.AsObject>,
  }
}

export class MutateKeywordPlansResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlansResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlansResult): MutateKeywordPlansResult.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlansResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlansResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlansResult, reader: jspb.BinaryReader): MutateKeywordPlansResult;
}

export namespace MutateKeywordPlansResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class GenerateForecastMetricsRequest extends jspb.Message {
  getKeywordPlan(): string;
  setKeywordPlan(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateForecastMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateForecastMetricsRequest): GenerateForecastMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateForecastMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateForecastMetricsRequest;
  static deserializeBinaryFromReader(message: GenerateForecastMetricsRequest, reader: jspb.BinaryReader): GenerateForecastMetricsRequest;
}

export namespace GenerateForecastMetricsRequest {
  export type AsObject = {
    keywordPlan: string,
  }
}

export class GenerateForecastMetricsResponse extends jspb.Message {
  getCampaignForecastsList(): Array<KeywordPlanCampaignForecast>;
  setCampaignForecastsList(value: Array<KeywordPlanCampaignForecast>): void;
  clearCampaignForecastsList(): void;
  addCampaignForecasts(value?: KeywordPlanCampaignForecast, index?: number): KeywordPlanCampaignForecast;

  getAdGroupForecastsList(): Array<KeywordPlanAdGroupForecast>;
  setAdGroupForecastsList(value: Array<KeywordPlanAdGroupForecast>): void;
  clearAdGroupForecastsList(): void;
  addAdGroupForecasts(value?: KeywordPlanAdGroupForecast, index?: number): KeywordPlanAdGroupForecast;

  getKeywordForecastsList(): Array<KeywordPlanKeywordForecast>;
  setKeywordForecastsList(value: Array<KeywordPlanKeywordForecast>): void;
  clearKeywordForecastsList(): void;
  addKeywordForecasts(value?: KeywordPlanKeywordForecast, index?: number): KeywordPlanKeywordForecast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateForecastMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateForecastMetricsResponse): GenerateForecastMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateForecastMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateForecastMetricsResponse;
  static deserializeBinaryFromReader(message: GenerateForecastMetricsResponse, reader: jspb.BinaryReader): GenerateForecastMetricsResponse;
}

export namespace GenerateForecastMetricsResponse {
  export type AsObject = {
    campaignForecastsList: Array<KeywordPlanCampaignForecast.AsObject>,
    adGroupForecastsList: Array<KeywordPlanAdGroupForecast.AsObject>,
    keywordForecastsList: Array<KeywordPlanKeywordForecast.AsObject>,
  }
}

export class KeywordPlanCampaignForecast extends jspb.Message {
  getKeywordPlanCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;

  getCampaignForecast(): ForecastMetrics | undefined;
  setCampaignForecast(value?: ForecastMetrics): void;
  hasCampaignForecast(): boolean;
  clearCampaignForecast(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignForecast.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignForecast): KeywordPlanCampaignForecast.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanCampaignForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignForecast;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignForecast, reader: jspb.BinaryReader): KeywordPlanCampaignForecast;
}

export namespace KeywordPlanCampaignForecast {
  export type AsObject = {
    keywordPlanCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaignForecast?: ForecastMetrics.AsObject,
  }
}

export class KeywordPlanAdGroupForecast extends jspb.Message {
  getKeywordPlanAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;

  getAdGroupForecast(): ForecastMetrics | undefined;
  setAdGroupForecast(value?: ForecastMetrics): void;
  hasAdGroupForecast(): boolean;
  clearAdGroupForecast(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupForecast.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupForecast): KeywordPlanAdGroupForecast.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanAdGroupForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupForecast;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupForecast, reader: jspb.BinaryReader): KeywordPlanAdGroupForecast;
}

export namespace KeywordPlanAdGroupForecast {
  export type AsObject = {
    keywordPlanAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroupForecast?: ForecastMetrics.AsObject,
  }
}

export class KeywordPlanKeywordForecast extends jspb.Message {
  getKeywordPlanAdGroupKeyword(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanAdGroupKeyword(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKeywordPlanAdGroupKeyword(): boolean;
  clearKeywordPlanAdGroupKeyword(): void;

  getKeywordForecast(): ForecastMetrics | undefined;
  setKeywordForecast(value?: ForecastMetrics): void;
  hasKeywordForecast(): boolean;
  clearKeywordForecast(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanKeywordForecast.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanKeywordForecast): KeywordPlanKeywordForecast.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanKeywordForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanKeywordForecast;
  static deserializeBinaryFromReader(message: KeywordPlanKeywordForecast, reader: jspb.BinaryReader): KeywordPlanKeywordForecast;
}

export namespace KeywordPlanKeywordForecast {
  export type AsObject = {
    keywordPlanAdGroupKeyword?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keywordForecast?: ForecastMetrics.AsObject,
  }
}

export class ForecastMetrics extends jspb.Message {
  getImpressions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasImpressions(): boolean;
  clearImpressions(): void;

  getCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCtr(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasCtr(): boolean;
  clearCtr(): void;

  getAverageCpc(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAverageCpc(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAverageCpc(): boolean;
  clearAverageCpc(): void;

  getClicks(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasClicks(): boolean;
  clearClicks(): void;

  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCostMicros(): boolean;
  clearCostMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastMetrics): ForecastMetrics.AsObject;
  static serializeBinaryToWriter(message: ForecastMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastMetrics;
  static deserializeBinaryFromReader(message: ForecastMetrics, reader: jspb.BinaryReader): ForecastMetrics;
}

export namespace ForecastMetrics {
  export type AsObject = {
    impressions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    ctr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpc?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    clicks?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class GenerateHistoricalMetricsRequest extends jspb.Message {
  getKeywordPlan(): string;
  setKeywordPlan(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateHistoricalMetricsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateHistoricalMetricsRequest): GenerateHistoricalMetricsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateHistoricalMetricsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateHistoricalMetricsRequest;
  static deserializeBinaryFromReader(message: GenerateHistoricalMetricsRequest, reader: jspb.BinaryReader): GenerateHistoricalMetricsRequest;
}

export namespace GenerateHistoricalMetricsRequest {
  export type AsObject = {
    keywordPlan: string,
  }
}

export class GenerateHistoricalMetricsResponse extends jspb.Message {
  getMetricsList(): Array<KeywordPlanKeywordHistoricalMetrics>;
  setMetricsList(value: Array<KeywordPlanKeywordHistoricalMetrics>): void;
  clearMetricsList(): void;
  addMetrics(value?: KeywordPlanKeywordHistoricalMetrics, index?: number): KeywordPlanKeywordHistoricalMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateHistoricalMetricsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateHistoricalMetricsResponse): GenerateHistoricalMetricsResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateHistoricalMetricsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateHistoricalMetricsResponse;
  static deserializeBinaryFromReader(message: GenerateHistoricalMetricsResponse, reader: jspb.BinaryReader): GenerateHistoricalMetricsResponse;
}

export namespace GenerateHistoricalMetricsResponse {
  export type AsObject = {
    metricsList: Array<KeywordPlanKeywordHistoricalMetrics.AsObject>,
  }
}

export class KeywordPlanKeywordHistoricalMetrics extends jspb.Message {
  getSearchQuery(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchQuery(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSearchQuery(): boolean;
  clearSearchQuery(): void;

  getKeywordMetrics(): google_ads_googleads_v2_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics | undefined;
  setKeywordMetrics(value?: google_ads_googleads_v2_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics): void;
  hasKeywordMetrics(): boolean;
  clearKeywordMetrics(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanKeywordHistoricalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanKeywordHistoricalMetrics): KeywordPlanKeywordHistoricalMetrics.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanKeywordHistoricalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanKeywordHistoricalMetrics;
  static deserializeBinaryFromReader(message: KeywordPlanKeywordHistoricalMetrics, reader: jspb.BinaryReader): KeywordPlanKeywordHistoricalMetrics;
}

export namespace KeywordPlanKeywordHistoricalMetrics {
  export type AsObject = {
    searchQuery?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keywordMetrics?: google_ads_googleads_v2_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics.AsObject,
  }
}

