import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ExtensionSettingDeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionSettingDeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionSettingDeviceEnum): ExtensionSettingDeviceEnum.AsObject;
  static serializeBinaryToWriter(message: ExtensionSettingDeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionSettingDeviceEnum;
  static deserializeBinaryFromReader(message: ExtensionSettingDeviceEnum, reader: jspb.BinaryReader): ExtensionSettingDeviceEnum;
}

export namespace ExtensionSettingDeviceEnum {
  export type AsObject = {
  }

  export enum ExtensionSettingDevice { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    DESKTOP = 3,
  }
}

