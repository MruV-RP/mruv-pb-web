/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_expanded_landing_page_view_pb from '../../../../../google/ads/googleads/v1/resources/expanded_landing_page_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {GetExpandedLandingPageViewRequest} from './expanded_landing_page_view_service_pb';

export class ExpandedLandingPageViewServiceClient {
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

  methodInfoGetExpandedLandingPageView = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView,
    (request: GetExpandedLandingPageViewRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView.deserializeBinary
  );

  getExpandedLandingPageView(
    request: GetExpandedLandingPageViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_expanded_landing_page_view_pb.ExpandedLandingPageView) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.ExpandedLandingPageViewService/GetExpandedLandingPageView',
      request,
      metadata || {},
      this.methodInfoGetExpandedLandingPageView,
      callback);
  }

}

