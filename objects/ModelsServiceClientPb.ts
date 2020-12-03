/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as objects_models_pb from '../objects/models_pb';


export class MruVObjectModelsServiceClient {
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

  methodInfoCreateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_models_pb.CreateObjectModelResponse,
    (request: objects_models_pb.CreateObjectModelRequest) => {
      return request.serializeBinary();
    },
    objects_models_pb.CreateObjectModelResponse.deserializeBinary
  );

  createObjectModel(
    request: objects_models_pb.CreateObjectModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_models_pb.CreateObjectModelResponse>;

  createObjectModel(
    request: objects_models_pb.CreateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_models_pb.CreateObjectModelResponse) => void): grpcWeb.ClientReadableStream<objects_models_pb.CreateObjectModelResponse>;

  createObjectModel(
    request: objects_models_pb.CreateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_models_pb.CreateObjectModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectModelsService/CreateObjectModel',
        request,
        metadata || {},
        this.methodInfoCreateObjectModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectModelsService/CreateObjectModel',
    request,
    metadata || {},
    this.methodInfoCreateObjectModel);
  }

  methodInfoGetObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_models_pb.GetObjectModelResponse,
    (request: objects_models_pb.GetObjectModelRequest) => {
      return request.serializeBinary();
    },
    objects_models_pb.GetObjectModelResponse.deserializeBinary
  );

  getObjectModel(
    request: objects_models_pb.GetObjectModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_models_pb.GetObjectModelResponse>;

  getObjectModel(
    request: objects_models_pb.GetObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_models_pb.GetObjectModelResponse) => void): grpcWeb.ClientReadableStream<objects_models_pb.GetObjectModelResponse>;

  getObjectModel(
    request: objects_models_pb.GetObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_models_pb.GetObjectModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectModelsService/GetObjectModel',
        request,
        metadata || {},
        this.methodInfoGetObjectModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectModelsService/GetObjectModel',
    request,
    metadata || {},
    this.methodInfoGetObjectModel);
  }

  methodInfoUpdateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_models_pb.UpdateObjectModelResponse,
    (request: objects_models_pb.UpdateObjectModelRequest) => {
      return request.serializeBinary();
    },
    objects_models_pb.UpdateObjectModelResponse.deserializeBinary
  );

  updateObjectModel(
    request: objects_models_pb.UpdateObjectModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_models_pb.UpdateObjectModelResponse>;

  updateObjectModel(
    request: objects_models_pb.UpdateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_models_pb.UpdateObjectModelResponse) => void): grpcWeb.ClientReadableStream<objects_models_pb.UpdateObjectModelResponse>;

  updateObjectModel(
    request: objects_models_pb.UpdateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_models_pb.UpdateObjectModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectModelsService/UpdateObjectModel',
        request,
        metadata || {},
        this.methodInfoUpdateObjectModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectModelsService/UpdateObjectModel',
    request,
    metadata || {},
    this.methodInfoUpdateObjectModel);
  }

  methodInfoDeleteObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_models_pb.DeleteObjectModelResponse,
    (request: objects_models_pb.DeleteObjectModelRequest) => {
      return request.serializeBinary();
    },
    objects_models_pb.DeleteObjectModelResponse.deserializeBinary
  );

  deleteObjectModel(
    request: objects_models_pb.DeleteObjectModelRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_models_pb.DeleteObjectModelResponse>;

  deleteObjectModel(
    request: objects_models_pb.DeleteObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_models_pb.DeleteObjectModelResponse) => void): grpcWeb.ClientReadableStream<objects_models_pb.DeleteObjectModelResponse>;

  deleteObjectModel(
    request: objects_models_pb.DeleteObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_models_pb.DeleteObjectModelResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectModelsService/DeleteObjectModel',
        request,
        metadata || {},
        this.methodInfoDeleteObjectModel,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectModelsService/DeleteObjectModel',
    request,
    metadata || {},
    this.methodInfoDeleteObjectModel);
  }

  methodInfoFetchAllModels = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_models_pb.FetchAllModelsResponse,
    (request: objects_models_pb.FetchAllModelsRequest) => {
      return request.serializeBinary();
    },
    objects_models_pb.FetchAllModelsResponse.deserializeBinary
  );

  fetchAllModels(
    request: objects_models_pb.FetchAllModelsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/FetchAllModels',
      request,
      metadata || {},
      this.methodInfoFetchAllModels);
  }

}

