/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_ad_pb from '../../../../../google/ads/googleads/v2/resources/ad_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetAdRequest,
  MutateAdsRequest,
  MutateAdsResponse} from './ad_service_pb';

export class AdServiceClient {
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

  methodInfoGetAd = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_ad_pb.Ad,
    (request: GetAdRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_ad_pb.Ad.deserializeBinary
  );

  getAd(
    request: GetAdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_ad_pb.Ad) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdService/GetAd',
      request,
      metadata || {},
      this.methodInfoGetAd,
      callback);
  }

  methodInfoMutateAds = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateAdsResponse,
    (request: MutateAdsRequest) => {
      return request.serializeBinary();
    },
    MutateAdsResponse.deserializeBinary
  );

  mutateAds(
    request: MutateAdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateAdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.AdService/MutateAds',
      request,
      metadata || {},
      this.methodInfoMutateAds,
      callback);
  }

}

