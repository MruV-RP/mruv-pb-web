import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PriceExtensionPriceQualifierEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceExtensionPriceQualifierEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PriceExtensionPriceQualifierEnum): PriceExtensionPriceQualifierEnum.AsObject;
  static serializeBinaryToWriter(message: PriceExtensionPriceQualifierEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceExtensionPriceQualifierEnum;
  static deserializeBinaryFromReader(message: PriceExtensionPriceQualifierEnum, reader: jspb.BinaryReader): PriceExtensionPriceQualifierEnum;
}

export namespace PriceExtensionPriceQualifierEnum {
  export type AsObject = {
  }

  export enum PriceExtensionPriceQualifier { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FROM = 2,
    UP_TO = 3,
    AVERAGE = 4,
  }
}
