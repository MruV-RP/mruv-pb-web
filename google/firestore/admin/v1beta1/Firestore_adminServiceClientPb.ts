/**
 * @fileoverview gRPC-Web generated client stub for google.firestore.admin.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_firestore_admin_v1beta1_index_pb from '../../../../google/firestore/admin/v1beta1/index_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateIndexRequest,
  DeleteIndexRequest,
  ExportDocumentsRequest,
  GetIndexRequest,
  ImportDocumentsRequest,
  ListIndexesRequest,
  ListIndexesResponse} from './firestore_admin_pb';

export class FirestoreAdminClient {
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

  methodInfoCreateIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateIndexRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createIndex(
    request: CreateIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/CreateIndex',
      request,
      metadata || {},
      this.methodInfoCreateIndex,
      callback);
  }

  methodInfoListIndexes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListIndexesResponse,
    (request: ListIndexesRequest) => {
      return request.serializeBinary();
    },
    ListIndexesResponse.deserializeBinary
  );

  listIndexes(
    request: ListIndexesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListIndexesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/ListIndexes',
      request,
      metadata || {},
      this.methodInfoListIndexes,
      callback);
  }

  methodInfoGetIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    google_firestore_admin_v1beta1_index_pb.Index,
    (request: GetIndexRequest) => {
      return request.serializeBinary();
    },
    google_firestore_admin_v1beta1_index_pb.Index.deserializeBinary
  );

  getIndex(
    request: GetIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_firestore_admin_v1beta1_index_pb.Index) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/GetIndex',
      request,
      metadata || {},
      this.methodInfoGetIndex,
      callback);
  }

  methodInfoDeleteIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteIndexRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteIndex(
    request: DeleteIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/DeleteIndex',
      request,
      metadata || {},
      this.methodInfoDeleteIndex,
      callback);
  }

  methodInfoExportDocuments = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportDocumentsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportDocuments(
    request: ExportDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/ExportDocuments',
      request,
      metadata || {},
      this.methodInfoExportDocuments,
      callback);
  }

  methodInfoImportDocuments = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportDocumentsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importDocuments(
    request: ImportDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.firestore.admin.v1beta1.FirestoreAdmin/ImportDocuments',
      request,
      metadata || {},
      this.methodInfoImportDocuments,
      callback);
  }

}

