import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_ad_group_extension_setting_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_extension_setting_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetAdGroupExtensionSettingRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupExtensionSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupExtensionSettingRequest): GetAdGroupExtensionSettingRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupExtensionSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupExtensionSettingRequest;
  static deserializeBinaryFromReader(message: GetAdGroupExtensionSettingRequest, reader: jspb.BinaryReader): GetAdGroupExtensionSettingRequest;
}

export namespace GetAdGroupExtensionSettingRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupExtensionSettingsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<AdGroupExtensionSettingOperation>;
  setOperationsList(value: Array<AdGroupExtensionSettingOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: AdGroupExtensionSettingOperation, index?: number): AdGroupExtensionSettingOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupExtensionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupExtensionSettingsRequest): MutateAdGroupExtensionSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupExtensionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupExtensionSettingsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupExtensionSettingsRequest, reader: jspb.BinaryReader): MutateAdGroupExtensionSettingsRequest;
}

export namespace MutateAdGroupExtensionSettingsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupExtensionSettingOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupExtensionSettingOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupExtensionSettingOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupExtensionSettingOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupExtensionSettingOperation): AdGroupExtensionSettingOperation.AsObject;
  static serializeBinaryToWriter(message: AdGroupExtensionSettingOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupExtensionSettingOperation;
  static deserializeBinaryFromReader(message: AdGroupExtensionSettingOperation, reader: jspb.BinaryReader): AdGroupExtensionSettingOperation;
}

export namespace AdGroupExtensionSettingOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.AsObject,
    update?: google_ads_googleads_v1_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupExtensionSettingsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateAdGroupExtensionSettingResult>;
  setResultsList(value: Array<MutateAdGroupExtensionSettingResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateAdGroupExtensionSettingResult, index?: number): MutateAdGroupExtensionSettingResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupExtensionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupExtensionSettingsResponse): MutateAdGroupExtensionSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupExtensionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupExtensionSettingsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupExtensionSettingsResponse, reader: jspb.BinaryReader): MutateAdGroupExtensionSettingsResponse;
}

export namespace MutateAdGroupExtensionSettingsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupExtensionSettingResult.AsObject>,
  }
}

export class MutateAdGroupExtensionSettingResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupExtensionSettingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupExtensionSettingResult): MutateAdGroupExtensionSettingResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdGroupExtensionSettingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupExtensionSettingResult;
  static deserializeBinaryFromReader(message: MutateAdGroupExtensionSettingResult, reader: jspb.BinaryReader): MutateAdGroupExtensionSettingResult;
}

export namespace MutateAdGroupExtensionSettingResult {
  export type AsObject = {
    resourceName: string,
  }
}

