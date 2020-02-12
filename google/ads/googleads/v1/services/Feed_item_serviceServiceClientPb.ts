/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_feed_item_pb from '../../../../../google/ads/googleads/v1/resources/feed_item_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetFeedItemRequest,
  MutateFeedItemsRequest,
  MutateFeedItemsResponse} from './feed_item_service_pb';

export class FeedItemServiceClient {
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

  methodInfoGetFeedItem = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_feed_item_pb.FeedItem,
    (request: GetFeedItemRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_feed_item_pb.FeedItem.deserializeBinary
  );

  getFeedItem(
    request: GetFeedItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_feed_item_pb.FeedItem) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.FeedItemService/GetFeedItem',
      request,
      metadata || {},
      this.methodInfoGetFeedItem,
      callback);
  }

  methodInfoMutateFeedItems = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateFeedItemsResponse,
    (request: MutateFeedItemsRequest) => {
      return request.serializeBinary();
    },
    MutateFeedItemsResponse.deserializeBinary
  );

  mutateFeedItems(
    request: MutateFeedItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateFeedItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.FeedItemService/MutateFeedItems',
      request,
      metadata || {},
      this.methodInfoMutateFeedItems,
      callback);
  }

}

