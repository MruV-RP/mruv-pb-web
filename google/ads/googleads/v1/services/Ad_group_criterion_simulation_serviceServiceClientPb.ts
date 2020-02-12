/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_ad_group_criterion_simulation_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_simulation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {GetAdGroupCriterionSimulationRequest} from './ad_group_criterion_simulation_service_pb';

export class AdGroupCriterionSimulationServiceClient {
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

  methodInfoGetAdGroupCriterionSimulation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation,
    (request: GetAdGroupCriterionSimulationRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation.deserializeBinary
  );

  getAdGroupCriterionSimulation(
    request: GetAdGroupCriterionSimulationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupCriterionSimulationService/GetAdGroupCriterionSimulation',
      request,
      metadata || {},
      this.methodInfoGetAdGroupCriterionSimulation,
      callback);
  }

}

