import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetCampaignCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCriterionRequest): GetCampaignCriterionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCriterionRequest;
  static deserializeBinaryFromReader(message: GetCampaignCriterionRequest, reader: jspb.BinaryReader): GetCampaignCriterionRequest;
}

export namespace GetCampaignCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CampaignCriterionOperation>;
  setOperationsList(value: Array<CampaignCriterionOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CampaignCriterionOperation, index?: number): CampaignCriterionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriteriaRequest): MutateCampaignCriteriaRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateCampaignCriteriaRequest, reader: jspb.BinaryReader): MutateCampaignCriteriaRequest;
}

export namespace MutateCampaignCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignCriterionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignCriterionOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignCriterionOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterionOperation): CampaignCriterionOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterionOperation;
  static deserializeBinaryFromReader(message: CampaignCriterionOperation, reader: jspb.BinaryReader): CampaignCriterionOperation;
}

export namespace CampaignCriterionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    update?: google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignCriteriaResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCampaignCriterionResult>;
  setResultsList(value: Array<MutateCampaignCriterionResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCampaignCriterionResult, index?: number): MutateCampaignCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriteriaResponse): MutateCampaignCriteriaResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateCampaignCriteriaResponse, reader: jspb.BinaryReader): MutateCampaignCriteriaResponse;
}

export namespace MutateCampaignCriteriaResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignCriterionResult.AsObject>,
  }
}

export class MutateCampaignCriterionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignCriterionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignCriterionResult): MutateCampaignCriterionResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignCriterionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignCriterionResult;
  static deserializeBinaryFromReader(message: MutateCampaignCriterionResult, reader: jspb.BinaryReader): MutateCampaignCriterionResult;
}

export namespace MutateCampaignCriterionResult {
  export type AsObject = {
    resourceName: string,
  }
}

