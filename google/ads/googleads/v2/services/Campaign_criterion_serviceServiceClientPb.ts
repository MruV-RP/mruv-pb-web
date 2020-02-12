/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v2/resources/campaign_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetCampaignCriterionRequest,
  MutateCampaignCriteriaRequest,
  MutateCampaignCriteriaResponse} from './campaign_criterion_service_pb';

export class CampaignCriterionServiceClient {
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

  methodInfoGetCampaignCriterion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion,
    (request: GetCampaignCriterionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinary
  );

  getCampaignCriterion(
    request: GetCampaignCriterionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignCriterionService/GetCampaignCriterion',
      request,
      metadata || {},
      this.methodInfoGetCampaignCriterion,
      callback);
  }

  methodInfoMutateCampaignCriteria = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCampaignCriteriaResponse,
    (request: MutateCampaignCriteriaRequest) => {
      return request.serializeBinary();
    },
    MutateCampaignCriteriaResponse.deserializeBinary
  );

  mutateCampaignCriteria(
    request: MutateCampaignCriteriaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCampaignCriteriaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignCriterionService/MutateCampaignCriteria',
      request,
      metadata || {},
      this.methodInfoMutateCampaignCriteria,
      callback);
  }

}

