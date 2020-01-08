import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DisplayAdFormatSettingEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayAdFormatSettingEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayAdFormatSettingEnum): DisplayAdFormatSettingEnum.AsObject;
  static serializeBinaryToWriter(message: DisplayAdFormatSettingEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayAdFormatSettingEnum;
  static deserializeBinaryFromReader(message: DisplayAdFormatSettingEnum, reader: jspb.BinaryReader): DisplayAdFormatSettingEnum;
}

export namespace DisplayAdFormatSettingEnum {
  export type AsObject = {
  }

  export enum DisplayAdFormatSetting { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ALL_FORMATS = 2,
    NON_NATIVE = 3,
    NATIVE = 4,
  }
}

