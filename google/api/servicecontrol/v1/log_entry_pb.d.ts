import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_logging_type_log_severity_pb from '../../../../google/logging/type/log_severity_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class LogEntry extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestamp(): boolean;
  clearTimestamp(): void;

  getSeverity(): google_logging_type_log_severity_pb.LogSeverity;
  setSeverity(value: google_logging_type_log_severity_pb.LogSeverity): void;

  getInsertId(): string;
  setInsertId(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getProtoPayload(): google_protobuf_any_pb.Any | undefined;
  setProtoPayload(value?: google_protobuf_any_pb.Any): void;
  hasProtoPayload(): boolean;
  clearProtoPayload(): void;

  getTextPayload(): string;
  setTextPayload(value: string): void;

  getStructPayload(): google_protobuf_struct_pb.Struct | undefined;
  setStructPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasStructPayload(): boolean;
  clearStructPayload(): void;

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
    name: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: google_logging_type_log_severity_pb.LogSeverity,
    insertId: string,
    labelsMap: Array<[string, string]>,
    protoPayload?: google_protobuf_any_pb.Any.AsObject,
    textPayload: string,
    structPayload?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    PROTO_PAYLOAD = 2,
    TEXT_PAYLOAD = 3,
    STRUCT_PAYLOAD = 6,
  }
}
