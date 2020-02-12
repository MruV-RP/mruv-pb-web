import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AppPaymentModelTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppPaymentModelTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppPaymentModelTypeEnum): AppPaymentModelTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AppPaymentModelTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppPaymentModelTypeEnum;
  static deserializeBinaryFromReader(message: AppPaymentModelTypeEnum, reader: jspb.BinaryReader): AppPaymentModelTypeEnum;
}

export namespace AppPaymentModelTypeEnum {
  export type AsObject = {
  }

  export enum AppPaymentModelType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PAID = 30,
  }
}

