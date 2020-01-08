import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_extension_setting_device_pb from '../../../../../google/ads/googleads/v1/enums/extension_setting_device_pb';
import * as google_ads_googleads_v1_enums_extension_type_pb from '../../../../../google/ads/googleads/v1/enums/extension_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CustomerExtensionSetting extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getExtensionType(): google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType;
  setExtensionType(value: google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType): void;

  getExtensionFeedItemsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setExtensionFeedItemsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearExtensionFeedItemsList(): void;
  addExtensionFeedItems(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getDevice(): google_ads_googleads_v1_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice;
  setDevice(value: google_ads_googleads_v1_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExtensionSetting.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExtensionSetting): CustomerExtensionSetting.AsObject;
  static serializeBinaryToWriter(message: CustomerExtensionSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExtensionSetting;
  static deserializeBinaryFromReader(message: CustomerExtensionSetting, reader: jspb.BinaryReader): CustomerExtensionSetting;
}

export namespace CustomerExtensionSetting {
  export type AsObject = {
    resourceName: string,
    extensionType: google_ads_googleads_v1_enums_extension_type_pb.ExtensionTypeEnum.ExtensionType,
    extensionFeedItemsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    device: google_ads_googleads_v1_enums_extension_setting_device_pb.ExtensionSettingDeviceEnum.ExtensionSettingDevice,
  }
}

