/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateObjectRequest,
  CreateObjectResponse,
  DeleteObjectRequest,
  DeleteObjectResponse,
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

}

