/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_bigquery_v2_encryption_config_pb from '../../../../google/cloud/bigquery/v2/encryption_config_pb';
import * as google_cloud_bigquery_v2_model_reference_pb from '../../../../google/cloud/bigquery/v2/model_reference_pb';
import * as google_cloud_bigquery_v2_standard_sql_pb from '../../../../google/cloud/bigquery/v2/standard_sql_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

import {
  DeleteModelRequest,
  GetModelRequest,
  ListModelsRequest,
  ListModelsResponse,
  Model,
  PatchModelRequest} from './model_pb';

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
        '/google.cloud.bigquery.v2.ModelService/GetModel',
      request,
      metadata || {},
      this.methodInfoGetModel,
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
        '/google.cloud.bigquery.v2.ModelService/ListModels',
      request,
      metadata || {},
      this.methodInfoListModels,
      callback);
  }

  methodInfoPatchModel = new grpcWeb.AbstractClientBase.MethodInfo(
    Model,
    (request: PatchModelRequest) => {
      return request.serializeBinary();
    },
    Model.deserializeBinary
  );

  patchModel(
    request: PatchModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Model) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.v2.ModelService/PatchModel',
      request,
      metadata || {},
      this.methodInfoPatchModel,
      callback);
  }

  methodInfoDeleteModel = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteModelRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.v2.ModelService/DeleteModel',
      request,
      metadata || {},
      this.methodInfoDeleteModel,
      callback);
  }

}

