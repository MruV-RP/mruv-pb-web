/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_ad_group_ad_label_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_ad_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetAdGroupAdLabelRequest,
  MutateAdGroupAdLabelsRequest,
  MutateAdGroupAdLabelsResponse} from './ad_group_ad_label_service_pb';

export class AdGroupAdLabelServiceClient {
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

  methodInfoGetAdGroupAdLabel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel,
    (request: GetAdGroupAdLabelRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel.deserializeBinary
  );

  getAdGroupAdLabel(
    request: GetAdGroupAdLabelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupAdLabelService/GetAdGroupAdLabel',
      request,
      metadata || {},
      this.methodInfoGetAdGroupAdLabel,
      callback);
  }

  methodInfoMutateAdGroupAdLabels = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupAdLabelsResponse,
    (request: MutateAdGroupAdLabelsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupAdLabelsResponse.deserializeBinary
  );

  mutateAdGroupAdLabels(
    request: MutateAdGroupAdLabelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupAdLabelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdGroupAdLabelService/MutateAdGroupAdLabels',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupAdLabels,
      callback);
  }

}

