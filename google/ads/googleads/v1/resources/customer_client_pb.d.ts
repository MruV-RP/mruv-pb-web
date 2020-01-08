import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class CustomerClient extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getClientCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setClientCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasClientCustomer(): boolean;
  clearClientCustomer(): void;

  getHidden(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHidden(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasHidden(): boolean;
  clearHidden(): void;

  getLevel(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLevel(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasLevel(): boolean;
  clearLevel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerClient.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerClient): CustomerClient.AsObject;
  static serializeBinaryToWriter(message: CustomerClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerClient;
  static deserializeBinaryFromReader(message: CustomerClient, reader: jspb.BinaryReader): CustomerClient;
}

export namespace CustomerClient {
  export type AsObject = {
    resourceName: string,
    clientCustomer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hidden?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    level?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

