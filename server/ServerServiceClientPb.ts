/**
 * @fileoverview gRPC-Web generated client stub for mruv.server
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as server_server_model_pb from '../server/server_model_pb';

import {
  GetRegisteredServersRequest,
  GetRegisteredServersResponse,
  ServerEvent,
  ServerEventsStreamRequest,
  UpdateServerStatusRequest,
  UpdateServerStatusResponse} from './server_pb';

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
    server_server_model_pb.ServerID,
    (request: server_server_model_pb.ServerInfo) => {
      return request.serializeBinary();
    },
    server_server_model_pb.ServerID.deserializeBinary
  );

  registerServer(
    request: server_server_model_pb.ServerInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.server.MruVServerService/RegisterServer',
      request,
      metadata || {},
      this.methodInfoRegisterServer,
      callback);
  }

  methodInfoGetRegisteredServers = new grpcWeb.AbstractClientBase.MethodInfo(
    GetRegisteredServersResponse,
    (request: GetRegisteredServersRequest) => {
      return request.serializeBinary();
    },
    GetRegisteredServersResponse.deserializeBinary
  );

  getRegisteredServers(
    request: GetRegisteredServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetRegisteredServersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.server.MruVServerService/GetRegisteredServers',
      request,
      metadata || {},
      this.methodInfoGetRegisteredServers,
      callback);
  }

  methodInfoGetServerInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    server_server_model_pb.ServerInfo,
    (request: server_server_model_pb.ServerID) => {
      return request.serializeBinary();
    },
    server_server_model_pb.ServerInfo.deserializeBinary
  );

  getServerInfo(
    request: server_server_model_pb.ServerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerInfo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.server.MruVServerService/GetServerInfo',
      request,
      metadata || {},
      this.methodInfoGetServerInfo,
      callback);
  }

  methodInfoUpdateServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateServerStatusResponse,
    (request: UpdateServerStatusRequest) => {
      return request.serializeBinary();
    },
    UpdateServerStatusResponse.deserializeBinary
  );

  updateServerStatus(
    request: UpdateServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateServerStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.server.MruVServerService/UpdateServerStatus',
      request,
      metadata || {},
      this.methodInfoUpdateServerStatus,
      callback);
  }

  methodInfoServerEventsStream = new grpcWeb.AbstractClientBase.MethodInfo(
    ServerEvent,
    (request: ServerEventsStreamRequest) => {
      return request.serializeBinary();
    },
    ServerEvent.deserializeBinary
  );

  serverEventsStream(
    request: ServerEventsStreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.server.MruVServerService/ServerEventsStream',
      request,
      metadata || {},
      this.methodInfoServerEventsStream);
  }

}

