/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1alpha2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_code_pb from '../../../google/rpc/code_pb';

import {
  ControllerConfig,
  CreatePipelineRequest,
  DeletePipelineRequest,
  GetControllerConfigRequest,
  GetPipelineRequest,
  ListPipelinesRequest,
  ListPipelinesResponse,
  Pipeline,
  RunPipelineRequest,
  SetOperationStatusRequest} from './pipelines_pb';

export class PipelinesV1Alpha2Client {
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

  methodInfoCreatePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    Pipeline,
    (request: CreatePipelineRequest) => {
      return request.serializeBinary();
    },
    Pipeline.deserializeBinary
  );

  createPipeline(
    request: CreatePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Pipeline) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/CreatePipeline',
      request,
      metadata || {},
      this.methodInfoCreatePipeline,
      callback);
  }

  methodInfoRunPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RunPipelineRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  runPipeline(
    request: RunPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/RunPipeline',
      request,
      metadata || {},
      this.methodInfoRunPipeline,
      callback);
  }

  methodInfoGetPipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    Pipeline,
    (request: GetPipelineRequest) => {
      return request.serializeBinary();
    },
    Pipeline.deserializeBinary
  );

  getPipeline(
    request: GetPipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Pipeline) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetPipeline',
      request,
      metadata || {},
      this.methodInfoGetPipeline,
      callback);
  }

  methodInfoListPipelines = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPipelinesResponse,
    (request: ListPipelinesRequest) => {
      return request.serializeBinary();
    },
    ListPipelinesResponse.deserializeBinary
  );

  listPipelines(
    request: ListPipelinesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPipelinesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/ListPipelines',
      request,
      metadata || {},
      this.methodInfoListPipelines,
      callback);
  }

  methodInfoDeletePipeline = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeletePipelineRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deletePipeline(
    request: DeletePipelineRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/DeletePipeline',
      request,
      metadata || {},
      this.methodInfoDeletePipeline,
      callback);
  }

  methodInfoGetControllerConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    ControllerConfig,
    (request: GetControllerConfigRequest) => {
      return request.serializeBinary();
    },
    ControllerConfig.deserializeBinary
  );

  getControllerConfig(
    request: GetControllerConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ControllerConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/GetControllerConfig',
      request,
      metadata || {},
      this.methodInfoGetControllerConfig,
      callback);
  }

  methodInfoSetOperationStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: SetOperationStatusRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setOperationStatus(
    request: SetOperationStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.genomics.v1alpha2.PipelinesV1Alpha2/SetOperationStatus',
      request,
      metadata || {},
      this.methodInfoSetOperationStatus,
      callback);
  }

}

