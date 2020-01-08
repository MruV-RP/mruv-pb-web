/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_common_keyword_plan_common_pb from '../../../../../google/ads/googleads/v1/common/keyword_plan_common_pb';
import * as google_ads_googleads_v1_enums_keyword_plan_network_pb from '../../../../../google/ads/googleads/v1/enums/keyword_plan_network_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  GenerateKeywordIdeaResponse,
  GenerateKeywordIdeasRequest} from './keyword_plan_idea_service_pb';

export class KeywordPlanIdeaServiceClient {
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

  methodInfoGenerateKeywordIdeas = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateKeywordIdeaResponse,
    (request: GenerateKeywordIdeasRequest) => {
      return request.serializeBinary();
    },
    GenerateKeywordIdeaResponse.deserializeBinary
  );

  generateKeywordIdeas(
    request: GenerateKeywordIdeasRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateKeywordIdeaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.KeywordPlanIdeaService/GenerateKeywordIdeas',
      request,
      metadata || {},
      this.methodInfoGenerateKeywordIdeas,
      callback);
  }

}

