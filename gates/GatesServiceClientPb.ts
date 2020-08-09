/**
 * @fileoverview gRPC-Web generated client stub for mruv.gates
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as objects_movable_pb from '../objects/movable_pb';

import {
  CloseRequest,
  CloseResponse,
  CreateGateRequest,
  CreateGateResponse,
  DeleteGateRequest,
  DeleteGateResponse,
  FindNearestGateRequest,
  FindNearestGateResponse,
  GetGateRequest,
  GetGateResponse,
  LockRequest,
  LockResponse,
  OpenRequest,
  OpenResponse,
  UnlockRequest,
  UnlockResponse,
  UpdateGateRequest,
  UpdateGateResponse} from './gates_pb';

export class MruVGatesServiceClient {
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

  methodInfoCreateGate = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateGateResponse,
    (request: CreateGateRequest) => {
      return request.serializeBinary();
    },
    CreateGateResponse.deserializeBinary
  );

  createGate(
    request: CreateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/CreateGate',
      request,
      metadata || {},
      this.methodInfoCreateGate,
      callback);
  }

  methodInfoGetGate = new grpcWeb.AbstractClientBase.MethodInfo(
    GetGateResponse,
    (request: GetGateRequest) => {
      return request.serializeBinary();
    },
    GetGateResponse.deserializeBinary
  );

  getGate(
    request: GetGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/GetGate',
      request,
      metadata || {},
      this.methodInfoGetGate,
      callback);
  }

  methodInfoUpdateGate = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateGateResponse,
    (request: UpdateGateRequest) => {
      return request.serializeBinary();
    },
    UpdateGateResponse.deserializeBinary
  );

  updateGate(
    request: UpdateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/UpdateGate',
      request,
      metadata || {},
      this.methodInfoUpdateGate,
      callback);
  }

  methodInfoDeleteGate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteGateResponse,
    (request: DeleteGateRequest) => {
      return request.serializeBinary();
    },
    DeleteGateResponse.deserializeBinary
  );

  deleteGate(
    request: DeleteGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/DeleteGate',
      request,
      metadata || {},
      this.methodInfoDeleteGate,
      callback);
  }

  methodInfoLock = new grpcWeb.AbstractClientBase.MethodInfo(
    LockResponse,
    (request: LockRequest) => {
      return request.serializeBinary();
    },
    LockResponse.deserializeBinary
  );

  lock(
    request: LockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/Lock',
      request,
      metadata || {},
      this.methodInfoLock,
      callback);
  }

  methodInfoUnlock = new grpcWeb.AbstractClientBase.MethodInfo(
    UnlockResponse,
    (request: UnlockRequest) => {
      return request.serializeBinary();
    },
    UnlockResponse.deserializeBinary
  );

  unlock(
    request: UnlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnlockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/Unlock',
      request,
      metadata || {},
      this.methodInfoUnlock,
      callback);
  }

  methodInfoOpen = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenResponse,
    (request: OpenRequest) => {
      return request.serializeBinary();
    },
    OpenResponse.deserializeBinary
  );

  open(
    request: OpenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/Open',
      request,
      metadata || {},
      this.methodInfoOpen,
      callback);
  }

  methodInfoClose = new grpcWeb.AbstractClientBase.MethodInfo(
    CloseResponse,
    (request: CloseRequest) => {
      return request.serializeBinary();
    },
    CloseResponse.deserializeBinary
  );

  close(
    request: CloseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CloseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/Close',
      request,
      metadata || {},
      this.methodInfoClose,
      callback);
  }

  methodInfoFindNearestGate = new grpcWeb.AbstractClientBase.MethodInfo(
    FindNearestGateResponse,
    (request: FindNearestGateRequest) => {
      return request.serializeBinary();
    },
    FindNearestGateResponse.deserializeBinary
  );

  findNearestGate(
    request: FindNearestGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FindNearestGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/FindNearestGate',
      request,
      metadata || {},
      this.methodInfoFindNearestGate,
      callback);
  }

}

