/**
 * @fileoverview gRPC-Web generated client stub for google.firestore.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_firestore_v1beta1_common_pb from '../../../google/firestore/v1beta1/common_pb';
import * as google_firestore_v1beta1_document_pb from '../../../google/firestore/v1beta1/document_pb';
import * as google_firestore_v1beta1_query_pb from '../../../google/firestore/v1beta1/query_pb';
import * as google_firestore_v1beta1_write_pb from '../../../google/firestore/v1beta1/write_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  BatchGetDocumentsRequest,
  BatchGetDocumentsResponse,
  BeginTransactionRequest,
  BeginTransactionResponse,
  CommitRequest,
  CommitResponse,
  CreateDocumentRequest,
  DeleteDocumentRequest,
  GetDocumentRequest,
  ListCollectionIdsRequest,
  ListCollectionIdsResponse,
  ListDocumentsRequest,
  ListDocumentsResponse,
  ListenRequest,
  ListenResponse,
  RollbackRequest,
  RunQueryRequest,
  RunQueryResponse,
  UpdateDocumentRequest,
  WriteRequest,
  WriteResponse} from './firestore_pb';

export class FirestoreClient {
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

  methodInfoGetDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_firestore_v1beta1_document_pb.Document,
    (request: GetDocumentRequest) => {
      return request.serializeBinary();
    },
    google_firestore_v1beta1_document_pb.Document.deserializeBinary
  );

  getDocument(
    request: GetDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/GetDocument',
      request,
      metadata || {},
      this.methodInfoGetDocument,
      callback);
  }

  methodInfoListDocuments = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDocumentsResponse,
    (request: ListDocumentsRequest) => {
      return request.serializeBinary();
    },
    ListDocumentsResponse.deserializeBinary
  );

  listDocuments(
    request: ListDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDocumentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/ListDocuments',
      request,
      metadata || {},
      this.methodInfoListDocuments,
      callback);
  }

  methodInfoCreateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_firestore_v1beta1_document_pb.Document,
    (request: CreateDocumentRequest) => {
      return request.serializeBinary();
    },
    google_firestore_v1beta1_document_pb.Document.deserializeBinary
  );

  createDocument(
    request: CreateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/CreateDocument',
      request,
      metadata || {},
      this.methodInfoCreateDocument,
      callback);
  }

  methodInfoUpdateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_firestore_v1beta1_document_pb.Document,
    (request: UpdateDocumentRequest) => {
      return request.serializeBinary();
    },
    google_firestore_v1beta1_document_pb.Document.deserializeBinary
  );

  updateDocument(
    request: UpdateDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_firestore_v1beta1_document_pb.Document) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/UpdateDocument',
      request,
      metadata || {},
      this.methodInfoUpdateDocument,
      callback);
  }

  methodInfoDeleteDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDocumentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDocument(
    request: DeleteDocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/DeleteDocument',
      request,
      metadata || {},
      this.methodInfoDeleteDocument,
      callback);
  }

  methodInfoBatchGetDocuments = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchGetDocumentsResponse,
    (request: BatchGetDocumentsRequest) => {
      return request.serializeBinary();
    },
    BatchGetDocumentsResponse.deserializeBinary
  );

  batchGetDocuments(
    request: BatchGetDocumentsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/BatchGetDocuments',
      request,
      metadata || {},
      this.methodInfoBatchGetDocuments);
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
        '/google.firestore.v1beta1.Firestore/BeginTransaction',
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
        '/google.firestore.v1beta1.Firestore/Commit',
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
        '/google.firestore.v1beta1.Firestore/Rollback',
      request,
      metadata || {},
      this.methodInfoRollback,
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
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/RunQuery',
      request,
      metadata || {},
      this.methodInfoRunQuery);
  }

  methodInfoListCollectionIds = new grpcWeb.AbstractClientBase.MethodInfo(
    ListCollectionIdsResponse,
    (request: ListCollectionIdsRequest) => {
      return request.serializeBinary();
    },
    ListCollectionIdsResponse.deserializeBinary
  );

  listCollectionIds(
    request: ListCollectionIdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListCollectionIdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.v1beta1.Firestore/ListCollectionIds',
      request,
      metadata || {},
      this.methodInfoListCollectionIds,
      callback);
  }

}

