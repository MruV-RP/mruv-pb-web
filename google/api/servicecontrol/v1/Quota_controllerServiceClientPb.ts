/**
 * @fileoverview gRPC-Web generated client stub for google.api.servicecontrol.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_metric_value_pb from '../../../../google/api/servicecontrol/v1/metric_value_pb';

import {
  AllocateQuotaRequest,
  AllocateQuotaResponse} from './quota_controller_pb';

export class QuotaControllerClient {
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

  methodInfoAllocateQuota = new grpcWeb.AbstractClientBase.MethodInfo(
    AllocateQuotaResponse,
    (request: AllocateQuotaRequest) => {
      return request.serializeBinary();
    },
    AllocateQuotaResponse.deserializeBinary
  );

  allocateQuota(
    request: AllocateQuotaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AllocateQuotaResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicecontrol.v1.QuotaController/AllocateQuota',
      request,
      metadata || {},
      this.methodInfoAllocateQuota,
      callback);
  }

}

