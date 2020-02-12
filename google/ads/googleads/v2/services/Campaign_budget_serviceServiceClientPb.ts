/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v2/resources/campaign_budget_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetCampaignBudgetRequest,
  MutateCampaignBudgetsRequest,
  MutateCampaignBudgetsResponse} from './campaign_budget_service_pb';

export class CampaignBudgetServiceClient {
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

  methodInfoGetCampaignBudget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget,
    (request: GetCampaignBudgetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.deserializeBinary
  );

  getCampaignBudget(
    request: GetCampaignBudgetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignBudgetService/GetCampaignBudget',
      request,
      metadata || {},
      this.methodInfoGetCampaignBudget,
      callback);
  }

  methodInfoMutateCampaignBudgets = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignBudgetsResponse,
    (request: MutateCampaignBudgetsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignBudgetsResponse.deserializeBinary
  );

  mutateCampaignBudgets(
    request: MutateCampaignBudgetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignBudgetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignBudgetService/MutateCampaignBudgets',
      request,
      metadata || {},
      this.methodInfoMutateCampaignBudgets,
      callback);
  }

}

