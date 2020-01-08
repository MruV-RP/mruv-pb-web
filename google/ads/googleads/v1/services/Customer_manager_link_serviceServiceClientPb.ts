/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_customer_manager_link_pb from '../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  GetCustomerManagerLinkRequest,
  MutateCustomerManagerLinkRequest,
  MutateCustomerManagerLinkResponse} from './customer_manager_link_service_pb';

export class CustomerManagerLinkServiceClient {
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

  methodInfoGetCustomerManagerLink = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink,
    (request: GetCustomerManagerLinkRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink.deserializeBinary
  );

  getCustomerManagerLink(
    request: GetCustomerManagerLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerManagerLinkService/GetCustomerManagerLink',
      request,
      metadata || {},
      this.methodInfoGetCustomerManagerLink,
      callback);
  }

  methodInfoMutateCustomerManagerLink = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerManagerLinkResponse,
    (request: MutateCustomerManagerLinkRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerManagerLinkResponse.deserializeBinary
  );

  mutateCustomerManagerLink(
    request: MutateCustomerManagerLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerManagerLinkResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerManagerLinkService/MutateCustomerManagerLink',
      request,
      metadata || {},
      this.methodInfoMutateCustomerManagerLink,
      callback);
  }

}

