/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_shared_criterion_pb from '../../../../../google/ads/googleads/v2/resources/shared_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetSharedCriterionRequest,
  MutateSharedCriteriaRequest,
  MutateSharedCriteriaResponse} from './shared_criterion_service_pb';

export class SharedCriterionServiceClient {
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

  methodInfoGetSharedCriterion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion,
    (request: GetSharedCriterionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion.deserializeBinary
  );

  getSharedCriterion(
    request: GetSharedCriterionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.SharedCriterionService/GetSharedCriterion',
      request,
      metadata || {},
      this.methodInfoGetSharedCriterion,
      callback);
  }

  methodInfoMutateSharedCriteria = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateSharedCriteriaResponse,
    (request: MutateSharedCriteriaRequest) => {
      return request.serializeBinary();
    },
    MutateSharedCriteriaResponse.deserializeBinary
  );

  mutateSharedCriteria(
    request: MutateSharedCriteriaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateSharedCriteriaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.SharedCriterionService/MutateSharedCriteria',
      request,
      metadata || {},
      this.methodInfoMutateSharedCriteria,
      callback);
  }

}

