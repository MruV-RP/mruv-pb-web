/**
 * @fileoverview gRPC-Web generated client stub for google.logging.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_distribution_pb from '../../../google/api/distribution_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateLogMetricRequest,
  DeleteLogMetricRequest,
  GetLogMetricRequest,
  ListLogMetricsRequest,
  ListLogMetricsResponse,
  LogMetric,
  UpdateLogMetricRequest} from './logging_metrics_pb';

export class MetricsServiceV2Client {
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

  methodInfoListLogMetrics = new grpcWeb.AbstractClientBase.MethodInfo(
    ListLogMetricsResponse,
    (request: ListLogMetricsRequest) => {
      return request.serializeBinary();
    },
    ListLogMetricsResponse.deserializeBinary
  );

  listLogMetrics(
    request: ListLogMetricsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListLogMetricsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.MetricsServiceV2/ListLogMetrics',
      request,
      metadata || {},
      this.methodInfoListLogMetrics,
      callback);
  }

  methodInfoGetLogMetric = new grpcWeb.AbstractClientBase.MethodInfo(
    LogMetric,
    (request: GetLogMetricRequest) => {
      return request.serializeBinary();
    },
    LogMetric.deserializeBinary
  );

  getLogMetric(
    request: GetLogMetricRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogMetric) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.MetricsServiceV2/GetLogMetric',
      request,
      metadata || {},
      this.methodInfoGetLogMetric,
      callback);
  }

  methodInfoCreateLogMetric = new grpcWeb.AbstractClientBase.MethodInfo(
    LogMetric,
    (request: CreateLogMetricRequest) => {
      return request.serializeBinary();
    },
    LogMetric.deserializeBinary
  );

  createLogMetric(
    request: CreateLogMetricRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogMetric) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.MetricsServiceV2/CreateLogMetric',
      request,
      metadata || {},
      this.methodInfoCreateLogMetric,
      callback);
  }

  methodInfoUpdateLogMetric = new grpcWeb.AbstractClientBase.MethodInfo(
    LogMetric,
    (request: UpdateLogMetricRequest) => {
      return request.serializeBinary();
    },
    LogMetric.deserializeBinary
  );

  updateLogMetric(
    request: UpdateLogMetricRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogMetric) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.MetricsServiceV2/UpdateLogMetric',
      request,
      metadata || {},
      this.methodInfoUpdateLogMetric,
      callback);
  }

  methodInfoDeleteLogMetric = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteLogMetricRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteLogMetric(
    request: DeleteLogMetricRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.logging.v2.MetricsServiceV2/DeleteLogMetric',
      request,
      metadata || {},
      this.methodInfoDeleteLogMetric,
      callback);
  }

}

