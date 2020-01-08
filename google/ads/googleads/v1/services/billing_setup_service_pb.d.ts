import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_billing_setup_pb from '../../../../../google/ads/googleads/v1/resources/billing_setup_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetBillingSetupRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBillingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBillingSetupRequest): GetBillingSetupRequest.AsObject;
  static serializeBinaryToWriter(message: GetBillingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBillingSetupRequest;
  static deserializeBinaryFromReader(message: GetBillingSetupRequest, reader: jspb.BinaryReader): GetBillingSetupRequest;
}

export namespace GetBillingSetupRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateBillingSetupRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperation(): BillingSetupOperation | undefined;
  setOperation(value?: BillingSetupOperation): void;
  hasOperation(): boolean;
  clearOperation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupRequest): MutateBillingSetupRequest.AsObject;
  static serializeBinaryToWriter(message: MutateBillingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupRequest;
  static deserializeBinaryFromReader(message: MutateBillingSetupRequest, reader: jspb.BinaryReader): MutateBillingSetupRequest;
}

export namespace MutateBillingSetupRequest {
  export type AsObject = {
    customerId: string,
    operation?: BillingSetupOperation.AsObject,
  }
}

export class BillingSetupOperation extends jspb.Message {
  getCreate(): google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): BillingSetupOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSetupOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSetupOperation): BillingSetupOperation.AsObject;
  static serializeBinaryToWriter(message: BillingSetupOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSetupOperation;
  static deserializeBinaryFromReader(message: BillingSetupOperation, reader: jspb.BinaryReader): BillingSetupOperation;
}

export namespace BillingSetupOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_billing_setup_pb.BillingSetup.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 2,
    REMOVE = 1,
  }
}

export class MutateBillingSetupResponse extends jspb.Message {
  getResult(): MutateBillingSetupResult | undefined;
  setResult(value?: MutateBillingSetupResult): void;
  hasResult(): boolean;
  clearResult(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupResponse): MutateBillingSetupResponse.AsObject;
  static serializeBinaryToWriter(message: MutateBillingSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupResponse;
  static deserializeBinaryFromReader(message: MutateBillingSetupResponse, reader: jspb.BinaryReader): MutateBillingSetupResponse;
}

export namespace MutateBillingSetupResponse {
  export type AsObject = {
    result?: MutateBillingSetupResult.AsObject,
  }
}

export class MutateBillingSetupResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBillingSetupResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBillingSetupResult): MutateBillingSetupResult.AsObject;
  static serializeBinaryToWriter(message: MutateBillingSetupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBillingSetupResult;
  static deserializeBinaryFromReader(message: MutateBillingSetupResult, reader: jspb.BinaryReader): MutateBillingSetupResult;
}

export namespace MutateBillingSetupResult {
  export type AsObject = {
    resourceName: string,
  }
}

