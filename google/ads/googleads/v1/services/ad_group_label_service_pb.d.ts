import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_ad_group_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetAdGroupLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupLabelRequest): GetAdGroupLabelRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupLabelRequest;
  static deserializeBinaryFromReader(message: GetAdGroupLabelRequest, reader: jspb.BinaryReader): GetAdGroupLabelRequest;
}

export namespace GetAdGroupLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<AdGroupLabelOperation>;
  setOperationsList(value: Array<AdGroupLabelOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: AdGroupLabelOperation, index?: number): AdGroupLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelsRequest): MutateAdGroupLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelsRequest, reader: jspb.BinaryReader): MutateAdGroupLabelsRequest;
}

export namespace MutateAdGroupLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupLabelOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupLabelOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupLabelOperation): AdGroupLabelOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupLabelOperation;
  static deserializeBinaryFromReader(message: AdGroupLabelOperation, reader: jspb.BinaryReader): AdGroupLabelOperation;
}

export namespace AdGroupLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_ad_group_label_pb.AdGroupLabel.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateAdGroupLabelsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateAdGroupLabelResult>;
  setResultsList(value: Array<MutateAdGroupLabelResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateAdGroupLabelResult, index?: number): MutateAdGroupLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelsResponse): MutateAdGroupLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelsResponse, reader: jspb.BinaryReader): MutateAdGroupLabelsResponse;
}

export namespace MutateAdGroupLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupLabelResult.AsObject>,
  }
}

export class MutateAdGroupLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelResult): MutateAdGroupLabelResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelResult;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelResult, reader: jspb.BinaryReader): MutateAdGroupLabelResult;
}

export namespace MutateAdGroupLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

