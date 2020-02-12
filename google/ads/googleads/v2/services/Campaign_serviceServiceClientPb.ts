/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_campaign_pb from '../../../../../google/ads/googleads/v2/resources/campaign_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetCampaignRequest,
  MutateCampaignsRequest,
  MutateCampaignsResponse} from './campaign_service_pb';

export class CampaignServiceClient {
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

  methodInfoGetCampaign = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_campaign_pb.Campaign,
    (request: GetCampaignRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_campaign_pb.Campaign.deserializeBinary
  );

  getCampaign(
    request: GetCampaignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_campaign_pb.Campaign) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignService/GetCampaign',
      request,
      metadata || {},
      this.methodInfoGetCampaign,
      callback);
  }

  methodInfoMutateCampaigns = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignsResponse,
    (request: MutateCampaignsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignsResponse.deserializeBinary
  );

  mutateCampaigns(
    request: MutateCampaignsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignService/MutateCampaigns',
      request,
      metadata || {},
      this.methodInfoMutateCampaigns,
      callback);
  }

}

