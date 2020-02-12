/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v2/resources/geo_target_constant_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetGeoTargetConstantRequest,
  SuggestGeoTargetConstantsRequest,
  SuggestGeoTargetConstantsResponse} from './geo_target_constant_service_pb';

export class GeoTargetConstantServiceClient {
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

  methodInfoGetGeoTargetConstant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant,
    (request: GetGeoTargetConstantRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinary
  );

  getGeoTargetConstant(
    request: GetGeoTargetConstantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.GeoTargetConstantService/GetGeoTargetConstant',
      request,
      metadata || {},
      this.methodInfoGetGeoTargetConstant,
      callback);
  }

  methodInfoSuggestGeoTargetConstants = new grpcWeb.AbstractClientBase.MethodInfo(
    SuggestGeoTargetConstantsResponse,
    (request: SuggestGeoTargetConstantsRequest) => {
      return request.serializeBinary();
    },
    SuggestGeoTargetConstantsResponse.deserializeBinary
  );

  suggestGeoTargetConstants(
    request: SuggestGeoTargetConstantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SuggestGeoTargetConstantsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.GeoTargetConstantService/SuggestGeoTargetConstants',
      request,
      metadata || {},
      this.methodInfoSuggestGeoTargetConstants,
      callback);
  }

}

