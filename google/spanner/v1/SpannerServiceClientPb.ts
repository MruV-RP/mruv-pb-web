/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';
import * as google_spanner_v1_keys_pb from '../../../google/spanner/v1/keys_pb';
import * as google_spanner_v1_mutation_pb from '../../../google/spanner/v1/mutation_pb';
import * as google_spanner_v1_result_set_pb from '../../../google/spanner/v1/result_set_pb';
import * as google_spanner_v1_transaction_pb from '../../../google/spanner/v1/transaction_pb';
import * as google_spanner_v1_type_pb from '../../../google/spanner/v1/type_pb';

import {
  BatchCreateSessionsRequest,
  BatchCreateSessionsResponse,
  BeginTransactionRequest,
  CommitRequest,
  CommitResponse,
  CreateSessionRequest,
  DeleteSessionRequest,
  ExecuteBatchDmlRequest,
  ExecuteBatchDmlResponse,
  ExecuteSqlRequest,
  GetSessionRequest,
  ListSessionsRequest,
  ListSessionsResponse,
  PartitionQueryRequest,
  PartitionReadRequest,
  PartitionResponse,
  ReadRequest,
  RollbackRequest,
  Session} from './spanner_pb';

export class SpannerClient {
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

  methodInfoCreateSession = new grpcWeb.AbstractClientBase.MethodInfo(
    Session,
    (request: CreateSessionRequest) => {
      return request.serializeBinary();
    },
    Session.deserializeBinary
  );

  createSession(
    request: CreateSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Session) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/CreateSession',
      request,
      metadata || {},
      this.methodInfoCreateSession,
      callback);
  }

  methodInfoBatchCreateSessions = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchCreateSessionsResponse,
    (request: BatchCreateSessionsRequest) => {
      return request.serializeBinary();
    },
    BatchCreateSessionsResponse.deserializeBinary
  );

  batchCreateSessions(
    request: BatchCreateSessionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchCreateSessionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/BatchCreateSessions',
      request,
      metadata || {},
      this.methodInfoBatchCreateSessions,
      callback);
  }

  methodInfoGetSession = new grpcWeb.AbstractClientBase.MethodInfo(
    Session,
    (request: GetSessionRequest) => {
      return request.serializeBinary();
    },
    Session.deserializeBinary
  );

  getSession(
    request: GetSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Session) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/GetSession',
      request,
      metadata || {},
      this.methodInfoGetSession,
      callback);
  }

  methodInfoListSessions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSessionsResponse,
    (request: ListSessionsRequest) => {
      return request.serializeBinary();
    },
    ListSessionsResponse.deserializeBinary
  );

  listSessions(
    request: ListSessionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSessionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/ListSessions',
      request,
      metadata || {},
      this.methodInfoListSessions,
      callback);
  }

  methodInfoDeleteSession = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSessionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSession(
    request: DeleteSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/DeleteSession',
      request,
      metadata || {},
      this.methodInfoDeleteSession,
      callback);
  }

  methodInfoExecuteSql = new grpcWeb.AbstractClientBase.MethodInfo(
    google_spanner_v1_result_set_pb.ResultSet,
    (request: ExecuteSqlRequest) => {
      return request.serializeBinary();
    },
    google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
  );

  executeSql(
    request: ExecuteSqlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_result_set_pb.ResultSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/ExecuteSql',
      request,
      metadata || {},
      this.methodInfoExecuteSql,
      callback);
  }

  methodInfoExecuteStreamingSql = new grpcWeb.AbstractClientBase.MethodInfo(
    google_spanner_v1_result_set_pb.PartialResultSet,
    (request: ExecuteSqlRequest) => {
      return request.serializeBinary();
    },
    google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
  );

  executeStreamingSql(
    request: ExecuteSqlRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.spanner.v1.Spanner/ExecuteStreamingSql',
      request,
      metadata || {},
      this.methodInfoExecuteStreamingSql);
  }

  methodInfoExecuteBatchDml = new grpcWeb.AbstractClientBase.MethodInfo(
    ExecuteBatchDmlResponse,
    (request: ExecuteBatchDmlRequest) => {
      return request.serializeBinary();
    },
    ExecuteBatchDmlResponse.deserializeBinary
  );

  executeBatchDml(
    request: ExecuteBatchDmlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExecuteBatchDmlResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/ExecuteBatchDml',
      request,
      metadata || {},
      this.methodInfoExecuteBatchDml,
      callback);
  }

  methodInfoRead = new grpcWeb.AbstractClientBase.MethodInfo(
    google_spanner_v1_result_set_pb.ResultSet,
    (request: ReadRequest) => {
      return request.serializeBinary();
    },
    google_spanner_v1_result_set_pb.ResultSet.deserializeBinary
  );

  read(
    request: ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_result_set_pb.ResultSet) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/Read',
      request,
      metadata || {},
      this.methodInfoRead,
      callback);
  }

  methodInfoStreamingRead = new grpcWeb.AbstractClientBase.MethodInfo(
    google_spanner_v1_result_set_pb.PartialResultSet,
    (request: ReadRequest) => {
      return request.serializeBinary();
    },
    google_spanner_v1_result_set_pb.PartialResultSet.deserializeBinary
  );

  streamingRead(
    request: ReadRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.spanner.v1.Spanner/StreamingRead',
      request,
      metadata || {},
      this.methodInfoStreamingRead);
  }

  methodInfoBeginTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    google_spanner_v1_transaction_pb.Transaction,
    (request: BeginTransactionRequest) => {
      return request.serializeBinary();
    },
    google_spanner_v1_transaction_pb.Transaction.deserializeBinary
  );

  beginTransaction(
    request: BeginTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_spanner_v1_transaction_pb.Transaction) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/BeginTransaction',
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
        '/google.spanner.v1.Spanner/Commit',
      request,
      metadata || {},
      this.methodInfoCommit,
      callback);
  }

  methodInfoRollback = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: RollbackRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  rollback(
    request: RollbackRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/Rollback',
      request,
      metadata || {},
      this.methodInfoRollback,
      callback);
  }

  methodInfoPartitionQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    PartitionResponse,
    (request: PartitionQueryRequest) => {
      return request.serializeBinary();
    },
    PartitionResponse.deserializeBinary
  );

  partitionQuery(
    request: PartitionQueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PartitionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/PartitionQuery',
      request,
      metadata || {},
      this.methodInfoPartitionQuery,
      callback);
  }

  methodInfoPartitionRead = new grpcWeb.AbstractClientBase.MethodInfo(
    PartitionResponse,
    (request: PartitionReadRequest) => {
      return request.serializeBinary();
    },
    PartitionResponse.deserializeBinary
  );

  partitionRead(
    request: PartitionReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PartitionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.v1.Spanner/PartitionRead',
      request,
      metadata || {},
      this.methodInfoPartitionRead,
      callback);
  }

}

