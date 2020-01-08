import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_customer_label_pb from '../../../../../google/ads/googleads/v2/resources/customer_label_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetCustomerLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerLabelRequest): GetCustomerLabelRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerLabelRequest;
  static deserializeBinaryFromReader(message: GetCustomerLabelRequest, reader: jspb.BinaryReader): GetCustomerLabelRequest;
}

export namespace GetCustomerLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CustomerLabelOperation>;
  setOperationsList(value: Array<CustomerLabelOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CustomerLabelOperation, index?: number): CustomerLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerLabelsRequest): MutateCustomerLabelsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerLabelsRequest;
  static deserializeBinaryFromReader(message: MutateCustomerLabelsRequest, reader: jspb.BinaryReader): MutateCustomerLabelsRequest;
}

export namespace MutateCustomerLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CustomerLabelOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CustomerLabelOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLabelOperation): CustomerLabelOperation.AsObject;
  static serializeBinaryToWriter(message: CustomerLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLabelOperation;
  static deserializeBinaryFromReader(message: CustomerLabelOperation, reader: jspb.BinaryReader): CustomerLabelOperation;
}

export namespace CustomerLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateCustomerLabelsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCustomerLabelResult>;
  setResultsList(value: Array<MutateCustomerLabelResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCustomerLabelResult, index?: number): MutateCustomerLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerLabelsResponse): MutateCustomerLabelsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerLabelsResponse;
  static deserializeBinaryFromReader(message: MutateCustomerLabelsResponse, reader: jspb.BinaryReader): MutateCustomerLabelsResponse;
}

export namespace MutateCustomerLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCustomerLabelResult.AsObject>,
  }
}

export class MutateCustomerLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerLabelResult): MutateCustomerLabelResult.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerLabelResult;
  static deserializeBinaryFromReader(message: MutateCustomerLabelResult, reader: jspb.BinaryReader): MutateCustomerLabelResult;
}

export namespace MutateCustomerLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

