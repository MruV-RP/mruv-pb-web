/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_custom_interest_pb from '../../../../../google/ads/googleads/v1/resources/custom_interest_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  GetCustomInterestRequest,
  MutateCustomInterestsRequest,
  MutateCustomInterestsResponse} from './custom_interest_service_pb';

export class CustomInterestServiceClient {
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

  methodInfoGetCustomInterest = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest,
    (request: GetCustomInterestRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest.deserializeBinary
  );

  getCustomInterest(
    request: GetCustomInterestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomInterestService/GetCustomInterest',
      request,
      metadata || {},
      this.methodInfoGetCustomInterest,
      callback);
  }

  methodInfoMutateCustomInterests = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateCustomInterestsResponse,
    (request: MutateCustomInterestsRequest) => {
      return request.serializeBinary();
    },
    MutateCustomInterestsResponse.deserializeBinary
  );

  mutateCustomInterests(
    request: MutateCustomInterestsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateCustomInterestsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.CustomInterestService/MutateCustomInterests',
      request,
      metadata || {},
      this.methodInfoMutateCustomInterests,
      callback);
  }

}

