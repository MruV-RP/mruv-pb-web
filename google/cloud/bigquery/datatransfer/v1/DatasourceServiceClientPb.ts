/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.datatransfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_cloud_bigquery_datatransfer_v1_datatransfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb';
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  CreateDataSourceDefinitionRequest,
  DataSourceDefinition,
  DeleteDataSourceDefinitionRequest,
  FinishRunRequest,
  GetDataSourceDefinitionRequest,
  ListDataSourceDefinitionsRequest,
  ListDataSourceDefinitionsResponse,
  LogTransferRunMessagesRequest,
  StartBigQueryJobsRequest,
  UpdateDataSourceDefinitionRequest,
  UpdateTransferRunRequest} from './datasource_pb';

export class DataSourceServiceClient {
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

  methodInfoUpdateTransferRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
    (request: UpdateTransferRunRequest) => {
      return request.serializeBinary();
    },
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary
  );

  updateTransferRun(
    request: UpdateTransferRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/UpdateTransferRun',
      request,
      metadata || {},
      this.methodInfoUpdateTransferRun,
      callback);
  }

  methodInfoLogTransferRunMessages = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: LogTransferRunMessagesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  logTransferRunMessages(
    request: LogTransferRunMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/LogTransferRunMessages',
      request,
      metadata || {},
      this.methodInfoLogTransferRunMessages,
      callback);
  }

  methodInfoStartBigQueryJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: StartBigQueryJobsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  startBigQueryJobs(
    request: StartBigQueryJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/StartBigQueryJobs',
      request,
      metadata || {},
      this.methodInfoStartBigQueryJobs,
      callback);
  }

  methodInfoFinishRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: FinishRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  finishRun(
    request: FinishRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/FinishRun',
      request,
      metadata || {},
      this.methodInfoFinishRun,
      callback);
  }

  methodInfoCreateDataSourceDefinition = new grpcWeb.AbstractClientBase.MethodInfo(
    DataSourceDefinition,
    (request: CreateDataSourceDefinitionRequest) => {
      return request.serializeBinary();
    },
    DataSourceDefinition.deserializeBinary
  );

  createDataSourceDefinition(
    request: CreateDataSourceDefinitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DataSourceDefinition) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/CreateDataSourceDefinition',
      request,
      metadata || {},
      this.methodInfoCreateDataSourceDefinition,
      callback);
  }

  methodInfoUpdateDataSourceDefinition = new grpcWeb.AbstractClientBase.MethodInfo(
    DataSourceDefinition,
    (request: UpdateDataSourceDefinitionRequest) => {
      return request.serializeBinary();
    },
    DataSourceDefinition.deserializeBinary
  );

  updateDataSourceDefinition(
    request: UpdateDataSourceDefinitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DataSourceDefinition) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/UpdateDataSourceDefinition',
      request,
      metadata || {},
      this.methodInfoUpdateDataSourceDefinition,
      callback);
  }

  methodInfoDeleteDataSourceDefinition = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteDataSourceDefinitionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteDataSourceDefinition(
    request: DeleteDataSourceDefinitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/DeleteDataSourceDefinition',
      request,
      metadata || {},
      this.methodInfoDeleteDataSourceDefinition,
      callback);
  }

  methodInfoGetDataSourceDefinition = new grpcWeb.AbstractClientBase.MethodInfo(
    DataSourceDefinition,
    (request: GetDataSourceDefinitionRequest) => {
      return request.serializeBinary();
    },
    DataSourceDefinition.deserializeBinary
  );

  getDataSourceDefinition(
    request: GetDataSourceDefinitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DataSourceDefinition) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/GetDataSourceDefinition',
      request,
      metadata || {},
      this.methodInfoGetDataSourceDefinition,
      callback);
  }

  methodInfoListDataSourceDefinitions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDataSourceDefinitionsResponse,
    (request: ListDataSourceDefinitionsRequest) => {
      return request.serializeBinary();
    },
    ListDataSourceDefinitionsResponse.deserializeBinary
  );

  listDataSourceDefinitions(
    request: ListDataSourceDefinitionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDataSourceDefinitionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataSourceService/ListDataSourceDefinitions',
      request,
      metadata || {},
      this.methodInfoListDataSourceDefinitions,
      callback);
  }

}

