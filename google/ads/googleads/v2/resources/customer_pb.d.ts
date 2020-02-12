import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb from '../../../../../google/ads/googleads/v2/enums/customer_pay_per_conversion_eligibility_failure_reason_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class Customer extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescriptiveName(): boolean;
  clearDescriptiveName(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTimeZone(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTimeZone(): boolean;
  clearTimeZone(): void;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;

  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;

  getAutoTaggingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAutoTaggingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasAutoTaggingEnabled(): boolean;
  clearAutoTaggingEnabled(): void;

  getHasPartnersBadge(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasPartnersBadge(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasHasPartnersBadge(): boolean;
  clearHasPartnersBadge(): void;

  getManager(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setManager(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasManager(): boolean;
  clearManager(): void;

  getTestAccount(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTestAccount(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasTestAccount(): boolean;
  clearTestAccount(): void;

  getCallReportingSetting(): CallReportingSetting | undefined;
  setCallReportingSetting(value?: CallReportingSetting): void;
  hasCallReportingSetting(): boolean;
  clearCallReportingSetting(): void;

  getConversionTrackingSetting(): ConversionTrackingSetting | undefined;
  setConversionTrackingSetting(value?: ConversionTrackingSetting): void;
  hasConversionTrackingSetting(): boolean;
  clearConversionTrackingSetting(): void;

  getRemarketingSetting(): RemarketingSetting | undefined;
  setRemarketingSetting(value?: RemarketingSetting): void;
  hasRemarketingSetting(): boolean;
  clearRemarketingSetting(): void;

  getPayPerConversionEligibilityFailureReasonsList(): Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>;
  setPayPerConversionEligibilityFailureReasonsList(value: Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>): void;
  clearPayPerConversionEligibilityFailureReasonsList(): void;
  addPayPerConversionEligibilityFailureReasons(value: google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    descriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    timeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    autoTaggingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasPartnersBadge?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    manager?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    testAccount?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callReportingSetting?: CallReportingSetting.AsObject,
    conversionTrackingSetting?: ConversionTrackingSetting.AsObject,
    remarketingSetting?: RemarketingSetting.AsObject,
    payPerConversionEligibilityFailureReasonsList: Array<google_ads_googleads_v2_enums_customer_pay_per_conversion_eligibility_failure_reason_pb.CustomerPayPerConversionEligibilityFailureReasonEnum.CustomerPayPerConversionEligibilityFailureReason>,
  }
}

export class CallReportingSetting extends jspb.Message {
  getCallReportingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallReportingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasCallReportingEnabled(): boolean;
  clearCallReportingEnabled(): void;

  getCallConversionReportingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallConversionReportingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasCallConversionReportingEnabled(): boolean;
  clearCallConversionReportingEnabled(): void;

  getCallConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCallConversionAction(): boolean;
  clearCallConversionAction(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallReportingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: CallReportingSetting): CallReportingSetting.AsObject;
  static serializeBinaryToWriter(message: CallReportingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallReportingSetting;
  static deserializeBinaryFromReader(message: CallReportingSetting, reader: jspb.BinaryReader): CallReportingSetting;
}

export namespace CallReportingSetting {
  export type AsObject = {
    callReportingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionReportingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ConversionTrackingSetting extends jspb.Message {
  getConversionTrackingId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setConversionTrackingId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasConversionTrackingId(): boolean;
  clearConversionTrackingId(): void;

  getCrossAccountConversionTrackingId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCrossAccountConversionTrackingId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCrossAccountConversionTrackingId(): boolean;
  clearCrossAccountConversionTrackingId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionTrackingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionTrackingSetting): ConversionTrackingSetting.AsObject;
  static serializeBinaryToWriter(message: ConversionTrackingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionTrackingSetting;
  static deserializeBinaryFromReader(message: ConversionTrackingSetting, reader: jspb.BinaryReader): ConversionTrackingSetting;
}

export namespace ConversionTrackingSetting {
  export type AsObject = {
    conversionTrackingId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    crossAccountConversionTrackingId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class RemarketingSetting extends jspb.Message {
  getGoogleGlobalSiteTag(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGoogleGlobalSiteTag(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGoogleGlobalSiteTag(): boolean;
  clearGoogleGlobalSiteTag(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemarketingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: RemarketingSetting): RemarketingSetting.AsObject;
  static serializeBinaryToWriter(message: RemarketingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemarketingSetting;
  static deserializeBinaryFromReader(message: RemarketingSetting, reader: jspb.BinaryReader): RemarketingSetting;
}

export namespace RemarketingSetting {
  export type AsObject = {
    googleGlobalSiteTag?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

