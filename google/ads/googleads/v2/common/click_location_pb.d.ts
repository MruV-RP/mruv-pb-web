import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ClickLocation extends jspb.Message {
  getCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCity(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCity(): boolean;
  clearCity(): void;

  getCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountry(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountry(): boolean;
  clearCountry(): void;

  getMetro(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMetro(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMetro(): boolean;
  clearMetro(): void;

  getMostSpecific(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMostSpecific(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasMostSpecific(): boolean;
  clearMostSpecific(): void;

  getRegion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setRegion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasRegion(): boolean;
  clearRegion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ClickLocation): ClickLocation.AsObject;
  static serializeBinaryToWriter(message: ClickLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickLocation;
  static deserializeBinaryFromReader(message: ClickLocation, reader: jspb.BinaryReader): ClickLocation;
}

export namespace ClickLocation {
  export type AsObject = {
    city?: google_protobuf_wrappers_pb.StringValue.AsObject,
    country?: google_protobuf_wrappers_pb.StringValue.AsObject,
    metro?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mostSpecific?: google_protobuf_wrappers_pb.StringValue.AsObject,
    region?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

