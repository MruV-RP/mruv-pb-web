/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_conversion_action_pb from '../../../../../google/ads/googleads/v1/resources/conversion_action_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetConversionActionRequest,
  MutateConversionActionsRequest,
  MutateConversionActionsResponse} from './conversion_action_service_pb';

export class ConversionActionServiceClient {
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

  methodInfoGetConversionAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction,
    (request: GetConversionActionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.deserializeBinary
  );

  getConversionAction(
    request: GetConversionActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.ConversionActionService/GetConversionAction',
      request,
      metadata || {},
      this.methodInfoGetConversionAction,
      callback);
  }

  methodInfoMutateConversionActions = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateConversionActionsResponse,
    (request: MutateConversionActionsRequest) => {
      return request.serializeBinary();
    },
    MutateConversionActionsResponse.deserializeBinary
  );

  mutateConversionActions(
    request: MutateConversionActionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateConversionActionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.ConversionActionService/MutateConversionActions',
      request,
      metadata || {},
      this.methodInfoMutateConversionActions,
      callback);
  }

}

