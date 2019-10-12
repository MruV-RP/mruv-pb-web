/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';

import {
  CreateItemRequest,
  CreateItemResponse,
  DestroyItemRequest,
  DestroyItemResponse,
  GetItemRequest,
  GetItemResponse,
  UpdateItemRequest,
  UpdateItemResponse} from './items_pb';

export class MruVItemServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateItemResponse,
    (request: CreateItemRequest) => {
      return request.serializeBinary();
    },
    CreateItemResponse.deserializeBinary
  );

  create(
    request: CreateItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/Create',
      request,
      metadata || {},
      this.methodInfoCreate,
      callback);
  }

  methodInfoDestroy = new grpcWeb.AbstractClientBase.MethodInfo(
    DestroyItemResponse,
    (request: DestroyItemRequest) => {
      return request.serializeBinary();
    },
    DestroyItemResponse.deserializeBinary
  );

  destroy(
    request: DestroyItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DestroyItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/Destroy',
      request,
      metadata || {},
      this.methodInfoDestroy,
      callback);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateItemResponse,
    (request: UpdateItemRequest) => {
      return request.serializeBinary();
    },
    UpdateItemResponse.deserializeBinary
  );

  update(
    request: UpdateItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/Update',
      request,
      metadata || {},
      this.methodInfoUpdate,
      callback);
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    GetItemResponse,
    (request: GetItemRequest) => {
      return request.serializeBinary();
    },
    GetItemResponse.deserializeBinary
  );

  get(
    request: GetItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/Get',
      request,
      metadata || {},
      this.methodInfoGet,
      callback);
  }

  methodInfoGetServiceStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.ServiceStatusResponse,
    (request: common_health_pb.ServiceStatusRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.ServiceStatusResponse.deserializeBinary
  );

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/GetServiceStatus',
      request,
      metadata || {},
      this.methodInfoGetServiceStatus,
      callback);
  }

  methodInfoGetServiceVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.VersionResponse,
    (request: common_health_pb.VersionRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.VersionResponse.deserializeBinary
  );

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVItemService/GetServiceVersion',
      request,
      metadata || {},
      this.methodInfoGetServiceVersion,
      callback);
  }

}

