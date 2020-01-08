/**
 * @fileoverview gRPC-Web generated client stub for google.logging.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_logging_v2_log_entry_pb from '../../../google/logging/v2/log_entry_pb';
import * as google_logging_v2_logging_config_pb from '../../../google/logging/v2/logging_config_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  DeleteLogRequest,
  ListLogEntriesRequest,
  ListLogEntriesResponse,
  ListLogsRequest,
  ListLogsResponse,
  ListMonitoredResourceDescriptorsRequest,
  ListMonitoredResourceDescriptorsResponse,
  WriteLogEntriesRequest,
  WriteLogEntriesResponse} from './logging_pb';

export class LoggingServiceV2Client {
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

  methodInfoDeleteLog = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteLogRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLog(
    request: DeleteLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.LoggingServiceV2/DeleteLog',
      request,
      metadata || {},
      this.methodInfoDeleteLog,
      callback);
  }

  methodInfoWriteLogEntries = new grpcWeb.AbstractClientBase.MethodInfo(
    WriteLogEntriesResponse,
    (request: WriteLogEntriesRequest) => {
      return request.serializeBinary();
    },
    WriteLogEntriesResponse.deserializeBinary
  );

  writeLogEntries(
    request: WriteLogEntriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WriteLogEntriesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.LoggingServiceV2/WriteLogEntries',
      request,
      metadata || {},
      this.methodInfoWriteLogEntries,
      callback);
  }

  methodInfoListLogEntries = new grpcWeb.AbstractClientBase.MethodInfo(
    ListLogEntriesResponse,
    (request: ListLogEntriesRequest) => {
      return request.serializeBinary();
    },
    ListLogEntriesResponse.deserializeBinary
  );

  listLogEntries(
    request: ListLogEntriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListLogEntriesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.LoggingServiceV2/ListLogEntries',
      request,
      metadata || {},
      this.methodInfoListLogEntries,
      callback);
  }

  methodInfoListMonitoredResourceDescriptors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListMonitoredResourceDescriptorsResponse,
    (request: ListMonitoredResourceDescriptorsRequest) => {
      return request.serializeBinary();
    },
    ListMonitoredResourceDescriptorsResponse.deserializeBinary
  );

  listMonitoredResourceDescriptors(
    request: ListMonitoredResourceDescriptorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMonitoredResourceDescriptorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.LoggingServiceV2/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      this.methodInfoListMonitoredResourceDescriptors,
      callback);
  }

  methodInfoListLogs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListLogsResponse,
    (request: ListLogsRequest) => {
      return request.serializeBinary();
    },
    ListLogsResponse.deserializeBinary
  );

  listLogs(
    request: ListLogsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListLogsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.LoggingServiceV2/ListLogs',
      request,
      metadata || {},
      this.methodInfoListLogs,
      callback);
  }

}

