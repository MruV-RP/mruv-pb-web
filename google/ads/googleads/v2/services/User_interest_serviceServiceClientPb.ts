/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_user_interest_pb from '../../../../../google/ads/googleads/v2/resources/user_interest_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {GetUserInterestRequest} from './user_interest_service_pb';

export class UserInterestServiceClient {
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

  methodInfoGetUserInterest = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_user_interest_pb.UserInterest,
    (request: GetUserInterestRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_user_interest_pb.UserInterest.deserializeBinary
  );

  getUserInterest(
    request: GetUserInterestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_user_interest_pb.UserInterest) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.UserInterestService/GetUserInterest',
      request,
      metadata || {},
      this.methodInfoGetUserInterest,
      callback);
  }

}

