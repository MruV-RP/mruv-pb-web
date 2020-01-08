import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_tasks_v2_target_pb from '../../../../google/cloud/tasks/v2/target_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Queue extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAppEngineRoutingOverride(): google_cloud_tasks_v2_target_pb.AppEngineRouting | undefined;
  setAppEngineRoutingOverride(value?: google_cloud_tasks_v2_target_pb.AppEngineRouting): void;
  hasAppEngineRoutingOverride(): boolean;
  clearAppEngineRoutingOverride(): void;

  getRateLimits(): RateLimits | undefined;
  setRateLimits(value?: RateLimits): void;
  hasRateLimits(): boolean;
  clearRateLimits(): void;

  getRetryConfig(): RetryConfig | undefined;
  setRetryConfig(value?: RetryConfig): void;
  hasRetryConfig(): boolean;
  clearRetryConfig(): void;

  getState(): Queue.State;
  setState(value: Queue.State): void;

  getPurgeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurgeTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasPurgeTime(): boolean;
  clearPurgeTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Queue.AsObject;
  static toObject(includeInstance: boolean, msg: Queue): Queue.AsObject;
  static serializeBinaryToWriter(message: Queue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Queue;
  static deserializeBinaryFromReader(message: Queue, reader: jspb.BinaryReader): Queue;
}

export namespace Queue {
  export type AsObject = {
    name: string,
    appEngineRoutingOverride?: google_cloud_tasks_v2_target_pb.AppEngineRouting.AsObject,
    rateLimits?: RateLimits.AsObject,
    retryConfig?: RetryConfig.AsObject,
    state: Queue.State,
    purgeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    RUNNING = 1,
    PAUSED = 2,
    DISABLED = 3,
  }
}

export class RateLimits extends jspb.Message {
  getMaxDispatchesPerSecond(): number;
  setMaxDispatchesPerSecond(value: number): void;

  getMaxBurstSize(): number;
  setMaxBurstSize(value: number): void;

  getMaxConcurrentDispatches(): number;
  setMaxConcurrentDispatches(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateLimits.AsObject;
  static toObject(includeInstance: boolean, msg: RateLimits): RateLimits.AsObject;
  static serializeBinaryToWriter(message: RateLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateLimits;
  static deserializeBinaryFromReader(message: RateLimits, reader: jspb.BinaryReader): RateLimits;
}

export namespace RateLimits {
  export type AsObject = {
    maxDispatchesPerSecond: number,
    maxBurstSize: number,
    maxConcurrentDispatches: number,
  }
}

export class RetryConfig extends jspb.Message {
  getMaxAttempts(): number;
  setMaxAttempts(value: number): void;

  getMaxRetryDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxRetryDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasMaxRetryDuration(): boolean;
  clearMaxRetryDuration(): void;

  getMinBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMinBackoff(value?: google_protobuf_duration_pb.Duration): void;
  hasMinBackoff(): boolean;
  clearMinBackoff(): void;

  getMaxBackoff(): google_protobuf_duration_pb.Duration | undefined;
  setMaxBackoff(value?: google_protobuf_duration_pb.Duration): void;
  hasMaxBackoff(): boolean;
  clearMaxBackoff(): void;

  getMaxDoublings(): number;
  setMaxDoublings(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RetryConfig): RetryConfig.AsObject;
  static serializeBinaryToWriter(message: RetryConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryConfig;
  static deserializeBinaryFromReader(message: RetryConfig, reader: jspb.BinaryReader): RetryConfig;
}

export namespace RetryConfig {
  export type AsObject = {
    maxAttempts: number,
    maxRetryDuration?: google_protobuf_duration_pb.Duration.AsObject,
    minBackoff?: google_protobuf_duration_pb.Duration.AsObject,
    maxBackoff?: google_protobuf_duration_pb.Duration.AsObject,
    maxDoublings: number,
  }
}

