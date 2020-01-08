/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.admin.database.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateDatabaseRequest,
  Database,
  DropDatabaseRequest,
  GetDatabaseDdlRequest,
  GetDatabaseDdlResponse,
  GetDatabaseRequest,
  ListDatabasesRequest,
  ListDatabasesResponse,
  UpdateDatabaseDdlRequest} from './spanner_database_admin_pb';

export class DatabaseAdminClient {
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

  methodInfoListDatabases = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDatabasesResponse,
    (request: ListDatabasesRequest) => {
      return request.serializeBinary();
    },
    ListDatabasesResponse.deserializeBinary
  );

  listDatabases(
    request: ListDatabasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDatabasesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/ListDatabases',
      request,
      metadata || {},
      this.methodInfoListDatabases,
      callback);
  }

  methodInfoCreateDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateDatabaseRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createDatabase(
    request: CreateDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/CreateDatabase',
      request,
      metadata || {},
      this.methodInfoCreateDatabase,
      callback);
  }

  methodInfoGetDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    Database,
    (request: GetDatabaseRequest) => {
      return request.serializeBinary();
    },
    Database.deserializeBinary
  );

  getDatabase(
    request: GetDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Database) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabase',
      request,
      metadata || {},
      this.methodInfoGetDatabase,
      callback);
  }

  methodInfoUpdateDatabaseDdl = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateDatabaseDdlRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateDatabaseDdl(
    request: UpdateDatabaseDdlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/UpdateDatabaseDdl',
      request,
      metadata || {},
      this.methodInfoUpdateDatabaseDdl,
      callback);
  }

  methodInfoDropDatabase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DropDatabaseRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  dropDatabase(
    request: DropDatabaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/DropDatabase',
      request,
      metadata || {},
      this.methodInfoDropDatabase,
      callback);
  }

  methodInfoGetDatabaseDdl = new grpcWeb.AbstractClientBase.MethodInfo(
    GetDatabaseDdlResponse,
    (request: GetDatabaseDdlRequest) => {
      return request.serializeBinary();
    },
    GetDatabaseDdlResponse.deserializeBinary
  );

  getDatabaseDdl(
    request: GetDatabaseDdlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetDatabaseDdlResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabaseDdl',
      request,
      metadata || {},
      this.methodInfoGetDatabaseDdl,
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
        '/google.spanner.admin.database.v1.DatabaseAdmin/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
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
        '/google.spanner.admin.database.v1.DatabaseAdmin/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
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
        '/google.spanner.admin.database.v1.DatabaseAdmin/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

