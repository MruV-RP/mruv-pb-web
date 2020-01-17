/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v2/resources/bidding_strategy_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetBiddingStrategyRequest,
  MutateBiddingStrategiesRequest,
  MutateBiddingStrategiesResponse} from './bidding_strategy_service_pb';

export class BiddingStrategyServiceClient {
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

  methodInfoGetBiddingStrategy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy,
    (request: GetBiddingStrategyRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy.deserializeBinary
  );

  getBiddingStrategy(
    request: GetBiddingStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.BiddingStrategyService/GetBiddingStrategy',
      request,
      metadata || {},
      this.methodInfoGetBiddingStrategy,
      callback);
  }

  methodInfoMutateBiddingStrategies = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateBiddingStrategiesResponse,
    (request: MutateBiddingStrategiesRequest) => {
      return request.serializeBinary();
    },
    MutateBiddingStrategiesResponse.deserializeBinary
  );

  mutateBiddingStrategies(
    request: MutateBiddingStrategiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateBiddingStrategiesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.BiddingStrategyService/MutateBiddingStrategies',
      request,
      metadata || {},
      this.methodInfoMutateBiddingStrategies,
      callback);
  }

}
