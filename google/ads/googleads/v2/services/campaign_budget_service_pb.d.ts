import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v2/resources/campaign_budget_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetCampaignBudgetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignBudgetRequest): GetCampaignBudgetRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignBudgetRequest;
  static deserializeBinaryFromReader(message: GetCampaignBudgetRequest, reader: jspb.BinaryReader): GetCampaignBudgetRequest;
}

export namespace GetCampaignBudgetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignBudgetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CampaignBudgetOperation>;
  setOperationsList(value: Array<CampaignBudgetOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CampaignBudgetOperation, index?: number): CampaignBudgetOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBudgetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBudgetsRequest): MutateCampaignBudgetsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignBudgetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBudgetsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignBudgetsRequest, reader: jspb.BinaryReader): MutateCampaignBudgetsRequest;
}

export namespace MutateCampaignBudgetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignBudgetOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignBudgetOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignBudgetOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBudgetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBudgetOperation): CampaignBudgetOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignBudgetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBudgetOperation;
  static deserializeBinaryFromReader(message: CampaignBudgetOperation, reader: jspb.BinaryReader): CampaignBudgetOperation;
}

export namespace CampaignBudgetOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.AsObject,
    update?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignBudgetsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCampaignBudgetResult>;
  setResultsList(value: Array<MutateCampaignBudgetResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCampaignBudgetResult, index?: number): MutateCampaignBudgetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBudgetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBudgetsResponse): MutateCampaignBudgetsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignBudgetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBudgetsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignBudgetsResponse, reader: jspb.BinaryReader): MutateCampaignBudgetsResponse;
}

export namespace MutateCampaignBudgetsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignBudgetResult.AsObject>,
  }
}

export class MutateCampaignBudgetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBudgetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBudgetResult): MutateCampaignBudgetResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignBudgetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBudgetResult;
  static deserializeBinaryFromReader(message: MutateCampaignBudgetResult, reader: jspb.BinaryReader): MutateCampaignBudgetResult;
}

export namespace MutateCampaignBudgetResult {
  export type AsObject = {
    resourceName: string,
  }
}

