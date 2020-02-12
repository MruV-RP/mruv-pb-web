/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_keyword_plan_campaign_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_campaign_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetKeywordPlanCampaignRequest,
  MutateKeywordPlanCampaignsRequest,
  MutateKeywordPlanCampaignsResponse} from './keyword_plan_campaign_service_pb';

export class KeywordPlanCampaignServiceClient {
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

  methodInfoGetKeywordPlanCampaign = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign,
    (request: GetKeywordPlanCampaignRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.deserializeBinary
  );

  getKeywordPlanCampaign(
    request: GetKeywordPlanCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.KeywordPlanCampaignService/GetKeywordPlanCampaign',
      request,
      metadata || {},
      this.methodInfoGetKeywordPlanCampaign,
      callback);
  }

  methodInfoMutateKeywordPlanCampaigns = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateKeywordPlanCampaignsResponse,
    (request: MutateKeywordPlanCampaignsRequest) => {
      return request.serializeBinary();
    },
    MutateKeywordPlanCampaignsResponse.deserializeBinary
  );

  mutateKeywordPlanCampaigns(
    request: MutateKeywordPlanCampaignsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateKeywordPlanCampaignsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.KeywordPlanCampaignService/MutateKeywordPlanCampaigns',
      request,
      metadata || {},
      this.methodInfoMutateKeywordPlanCampaigns,
      callback);
  }

}

