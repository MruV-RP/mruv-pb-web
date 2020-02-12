/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_ad_group_feed_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetAdGroupFeedRequest,
  MutateAdGroupFeedsRequest,
  MutateAdGroupFeedsResponse} from './ad_group_feed_service_pb';

export class AdGroupFeedServiceClient {
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

  methodInfoGetAdGroupFeed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed,
    (request: GetAdGroupFeedRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed.deserializeBinary
  );

  getAdGroupFeed(
    request: GetAdGroupFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupFeedService/GetAdGroupFeed',
      request,
      metadata || {},
      this.methodInfoGetAdGroupFeed,
      callback);
  }

  methodInfoMutateAdGroupFeeds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupFeedsResponse,
    (request: MutateAdGroupFeedsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupFeedsResponse.deserializeBinary
  );

  mutateAdGroupFeeds(
    request: MutateAdGroupFeedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupFeedsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupFeedService/MutateAdGroupFeeds',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupFeeds,
      callback);
  }

}

