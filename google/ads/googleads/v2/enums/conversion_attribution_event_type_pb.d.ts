import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ConversionAttributionEventTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAttributionEventTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAttributionEventTypeEnum): ConversionAttributionEventTypeEnum.AsObject;
  static serializeBinaryToWriter(message: ConversionAttributionEventTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAttributionEventTypeEnum;
  static deserializeBinaryFromReader(message: ConversionAttributionEventTypeEnum, reader: jspb.BinaryReader): ConversionAttributionEventTypeEnum;
}

export namespace ConversionAttributionEventTypeEnum {
  export type AsObject = {
  }

  export enum ConversionAttributionEventType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IMPRESSION = 2,
    INTERACTION = 3,
  }
}

