import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CustomParameter extends jspb.Message {
  getKey(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKey(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKey(): boolean;
  clearKey(): void;

  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomParameter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomParameter): CustomParameter.AsObject;
  static serializeBinaryToWriter(message: CustomParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomParameter;
  static deserializeBinaryFromReader(message: CustomParameter, reader: jspb.BinaryReader): CustomParameter;
}

export namespace CustomParameter {
  export type AsObject = {
    key?: google_protobuf_wrappers_pb.StringValue.AsObject,
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

