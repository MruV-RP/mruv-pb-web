import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CarrierConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarrierConstant.AsObject;
  static toObject(includeInstance: boolean, msg: CarrierConstant): CarrierConstant.AsObject;
  static serializeBinaryToWriter(message: CarrierConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarrierConstant;
  static deserializeBinaryFromReader(message: CarrierConstant, reader: jspb.BinaryReader): CarrierConstant;
}

export namespace CarrierConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

