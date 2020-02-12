/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_datastore_v1_entity_pb from '../../../google/datastore/v1/entity_pb';
import * as google_datastore_v1_query_pb from '../../../google/datastore/v1/query_pb';

import {
  AllocateIdsRequest,
  AllocateIdsResponse,
  BeginTransactionRequest,
  BeginTransactionResponse,
  CommitRequest,
  CommitResponse,
  LookupRequest,
  LookupResponse,
  ReserveIdsRequest,
  ReserveIdsResponse,
  RollbackRequest,
  RollbackResponse,
  RunQueryRequest,
  RunQueryResponse} from './datastore_pb';

export class DatastoreClient {
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

  methodInfoLookup = new grpcWeb.AbstractClientBase.MethodInfo(
    LookupResponse,
    (request: LookupRequest) => {
      return request.serializeBinary();
    },
    LookupResponse.deserializeBinary
  );

  lookup(
    request: LookupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LookupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/Lookup',
      request,
      metadata || {},
      this.methodInfoLookup,
      callback);
  }

  methodInfoRunQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    RunQueryResponse,
    (request: RunQueryRequest) => {
      return request.serializeBinary();
    },
    RunQueryResponse.deserializeBinary
  );

  runQuery(
    request: RunQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RunQueryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/RunQuery',
      request,
      metadata || {},
      this.methodInfoRunQuery,
      callback);
  }

  methodInfoBeginTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    BeginTransactionResponse,
    (request: BeginTransactionRequest) => {
      return request.serializeBinary();
    },
    BeginTransactionResponse.deserializeBinary
  );

  beginTransaction(
    request: BeginTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BeginTransactionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/BeginTransaction',
      request,
      metadata || {},
      this.methodInfoBeginTransaction,
      callback);
  }

  methodInfoCommit = new grpcWeb.AbstractClientBase.MethodInfo(
    CommitResponse,
    (request: CommitRequest) => {
      return request.serializeBinary();
    },
    CommitResponse.deserializeBinary
  );

  commit(
    request: CommitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CommitResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/Commit',
      request,
      metadata || {},
      this.methodInfoCommit,
      callback);
  }

  methodInfoRollback = new grpcWeb.AbstractClientBase.MethodInfo(
    RollbackResponse,
    (request: RollbackRequest) => {
      return request.serializeBinary();
    },
    RollbackResponse.deserializeBinary
  );

  rollback(
    request: RollbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RollbackResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/Rollback',
      request,
      metadata || {},
      this.methodInfoRollback,
      callback);
  }

  methodInfoAllocateIds = new grpcWeb.AbstractClientBase.MethodInfo(
    AllocateIdsResponse,
    (request: AllocateIdsRequest) => {
      return request.serializeBinary();
    },
    AllocateIdsResponse.deserializeBinary
  );

  allocateIds(
    request: AllocateIdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AllocateIdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/AllocateIds',
      request,
      metadata || {},
      this.methodInfoAllocateIds,
      callback);
  }

  methodInfoReserveIds = new grpcWeb.AbstractClientBase.MethodInfo(
    ReserveIdsResponse,
    (request: ReserveIdsRequest) => {
      return request.serializeBinary();
    },
    ReserveIdsResponse.deserializeBinary
  );

  reserveIds(
    request: ReserveIdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReserveIdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.v1.Datastore/ReserveIds',
      request,
      metadata || {},
      this.methodInfoReserveIds,
      callback);
  }

}

