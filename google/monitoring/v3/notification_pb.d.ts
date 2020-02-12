import * as jspb from "google-protobuf"

import * as google_api_label_pb from '../../../google/api/label_pb';
import * as google_api_launch_stage_pb from '../../../google/api/launch_stage_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class NotificationChannelDescriptor extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelsList(): Array<google_api_label_pb.LabelDescriptor>;
  setLabelsList(value: Array<google_api_label_pb.LabelDescriptor>): void;
  clearLabelsList(): void;
  addLabels(value?: google_api_label_pb.LabelDescriptor, index?: number): google_api_label_pb.LabelDescriptor;

  getSupportedTiersList(): Array<google_monitoring_v3_common_pb.ServiceTier>;
  setSupportedTiersList(value: Array<google_monitoring_v3_common_pb.ServiceTier>): void;
  clearSupportedTiersList(): void;
  addSupportedTiers(value: google_monitoring_v3_common_pb.ServiceTier, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannelDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannelDescriptor): NotificationChannelDescriptor.AsObject;
  static serializeBinaryToWriter(message: NotificationChannelDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannelDescriptor;
  static deserializeBinaryFromReader(message: NotificationChannelDescriptor, reader: jspb.BinaryReader): NotificationChannelDescriptor;
}

export namespace NotificationChannelDescriptor {
  export type AsObject = {
    name: string,
    type: string,
    displayName: string,
    description: string,
    labelsList: Array<google_api_label_pb.LabelDescriptor.AsObject>,
    supportedTiersList: Array<google_monitoring_v3_common_pb.ServiceTier>,
  }
}

export class NotificationChannel extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getUserLabelsMap(): jspb.Map<string, string>;
  clearUserLabelsMap(): void;

  getVerificationStatus(): NotificationChannel.VerificationStatus;
  setVerificationStatus(value: NotificationChannel.VerificationStatus): void;

  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasEnabled(): boolean;
  clearEnabled(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationChannel.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationChannel): NotificationChannel.AsObject;
  static serializeBinaryToWriter(message: NotificationChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationChannel;
  static deserializeBinaryFromReader(message: NotificationChannel, reader: jspb.BinaryReader): NotificationChannel;
}

export namespace NotificationChannel {
  export type AsObject = {
    type: string,
    name: string,
    displayName: string,
    description: string,
    labelsMap: Array<[string, string]>,
    userLabelsMap: Array<[string, string]>,
    verificationStatus: NotificationChannel.VerificationStatus,
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }

  export enum VerificationStatus { 
    VERIFICATION_STATUS_UNSPECIFIED = 0,
    UNVERIFIED = 1,
    VERIFIED = 2,
  }
}

