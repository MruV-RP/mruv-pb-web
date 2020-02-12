import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_campaign_shared_set_pb from '../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class GetCampaignSharedSetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignSharedSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignSharedSetRequest): GetCampaignSharedSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignSharedSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignSharedSetRequest;
  static deserializeBinaryFromReader(message: GetCampaignSharedSetRequest, reader: jspb.BinaryReader): GetCampaignSharedSetRequest;
}

export namespace GetCampaignSharedSetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignSharedSetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<CampaignSharedSetOperation>;
  setOperationsList(value: Array<CampaignSharedSetOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: CampaignSharedSetOperation, index?: number): CampaignSharedSetOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignSharedSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignSharedSetsRequest): MutateCampaignSharedSetsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignSharedSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignSharedSetsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignSharedSetsRequest, reader: jspb.BinaryReader): MutateCampaignSharedSetsRequest;
}

export namespace MutateCampaignSharedSetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignSharedSetOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignSharedSetOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignSharedSetOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSetOperation): CampaignSharedSetOperation.AsObject;
  static serializeBinaryToWriter(message: CampaignSharedSetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSetOperation;
  static deserializeBinaryFromReader(message: CampaignSharedSetOperation, reader: jspb.BinaryReader): CampaignSharedSetOperation;
}

export namespace CampaignSharedSetOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 3,
  }
}

export class MutateCampaignSharedSetsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<MutateCampaignSharedSetResult>;
  setResultsList(value: Array<MutateCampaignSharedSetResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateCampaignSharedSetResult, index?: number): MutateCampaignSharedSetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignSharedSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignSharedSetsResponse): MutateCampaignSharedSetsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignSharedSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignSharedSetsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignSharedSetsResponse, reader: jspb.BinaryReader): MutateCampaignSharedSetsResponse;
}

export namespace MutateCampaignSharedSetsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignSharedSetResult.AsObject>,
  }
}

export class MutateCampaignSharedSetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignSharedSetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignSharedSetResult): MutateCampaignSharedSetResult.AsObject;
  static serializeBinaryToWriter(message: MutateCampaignSharedSetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignSharedSetResult;
  static deserializeBinaryFromReader(message: MutateCampaignSharedSetResult, reader: jspb.BinaryReader): MutateCampaignSharedSetResult;
}

export namespace MutateCampaignSharedSetResult {
  export type AsObject = {
    resourceName: string,
  }
}

