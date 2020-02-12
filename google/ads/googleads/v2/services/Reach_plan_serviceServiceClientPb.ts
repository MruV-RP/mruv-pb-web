/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_common_criteria_pb from '../../../../../google/ads/googleads/v2/common/criteria_pb';
import * as google_ads_googleads_v2_enums_reach_plan_ad_length_pb from '../../../../../google/ads/googleads/v2/enums/reach_plan_ad_length_pb';
import * as google_ads_googleads_v2_enums_reach_plan_age_range_pb from '../../../../../google/ads/googleads/v2/enums/reach_plan_age_range_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GenerateProductMixIdeasRequest,
  GenerateProductMixIdeasResponse,
  GenerateReachForecastRequest,
  GenerateReachForecastResponse,
  ListPlannableLocationsRequest,
  ListPlannableLocationsResponse,
  ListPlannableProductsRequest,
  ListPlannableProductsResponse} from './reach_plan_service_pb';

export class ReachPlanServiceClient {
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

  methodInfoListPlannableLocations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPlannableLocationsResponse,
    (request: ListPlannableLocationsRequest) => {
      return request.serializeBinary();
    },
    ListPlannableLocationsResponse.deserializeBinary
  );

  listPlannableLocations(
    request: ListPlannableLocationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPlannableLocationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ReachPlanService/ListPlannableLocations',
      request,
      metadata || {},
      this.methodInfoListPlannableLocations,
      callback);
  }

  methodInfoListPlannableProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPlannableProductsResponse,
    (request: ListPlannableProductsRequest) => {
      return request.serializeBinary();
    },
    ListPlannableProductsResponse.deserializeBinary
  );

  listPlannableProducts(
    request: ListPlannableProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPlannableProductsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ReachPlanService/ListPlannableProducts',
      request,
      metadata || {},
      this.methodInfoListPlannableProducts,
      callback);
  }

  methodInfoGenerateProductMixIdeas = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateProductMixIdeasResponse,
    (request: GenerateProductMixIdeasRequest) => {
      return request.serializeBinary();
    },
    GenerateProductMixIdeasResponse.deserializeBinary
  );

  generateProductMixIdeas(
    request: GenerateProductMixIdeasRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateProductMixIdeasResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ReachPlanService/GenerateProductMixIdeas',
      request,
      metadata || {},
      this.methodInfoGenerateProductMixIdeas,
      callback);
  }

  methodInfoGenerateReachForecast = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateReachForecastResponse,
    (request: GenerateReachForecastRequest) => {
      return request.serializeBinary();
    },
    GenerateReachForecastResponse.deserializeBinary
  );

  generateReachForecast(
    request: GenerateReachForecastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateReachForecastResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ReachPlanService/GenerateReachForecast',
      request,
      metadata || {},
      this.methodInfoGenerateReachForecast,
      callback);
  }

}

