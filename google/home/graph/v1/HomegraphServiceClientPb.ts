/**
 * @fileoverview gRPC-Web generated client stub for google.home.graph.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_home_graph_v1_device_pb from '../../../../google/home/graph/v1/device_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

import {
  DeleteAgentUserRequest,
  QueryRequest,
  QueryResponse,
  ReportStateAndNotificationRequest,
  ReportStateAndNotificationResponse,
  RequestSyncDevicesRequest,
  RequestSyncDevicesResponse,
  SyncRequest,
  SyncResponse} from './homegraph_pb';

export class HomeGraphApiServiceClient {
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

  methodInfoRequestSyncDevices = new grpcWeb.AbstractClientBase.MethodInfo(
    RequestSyncDevicesResponse,
    (request: RequestSyncDevicesRequest) => {
      return request.serializeBinary();
    },
    RequestSyncDevicesResponse.deserializeBinary
  );

  requestSyncDevices(
    request: RequestSyncDevicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RequestSyncDevicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.home.graph.v1.HomeGraphApiService/RequestSyncDevices',
      request,
      metadata || {},
      this.methodInfoRequestSyncDevices,
      callback);
  }

  methodInfoReportStateAndNotification = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportStateAndNotificationResponse,
    (request: ReportStateAndNotificationRequest) => {
      return request.serializeBinary();
    },
    ReportStateAndNotificationResponse.deserializeBinary
  );

  reportStateAndNotification(
    request: ReportStateAndNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportStateAndNotificationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.home.graph.v1.HomeGraphApiService/ReportStateAndNotification',
      request,
      metadata || {},
      this.methodInfoReportStateAndNotification,
      callback);
  }

  methodInfoDeleteAgentUser = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAgentUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAgentUser(
    request: DeleteAgentUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.home.graph.v1.HomeGraphApiService/DeleteAgentUser',
      request,
      metadata || {},
      this.methodInfoDeleteAgentUser,
      callback);
  }

  methodInfoQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    QueryResponse,
    (request: QueryRequest) => {
      return request.serializeBinary();
    },
    QueryResponse.deserializeBinary
  );

  query(
    request: QueryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: QueryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.home.graph.v1.HomeGraphApiService/Query',
      request,
      metadata || {},
      this.methodInfoQuery,
      callback);
  }

  methodInfoSync = new grpcWeb.AbstractClientBase.MethodInfo(
    SyncResponse,
    (request: SyncRequest) => {
      return request.serializeBinary();
    },
    SyncResponse.deserializeBinary
  );

  sync(
    request: SyncRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SyncResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.home.graph.v1.HomeGraphApiService/Sync',
      request,
      metadata || {},
      this.methodInfoSync,
      callback);
  }

}

