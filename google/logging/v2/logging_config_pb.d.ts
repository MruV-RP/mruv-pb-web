import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

export class LogSink extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getOutputVersionFormat(): LogSink.VersionFormat;
  setOutputVersionFormat(value: LogSink.VersionFormat): void;

  getWriterIdentity(): string;
  setWriterIdentity(value: string): void;

  getIncludeChildren(): boolean;
  setIncludeChildren(value: boolean): void;

  getBigqueryOptions(): BigQueryOptions | undefined;
  setBigqueryOptions(value?: BigQueryOptions): void;
  hasBigqueryOptions(): boolean;
  clearBigqueryOptions(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getOptionsCase(): LogSink.OptionsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogSink.AsObject;
  static toObject(includeInstance: boolean, msg: LogSink): LogSink.AsObject;
  static serializeBinaryToWriter(message: LogSink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogSink;
  static deserializeBinaryFromReader(message: LogSink, reader: jspb.BinaryReader): LogSink;
}

export namespace LogSink {
  export type AsObject = {
    name: string,
    destination: string,
    filter: string,
    outputVersionFormat: LogSink.VersionFormat,
    writerIdentity: string,
    includeChildren: boolean,
    bigqueryOptions?: BigQueryOptions.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum VersionFormat { 
    VERSION_FORMAT_UNSPECIFIED = 0,
    V2 = 1,
    V1 = 2,
  }

  export enum OptionsCase { 
    OPTIONS_NOT_SET = 0,
    BIGQUERY_OPTIONS = 12,
  }
}

export class BigQueryOptions extends jspb.Message {
  getUsePartitionedTables(): boolean;
  setUsePartitionedTables(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BigQueryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BigQueryOptions): BigQueryOptions.AsObject;
  static serializeBinaryToWriter(message: BigQueryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BigQueryOptions;
  static deserializeBinaryFromReader(message: BigQueryOptions, reader: jspb.BinaryReader): BigQueryOptions;
}

export namespace BigQueryOptions {
  export type AsObject = {
    usePartitionedTables: boolean,
  }
}

export class ListSinksRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSinksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSinksRequest): ListSinksRequest.AsObject;
  static serializeBinaryToWriter(message: ListSinksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSinksRequest;
  static deserializeBinaryFromReader(message: ListSinksRequest, reader: jspb.BinaryReader): ListSinksRequest;
}

export namespace ListSinksRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListSinksResponse extends jspb.Message {
  getSinksList(): Array<LogSink>;
  setSinksList(value: Array<LogSink>): void;
  clearSinksList(): void;
  addSinks(value?: LogSink, index?: number): LogSink;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSinksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSinksResponse): ListSinksResponse.AsObject;
  static serializeBinaryToWriter(message: ListSinksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSinksResponse;
  static deserializeBinaryFromReader(message: ListSinksResponse, reader: jspb.BinaryReader): ListSinksResponse;
}

export namespace ListSinksResponse {
  export type AsObject = {
    sinksList: Array<LogSink.AsObject>,
    nextPageToken: string,
  }
}

export class GetSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSinkRequest): GetSinkRequest.AsObject;
  static serializeBinaryToWriter(message: GetSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSinkRequest;
  static deserializeBinaryFromReader(message: GetSinkRequest, reader: jspb.BinaryReader): GetSinkRequest;
}

export namespace GetSinkRequest {
  export type AsObject = {
    sinkName: string,
  }
}

export class CreateSinkRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getSink(): LogSink | undefined;
  setSink(value?: LogSink): void;
  hasSink(): boolean;
  clearSink(): void;

  getUniqueWriterIdentity(): boolean;
  setUniqueWriterIdentity(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSinkRequest): CreateSinkRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSinkRequest;
  static deserializeBinaryFromReader(message: CreateSinkRequest, reader: jspb.BinaryReader): CreateSinkRequest;
}

export namespace CreateSinkRequest {
  export type AsObject = {
    parent: string,
    sink?: LogSink.AsObject,
    uniqueWriterIdentity: boolean,
  }
}

