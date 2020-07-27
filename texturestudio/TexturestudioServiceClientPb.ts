/**
 * @fileoverview gRPC-Web generated client stub for texture_studio
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
  GetProjectRequest,
  GetProjectResponse,
  GetProjectsRequest,
  GetProjectsResponse,
  MyServerRequest,
  MyServerResponse,
  RestartServerRequest,
  RestartServerResponse,
  ServerStatusRequest,
  ServerStatusResponse,
  StartServerRequest,
  StartServerResponse,
  StopServerRequest,
  StopServerResponse,
  SubscribeToProjectsChangesRequest,
  SubscribeToProjectsChangesResponse,
  UploadProjectRequest,
  UploadProjectResponse} from './texturestudio_pb';

export class TextureStudioServiceClient {
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
        '/texture_studio.TextureStudioService/CreateServer',
      request,
      metadata || {},
      this.methodInfoCreateServer,
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
        '/texture_studio.TextureStudioService/MyServer',
      request,
      metadata || {},
      this.methodInfoMyServer,
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
        '/texture_studio.TextureStudioService/DeleteServer',
      request,
      metadata || {},
      this.methodInfoDeleteServer,
      callback);
  }

  methodInfoStartServer = new grpcWeb.AbstractClientBase.MethodInfo(
    StartServerResponse,
    (request: StartServerRequest) => {
      return request.serializeBinary();
    },
    StartServerResponse.deserializeBinary
  );

  startServer(
    request: StartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StartServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/StartServer',
      request,
      metadata || {},
      this.methodInfoStartServer,
      callback);
  }

  methodInfoStopServer = new grpcWeb.AbstractClientBase.MethodInfo(
    StopServerResponse,
    (request: StopServerRequest) => {
      return request.serializeBinary();
    },
    StopServerResponse.deserializeBinary
  );

  stopServer(
    request: StopServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StopServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/StopServer',
      request,
      metadata || {},
      this.methodInfoStopServer,
      callback);
  }

  methodInfoRestartServer = new grpcWeb.AbstractClientBase.MethodInfo(
    RestartServerResponse,
    (request: RestartServerRequest) => {
      return request.serializeBinary();
    },
    RestartServerResponse.deserializeBinary
  );

  restartServer(
    request: RestartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RestartServerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/RestartServer',
      request,
      metadata || {},
      this.methodInfoRestartServer,
      callback);
  }

  methodInfoServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    ServerStatusResponse,
    (request: ServerStatusRequest) => {
      return request.serializeBinary();
    },
    ServerStatusResponse.deserializeBinary
  );

  serverStatus(
    request: ServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServerStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/ServerStatus',
      request,
      metadata || {},
      this.methodInfoServerStatus,
      callback);
  }

  methodInfoUploadProject = new grpcWeb.AbstractClientBase.MethodInfo(
    UploadProjectResponse,
    (request: UploadProjectRequest) => {
      return request.serializeBinary();
    },
    UploadProjectResponse.deserializeBinary
  );

  uploadProject(
    request: UploadProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UploadProjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/UploadProject',
      request,
      metadata || {},
      this.methodInfoUploadProject,
      callback);
  }

  methodInfoGetProject = new grpcWeb.AbstractClientBase.MethodInfo(
    GetProjectResponse,
    (request: GetProjectRequest) => {
      return request.serializeBinary();
    },
    GetProjectResponse.deserializeBinary
  );

  getProject(
    request: GetProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetProjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/GetProject',
      request,
      metadata || {},
      this.methodInfoGetProject,
      callback);
  }

  methodInfoGetProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    GetProjectsResponse,
    (request: GetProjectsRequest) => {
      return request.serializeBinary();
    },
    GetProjectsResponse.deserializeBinary
  );

  getProjects(
    request: GetProjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetProjectsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/texture_studio.TextureStudioService/GetProjects',
      request,
      metadata || {},
      this.methodInfoGetProjects,
      callback);
  }

  methodInfoSubscribeToProjectsChanges = new grpcWeb.AbstractClientBase.MethodInfo(
    SubscribeToProjectsChangesResponse,
    (request: SubscribeToProjectsChangesRequest) => {
      return request.serializeBinary();
    },
    SubscribeToProjectsChangesResponse.deserializeBinary
  );

  subscribeToProjectsChanges(
    request: SubscribeToProjectsChangesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/texture_studio.TextureStudioService/SubscribeToProjectsChanges',
      request,
      metadata || {},
      this.methodInfoSubscribeToProjectsChanges);
  }

}

