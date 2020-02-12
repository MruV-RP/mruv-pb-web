import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceEnum): DeviceEnum.AsObject;
  static serializeBinaryToWriter(message: DeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceEnum;
  static deserializeBinaryFromReader(message: DeviceEnum, reader: jspb.BinaryReader): DeviceEnum;
}

export namespace DeviceEnum {
  export type AsObject = {
  }

  export enum Device { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    TABLET = 3,
    DESKTOP = 4,
    CONNECTED_TV = 6,
    OTHER = 5,
  }
}

