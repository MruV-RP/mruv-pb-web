import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class InvoiceErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceErrorEnum): InvoiceErrorEnum.AsObject;
  static serializeBinaryToWriter(message: InvoiceErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceErrorEnum;
  static deserializeBinaryFromReader(message: InvoiceErrorEnum, reader: jspb.BinaryReader): InvoiceErrorEnum;
}

export namespace InvoiceErrorEnum {
  export type AsObject = {
  }

  export enum InvoiceError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    YEAR_MONTH_TOO_OLD = 2,
    NOT_INVOICED_CUSTOMER = 3,
  }
}

