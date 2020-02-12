/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.redis.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateInstanceRequest,
  DeleteInstanceRequest,
  ExportInstanceRequest,
  FailoverInstanceRequest,
  GetInstanceRequest,
  ImportInstanceRequest,
  Instance,
  ListInstancesRequest,
  ListInstancesResponse,
  UpdateInstanceRequest} from './cloud_redis_pb';

export class CloudRedisClient {
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
        '/google.cloud.redis.v1beta1.CloudRedis/ListInstances',
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
        '/google.cloud.redis.v1beta1.CloudRedis/GetInstance',
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
        '/google.cloud.redis.v1beta1.CloudRedis/CreateInstance',
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
        '/google.cloud.redis.v1beta1.CloudRedis/UpdateInstance',
      request,
      metadata || {},
      this.methodInfoUpdateInstance,
      callback);
  }

  methodInfoImportInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importInstance(
    request: ImportInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.redis.v1beta1.CloudRedis/ImportInstance',
      request,
      metadata || {},
      this.methodInfoImportInstance,
      callback);
  }

  methodInfoExportInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportInstance(
    request: ExportInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.redis.v1beta1.CloudRedis/ExportInstance',
      request,
      metadata || {},
      this.methodInfoExportInstance,
      callback);
  }

  methodInfoFailoverInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: FailoverInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  failoverInstance(
    request: FailoverInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.redis.v1beta1.CloudRedis/FailoverInstance',
      request,
      metadata || {},
      this.methodInfoFailoverInstance,
      callback);
  }

  methodInfoDeleteInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteInstance(
    request: DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.redis.v1beta1.CloudRedis/DeleteInstance',
      request,
      metadata || {},
      this.methodInfoDeleteInstance,
      callback);
  }

}

