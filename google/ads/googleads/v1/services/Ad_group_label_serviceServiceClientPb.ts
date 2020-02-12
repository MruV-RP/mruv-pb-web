/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_ad_group_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetAdGroupLabelRequest,
  MutateAdGroupLabelsRequest,
  MutateAdGroupLabelsResponse} from './ad_group_label_service_pb';

export class AdGroupLabelServiceClient {
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

  methodInfoGetAdGroupLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel,
    (request: GetAdGroupLabelRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel.deserializeBinary
  );

  getAdGroupLabel(
    request: GetAdGroupLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupLabelService/GetAdGroupLabel',
      request,
      metadata || {},
      this.methodInfoGetAdGroupLabel,
      callback);
  }

  methodInfoMutateAdGroupLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupLabelsResponse,
    (request: MutateAdGroupLabelsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupLabelsResponse.deserializeBinary
  );

  mutateAdGroupLabels(
    request: MutateAdGroupLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupLabelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupLabelService/MutateAdGroupLabels',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupLabels,
      callback);
  }

}

