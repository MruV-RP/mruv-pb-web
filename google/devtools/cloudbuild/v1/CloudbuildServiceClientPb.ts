/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudbuild.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Build,
  BuildTrigger,
  CancelBuildRequest,
  CreateBuildRequest,
  CreateBuildTriggerRequest,
  CreateWorkerPoolRequest,
  DeleteBuildTriggerRequest,
  DeleteWorkerPoolRequest,
  GetBuildRequest,
  GetBuildTriggerRequest,
  GetWorkerPoolRequest,
  ListBuildTriggersRequest,
  ListBuildTriggersResponse,
  ListBuildsRequest,
  ListBuildsResponse,
  ListWorkerPoolsRequest,
  ListWorkerPoolsResponse,
  RetryBuildRequest,
  RunBuildTriggerRequest,
  UpdateBuildTriggerRequest,
  UpdateWorkerPoolRequest,
  WorkerPool} from './cloudbuild_pb';

export class CloudBuildClient {
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

  methodInfoCreateBuild = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateBuildRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createBuild(
    request: CreateBuildRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuild',
      request,
      metadata || {},
      this.methodInfoCreateBuild,
      callback);
  }

  methodInfoGetBuild = new grpcWeb.AbstractClientBase.MethodInfo(
    Build,
    (request: GetBuildRequest) => {
      return request.serializeBinary();
    },
    Build.deserializeBinary
  );

  getBuild(
    request: GetBuildRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Build) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/GetBuild',
      request,
      metadata || {},
      this.methodInfoGetBuild,
      callback);
  }

  methodInfoListBuilds = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBuildsResponse,
    (request: ListBuildsRequest) => {
      return request.serializeBinary();
    },
    ListBuildsResponse.deserializeBinary
  );

  listBuilds(
    request: ListBuildsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBuildsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/ListBuilds',
      request,
      metadata || {},
      this.methodInfoListBuilds,
      callback);
  }

  methodInfoCancelBuild = new grpcWeb.AbstractClientBase.MethodInfo(
    Build,
    (request: CancelBuildRequest) => {
      return request.serializeBinary();
    },
    Build.deserializeBinary
  );

  cancelBuild(
    request: CancelBuildRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Build) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/CancelBuild',
      request,
      metadata || {},
      this.methodInfoCancelBuild,
      callback);
  }

  methodInfoRetryBuild = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RetryBuildRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  retryBuild(
    request: RetryBuildRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/RetryBuild',
      request,
      metadata || {},
      this.methodInfoRetryBuild,
      callback);
  }

  methodInfoCreateBuildTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    BuildTrigger,
    (request: CreateBuildTriggerRequest) => {
      return request.serializeBinary();
    },
    BuildTrigger.deserializeBinary
  );

  createBuildTrigger(
    request: CreateBuildTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuildTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/CreateBuildTrigger',
      request,
      metadata || {},
      this.methodInfoCreateBuildTrigger,
      callback);
  }

  methodInfoGetBuildTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    BuildTrigger,
    (request: GetBuildTriggerRequest) => {
      return request.serializeBinary();
    },
    BuildTrigger.deserializeBinary
  );

  getBuildTrigger(
    request: GetBuildTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuildTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/GetBuildTrigger',
      request,
      metadata || {},
      this.methodInfoGetBuildTrigger,
      callback);
  }

  methodInfoListBuildTriggers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBuildTriggersResponse,
    (request: ListBuildTriggersRequest) => {
      return request.serializeBinary();
    },
    ListBuildTriggersResponse.deserializeBinary
  );

  listBuildTriggers(
    request: ListBuildTriggersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBuildTriggersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/ListBuildTriggers',
      request,
      metadata || {},
      this.methodInfoListBuildTriggers,
      callback);
  }

  methodInfoDeleteBuildTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteBuildTriggerRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBuildTrigger(
    request: DeleteBuildTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/DeleteBuildTrigger',
      request,
      metadata || {},
      this.methodInfoDeleteBuildTrigger,
      callback);
  }

  methodInfoUpdateBuildTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    BuildTrigger,
    (request: UpdateBuildTriggerRequest) => {
      return request.serializeBinary();
    },
    BuildTrigger.deserializeBinary
  );

  updateBuildTrigger(
    request: UpdateBuildTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuildTrigger) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/UpdateBuildTrigger',
      request,
      metadata || {},
      this.methodInfoUpdateBuildTrigger,
      callback);
  }

  methodInfoRunBuildTrigger = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RunBuildTriggerRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  runBuildTrigger(
    request: RunBuildTriggerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/RunBuildTrigger',
      request,
      metadata || {},
      this.methodInfoRunBuildTrigger,
      callback);
  }

  methodInfoCreateWorkerPool = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkerPool,
    (request: CreateWorkerPoolRequest) => {
      return request.serializeBinary();
    },
    WorkerPool.deserializeBinary
  );

  createWorkerPool(
    request: CreateWorkerPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkerPool) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/CreateWorkerPool',
      request,
      metadata || {},
      this.methodInfoCreateWorkerPool,
      callback);
  }

  methodInfoGetWorkerPool = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkerPool,
    (request: GetWorkerPoolRequest) => {
      return request.serializeBinary();
    },
    WorkerPool.deserializeBinary
  );

  getWorkerPool(
    request: GetWorkerPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkerPool) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/GetWorkerPool',
      request,
      metadata || {},
      this.methodInfoGetWorkerPool,
      callback);
  }

  methodInfoDeleteWorkerPool = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteWorkerPoolRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteWorkerPool(
    request: DeleteWorkerPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/DeleteWorkerPool',
      request,
      metadata || {},
      this.methodInfoDeleteWorkerPool,
      callback);
  }

  methodInfoUpdateWorkerPool = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkerPool,
    (request: UpdateWorkerPoolRequest) => {
      return request.serializeBinary();
    },
    WorkerPool.deserializeBinary
  );

  updateWorkerPool(
    request: UpdateWorkerPoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkerPool) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/UpdateWorkerPool',
      request,
      metadata || {},
      this.methodInfoUpdateWorkerPool,
      callback);
  }

  methodInfoListWorkerPools = new grpcWeb.AbstractClientBase.MethodInfo(
    ListWorkerPoolsResponse,
    (request: ListWorkerPoolsRequest) => {
      return request.serializeBinary();
    },
    ListWorkerPoolsResponse.deserializeBinary
  );

  listWorkerPools(
    request: ListWorkerPoolsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListWorkerPoolsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.cloudbuild.v1.CloudBuild/ListWorkerPools',
      request,
      metadata || {},
      this.methodInfoListWorkerPools,
      callback);
  }

}

