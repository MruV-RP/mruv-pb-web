import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

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

  getTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTimeZone(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTimeZone(): boolean;
  clearTimeZone(): void;

  getTestAccount(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTestAccount(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasTestAccount(): boolean;
  clearTestAccount(): void;

  getManager(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setManager(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasManager(): boolean;
  clearManager(): void;

  getDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDescriptiveName(): boolean;
  clearDescriptiveName(): void;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

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
    timeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    testAccount?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    manager?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    descriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

