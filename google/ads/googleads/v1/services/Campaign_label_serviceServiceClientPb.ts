/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_campaign_label_pb from '../../../../../google/ads/googleads/v1/resources/campaign_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCampaignLabelRequest,
  MutateCampaignLabelsRequest,
  MutateCampaignLabelsResponse} from './campaign_label_service_pb';

export class CampaignLabelServiceClient {
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

  methodInfoGetCampaignLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel,
    (request: GetCampaignLabelRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel.deserializeBinary
  );

  getCampaignLabel(
    request: GetCampaignLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_campaign_label_pb.CampaignLabel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignLabelService/GetCampaignLabel',
      request,
      metadata || {},
      this.methodInfoGetCampaignLabel,
      callback);
  }

  methodInfoMutateCampaignLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignLabelsResponse,
    (request: MutateCampaignLabelsRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignLabelsResponse.deserializeBinary
  );

  mutateCampaignLabels(
    request: MutateCampaignLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignLabelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CampaignLabelService/MutateCampaignLabels',
      request,
      metadata || {},
      this.methodInfoMutateCampaignLabels,
      callback);
  }

}

