import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_conversion_adjustment_type_pb from '../../../../../google/ads/googleads/v2/enums/conversion_adjustment_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class UploadConversionAdjustmentsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getConversionAdjustmentsList(): Array<ConversionAdjustment>;
  setConversionAdjustmentsList(value: Array<ConversionAdjustment>): void;
  clearConversionAdjustmentsList(): void;
  addConversionAdjustments(value?: ConversionAdjustment, index?: number): ConversionAdjustment;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadConversionAdjustmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadConversionAdjustmentsRequest): UploadConversionAdjustmentsRequest.AsObject;
  static serializeBinaryToWriter(message: UploadConversionAdjustmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadConversionAdjustmentsRequest;
  static deserializeBinaryFromReader(message: UploadConversionAdjustmentsRequest, reader: jspb.BinaryReader): UploadConversionAdjustmentsRequest;
}

export namespace UploadConversionAdjustmentsRequest {
  export type AsObject = {
    customerId: string,
    conversionAdjustmentsList: Array<ConversionAdjustment.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class UploadConversionAdjustmentsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<ConversionAdjustmentResult>;
  setResultsList(value: Array<ConversionAdjustmentResult>): void;
  clearResultsList(): void;
  addResults(value?: ConversionAdjustmentResult, index?: number): ConversionAdjustmentResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadConversionAdjustmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadConversionAdjustmentsResponse): UploadConversionAdjustmentsResponse.AsObject;
  static serializeBinaryToWriter(message: UploadConversionAdjustmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadConversionAdjustmentsResponse;
  static deserializeBinaryFromReader(message: UploadConversionAdjustmentsResponse, reader: jspb.BinaryReader): UploadConversionAdjustmentsResponse;
}

export namespace UploadConversionAdjustmentsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<ConversionAdjustmentResult.AsObject>,
  }
}

export class ConversionAdjustment extends jspb.Message {
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getAdjustmentDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdjustmentDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdjustmentDateTime(): boolean;
  clearAdjustmentDateTime(): void;

  getAdjustmentType(): google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType;
  setAdjustmentType(value: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType): void;

  getRestatementValue(): RestatementValue | undefined;
  setRestatementValue(value?: RestatementValue): void;
  hasRestatementValue(): boolean;
  clearRestatementValue(): void;

  getGclidDateTimePair(): GclidDateTimePair | undefined;
  setGclidDateTimePair(value?: GclidDateTimePair): void;
  hasGclidDateTimePair(): boolean;
  clearGclidDateTimePair(): void;

  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOrderId(): boolean;
  clearOrderId(): void;

  getConversionIdentifierCase(): ConversionAdjustment.ConversionIdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustment.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustment): ConversionAdjustment.AsObject;
  static serializeBinaryToWriter(message: ConversionAdjustment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustment;
  static deserializeBinaryFromReader(message: ConversionAdjustment, reader: jspb.BinaryReader): ConversionAdjustment;
}

export namespace ConversionAdjustment {
  export type AsObject = {
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentType: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType,
    restatementValue?: RestatementValue.AsObject,
    gclidDateTimePair?: GclidDateTimePair.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ConversionIdentifierCase { 
    CONVERSION_IDENTIFIER_NOT_SET = 0,
    GCLID_DATE_TIME_PAIR = 1,
    ORDER_ID = 2,
  }
}

export class RestatementValue extends jspb.Message {
  getAdjustedValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAdjustedValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasAdjustedValue(): boolean;
  clearAdjustedValue(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestatementValue.AsObject;
  static toObject(includeInstance: boolean, msg: RestatementValue): RestatementValue.AsObject;
  static serializeBinaryToWriter(message: RestatementValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestatementValue;
  static deserializeBinaryFromReader(message: RestatementValue, reader: jspb.BinaryReader): RestatementValue;
}

export namespace RestatementValue {
  export type AsObject = {
    adjustedValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class GclidDateTimePair extends jspb.Message {
  getGclid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGclid(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGclid(): boolean;
  clearGclid(): void;

  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GclidDateTimePair.AsObject;
  static toObject(includeInstance: boolean, msg: GclidDateTimePair): GclidDateTimePair.AsObject;
  static serializeBinaryToWriter(message: GclidDateTimePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GclidDateTimePair;
  static deserializeBinaryFromReader(message: GclidDateTimePair, reader: jspb.BinaryReader): GclidDateTimePair;
}

export namespace GclidDateTimePair {
  export type AsObject = {
    gclid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ConversionAdjustmentResult extends jspb.Message {
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getAdjustmentDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdjustmentDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdjustmentDateTime(): boolean;
  clearAdjustmentDateTime(): void;

  getAdjustmentType(): google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType;
  setAdjustmentType(value: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType): void;

  getGclidDateTimePair(): GclidDateTimePair | undefined;
  setGclidDateTimePair(value?: GclidDateTimePair): void;
  hasGclidDateTimePair(): boolean;
  clearGclidDateTimePair(): void;

  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOrderId(): boolean;
  clearOrderId(): void;

  getConversionIdentifierCase(): ConversionAdjustmentResult.ConversionIdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustmentResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustmentResult): ConversionAdjustmentResult.AsObject;
  static serializeBinaryToWriter(message: ConversionAdjustmentResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustmentResult;
  static deserializeBinaryFromReader(message: ConversionAdjustmentResult, reader: jspb.BinaryReader): ConversionAdjustmentResult;
}

export namespace ConversionAdjustmentResult {
  export type AsObject = {
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adjustmentType: google_ads_googleads_v2_enums_conversion_adjustment_type_pb.ConversionAdjustmentTypeEnum.ConversionAdjustmentType,
    gclidDateTimePair?: GclidDateTimePair.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ConversionIdentifierCase { 
    CONVERSION_IDENTIFIER_NOT_SET = 0,
    GCLID_DATE_TIME_PAIR = 1,
    ORDER_ID = 2,
  }
}

