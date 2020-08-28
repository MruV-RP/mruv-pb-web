/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  AddObjectMaterialRequest,
  AddObjectMaterialResponse,
  AddObjectMaterialTextRequest,
  AddObjectMaterialTextResponse,
  CreateObjectRequest,
  CreateObjectResponse,
  DeleteObjectMaterialRequest,
  DeleteObjectMaterialResponse,
  DeleteObjectMaterialTextRequest,
  DeleteObjectMaterialTextResponse,
  DeleteObjectRequest,
  DeleteObjectResponse,
  FetchAllRequest,
  FetchAllResponse,
  GetObjectMaterialTextsRequest,
  GetObjectMaterialTextsResponse,
  GetObjectMaterialsRequest,
  GetObjectMaterialsResponse,
  GetObjectRequest,
  GetObjectResponse,
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

  methodInfoAddObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    AddObjectMaterialResponse,
    (request: AddObjectMaterialRequest) => {
      return request.serializeBinary();
    },
    AddObjectMaterialResponse.deserializeBinary
  );

  addObjectMaterial(
    request: AddObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddObjectMaterialResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/AddObjectMaterial',
      request,
      metadata || {},
      this.methodInfoAddObjectMaterial,
      callback);
  }

  methodInfoGetObjectMaterials = new grpcWeb.AbstractClientBase.MethodInfo(
    GetObjectMaterialsResponse,
    (request: GetObjectMaterialsRequest) => {
      return request.serializeBinary();
    },
    GetObjectMaterialsResponse.deserializeBinary
  );

  getObjectMaterials(
    request: GetObjectMaterialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetObjectMaterialsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/GetObjectMaterials',
      request,
      metadata || {},
      this.methodInfoGetObjectMaterials,
      callback);
  }

  methodInfoDeleteObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteObjectMaterialResponse,
    (request: DeleteObjectMaterialRequest) => {
      return request.serializeBinary();
    },
    DeleteObjectMaterialResponse.deserializeBinary
  );

  deleteObjectMaterial(
    request: DeleteObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteObjectMaterialResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/DeleteObjectMaterial',
      request,
      metadata || {},
      this.methodInfoDeleteObjectMaterial,
      callback);
  }

  methodInfoAddObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(
    AddObjectMaterialTextResponse,
    (request: AddObjectMaterialTextRequest) => {
      return request.serializeBinary();
    },
    AddObjectMaterialTextResponse.deserializeBinary
  );

  addObjectMaterialText(
    request: AddObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddObjectMaterialTextResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/AddObjectMaterialText',
      request,
      metadata || {},
      this.methodInfoAddObjectMaterialText,
      callback);
  }

  methodInfoGetObjectMaterialTexts = new grpcWeb.AbstractClientBase.MethodInfo(
    GetObjectMaterialTextsResponse,
    (request: GetObjectMaterialTextsRequest) => {
      return request.serializeBinary();
    },
    GetObjectMaterialTextsResponse.deserializeBinary
  );

  getObjectMaterialTexts(
    request: GetObjectMaterialTextsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetObjectMaterialTextsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts',
      request,
      metadata || {},
      this.methodInfoGetObjectMaterialTexts,
      callback);
  }

  methodInfoDeleteObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteObjectMaterialTextResponse,
    (request: DeleteObjectMaterialTextRequest) => {
      return request.serializeBinary();
    },
    DeleteObjectMaterialTextResponse.deserializeBinary
  );

  deleteObjectMaterialText(
    request: DeleteObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteObjectMaterialTextResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText',
      request,
      metadata || {},
      this.methodInfoDeleteObjectMaterialText,
      callback);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchAllResponse,
    (request: FetchAllRequest) => {
      return request.serializeBinary();
    },
    FetchAllResponse.deserializeBinary
  );

  fetchAll(
    request: FetchAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FetchAllResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll,
      callback);
  }

}

