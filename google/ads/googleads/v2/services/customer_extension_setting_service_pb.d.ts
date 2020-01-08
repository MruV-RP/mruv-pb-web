import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_customer_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/customer_extension_setting_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetCustomerExtensionSettingRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerExtensionSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerExtensionSettingRequest): GetCustomerExtensionSettingRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerExtensionSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerExtensionSettingRequest;
  static deserializeBinaryFromReader(message: GetCustomerExtensionSettingRequest, reader: jspb.BinaryReader): GetCustomerExtensionSettingRequest;
}

export namespace GetCustomerExtensionSettingRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerExtensionSettingsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CustomerExtensionSettingOperation>;
  setOperationsList(value: Array<CustomerExtensionSettingOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CustomerExtensionSettingOperation, index?: number): CustomerExtensionSettingOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingsRequest): MutateCustomerExtensionSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingsRequest;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingsRequest, reader: jspb.BinaryReader): MutateCustomerExtensionSettingsRequest;
}

export namespace MutateCustomerExtensionSettingsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerExtensionSettingOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CustomerExtensionSettingOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CustomerExtensionSettingOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExtensionSettingOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExtensionSettingOperation): CustomerExtensionSettingOperation.AsObject;
  static serializeBinaryToWriter(message: CustomerExtensionSettingOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExtensionSettingOperation;
  static deserializeBinaryFromReader(message: CustomerExtensionSettingOperation, reader: jspb.BinaryReader): CustomerExtensionSettingOperation;
}

export namespace CustomerExtensionSettingOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    update?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCustomerExtensionSettingsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCustomerExtensionSettingResult>;
  setResultsList(value: Array<MutateCustomerExtensionSettingResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCustomerExtensionSettingResult, index?: number): MutateCustomerExtensionSettingResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingsResponse): MutateCustomerExtensionSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingsResponse;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingsResponse, reader: jspb.BinaryReader): MutateCustomerExtensionSettingsResponse;
}

export namespace MutateCustomerExtensionSettingsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCustomerExtensionSettingResult.AsObject>,
  }
}

export class MutateCustomerExtensionSettingResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingResult): MutateCustomerExtensionSettingResult.AsObject;
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingResult;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingResult, reader: jspb.BinaryReader): MutateCustomerExtensionSettingResult;
}

export namespace MutateCustomerExtensionSettingResult {
  export type AsObject = {
    resourceName: string,
  }
}

