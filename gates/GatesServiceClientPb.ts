/**
 * @fileoverview gRPC-Web generated client stub for mruv.gates
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as gates_gates_pb from '../gates/gates_pb';


export class MruVGatesServiceClient {
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

  methodInfoCreateGate = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.CreateGateResponse,
    (request: gates_gates_pb.CreateGateRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.CreateGateResponse.deserializeBinary
  );

  createGate(
    request: gates_gates_pb.CreateGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.CreateGateResponse>;

  createGate(
    request: gates_gates_pb.CreateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.CreateGateResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.CreateGateResponse>;

  createGate(
    request: gates_gates_pb.CreateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.CreateGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/CreateGate',
        request,
        metadata || {},
        this.methodInfoCreateGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/CreateGate',
    request,
    metadata || {},
    this.methodInfoCreateGate);
  }

  methodInfoGetGate = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.GetGateResponse,
    (request: gates_gates_pb.GetGateRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.GetGateResponse.deserializeBinary
  );

  getGate(
    request: gates_gates_pb.GetGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.GetGateResponse>;

  getGate(
    request: gates_gates_pb.GetGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.GetGateResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.GetGateResponse>;

  getGate(
    request: gates_gates_pb.GetGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.GetGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/GetGate',
        request,
        metadata || {},
        this.methodInfoGetGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/GetGate',
    request,
    metadata || {},
    this.methodInfoGetGate);
  }

  methodInfoUpdateGate = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.UpdateGateResponse,
    (request: gates_gates_pb.UpdateGateRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.UpdateGateResponse.deserializeBinary
  );

  updateGate(
    request: gates_gates_pb.UpdateGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.UpdateGateResponse>;

  updateGate(
    request: gates_gates_pb.UpdateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.UpdateGateResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.UpdateGateResponse>;

  updateGate(
    request: gates_gates_pb.UpdateGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.UpdateGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/UpdateGate',
        request,
        metadata || {},
        this.methodInfoUpdateGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/UpdateGate',
    request,
    metadata || {},
    this.methodInfoUpdateGate);
  }

  methodInfoDeleteGate = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.DeleteGateResponse,
    (request: gates_gates_pb.DeleteGateRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.DeleteGateResponse.deserializeBinary
  );

  deleteGate(
    request: gates_gates_pb.DeleteGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.DeleteGateResponse>;

  deleteGate(
    request: gates_gates_pb.DeleteGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.DeleteGateResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.DeleteGateResponse>;

  deleteGate(
    request: gates_gates_pb.DeleteGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.DeleteGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/DeleteGate',
        request,
        metadata || {},
        this.methodInfoDeleteGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/DeleteGate',
    request,
    metadata || {},
    this.methodInfoDeleteGate);
  }

  methodInfoLock = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.LockResponse,
    (request: gates_gates_pb.LockRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.LockResponse.deserializeBinary
  );

  lock(
    request: gates_gates_pb.LockRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.LockResponse>;

  lock(
    request: gates_gates_pb.LockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.LockResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.LockResponse>;

  lock(
    request: gates_gates_pb.LockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.LockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/Lock',
        request,
        metadata || {},
        this.methodInfoLock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/Lock',
    request,
    metadata || {},
    this.methodInfoLock);
  }

  methodInfoUnlock = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.UnlockResponse,
    (request: gates_gates_pb.UnlockRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.UnlockResponse.deserializeBinary
  );

  unlock(
    request: gates_gates_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.UnlockResponse>;

  unlock(
    request: gates_gates_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.UnlockResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.UnlockResponse>;

  unlock(
    request: gates_gates_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.UnlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/Unlock',
        request,
        metadata || {},
        this.methodInfoUnlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/Unlock',
    request,
    metadata || {},
    this.methodInfoUnlock);
  }

  methodInfoOpen = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.OpenResponse,
    (request: gates_gates_pb.OpenRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.OpenResponse.deserializeBinary
  );

  open(
    request: gates_gates_pb.OpenRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.OpenResponse>;

  open(
    request: gates_gates_pb.OpenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.OpenResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.OpenResponse>;

  open(
    request: gates_gates_pb.OpenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.OpenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/Open',
        request,
        metadata || {},
        this.methodInfoOpen,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/Open',
    request,
    metadata || {},
    this.methodInfoOpen);
  }

  methodInfoClose = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.CloseResponse,
    (request: gates_gates_pb.CloseRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.CloseResponse.deserializeBinary
  );

  close(
    request: gates_gates_pb.CloseRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.CloseResponse>;

  close(
    request: gates_gates_pb.CloseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.CloseResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.CloseResponse>;

  close(
    request: gates_gates_pb.CloseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.CloseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/Close',
        request,
        metadata || {},
        this.methodInfoClose,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/Close',
    request,
    metadata || {},
    this.methodInfoClose);
  }

  methodInfoFindNearestGate = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.FindNearestGateResponse,
    (request: gates_gates_pb.FindNearestGateRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.FindNearestGateResponse.deserializeBinary
  );

  findNearestGate(
    request: gates_gates_pb.FindNearestGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gates_gates_pb.FindNearestGateResponse>;

  findNearestGate(
    request: gates_gates_pb.FindNearestGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: gates_gates_pb.FindNearestGateResponse) => void): grpcWeb.ClientReadableStream<gates_gates_pb.FindNearestGateResponse>;

  findNearestGate(
    request: gates_gates_pb.FindNearestGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: gates_gates_pb.FindNearestGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.gates.MruVGatesService/FindNearestGate',
        request,
        metadata || {},
        this.methodInfoFindNearestGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.gates.MruVGatesService/FindNearestGate',
    request,
    metadata || {},
    this.methodInfoFindNearestGate);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    gates_gates_pb.FetchAllGatesResponse,
    (request: gates_gates_pb.FetchAllGatesRequest) => {
      return request.serializeBinary();
    },
    gates_gates_pb.FetchAllGatesResponse.deserializeBinary
  );

  fetchAll(
    request: gates_gates_pb.FetchAllGatesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.gates.MruVGatesService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

