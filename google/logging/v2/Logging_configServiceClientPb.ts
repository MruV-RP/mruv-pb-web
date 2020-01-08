/**
 * @fileoverview gRPC-Web generated client stub for google.logging.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateExclusionRequest,
  CreateSinkRequest,
  DeleteExclusionRequest,
  DeleteSinkRequest,
  GetExclusionRequest,
  GetSinkRequest,
  ListExclusionsRequest,
  ListExclusionsResponse,
  ListSinksRequest,
  ListSinksResponse,
  LogExclusion,
  LogSink,
  UpdateExclusionRequest,
  UpdateSinkRequest} from './logging_config_pb';

export class ConfigServiceV2Client {
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

  methodInfoListSinks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSinksResponse,
    (request: ListSinksRequest) => {
      return request.serializeBinary();
    },
    ListSinksResponse.deserializeBinary
  );

  listSinks(
    request: ListSinksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSinksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/ListSinks',
      request,
      metadata || {},
      this.methodInfoListSinks,
      callback);
  }

  methodInfoGetSink = new grpcWeb.AbstractClientBase.MethodInfo(
    LogSink,
    (request: GetSinkRequest) => {
      return request.serializeBinary();
    },
    LogSink.deserializeBinary
  );

  getSink(
    request: GetSinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogSink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/GetSink',
      request,
      metadata || {},
      this.methodInfoGetSink,
      callback);
  }

  methodInfoCreateSink = new grpcWeb.AbstractClientBase.MethodInfo(
    LogSink,
    (request: CreateSinkRequest) => {
      return request.serializeBinary();
    },
    LogSink.deserializeBinary
  );

  createSink(
    request: CreateSinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogSink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/CreateSink',
      request,
      metadata || {},
      this.methodInfoCreateSink,
      callback);
  }

  methodInfoUpdateSink = new grpcWeb.AbstractClientBase.MethodInfo(
    LogSink,
    (request: UpdateSinkRequest) => {
      return request.serializeBinary();
    },
    LogSink.deserializeBinary
  );

  updateSink(
    request: UpdateSinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogSink) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/UpdateSink',
      request,
      metadata || {},
      this.methodInfoUpdateSink,
      callback);
  }

  methodInfoDeleteSink = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSinkRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSink(
    request: DeleteSinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/DeleteSink',
      request,
      metadata || {},
      this.methodInfoDeleteSink,
      callback);
  }

  methodInfoListExclusions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListExclusionsResponse,
    (request: ListExclusionsRequest) => {
      return request.serializeBinary();
    },
    ListExclusionsResponse.deserializeBinary
  );

  listExclusions(
    request: ListExclusionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListExclusionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/ListExclusions',
      request,
      metadata || {},
      this.methodInfoListExclusions,
      callback);
  }

  methodInfoGetExclusion = new grpcWeb.AbstractClientBase.MethodInfo(
    LogExclusion,
    (request: GetExclusionRequest) => {
      return request.serializeBinary();
    },
    LogExclusion.deserializeBinary
  );

  getExclusion(
    request: GetExclusionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogExclusion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/GetExclusion',
      request,
      metadata || {},
      this.methodInfoGetExclusion,
      callback);
  }

  methodInfoCreateExclusion = new grpcWeb.AbstractClientBase.MethodInfo(
    LogExclusion,
    (request: CreateExclusionRequest) => {
      return request.serializeBinary();
    },
    LogExclusion.deserializeBinary
  );

  createExclusion(
    request: CreateExclusionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogExclusion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/CreateExclusion',
      request,
      metadata || {},
      this.methodInfoCreateExclusion,
      callback);
  }

  methodInfoUpdateExclusion = new grpcWeb.AbstractClientBase.MethodInfo(
    LogExclusion,
    (request: UpdateExclusionRequest) => {
      return request.serializeBinary();
    },
    LogExclusion.deserializeBinary
  );

  updateExclusion(
    request: UpdateExclusionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogExclusion) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/UpdateExclusion',
      request,
      metadata || {},
      this.methodInfoUpdateExclusion,
      callback);
  }

  methodInfoDeleteExclusion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteExclusionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteExclusion(
    request: DeleteExclusionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.ConfigServiceV2/DeleteExclusion',
      request,
      metadata || {},
      this.methodInfoDeleteExclusion,
      callback);
  }

}

