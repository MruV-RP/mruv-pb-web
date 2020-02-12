/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_monitoring_v3_uptime_pb from '../../../google/monitoring/v3/uptime_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateUptimeCheckConfigRequest,
  DeleteUptimeCheckConfigRequest,
  GetUptimeCheckConfigRequest,
  ListUptimeCheckConfigsRequest,
  ListUptimeCheckConfigsResponse,
  ListUptimeCheckIpsRequest,
  ListUptimeCheckIpsResponse,
  UpdateUptimeCheckConfigRequest} from './uptime_service_pb';

export class UptimeCheckServiceClient {
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

  methodInfoListUptimeCheckConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUptimeCheckConfigsResponse,
    (request: ListUptimeCheckConfigsRequest) => {
      return request.serializeBinary();
    },
    ListUptimeCheckConfigsResponse.deserializeBinary
  );

  listUptimeCheckConfigs(
    request: ListUptimeCheckConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUptimeCheckConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckConfigs',
      request,
      metadata || {},
      this.methodInfoListUptimeCheckConfigs,
      callback);
  }

  methodInfoGetUptimeCheckConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    (request: GetUptimeCheckConfigRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
  );

  getUptimeCheckConfig(
    request: GetUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/GetUptimeCheckConfig',
      request,
      metadata || {},
      this.methodInfoGetUptimeCheckConfig,
      callback);
  }

  methodInfoCreateUptimeCheckConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    (request: CreateUptimeCheckConfigRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
  );

  createUptimeCheckConfig(
    request: CreateUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/CreateUptimeCheckConfig',
      request,
      metadata || {},
      this.methodInfoCreateUptimeCheckConfig,
      callback);
  }

  methodInfoUpdateUptimeCheckConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_uptime_pb.UptimeCheckConfig,
    (request: UpdateUptimeCheckConfigRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
  );

  updateUptimeCheckConfig(
    request: UpdateUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/UpdateUptimeCheckConfig',
      request,
      metadata || {},
      this.methodInfoUpdateUptimeCheckConfig,
      callback);
  }

  methodInfoDeleteUptimeCheckConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteUptimeCheckConfigRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteUptimeCheckConfig(
    request: DeleteUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/DeleteUptimeCheckConfig',
      request,
      metadata || {},
      this.methodInfoDeleteUptimeCheckConfig,
      callback);
  }

  methodInfoListUptimeCheckIps = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUptimeCheckIpsResponse,
    (request: ListUptimeCheckIpsRequest) => {
      return request.serializeBinary();
    },
    ListUptimeCheckIpsResponse.deserializeBinary
  );

  listUptimeCheckIps(
    request: ListUptimeCheckIpsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUptimeCheckIpsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckIps',
      request,
      metadata || {},
      this.methodInfoListUptimeCheckIps,
      callback);
  }

}

