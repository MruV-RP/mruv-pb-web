/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouderrorreporting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_devtools_clouderrorreporting_v1beta1_common_pb from '../../../../google/devtools/clouderrorreporting/v1beta1/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  ReportErrorEventRequest,
  ReportErrorEventResponse} from './report_errors_service_pb';

export class ReportErrorsServiceClient {
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

  methodInfoReportErrorEvent = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportErrorEventResponse,
    (request: ReportErrorEventRequest) => {
      return request.serializeBinary();
    },
    ReportErrorEventResponse.deserializeBinary
  );

  reportErrorEvent(
    request: ReportErrorEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportErrorEventResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.clouderrorreporting.v1beta1.ReportErrorsService/ReportErrorEvent',
      request,
      metadata || {},
      this.methodInfoReportErrorEvent,
      callback);
  }

}

