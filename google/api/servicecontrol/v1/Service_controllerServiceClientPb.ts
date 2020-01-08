/**
 * @fileoverview gRPC-Web generated client stub for google.api.servicecontrol.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_check_error_pb from '../../../../google/api/servicecontrol/v1/check_error_pb';
import * as google_api_servicecontrol_v1_operation_pb from '../../../../google/api/servicecontrol/v1/operation_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  CheckRequest,
  CheckResponse,
  ReportRequest,
  ReportResponse} from './service_controller_pb';

export class ServiceControllerClient {
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

  methodInfoCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    CheckResponse,
    (request: CheckRequest) => {
      return request.serializeBinary();
    },
    CheckResponse.deserializeBinary
  );

  check(
    request: CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CheckResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicecontrol.v1.ServiceController/Check',
      request,
      metadata || {},
      this.methodInfoCheck,
      callback);
  }

  methodInfoReport = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportResponse,
    (request: ReportRequest) => {
      return request.serializeBinary();
    },
    ReportResponse.deserializeBinary
  );

  report(
    request: ReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicecontrol.v1.ServiceController/Report',
      request,
      metadata || {},
      this.methodInfoReport,
      callback);
  }

}

