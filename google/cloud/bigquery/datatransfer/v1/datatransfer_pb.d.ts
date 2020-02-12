import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../../google/api/resource_pb';
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class DataSourceParameter extends jspb.Message {
  getParamId(): string;
  setParamId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): DataSourceParameter.Type;
  setType(value: DataSourceParameter.Type): void;

  getRequired(): boolean;
  setRequired(value: boolean): void;

  getRepeated(): boolean;
  setRepeated(value: boolean): void;

  getValidationRegex(): string;
  setValidationRegex(value: string): void;

  getAllowedValuesList(): Array<string>;
  setAllowedValuesList(value: Array<string>): void;
  clearAllowedValuesList(): void;
  addAllowedValues(value: string, index?: number): void;

  getMinValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMinValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasMinValue(): boolean;
  clearMinValue(): void;

  getMaxValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMaxValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasMaxValue(): boolean;
  clearMaxValue(): void;

  getFieldsList(): Array<DataSourceParameter>;
  setFieldsList(value: Array<DataSourceParameter>): void;
  clearFieldsList(): void;
  addFields(value?: DataSourceParameter, index?: number): DataSourceParameter;

  getValidationDescription(): string;
  setValidationDescription(value: string): void;

  getValidationHelpUrl(): string;
  setValidationHelpUrl(value: string): void;

  getImmutable(): boolean;
  setImmutable(value: boolean): void;

  getRecurse(): boolean;
  setRecurse(value: boolean): void;

  getDeprecated(): boolean;
  setDeprecated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceParameter.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceParameter): DataSourceParameter.AsObject;
  static serializeBinaryToWriter(message: DataSourceParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceParameter;
  static deserializeBinaryFromReader(message: DataSourceParameter, reader: jspb.BinaryReader): DataSourceParameter;
}

export namespace DataSourceParameter {
  export type AsObject = {
    paramId: string,
    displayName: string,
    description: string,
    type: DataSourceParameter.Type,
    required: boolean,
    repeated: boolean,
    validationRegex: string,
    allowedValuesList: Array<string>,
    minValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    maxValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    fieldsList: Array<DataSourceParameter.AsObject>,
    validationDescription: string,
    validationHelpUrl: string,
    immutable: boolean,
    recurse: boolean,
    deprecated: boolean,
  }

  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    STRING = 1,
    INTEGER = 2,
    DOUBLE = 3,
    BOOLEAN = 4,
    RECORD = 5,
    PLUS_PAGE = 6,
  }
}

export class DataSource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDataSourceId(): string;
  setDataSourceId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): void;
  clearScopesList(): void;
  addScopes(value: string, index?: number): void;

  getTransferType(): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferType;
  setTransferType(value: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferType): void;

  getSupportsMultipleTransfers(): boolean;
  setSupportsMultipleTransfers(value: boolean): void;

  getUpdateDeadlineSeconds(): number;
  setUpdateDeadlineSeconds(value: number): void;

  getDefaultSchedule(): string;
  setDefaultSchedule(value: string): void;

  getSupportsCustomSchedule(): boolean;
  setSupportsCustomSchedule(value: boolean): void;

  getParametersList(): Array<DataSourceParameter>;
  setParametersList(value: Array<DataSourceParameter>): void;
  clearParametersList(): void;
  addParameters(value?: DataSourceParameter, index?: number): DataSourceParameter;

  getHelpUrl(): string;
  setHelpUrl(value: string): void;

  getAuthorizationType(): DataSource.AuthorizationType;
  setAuthorizationType(value: DataSource.AuthorizationType): void;

  getDataRefreshType(): DataSource.DataRefreshType;
  setDataRefreshType(value: DataSource.DataRefreshType): void;

  getDefaultDataRefreshWindowDays(): number;
  setDefaultDataRefreshWindowDays(value: number): void;

  getManualRunsDisabled(): boolean;
  setManualRunsDisabled(value: boolean): void;

  getMinimumScheduleInterval(): google_protobuf_duration_pb.Duration | undefined;
  setMinimumScheduleInterval(value?: google_protobuf_duration_pb.Duration): void;
  hasMinimumScheduleInterval(): boolean;
  clearMinimumScheduleInterval(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSource.AsObject;
  static toObject(includeInstance: boolean, msg: DataSource): DataSource.AsObject;
  static serializeBinaryToWriter(message: DataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSource;
  static deserializeBinaryFromReader(message: DataSource, reader: jspb.BinaryReader): DataSource;
}

export namespace DataSource {
  export type AsObject = {
    name: string,
    dataSourceId: string,
    displayName: string,
    description: string,
    clientId: string,
    scopesList: Array<string>,
    transferType: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferType,
    supportsMultipleTransfers: boolean,
    updateDeadlineSeconds: number,
    defaultSchedule: string,
    supportsCustomSchedule: boolean,
    parametersList: Array<DataSourceParameter.AsObject>,
    helpUrl: string,
    authorizationType: DataSource.AuthorizationType,
    dataRefreshType: DataSource.DataRefreshType,
    defaultDataRefreshWindowDays: number,
    manualRunsDisabled: boolean,
    minimumScheduleInterval?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum AuthorizationType { 
    AUTHORIZATION_TYPE_UNSPECIFIED = 0,
    AUTHORIZATION_CODE = 1,
    GOOGLE_PLUS_AUTHORIZATION_CODE = 2,
  }

  export enum DataRefreshType { 
    DATA_REFRESH_TYPE_UNSPECIFIED = 0,
    SLIDING_WINDOW = 1,
    CUSTOM_SLIDING_WINDOW = 2,
  }
}

export class GetDataSourceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceRequest): GetDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceRequest;
  static deserializeBinaryFromReader(message: GetDataSourceRequest, reader: jspb.BinaryReader): GetDataSourceRequest;
}

