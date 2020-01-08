/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_customer_negative_criterion_pb from '../../../../../google/ads/googleads/v1/resources/customer_negative_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCustomerNegativeCriterionRequest,
  MutateCustomerNegativeCriteriaRequest,
  MutateCustomerNegativeCriteriaResponse} from './customer_negative_criterion_service_pb';

export class CustomerNegativeCriterionServiceClient {
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

  methodInfoGetCustomerNegativeCriterion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion,
    (request: GetCustomerNegativeCriterionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion.deserializeBinary
  );

  getCustomerNegativeCriterion(
    request: GetCustomerNegativeCriterionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerNegativeCriterionService/GetCustomerNegativeCriterion',
      request,
      metadata || {},
      this.methodInfoGetCustomerNegativeCriterion,
      callback);
  }

  methodInfoMutateCustomerNegativeCriteria = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerNegativeCriteriaResponse,
    (request: MutateCustomerNegativeCriteriaRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerNegativeCriteriaResponse.deserializeBinary
  );

  mutateCustomerNegativeCriteria(
    request: MutateCustomerNegativeCriteriaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerNegativeCriteriaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerNegativeCriterionService/MutateCustomerNegativeCriteria',
      request,
      metadata || {},
      this.methodInfoMutateCustomerNegativeCriteria,
      callback);
  }

}

