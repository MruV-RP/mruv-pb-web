import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Instance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getAlternativeLocationId(): string;
  setAlternativeLocationId(value: string): void;

  getRedisVersion(): string;
  setRedisVersion(value: string): void;

  getReservedIpRange(): string;
  setReservedIpRange(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getCurrentLocationId(): string;
  setCurrentLocationId(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getState(): Instance.State;
  setState(value: Instance.State): void;

  getStatusMessage(): string;
  setStatusMessage(value: string): void;

  getRedisConfigsMap(): jspb.Map<string, string>;
  clearRedisConfigsMap(): void;

  getTier(): Instance.Tier;
  setTier(value: Instance.Tier): void;

  getMemorySizeGb(): number;
  setMemorySizeGb(value: number): void;

  getAuthorizedNetwork(): string;
  setAuthorizedNetwork(value: string): void;

  getPersistenceIamIdentity(): string;
  setPersistenceIamIdentity(value: string): void;

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
    displayName: string,
    labelsMap: Array<[string, string]>,
    locationId: string,
    alternativeLocationId: string,
    redisVersion: string,
    reservedIpRange: string,
    host: string,
    port: number,
    currentLocationId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Instance.State,
    statusMessage: string,
    redisConfigsMap: Array<[string, string]>,
    tier: Instance.Tier,
    memorySizeGb: number,
    authorizedNetwork: string,
    persistenceIamIdentity: string,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    UPDATING = 3,
    DELETING = 4,
    REPAIRING = 5,
    MAINTENANCE = 6,
    IMPORTING = 8,
    FAILING_OVER = 9,
  }

  export enum Tier { 
    TIER_UNSPECIFIED = 0,
    BASIC = 1,
    STANDARD_HA = 3,
  }
}

export class ListInstancesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

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
  }
}

export class ListInstancesResponse extends jspb.Message {
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): void;
  clearInstancesList(): void;
  addInstances(value?: Instance, index?: number): Instance;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getUnreachableList(): Array<string>;
  setUnreachableList(value: Array<string>): void;
  clearUnreachableList(): void;
  addUnreachable(value: string, index?: number): void;

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
    unreachableList: Array<string>,
  }
}

export class GetInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

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

export class UpdateInstanceRequest extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getInstance(): Instance | undefined;
  setInstance(value?: Instance): void;
  hasInstance(): boolean;
  clearInstance(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
  static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    instance?: Instance.AsObject,
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

export class GcsSource extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GcsSource): GcsSource.AsObject;
  static serializeBinaryToWriter(message: GcsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsSource;
  static deserializeBinaryFromReader(message: GcsSource, reader: jspb.BinaryReader): GcsSource;
}

export namespace GcsSource {
  export type AsObject = {
    uri: string,
  }
}

export class InputConfig extends jspb.Message {
  getGcsSource(): GcsSource | undefined;
  setGcsSource(value?: GcsSource): void;
  hasGcsSource(): boolean;
  clearGcsSource(): void;

  getSourceCase(): InputConfig.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputConfig): InputConfig.AsObject;
  static serializeBinaryToWriter(message: InputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputConfig;
  static deserializeBinaryFromReader(message: InputConfig, reader: jspb.BinaryReader): InputConfig;
}

export namespace InputConfig {
  export type AsObject = {
    gcsSource?: GcsSource.AsObject,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 1,
  }
}

export class ImportInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getInputConfig(): InputConfig | undefined;
  setInputConfig(value?: InputConfig): void;
  hasInputConfig(): boolean;
  clearInputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportInstanceRequest): ImportInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: ImportInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportInstanceRequest;
  static deserializeBinaryFromReader(message: ImportInstanceRequest, reader: jspb.BinaryReader): ImportInstanceRequest;
}

export namespace ImportInstanceRequest {
  export type AsObject = {
    name: string,
    inputConfig?: InputConfig.AsObject,
  }
}

export class GcsDestination extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    uri: string,
  }
}

export class OutputConfig extends jspb.Message {
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;

  getDestinationCase(): OutputConfig.DestinationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
  }

  export enum DestinationCase { 
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
  }
}

export class ExportInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportInstanceRequest): ExportInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: ExportInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportInstanceRequest;
  static deserializeBinaryFromReader(message: ExportInstanceRequest, reader: jspb.BinaryReader): ExportInstanceRequest;
}

export namespace ExportInstanceRequest {
  export type AsObject = {
    name: string,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class FailoverInstanceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDataProtectionMode(): FailoverInstanceRequest.DataProtectionMode;
  setDataProtectionMode(value: FailoverInstanceRequest.DataProtectionMode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailoverInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FailoverInstanceRequest): FailoverInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: FailoverInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailoverInstanceRequest;
  static deserializeBinaryFromReader(message: FailoverInstanceRequest, reader: jspb.BinaryReader): FailoverInstanceRequest;
}

export namespace FailoverInstanceRequest {
  export type AsObject = {
    name: string,
    dataProtectionMode: FailoverInstanceRequest.DataProtectionMode,
  }

  export enum DataProtectionMode { 
    DATA_PROTECTION_MODE_UNSPECIFIED = 0,
    LIMITED_DATA_LOSS = 1,
    FORCE_DATA_LOSS = 2,
  }
}

export class OperationMetadata extends jspb.Message {
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getTarget(): string;
  setTarget(value: string): void;

  getVerb(): string;
  setVerb(value: string): void;

  getStatusDetail(): string;
  setStatusDetail(value: string): void;

  getCancelRequested(): boolean;
  setCancelRequested(value: boolean): void;

  getApiVersion(): string;
  setApiVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    target: string,
    verb: string,
    statusDetail: string,
    cancelRequested: boolean,
    apiVersion: string,
  }
}

export class LocationMetadata extends jspb.Message {
  getAvailableZonesMap(): jspb.Map<string, ZoneMetadata>;
  clearAvailableZonesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMetadata): LocationMetadata.AsObject;
  static serializeBinaryToWriter(message: LocationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMetadata;
  static deserializeBinaryFromReader(message: LocationMetadata, reader: jspb.BinaryReader): LocationMetadata;
}

export namespace LocationMetadata {
  export type AsObject = {
    availableZonesMap: Array<[string, ZoneMetadata.AsObject]>,
  }
}

export class ZoneMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneMetadata): ZoneMetadata.AsObject;
  static serializeBinaryToWriter(message: ZoneMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneMetadata;
  static deserializeBinaryFromReader(message: ZoneMetadata, reader: jspb.BinaryReader): ZoneMetadata;
}

export namespace ZoneMetadata {
  export type AsObject = {
  }
}

