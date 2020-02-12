import * as jspb from "google-protobuf"

import * as google_firestore_admin_v1beta2_index_pb from '../../../../google/firestore/admin/v1beta2/index_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class IndexOperationMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getIndex(): string;
  setIndex(value: string): void;

  getState(): OperationState;
  setState(value: OperationState): void;

  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;
  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;

  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;
  hasProgressBytes(): boolean;
  clearProgressBytes(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: IndexOperationMetadata): IndexOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: IndexOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexOperationMetadata;
  static deserializeBinaryFromReader(message: IndexOperationMetadata, reader: jspb.BinaryReader): IndexOperationMetadata;
}

export namespace IndexOperationMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    index: string,
    state: OperationState,
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
  }
}

export class FieldOperationMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getField(): string;
  setField(value: string): void;

  getIndexConfigDeltasList(): Array<FieldOperationMetadata.IndexConfigDelta>;
  setIndexConfigDeltasList(value: Array<FieldOperationMetadata.IndexConfigDelta>): void;
  clearIndexConfigDeltasList(): void;
  addIndexConfigDeltas(value?: FieldOperationMetadata.IndexConfigDelta, index?: number): FieldOperationMetadata.IndexConfigDelta;

  getState(): OperationState;
  setState(value: OperationState): void;

  getDocumentProgress(): Progress | undefined;
  setDocumentProgress(value?: Progress): void;
  hasDocumentProgress(): boolean;
  clearDocumentProgress(): void;

  getBytesProgress(): Progress | undefined;
  setBytesProgress(value?: Progress): void;
  hasBytesProgress(): boolean;
  clearBytesProgress(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOperationMetadata): FieldOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: FieldOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOperationMetadata;
  static deserializeBinaryFromReader(message: FieldOperationMetadata, reader: jspb.BinaryReader): FieldOperationMetadata;
}

export namespace FieldOperationMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    field: string,
    indexConfigDeltasList: Array<FieldOperationMetadata.IndexConfigDelta.AsObject>,
    state: OperationState,
    documentProgress?: Progress.AsObject,
    bytesProgress?: Progress.AsObject,
  }

  export class IndexConfigDelta extends jspb.Message {
    getChangeType(): FieldOperationMetadata.IndexConfigDelta.ChangeType;
    setChangeType(value: FieldOperationMetadata.IndexConfigDelta.ChangeType): void;

    getIndex(): google_firestore_admin_v1beta2_index_pb.Index | undefined;
    setIndex(value?: google_firestore_admin_v1beta2_index_pb.Index): void;
    hasIndex(): boolean;
    clearIndex(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfigDelta.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfigDelta): IndexConfigDelta.AsObject;
    static serializeBinaryToWriter(message: IndexConfigDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfigDelta;
    static deserializeBinaryFromReader(message: IndexConfigDelta, reader: jspb.BinaryReader): IndexConfigDelta;
  }

  export namespace IndexConfigDelta {
    export type AsObject = {
      changeType: FieldOperationMetadata.IndexConfigDelta.ChangeType,
      index?: google_firestore_admin_v1beta2_index_pb.Index.AsObject,
    }

    export enum ChangeType { 
      CHANGE_TYPE_UNSPECIFIED = 0,
      ADD = 1,
      REMOVE = 2,
    }
  }

}

export class ExportDocumentsMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getOperationState(): OperationState;
  setOperationState(value: OperationState): void;

  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;
  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;

  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;
  hasProgressBytes(): boolean;
  clearProgressBytes(): void;

  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  clearCollectionIdsList(): void;
  addCollectionIds(value: string, index?: number): void;

  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDocumentsMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDocumentsMetadata): ExportDocumentsMetadata.AsObject;
  static serializeBinaryToWriter(message: ExportDocumentsMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDocumentsMetadata;
  static deserializeBinaryFromReader(message: ExportDocumentsMetadata, reader: jspb.BinaryReader): ExportDocumentsMetadata;
}

export namespace ExportDocumentsMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationState: OperationState,
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    collectionIdsList: Array<string>,
    outputUriPrefix: string,
  }
}

export class ImportDocumentsMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getOperationState(): OperationState;
  setOperationState(value: OperationState): void;

  getProgressDocuments(): Progress | undefined;
  setProgressDocuments(value?: Progress): void;
  hasProgressDocuments(): boolean;
  clearProgressDocuments(): void;

  getProgressBytes(): Progress | undefined;
  setProgressBytes(value?: Progress): void;
  hasProgressBytes(): boolean;
  clearProgressBytes(): void;

  getCollectionIdsList(): Array<string>;
  setCollectionIdsList(value: Array<string>): void;
  clearCollectionIdsList(): void;
  addCollectionIds(value: string, index?: number): void;

  getInputUriPrefix(): string;
  setInputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDocumentsMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDocumentsMetadata): ImportDocumentsMetadata.AsObject;
  static serializeBinaryToWriter(message: ImportDocumentsMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDocumentsMetadata;
  static deserializeBinaryFromReader(message: ImportDocumentsMetadata, reader: jspb.BinaryReader): ImportDocumentsMetadata;
}

export namespace ImportDocumentsMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    operationState: OperationState,
    progressDocuments?: Progress.AsObject,
    progressBytes?: Progress.AsObject,
    collectionIdsList: Array<string>,
    inputUriPrefix: string,
  }
}

export class ExportDocumentsResponse extends jspb.Message {
  getOutputUriPrefix(): string;
  setOutputUriPrefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDocumentsResponse): ExportDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ExportDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDocumentsResponse;
  static deserializeBinaryFromReader(message: ExportDocumentsResponse, reader: jspb.BinaryReader): ExportDocumentsResponse;
}

export namespace ExportDocumentsResponse {
  export type AsObject = {
    outputUriPrefix: string,
  }
}

export class Progress extends jspb.Message {
  getEstimatedWork(): number;
  setEstimatedWork(value: number): void;

  getCompletedWork(): number;
  setCompletedWork(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    estimatedWork: number,
    completedWork: number,
  }
}

export enum OperationState { 
  OPERATION_STATE_UNSPECIFIED = 0,
  INITIALIZING = 1,
  PROCESSING = 2,
  CANCELLING = 3,
  FINALIZING = 4,
  SUCCESSFUL = 5,
  FAILED = 6,
  CANCELLED = 7,
}
