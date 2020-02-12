/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.table.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_bigtable_admin_table_v1_bigtable_table_data_pb from '../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb';
import * as google_bigtable_admin_table_v1_bigtable_table_service_messages_pb from '../../../../../google/bigtable/admin/table/v1/bigtable_table_service_messages_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class BigtableTableServiceClient {
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

  methodInfoCreateTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
  );

  createTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/CreateTable',
      request,
      metadata || {},
      this.methodInfoCreateTable,
      callback);
  }

  methodInfoListTables = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse.deserializeBinary
  );

  listTables(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/ListTables',
      request,
      metadata || {},
      this.methodInfoListTables,
      callback);
  }

  methodInfoGetTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
  );

  getTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.Table) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/GetTable',
      request,
      metadata || {},
      this.methodInfoGetTable,
      callback);
  }

  methodInfoDeleteTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/DeleteTable',
      request,
      metadata || {},
      this.methodInfoDeleteTable,
      callback);
  }

  methodInfoRenameTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  renameTable(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/RenameTable',
      request,
      metadata || {},
      this.methodInfoRenameTable,
      callback);
  }

  methodInfoCreateColumnFamily = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
  );

  createColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/CreateColumnFamily',
      request,
      metadata || {},
      this.methodInfoCreateColumnFamily,
      callback);
  }

  methodInfoUpdateColumnFamily = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    (request: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
  );

  updateColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/UpdateColumnFamily',
      request,
      metadata || {},
      this.methodInfoUpdateColumnFamily,
      callback);
  }

  methodInfoDeleteColumnFamily = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteColumnFamily(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/DeleteColumnFamily',
      request,
      metadata || {},
      this.methodInfoDeleteColumnFamily,
      callback);
  }

  methodInfoBulkDeleteRows = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  bulkDeleteRows(
    request: google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.table.v1.BigtableTableService/BulkDeleteRows',
      request,
      metadata || {},
      this.methodInfoBulkDeleteRows,
      callback);
  }

}

