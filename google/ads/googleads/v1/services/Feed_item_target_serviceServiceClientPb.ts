/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_feed_item_target_pb from '../../../../../google/ads/googleads/v1/resources/feed_item_target_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

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
    google_ads_googleads_v1_resources_feed_item_target_pb.FeedItemTarget,
    (request: GetFeedItemTargetRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_feed_item_target_pb.FeedItemTarget.deserializeBinary
  );

  getFeedItemTarget(
    request: GetFeedItemTargetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_feed_item_target_pb.FeedItemTarget) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.FeedItemTargetService/GetFeedItemTarget',
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
        '/google.ads.googleads.v1.services.FeedItemTargetService/MutateFeedItemTargets',
      request,
      metadata || {},
      this.methodInfoMutateFeedItemTargets,
      callback);
  }

}

