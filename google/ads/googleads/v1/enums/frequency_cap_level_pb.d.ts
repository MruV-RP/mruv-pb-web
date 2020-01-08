import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FrequencyCapLevelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapLevelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapLevelEnum): FrequencyCapLevelEnum.AsObject;
  static serializeBinaryToWriter(message: FrequencyCapLevelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapLevelEnum;
  static deserializeBinaryFromReader(message: FrequencyCapLevelEnum, reader: jspb.BinaryReader): FrequencyCapLevelEnum;
}

export namespace FrequencyCapLevelEnum {
  export type AsObject = {
  }

  export enum FrequencyCapLevel { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP_AD = 2,
    AD_GROUP = 3,
    CAMPAIGN = 4,
  }
}