export class UpdateSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): void;

  getSink(): LogSink | undefined;
  setSink(value?: LogSink): void;
  hasSink(): boolean;
  clearSink(): void;

  getUniqueWriterIdentity(): boolean;
  setUniqueWriterIdentity(value: boolean): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSinkRequest): UpdateSinkRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSinkRequest;
  static deserializeBinaryFromReader(message: UpdateSinkRequest, reader: jspb.BinaryReader): UpdateSinkRequest;
}

export namespace UpdateSinkRequest {
  export type AsObject = {
    sinkName: string,
    sink?: LogSink.AsObject,
    uniqueWriterIdentity: boolean,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteSinkRequest extends jspb.Message {
  getSinkName(): string;
  setSinkName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSinkRequest): DeleteSinkRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSinkRequest;
  static deserializeBinaryFromReader(message: DeleteSinkRequest, reader: jspb.BinaryReader): DeleteSinkRequest;
}

export namespace DeleteSinkRequest {
  export type AsObject = {
    sinkName: string,
  }
}

export class LogExclusion extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogExclusion.AsObject;
  static toObject(includeInstance: boolean, msg: LogExclusion): LogExclusion.AsObject;
  static serializeBinaryToWriter(message: LogExclusion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogExclusion;
  static deserializeBinaryFromReader(message: LogExclusion, reader: jspb.BinaryReader): LogExclusion;
}

export namespace LogExclusion {
  export type AsObject = {
    name: string,
    description: string,
    filter: string,
    disabled: boolean,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListExclusionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExclusionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListExclusionsRequest): ListExclusionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListExclusionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExclusionsRequest;
  static deserializeBinaryFromReader(message: ListExclusionsRequest, reader: jspb.BinaryReader): ListExclusionsRequest;
}

export namespace ListExclusionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListExclusionsResponse extends jspb.Message {
  getExclusionsList(): Array<LogExclusion>;
  setExclusionsList(value: Array<LogExclusion>): void;
  clearExclusionsList(): void;
  addExclusions(value?: LogExclusion, index?: number): LogExclusion;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListExclusionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListExclusionsResponse): ListExclusionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListExclusionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListExclusionsResponse;
  static deserializeBinaryFromReader(message: ListExclusionsResponse, reader: jspb.BinaryReader): ListExclusionsResponse;
}

export namespace ListExclusionsResponse {
  export type AsObject = {
    exclusionsList: Array<LogExclusion.AsObject>,
    nextPageToken: string,
  }
}

export class GetExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExclusionRequest): GetExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: GetExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExclusionRequest;
  static deserializeBinaryFromReader(message: GetExclusionRequest, reader: jspb.BinaryReader): GetExclusionRequest;
}

export namespace GetExclusionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateExclusionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getExclusion(): LogExclusion | undefined;
  setExclusion(value?: LogExclusion): void;
  hasExclusion(): boolean;
  clearExclusion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateExclusionRequest): CreateExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateExclusionRequest;
  static deserializeBinaryFromReader(message: CreateExclusionRequest, reader: jspb.BinaryReader): CreateExclusionRequest;
}

export namespace CreateExclusionRequest {
  export type AsObject = {
    parent: string,
    exclusion?: LogExclusion.AsObject,
  }
}

export class UpdateExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExclusion(): LogExclusion | undefined;
  setExclusion(value?: LogExclusion): void;
  hasExclusion(): boolean;
  clearExclusion(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateExclusionRequest): UpdateExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateExclusionRequest;
  static deserializeBinaryFromReader(message: UpdateExclusionRequest, reader: jspb.BinaryReader): UpdateExclusionRequest;
}

export namespace UpdateExclusionRequest {
  export type AsObject = {
    name: string,
    exclusion?: LogExclusion.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteExclusionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteExclusionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteExclusionRequest): DeleteExclusionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteExclusionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteExclusionRequest;
  static deserializeBinaryFromReader(message: DeleteExclusionRequest, reader: jspb.BinaryReader): DeleteExclusionRequest;
}

export namespace DeleteExclusionRequest {
  export type AsObject = {
    name: string,
  }
}

