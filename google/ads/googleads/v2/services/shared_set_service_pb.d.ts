import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_shared_set_pb from '../../../../../google/ads/googleads/v2/resources/shared_set_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetSharedSetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSharedSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSharedSetRequest): GetSharedSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetSharedSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSharedSetRequest;
  static deserializeBinaryFromReader(message: GetSharedSetRequest, reader: jspb.BinaryReader): GetSharedSetRequest;
}

export namespace GetSharedSetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateSharedSetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<SharedSetOperation>;
  setOperationsList(value: Array<SharedSetOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: SharedSetOperation, index?: number): SharedSetOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetsRequest): MutateSharedSetsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateSharedSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetsRequest;
  static deserializeBinaryFromReader(message: MutateSharedSetsRequest, reader: jspb.BinaryReader): MutateSharedSetsRequest;
}

export namespace MutateSharedSetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<SharedSetOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class SharedSetOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_shared_set_pb.SharedSet | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_shared_set_pb.SharedSet | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): SharedSetOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetOperation): SharedSetOperation.AsObject;
  static serializeBinaryToWriter(message: SharedSetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetOperation;
  static deserializeBinaryFromReader(message: SharedSetOperation, reader: jspb.BinaryReader): SharedSetOperation;
}

export namespace SharedSetOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet.AsObject,
    update?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateSharedSetsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateSharedSetResult>;
  setResultsList(value: Array<MutateSharedSetResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateSharedSetResult, index?: number): MutateSharedSetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetsResponse): MutateSharedSetsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateSharedSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetsResponse;
  static deserializeBinaryFromReader(message: MutateSharedSetsResponse, reader: jspb.BinaryReader): MutateSharedSetsResponse;
}

export namespace MutateSharedSetsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateSharedSetResult.AsObject>,
  }
}

export class MutateSharedSetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetResult): MutateSharedSetResult.AsObject;
  static serializeBinaryToWriter(message: MutateSharedSetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetResult;
  static deserializeBinaryFromReader(message: MutateSharedSetResult, reader: jspb.BinaryReader): MutateSharedSetResult;
}

export namespace MutateSharedSetResult {
  export type AsObject = {
    resourceName: string,
  }
}

