/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_hotel_performance_view_pb from '../../../../../google/ads/googleads/v1/resources/hotel_performance_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {GetHotelPerformanceViewRequest} from './hotel_performance_view_service_pb';

export class HotelPerformanceViewServiceClient {
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

  methodInfoGetHotelPerformanceView = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_hotel_performance_view_pb.HotelPerformanceView,
    (request: GetHotelPerformanceViewRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_hotel_performance_view_pb.HotelPerformanceView.deserializeBinary
  );

  getHotelPerformanceView(
    request: GetHotelPerformanceViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_hotel_performance_view_pb.HotelPerformanceView) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.HotelPerformanceViewService/GetHotelPerformanceView',
      request,
      metadata || {},
      this.methodInfoGetHotelPerformanceView,
      callback);
  }

}

