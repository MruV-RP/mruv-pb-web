/**
 * @fileoverview gRPC-Web generated client stub for mruv.entrances
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as spots_spots_pb from '../spots/spots_pb';

import {
  CreateEntranceRequest,
  CreateEntranceResponse,
  DeleteEntranceRequest,
  DeleteEntranceResponse,
  EnterRequest,
  EnterResponse,
  ExitRequest,
  ExitResponse,
  FetchAllEntrancesRequest,
  FetchAllEntrancesResponse,
  FindNearestEntranceRequest,
  FindNearestEntranceResponse,
  GetEntranceRequest,
  GetEntranceResponse,
  LockRequest,
  LockResponse,
  UnlockRequest,
  UnlockResponse,
  UpdateEntranceRequest,
  UpdateEntranceResponse} from './entrances_pb';

export class MruVEntrancesServiceClient {
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

  methodInfoCreateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateEntranceResponse,
    (request: CreateEntranceRequest) => {
      return request.serializeBinary();
    },
    CreateEntranceResponse.deserializeBinary
  );

  createEntrance(
    request: CreateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/CreateEntrance',
      request,
      metadata || {},
      this.methodInfoCreateEntrance,
      callback);
  }

  methodInfoGetEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    GetEntranceResponse,
    (request: GetEntranceRequest) => {
      return request.serializeBinary();
    },
    GetEntranceResponse.deserializeBinary
  );

  getEntrance(
    request: GetEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/GetEntrance',
      request,
      metadata || {},
      this.methodInfoGetEntrance,
      callback);
  }

  methodInfoUpdateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateEntranceResponse,
    (request: UpdateEntranceRequest) => {
      return request.serializeBinary();
    },
    UpdateEntranceResponse.deserializeBinary
  );

  updateEntrance(
    request: UpdateEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/UpdateEntrance',
      request,
      metadata || {},
      this.methodInfoUpdateEntrance,
      callback);
  }

  methodInfoDeleteEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteEntranceResponse,
    (request: DeleteEntranceRequest) => {
      return request.serializeBinary();
    },
    DeleteEntranceResponse.deserializeBinary
  );

  deleteEntrance(
    request: DeleteEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/DeleteEntrance',
      request,
      metadata || {},
      this.methodInfoDeleteEntrance,
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
        '/mruv.entrances.MruVEntrancesService/Lock',
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
        '/mruv.entrances.MruVEntrancesService/Unlock',
      request,
      metadata || {},
      this.methodInfoUnlock,
      callback);
  }

  methodInfoFindNearestEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    FindNearestEntranceResponse,
    (request: FindNearestEntranceRequest) => {
      return request.serializeBinary();
    },
    FindNearestEntranceResponse.deserializeBinary
  );

  findNearestEntrance(
    request: FindNearestEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FindNearestEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/FindNearestEntrance',
      request,
      metadata || {},
      this.methodInfoFindNearestEntrance,
      callback);
  }

  methodInfoEnter = new grpcWeb.AbstractClientBase.MethodInfo(
    EnterResponse,
    (request: EnterRequest) => {
      return request.serializeBinary();
    },
    EnterResponse.deserializeBinary
  );

  enter(
    request: EnterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EnterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/Enter',
      request,
      metadata || {},
      this.methodInfoEnter,
      callback);
  }

  methodInfoExit = new grpcWeb.AbstractClientBase.MethodInfo(
    ExitResponse,
    (request: ExitRequest) => {
      return request.serializeBinary();
    },
    ExitResponse.deserializeBinary
  );

  exit(
    request: ExitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExitResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/Exit',
      request,
      metadata || {},
      this.methodInfoExit,
      callback);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchAllEntrancesResponse,
    (request: FetchAllEntrancesRequest) => {
      return request.serializeBinary();
    },
    FetchAllEntrancesResponse.deserializeBinary
  );

  fetchAll(
    request: FetchAllEntrancesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.entrances.MruVEntrancesService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

