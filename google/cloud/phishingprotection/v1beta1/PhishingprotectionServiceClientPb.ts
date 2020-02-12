/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.phishingprotection.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';

import {
  ReportPhishingRequest,
  ReportPhishingResponse} from './phishingprotection_pb';

export class PhishingProtectionServiceV1Beta1Client {
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

  methodInfoReportPhishing = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportPhishingResponse,
    (request: ReportPhishingRequest) => {
      return request.serializeBinary();
    },
    ReportPhishingResponse.deserializeBinary
  );

  reportPhishing(
    request: ReportPhishingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportPhishingResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.phishingprotection.v1beta1.PhishingProtectionServiceV1Beta1/ReportPhishing',
      request,
      metadata || {},
      this.methodInfoReportPhishing,
      callback);
  }

}

