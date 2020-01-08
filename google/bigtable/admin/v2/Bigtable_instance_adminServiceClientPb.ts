/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_bigtable_admin_v2_instance_pb from '../../../../google/bigtable/admin/v2/instance_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateAppProfileRequest,
  CreateClusterRequest,
  CreateInstanceRequest,
  DeleteAppProfileRequest,
  DeleteClusterRequest,
  DeleteInstanceRequest,
  GetAppProfileRequest,
  GetClusterRequest,
  GetInstanceRequest,
  ListAppProfilesRequest,
  ListAppProfilesResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  PartialUpdateInstanceRequest,
  UpdateAppProfileRequest} from './bigtable_instance_admin_pb';

export class BigtableInstanceAdminClient {
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

  methodInfoCreateInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createInstance(
    request: CreateInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateInstance',
      request,
      metadata || {},
      this.methodInfoCreateInstance,
      callback);
  }

  methodInfoGetInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_instance_pb.Instance,
    (request: GetInstanceRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
  );

  getInstance(
    request: GetInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Instance) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetInstance',
      request,
      metadata || {},
      this.methodInfoGetInstance,
      callback);
  }

  methodInfoListInstances = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInstancesResponse,
    (request: ListInstancesRequest) => {
      return request.serializeBinary();
    },
    ListInstancesResponse.deserializeBinary
  );

  listInstances(
    request: ListInstancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInstancesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListInstances',
      request,
      metadata || {},
      this.methodInfoListInstances,
      callback);
  }

  methodInfoUpdateInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_instance_pb.Instance,
    (request: google_bigtable_admin_v2_instance_pb.Instance) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_instance_pb.Instance.deserializeBinary
  );

  updateInstance(
    request: google_bigtable_admin_v2_instance_pb.Instance,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Instance) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      this.methodInfoUpdateInstance,
      callback);
  }

  methodInfoPartialUpdateInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: PartialUpdateInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  partialUpdateInstance(
    request: PartialUpdateInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/PartialUpdateInstance',
      request,
      metadata || {},
      this.methodInfoPartialUpdateInstance,
      callback);
  }

  methodInfoDeleteInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteInstanceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteInstance(
    request: DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      this.methodInfoDeleteInstance,
      callback);
  }

  methodInfoCreateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateClusterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createCluster(
    request: CreateClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateCluster',
      request,
      metadata || {},
      this.methodInfoCreateCluster,
      callback);
  }

  methodInfoGetCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_instance_pb.Cluster,
    (request: GetClusterRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_instance_pb.Cluster.deserializeBinary
  );

  getCluster(
    request: GetClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.Cluster) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetCluster',
      request,
      metadata || {},
      this.methodInfoGetCluster,
      callback);
  }

  methodInfoListClusters = new grpcWeb.AbstractClientBase.MethodInfo(
    ListClustersResponse,
    (request: ListClustersRequest) => {
      return request.serializeBinary();
    },
    ListClustersResponse.deserializeBinary
  );

  listClusters(
    request: ListClustersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListClustersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListClusters',
      request,
      metadata || {},
      this.methodInfoListClusters,
      callback);
  }

  methodInfoUpdateCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: google_bigtable_admin_v2_instance_pb.Cluster) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateCluster(
    request: google_bigtable_admin_v2_instance_pb.Cluster,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateCluster',
      request,
      metadata || {},
      this.methodInfoUpdateCluster,
      callback);
  }

  methodInfoDeleteCluster = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteClusterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteCluster(
    request: DeleteClusterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteCluster',
      request,
      metadata || {},
      this.methodInfoDeleteCluster,
      callback);
  }

  methodInfoCreateAppProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_instance_pb.AppProfile,
    (request: CreateAppProfileRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
  );

  createAppProfile(
    request: CreateAppProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.AppProfile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/CreateAppProfile',
      request,
      metadata || {},
      this.methodInfoCreateAppProfile,
      callback);
  }

  methodInfoGetAppProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_admin_v2_instance_pb.AppProfile,
    (request: GetAppProfileRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_admin_v2_instance_pb.AppProfile.deserializeBinary
  );

  getAppProfile(
    request: GetAppProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_admin_v2_instance_pb.AppProfile) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetAppProfile',
      request,
      metadata || {},
      this.methodInfoGetAppProfile,
      callback);
  }

  methodInfoListAppProfiles = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAppProfilesResponse,
    (request: ListAppProfilesRequest) => {
      return request.serializeBinary();
    },
    ListAppProfilesResponse.deserializeBinary
  );

  listAppProfiles(
    request: ListAppProfilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAppProfilesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/ListAppProfiles',
      request,
      metadata || {},
      this.methodInfoListAppProfiles,
      callback);
  }

  methodInfoUpdateAppProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateAppProfileRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateAppProfile(
    request: UpdateAppProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/UpdateAppProfile',
      request,
      metadata || {},
      this.methodInfoUpdateAppProfile,
      callback);
  }

  methodInfoDeleteAppProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAppProfileRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAppProfile(
    request: DeleteAppProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/DeleteAppProfile',
      request,
      metadata || {},
      this.methodInfoDeleteAppProfile,
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
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/GetIamPolicy',
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
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/SetIamPolicy',
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
        '/google.bigtable.admin.v2.BigtableInstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

