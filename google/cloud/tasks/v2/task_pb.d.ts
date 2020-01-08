import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_tasks_v2_target_pb from '../../../../google/cloud/tasks/v2/target_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Task extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAppEngineHttpRequest(): google_cloud_tasks_v2_target_pb.AppEngineHttpRequest | undefined;
  setAppEngineHttpRequest(value?: google_cloud_tasks_v2_target_pb.AppEngineHttpRequest): void;
  hasAppEngineHttpRequest(): boolean;
  clearAppEngineHttpRequest(): void;

  getHttpRequest(): google_cloud_tasks_v2_target_pb.HttpRequest | undefined;
  setHttpRequest(value?: google_cloud_tasks_v2_target_pb.HttpRequest): void;
  hasHttpRequest(): boolean;
  clearHttpRequest(): void;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasScheduleTime(): boolean;
  clearScheduleTime(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getDispatchDeadline(): google_protobuf_duration_pb.Duration | undefined;
  setDispatchDeadline(value?: google_protobuf_duration_pb.Duration): void;
  hasDispatchDeadline(): boolean;
  clearDispatchDeadline(): void;

  getDispatchCount(): number;
  setDispatchCount(value: number): void;

  getResponseCount(): number;
  setResponseCount(value: number): void;

  getFirstAttempt(): Attempt | undefined;
  setFirstAttempt(value?: Attempt): void;
  hasFirstAttempt(): boolean;
  clearFirstAttempt(): void;

  getLastAttempt(): Attempt | undefined;
  setLastAttempt(value?: Attempt): void;
  hasLastAttempt(): boolean;
  clearLastAttempt(): void;

  getView(): Task.View;
  setView(value: Task.View): void;

  getMessageTypeCase(): Task.MessageTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    name: string,
    appEngineHttpRequest?: google_cloud_tasks_v2_target_pb.AppEngineHttpRequest.AsObject,
    httpRequest?: google_cloud_tasks_v2_target_pb.HttpRequest.AsObject,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dispatchDeadline?: google_protobuf_duration_pb.Duration.AsObject,
    dispatchCount: number,
    responseCount: number,
    firstAttempt?: Attempt.AsObject,
    lastAttempt?: Attempt.AsObject,
    view: Task.View,
  }

  export enum View { 
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    FULL = 2,
  }

  export enum MessageTypeCase { 
    MESSAGE_TYPE_NOT_SET = 0,
    APP_ENGINE_HTTP_REQUEST = 2,
    HTTP_REQUEST = 3,
  }
}

export class Attempt extends jspb.Message {
  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasScheduleTime(): boolean;
  clearScheduleTime(): void;

  getDispatchTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDispatchTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDispatchTime(): boolean;
  clearDispatchTime(): void;

  getResponseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResponseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasResponseTime(): boolean;
  clearResponseTime(): void;

  getResponseStatus(): google_rpc_status_pb.Status | undefined;
  setResponseStatus(value?: google_rpc_status_pb.Status): void;
  hasResponseStatus(): boolean;
  clearResponseStatus(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attempt.AsObject;
  static toObject(includeInstance: boolean, msg: Attempt): Attempt.AsObject;
  static serializeBinaryToWriter(message: Attempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attempt;
  static deserializeBinaryFromReader(message: Attempt, reader: jspb.BinaryReader): Attempt;
}

export namespace Attempt {
  export type AsObject = {
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dispatchTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    responseStatus?: google_rpc_status_pb.Status.AsObject,
  }
}

