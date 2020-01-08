/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_feed_item_target_pb from '../../../../../google/ads/googleads/v2/resources/feed_item_target_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetFeedItemTargetRequest,
  MutateFeedItemTargetsRequest,
  MutateFeedItemTargetsResponse} from './feed_item_target_service_pb';

export class FeedItemTargetServiceClient {
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

  methodInfoGetFeedItemTarget = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget,
    (request: GetFeedItemTargetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.deserializeBinary
  );

  getFeedItemTarget(
    request: GetFeedItemTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedItemTargetService/GetFeedItemTarget',
      request,
      metadata || {},
      this.methodInfoGetFeedItemTarget,
      callback);
  }

  methodInfoMutateFeedItemTargets = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateFeedItemTargetsResponse,
    (request: MutateFeedItemTargetsRequest) => {
      return request.serializeBinary();
    },
    MutateFeedItemTargetsResponse.deserializeBinary
  );

  mutateFeedItemTargets(
    request: MutateFeedItemTargetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateFeedItemTargetsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.FeedItemTargetService/MutateFeedItemTargets',
      request,
      metadata || {},
      this.methodInfoMutateFeedItemTargets,
      callback);
  }

}

