/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_bigtable_v1_bigtable_data_pb from '../../../google/bigtable/v1/bigtable_data_pb';
import * as google_bigtable_v1_bigtable_service_messages_pb from '../../../google/bigtable/v1/bigtable_service_messages_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class BigtableServiceClient {
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

  methodInfoReadRows = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse,
    (request: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_v1_bigtable_service_messages_pb.ReadRowsResponse.deserializeBinary
  );

  readRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadRowsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/ReadRows',
      request,
      metadata || {},
      this.methodInfoReadRows);
  }

  methodInfoSampleRowKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse,
    (request: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysResponse.deserializeBinary
  );

  sampleRowKeys(
    request: google_bigtable_v1_bigtable_service_messages_pb.SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/SampleRowKeys',
      request,
      metadata || {},
      this.methodInfoSampleRowKeys);
  }

  methodInfoMutateRow = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  mutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/MutateRow',
      request,
      metadata || {},
      this.methodInfoMutateRow,
      callback);
  }

  methodInfoMutateRows = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse,
    (request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse.deserializeBinary
  );

  mutateRows(
    request: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_service_messages_pb.MutateRowsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/MutateRows',
      request,
      metadata || {},
      this.methodInfoMutateRows,
      callback);
  }

  methodInfoCheckAndMutateRow = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse,
    (request: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse.deserializeBinary
  );

  checkAndMutateRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_service_messages_pb.CheckAndMutateRowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/CheckAndMutateRow',
      request,
      metadata || {},
      this.methodInfoCheckAndMutateRow,
      callback);
  }

  methodInfoReadModifyWriteRow = new grpcWeb.AbstractClientBase.MethodInfo(
    google_bigtable_v1_bigtable_data_pb.Row,
    (request: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest) => {
      return request.serializeBinary();
    },
    google_bigtable_v1_bigtable_data_pb.Row.deserializeBinary
  );

  readModifyWriteRow(
    request: google_bigtable_v1_bigtable_service_messages_pb.ReadModifyWriteRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_bigtable_v1_bigtable_data_pb.Row) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v1.BigtableService/ReadModifyWriteRow',
      request,
      metadata || {},
      this.methodInfoReadModifyWriteRow,
      callback);
  }

}