export namespace GetDataSourceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDataSourcesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourcesRequest): ListDataSourcesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataSourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourcesRequest;
  static deserializeBinaryFromReader(message: ListDataSourcesRequest, reader: jspb.BinaryReader): ListDataSourcesRequest;
}

export namespace ListDataSourcesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListDataSourcesResponse extends jspb.Message {
  getDataSourcesList(): Array<DataSource>;
  setDataSourcesList(value: Array<DataSource>): void;
  clearDataSourcesList(): void;
  addDataSources(value?: DataSource, index?: number): DataSource;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourcesResponse): ListDataSourcesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataSourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourcesResponse;
  static deserializeBinaryFromReader(message: ListDataSourcesResponse, reader: jspb.BinaryReader): ListDataSourcesResponse;
}

export namespace ListDataSourcesResponse {
  export type AsObject = {
    dataSourcesList: Array<DataSource.AsObject>,
    nextPageToken: string,
  }
}

export class CreateTransferConfigRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTransferConfig(): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig | undefined;
  setTransferConfig(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig): void;
  hasTransferConfig(): boolean;
  clearTransferConfig(): void;

  getAuthorizationCode(): string;
  setAuthorizationCode(value: string): void;

  getVersionInfo(): string;
  setVersionInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferConfigRequest): CreateTransferConfigRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTransferConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferConfigRequest;
  static deserializeBinaryFromReader(message: CreateTransferConfigRequest, reader: jspb.BinaryReader): CreateTransferConfigRequest;
}

export namespace CreateTransferConfigRequest {
  export type AsObject = {
    parent: string,
    transferConfig?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.AsObject,
    authorizationCode: string,
    versionInfo: string,
  }
}

export class UpdateTransferConfigRequest extends jspb.Message {
  getTransferConfig(): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig | undefined;
  setTransferConfig(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig): void;
  hasTransferConfig(): boolean;
  clearTransferConfig(): void;

  getAuthorizationCode(): string;
  setAuthorizationCode(value: string): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getVersionInfo(): string;
  setVersionInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferConfigRequest): UpdateTransferConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTransferConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferConfigRequest;
  static deserializeBinaryFromReader(message: UpdateTransferConfigRequest, reader: jspb.BinaryReader): UpdateTransferConfigRequest;
}

export namespace UpdateTransferConfigRequest {
  export type AsObject = {
    transferConfig?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.AsObject,
    authorizationCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    versionInfo: string,
  }
}

export class GetTransferConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigRequest): GetTransferConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigRequest;
  static deserializeBinaryFromReader(message: GetTransferConfigRequest, reader: jspb.BinaryReader): GetTransferConfigRequest;
}

export namespace GetTransferConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteTransferConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTransferConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTransferConfigRequest): DeleteTransferConfigRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTransferConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTransferConfigRequest;
  static deserializeBinaryFromReader(message: DeleteTransferConfigRequest, reader: jspb.BinaryReader): DeleteTransferConfigRequest;
}

