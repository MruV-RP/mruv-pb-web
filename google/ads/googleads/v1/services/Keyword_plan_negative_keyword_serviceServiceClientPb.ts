/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_negative_keyword_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetKeywordPlanNegativeKeywordRequest,
  MutateKeywordPlanNegativeKeywordsRequest,
  MutateKeywordPlanNegativeKeywordsResponse} from './keyword_plan_negative_keyword_service_pb';

export class KeywordPlanNegativeKeywordServiceClient {
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

  methodInfoGetKeywordPlanNegativeKeyword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword,
    (request: GetKeywordPlanNegativeKeywordRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.deserializeBinary
  );

  getKeywordPlanNegativeKeyword(
    request: GetKeywordPlanNegativeKeywordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanNegativeKeywordService/GetKeywordPlanNegativeKeyword',
      request,
      metadata || {},
      this.methodInfoGetKeywordPlanNegativeKeyword,
      callback);
  }

  methodInfoMutateKeywordPlanNegativeKeywords = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateKeywordPlanNegativeKeywordsResponse,
    (request: MutateKeywordPlanNegativeKeywordsRequest) => {
      return request.serializeBinary();
    },
    MutateKeywordPlanNegativeKeywordsResponse.deserializeBinary
  );

  mutateKeywordPlanNegativeKeywords(
    request: MutateKeywordPlanNegativeKeywordsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateKeywordPlanNegativeKeywordsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanNegativeKeywordService/MutateKeywordPlanNegativeKeywords',
      request,
      metadata || {},
      this.methodInfoMutateKeywordPlanNegativeKeywords,
      callback);
  }

}
