/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_extension_feed_item_pb from '../../../../../google/ads/googleads/v2/resources/extension_feed_item_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetExtensionFeedItemRequest,
  MutateExtensionFeedItemsRequest,
  MutateExtensionFeedItemsResponse} from './extension_feed_item_service_pb';

export class ExtensionFeedItemServiceClient {
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

  methodInfoGetExtensionFeedItem = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem,
    (request: GetExtensionFeedItemRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem.deserializeBinary
  );

  getExtensionFeedItem(
    request: GetExtensionFeedItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ExtensionFeedItemService/GetExtensionFeedItem',
      request,
      metadata || {},
      this.methodInfoGetExtensionFeedItem,
      callback);
  }

  methodInfoMutateExtensionFeedItems = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateExtensionFeedItemsResponse,
    (request: MutateExtensionFeedItemsRequest) => {
      return request.serializeBinary();
    },
    MutateExtensionFeedItemsResponse.deserializeBinary
  );

  mutateExtensionFeedItems(
    request: MutateExtensionFeedItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateExtensionFeedItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.ExtensionFeedItemService/MutateExtensionFeedItems',
      request,
      metadata || {},
      this.methodInfoMutateExtensionFeedItems,
      callback);
  }

}

