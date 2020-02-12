/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_bigtable_v2_data_pb from '../../../google/bigtable/v2/data_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';

import {
  CheckAndMutateRowRequest,
  CheckAndMutateRowResponse,
  MutateRowRequest,
  MutateRowResponse,
  MutateRowsRequest,
  MutateRowsResponse,
  ReadModifyWriteRowRequest,
  ReadModifyWriteRowResponse,
  ReadRowsRequest,
  ReadRowsResponse,
  SampleRowKeysRequest,
  SampleRowKeysResponse} from './bigtable_pb';

export class BigtableClient {
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
        '/google.bigtable.v2.Bigtable/ReadRows',
      request,
      metadata || {},
      this.methodInfoReadRows);
  }

  methodInfoSampleRowKeys = new grpcWeb.AbstractClientBase.MethodInfo(
    SampleRowKeysResponse,
    (request: SampleRowKeysRequest) => {
      return request.serializeBinary();
    },
    SampleRowKeysResponse.deserializeBinary
  );

  sampleRowKeys(
    request: SampleRowKeysRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.bigtable.v2.Bigtable/SampleRowKeys',
      request,
      metadata || {},
      this.methodInfoSampleRowKeys);
  }

  methodInfoMutateRow = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateRowResponse,
    (request: MutateRowRequest) => {
      return request.serializeBinary();
    },
    MutateRowResponse.deserializeBinary
  );

  mutateRow(
    request: MutateRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateRowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v2.Bigtable/MutateRow',
      request,
      metadata || {},
      this.methodInfoMutateRow,
      callback);
  }

  methodInfoMutateRows = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateRowsResponse,
    (request: MutateRowsRequest) => {
      return request.serializeBinary();
    },
    MutateRowsResponse.deserializeBinary
  );

  mutateRows(
    request: MutateRowsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.bigtable.v2.Bigtable/MutateRows',
      request,
      metadata || {},
      this.methodInfoMutateRows);
  }

  methodInfoCheckAndMutateRow = new grpcWeb.AbstractClientBase.MethodInfo(
    CheckAndMutateRowResponse,
    (request: CheckAndMutateRowRequest) => {
      return request.serializeBinary();
    },
    CheckAndMutateRowResponse.deserializeBinary
  );

  checkAndMutateRow(
    request: CheckAndMutateRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CheckAndMutateRowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v2.Bigtable/CheckAndMutateRow',
      request,
      metadata || {},
      this.methodInfoCheckAndMutateRow,
      callback);
  }

  methodInfoReadModifyWriteRow = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadModifyWriteRowResponse,
    (request: ReadModifyWriteRowRequest) => {
      return request.serializeBinary();
    },
    ReadModifyWriteRowResponse.deserializeBinary
  );

  readModifyWriteRow(
    request: ReadModifyWriteRowRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReadModifyWriteRowResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.bigtable.v2.Bigtable/ReadModifyWriteRow',
      request,
      metadata || {},
      this.methodInfoReadModifyWriteRow,
      callback);
  }

}

