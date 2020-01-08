/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_resources_change_status_pb from '../../../../../google/ads/googleads/v1/resources/change_status_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

import {GetChangeStatusRequest} from './change_status_service_pb';

export class ChangeStatusServiceClient {
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

  methodInfoGetChangeStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    google_ads_googleads_v1_resources_change_status_pb.ChangeStatus,
    (request: GetChangeStatusRequest) => {
      return request.serializeBinary();
    },
    google_ads_googleads_v1_resources_change_status_pb.ChangeStatus.deserializeBinary
  );

  getChangeStatus(
    request: GetChangeStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_ads_googleads_v1_resources_change_status_pb.ChangeStatus) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.ChangeStatusService/GetChangeStatus',
      request,
      metadata || {},
      this.methodInfoGetChangeStatus,
      callback);
  }

}

