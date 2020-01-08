import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_keyword_plan_campaign_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_campaign_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetKeywordPlanCampaignRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanCampaignRequest): GetKeywordPlanCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeywordPlanCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanCampaignRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanCampaignRequest, reader: jspb.BinaryReader): GetKeywordPlanCampaignRequest;
}

export namespace GetKeywordPlanCampaignRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanCampaignsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<KeywordPlanCampaignOperation>;
  setOperationsList(value: Array<KeywordPlanCampaignOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: KeywordPlanCampaignOperation, index?: number): KeywordPlanCampaignOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignsRequest): MutateKeywordPlanCampaignsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignsRequest, reader: jspb.BinaryReader): MutateKeywordPlanCampaignsRequest;
}

export namespace MutateKeywordPlanCampaignsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanCampaignOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanCampaignOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanCampaignOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignOperation): KeywordPlanCampaignOperation.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanCampaignOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignOperation;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignOperation, reader: jspb.BinaryReader): KeywordPlanCampaignOperation;
}

export namespace KeywordPlanCampaignOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.AsObject,
    update?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanCampaignsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateKeywordPlanCampaignResult>;
  setResultsList(value: Array<MutateKeywordPlanCampaignResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateKeywordPlanCampaignResult, index?: number): MutateKeywordPlanCampaignResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignsResponse): MutateKeywordPlanCampaignsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignsResponse, reader: jspb.BinaryReader): MutateKeywordPlanCampaignsResponse;
}

export namespace MutateKeywordPlanCampaignsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanCampaignResult.AsObject>,
  }
}

export class MutateKeywordPlanCampaignResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignResult): MutateKeywordPlanCampaignResult.AsObject;
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignResult, reader: jspb.BinaryReader): MutateKeywordPlanCampaignResult;
}

export namespace MutateKeywordPlanCampaignResult {
  export type AsObject = {
    resourceName: string,
  }
}

