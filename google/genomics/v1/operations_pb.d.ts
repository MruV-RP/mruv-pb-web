import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class OperationMetadata extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getRequest(): google_protobuf_any_pb.Any | undefined;
  setRequest(value?: google_protobuf_any_pb.Any): void;
  hasRequest(): boolean;
  clearRequest(): void;

  getEventsList(): Array<OperationEvent>;
  setEventsList(value: Array<OperationEvent>): void;
  clearEventsList(): void;
  addEvents(value?: OperationEvent, index?: number): OperationEvent;

  getClientId(): string;
  setClientId(value: string): void;

  getRuntimeMetadata(): google_protobuf_any_pb.Any | undefined;
  setRuntimeMetadata(value?: google_protobuf_any_pb.Any): void;
  hasRuntimeMetadata(): boolean;
  clearRuntimeMetadata(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    projectId: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    request?: google_protobuf_any_pb.Any.AsObject,
    eventsList: Array<OperationEvent.AsObject>,
    clientId: string,
    runtimeMetadata?: google_protobuf_any_pb.Any.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class OperationEvent extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OperationEvent): OperationEvent.AsObject;
  static serializeBinaryToWriter(message: OperationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationEvent;
  static deserializeBinaryFromReader(message: OperationEvent, reader: jspb.BinaryReader): OperationEvent;
}

export namespace OperationEvent {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
  }
}

