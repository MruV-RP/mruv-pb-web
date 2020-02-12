import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_shared_criterion_pb from '../../../../../google/ads/googleads/v2/resources/shared_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetSharedCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSharedCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSharedCriterionRequest): GetSharedCriterionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSharedCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSharedCriterionRequest;
  static deserializeBinaryFromReader(message: GetSharedCriterionRequest, reader: jspb.BinaryReader): GetSharedCriterionRequest;
}

export namespace GetSharedCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateSharedCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<SharedCriterionOperation>;
  setOperationsList(value: Array<SharedCriterionOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: SharedCriterionOperation, index?: number): SharedCriterionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedCriteriaRequest): MutateSharedCriteriaRequest.AsObject;
  static serializeBinaryToWriter(message: MutateSharedCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateSharedCriteriaRequest, reader: jspb.BinaryReader): MutateSharedCriteriaRequest;
}

export namespace MutateSharedCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<SharedCriterionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class SharedCriterionOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): SharedCriterionOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: SharedCriterionOperation): SharedCriterionOperation.AsObject;
  static serializeBinaryToWriter(message: SharedCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedCriterionOperation;
  static deserializeBinaryFromReader(message: SharedCriterionOperation, reader: jspb.BinaryReader): SharedCriterionOperation;
}

export namespace SharedCriterionOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 3,
  }
}

export class MutateSharedCriteriaResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateSharedCriterionResult>;
  setResultsList(value: Array<MutateSharedCriterionResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateSharedCriterionResult, index?: number): MutateSharedCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedCriteriaResponse): MutateSharedCriteriaResponse.AsObject;
  static serializeBinaryToWriter(message: MutateSharedCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateSharedCriteriaResponse, reader: jspb.BinaryReader): MutateSharedCriteriaResponse;
}

export namespace MutateSharedCriteriaResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateSharedCriterionResult.AsObject>,
  }
}

export class MutateSharedCriterionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedCriterionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedCriterionResult): MutateSharedCriterionResult.AsObject;
  static serializeBinaryToWriter(message: MutateSharedCriterionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedCriterionResult;
  static deserializeBinaryFromReader(message: MutateSharedCriterionResult, reader: jspb.BinaryReader): MutateSharedCriterionResult;
}

export namespace MutateSharedCriterionResult {
  export type AsObject = {
    resourceName: string,
  }
}

