/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as objects_objects_pb from '../objects/objects_pb';

import {
  CreateMovableObjectRequest,
  CreateMovableObjectResponse,
  DeleteMovableObjectRequest,
  DeleteMovableObjectResponse,
  FetchAllMovableObjectsRequest,
  FetchAllMovableObjectsResponse,
  GetMovableObjectRequest,
  GetMovableObjectResponse,
  MoveObjectNextRequest,
  MoveObjectNextResponse,
  MoveObjectPreviousRequest,
  MoveObjectPreviousResponse,
  MoveObjectRequest,
  MoveObjectResponse,
  UpdateMovableObjectRequest,
  UpdateMovableObjectResponse} from './movable_pb';

export class MruVMovableObjectsServiceClient {
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

  methodInfoCreateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateMovableObjectResponse,
    (request: CreateMovableObjectRequest) => {
      return request.serializeBinary();
    },
    CreateMovableObjectResponse.deserializeBinary
  );

  createMovableObject(
    request: CreateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateMovableObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/CreateMovableObject',
      request,
      metadata || {},
      this.methodInfoCreateMovableObject,
      callback);
  }

  methodInfoGetMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMovableObjectResponse,
    (request: GetMovableObjectRequest) => {
      return request.serializeBinary();
    },
    GetMovableObjectResponse.deserializeBinary
  );

  getMovableObject(
    request: GetMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMovableObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/GetMovableObject',
      request,
      metadata || {},
      this.methodInfoGetMovableObject,
      callback);
  }

  methodInfoUpdateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateMovableObjectResponse,
    (request: UpdateMovableObjectRequest) => {
      return request.serializeBinary();
    },
    UpdateMovableObjectResponse.deserializeBinary
  );

  updateMovableObject(
    request: UpdateMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMovableObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject',
      request,
      metadata || {},
      this.methodInfoUpdateMovableObject,
      callback);
  }

  methodInfoDeleteMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteMovableObjectResponse,
    (request: DeleteMovableObjectRequest) => {
      return request.serializeBinary();
    },
    DeleteMovableObjectResponse.deserializeBinary
  );

  deleteMovableObject(
    request: DeleteMovableObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteMovableObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject',
      request,
      metadata || {},
      this.methodInfoDeleteMovableObject,
      callback);
  }

  methodInfoMoveObject = new grpcWeb.AbstractClientBase.MethodInfo(
    MoveObjectResponse,
    (request: MoveObjectRequest) => {
      return request.serializeBinary();
    },
    MoveObjectResponse.deserializeBinary
  );

  moveObject(
    request: MoveObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MoveObjectResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/MoveObject',
      request,
      metadata || {},
      this.methodInfoMoveObject,
      callback);
  }

  methodInfoMoveObjectNext = new grpcWeb.AbstractClientBase.MethodInfo(
    MoveObjectNextResponse,
    (request: MoveObjectNextRequest) => {
      return request.serializeBinary();
    },
    MoveObjectNextResponse.deserializeBinary
  );

  moveObjectNext(
    request: MoveObjectNextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MoveObjectNextResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/MoveObjectNext',
      request,
      metadata || {},
      this.methodInfoMoveObjectNext,
      callback);
  }

  methodInfoMoveObjectPrevious = new grpcWeb.AbstractClientBase.MethodInfo(
    MoveObjectPreviousResponse,
    (request: MoveObjectPreviousRequest) => {
      return request.serializeBinary();
    },
    MoveObjectPreviousResponse.deserializeBinary
  );

  moveObjectPrevious(
    request: MoveObjectPreviousRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MoveObjectPreviousResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious',
      request,
      metadata || {},
      this.methodInfoMoveObjectPrevious,
      callback);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchAllMovableObjectsResponse,
    (request: FetchAllMovableObjectsRequest) => {
      return request.serializeBinary();
    },
    FetchAllMovableObjectsResponse.deserializeBinary
  );

  fetchAll(
    request: FetchAllMovableObjectsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.objects.MruVMovableObjectsService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

