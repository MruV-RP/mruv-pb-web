import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MobileDeviceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceTypeEnum): MobileDeviceTypeEnum.AsObject;
  static serializeBinaryToWriter(message: MobileDeviceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceTypeEnum;
  static deserializeBinaryFromReader(message: MobileDeviceTypeEnum, reader: jspb.BinaryReader): MobileDeviceTypeEnum;
}

export namespace MobileDeviceTypeEnum {
  export type AsObject = {
  }

  export enum MobileDeviceType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    TABLET = 3,
  }
}

