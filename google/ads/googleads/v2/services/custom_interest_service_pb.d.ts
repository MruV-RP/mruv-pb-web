import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_custom_interest_pb from '../../../../../google/ads/googleads/v2/resources/custom_interest_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetCustomInterestRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomInterestRequest): GetCustomInterestRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomInterestRequest;
  static deserializeBinaryFromReader(message: GetCustomInterestRequest, reader: jspb.BinaryReader): GetCustomInterestRequest;
}

export namespace GetCustomInterestRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomInterestsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CustomInterestOperation>;
  setOperationsList(value: Array<CustomInterestOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CustomInterestOperation, index?: number): CustomInterestOperation;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestsRequest): MutateCustomInterestsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCustomInterestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestsRequest;
  static deserializeBinaryFromReader(message: MutateCustomInterestsRequest, reader: jspb.BinaryReader): MutateCustomInterestsRequest;
}

export namespace MutateCustomInterestsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomInterestOperation.AsObject>,
    validateOnly: boolean,
  }
}

export class CustomInterestOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getOperationCase(): CustomInterestOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestOperation): CustomInterestOperation.AsObject;
  static serializeBinaryToWriter(message: CustomInterestOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestOperation;
  static deserializeBinaryFromReader(message: CustomInterestOperation, reader: jspb.BinaryReader): CustomInterestOperation;
}

export namespace CustomInterestOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
    update?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
  }
}

export class MutateCustomInterestsResponse extends jspb.Message {
  getResultsList(): Array<MutateCustomInterestResult>;
  setResultsList(value: Array<MutateCustomInterestResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCustomInterestResult, index?: number): MutateCustomInterestResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestsResponse): MutateCustomInterestsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCustomInterestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestsResponse;
  static deserializeBinaryFromReader(message: MutateCustomInterestsResponse, reader: jspb.BinaryReader): MutateCustomInterestsResponse;
}

export namespace MutateCustomInterestsResponse {
  export type AsObject = {
    resultsList: Array<MutateCustomInterestResult.AsObject>,
  }
}

export class MutateCustomInterestResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestResult): MutateCustomInterestResult.AsObject;
  static serializeBinaryToWriter(message: MutateCustomInterestResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestResult;
  static deserializeBinaryFromReader(message: MutateCustomInterestResult, reader: jspb.BinaryReader): MutateCustomInterestResult;
}

export namespace MutateCustomInterestResult {
  export type AsObject = {
    resourceName: string,
  }
}

