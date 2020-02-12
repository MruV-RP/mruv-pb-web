import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_mobile_device_type_pb from '../../../../../google/ads/googleads/v1/enums/mobile_device_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class MobileDeviceConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getManufacturerName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setManufacturerName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasManufacturerName(): boolean;
  clearManufacturerName(): void;

  getOperatingSystemName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOperatingSystemName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasOperatingSystemName(): boolean;
  clearOperatingSystemName(): void;

  getType(): google_ads_googleads_v1_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType;
  setType(value: google_ads_googleads_v1_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceConstant.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceConstant): MobileDeviceConstant.AsObject;
  static serializeBinaryToWriter(message: MobileDeviceConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceConstant;
  static deserializeBinaryFromReader(message: MobileDeviceConstant, reader: jspb.BinaryReader): MobileDeviceConstant;
}

export namespace MobileDeviceConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    manufacturerName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    operatingSystemName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v1_enums_mobile_device_type_pb.MobileDeviceTypeEnum.MobileDeviceType,
  }
}

