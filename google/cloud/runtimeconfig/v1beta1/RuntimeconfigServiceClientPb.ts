/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.runtimeconfig.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_runtimeconfig_v1beta1_resources_pb from '../../../../google/cloud/runtimeconfig/v1beta1/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateConfigRequest,
  CreateVariableRequest,
  CreateWaiterRequest,
  DeleteConfigRequest,
  DeleteVariableRequest,
  DeleteWaiterRequest,
  GetConfigRequest,
  GetVariableRequest,
  GetWaiterRequest,
  ListConfigsRequest,
  ListConfigsResponse,
  ListVariablesRequest,
  ListVariablesResponse,
  ListWaitersRequest,
  ListWaitersResponse,
  UpdateConfigRequest,
  UpdateVariableRequest,
  WatchVariableRequest} from './runtimeconfig_pb';

export class RuntimeConfigManagerClient {
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

  methodInfoListConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListConfigsResponse,
    (request: ListConfigsRequest) => {
      return request.serializeBinary();
    },
    ListConfigsResponse.deserializeBinary
  );

  listConfigs(
    request: ListConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListConfigs',
      request,
      metadata || {},
      this.methodInfoListConfigs,
      callback);
  }

  methodInfoGetConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    (request: GetConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
  );

  getConfig(
    request: GetConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetConfig',
      request,
      metadata || {},
      this.methodInfoGetConfig,
      callback);
  }

  methodInfoCreateConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    (request: CreateConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
  );

  createConfig(
    request: CreateConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateConfig',
      request,
      metadata || {},
      this.methodInfoCreateConfig,
      callback);
  }

  methodInfoUpdateConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig,
    (request: UpdateConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig.deserializeBinary
  );

  updateConfig(
    request: UpdateConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateConfig',
      request,
      metadata || {},
      this.methodInfoUpdateConfig,
      callback);
  }

  methodInfoDeleteConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteConfigRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteConfig(
    request: DeleteConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteConfig',
      request,
      metadata || {},
      this.methodInfoDeleteConfig,
      callback);
  }

  methodInfoListVariables = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVariablesResponse,
    (request: ListVariablesRequest) => {
      return request.serializeBinary();
    },
    ListVariablesResponse.deserializeBinary
  );

  listVariables(
    request: ListVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVariablesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListVariables',
      request,
      metadata || {},
      this.methodInfoListVariables,
      callback);
  }

  methodInfoGetVariable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    (request: GetVariableRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
  );

  getVariable(
    request: GetVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetVariable',
      request,
      metadata || {},
      this.methodInfoGetVariable,
      callback);
  }

  methodInfoWatchVariable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    (request: WatchVariableRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
  );

  watchVariable(
    request: WatchVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/WatchVariable',
      request,
      metadata || {},
      this.methodInfoWatchVariable,
      callback);
  }

  methodInfoCreateVariable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    (request: CreateVariableRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
  );

  createVariable(
    request: CreateVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateVariable',
      request,
      metadata || {},
      this.methodInfoCreateVariable,
      callback);
  }

  methodInfoUpdateVariable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable,
    (request: UpdateVariableRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.Variable.deserializeBinary
  );

  updateVariable(
    request: UpdateVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/UpdateVariable',
      request,
      metadata || {},
      this.methodInfoUpdateVariable,
      callback);
  }

  methodInfoDeleteVariable = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteVariableRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteVariable(
    request: DeleteVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteVariable',
      request,
      metadata || {},
      this.methodInfoDeleteVariable,
      callback);
  }

  methodInfoListWaiters = new grpcWeb.AbstractClientBase.MethodInfo(
    ListWaitersResponse,
    (request: ListWaitersRequest) => {
      return request.serializeBinary();
    },
    ListWaitersResponse.deserializeBinary
  );

  listWaiters(
    request: ListWaitersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListWaitersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/ListWaiters',
      request,
      metadata || {},
      this.methodInfoListWaiters,
      callback);
  }

  methodInfoGetWaiter = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter,
    (request: GetWaiterRequest) => {
      return request.serializeBinary();
    },
    google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter.deserializeBinary
  );

  getWaiter(
    request: GetWaiterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/GetWaiter',
      request,
      metadata || {},
      this.methodInfoGetWaiter,
      callback);
  }

  methodInfoCreateWaiter = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateWaiterRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createWaiter(
    request: CreateWaiterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/CreateWaiter',
      request,
      metadata || {},
      this.methodInfoCreateWaiter,
      callback);
  }

  methodInfoDeleteWaiter = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteWaiterRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteWaiter(
    request: DeleteWaiterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.runtimeconfig.v1beta1.RuntimeConfigManager/DeleteWaiter',
      request,
      metadata || {},
      this.methodInfoDeleteWaiter,
      callback);
  }

}

