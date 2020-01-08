import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ShoppingPerformanceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingPerformanceView.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingPerformanceView): ShoppingPerformanceView.AsObject;
  static serializeBinaryToWriter(message: ShoppingPerformanceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingPerformanceView;
  static deserializeBinaryFromReader(message: ShoppingPerformanceView, reader: jspb.BinaryReader): ShoppingPerformanceView;
}

export namespace ShoppingPerformanceView {
  export type AsObject = {
    resourceName: string,
  }
}

