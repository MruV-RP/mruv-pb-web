import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_campaign_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/campaign_extension_setting_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetCampaignExtensionSettingRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignExtensionSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignExtensionSettingRequest): GetCampaignExtensionSettingRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignExtensionSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignExtensionSettingRequest;
  static deserializeBinaryFromReader(message: GetCampaignExtensionSettingRequest, reader: jspb.BinaryReader): GetCampaignExtensionSettingRequest;
}

export namespace GetCampaignExtensionSettingRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignExtensionSettingsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CampaignExtensionSettingOperation>;
  setOperationsList(value: Array<CampaignExtensionSettingOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CampaignExtensionSettingOperation, index?: number): CampaignExtensionSettingOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExtensionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExtensionSettingsRequest): MutateCampaignExtensionSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignExtensionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExtensionSettingsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignExtensionSettingsRequest, reader: jspb.BinaryReader): MutateCampaignExtensionSettingsRequest;
}

export namespace MutateCampaignExtensionSettingsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignExtensionSettingOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignExtensionSettingOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignExtensionSettingOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExtensionSettingOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExtensionSettingOperation): CampaignExtensionSettingOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignExtensionSettingOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExtensionSettingOperation;
  static deserializeBinaryFromReader(message: CampaignExtensionSettingOperation, reader: jspb.BinaryReader): CampaignExtensionSettingOperation;
}

export namespace CampaignExtensionSettingOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting.AsObject,
    update?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignExtensionSettingsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCampaignExtensionSettingResult>;
  setResultsList(value: Array<MutateCampaignExtensionSettingResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCampaignExtensionSettingResult, index?: number): MutateCampaignExtensionSettingResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExtensionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExtensionSettingsResponse): MutateCampaignExtensionSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignExtensionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExtensionSettingsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignExtensionSettingsResponse, reader: jspb.BinaryReader): MutateCampaignExtensionSettingsResponse;
}

export namespace MutateCampaignExtensionSettingsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignExtensionSettingResult.AsObject>,
  }
}

export class MutateCampaignExtensionSettingResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExtensionSettingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExtensionSettingResult): MutateCampaignExtensionSettingResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignExtensionSettingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExtensionSettingResult;
  static deserializeBinaryFromReader(message: MutateCampaignExtensionSettingResult, reader: jspb.BinaryReader): MutateCampaignExtensionSettingResult;
}

export namespace MutateCampaignExtensionSettingResult {
  export type AsObject = {
    resourceName: string,
  }
}

