/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateObjectModelRequest,
  CreateObjectModelResponse,
  DeleteObjectModelRequest,
  DeleteObjectModelResponse,
  FetchAllModelsRequest,
  FetchAllModelsResponse,
  GetObjectModelRequest,
  GetObjectModelResponse,
  UpdateObjectModelRequest,
  UpdateObjectModelResponse} from './models_pb';

export class MruVObjectModelsServiceClient {
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

  methodInfoCreateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateObjectModelResponse,
    (request: CreateObjectModelRequest) => {
      return request.serializeBinary();
    },
    CreateObjectModelResponse.deserializeBinary
  );

  createObjectModel(
    request: CreateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateObjectModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/CreateObjectModel',
      request,
      metadata || {},
      this.methodInfoCreateObjectModel,
      callback);
  }

  methodInfoGetObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    GetObjectModelResponse,
    (request: GetObjectModelRequest) => {
      return request.serializeBinary();
    },
    GetObjectModelResponse.deserializeBinary
  );

  getObjectModel(
    request: GetObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetObjectModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/GetObjectModel',
      request,
      metadata || {},
      this.methodInfoGetObjectModel,
      callback);
  }

  methodInfoUpdateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateObjectModelResponse,
    (request: UpdateObjectModelRequest) => {
      return request.serializeBinary();
    },
    UpdateObjectModelResponse.deserializeBinary
  );

  updateObjectModel(
    request: UpdateObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateObjectModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/UpdateObjectModel',
      request,
      metadata || {},
      this.methodInfoUpdateObjectModel,
      callback);
  }

  methodInfoDeleteObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteObjectModelResponse,
    (request: DeleteObjectModelRequest) => {
      return request.serializeBinary();
    },
    DeleteObjectModelResponse.deserializeBinary
  );

  deleteObjectModel(
    request: DeleteObjectModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteObjectModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/DeleteObjectModel',
      request,
      metadata || {},
      this.methodInfoDeleteObjectModel,
      callback);
  }

  methodInfoFetchAllModels = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchAllModelsResponse,
    (request: FetchAllModelsRequest) => {
      return request.serializeBinary();
    },
    FetchAllModelsResponse.deserializeBinary
  );

  fetchAllModels(
    request: FetchAllModelsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.objects.MruVObjectModelsService/FetchAllModels',
      request,
      metadata || {},
      this.methodInfoFetchAllModels);
  }

}

