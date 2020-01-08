import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class HotelPerformanceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPerformanceView.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPerformanceView): HotelPerformanceView.AsObject;
  static serializeBinaryToWriter(message: HotelPerformanceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPerformanceView;
  static deserializeBinaryFromReader(message: HotelPerformanceView, reader: jspb.BinaryReader): HotelPerformanceView;
}

export namespace HotelPerformanceView {
  export type AsObject = {
    resourceName: string,
  }
}

