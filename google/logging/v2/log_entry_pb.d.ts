import * as jspb from "google-protobuf"

import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_logging_type_http_request_pb from '../../../google/logging/type/http_request_pb';
import * as google_logging_type_log_severity_pb from '../../../google/logging/type/log_severity_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class LogEntry extends jspb.Message {
  getLogName(): string;
  setLogName(value: string): void;

  getResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setResource(value?: google_api_monitored_resource_pb.MonitoredResource): void;
  hasResource(): boolean;
  clearResource(): void;

  getProtoPayload(): google_protobuf_any_pb.Any | undefined;
  setProtoPayload(value?: google_protobuf_any_pb.Any): void;
  hasProtoPayload(): boolean;
  clearProtoPayload(): void;

  getTextPayload(): string;
  setTextPayload(value: string): void;

  getJsonPayload(): google_protobuf_struct_pb.Struct | undefined;
  setJsonPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasJsonPayload(): boolean;
  clearJsonPayload(): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  getReceiveTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceiveTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReceiveTimestamp(): boolean;
  clearReceiveTimestamp(): void;

  getSeverity(): google_logging_type_log_severity_pb.LogSeverity;
  setSeverity(value: google_logging_type_log_severity_pb.LogSeverity): void;

  getInsertId(): string;
  setInsertId(value: string): void;

  getHttpRequest(): google_logging_type_http_request_pb.HttpRequest | undefined;
  setHttpRequest(value?: google_logging_type_http_request_pb.HttpRequest): void;
  hasHttpRequest(): boolean;
  clearHttpRequest(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getMetadata(): google_api_monitored_resource_pb.MonitoredResourceMetadata | undefined;
  setMetadata(value?: google_api_monitored_resource_pb.MonitoredResourceMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getOperation(): LogEntryOperation | undefined;
  setOperation(value?: LogEntryOperation): void;
  hasOperation(): boolean;
  clearOperation(): void;

  getTrace(): string;
  setTrace(value: string): void;

  getSpanId(): string;
  setSpanId(value: string): void;

  getTraceSampled(): boolean;
  setTraceSampled(value: boolean): void;

  getSourceLocation(): LogEntrySourceLocation | undefined;
  setSourceLocation(value?: LogEntrySourceLocation): void;
  hasSourceLocation(): boolean;
  clearSourceLocation(): void;

  getPayloadCase(): LogEntry.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    logName: string,
    resource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    protoPayload?: google_protobuf_any_pb.Any.AsObject,
    textPayload: string,
    jsonPayload?: google_protobuf_struct_pb.Struct.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    receiveTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: google_logging_type_log_severity_pb.LogSeverity,
    insertId: string,
    httpRequest?: google_logging_type_http_request_pb.HttpRequest.AsObject,
    labelsMap: Array<[string, string]>,
    metadata?: google_api_monitored_resource_pb.MonitoredResourceMetadata.AsObject,
    operation?: LogEntryOperation.AsObject,
    trace: string,
    spanId: string,
    traceSampled: boolean,
    sourceLocation?: LogEntrySourceLocation.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    PROTO_PAYLOAD = 2,
    TEXT_PAYLOAD = 3,
    JSON_PAYLOAD = 6,
  }
}

export class LogEntryOperation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProducer(): string;
  setProducer(value: string): void;

  getFirst(): boolean;
  setFirst(value: boolean): void;

  getLast(): boolean;
  setLast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntryOperation.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntryOperation): LogEntryOperation.AsObject;
  static serializeBinaryToWriter(message: LogEntryOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntryOperation;
  static deserializeBinaryFromReader(message: LogEntryOperation, reader: jspb.BinaryReader): LogEntryOperation;
}

export namespace LogEntryOperation {
  export type AsObject = {
    id: string,
    producer: string,
    first: boolean,
    last: boolean,
  }
}

export class LogEntrySourceLocation extends jspb.Message {
  getFile(): string;
  setFile(value: string): void;

  getLine(): number;
  setLine(value: number): void;

  getFunction(): string;
  setFunction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntrySourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntrySourceLocation): LogEntrySourceLocation.AsObject;
  static serializeBinaryToWriter(message: LogEntrySourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntrySourceLocation;
  static deserializeBinaryFromReader(message: LogEntrySourceLocation, reader: jspb.BinaryReader): LogEntrySourceLocation;
}

export namespace LogEntrySourceLocation {
  export type AsObject = {
    file: string,
    line: number,
    pb_function: string,
  }
}

