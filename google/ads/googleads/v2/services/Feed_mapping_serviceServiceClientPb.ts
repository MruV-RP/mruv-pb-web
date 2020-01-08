/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_feed_mapping_pb from '../../../../../google/ads/googleads/v2/resources/feed_mapping_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetFeedMappingRequest,
  MutateFeedMappingsRequest,
  MutateFeedMappingsResponse} from './feed_mapping_service_pb';

export class FeedMappingServiceClient {
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

  methodInfoGetFeedMapping = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping,
    (request: GetFeedMappingRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping.deserializeBinary
  );

  getFeedMapping(
    request: GetFeedMappingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedMappingService/GetFeedMapping',
      request,
      metadata || {},
      this.methodInfoGetFeedMapping,
      callback);
  }

  methodInfoMutateFeedMappings = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateFeedMappingsResponse,
    (request: MutateFeedMappingsRequest) => {
      return request.serializeBinary();
    },
    MutateFeedMappingsResponse.deserializeBinary
  );

  mutateFeedMappings(
    request: MutateFeedMappingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateFeedMappingsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedMappingService/MutateFeedMappings',
      request,
      metadata || {},
      this.methodInfoMutateFeedMappings,
      callback);
  }

}

