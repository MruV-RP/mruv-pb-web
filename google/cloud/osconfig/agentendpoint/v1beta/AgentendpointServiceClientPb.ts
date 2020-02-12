/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.osconfig.agentendpoint.v1beta
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_cloud_osconfig_agentendpoint_v1beta_tasks_pb from '../../../../../google/cloud/osconfig/agentendpoint/v1beta/tasks_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

import {
  ReceiveTaskNotificationRequest,
  ReceiveTaskNotificationResponse,
  ReportTaskCompleteRequest,
  ReportTaskCompleteResponse,
  ReportTaskProgressRequest,
  ReportTaskProgressResponse,
  StartNextTaskRequest,
  StartNextTaskResponse} from './agentendpoint_pb';

export class AgentEndpointServiceClient {
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

  methodInfoReceiveTaskNotification = new grpcWeb.AbstractClientBase.MethodInfo(
    ReceiveTaskNotificationResponse,
    (request: ReceiveTaskNotificationRequest) => {
      return request.serializeBinary();
    },
    ReceiveTaskNotificationResponse.deserializeBinary
  );

  receiveTaskNotification(
    request: ReceiveTaskNotificationRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReceiveTaskNotification',
      request,
      metadata || {},
      this.methodInfoReceiveTaskNotification);
  }

  methodInfoStartNextTask = new grpcWeb.AbstractClientBase.MethodInfo(
    StartNextTaskResponse,
    (request: StartNextTaskRequest) => {
      return request.serializeBinary();
    },
    StartNextTaskResponse.deserializeBinary
  );

  startNextTask(
    request: StartNextTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StartNextTaskResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/StartNextTask',
      request,
      metadata || {},
      this.methodInfoStartNextTask,
      callback);
  }

  methodInfoReportTaskProgress = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportTaskProgressResponse,
    (request: ReportTaskProgressRequest) => {
      return request.serializeBinary();
    },
    ReportTaskProgressResponse.deserializeBinary
  );

  reportTaskProgress(
    request: ReportTaskProgressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportTaskProgressResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReportTaskProgress',
      request,
      metadata || {},
      this.methodInfoReportTaskProgress,
      callback);
  }

  methodInfoReportTaskComplete = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportTaskCompleteResponse,
    (request: ReportTaskCompleteRequest) => {
      return request.serializeBinary();
    },
    ReportTaskCompleteResponse.deserializeBinary
  );

  reportTaskComplete(
    request: ReportTaskCompleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportTaskCompleteResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService/ReportTaskComplete',
      request,
      metadata || {},
      this.methodInfoReportTaskComplete,
      callback);
  }

}

