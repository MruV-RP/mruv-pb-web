/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.remoteworkers.v1test2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  AddTaskLogRequest,
  AddTaskLogResponse,
  GetTaskRequest,
  Task,
  TaskResult,
  UpdateTaskResultRequest} from './tasks_pb';

export class TasksClient {
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

  methodInfoGetTask = new grpcWeb.AbstractClientBase.MethodInfo(
    Task,
    (request: GetTaskRequest) => {
      return request.serializeBinary();
    },
    Task.deserializeBinary
  );

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.remoteworkers.v1test2.Tasks/GetTask',
      request,
      metadata || {},
      this.methodInfoGetTask,
      callback);
  }

  methodInfoUpdateTaskResult = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskResult,
    (request: UpdateTaskResultRequest) => {
      return request.serializeBinary();
    },
    TaskResult.deserializeBinary
  );

  updateTaskResult(
    request: UpdateTaskResultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskResult) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.remoteworkers.v1test2.Tasks/UpdateTaskResult',
      request,
      metadata || {},
      this.methodInfoUpdateTaskResult,
      callback);
  }

  methodInfoAddTaskLog = new grpcWeb.AbstractClientBase.MethodInfo(
    AddTaskLogResponse,
    (request: AddTaskLogRequest) => {
      return request.serializeBinary();
    },
    AddTaskLogResponse.deserializeBinary
  );

  addTaskLog(
    request: AddTaskLogRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddTaskLogResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.remoteworkers.v1test2.Tasks/AddTaskLog',
      request,
      metadata || {},
      this.methodInfoAddTaskLog,
      callback);
  }

}

