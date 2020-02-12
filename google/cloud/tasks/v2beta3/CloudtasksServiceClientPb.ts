/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.tasks.v2beta3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_tasks_v2beta3_queue_pb from '../../../../google/cloud/tasks/v2beta3/queue_pb';
import * as google_cloud_tasks_v2beta3_task_pb from '../../../../google/cloud/tasks/v2beta3/task_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateQueueRequest,
  CreateTaskRequest,
  DeleteQueueRequest,
  DeleteTaskRequest,
  GetQueueRequest,
  GetTaskRequest,
  ListQueuesRequest,
  ListQueuesResponse,
  ListTasksRequest,
  ListTasksResponse,
  PauseQueueRequest,
  PurgeQueueRequest,
  ResumeQueueRequest,
  RunTaskRequest,
  UpdateQueueRequest} from './cloudtasks_pb';

export class CloudTasksClient {
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

  methodInfoListQueues = new grpcWeb.AbstractClientBase.MethodInfo(
    ListQueuesResponse,
    (request: ListQueuesRequest) => {
      return request.serializeBinary();
    },
    ListQueuesResponse.deserializeBinary
  );

  listQueues(
    request: ListQueuesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListQueuesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/ListQueues',
      request,
      metadata || {},
      this.methodInfoListQueues,
      callback);
  }

  methodInfoGetQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: GetQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  getQueue(
    request: GetQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/GetQueue',
      request,
      metadata || {},
      this.methodInfoGetQueue,
      callback);
  }

  methodInfoCreateQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: CreateQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  createQueue(
    request: CreateQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/CreateQueue',
      request,
      metadata || {},
      this.methodInfoCreateQueue,
      callback);
  }

  methodInfoUpdateQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: UpdateQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  updateQueue(
    request: UpdateQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/UpdateQueue',
      request,
      metadata || {},
      this.methodInfoUpdateQueue,
      callback);
  }

  methodInfoDeleteQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteQueueRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteQueue(
    request: DeleteQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/DeleteQueue',
      request,
      metadata || {},
      this.methodInfoDeleteQueue,
      callback);
  }

  methodInfoPurgeQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: PurgeQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  purgeQueue(
    request: PurgeQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/PurgeQueue',
      request,
      metadata || {},
      this.methodInfoPurgeQueue,
      callback);
  }

  methodInfoPauseQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: PauseQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  pauseQueue(
    request: PauseQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/PauseQueue',
      request,
      metadata || {},
      this.methodInfoPauseQueue,
      callback);
  }

  methodInfoResumeQueue = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_queue_pb.Queue,
    (request: ResumeQueueRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
  );

  resumeQueue(
    request: ResumeQueueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/ResumeQueue',
      request,
      metadata || {},
      this.methodInfoResumeQueue,
      callback);
  }

  methodInfoGetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoSetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
      callback);
  }

  methodInfoTestIamPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    (request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
  );

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

  methodInfoListTasks = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTasksResponse,
    (request: ListTasksRequest) => {
      return request.serializeBinary();
    },
    ListTasksResponse.deserializeBinary
  );

  listTasks(
    request: ListTasksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTasksResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/ListTasks',
      request,
      metadata || {},
      this.methodInfoListTasks,
      callback);
  }

  methodInfoGetTask = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_task_pb.Task,
    (request: GetTaskRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
  );

  getTask(
    request: GetTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/GetTask',
      request,
      metadata || {},
      this.methodInfoGetTask,
      callback);
  }

  methodInfoCreateTask = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_task_pb.Task,
    (request: CreateTaskRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
  );

  createTask(
    request: CreateTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/CreateTask',
      request,
      metadata || {},
      this.methodInfoCreateTask,
      callback);
  }

  methodInfoDeleteTask = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTaskRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTask(
    request: DeleteTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/DeleteTask',
      request,
      metadata || {},
      this.methodInfoDeleteTask,
      callback);
  }

  methodInfoRunTask = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_tasks_v2beta3_task_pb.Task,
    (request: RunTaskRequest) => {
      return request.serializeBinary();
    },
    google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
  );

  runTask(
    request: RunTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.tasks.v2beta3.CloudTasks/RunTask',
      request,
      metadata || {},
      this.methodInfoRunTask,
      callback);
  }

}

