/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_common_extensions_pb from '../../../../../google/ads/googleads/v2/common/extensions_pb';
import * as google_ads_googleads_v2_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v2/enums/keyword_match_type_pb';
import * as google_ads_googleads_v2_resources_ad_pb from '../../../../../google/ads/googleads/v2/resources/ad_pb';
import * as google_ads_googleads_v2_resources_recommendation_pb from '../../../../../google/ads/googleads/v2/resources/recommendation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  ApplyRecommendationRequest,
  ApplyRecommendationResponse,
  DismissRecommendationRequest,
  DismissRecommendationResponse,
  GetRecommendationRequest} from './recommendation_service_pb';

export class RecommendationServiceClient {
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

  methodInfoGetRecommendation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_recommendation_pb.Recommendation,
    (request: GetRecommendationRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_recommendation_pb.Recommendation.deserializeBinary
  );

  getRecommendation(
    request: GetRecommendationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_recommendation_pb.Recommendation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.RecommendationService/GetRecommendation',
      request,
      metadata || {},
      this.methodInfoGetRecommendation,
      callback);
  }

  methodInfoApplyRecommendation = new grpcWeb.AbstractClientBase.MethodInfo(
    ApplyRecommendationResponse,
    (request: ApplyRecommendationRequest) => {
      return request.serializeBinary();
    },
    ApplyRecommendationResponse.deserializeBinary
  );

  applyRecommendation(
    request: ApplyRecommendationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ApplyRecommendationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.RecommendationService/ApplyRecommendation',
      request,
      metadata || {},
      this.methodInfoApplyRecommendation,
      callback);
  }

  methodInfoDismissRecommendation = new grpcWeb.AbstractClientBase.MethodInfo(
    DismissRecommendationResponse,
    (request: DismissRecommendationRequest) => {
      return request.serializeBinary();
    },
    DismissRecommendationResponse.deserializeBinary
  );

  dismissRecommendation(
    request: DismissRecommendationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DismissRecommendationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.RecommendationService/DismissRecommendation',
      request,
      metadata || {},
      this.methodInfoDismissRecommendation,
      callback);
  }

}

