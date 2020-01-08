/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateModelRequest,
  CreateVersionRequest,
  DeleteModelRequest,
  DeleteVersionRequest,
  GetModelRequest,
  GetVersionRequest,
  ListModelsRequest,
  ListModelsResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  Model,
  SetDefaultVersionRequest,
  Version} from './model_service_pb';

export class ModelServiceClient {
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

  methodInfoCreateModel = new grpcWeb.AbstractClientBase.MethodInfo(
    Model,
    (request: CreateModelRequest) => {
      return request.serializeBinary();
    },
    Model.deserializeBinary
  );

  createModel(
    request: CreateModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Model) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/CreateModel',
      request,
      metadata || {},
      this.methodInfoCreateModel,
      callback);
  }

  methodInfoListModels = new grpcWeb.AbstractClientBase.MethodInfo(
    ListModelsResponse,
    (request: ListModelsRequest) => {
      return request.serializeBinary();
    },
    ListModelsResponse.deserializeBinary
  );

  listModels(
    request: ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListModelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/ListModels',
      request,
      metadata || {},
      this.methodInfoListModels,
      callback);
  }

  methodInfoGetModel = new grpcWeb.AbstractClientBase.MethodInfo(
    Model,
    (request: GetModelRequest) => {
      return request.serializeBinary();
    },
    Model.deserializeBinary
  );

  getModel(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Model) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/GetModel',
      request,
      metadata || {},
      this.methodInfoGetModel,
      callback);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteModelRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/DeleteModel',
      request,
      metadata || {},
      this.methodInfoDeleteModel,
      callback);
  }

  methodInfoCreateVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateVersionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createVersion(
    request: CreateVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/CreateVersion',
      request,
      metadata || {},
      this.methodInfoCreateVersion,
      callback);
  }

  methodInfoListVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVersionsResponse,
    (request: ListVersionsRequest) => {
      return request.serializeBinary();
    },
    ListVersionsResponse.deserializeBinary
  );

  listVersions(
    request: ListVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVersionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/ListVersions',
      request,
      metadata || {},
      this.methodInfoListVersions,
      callback);
  }

  methodInfoGetVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    Version,
    (request: GetVersionRequest) => {
      return request.serializeBinary();
    },
    Version.deserializeBinary
  );

  getVersion(
    request: GetVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Version) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/GetVersion',
      request,
      metadata || {},
      this.methodInfoGetVersion,
      callback);
  }

  methodInfoDeleteVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteVersionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteVersion(
    request: DeleteVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/DeleteVersion',
      request,
      metadata || {},
      this.methodInfoDeleteVersion,
      callback);
  }

  methodInfoSetDefaultVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    Version,
    (request: SetDefaultVersionRequest) => {
      return request.serializeBinary();
    },
    Version.deserializeBinary
  );

  setDefaultVersion(
    request: SetDefaultVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Version) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.ModelService/SetDefaultVersion',
      request,
      metadata || {},
      this.methodInfoSetDefaultVersion,
      callback);
  }

}

