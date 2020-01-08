/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_customer_feed_pb from '../../../../../google/ads/googleads/v1/resources/customer_feed_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetCustomerFeedRequest,
  MutateCustomerFeedsRequest,
  MutateCustomerFeedsResponse} from './customer_feed_service_pb';

export class CustomerFeedServiceClient {
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

  methodInfoGetCustomerFeed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed,
    (request: GetCustomerFeedRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.deserializeBinary
  );

  getCustomerFeed(
    request: GetCustomerFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerFeedService/GetCustomerFeed',
      request,
      metadata || {},
      this.methodInfoGetCustomerFeed,
      callback);
  }

  methodInfoMutateCustomerFeeds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomerFeedsResponse,
    (request: MutateCustomerFeedsRequest) => {
      return request.serializeBinary();
    },
    MutateCustomerFeedsResponse.deserializeBinary
  );

  mutateCustomerFeeds(
    request: MutateCustomerFeedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomerFeedsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomerFeedService/MutateCustomerFeeds',
      request,
      metadata || {},
      this.methodInfoMutateCustomerFeeds,
      callback);
  }

}

