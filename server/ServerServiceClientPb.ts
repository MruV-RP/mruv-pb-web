/**
 * @fileoverview gRPC-Web generated client stub for mruv.server
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as server_server_model_pb from '../server/server_model_pb';
import * as server_server_pb from '../server/server_pb';


export class MruVServerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
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
    metadata: grpcWeb.Metadata | null): Promise<server_server_model_pb.ServerID>;

  registerServer(
    request: server_server_model_pb.ServerInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerID) => void): grpcWeb.ClientReadableStream<server_server_model_pb.ServerID>;

  registerServer(
    request: server_server_model_pb.ServerInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.server.MruVServerService/RegisterServer',
        request,
        metadata || {},
        this.methodInfoRegisterServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.server.MruVServerService/RegisterServer',
    request,
    metadata || {},
    this.methodInfoRegisterServer);
  }

  methodInfoGetRegisteredServers = new grpcWeb.AbstractClientBase.MethodInfo(
    server_server_pb.GetRegisteredServersResponse,
    (request: server_server_pb.GetRegisteredServersRequest) => {
      return request.serializeBinary();
    },
    server_server_pb.GetRegisteredServersResponse.deserializeBinary
  );

  getRegisteredServers(
    request: server_server_pb.GetRegisteredServersRequest,
    metadata: grpcWeb.Metadata | null): Promise<server_server_pb.GetRegisteredServersResponse>;

  getRegisteredServers(
    request: server_server_pb.GetRegisteredServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_pb.GetRegisteredServersResponse) => void): grpcWeb.ClientReadableStream<server_server_pb.GetRegisteredServersResponse>;

  getRegisteredServers(
    request: server_server_pb.GetRegisteredServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: server_server_pb.GetRegisteredServersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.server.MruVServerService/GetRegisteredServers',
        request,
        metadata || {},
        this.methodInfoGetRegisteredServers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.server.MruVServerService/GetRegisteredServers',
    request,
    metadata || {},
    this.methodInfoGetRegisteredServers);
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
    metadata: grpcWeb.Metadata | null): Promise<server_server_model_pb.ServerInfo>;

  getServerInfo(
    request: server_server_model_pb.ServerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerInfo) => void): grpcWeb.ClientReadableStream<server_server_model_pb.ServerInfo>;

  getServerInfo(
    request: server_server_model_pb.ServerID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: server_server_model_pb.ServerInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.server.MruVServerService/GetServerInfo',
        request,
        metadata || {},
        this.methodInfoGetServerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.server.MruVServerService/GetServerInfo',
    request,
    metadata || {},
    this.methodInfoGetServerInfo);
  }

  methodInfoUpdateServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    server_server_pb.UpdateServerStatusResponse,
    (request: server_server_pb.UpdateServerStatusRequest) => {
      return request.serializeBinary();
    },
    server_server_pb.UpdateServerStatusResponse.deserializeBinary
  );

  updateServerStatus(
    request: server_server_pb.UpdateServerStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<server_server_pb.UpdateServerStatusResponse>;

  updateServerStatus(
    request: server_server_pb.UpdateServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: server_server_pb.UpdateServerStatusResponse) => void): grpcWeb.ClientReadableStream<server_server_pb.UpdateServerStatusResponse>;

  updateServerStatus(
    request: server_server_pb.UpdateServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: server_server_pb.UpdateServerStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.server.MruVServerService/UpdateServerStatus',
        request,
        metadata || {},
        this.methodInfoUpdateServerStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.server.MruVServerService/UpdateServerStatus',
    request,
    metadata || {},
    this.methodInfoUpdateServerStatus);
  }

  methodInfoServerEventsStream = new grpcWeb.AbstractClientBase.MethodInfo(
    server_server_pb.ServerEvent,
    (request: server_server_pb.ServerEventsStreamRequest) => {
      return request.serializeBinary();
    },
    server_server_pb.ServerEvent.deserializeBinary
  );

  serverEventsStream(
    request: server_server_pb.ServerEventsStreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.server.MruVServerService/ServerEventsStream',
      request,
      metadata || {},
      this.methodInfoServerEventsStream);
  }

}

