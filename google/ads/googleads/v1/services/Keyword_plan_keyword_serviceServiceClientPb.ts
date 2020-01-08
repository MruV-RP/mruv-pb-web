/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_keyword_plan_keyword_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_keyword_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetKeywordPlanKeywordRequest,
  MutateKeywordPlanKeywordsRequest,
  MutateKeywordPlanKeywordsResponse} from './keyword_plan_keyword_service_pb';

export class KeywordPlanKeywordServiceClient {
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

  methodInfoGetKeywordPlanKeyword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword,
    (request: GetKeywordPlanKeywordRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.deserializeBinary
  );

  getKeywordPlanKeyword(
    request: GetKeywordPlanKeywordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanKeywordService/GetKeywordPlanKeyword',
      request,
      metadata || {},
      this.methodInfoGetKeywordPlanKeyword,
      callback);
  }

  methodInfoMutateKeywordPlanKeywords = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateKeywordPlanKeywordsResponse,
    (request: MutateKeywordPlanKeywordsRequest) => {
      return request.serializeBinary();
    },
    MutateKeywordPlanKeywordsResponse.deserializeBinary
  );

  mutateKeywordPlanKeywords(
    request: MutateKeywordPlanKeywordsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateKeywordPlanKeywordsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanKeywordService/MutateKeywordPlanKeywords',
      request,
      metadata || {},
      this.methodInfoMutateKeywordPlanKeywords,
      callback);
  }

}

