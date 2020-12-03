/**
 * @fileoverview gRPC-Web generated client stub for texture_studio
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as texturestudio_texturestudio_manage_pb from '../texturestudio/texturestudio_manage_pb';


export class TextureStudioManagerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_manage_pb.CreateServerResponse,
    (request: texturestudio_texturestudio_manage_pb.CreateServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_manage_pb.CreateServerResponse.deserializeBinary
  );

  createServer(
    request: texturestudio_texturestudio_manage_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_manage_pb.CreateServerResponse>;

  createServer(
    request: texturestudio_texturestudio_manage_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.CreateServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_manage_pb.CreateServerResponse>;

  createServer(
    request: texturestudio_texturestudio_manage_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.CreateServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioManagerService/CreateServer',
        request,
        metadata || {},
        this.methodInfoCreateServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioManagerService/CreateServer',
    request,
    metadata || {},
    this.methodInfoCreateServer);
  }

  methodInfoGetServers = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_manage_pb.GetServersResponse,
    (request: texturestudio_texturestudio_manage_pb.GetServersRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_manage_pb.GetServersResponse.deserializeBinary
  );

  getServers(
    request: texturestudio_texturestudio_manage_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_manage_pb.GetServersResponse>;

  getServers(
    request: texturestudio_texturestudio_manage_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.GetServersResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_manage_pb.GetServersResponse>;

  getServers(
    request: texturestudio_texturestudio_manage_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.GetServersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioManagerService/GetServers',
        request,
        metadata || {},
        this.methodInfoGetServers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioManagerService/GetServers',
    request,
    metadata || {},
    this.methodInfoGetServers);
  }

  methodInfoMyServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_manage_pb.MyServerResponse,
    (request: texturestudio_texturestudio_manage_pb.MyServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_manage_pb.MyServerResponse.deserializeBinary
  );

  myServer(
    request: texturestudio_texturestudio_manage_pb.MyServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_manage_pb.MyServerResponse>;

  myServer(
    request: texturestudio_texturestudio_manage_pb.MyServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.MyServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_manage_pb.MyServerResponse>;

  myServer(
    request: texturestudio_texturestudio_manage_pb.MyServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.MyServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioManagerService/MyServer',
        request,
        metadata || {},
        this.methodInfoMyServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioManagerService/MyServer',
    request,
    metadata || {},
    this.methodInfoMyServer);
  }

  methodInfoTransferOwnership = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_manage_pb.TransferOwnershipResponse,
    (request: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_manage_pb.TransferOwnershipResponse.deserializeBinary
  );

  transferOwnership(
    request: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>;

  transferOwnership(
    request: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.TransferOwnershipResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_manage_pb.TransferOwnershipResponse>;

  transferOwnership(
    request: texturestudio_texturestudio_manage_pb.TransferOwnershipRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.TransferOwnershipResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioManagerService/TransferOwnership',
        request,
        metadata || {},
        this.methodInfoTransferOwnership,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioManagerService/TransferOwnership',
    request,
    metadata || {},
    this.methodInfoTransferOwnership);
  }

  methodInfoDeleteServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_manage_pb.DeleteServerResponse,
    (request: texturestudio_texturestudio_manage_pb.DeleteServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_manage_pb.DeleteServerResponse.deserializeBinary
  );

  deleteServer(
    request: texturestudio_texturestudio_manage_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_manage_pb.DeleteServerResponse>;

  deleteServer(
    request: texturestudio_texturestudio_manage_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.DeleteServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_manage_pb.DeleteServerResponse>;

  deleteServer(
    request: texturestudio_texturestudio_manage_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_manage_pb.DeleteServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioManagerService/DeleteServer',
        request,
        metadata || {},
        this.methodInfoDeleteServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioManagerService/DeleteServer',
    request,
    metadata || {},
    this.methodInfoDeleteServer);
  }

}

