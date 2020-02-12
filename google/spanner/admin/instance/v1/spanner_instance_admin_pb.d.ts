import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ReplicaInfo extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  getType(): ReplicaInfo.ReplicaType;
  setType(value: ReplicaInfo.ReplicaType): void;

  getDefaultLeaderLocation(): boolean;
  setDefaultLeaderLocation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplicaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ReplicaInfo): ReplicaInfo.AsObject;
  static serializeBinaryToWriter(message: ReplicaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplicaInfo;
  static deserializeBinaryFromReader(message: ReplicaInfo, reader: jspb.BinaryReader): ReplicaInfo;
}

export namespace ReplicaInfo {
  export type AsObject = {
    location: string,
    type: ReplicaInfo.ReplicaType,
    defaultLeaderLocation: boolean,
  }

  export enum ReplicaType { 
    TYPE_UNSPECIFIED = 0,
    READ_WRITE = 1,
    READ_ONLY = 2,
    WITNESS = 3,
  }
}

export class InstanceConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getReplicasList(): Array<ReplicaInfo>;
  setReplicasList(value: Array<ReplicaInfo>): void;
  clearReplicasList(): void;
  addReplicas(value?: ReplicaInfo, index?: number): ReplicaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceConfig): InstanceConfig.AsObject;
  static serializeBinaryToWriter(message: InstanceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceConfig;
  static deserializeBinaryFromReader(message: InstanceConfig, reader: jspb.BinaryReader): InstanceConfig;
}

export namespace InstanceConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    replicasList: Array<ReplicaInfo.AsObject>,
  }
}

export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConfig(): string;
  setConfig(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getNodeCount(): number;
  setNodeCount(value: number): void;

  getState(): Instance.State;
  setState(value: Instance.State): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getEndpointUrisList(): Array<string>;
  setEndpointUrisList(value: Array<string>): void;
  clearEndpointUrisList(): void;
  addEndpointUris(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    name: string,
    config: string,
    displayName: string,
    nodeCount: number,
    state: Instance.State,
    labelsMap: Array<[string, string]>,
    endpointUrisList: Array<string>,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
  }
}

export class ListInstanceConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstanceConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstanceConfigsRequest): ListInstanceConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstanceConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstanceConfigsRequest;
  static deserializeBinaryFromReader(message: ListInstanceConfigsRequest, reader: jspb.BinaryReader): ListInstanceConfigsRequest;
}

export namespace ListInstanceConfigsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListInstanceConfigsResponse extends jspb.Message {
  getInstanceConfigsList(): Array<InstanceConfig>;
  setInstanceConfigsList(value: Array<InstanceConfig>): void;
  clearInstanceConfigsList(): void;
  addInstanceConfigs(value?: InstanceConfig, index?: number): InstanceConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstanceConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstanceConfigsResponse): ListInstanceConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstanceConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstanceConfigsResponse;
  static deserializeBinaryFromReader(message: ListInstanceConfigsResponse, reader: jspb.BinaryReader): ListInstanceConfigsResponse;
}

export namespace ListInstanceConfigsResponse {
  export type AsObject = {
    instanceConfigsList: Array<InstanceConfig.AsObject>,
    nextPageToken: string,
  }
}

export class GetInstanceConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceConfigRequest): GetInstanceConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceConfigRequest;
  static deserializeBinaryFromReader(message: GetInstanceConfigRequest, reader: jspb.BinaryReader): GetInstanceConfigRequest;
}

export namespace GetInstanceConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasFieldMask(): boolean;
  clearFieldMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceRequest): GetInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceRequest;
  static deserializeBinaryFromReader(message: GetInstanceRequest, reader: jspb.BinaryReader): GetInstanceRequest;
}

export namespace GetInstanceRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateInstanceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getInstanceId(): string;
  setInstanceId(value: string): void;

  getInstance(): Instance | undefined;
  setInstance(value?: Instance): void;
  hasInstance(): boolean;
  clearInstance(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceRequest): CreateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceRequest;
  static deserializeBinaryFromReader(message: CreateInstanceRequest, reader: jspb.BinaryReader): CreateInstanceRequest;
}

export namespace CreateInstanceRequest {
  export type AsObject = {
    parent: string,
    instanceId: string,
    instance?: Instance.AsObject,
  }
}

export class ListInstancesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesRequest): ListInstancesRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesRequest;
  static deserializeBinaryFromReader(message: ListInstancesRequest, reader: jspb.BinaryReader): ListInstancesRequest;
}

export namespace ListInstancesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListInstancesResponse extends jspb.Message {
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): void;
  clearInstancesList(): void;
  addInstances(value?: Instance, index?: number): Instance;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstancesResponse): ListInstancesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstancesResponse;
  static deserializeBinaryFromReader(message: ListInstancesResponse, reader: jspb.BinaryReader): ListInstancesResponse;
}

export namespace ListInstancesResponse {
  export type AsObject = {
    instancesList: Array<Instance.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateInstanceRequest extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): void;
  hasInstance(): boolean;
  clearInstance(): void;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasFieldMask(): boolean;
  clearFieldMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
  static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
  export type AsObject = {
    instance?: Instance.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstanceRequest): DeleteInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstanceRequest;
  static deserializeBinaryFromReader(message: DeleteInstanceRequest, reader: jspb.BinaryReader): DeleteInstanceRequest;
}

export namespace DeleteInstanceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateInstanceMetadata extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): void;
  hasInstance(): boolean;
  clearInstance(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getCancelTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCancelTime(): boolean;
  clearCancelTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceMetadata): CreateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceMetadata;
  static deserializeBinaryFromReader(message: CreateInstanceMetadata, reader: jspb.BinaryReader): CreateInstanceMetadata;
}

export namespace CreateInstanceMetadata {
  export type AsObject = {
    instance?: Instance.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateInstanceMetadata extends jspb.Message {
  getInstance(): Instance | undefined;
  setInstance(value?: Instance): void;
  hasInstance(): boolean;
  clearInstance(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getCancelTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCancelTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCancelTime(): boolean;
  clearCancelTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceMetadata): UpdateInstanceMetadata.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadata;
  static deserializeBinaryFromReader(message: UpdateInstanceMetadata, reader: jspb.BinaryReader): UpdateInstanceMetadata;
}

export namespace UpdateInstanceMetadata {
  export type AsObject = {
    instance?: Instance.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

