/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_campaign_bid_modifier_pb from '../../../../../google/ads/googleads/v1/resources/campaign_bid_modifier_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCampaignBidModifierRequest,
  MutateCampaignBidModifiersRequest,
  MutateCampaignBidModifiersResponse} from './campaign_bid_modifier_service_pb';

export class CampaignBidModifierServiceClient {
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

  methodInfoGetCampaignBidModifier = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier,
    (request: GetCampaignBidModifierRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.deserializeBinary
  );

  getCampaignBidModifier(
    request: GetCampaignBidModifierRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignBidModifierService/GetCampaignBidModifier',
      request,
      metadata || {},
      this.methodInfoGetCampaignBidModifier,
      callback);
  }

  methodInfoMutateCampaignBidModifiers = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignBidModifiersResponse,
    (request: MutateCampaignBidModifiersRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignBidModifiersResponse.deserializeBinary
  );

  mutateCampaignBidModifiers(
    request: MutateCampaignBidModifiersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignBidModifiersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignBidModifierService/MutateCampaignBidModifiers',
      request,
      metadata || {},
      this.methodInfoMutateCampaignBidModifiers,
      callback);
  }

}

