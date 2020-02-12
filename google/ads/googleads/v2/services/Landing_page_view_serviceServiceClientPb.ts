/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v2_resources_landing_page_view_pb from '../../../../../google/ads/googleads/v2/resources/landing_page_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {GetLandingPageViewRequest} from './landing_page_view_service_pb';

export class LandingPageViewServiceClient {
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

  methodInfoGetLandingPageView = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView,
    (request: GetLandingPageViewRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView.deserializeBinary
  );

  getLandingPageView(
    request: GetLandingPageViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v2.services.LandingPageViewService/GetLandingPageView',
      request,
      metadata || {},
      this.methodInfoGetLandingPageView,
      callback);
  }

}