export namespace DeleteTransferConfigRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetTransferRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferRunRequest): GetTransferRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferRunRequest;
  static deserializeBinaryFromReader(message: GetTransferRunRequest, reader: jspb.BinaryReader): GetTransferRunRequest;
}

export namespace GetTransferRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteTransferRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTransferRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTransferRunRequest): DeleteTransferRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTransferRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTransferRunRequest;
  static deserializeBinaryFromReader(message: DeleteTransferRunRequest, reader: jspb.BinaryReader): DeleteTransferRunRequest;
}

export namespace DeleteTransferRunRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTransferConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDataSourceIdsList(): Array<string>;
  setDataSourceIdsList(value: Array<string>): void;
  clearDataSourceIdsList(): void;
  addDataSourceIds(value: string, index?: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsRequest): ListTransferConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTransferConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsRequest;
  static deserializeBinaryFromReader(message: ListTransferConfigsRequest, reader: jspb.BinaryReader): ListTransferConfigsRequest;
}

export namespace ListTransferConfigsRequest {
  export type AsObject = {
    parent: string,
    dataSourceIdsList: Array<string>,
    pageToken: string,
    pageSize: number,
  }
}

export class ListTransferConfigsResponse extends jspb.Message {
  getTransferConfigsList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;
  setTransferConfigsList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>): void;
  clearTransferConfigsList(): void;
  addTransferConfigs(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferConfigsResponse): ListTransferConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransferConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferConfigsResponse;
  static deserializeBinaryFromReader(message: ListTransferConfigsResponse, reader: jspb.BinaryReader): ListTransferConfigsResponse;
}

export namespace ListTransferConfigsResponse {
  export type AsObject = {
    transferConfigsList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.AsObject>,
    nextPageToken: string,
  }
}

export class ListTransferRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getStatesList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferState>;
  setStatesList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferState>): void;
  clearStatesList(): void;
  addStates(value: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferState, index?: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getRunAttempt(): ListTransferRunsRequest.RunAttempt;
  setRunAttempt(value: ListTransferRunsRequest.RunAttempt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferRunsRequest): ListTransferRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTransferRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferRunsRequest;
  static deserializeBinaryFromReader(message: ListTransferRunsRequest, reader: jspb.BinaryReader): ListTransferRunsRequest;
}

export namespace ListTransferRunsRequest {
  export type AsObject = {
    parent: string,
    statesList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferState>,
    pageToken: string,
    pageSize: number,
    runAttempt: ListTransferRunsRequest.RunAttempt,
  }

  export enum RunAttempt { 
    RUN_ATTEMPT_UNSPECIFIED = 0,
    LATEST = 1,
  }
}

export class ListTransferRunsResponse extends jspb.Message {
  getTransferRunsList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;
  setTransferRunsList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): void;
  clearTransferRunsList(): void;
  addTransferRuns(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferRunsResponse): ListTransferRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransferRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferRunsResponse;
  static deserializeBinaryFromReader(message: ListTransferRunsResponse, reader: jspb.BinaryReader): ListTransferRunsResponse;
}

export namespace ListTransferRunsResponse {
  export type AsObject = {
    transferRunsList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.AsObject>,
    nextPageToken: string,
  }
}

export class ListTransferLogsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getMessageTypesList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.MessageSeverity>;
  setMessageTypesList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.MessageSeverity>): void;
  clearMessageTypesList(): void;
  addMessageTypes(value: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.MessageSeverity, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferLogsRequest): ListTransferLogsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTransferLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferLogsRequest;
  static deserializeBinaryFromReader(message: ListTransferLogsRequest, reader: jspb.BinaryReader): ListTransferLogsRequest;
}

export namespace ListTransferLogsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
    messageTypesList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.MessageSeverity>,
  }
}

export class ListTransferLogsResponse extends jspb.Message {
  getTransferMessagesList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>;
  setTransferMessagesList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage>): void;
  clearTransferMessagesList(): void;
  addTransferMessages(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferLogsResponse): ListTransferLogsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransferLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferLogsResponse;
  static deserializeBinaryFromReader(message: ListTransferLogsResponse, reader: jspb.BinaryReader): ListTransferLogsResponse;
}

