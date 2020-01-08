/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_campaign_criterion_simulation_pb from '../../../../../google/ads/googleads/v2/resources/campaign_criterion_simulation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {GetCampaignCriterionSimulationRequest} from './campaign_criterion_simulation_service_pb';

export class CampaignCriterionSimulationServiceClient {
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

  methodInfoGetCampaignCriterionSimulation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation,
    (request: GetCampaignCriterionSimulationRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation.deserializeBinary
  );

  getCampaignCriterionSimulation(
    request: GetCampaignCriterionSimulationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CampaignCriterionSimulationService/GetCampaignCriterionSimulation',
      request,
      metadata || {},
      this.methodInfoGetCampaignCriterionSimulation,
      callback);
  }

}

