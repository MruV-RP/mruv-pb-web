/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_campaign_shared_set_pb from '../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCampaignSharedSetRequest,
  MutateCampaignSharedSetsRequest,
  MutateCampaignSharedSetsResponse} from './campaign_shared_set_service_pb';

export class CampaignSharedSetServiceClient {
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

  methodInfoGetCampaignSharedSet = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet,
    (request: GetCampaignSharedSetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet.deserializeBinary
  );

  getCampaignSharedSet(
    request: GetCampaignSharedSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignSharedSetService/GetCampaignSharedSet',
      request,
      metadata || {},
      this.methodInfoGetCampaignSharedSet,
      callback);
  }

  methodInfoMutateCampaignSharedSets = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignSharedSetsResponse,
    (request: MutateCampaignSharedSetsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignSharedSetsResponse.deserializeBinary
  );

  mutateCampaignSharedSets(
    request: MutateCampaignSharedSetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignSharedSetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignSharedSetService/MutateCampaignSharedSets',
      request,
      metadata || {},
      this.methodInfoMutateCampaignSharedSets,
      callback);
  }

}

