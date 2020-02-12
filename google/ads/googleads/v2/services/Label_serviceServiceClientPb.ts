/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_label_pb from '../../../../../google/ads/googleads/v2/resources/label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetLabelRequest,
  MutateLabelsRequest,
  MutateLabelsResponse} from './label_service_pb';

export class LabelServiceClient {
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

  methodInfoGetLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_label_pb.Label,
    (request: GetLabelRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_label_pb.Label.deserializeBinary
  );

  getLabel(
    request: GetLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_label_pb.Label) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.LabelService/GetLabel',
      request,
      metadata || {},
      this.methodInfoGetLabel,
      callback);
  }

  methodInfoMutateLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateLabelsResponse,
    (request: MutateLabelsRequest) => {
      return request.serializeBinary();
    },
    MutateLabelsResponse.deserializeBinary
  );

  mutateLabels(
    request: MutateLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateLabelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.LabelService/MutateLabels',
      request,
      metadata || {},
      this.methodInfoMutateLabels,
      callback);
  }

}

