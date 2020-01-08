/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_bigtable_admin_v2_table_pb from '../../../../google/bigtable/admin/v2/table_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CheckConsistencyRequest,
  CheckConsistencyResponse,
  CreateTableFromSnapshotRequest,
  CreateTableRequest,
  DeleteSnapshotRequest,
  DeleteTableRequest,
  DropRowRangeRequest,
  GenerateConsistencyTokenRequest,
  GenerateConsistencyTokenResponse,
  GetSnapshotRequest,
  GetTableRequest,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListTablesRequest,
  ListTablesResponse,
  ModifyColumnFamiliesRequest,
  SnapshotTableRequest} from './bigtable_table_admin_pb';

export class BigtableTableAdminClient {
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
    google_bigtable_admin_v2_table_pb.Table,
    (request: CreateTableRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_table_pb.Table.deserializeBinary
  );

  createTable(
    request: CreateTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTable',
      request,
      metadata || {},
      this.methodInfoCreateTable,
      callback);
  }

  methodInfoCreateTableFromSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateTableFromSnapshotRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createTableFromSnapshot(
    request: CreateTableFromSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTableFromSnapshot',
      request,
      metadata || {},
      this.methodInfoCreateTableFromSnapshot,
      callback);
  }

  methodInfoListTables = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTablesResponse,
    (request: ListTablesRequest) => {
      return request.serializeBinary();
    },
    ListTablesResponse.deserializeBinary
  );

  listTables(
    request: ListTablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTablesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/ListTables',
      request,
      metadata || {},
      this.methodInfoListTables,
      callback);
  }

  methodInfoGetTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_table_pb.Table,
    (request: GetTableRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_table_pb.Table.deserializeBinary
  );

  getTable(
    request: GetTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/GetTable',
      request,
      metadata || {},
      this.methodInfoGetTable,
      callback);
  }

  methodInfoDeleteTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTableRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTable(
    request: DeleteTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteTable',
      request,
      metadata || {},
      this.methodInfoDeleteTable,
      callback);
  }

  methodInfoModifyColumnFamilies = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_table_pb.Table,
    (request: ModifyColumnFamiliesRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_table_pb.Table.deserializeBinary
  );

  modifyColumnFamilies(
    request: ModifyColumnFamiliesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Table) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/ModifyColumnFamilies',
      request,
      metadata || {},
      this.methodInfoModifyColumnFamilies,
      callback);
  }

  methodInfoDropRowRange = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DropRowRangeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  dropRowRange(
    request: DropRowRangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/DropRowRange',
      request,
      metadata || {},
      this.methodInfoDropRowRange,
      callback);
  }

  methodInfoGenerateConsistencyToken = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateConsistencyTokenResponse,
    (request: GenerateConsistencyTokenRequest) => {
      return request.serializeBinary();
    },
    GenerateConsistencyTokenResponse.deserializeBinary
  );

  generateConsistencyToken(
    request: GenerateConsistencyTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateConsistencyTokenResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/GenerateConsistencyToken',
      request,
      metadata || {},
      this.methodInfoGenerateConsistencyToken,
      callback);
  }

  methodInfoCheckConsistency = new grpcWeb.AbstractClientBase.MethodInfo(
    CheckConsistencyResponse,
    (request: CheckConsistencyRequest) => {
      return request.serializeBinary();
    },
    CheckConsistencyResponse.deserializeBinary
  );

  checkConsistency(
    request: CheckConsistencyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CheckConsistencyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/CheckConsistency',
      request,
      metadata || {},
      this.methodInfoCheckConsistency,
      callback);
  }

  methodInfoSnapshotTable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: SnapshotTableRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  snapshotTable(
    request: SnapshotTableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/SnapshotTable',
      request,
      metadata || {},
      this.methodInfoSnapshotTable,
      callback);
  }

  methodInfoGetSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_table_pb.Snapshot,
    (request: GetSnapshotRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_table_pb.Snapshot.deserializeBinary
  );

  getSnapshot(
    request: GetSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_table_pb.Snapshot) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/GetSnapshot',
      request,
      metadata || {},
      this.methodInfoGetSnapshot,
      callback);
  }

  methodInfoListSnapshots = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSnapshotsResponse,
    (request: ListSnapshotsRequest) => {
      return request.serializeBinary();
    },
    ListSnapshotsResponse.deserializeBinary
  );

  listSnapshots(
    request: ListSnapshotsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSnapshotsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/ListSnapshots',
      request,
      metadata || {},
      this.methodInfoListSnapshots,
      callback);
  }

  methodInfoDeleteSnapshot = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSnapshotRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSnapshot(
    request: DeleteSnapshotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteSnapshot',
      request,
      metadata || {},
      this.methodInfoDeleteSnapshot,
      callback);
  }

  methodInfoGetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoSetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
      callback);
  }

  methodInfoTestIamPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    (request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
  );

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableTableAdmin/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

