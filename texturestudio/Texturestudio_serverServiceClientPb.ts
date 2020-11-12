/**
 * @fileoverview gRPC-Web generated client stub for texture_studio
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as texturestudio_texturestudio_server_pb from '../texturestudio/texturestudio_server_pb';


export class TextureStudioServerServiceClient {
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

  methodInfoStartServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.StartServerResponse,
    (request: texturestudio_texturestudio_server_pb.StartServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.StartServerResponse.deserializeBinary
  );

  startServer(
    request: texturestudio_texturestudio_server_pb.StartServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.StartServerResponse>;

  startServer(
    request: texturestudio_texturestudio_server_pb.StartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.StartServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.StartServerResponse>;

  startServer(
    request: texturestudio_texturestudio_server_pb.StartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.StartServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/StartServer',
        request,
        metadata || {},
        this.methodInfoStartServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/StartServer',
    request,
    metadata || {},
    this.methodInfoStartServer);
  }

  methodInfoStopServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.StopServerResponse,
    (request: texturestudio_texturestudio_server_pb.StopServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.StopServerResponse.deserializeBinary
  );

  stopServer(
    request: texturestudio_texturestudio_server_pb.StopServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.StopServerResponse>;

  stopServer(
    request: texturestudio_texturestudio_server_pb.StopServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.StopServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.StopServerResponse>;

  stopServer(
    request: texturestudio_texturestudio_server_pb.StopServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.StopServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/StopServer',
        request,
        metadata || {},
        this.methodInfoStopServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/StopServer',
    request,
    metadata || {},
    this.methodInfoStopServer);
  }

  methodInfoRestartServer = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.RestartServerResponse,
    (request: texturestudio_texturestudio_server_pb.RestartServerRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.RestartServerResponse.deserializeBinary
  );

  restartServer(
    request: texturestudio_texturestudio_server_pb.RestartServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.RestartServerResponse>;

  restartServer(
    request: texturestudio_texturestudio_server_pb.RestartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.RestartServerResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.RestartServerResponse>;

  restartServer(
    request: texturestudio_texturestudio_server_pb.RestartServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.RestartServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/RestartServer',
        request,
        metadata || {},
        this.methodInfoRestartServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/RestartServer',
    request,
    metadata || {},
    this.methodInfoRestartServer);
  }

  methodInfoServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.ServerStatusResponse,
    (request: texturestudio_texturestudio_server_pb.ServerStatusRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.ServerStatusResponse.deserializeBinary
  );

  serverStatus(
    request: texturestudio_texturestudio_server_pb.ServerStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.ServerStatusResponse>;

  serverStatus(
    request: texturestudio_texturestudio_server_pb.ServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.ServerStatusResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.ServerStatusResponse>;

  serverStatus(
    request: texturestudio_texturestudio_server_pb.ServerStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.ServerStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/ServerStatus',
        request,
        metadata || {},
        this.methodInfoServerStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/ServerStatus',
    request,
    metadata || {},
    this.methodInfoServerStatus);
  }

  methodInfoUploadProject = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.UploadProjectResponse,
    (request: texturestudio_texturestudio_server_pb.UploadProjectRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.UploadProjectResponse.deserializeBinary
  );

  uploadProject(
    request: texturestudio_texturestudio_server_pb.UploadProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.UploadProjectResponse>;

  uploadProject(
    request: texturestudio_texturestudio_server_pb.UploadProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.UploadProjectResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.UploadProjectResponse>;

  uploadProject(
    request: texturestudio_texturestudio_server_pb.UploadProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.UploadProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/UploadProject',
        request,
        metadata || {},
        this.methodInfoUploadProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/UploadProject',
    request,
    metadata || {},
    this.methodInfoUploadProject);
  }

  methodInfoGetProject = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.GetProjectResponse,
    (request: texturestudio_texturestudio_server_pb.GetProjectRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.GetProjectResponse.deserializeBinary
  );

  getProject(
    request: texturestudio_texturestudio_server_pb.GetProjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.GetProjectResponse>;

  getProject(
    request: texturestudio_texturestudio_server_pb.GetProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.GetProjectResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.GetProjectResponse>;

  getProject(
    request: texturestudio_texturestudio_server_pb.GetProjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.GetProjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/GetProject',
        request,
        metadata || {},
        this.methodInfoGetProject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/GetProject',
    request,
    metadata || {},
    this.methodInfoGetProject);
  }

  methodInfoGetProjects = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.GetProjectsResponse,
    (request: texturestudio_texturestudio_server_pb.GetProjectsRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.GetProjectsResponse.deserializeBinary
  );

  getProjects(
    request: texturestudio_texturestudio_server_pb.GetProjectsRequest,
    metadata: grpcWeb.Metadata | null): Promise<texturestudio_texturestudio_server_pb.GetProjectsResponse>;

  getProjects(
    request: texturestudio_texturestudio_server_pb.GetProjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.GetProjectsResponse) => void): grpcWeb.ClientReadableStream<texturestudio_texturestudio_server_pb.GetProjectsResponse>;

  getProjects(
    request: texturestudio_texturestudio_server_pb.GetProjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: texturestudio_texturestudio_server_pb.GetProjectsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/texture_studio.TextureStudioServerService/GetProjects',
        request,
        metadata || {},
        this.methodInfoGetProjects,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/texture_studio.TextureStudioServerService/GetProjects',
    request,
    metadata || {},
    this.methodInfoGetProjects);
  }

  methodInfoSubscribeToProjectsChanges = new grpcWeb.AbstractClientBase.MethodInfo(
    texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse,
    (request: texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesRequest) => {
      return request.serializeBinary();
    },
    texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse.deserializeBinary
  );

  subscribeToProjectsChanges(
    request: texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/texture_studio.TextureStudioServerService/SubscribeToProjectsChanges',
      request,
      metadata || {},
      this.methodInfoSubscribeToProjectsChanges);
  }

}

