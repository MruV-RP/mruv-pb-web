/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

import {
  GetConfigRequest,
  GetConfigResponse} from './project_service_pb';

export class ProjectManagementServiceClient {
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

  methodInfoGetConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    GetConfigResponse,
    (request: GetConfigRequest) => {
      return request.serializeBinary();
    },
    GetConfigResponse.deserializeBinary
  );

  getConfig(
    request: GetConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetConfigResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ProjectManagementService/GetConfig',
      request,
      metadata || {},
      this.methodInfoGetConfig,
      callback);
  }

}

