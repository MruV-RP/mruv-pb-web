/**
 * @fileoverview gRPC-Web generated client stub for mruv.texture_studio
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateServerRequest,
  CreateServerResponse,
  DeleteServerRequest,
  DeleteServerResponse,
  GetServersRequest,
  GetServersResponse,
  MyServerRequest,
  MyServerResponse,
  TransferOwnershipRequest,
  TransferOwnershipResponse} from './texturestudio_manage_pb';

export class TextureStudioManagerServiceClient {
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

  methodInfoCreateServer = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateServerResponse,
    (request: CreateServerRequest) => {
      return request.serializeBinary();
    },
    CreateServerResponse.deserializeBinary
  );

  createServer(
    request: CreateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.texture_studio.TextureStudioManagerService/CreateServer',
      request,
      metadata || {},
      this.methodInfoCreateServer,
      callback);
  }

  methodInfoGetServers = new grpcWeb.AbstractClientBase.MethodInfo(
    GetServersResponse,
    (request: GetServersRequest) => {
      return request.serializeBinary();
    },
    GetServersResponse.deserializeBinary
  );

  getServers(
    request: GetServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetServersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.texture_studio.TextureStudioManagerService/GetServers',
      request,
      metadata || {},
      this.methodInfoGetServers,
      callback);
  }

  methodInfoMyServer = new grpcWeb.AbstractClientBase.MethodInfo(
    MyServerResponse,
    (request: MyServerRequest) => {
      return request.serializeBinary();
    },
    MyServerResponse.deserializeBinary
  );

  myServer(
    request: MyServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MyServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.texture_studio.TextureStudioManagerService/MyServer',
      request,
      metadata || {},
      this.methodInfoMyServer,
      callback);
  }

  methodInfoTransferOwnership = new grpcWeb.AbstractClientBase.MethodInfo(
    TransferOwnershipResponse,
    (request: TransferOwnershipRequest) => {
      return request.serializeBinary();
    },
    TransferOwnershipResponse.deserializeBinary
  );

  transferOwnership(
    request: TransferOwnershipRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TransferOwnershipResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.texture_studio.TextureStudioManagerService/TransferOwnership',
      request,
      metadata || {},
      this.methodInfoTransferOwnership,
      callback);
  }

  methodInfoDeleteServer = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteServerResponse,
    (request: DeleteServerRequest) => {
      return request.serializeBinary();
    },
    DeleteServerResponse.deserializeBinary
  );

  deleteServer(
    request: DeleteServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.texture_studio.TextureStudioManagerService/DeleteServer',
      request,
      metadata || {},
      this.methodInfoDeleteServer,
      callback);
  }

}

