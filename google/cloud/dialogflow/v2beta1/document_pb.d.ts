import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2beta1_gcs_pb from '../../../../google/cloud/dialogflow/v2beta1/gcs_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

export class Document extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getKnowledgeTypesList(): Array<Document.KnowledgeType>;
  setKnowledgeTypesList(value: Array<Document.KnowledgeType>): void;
  clearKnowledgeTypesList(): void;
  addKnowledgeTypes(value: Document.KnowledgeType, index?: number): void;

  getContentUri(): string;
  setContentUri(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getRawContent(): Uint8Array | string;
  getRawContent_asU8(): Uint8Array;
  getRawContent_asB64(): string;
  setRawContent(value: Uint8Array | string): void;

  getSourceCase(): Document.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    name: string,
    displayName: string,
    mimeType: string,
    knowledgeTypesList: Array<Document.KnowledgeType>,
    contentUri: string,
    content: string,
    rawContent: Uint8Array | string,
  }

  export enum KnowledgeType { 
    KNOWLEDGE_TYPE_UNSPECIFIED = 0,
    FAQ = 1,
    EXTRACTIVE_QA = 2,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    CONTENT_URI = 5,
    CONTENT = 6,
    RAW_CONTENT = 9,
  }
}

export class ListDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsRequest): ListDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsRequest;
  static deserializeBinaryFromReader(message: ListDocumentsRequest, reader: jspb.BinaryReader): ListDocumentsRequest;
}

export namespace ListDocumentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDocumentsResponse extends jspb.Message {
  getDocumentsList(): Array<Document>;
  setDocumentsList(value: Array<Document>): void;
  clearDocumentsList(): void;
  addDocuments(value?: Document, index?: number): Document;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDocumentsResponse): ListDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDocumentsResponse;
  static deserializeBinaryFromReader(message: ListDocumentsResponse, reader: jspb.BinaryReader): ListDocumentsResponse;
}

export namespace ListDocumentsResponse {
  export type AsObject = {
    documentsList: Array<Document.AsObject>,
    nextPageToken: string,
  }
}

export class GetDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDocumentRequest): GetDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: GetDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDocumentRequest;
  static deserializeBinaryFromReader(message: GetDocumentRequest, reader: jspb.BinaryReader): GetDocumentRequest;
}

export namespace GetDocumentRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDocument(): Document | undefined;
  setDocument(value?: Document): void;
  hasDocument(): boolean;
  clearDocument(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDocumentRequest): CreateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDocumentRequest;
  static deserializeBinaryFromReader(message: CreateDocumentRequest, reader: jspb.BinaryReader): CreateDocumentRequest;
}

export namespace CreateDocumentRequest {
  export type AsObject = {
    parent: string,
    document?: Document.AsObject,
  }
}

export class DeleteDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentRequest): DeleteDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentRequest;
  static deserializeBinaryFromReader(message: DeleteDocumentRequest, reader: jspb.BinaryReader): DeleteDocumentRequest;
}

export namespace DeleteDocumentRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateDocumentRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): void;
  hasDocument(): boolean;
  clearDocument(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDocumentRequest): UpdateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDocumentRequest;
  static deserializeBinaryFromReader(message: UpdateDocumentRequest, reader: jspb.BinaryReader): UpdateDocumentRequest;
}

export namespace UpdateDocumentRequest {
  export type AsObject = {
    document?: Document.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class KnowledgeOperationMetadata extends jspb.Message {
  getState(): KnowledgeOperationMetadata.State;
  setState(value: KnowledgeOperationMetadata.State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeOperationMetadata): KnowledgeOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: KnowledgeOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeOperationMetadata;
  static deserializeBinaryFromReader(message: KnowledgeOperationMetadata, reader: jspb.BinaryReader): KnowledgeOperationMetadata;
}

export namespace KnowledgeOperationMetadata {
  export type AsObject = {
    state: KnowledgeOperationMetadata.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

export class ReloadDocumentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getGcsSource(): google_cloud_dialogflow_v2beta1_gcs_pb.GcsSource | undefined;
  setGcsSource(value?: google_cloud_dialogflow_v2beta1_gcs_pb.GcsSource): void;
  hasGcsSource(): boolean;
  clearGcsSource(): void;

  getSourceCase(): ReloadDocumentRequest.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReloadDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReloadDocumentRequest): ReloadDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: ReloadDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReloadDocumentRequest;
  static deserializeBinaryFromReader(message: ReloadDocumentRequest, reader: jspb.BinaryReader): ReloadDocumentRequest;
}

export namespace ReloadDocumentRequest {
  export type AsObject = {
    name: string,
    gcsSource?: google_cloud_dialogflow_v2beta1_gcs_pb.GcsSource.AsObject,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    GCS_SOURCE = 3,
  }
}

