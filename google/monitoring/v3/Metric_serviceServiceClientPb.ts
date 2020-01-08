/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_metric_pb from '../../../google/api/metric_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_monitoring_v3_alert_pb from '../../../google/monitoring/v3/alert_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';
import * as google_monitoring_v3_metric_pb from '../../../google/monitoring/v3/metric_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateMetricDescriptorRequest,
  CreateTimeSeriesRequest,
  DeleteMetricDescriptorRequest,
  GetMetricDescriptorRequest,
  GetMonitoredResourceDescriptorRequest,
  ListMetricDescriptorsRequest,
  ListMetricDescriptorsResponse,
  ListMonitoredResourceDescriptorsRequest,
  ListMonitoredResourceDescriptorsResponse,
  ListTimeSeriesRequest,
  ListTimeSeriesResponse} from './metric_service_pb';

export class MetricServiceClient {
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
        '/google.monitoring.v3.MetricService/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      this.methodInfoListMonitoredResourceDescriptors,
      callback);
  }

  methodInfoGetMonitoredResourceDescriptor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_monitored_resource_pb.MonitoredResourceDescriptor,
    (request: GetMonitoredResourceDescriptorRequest) => {
      return request.serializeBinary();
    },
    google_api_monitored_resource_pb.MonitoredResourceDescriptor.deserializeBinary
  );

  getMonitoredResourceDescriptor(
    request: GetMonitoredResourceDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_monitored_resource_pb.MonitoredResourceDescriptor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/GetMonitoredResourceDescriptor',
      request,
      metadata || {},
      this.methodInfoGetMonitoredResourceDescriptor,
      callback);
  }

  methodInfoListMetricDescriptors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListMetricDescriptorsResponse,
    (request: ListMetricDescriptorsRequest) => {
      return request.serializeBinary();
    },
    ListMetricDescriptorsResponse.deserializeBinary
  );

  listMetricDescriptors(
    request: ListMetricDescriptorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListMetricDescriptorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/ListMetricDescriptors',
      request,
      metadata || {},
      this.methodInfoListMetricDescriptors,
      callback);
  }

  methodInfoGetMetricDescriptor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_metric_pb.MetricDescriptor,
    (request: GetMetricDescriptorRequest) => {
      return request.serializeBinary();
    },
    google_api_metric_pb.MetricDescriptor.deserializeBinary
  );

  getMetricDescriptor(
    request: GetMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_metric_pb.MetricDescriptor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/GetMetricDescriptor',
      request,
      metadata || {},
      this.methodInfoGetMetricDescriptor,
      callback);
  }

  methodInfoCreateMetricDescriptor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_metric_pb.MetricDescriptor,
    (request: CreateMetricDescriptorRequest) => {
      return request.serializeBinary();
    },
    google_api_metric_pb.MetricDescriptor.deserializeBinary
  );

  createMetricDescriptor(
    request: CreateMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_metric_pb.MetricDescriptor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/CreateMetricDescriptor',
      request,
      metadata || {},
      this.methodInfoCreateMetricDescriptor,
      callback);
  }

  methodInfoDeleteMetricDescriptor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteMetricDescriptorRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteMetricDescriptor(
    request: DeleteMetricDescriptorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/DeleteMetricDescriptor',
      request,
      metadata || {},
      this.methodInfoDeleteMetricDescriptor,
      callback);
  }

  methodInfoListTimeSeries = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTimeSeriesResponse,
    (request: ListTimeSeriesRequest) => {
      return request.serializeBinary();
    },
    ListTimeSeriesResponse.deserializeBinary
  );

  listTimeSeries(
    request: ListTimeSeriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTimeSeriesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/ListTimeSeries',
      request,
      metadata || {},
      this.methodInfoListTimeSeries,
      callback);
  }

  methodInfoCreateTimeSeries = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CreateTimeSeriesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  createTimeSeries(
    request: CreateTimeSeriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.MetricService/CreateTimeSeries',
      request,
      metadata || {},
      this.methodInfoCreateTimeSeries,
      callback);
  }

}

