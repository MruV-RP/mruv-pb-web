import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_ad_pb from '../../../../../google/ads/googleads/v2/resources/ad_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetAdRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdRequest): GetAdRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdRequest;
  static deserializeBinaryFromReader(message: GetAdRequest, reader: jspb.BinaryReader): GetAdRequest;
}

export namespace GetAdRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<AdOperation>;
  setOperationsList(value: Array<AdOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: AdOperation, index?: number): AdOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdsRequest): MutateAdsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdsRequest;
  static deserializeBinaryFromReader(message: MutateAdsRequest, reader: jspb.BinaryReader): MutateAdsRequest;
}

export namespace MutateAdsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdOperation.AsObject>,
  }
}

export class AdOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getUpdate(): google_ads_googleads_v2_resources_ad_pb.Ad | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_ad_pb.Ad): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getOperationCase(): AdOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdOperation): AdOperation.AsObject;
  static serializeBinaryToWriter(message: AdOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdOperation;
  static deserializeBinaryFromReader(message: AdOperation, reader: jspb.BinaryReader): AdOperation;
}

export namespace AdOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    update?: google_ads_googleads_v2_resources_ad_pb.Ad.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    UPDATE = 1,
  }
}

export class MutateAdsResponse extends jspb.Message {
  getResultsList(): Array<MutateAdResult>;
  setResultsList(value: Array<MutateAdResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateAdResult, index?: number): MutateAdResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdsResponse): MutateAdsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdsResponse;
  static deserializeBinaryFromReader(message: MutateAdsResponse, reader: jspb.BinaryReader): MutateAdsResponse;
}

export namespace MutateAdsResponse {
  export type AsObject = {
    resultsList: Array<MutateAdResult.AsObject>,
  }
}

export class MutateAdResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdResult): MutateAdResult.AsObject;
  static serializeBinaryToWriter(message: MutateAdResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdResult;
  static deserializeBinaryFromReader(message: MutateAdResult, reader: jspb.BinaryReader): MutateAdResult;
}

export namespace MutateAdResult {
  export type AsObject = {
    resourceName: string,
  }
}

