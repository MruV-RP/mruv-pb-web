import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_ad_group_ad_label_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_ad_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetAdGroupAdLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupAdLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupAdLabelRequest): GetAdGroupAdLabelRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupAdLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupAdLabelRequest;
  static deserializeBinaryFromReader(message: GetAdGroupAdLabelRequest, reader: jspb.BinaryReader): GetAdGroupAdLabelRequest;
}

export namespace GetAdGroupAdLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupAdLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<AdGroupAdLabelOperation>;
  setOperationsList(value: Array<AdGroupAdLabelOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: AdGroupAdLabelOperation, index?: number): AdGroupAdLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdLabelsRequest): MutateAdGroupAdLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdLabelsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupAdLabelsRequest, reader: jspb.BinaryReader): MutateAdGroupAdLabelsRequest;
}

export namespace MutateAdGroupAdLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupAdLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupAdLabelOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupAdLabelOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdLabelOperation): AdGroupAdLabelOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdLabelOperation;
  static deserializeBinaryFromReader(message: AdGroupAdLabelOperation, reader: jspb.BinaryReader): AdGroupAdLabelOperation;
}

export namespace AdGroupAdLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateAdGroupAdLabelsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateAdGroupAdLabelResult>;
  setResultsList(value: Array<MutateAdGroupAdLabelResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateAdGroupAdLabelResult, index?: number): MutateAdGroupAdLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdLabelsResponse): MutateAdGroupAdLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdLabelsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupAdLabelsResponse, reader: jspb.BinaryReader): MutateAdGroupAdLabelsResponse;
}

export namespace MutateAdGroupAdLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupAdLabelResult.AsObject>,
  }
}

export class MutateAdGroupAdLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupAdLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupAdLabelResult): MutateAdGroupAdLabelResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupAdLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupAdLabelResult;
  static deserializeBinaryFromReader(message: MutateAdGroupAdLabelResult, reader: jspb.BinaryReader): MutateAdGroupAdLabelResult;
}

export namespace MutateAdGroupAdLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

