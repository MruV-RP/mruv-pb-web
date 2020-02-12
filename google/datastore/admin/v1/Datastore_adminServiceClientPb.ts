/**
 * @fileoverview gRPC-Web generated client stub for google.datastore.admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_datastore_admin_v1_index_pb from '../../../../google/datastore/admin/v1/index_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  ExportEntitiesRequest,
  GetIndexRequest,
  ImportEntitiesRequest,
  ListIndexesRequest,
  ListIndexesResponse} from './datastore_admin_pb';

export class DatastoreAdminClient {
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

  methodInfoExportEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportEntitiesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportEntities(
    request: ExportEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.admin.v1.DatastoreAdmin/ExportEntities',
      request,
      metadata || {},
      this.methodInfoExportEntities,
      callback);
  }

  methodInfoImportEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportEntitiesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importEntities(
    request: ImportEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.admin.v1.DatastoreAdmin/ImportEntities',
      request,
      metadata || {},
      this.methodInfoImportEntities,
      callback);
  }

  methodInfoGetIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    google_datastore_admin_v1_index_pb.Index,
    (request: GetIndexRequest) => {
      return request.serializeBinary();
    },
    google_datastore_admin_v1_index_pb.Index.deserializeBinary
  );

  getIndex(
    request: GetIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_datastore_admin_v1_index_pb.Index) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.datastore.admin.v1.DatastoreAdmin/GetIndex',
      request,
      metadata || {},
      this.methodInfoGetIndex,
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
        '/google.datastore.admin.v1.DatastoreAdmin/ListIndexes',
      request,
      metadata || {},
      this.methodInfoListIndexes,
      callback);
  }

}

