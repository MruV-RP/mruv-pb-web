/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_campaign_feed_pb from '../../../../../google/ads/googleads/v2/resources/campaign_feed_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetCampaignFeedRequest,
  MutateCampaignFeedsRequest,
  MutateCampaignFeedsResponse} from './campaign_feed_service_pb';

export class CampaignFeedServiceClient {
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

  methodInfoGetCampaignFeed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed,
    (request: GetCampaignFeedRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed.deserializeBinary
  );

  getCampaignFeed(
    request: GetCampaignFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignFeedService/GetCampaignFeed',
      request,
      metadata || {},
      this.methodInfoGetCampaignFeed,
      callback);
  }

  methodInfoMutateCampaignFeeds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignFeedsResponse,
    (request: MutateCampaignFeedsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignFeedsResponse.deserializeBinary
  );

  mutateCampaignFeeds(
    request: MutateCampaignFeedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignFeedsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignFeedService/MutateCampaignFeeds',
      request,
      metadata || {},
      this.methodInfoMutateCampaignFeeds,
      callback);
  }

}

