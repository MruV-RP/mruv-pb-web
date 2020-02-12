import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_event_pb from '../../../../google/cloud/talent/v4beta1/event_pb';

export class CreateClientEventRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getClientEvent(): google_cloud_talent_v4beta1_event_pb.ClientEvent | undefined;
  setClientEvent(value?: google_cloud_talent_v4beta1_event_pb.ClientEvent): void;
  hasClientEvent(): boolean;
  clearClientEvent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClientEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClientEventRequest): CreateClientEventRequest.AsObject;
  static serializeBinaryToWriter(message: CreateClientEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClientEventRequest;
  static deserializeBinaryFromReader(message: CreateClientEventRequest, reader: jspb.BinaryReader): CreateClientEventRequest;
}

export namespace CreateClientEventRequest {
  export type AsObject = {
    parent: string,
    clientEvent?: google_cloud_talent_v4beta1_event_pb.ClientEvent.AsObject,
  }
}

