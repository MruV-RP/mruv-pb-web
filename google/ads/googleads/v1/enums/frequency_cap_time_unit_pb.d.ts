import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class FrequencyCapTimeUnitEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapTimeUnitEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapTimeUnitEnum): FrequencyCapTimeUnitEnum.AsObject;
  static serializeBinaryToWriter(message: FrequencyCapTimeUnitEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapTimeUnitEnum;
  static deserializeBinaryFromReader(message: FrequencyCapTimeUnitEnum, reader: jspb.BinaryReader): FrequencyCapTimeUnitEnum;
}

export namespace FrequencyCapTimeUnitEnum {
  export type AsObject = {
  }

  export enum FrequencyCapTimeUnit { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DAY = 2,
    WEEK = 3,
    MONTH = 4,
  }
}

