/**
 * @fileoverview gRPC-Web generated client stub for mruv.entrances
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as entrances_entrances_pb from '../entrances/entrances_pb';


export class MruVEntrancesServiceClient {
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

  methodInfoCreateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.CreateEntranceResponse,
    (request: entrances_entrances_pb.CreateEntranceRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.CreateEntranceResponse.deserializeBinary
  );

  createEntrance(
    request: entrances_entrances_pb.CreateEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.CreateEntranceResponse>;

  createEntrance(
    request: entrances_entrances_pb.CreateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.CreateEntranceResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.CreateEntranceResponse>;

  createEntrance(
    request: entrances_entrances_pb.CreateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.CreateEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/CreateEntrance',
        request,
        metadata || {},
        this.methodInfoCreateEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/CreateEntrance',
    request,
    metadata || {},
    this.methodInfoCreateEntrance);
  }

  methodInfoGetEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.GetEntranceResponse,
    (request: entrances_entrances_pb.GetEntranceRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.GetEntranceResponse.deserializeBinary
  );

  getEntrance(
    request: entrances_entrances_pb.GetEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.GetEntranceResponse>;

  getEntrance(
    request: entrances_entrances_pb.GetEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.GetEntranceResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.GetEntranceResponse>;

  getEntrance(
    request: entrances_entrances_pb.GetEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.GetEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/GetEntrance',
        request,
        metadata || {},
        this.methodInfoGetEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/GetEntrance',
    request,
    metadata || {},
    this.methodInfoGetEntrance);
  }

  methodInfoUpdateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.UpdateEntranceResponse,
    (request: entrances_entrances_pb.UpdateEntranceRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.UpdateEntranceResponse.deserializeBinary
  );

  updateEntrance(
    request: entrances_entrances_pb.UpdateEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.UpdateEntranceResponse>;

  updateEntrance(
    request: entrances_entrances_pb.UpdateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.UpdateEntranceResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.UpdateEntranceResponse>;

  updateEntrance(
    request: entrances_entrances_pb.UpdateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.UpdateEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/UpdateEntrance',
        request,
        metadata || {},
        this.methodInfoUpdateEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/UpdateEntrance',
    request,
    metadata || {},
    this.methodInfoUpdateEntrance);
  }

  methodInfoDeleteEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.DeleteEntranceResponse,
    (request: entrances_entrances_pb.DeleteEntranceRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.DeleteEntranceResponse.deserializeBinary
  );

  deleteEntrance(
    request: entrances_entrances_pb.DeleteEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.DeleteEntranceResponse>;

  deleteEntrance(
    request: entrances_entrances_pb.DeleteEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.DeleteEntranceResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.DeleteEntranceResponse>;

  deleteEntrance(
    request: entrances_entrances_pb.DeleteEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.DeleteEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/DeleteEntrance',
        request,
        metadata || {},
        this.methodInfoDeleteEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/DeleteEntrance',
    request,
    metadata || {},
    this.methodInfoDeleteEntrance);
  }

  methodInfoLock = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.LockResponse,
    (request: entrances_entrances_pb.LockRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.LockResponse.deserializeBinary
  );

  lock(
    request: entrances_entrances_pb.LockRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.LockResponse>;

  lock(
    request: entrances_entrances_pb.LockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.LockResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.LockResponse>;

  lock(
    request: entrances_entrances_pb.LockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.LockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/Lock',
        request,
        metadata || {},
        this.methodInfoLock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/Lock',
    request,
    metadata || {},
    this.methodInfoLock);
  }

  methodInfoUnlock = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.UnlockResponse,
    (request: entrances_entrances_pb.UnlockRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.UnlockResponse.deserializeBinary
  );

  unlock(
    request: entrances_entrances_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.UnlockResponse>;

  unlock(
    request: entrances_entrances_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.UnlockResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.UnlockResponse>;

  unlock(
    request: entrances_entrances_pb.UnlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.UnlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/Unlock',
        request,
        metadata || {},
        this.methodInfoUnlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/Unlock',
    request,
    metadata || {},
    this.methodInfoUnlock);
  }

  methodInfoFindNearestEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.FindNearestEntranceResponse,
    (request: entrances_entrances_pb.FindNearestEntranceRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.FindNearestEntranceResponse.deserializeBinary
  );

  findNearestEntrance(
    request: entrances_entrances_pb.FindNearestEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.FindNearestEntranceResponse>;

  findNearestEntrance(
    request: entrances_entrances_pb.FindNearestEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.FindNearestEntranceResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.FindNearestEntranceResponse>;

  findNearestEntrance(
    request: entrances_entrances_pb.FindNearestEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.FindNearestEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/FindNearestEntrance',
        request,
        metadata || {},
        this.methodInfoFindNearestEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/FindNearestEntrance',
    request,
    metadata || {},
    this.methodInfoFindNearestEntrance);
  }

  methodInfoEnter = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.EnterResponse,
    (request: entrances_entrances_pb.EnterRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.EnterResponse.deserializeBinary
  );

  enter(
    request: entrances_entrances_pb.EnterRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.EnterResponse>;

  enter(
    request: entrances_entrances_pb.EnterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.EnterResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.EnterResponse>;

  enter(
    request: entrances_entrances_pb.EnterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.EnterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/Enter',
        request,
        metadata || {},
        this.methodInfoEnter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/Enter',
    request,
    metadata || {},
    this.methodInfoEnter);
  }

  methodInfoExit = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.ExitResponse,
    (request: entrances_entrances_pb.ExitRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.ExitResponse.deserializeBinary
  );

  exit(
    request: entrances_entrances_pb.ExitRequest,
    metadata: grpcWeb.Metadata | null): Promise<entrances_entrances_pb.ExitResponse>;

  exit(
    request: entrances_entrances_pb.ExitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: entrances_entrances_pb.ExitResponse) => void): grpcWeb.ClientReadableStream<entrances_entrances_pb.ExitResponse>;

  exit(
    request: entrances_entrances_pb.ExitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: entrances_entrances_pb.ExitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.entrances.MruVEntrancesService/Exit',
        request,
        metadata || {},
        this.methodInfoExit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.entrances.MruVEntrancesService/Exit',
    request,
    metadata || {},
    this.methodInfoExit);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    entrances_entrances_pb.FetchAllEntrancesResponse,
    (request: entrances_entrances_pb.FetchAllEntrancesRequest) => {
      return request.serializeBinary();
    },
    entrances_entrances_pb.FetchAllEntrancesResponse.deserializeBinary
  );

  fetchAll(
    request: entrances_entrances_pb.FetchAllEntrancesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

