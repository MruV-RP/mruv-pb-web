/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_shopping_performance_view_pb from '../../../../../google/ads/googleads/v1/resources/shopping_performance_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {GetShoppingPerformanceViewRequest} from './shopping_performance_view_service_pb';

export class ShoppingPerformanceViewServiceClient {
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

  methodInfoGetShoppingPerformanceView = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_shopping_performance_view_pb.ShoppingPerformanceView,
    (request: GetShoppingPerformanceViewRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_shopping_performance_view_pb.ShoppingPerformanceView.deserializeBinary
  );

  getShoppingPerformanceView(
    request: GetShoppingPerformanceViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_shopping_performance_view_pb.ShoppingPerformanceView) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.ShoppingPerformanceViewService/GetShoppingPerformanceView',
      request,
      metadata || {},
      this.methodInfoGetShoppingPerformanceView,
      callback);
  }

}
