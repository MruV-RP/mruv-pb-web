/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_remarketing_action_pb from '../../../../../google/ads/googleads/v1/resources/remarketing_action_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetRemarketingActionRequest,
  MutateRemarketingActionsRequest,
  MutateRemarketingActionsResponse} from './remarketing_action_service_pb';

export class RemarketingActionServiceClient {
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

  methodInfoGetRemarketingAction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction,
    (request: GetRemarketingActionRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction.deserializeBinary
  );

  getRemarketingAction(
    request: GetRemarketingActionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.RemarketingActionService/GetRemarketingAction',
      request,
      metadata || {},
      this.methodInfoGetRemarketingAction,
      callback);
  }

  methodInfoMutateRemarketingActions = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateRemarketingActionsResponse,
    (request: MutateRemarketingActionsRequest) => {
      return request.serializeBinary();
    },
    MutateRemarketingActionsResponse.deserializeBinary
  );

  mutateRemarketingActions(
    request: MutateRemarketingActionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateRemarketingActionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.RemarketingActionService/MutateRemarketingActions',
      request,
      metadata || {},
      this.methodInfoMutateRemarketingActions,
      callback);
  }

}

