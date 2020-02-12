/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.datatransfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  CheckValidCredsRequest,
  CheckValidCredsResponse,
  CreateTransferConfigRequest,
  DataSource,
  DeleteTransferConfigRequest,
  DeleteTransferRunRequest,
  GetDataSourceRequest,
  GetTransferConfigRequest,
  GetTransferRunRequest,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListTransferConfigsRequest,
  ListTransferConfigsResponse,
  ListTransferLogsRequest,
  ListTransferLogsResponse,
  ListTransferRunsRequest,
  ListTransferRunsResponse,
  ScheduleTransferRunsRequest,
  ScheduleTransferRunsResponse,
  StartManualTransferRunsRequest,
  StartManualTransferRunsResponse,
  UpdateTransferConfigRequest} from './datatransfer_pb';

export class DataTransferServiceClient {
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

  methodInfoGetDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    DataSource,
    (request: GetDataSourceRequest) => {
      return request.serializeBinary();
    },
    DataSource.deserializeBinary
  );

  getDataSource(
    request: GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DataSource) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetDataSource',
      request,
      metadata || {},
      this.methodInfoGetDataSource,
      callback);
  }

  methodInfoListDataSources = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDataSourcesResponse,
    (request: ListDataSourcesRequest) => {
      return request.serializeBinary();
    },
    ListDataSourcesResponse.deserializeBinary
  );

  listDataSources(
    request: ListDataSourcesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDataSourcesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListDataSources',
      request,
      metadata || {},
      this.methodInfoListDataSources,
      callback);
  }

  methodInfoCreateTransferConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    (request: CreateTransferConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
  );

  createTransferConfig(
    request: CreateTransferConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CreateTransferConfig',
      request,
      metadata || {},
      this.methodInfoCreateTransferConfig,
      callback);
  }

  methodInfoUpdateTransferConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    (request: UpdateTransferConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
  );

  updateTransferConfig(
    request: UpdateTransferConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/UpdateTransferConfig',
      request,
      metadata || {},
      this.methodInfoUpdateTransferConfig,
      callback);
  }

  methodInfoDeleteTransferConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTransferConfigRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTransferConfig(
    request: DeleteTransferConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferConfig',
      request,
      metadata || {},
      this.methodInfoDeleteTransferConfig,
      callback);
  }

  methodInfoGetTransferConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
    (request: GetTransferConfigRequest) => {
      return request.serializeBinary();
    },
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
  );

  getTransferConfig(
    request: GetTransferConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferConfig',
      request,
      metadata || {},
      this.methodInfoGetTransferConfig,
      callback);
  }

  methodInfoListTransferConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTransferConfigsResponse,
    (request: ListTransferConfigsRequest) => {
      return request.serializeBinary();
    },
    ListTransferConfigsResponse.deserializeBinary
  );

  listTransferConfigs(
    request: ListTransferConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTransferConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferConfigs',
      request,
      metadata || {},
      this.methodInfoListTransferConfigs,
      callback);
  }

  methodInfoScheduleTransferRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    ScheduleTransferRunsResponse,
    (request: ScheduleTransferRunsRequest) => {
      return request.serializeBinary();
    },
    ScheduleTransferRunsResponse.deserializeBinary
  );

  scheduleTransferRuns(
    request: ScheduleTransferRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ScheduleTransferRunsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ScheduleTransferRuns',
      request,
      metadata || {},
      this.methodInfoScheduleTransferRuns,
      callback);
  }

  methodInfoStartManualTransferRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    StartManualTransferRunsResponse,
    (request: StartManualTransferRunsRequest) => {
      return request.serializeBinary();
    },
    StartManualTransferRunsResponse.deserializeBinary
  );

  startManualTransferRuns(
    request: StartManualTransferRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StartManualTransferRunsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/StartManualTransferRuns',
      request,
      metadata || {},
      this.methodInfoStartManualTransferRuns,
      callback);
  }

  methodInfoGetTransferRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
    (request: GetTransferRunRequest) => {
      return request.serializeBinary();
    },
    google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary
  );

  getTransferRun(
    request: GetTransferRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferRun',
      request,
      metadata || {},
      this.methodInfoGetTransferRun,
      callback);
  }

  methodInfoDeleteTransferRun = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTransferRunRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTransferRun(
    request: DeleteTransferRunRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferRun',
      request,
      metadata || {},
      this.methodInfoDeleteTransferRun,
      callback);
  }

  methodInfoListTransferRuns = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTransferRunsResponse,
    (request: ListTransferRunsRequest) => {
      return request.serializeBinary();
    },
    ListTransferRunsResponse.deserializeBinary
  );

  listTransferRuns(
    request: ListTransferRunsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTransferRunsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferRuns',
      request,
      metadata || {},
      this.methodInfoListTransferRuns,
      callback);
  }

  methodInfoListTransferLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTransferLogsResponse,
    (request: ListTransferLogsRequest) => {
      return request.serializeBinary();
    },
    ListTransferLogsResponse.deserializeBinary
  );

  listTransferLogs(
    request: ListTransferLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTransferLogsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferLogs',
      request,
      metadata || {},
      this.methodInfoListTransferLogs,
      callback);
  }

  methodInfoCheckValidCreds = new grpcWeb.AbstractClientBase.MethodInfo(
    CheckValidCredsResponse,
    (request: CheckValidCredsRequest) => {
      return request.serializeBinary();
    },
    CheckValidCredsResponse.deserializeBinary
  );

  checkValidCreds(
    request: CheckValidCredsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CheckValidCredsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CheckValidCreds',
      request,
      metadata || {},
      this.methodInfoCheckValidCreds,
      callback);
  }

}

