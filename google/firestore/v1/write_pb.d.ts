import * as jspb from "google-protobuf"

import * as google_firestore_v1_common_pb from '../../../google/firestore/v1/common_pb';
import * as google_firestore_v1_document_pb from '../../../google/firestore/v1/document_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class Write extends jspb.Message {
  getUpdate(): google_firestore_v1_document_pb.Document | undefined;
  setUpdate(value?: google_firestore_v1_document_pb.Document): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getDelete(): string;
  setDelete(value: string): void;

  getTransform(): DocumentTransform | undefined;
  setTransform(value?: DocumentTransform): void;
  hasTransform(): boolean;
  clearTransform(): void;

  getUpdateMask(): google_firestore_v1_common_pb.DocumentMask | undefined;
  setUpdateMask(value?: google_firestore_v1_common_pb.DocumentMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCurrentDocument(): google_firestore_v1_common_pb.Precondition | undefined;
  setCurrentDocument(value?: google_firestore_v1_common_pb.Precondition): void;
  hasCurrentDocument(): boolean;
  clearCurrentDocument(): void;

  getOperationCase(): Write.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Write.AsObject;
  static toObject(includeInstance: boolean, msg: Write): Write.AsObject;
  static serializeBinaryToWriter(message: Write, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Write;
  static deserializeBinaryFromReader(message: Write, reader: jspb.BinaryReader): Write;
}

export namespace Write {
  export type AsObject = {
    update?: google_firestore_v1_document_pb.Document.AsObject,
    pb_delete: string,
    transform?: DocumentTransform.AsObject,
    updateMask?: google_firestore_v1_common_pb.DocumentMask.AsObject,
    currentDocument?: google_firestore_v1_common_pb.Precondition.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    UPDATE = 1,
    DELETE = 2,
    TRANSFORM = 6,
  }
}

export class DocumentTransform extends jspb.Message {
  getDocument(): string;
  setDocument(value: string): void;

  getFieldTransformsList(): Array<DocumentTransform.FieldTransform>;
  setFieldTransformsList(value: Array<DocumentTransform.FieldTransform>): void;
  clearFieldTransformsList(): void;
  addFieldTransforms(value?: DocumentTransform.FieldTransform, index?: number): DocumentTransform.FieldTransform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentTransform.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentTransform): DocumentTransform.AsObject;
  static serializeBinaryToWriter(message: DocumentTransform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentTransform;
  static deserializeBinaryFromReader(message: DocumentTransform, reader: jspb.BinaryReader): DocumentTransform;
}

export namespace DocumentTransform {
  export type AsObject = {
    document: string,
    fieldTransformsList: Array<DocumentTransform.FieldTransform.AsObject>,
  }

  export class FieldTransform extends jspb.Message {
    getFieldPath(): string;
    setFieldPath(value: string): void;

    getSetToServerValue(): DocumentTransform.FieldTransform.ServerValue;
    setSetToServerValue(value: DocumentTransform.FieldTransform.ServerValue): void;

    getIncrement(): google_firestore_v1_document_pb.Value | undefined;
    setIncrement(value?: google_firestore_v1_document_pb.Value): void;
    hasIncrement(): boolean;
    clearIncrement(): void;

    getMaximum(): google_firestore_v1_document_pb.Value | undefined;
    setMaximum(value?: google_firestore_v1_document_pb.Value): void;
    hasMaximum(): boolean;
    clearMaximum(): void;

    getMinimum(): google_firestore_v1_document_pb.Value | undefined;
    setMinimum(value?: google_firestore_v1_document_pb.Value): void;
    hasMinimum(): boolean;
    clearMinimum(): void;

    getAppendMissingElements(): google_firestore_v1_document_pb.ArrayValue | undefined;
    setAppendMissingElements(value?: google_firestore_v1_document_pb.ArrayValue): void;
    hasAppendMissingElements(): boolean;
    clearAppendMissingElements(): void;

    getRemoveAllFromArray(): google_firestore_v1_document_pb.ArrayValue | undefined;
    setRemoveAllFromArray(value?: google_firestore_v1_document_pb.ArrayValue): void;
    hasRemoveAllFromArray(): boolean;
    clearRemoveAllFromArray(): void;

    getTransformTypeCase(): FieldTransform.TransformTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldTransform.AsObject;
    static toObject(includeInstance: boolean, msg: FieldTransform): FieldTransform.AsObject;
    static serializeBinaryToWriter(message: FieldTransform, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldTransform;
    static deserializeBinaryFromReader(message: FieldTransform, reader: jspb.BinaryReader): FieldTransform;
  }

  export namespace FieldTransform {
    export type AsObject = {
      fieldPath: string,
      setToServerValue: DocumentTransform.FieldTransform.ServerValue,
      increment?: google_firestore_v1_document_pb.Value.AsObject,
      maximum?: google_firestore_v1_document_pb.Value.AsObject,
      minimum?: google_firestore_v1_document_pb.Value.AsObject,
      appendMissingElements?: google_firestore_v1_document_pb.ArrayValue.AsObject,
      removeAllFromArray?: google_firestore_v1_document_pb.ArrayValue.AsObject,
    }

    export enum ServerValue { 
      SERVER_VALUE_UNSPECIFIED = 0,
      REQUEST_TIME = 1,
    }

    export enum TransformTypeCase { 
      TRANSFORM_TYPE_NOT_SET = 0,
      SET_TO_SERVER_VALUE = 2,
      INCREMENT = 3,
      MAXIMUM = 4,
      MINIMUM = 5,
      APPEND_MISSING_ELEMENTS = 6,
      REMOVE_ALL_FROM_ARRAY = 7,
    }
  }

}

export class WriteResult extends jspb.Message {
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getTransformResultsList(): Array<google_firestore_v1_document_pb.Value>;
  setTransformResultsList(value: Array<google_firestore_v1_document_pb.Value>): void;
  clearTransformResultsList(): void;
  addTransformResults(value?: google_firestore_v1_document_pb.Value, index?: number): google_firestore_v1_document_pb.Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteResult.AsObject;
  static toObject(includeInstance: boolean, msg: WriteResult): WriteResult.AsObject;
  static serializeBinaryToWriter(message: WriteResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteResult;
  static deserializeBinaryFromReader(message: WriteResult, reader: jspb.BinaryReader): WriteResult;
}

export namespace WriteResult {
  export type AsObject = {
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    transformResultsList: Array<google_firestore_v1_document_pb.Value.AsObject>,
  }
}

export class DocumentChange extends jspb.Message {
  getDocument(): google_firestore_v1_document_pb.Document | undefined;
  setDocument(value?: google_firestore_v1_document_pb.Document): void;
  hasDocument(): boolean;
  clearDocument(): void;

  getTargetIdsList(): Array<number>;
  setTargetIdsList(value: Array<number>): void;
  clearTargetIdsList(): void;
  addTargetIds(value: number, index?: number): void;

  getRemovedTargetIdsList(): Array<number>;
  setRemovedTargetIdsList(value: Array<number>): void;
  clearRemovedTargetIdsList(): void;
  addRemovedTargetIds(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentChange.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentChange): DocumentChange.AsObject;
  static serializeBinaryToWriter(message: DocumentChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentChange;
  static deserializeBinaryFromReader(message: DocumentChange, reader: jspb.BinaryReader): DocumentChange;
}

export namespace DocumentChange {
  export type AsObject = {
    document?: google_firestore_v1_document_pb.Document.AsObject,
    targetIdsList: Array<number>,
    removedTargetIdsList: Array<number>,
  }
}

export class DocumentDelete extends jspb.Message {
  getDocument(): string;
  setDocument(value: string): void;

  getRemovedTargetIdsList(): Array<number>;
  setRemovedTargetIdsList(value: Array<number>): void;
  clearRemovedTargetIdsList(): void;
  addRemovedTargetIds(value: number, index?: number): void;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReadTime(): boolean;
  clearReadTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentDelete.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentDelete): DocumentDelete.AsObject;
  static serializeBinaryToWriter(message: DocumentDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentDelete;
  static deserializeBinaryFromReader(message: DocumentDelete, reader: jspb.BinaryReader): DocumentDelete;
}

export namespace DocumentDelete {
  export type AsObject = {
    document: string,
    removedTargetIdsList: Array<number>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DocumentRemove extends jspb.Message {
  getDocument(): string;
  setDocument(value: string): void;

  getRemovedTargetIdsList(): Array<number>;
  setRemovedTargetIdsList(value: Array<number>): void;
  clearRemovedTargetIdsList(): void;
  addRemovedTargetIds(value: number, index?: number): void;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReadTime(): boolean;
  clearReadTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRemove.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRemove): DocumentRemove.AsObject;
  static serializeBinaryToWriter(message: DocumentRemove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRemove;
  static deserializeBinaryFromReader(message: DocumentRemove, reader: jspb.BinaryReader): DocumentRemove;
}

export namespace DocumentRemove {
  export type AsObject = {
    document: string,
    removedTargetIdsList: Array<number>,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ExistenceFilter extends jspb.Message {
  getTargetId(): number;
  setTargetId(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistenceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ExistenceFilter): ExistenceFilter.AsObject;
  static serializeBinaryToWriter(message: ExistenceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistenceFilter;
  static deserializeBinaryFromReader(message: ExistenceFilter, reader: jspb.BinaryReader): ExistenceFilter;
}

export namespace ExistenceFilter {
  export type AsObject = {
    targetId: number,
    count: number,
  }
}

