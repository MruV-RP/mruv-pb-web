/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as server_server_model_pb from '../server/server_model_pb';

import {
  RegisterServerRequest,
  RegisterServerResponse} from './server_pb';

export class MruVServerServiceClient {
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

  methodInfoRegisterServer = new grpcWeb.AbstractClientBase.MethodInfo(
    RegisterServerResponse,
    (request: RegisterServerRequest) => {
      return request.serializeBinary();
    },
    RegisterServerResponse.deserializeBinary
  );

  registerServer(
    request: RegisterServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegisterServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVServerService/RegisterServer',
      request,
      metadata || {},
      this.methodInfoRegisterServer,
      callback);
  }

  methodInfoGetServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    server_server_model_pb.ServerStatus,
    (request: server_server_model_pb.ServerID) => {
      return request.serializeBinary();
    },
    server_server_model_pb.ServerStatus.deserializeBinary
  );

  getServerStatus(
    request: server_server_model_pb.ServerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerStatus) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVServerService/GetServerStatus',
      request,
      metadata || {},
      this.methodInfoGetServerStatus,
      callback);
  }

}

