/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.connection.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  Connection,
  CreateConnectionRequest,
  DeleteConnectionRequest,
  GetConnectionRequest,
  ListConnectionsRequest,
  ListConnectionsResponse,
  UpdateConnectionCredentialRequest,
  UpdateConnectionRequest} from './connection_pb';

export class ConnectionServiceClient {
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

  methodInfoCreateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    Connection,
    (request: CreateConnectionRequest) => {
      return request.serializeBinary();
    },
    Connection.deserializeBinary
  );

  createConnection(
    request: CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Connection) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/CreateConnection',
      request,
      metadata || {},
      this.methodInfoCreateConnection,
      callback);
  }

  methodInfoGetConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    Connection,
    (request: GetConnectionRequest) => {
      return request.serializeBinary();
    },
    Connection.deserializeBinary
  );

  getConnection(
    request: GetConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Connection) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/GetConnection',
      request,
      metadata || {},
      this.methodInfoGetConnection,
      callback);
  }

  methodInfoListConnections = new grpcWeb.AbstractClientBase.MethodInfo(
    ListConnectionsResponse,
    (request: ListConnectionsRequest) => {
      return request.serializeBinary();
    },
    ListConnectionsResponse.deserializeBinary
  );

  listConnections(
    request: ListConnectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListConnectionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/ListConnections',
      request,
      metadata || {},
      this.methodInfoListConnections,
      callback);
  }

  methodInfoUpdateConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    Connection,
    (request: UpdateConnectionRequest) => {
      return request.serializeBinary();
    },
    Connection.deserializeBinary
  );

  updateConnection(
    request: UpdateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Connection) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/UpdateConnection',
      request,
      metadata || {},
      this.methodInfoUpdateConnection,
      callback);
  }

  methodInfoUpdateConnectionCredential = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: UpdateConnectionCredentialRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateConnectionCredential(
    request: UpdateConnectionCredentialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/UpdateConnectionCredential',
      request,
      metadata || {},
      this.methodInfoUpdateConnectionCredential,
      callback);
  }

  methodInfoDeleteConnection = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteConnectionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteConnection(
    request: DeleteConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/DeleteConnection',
      request,
      metadata || {},
      this.methodInfoDeleteConnection,
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
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/GetIamPolicy',
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
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/SetIamPolicy',
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
        '/google.cloud.bigquery.connection.v1beta1.ConnectionService/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

