/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_customer_label_pb from '../../../../../google/ads/googleads/v2/resources/customer_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetCustomerLabelRequest,
  MutateCustomerLabelsRequest,
  MutateCustomerLabelsResponse} from './customer_label_service_pb';

export class CustomerLabelServiceClient {
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

  methodInfoGetCustomerLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel,
    (request: GetCustomerLabelRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.deserializeBinary
  );

  getCustomerLabel(
    request: GetCustomerLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerLabelService/GetCustomerLabel',
      request,
      metadata || {},
      this.methodInfoGetCustomerLabel,
      callback);
  }

  methodInfoMutateCustomerLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerLabelsResponse,
    (request: MutateCustomerLabelsRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerLabelsResponse.deserializeBinary
  );

  mutateCustomerLabels(
    request: MutateCustomerLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerLabelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.CustomerLabelService/MutateCustomerLabels',
      request,
      metadata || {},
      this.methodInfoMutateCustomerLabels,
      callback);
  }

}

