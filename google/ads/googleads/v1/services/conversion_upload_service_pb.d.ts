import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

export class UploadClickConversionsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getConversionsList(): Array<ClickConversion>;
  setConversionsList(value: Array<ClickConversion>): void;
  clearConversionsList(): void;
  addConversions(value?: ClickConversion, index?: number): ClickConversion;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadClickConversionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadClickConversionsRequest): UploadClickConversionsRequest.AsObject;
  static serializeBinaryToWriter(message: UploadClickConversionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadClickConversionsRequest;
  static deserializeBinaryFromReader(message: UploadClickConversionsRequest, reader: jspb.BinaryReader): UploadClickConversionsRequest;
}

export namespace UploadClickConversionsRequest {
  export type AsObject = {
    customerId: string,
    conversionsList: Array<ClickConversion.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class UploadClickConversionsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<ClickConversionResult>;
  setResultsList(value: Array<ClickConversionResult>): void;
  clearResultsList(): void;
  addResults(value?: ClickConversionResult, index?: number): ClickConversionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadClickConversionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadClickConversionsResponse): UploadClickConversionsResponse.AsObject;
  static serializeBinaryToWriter(message: UploadClickConversionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadClickConversionsResponse;
  static deserializeBinaryFromReader(message: UploadClickConversionsResponse, reader: jspb.BinaryReader): UploadClickConversionsResponse;
}

export namespace UploadClickConversionsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<ClickConversionResult.AsObject>,
  }
}

export class UploadCallConversionsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getConversionsList(): Array<CallConversion>;
  setConversionsList(value: Array<CallConversion>): void;
  clearConversionsList(): void;
  addConversions(value?: CallConversion, index?: number): CallConversion;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadCallConversionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadCallConversionsRequest): UploadCallConversionsRequest.AsObject;
  static serializeBinaryToWriter(message: UploadCallConversionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadCallConversionsRequest;
  static deserializeBinaryFromReader(message: UploadCallConversionsRequest, reader: jspb.BinaryReader): UploadCallConversionsRequest;
}

export namespace UploadCallConversionsRequest {
  export type AsObject = {
    customerId: string,
    conversionsList: Array<CallConversion.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class UploadCallConversionsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getResultsList(): Array<CallConversionResult>;
  setResultsList(value: Array<CallConversionResult>): void;
  clearResultsList(): void;
  addResults(value?: CallConversionResult, index?: number): CallConversionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadCallConversionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadCallConversionsResponse): UploadCallConversionsResponse.AsObject;
  static serializeBinaryToWriter(message: UploadCallConversionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadCallConversionsResponse;
  static deserializeBinaryFromReader(message: UploadCallConversionsResponse, reader: jspb.BinaryReader): UploadCallConversionsResponse;
}

export namespace UploadCallConversionsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<CallConversionResult.AsObject>,
  }
}

export class ClickConversion extends jspb.Message {
  getGclid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGclid(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGclid(): boolean;
  clearGclid(): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;

  getConversionValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasConversionValue(): boolean;
  clearConversionValue(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getOrderId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOrderId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOrderId(): boolean;
  clearOrderId(): void;

  getExternalAttributionData(): ExternalAttributionData | undefined;
  setExternalAttributionData(value?: ExternalAttributionData): void;
  hasExternalAttributionData(): boolean;
  clearExternalAttributionData(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickConversion.AsObject;
  static toObject(includeInstance: boolean, msg: ClickConversion): ClickConversion.AsObject;
  static serializeBinaryToWriter(message: ClickConversion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickConversion;
  static deserializeBinaryFromReader(message: ClickConversion, reader: jspb.BinaryReader): ClickConversion;
}

export namespace ClickConversion {
  export type AsObject = {
    gclid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    orderId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    externalAttributionData?: ExternalAttributionData.AsObject,
  }
}

export class CallConversion extends jspb.Message {
  getCallerId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallerId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallerId(): boolean;
  clearCallerId(): void;

  getCallStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallStartDateTime(): boolean;
  clearCallStartDateTime(): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;

  getConversionValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasConversionValue(): boolean;
  clearConversionValue(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallConversion.AsObject;
  static toObject(includeInstance: boolean, msg: CallConversion): CallConversion.AsObject;
  static serializeBinaryToWriter(message: CallConversion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallConversion;
  static deserializeBinaryFromReader(message: CallConversion, reader: jspb.BinaryReader): CallConversion;
}

export namespace CallConversion {
  export type AsObject = {
    callerId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExternalAttributionData extends jspb.Message {
  getExternalAttributionCredit(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setExternalAttributionCredit(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasExternalAttributionCredit(): boolean;
  clearExternalAttributionCredit(): void;

  getExternalAttributionModel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExternalAttributionModel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasExternalAttributionModel(): boolean;
  clearExternalAttributionModel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalAttributionData.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalAttributionData): ExternalAttributionData.AsObject;
  static serializeBinaryToWriter(message: ExternalAttributionData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalAttributionData;
  static deserializeBinaryFromReader(message: ExternalAttributionData, reader: jspb.BinaryReader): ExternalAttributionData;
}

export namespace ExternalAttributionData {
  export type AsObject = {
    externalAttributionCredit?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    externalAttributionModel?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ClickConversionResult extends jspb.Message {
  getGclid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGclid(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGclid(): boolean;
  clearGclid(): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickConversionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ClickConversionResult): ClickConversionResult.AsObject;
  static serializeBinaryToWriter(message: ClickConversionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickConversionResult;
  static deserializeBinaryFromReader(message: ClickConversionResult, reader: jspb.BinaryReader): ClickConversionResult;
}

export namespace ClickConversionResult {
  export type AsObject = {
    gclid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CallConversionResult extends jspb.Message {
  getCallerId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallerId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallerId(): boolean;
  clearCallerId(): void;

  getCallStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallStartDateTime(): boolean;
  clearCallStartDateTime(): void;

  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getConversionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasConversionDateTime(): boolean;
  clearConversionDateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallConversionResult.AsObject;
  static toObject(includeInstance: boolean, msg: CallConversionResult): CallConversionResult.AsObject;
  static serializeBinaryToWriter(message: CallConversionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallConversionResult;
  static deserializeBinaryFromReader(message: CallConversionResult, reader: jspb.BinaryReader): CallConversionResult;
}

export namespace CallConversionResult {
  export type AsObject = {
    callerId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

