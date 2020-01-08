/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_feed_pb from '../../../../../google/ads/googleads/v2/resources/feed_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetFeedRequest,
  MutateFeedsRequest,
  MutateFeedsResponse} from './feed_service_pb';

export class FeedServiceClient {
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

  methodInfoGetFeed = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_feed_pb.Feed,
    (request: GetFeedRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_feed_pb.Feed.deserializeBinary
  );

  getFeed(
    request: GetFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_feed_pb.Feed) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedService/GetFeed',
      request,
      metadata || {},
      this.methodInfoGetFeed,
      callback);
  }

  methodInfoMutateFeeds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateFeedsResponse,
    (request: MutateFeedsRequest) => {
      return request.serializeBinary();
    },
    MutateFeedsResponse.deserializeBinary
  );

  mutateFeeds(
    request: MutateFeedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateFeedsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedService/MutateFeeds',
      request,
      metadata || {},
      this.methodInfoMutateFeeds,
      callback);
  }

}

