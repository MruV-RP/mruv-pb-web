/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_customer_client_link_pb from '../../../../../google/ads/googleads/v1/resources/customer_client_link_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  GetCustomerClientLinkRequest,
  MutateCustomerClientLinkRequest,
  MutateCustomerClientLinkResponse} from './customer_client_link_service_pb';

export class CustomerClientLinkServiceClient {
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

  methodInfoGetCustomerClientLink = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink,
    (request: GetCustomerClientLinkRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink.deserializeBinary
  );

  getCustomerClientLink(
    request: GetCustomerClientLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerClientLinkService/GetCustomerClientLink',
      request,
      metadata || {},
      this.methodInfoGetCustomerClientLink,
      callback);
  }

  methodInfoMutateCustomerClientLink = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerClientLinkResponse,
    (request: MutateCustomerClientLinkRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerClientLinkResponse.deserializeBinary
  );

  mutateCustomerClientLink(
    request: MutateCustomerClientLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerClientLinkResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerClientLinkService/MutateCustomerClientLink',
      request,
      metadata || {},
      this.methodInfoMutateCustomerClientLink,
      callback);
  }

}
