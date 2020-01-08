import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupAdRotationModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdRotationModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdRotationModeEnum): AdGroupAdRotationModeEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdRotationModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdRotationModeEnum;
  static deserializeBinaryFromReader(message: AdGroupAdRotationModeEnum, reader: jspb.BinaryReader): AdGroupAdRotationModeEnum;
}

export namespace AdGroupAdRotationModeEnum {
  export type AsObject = {
  }

  export enum AdGroupAdRotationMode { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPTIMIZE = 2,
    ROTATE_FOREVER = 3,
  }
}

