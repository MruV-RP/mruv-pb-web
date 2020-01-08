/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.admin.instance.v1
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
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateInstanceRequest,
  DeleteInstanceRequest,
  GetInstanceConfigRequest,
  GetInstanceRequest,
  Instance,
  InstanceConfig,
  ListInstanceConfigsRequest,
  ListInstanceConfigsResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  UpdateInstanceRequest} from './spanner_instance_admin_pb';

export class InstanceAdminClient {
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

  methodInfoListInstanceConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInstanceConfigsResponse,
    (request: ListInstanceConfigsRequest) => {
      return request.serializeBinary();
    },
    ListInstanceConfigsResponse.deserializeBinary
  );

  listInstanceConfigs(
    request: ListInstanceConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInstanceConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstanceConfigs',
      request,
      metadata || {},
      this.methodInfoListInstanceConfigs,
      callback);
  }

  methodInfoGetInstanceConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    InstanceConfig,
    (request: GetInstanceConfigRequest) => {
      return request.serializeBinary();
    },
    InstanceConfig.deserializeBinary
  );

  getInstanceConfig(
    request: GetInstanceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InstanceConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstanceConfig',
      request,
      metadata || {},
      this.methodInfoGetInstanceConfig,
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/ListInstances',
      request,
      metadata || {},
      this.methodInfoListInstances,
      callback);
  }

  methodInfoGetInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    Instance,
    (request: GetInstanceRequest) => {
      return request.serializeBinary();
    },
    Instance.deserializeBinary
  );

  getInstance(
    request: GetInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Instance) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.instance.v1.InstanceAdmin/GetInstance',
      request,
      metadata || {},
      this.methodInfoGetInstance,
      callback);
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/CreateInstance',
      request,
      metadata || {},
      this.methodInfoCreateInstance,
      callback);
  }

  methodInfoUpdateInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateInstance(
    request: UpdateInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.spanner.admin.instance.v1.InstanceAdmin/UpdateInstance',
      request,
      metadata || {},
      this.methodInfoUpdateInstance,
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/DeleteInstance',
      request,
      metadata || {},
      this.methodInfoDeleteInstance,
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/SetIamPolicy',
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/GetIamPolicy',
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
        '/google.spanner.admin.instance.v1.InstanceAdmin/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

}

