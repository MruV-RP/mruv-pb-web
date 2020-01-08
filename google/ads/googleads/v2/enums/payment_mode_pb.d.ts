import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PaymentModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentModeEnum): PaymentModeEnum.AsObject;
  static serializeBinaryToWriter(message: PaymentModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentModeEnum;
  static deserializeBinaryFromReader(message: PaymentModeEnum, reader: jspb.BinaryReader): PaymentModeEnum;
}

export namespace PaymentModeEnum {
  export type AsObject = {
  }

  export enum PaymentMode { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CLICKS = 4,
    CONVERSION_VALUE = 5,
    CONVERSIONS = 6,
  }
}

