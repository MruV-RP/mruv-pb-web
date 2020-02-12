/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_common_policy_pb from '../../../../../google/ads/googleads/v1/common/policy_pb';
import * as google_ads_googleads_v1_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_ad_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  GetAdGroupAdRequest,
  MutateAdGroupAdsRequest,
  MutateAdGroupAdsResponse} from './ad_group_ad_service_pb';

export class AdGroupAdServiceClient {
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

  methodInfoGetAdGroupAd = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd,
    (request: GetAdGroupAdRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd.deserializeBinary
  );

  getAdGroupAd(
    request: GetAdGroupAdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_ad_group_ad_pb.AdGroupAd) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupAdService/GetAdGroupAd',
      request,
      metadata || {},
      this.methodInfoGetAdGroupAd,
      callback);
  }

  methodInfoMutateAdGroupAds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdGroupAdsResponse,
    (request: MutateAdGroupAdsRequest) => {
      return request.serializeBinary();
    },
    MutateAdGroupAdsResponse.deserializeBinary
  );

  mutateAdGroupAds(
    request: MutateAdGroupAdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdGroupAdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.AdGroupAdService/MutateAdGroupAds',
      request,
      metadata || {},
      this.methodInfoMutateAdGroupAds,
      callback);
  }

}

