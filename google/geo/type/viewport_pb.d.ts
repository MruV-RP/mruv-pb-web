import * as jspb from "google-protobuf"

import * as google_type_latlng_pb from '../../../google/type/latlng_pb';

export class Viewport extends jspb.Message {
  getLow(): google_type_latlng_pb.LatLng | undefined;
  setLow(value?: google_type_latlng_pb.LatLng): void;
  hasLow(): boolean;
  clearLow(): void;

  getHigh(): google_type_latlng_pb.LatLng | undefined;
  setHigh(value?: google_type_latlng_pb.LatLng): void;
  hasHigh(): boolean;
  clearHigh(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Viewport.AsObject;
  static toObject(includeInstance: boolean, msg: Viewport): Viewport.AsObject;
  static serializeBinaryToWriter(message: Viewport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Viewport;
  static deserializeBinaryFromReader(message: Viewport, reader: jspb.BinaryReader): Viewport;
}

export namespace Viewport {
  export type AsObject = {
    low?: google_type_latlng_pb.LatLng.AsObject,
    high?: google_type_latlng_pb.LatLng.AsObject,
  }
}

