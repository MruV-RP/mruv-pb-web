/**
 * @fileoverview gRPC-Web generated client stub for google.iam.admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateRoleRequest,
  CreateServiceAccountKeyRequest,
  CreateServiceAccountRequest,
  DeleteRoleRequest,
  DeleteServiceAccountKeyRequest,
  DeleteServiceAccountRequest,
  GetRoleRequest,
  GetServiceAccountKeyRequest,
  GetServiceAccountRequest,
  ListRolesRequest,
  ListRolesResponse,
  ListServiceAccountKeysRequest,
  ListServiceAccountKeysResponse,
  ListServiceAccountsRequest,
  ListServiceAccountsResponse,
  QueryGrantableRolesRequest,
  QueryGrantableRolesResponse,
  QueryTestablePermissionsRequest,
  QueryTestablePermissionsResponse,
  Role,
  ServiceAccount,
  ServiceAccountKey,
  SignBlobRequest,
  SignBlobResponse,
  SignJwtRequest,
  SignJwtResponse,
  UndeleteRoleRequest,
  UpdateRoleRequest} from './iam_pb';

export class IAMClient {
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

  methodInfoListServiceAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServiceAccountsResponse,
    (request: ListServiceAccountsRequest) => {
      return request.serializeBinary();
    },
    ListServiceAccountsResponse.deserializeBinary
  );

  listServiceAccounts(
    request: ListServiceAccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServiceAccountsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/ListServiceAccounts',
      request,
      metadata || {},
      this.methodInfoListServiceAccounts,
      callback);
  }

  methodInfoGetServiceAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    ServiceAccount,
    (request: GetServiceAccountRequest) => {
      return request.serializeBinary();
    },
    ServiceAccount.deserializeBinary
  );

  getServiceAccount(
    request: GetServiceAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServiceAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/GetServiceAccount',
      request,
      metadata || {},
      this.methodInfoGetServiceAccount,
      callback);
  }

  methodInfoCreateServiceAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    ServiceAccount,
    (request: CreateServiceAccountRequest) => {
      return request.serializeBinary();
    },
    ServiceAccount.deserializeBinary
  );

  createServiceAccount(
    request: CreateServiceAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServiceAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/CreateServiceAccount',
      request,
      metadata || {},
      this.methodInfoCreateServiceAccount,
      callback);
  }

  methodInfoUpdateServiceAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    ServiceAccount,
    (request: ServiceAccount) => {
      return request.serializeBinary();
    },
    ServiceAccount.deserializeBinary
  );

  updateServiceAccount(
    request: ServiceAccount,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServiceAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/UpdateServiceAccount',
      request,
      metadata || {},
      this.methodInfoUpdateServiceAccount,
      callback);
  }

  methodInfoDeleteServiceAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteServiceAccountRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServiceAccount(
    request: DeleteServiceAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/DeleteServiceAccount',
      request,
      metadata || {},
      this.methodInfoDeleteServiceAccount,
      callback);
  }

  methodInfoListServiceAccountKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServiceAccountKeysResponse,
    (request: ListServiceAccountKeysRequest) => {
      return request.serializeBinary();
    },
    ListServiceAccountKeysResponse.deserializeBinary
  );

  listServiceAccountKeys(
    request: ListServiceAccountKeysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServiceAccountKeysResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/ListServiceAccountKeys',
      request,
      metadata || {},
      this.methodInfoListServiceAccountKeys,
      callback);
  }

  methodInfoGetServiceAccountKey = new grpcWeb.AbstractClientBase.MethodInfo(
    ServiceAccountKey,
    (request: GetServiceAccountKeyRequest) => {
      return request.serializeBinary();
    },
    ServiceAccountKey.deserializeBinary
  );

  getServiceAccountKey(
    request: GetServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServiceAccountKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/GetServiceAccountKey',
      request,
      metadata || {},
      this.methodInfoGetServiceAccountKey,
      callback);
  }

  methodInfoCreateServiceAccountKey = new grpcWeb.AbstractClientBase.MethodInfo(
    ServiceAccountKey,
    (request: CreateServiceAccountKeyRequest) => {
      return request.serializeBinary();
    },
    ServiceAccountKey.deserializeBinary
  );

  createServiceAccountKey(
    request: CreateServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ServiceAccountKey) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/CreateServiceAccountKey',
      request,
      metadata || {},
      this.methodInfoCreateServiceAccountKey,
      callback);
  }

  methodInfoDeleteServiceAccountKey = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteServiceAccountKeyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServiceAccountKey(
    request: DeleteServiceAccountKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/DeleteServiceAccountKey',
      request,
      metadata || {},
      this.methodInfoDeleteServiceAccountKey,
      callback);
  }

  methodInfoSignBlob = new grpcWeb.AbstractClientBase.MethodInfo(
    SignBlobResponse,
    (request: SignBlobRequest) => {
      return request.serializeBinary();
    },
    SignBlobResponse.deserializeBinary
  );

  signBlob(
    request: SignBlobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SignBlobResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/SignBlob',
      request,
      metadata || {},
      this.methodInfoSignBlob,
      callback);
  }

  methodInfoSignJwt = new grpcWeb.AbstractClientBase.MethodInfo(
    SignJwtResponse,
    (request: SignJwtRequest) => {
      return request.serializeBinary();
    },
    SignJwtResponse.deserializeBinary
  );

  signJwt(
    request: SignJwtRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SignJwtResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/SignJwt',
      request,
      metadata || {},
      this.methodInfoSignJwt,
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
        '/google.iam.admin.v1.IAM/GetIamPolicy',
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
        '/google.iam.admin.v1.IAM/SetIamPolicy',
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
        '/google.iam.admin.v1.IAM/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

  methodInfoQueryGrantableRoles = new grpcWeb.AbstractClientBase.MethodInfo(
    QueryGrantableRolesResponse,
    (request: QueryGrantableRolesRequest) => {
      return request.serializeBinary();
    },
    QueryGrantableRolesResponse.deserializeBinary
  );

  queryGrantableRoles(
    request: QueryGrantableRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: QueryGrantableRolesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/QueryGrantableRoles',
      request,
      metadata || {},
      this.methodInfoQueryGrantableRoles,
      callback);
  }

  methodInfoListRoles = new grpcWeb.AbstractClientBase.MethodInfo(
    ListRolesResponse,
    (request: ListRolesRequest) => {
      return request.serializeBinary();
    },
    ListRolesResponse.deserializeBinary
  );

  listRoles(
    request: ListRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListRolesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/ListRoles',
      request,
      metadata || {},
      this.methodInfoListRoles,
      callback);
  }

  methodInfoGetRole = new grpcWeb.AbstractClientBase.MethodInfo(
    Role,
    (request: GetRoleRequest) => {
      return request.serializeBinary();
    },
    Role.deserializeBinary
  );

  getRole(
    request: GetRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Role) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/GetRole',
      request,
      metadata || {},
      this.methodInfoGetRole,
      callback);
  }

  methodInfoCreateRole = new grpcWeb.AbstractClientBase.MethodInfo(
    Role,
    (request: CreateRoleRequest) => {
      return request.serializeBinary();
    },
    Role.deserializeBinary
  );

  createRole(
    request: CreateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Role) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/CreateRole',
      request,
      metadata || {},
      this.methodInfoCreateRole,
      callback);
  }

  methodInfoUpdateRole = new grpcWeb.AbstractClientBase.MethodInfo(
    Role,
    (request: UpdateRoleRequest) => {
      return request.serializeBinary();
    },
    Role.deserializeBinary
  );

  updateRole(
    request: UpdateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Role) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/UpdateRole',
      request,
      metadata || {},
      this.methodInfoUpdateRole,
      callback);
  }

  methodInfoDeleteRole = new grpcWeb.AbstractClientBase.MethodInfo(
    Role,
    (request: DeleteRoleRequest) => {
      return request.serializeBinary();
    },
    Role.deserializeBinary
  );

  deleteRole(
    request: DeleteRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Role) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/DeleteRole',
      request,
      metadata || {},
      this.methodInfoDeleteRole,
      callback);
  }

  methodInfoUndeleteRole = new grpcWeb.AbstractClientBase.MethodInfo(
    Role,
    (request: UndeleteRoleRequest) => {
      return request.serializeBinary();
    },
    Role.deserializeBinary
  );

  undeleteRole(
    request: UndeleteRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Role) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/UndeleteRole',
      request,
      metadata || {},
      this.methodInfoUndeleteRole,
      callback);
  }

  methodInfoQueryTestablePermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    QueryTestablePermissionsResponse,
    (request: QueryTestablePermissionsRequest) => {
      return request.serializeBinary();
    },
    QueryTestablePermissionsResponse.deserializeBinary
  );

  queryTestablePermissions(
    request: QueryTestablePermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: QueryTestablePermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.iam.admin.v1.IAM/QueryTestablePermissions',
      request,
      metadata || {},
      this.methodInfoQueryTestablePermissions,
      callback);
  }

}

