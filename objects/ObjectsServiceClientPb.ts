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
  CreateObjectRequest,
  CreateObjectResponse,
  DeleteObjectModelRequest,
  DeleteObjectModelResponse,
  DeleteObjectRequest,
  DeleteObjectResponse,
  GetObjectModelRequest,
  GetObjectModelResponse,
  GetObjectRequest,
  GetObjectResponse,
  UpdateObjectModelRequest,
  UpdateObjectModelResponse,
  UpdateObjectRequest,
  UpdateObjectResponse} from './objects_pb';

export class MruVObjectsServiceClient {
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
        '/mruv.objects.MruVObjectsService/CreateObjectModel',
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
        '/mruv.objects.MruVObjectsService/GetObjectModel',
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
        '/mruv.objects.MruVObjectsService/UpdateObjectModel',
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
        '/mruv.objects.MruVObjectsService/DeleteObjectModel',
      request,
      metadata || {},
      this.methodInfoDeleteObjectModel,
      callback);
  }

  methodInfoCreateObject = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateObjectResponse,
    (request: CreateObjectRequest) => {
      return request.serializeBinary();
    },
    CreateObjectResponse.deserializeBinary
  );

  createObject(
    request: CreateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/CreateObject',
      request,
      metadata || {},
      this.methodInfoCreateObject,
      callback);
  }

  methodInfoGetObject = new grpcWeb.AbstractClientBase.MethodInfo(
    GetObjectResponse,
    (request: GetObjectRequest) => {
      return request.serializeBinary();
    },
    GetObjectResponse.deserializeBinary
  );

  getObject(
    request: GetObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/GetObject',
      request,
      metadata || {},
      this.methodInfoGetObject,
      callback);
  }

  methodInfoUpdateObject = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateObjectResponse,
    (request: UpdateObjectRequest) => {
      return request.serializeBinary();
    },
    UpdateObjectResponse.deserializeBinary
  );

  updateObject(
    request: UpdateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/UpdateObject',
      request,
      metadata || {},
      this.methodInfoUpdateObject,
      callback);
  }

  methodInfoDeleteObject = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteObjectResponse,
    (request: DeleteObjectRequest) => {
      return request.serializeBinary();
    },
    DeleteObjectResponse.deserializeBinary
  );

  deleteObject(
    request: DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/DeleteObject',
      request,
      metadata || {},
      this.methodInfoDeleteObject,
      callback);
  }

}

