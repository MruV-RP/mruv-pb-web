import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_billing_setup_status_pb from '../../../../../google/ads/googleads/v1/enums/billing_setup_status_pb';
import * as google_ads_googleads_v1_enums_time_type_pb from '../../../../../google/ads/googleads/v1/enums/time_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class BillingSetup extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getStatus(): google_ads_googleads_v1_enums_billing_setup_status_pb.BillingSetupStatusEnum.BillingSetupStatus;
  setStatus(value: google_ads_googleads_v1_enums_billing_setup_status_pb.BillingSetupStatusEnum.BillingSetupStatus): void;

  getPaymentsAccount(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPaymentsAccount(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPaymentsAccount(): boolean;
  clearPaymentsAccount(): void;

  getPaymentsAccountInfo(): BillingSetup.PaymentsAccountInfo | undefined;
  setPaymentsAccountInfo(value?: BillingSetup.PaymentsAccountInfo): void;
  hasPaymentsAccountInfo(): boolean;
  clearPaymentsAccountInfo(): void;

  getStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStartDateTime(): boolean;
  clearStartDateTime(): void;

  getStartTimeType(): google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType;
  setStartTimeType(value: google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType): void;

  getEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasEndDateTime(): boolean;
  clearEndDateTime(): void;

  getEndTimeType(): google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType;
  setEndTimeType(value: google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType): void;

  getStartTimeCase(): BillingSetup.StartTimeCase;

  getEndTimeCase(): BillingSetup.EndTimeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSetup.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSetup): BillingSetup.AsObject;
  static serializeBinaryToWriter(message: BillingSetup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSetup;
  static deserializeBinaryFromReader(message: BillingSetup, reader: jspb.BinaryReader): BillingSetup;
}

export namespace BillingSetup {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v1_enums_billing_setup_status_pb.BillingSetupStatusEnum.BillingSetupStatus,
    paymentsAccount?: google_protobuf_wrappers_pb.StringValue.AsObject,
    paymentsAccountInfo?: BillingSetup.PaymentsAccountInfo.AsObject,
    startDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    startTimeType: google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType,
    endDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endTimeType: google_ads_googleads_v1_enums_time_type_pb.TimeTypeEnum.TimeType,
  }

  export class PaymentsAccountInfo extends jspb.Message {
    getPaymentsAccountId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentsAccountId(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasPaymentsAccountId(): boolean;
    clearPaymentsAccountId(): void;

    getPaymentsAccountName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentsAccountName(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasPaymentsAccountName(): boolean;
    clearPaymentsAccountName(): void;

    getPaymentsProfileId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentsProfileId(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasPaymentsProfileId(): boolean;
    clearPaymentsProfileId(): void;

    getPaymentsProfileName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPaymentsProfileName(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasPaymentsProfileName(): boolean;
    clearPaymentsProfileName(): void;

    getSecondaryPaymentsProfileId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSecondaryPaymentsProfileId(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasSecondaryPaymentsProfileId(): boolean;
    clearSecondaryPaymentsProfileId(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentsAccountInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentsAccountInfo): PaymentsAccountInfo.AsObject;
    static serializeBinaryToWriter(message: PaymentsAccountInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentsAccountInfo;
    static deserializeBinaryFromReader(message: PaymentsAccountInfo, reader: jspb.BinaryReader): PaymentsAccountInfo;
  }

  export namespace PaymentsAccountInfo {
    export type AsObject = {
      paymentsAccountId?: google_protobuf_wrappers_pb.StringValue.AsObject,
      paymentsAccountName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      paymentsProfileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
      paymentsProfileName?: google_protobuf_wrappers_pb.StringValue.AsObject,
      secondaryPaymentsProfileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }


  export enum StartTimeCase { 
    START_TIME_NOT_SET = 0,
    START_DATE_TIME = 9,
    START_TIME_TYPE = 10,
  }

  export enum EndTimeCase { 
    END_TIME_NOT_SET = 0,
    END_DATE_TIME = 13,
    END_TIME_TYPE = 14,
  }
}

