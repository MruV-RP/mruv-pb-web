import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_ad_group_criterion_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetAdGroupCriterionLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupCriterionLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupCriterionLabelRequest): GetAdGroupCriterionLabelRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupCriterionLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupCriterionLabelRequest;
  static deserializeBinaryFromReader(message: GetAdGroupCriterionLabelRequest, reader: jspb.BinaryReader): GetAdGroupCriterionLabelRequest;
}

export namespace GetAdGroupCriterionLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupCriterionLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<AdGroupCriterionLabelOperation>;
  setOperationsList(value: Array<AdGroupCriterionLabelOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: AdGroupCriterionLabelOperation, index?: number): AdGroupCriterionLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriterionLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriterionLabelsRequest): MutateAdGroupCriterionLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriterionLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriterionLabelsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupCriterionLabelsRequest, reader: jspb.BinaryReader): MutateAdGroupCriterionLabelsRequest;
}

export namespace MutateAdGroupCriterionLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupCriterionLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupCriterionLabelOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupCriterionLabelOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionLabelOperation): AdGroupCriterionLabelOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupCriterionLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionLabelOperation;
  static deserializeBinaryFromReader(message: AdGroupCriterionLabelOperation, reader: jspb.BinaryReader): AdGroupCriterionLabelOperation;
}

export namespace AdGroupCriterionLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateAdGroupCriterionLabelsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateAdGroupCriterionLabelResult>;
  setResultsList(value: Array<MutateAdGroupCriterionLabelResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateAdGroupCriterionLabelResult, index?: number): MutateAdGroupCriterionLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriterionLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriterionLabelsResponse): MutateAdGroupCriterionLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriterionLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriterionLabelsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupCriterionLabelsResponse, reader: jspb.BinaryReader): MutateAdGroupCriterionLabelsResponse;
}

export namespace MutateAdGroupCriterionLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupCriterionLabelResult.AsObject>,
  }
}

export class MutateAdGroupCriterionLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriterionLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriterionLabelResult): MutateAdGroupCriterionLabelResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupCriterionLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriterionLabelResult;
  static deserializeBinaryFromReader(message: MutateAdGroupCriterionLabelResult, reader: jspb.BinaryReader): MutateAdGroupCriterionLabelResult;
}

export namespace MutateAdGroupCriterionLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

