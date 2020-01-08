/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_common_keyword_plan_common_pb from '../../../../../google/ads/googleads/v1/common/keyword_plan_common_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GenerateForecastMetricsRequest,
  GenerateForecastMetricsResponse,
  GenerateHistoricalMetricsRequest,
  GenerateHistoricalMetricsResponse,
  GetKeywordPlanRequest,
  MutateKeywordPlansRequest,
  MutateKeywordPlansResponse} from './keyword_plan_service_pb';

export class KeywordPlanServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetKeywordPlan = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan,
    (request: GetKeywordPlanRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan.deserializeBinary
  );

  getKeywordPlan(
    request: GetKeywordPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanService/GetKeywordPlan',
      request,
      metadata || {},
      this.methodInfoGetKeywordPlan,
      callback);
  }

  methodInfoMutateKeywordPlans = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateKeywordPlansResponse,
    (request: MutateKeywordPlansRequest) => {
      return request.serializeBinary();
    },
    MutateKeywordPlansResponse.deserializeBinary
  );

  mutateKeywordPlans(
    request: MutateKeywordPlansRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateKeywordPlansResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanService/MutateKeywordPlans',
      request,
      metadata || {},
      this.methodInfoMutateKeywordPlans,
      callback);
  }

  methodInfoGenerateForecastMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateForecastMetricsResponse,
    (request: GenerateForecastMetricsRequest) => {
      return request.serializeBinary();
    },
    GenerateForecastMetricsResponse.deserializeBinary
  );

  generateForecastMetrics(
    request: GenerateForecastMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateForecastMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanService/GenerateForecastMetrics',
      request,
      metadata || {},
      this.methodInfoGenerateForecastMetrics,
      callback);
  }

  methodInfoGenerateHistoricalMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateHistoricalMetricsResponse,
    (request: GenerateHistoricalMetricsRequest) => {
      return request.serializeBinary();
    },
    GenerateHistoricalMetricsResponse.deserializeBinary
  );

  generateHistoricalMetrics(
    request: GenerateHistoricalMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateHistoricalMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanService/GenerateHistoricalMetrics',
      request,
      metadata || {},
      this.methodInfoGenerateHistoricalMetrics,
      callback);
  }

}

