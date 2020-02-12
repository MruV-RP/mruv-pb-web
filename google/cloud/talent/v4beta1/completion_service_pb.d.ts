import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';

export class CompleteQueryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): void;
  clearLanguageCodesList(): void;
  addLanguageCodes(value: string, index?: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getScope(): CompleteQueryRequest.CompletionScope;
  setScope(value: CompleteQueryRequest.CompletionScope): void;

  getType(): CompleteQueryRequest.CompletionType;
  setType(value: CompleteQueryRequest.CompletionType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteQueryRequest): CompleteQueryRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteQueryRequest;
  static deserializeBinaryFromReader(message: CompleteQueryRequest, reader: jspb.BinaryReader): CompleteQueryRequest;
}

export namespace CompleteQueryRequest {
  export type AsObject = {
    parent: string,
    query: string,
    languageCodesList: Array<string>,
    pageSize: number,
    company: string,
    scope: CompleteQueryRequest.CompletionScope,
    type: CompleteQueryRequest.CompletionType,
  }

  export enum CompletionScope { 
    COMPLETION_SCOPE_UNSPECIFIED = 0,
    TENANT = 1,
    PUBLIC = 2,
  }

  export enum CompletionType { 
    COMPLETION_TYPE_UNSPECIFIED = 0,
    JOB_TITLE = 1,
    COMPANY_NAME = 2,
    COMBINED = 3,
  }
}

export class CompleteQueryResponse extends jspb.Message {
  getCompletionResultsList(): Array<CompleteQueryResponse.CompletionResult>;
  setCompletionResultsList(value: Array<CompleteQueryResponse.CompletionResult>): void;
  clearCompletionResultsList(): void;
  addCompletionResults(value?: CompleteQueryResponse.CompletionResult, index?: number): CompleteQueryResponse.CompletionResult;

  getMetadata(): google_cloud_talent_v4beta1_common_pb.ResponseMetadata | undefined;
  setMetadata(value?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteQueryResponse): CompleteQueryResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteQueryResponse;
  static deserializeBinaryFromReader(message: CompleteQueryResponse, reader: jspb.BinaryReader): CompleteQueryResponse;
}

export namespace CompleteQueryResponse {
  export type AsObject = {
    completionResultsList: Array<CompleteQueryResponse.CompletionResult.AsObject>,
    metadata?: google_cloud_talent_v4beta1_common_pb.ResponseMetadata.AsObject,
  }

  export class CompletionResult extends jspb.Message {
    getSuggestion(): string;
    setSuggestion(value: string): void;

    getType(): CompleteQueryRequest.CompletionType;
    setType(value: CompleteQueryRequest.CompletionType): void;

    getImageUri(): string;
    setImageUri(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletionResult.AsObject;
    static toObject(includeInstance: boolean, msg: CompletionResult): CompletionResult.AsObject;
    static serializeBinaryToWriter(message: CompletionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletionResult;
    static deserializeBinaryFromReader(message: CompletionResult, reader: jspb.BinaryReader): CompletionResult;
  }

  export namespace CompletionResult {
    export type AsObject = {
      suggestion: string,
      type: CompleteQueryRequest.CompletionType,
      imageUri: string,
    }
  }

}

