/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as objects_movable_pb from '../objects/movable_pb';


export class MruVMovableObjectsServiceClient {
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

  methodInfoCreateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.CreateMovableObjectResponse,
    (request: objects_movable_pb.CreateMovableObjectRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.CreateMovableObjectResponse.deserializeBinary
  );

  createMovableObject(
    request: objects_movable_pb.CreateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.CreateMovableObjectResponse>;

  createMovableObject(
    request: objects_movable_pb.CreateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.CreateMovableObjectResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.CreateMovableObjectResponse>;

  createMovableObject(
    request: objects_movable_pb.CreateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.CreateMovableObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/CreateMovableObject',
        request,
        metadata || {},
        this.methodInfoCreateMovableObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/CreateMovableObject',
    request,
    metadata || {},
    this.methodInfoCreateMovableObject);
  }

  methodInfoGetMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.GetMovableObjectResponse,
    (request: objects_movable_pb.GetMovableObjectRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.GetMovableObjectResponse.deserializeBinary
  );

  getMovableObject(
    request: objects_movable_pb.GetMovableObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.GetMovableObjectResponse>;

  getMovableObject(
    request: objects_movable_pb.GetMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.GetMovableObjectResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.GetMovableObjectResponse>;

  getMovableObject(
    request: objects_movable_pb.GetMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.GetMovableObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/GetMovableObject',
        request,
        metadata || {},
        this.methodInfoGetMovableObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/GetMovableObject',
    request,
    metadata || {},
    this.methodInfoGetMovableObject);
  }

  methodInfoUpdateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.UpdateMovableObjectResponse,
    (request: objects_movable_pb.UpdateMovableObjectRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.UpdateMovableObjectResponse.deserializeBinary
  );

  updateMovableObject(
    request: objects_movable_pb.UpdateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.UpdateMovableObjectResponse>;

  updateMovableObject(
    request: objects_movable_pb.UpdateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.UpdateMovableObjectResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.UpdateMovableObjectResponse>;

  updateMovableObject(
    request: objects_movable_pb.UpdateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.UpdateMovableObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject',
        request,
        metadata || {},
        this.methodInfoUpdateMovableObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject',
    request,
    metadata || {},
    this.methodInfoUpdateMovableObject);
  }

  methodInfoDeleteMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.DeleteMovableObjectResponse,
    (request: objects_movable_pb.DeleteMovableObjectRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.DeleteMovableObjectResponse.deserializeBinary
  );

  deleteMovableObject(
    request: objects_movable_pb.DeleteMovableObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.DeleteMovableObjectResponse>;

  deleteMovableObject(
    request: objects_movable_pb.DeleteMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.DeleteMovableObjectResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.DeleteMovableObjectResponse>;

  deleteMovableObject(
    request: objects_movable_pb.DeleteMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.DeleteMovableObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject',
        request,
        metadata || {},
        this.methodInfoDeleteMovableObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject',
    request,
    metadata || {},
    this.methodInfoDeleteMovableObject);
  }

  methodInfoMoveObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.MoveObjectResponse,
    (request: objects_movable_pb.MoveObjectRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.MoveObjectResponse.deserializeBinary
  );

  moveObject(
    request: objects_movable_pb.MoveObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.MoveObjectResponse>;

  moveObject(
    request: objects_movable_pb.MoveObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.MoveObjectResponse>;

  moveObject(
    request: objects_movable_pb.MoveObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/MoveObject',
        request,
        metadata || {},
        this.methodInfoMoveObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/MoveObject',
    request,
    metadata || {},
    this.methodInfoMoveObject);
  }

  methodInfoMoveObjectNext = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.MoveObjectNextResponse,
    (request: objects_movable_pb.MoveObjectNextRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.MoveObjectNextResponse.deserializeBinary
  );

  moveObjectNext(
    request: objects_movable_pb.MoveObjectNextRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.MoveObjectNextResponse>;

  moveObjectNext(
    request: objects_movable_pb.MoveObjectNextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectNextResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.MoveObjectNextResponse>;

  moveObjectNext(
    request: objects_movable_pb.MoveObjectNextRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectNextResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/MoveObjectNext',
        request,
        metadata || {},
        this.methodInfoMoveObjectNext,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/MoveObjectNext',
    request,
    metadata || {},
    this.methodInfoMoveObjectNext);
  }

  methodInfoMoveObjectPrevious = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.MoveObjectPreviousResponse,
    (request: objects_movable_pb.MoveObjectPreviousRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.MoveObjectPreviousResponse.deserializeBinary
  );

  moveObjectPrevious(
    request: objects_movable_pb.MoveObjectPreviousRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_movable_pb.MoveObjectPreviousResponse>;

  moveObjectPrevious(
    request: objects_movable_pb.MoveObjectPreviousRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectPreviousResponse) => void): grpcWeb.ClientReadableStream<objects_movable_pb.MoveObjectPreviousResponse>;

  moveObjectPrevious(
    request: objects_movable_pb.MoveObjectPreviousRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_movable_pb.MoveObjectPreviousResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious',
        request,
        metadata || {},
        this.methodInfoMoveObjectPrevious,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious',
    request,
    metadata || {},
    this.methodInfoMoveObjectPrevious);
  }

  methodInfoFetchAllMovableObjects = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_movable_pb.FetchAllMovableObjectsResponse,
    (request: objects_movable_pb.FetchAllMovableObjectsRequest) => {
      return request.serializeBinary();
    },
    objects_movable_pb.FetchAllMovableObjectsResponse.deserializeBinary
  );

  fetchAllMovableObjects(
    request: objects_movable_pb.FetchAllMovableObjectsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/FetchAllMovableObjects',
      request,
      metadata || {},
      this.methodInfoFetchAllMovableObjects);
  }

}