export namespace ListTransferLogsResponse {
  export type AsObject = {
    transferMessagesList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferMessage.AsObject>,
    nextPageToken: string,
  }
}

export class CheckValidCredsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckValidCredsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckValidCredsRequest): CheckValidCredsRequest.AsObject;
  static serializeBinaryToWriter(message: CheckValidCredsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckValidCredsRequest;
  static deserializeBinaryFromReader(message: CheckValidCredsRequest, reader: jspb.BinaryReader): CheckValidCredsRequest;
}

export namespace CheckValidCredsRequest {
  export type AsObject = {
    name: string,
  }
}

export class CheckValidCredsResponse extends jspb.Message {
  getHasValidCreds(): boolean;
  setHasValidCreds(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckValidCredsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckValidCredsResponse): CheckValidCredsResponse.AsObject;
  static serializeBinaryToWriter(message: CheckValidCredsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckValidCredsResponse;
  static deserializeBinaryFromReader(message: CheckValidCredsResponse, reader: jspb.BinaryReader): CheckValidCredsResponse;
}

export namespace CheckValidCredsResponse {
  export type AsObject = {
    hasValidCreds: boolean,
  }
}

export class ScheduleTransferRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleTransferRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleTransferRunsRequest): ScheduleTransferRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ScheduleTransferRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleTransferRunsRequest;
  static deserializeBinaryFromReader(message: ScheduleTransferRunsRequest, reader: jspb.BinaryReader): ScheduleTransferRunsRequest;
}

export namespace ScheduleTransferRunsRequest {
  export type AsObject = {
    parent: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ScheduleTransferRunsResponse extends jspb.Message {
  getRunsList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;
  setRunsList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): void;
  clearRunsList(): void;
  addRuns(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleTransferRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleTransferRunsResponse): ScheduleTransferRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ScheduleTransferRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleTransferRunsResponse;
  static deserializeBinaryFromReader(message: ScheduleTransferRunsResponse, reader: jspb.BinaryReader): ScheduleTransferRunsResponse;
}

export namespace ScheduleTransferRunsResponse {
  export type AsObject = {
    runsList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.AsObject>,
  }
}

export class StartManualTransferRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getRequestedTimeRange(): StartManualTransferRunsRequest.TimeRange | undefined;
  setRequestedTimeRange(value?: StartManualTransferRunsRequest.TimeRange): void;
  hasRequestedTimeRange(): boolean;
  clearRequestedTimeRange(): void;

  getRequestedRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestedRunTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasRequestedRunTime(): boolean;
  clearRequestedRunTime(): void;

  getTimeCase(): StartManualTransferRunsRequest.TimeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartManualTransferRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartManualTransferRunsRequest): StartManualTransferRunsRequest.AsObject;
  static serializeBinaryToWriter(message: StartManualTransferRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartManualTransferRunsRequest;
  static deserializeBinaryFromReader(message: StartManualTransferRunsRequest, reader: jspb.BinaryReader): StartManualTransferRunsRequest;
}

export namespace StartManualTransferRunsRequest {
  export type AsObject = {
    parent: string,
    requestedTimeRange?: StartManualTransferRunsRequest.TimeRange.AsObject,
    requestedRunTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class TimeRange extends jspb.Message {
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasStartTime(): boolean;
    clearStartTime(): void;

    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasEndTime(): boolean;
    clearEndTime(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
    static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRange;
    static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
  }

  export namespace TimeRange {
    export type AsObject = {
      startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }


  export enum TimeCase { 
    TIME_NOT_SET = 0,
    REQUESTED_TIME_RANGE = 3,
    REQUESTED_RUN_TIME = 4,
  }
}

export class StartManualTransferRunsResponse extends jspb.Message {
  getRunsList(): Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;
  setRunsList(value: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>): void;
  clearRunsList(): void;
  addRuns(value?: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun, index?: number): google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartManualTransferRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartManualTransferRunsResponse): StartManualTransferRunsResponse.AsObject;
  static serializeBinaryToWriter(message: StartManualTransferRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartManualTransferRunsResponse;
  static deserializeBinaryFromReader(message: StartManualTransferRunsResponse, reader: jspb.BinaryReader): StartManualTransferRunsResponse;
}

export namespace StartManualTransferRunsResponse {
  export type AsObject = {
    runsList: Array<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.AsObject>,
  }
}

