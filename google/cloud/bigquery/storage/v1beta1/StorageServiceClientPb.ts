/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.storage.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_cloud_bigquery_storage_v1beta1_arrow_pb from '../../../../../google/cloud/bigquery/storage/v1beta1/arrow_pb';
import * as google_cloud_bigquery_storage_v1beta1_avro_pb from '../../../../../google/cloud/bigquery/storage/v1beta1/avro_pb';
import * as google_cloud_bigquery_storage_v1beta1_read_options_pb from '../../../../../google/cloud/bigquery/storage/v1beta1/read_options_pb';
import * as google_cloud_bigquery_storage_v1beta1_table_reference_pb from '../../../../../google/cloud/bigquery/storage/v1beta1/table_reference_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  BatchCreateReadSessionStreamsRequest,
  BatchCreateReadSessionStreamsResponse,
  CreateReadSessionRequest,
  FinalizeStreamRequest,
  ReadRowsRequest,
  ReadRowsResponse,
  ReadSession,
  SplitReadStreamRequest,
  SplitReadStreamResponse} from './storage_pb';

export class BigQueryStorageClient {
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

  methodInfoCreateReadSession = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadSession,
    (request: CreateReadSessionRequest) => {
      return request.serializeBinary();
    },
    ReadSession.deserializeBinary
  );

  createReadSession(
    request: CreateReadSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReadSession) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/CreateReadSession',
      request,
      metadata || {},
      this.methodInfoCreateReadSession,
      callback);
  }

  methodInfoReadRows = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadRowsResponse,
    (request: ReadRowsRequest) => {
      return request.serializeBinary();
    },
    ReadRowsResponse.deserializeBinary
  );

  readRows(
    request: ReadRowsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/ReadRows',
      request,
      metadata || {},
      this.methodInfoReadRows);
  }

  methodInfoBatchCreateReadSessionStreams = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchCreateReadSessionStreamsResponse,
    (request: BatchCreateReadSessionStreamsRequest) => {
      return request.serializeBinary();
    },
    BatchCreateReadSessionStreamsResponse.deserializeBinary
  );

  batchCreateReadSessionStreams(
    request: BatchCreateReadSessionStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchCreateReadSessionStreamsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/BatchCreateReadSessionStreams',
      request,
      metadata || {},
      this.methodInfoBatchCreateReadSessionStreams,
      callback);
  }

  methodInfoFinalizeStream = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: FinalizeStreamRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  finalizeStream(
    request: FinalizeStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/FinalizeStream',
      request,
      metadata || {},
      this.methodInfoFinalizeStream,
      callback);
  }

  methodInfoSplitReadStream = new grpcWeb.AbstractClientBase.MethodInfo(
    SplitReadStreamResponse,
    (request: SplitReadStreamRequest) => {
      return request.serializeBinary();
    },
    SplitReadStreamResponse.deserializeBinary
  );

  splitReadStream(
    request: SplitReadStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SplitReadStreamResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.bigquery.storage.v1beta1.BigQueryStorage/SplitReadStream',
      request,
      metadata || {},
      this.methodInfoSplitReadStream,
      callback);
  }

}

