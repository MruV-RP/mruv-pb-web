import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class Money extends jspb.Message {
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAmountMicros(): boolean;
  clearAmountMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Money.AsObject;
  static toObject(includeInstance: boolean, msg: Money): Money.AsObject;
  static serializeBinaryToWriter(message: Money, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Money;
  static deserializeBinaryFromReader(message: Money, reader: jspb.BinaryReader): Money;
}

export namespace Money {
  export type AsObject = {
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    amountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

