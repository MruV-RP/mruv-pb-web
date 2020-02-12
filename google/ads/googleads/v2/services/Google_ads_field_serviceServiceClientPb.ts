/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_google_ads_field_pb from '../../../../../google/ads/googleads/v2/resources/google_ads_field_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  GetGoogleAdsFieldRequest,
  SearchGoogleAdsFieldsRequest,
  SearchGoogleAdsFieldsResponse} from './google_ads_field_service_pb';

export class GoogleAdsFieldServiceClient {
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

  methodInfoGetGoogleAdsField = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_google_ads_field_pb.GoogleAdsField,
    (request: GetGoogleAdsFieldRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_google_ads_field_pb.GoogleAdsField.deserializeBinary
  );

  getGoogleAdsField(
    request: GetGoogleAdsFieldRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_google_ads_field_pb.GoogleAdsField) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.GoogleAdsFieldService/GetGoogleAdsField',
      request,
      metadata || {},
      this.methodInfoGetGoogleAdsField,
      callback);
  }

  methodInfoSearchGoogleAdsFields = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchGoogleAdsFieldsResponse,
    (request: SearchGoogleAdsFieldsRequest) => {
      return request.serializeBinary();
    },
    SearchGoogleAdsFieldsResponse.deserializeBinary
  );

  searchGoogleAdsFields(
    request: SearchGoogleAdsFieldsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchGoogleAdsFieldsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.GoogleAdsFieldService/SearchGoogleAdsFields',
      request,
      metadata || {},
      this.methodInfoSearchGoogleAdsFields,
      callback);
  }

}

