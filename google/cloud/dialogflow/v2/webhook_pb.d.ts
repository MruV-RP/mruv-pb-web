import * as jspb from "google-protobuf"

import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_cloud_dialogflow_v2_intent_pb from '../../../../google/cloud/dialogflow/v2/intent_pb';
import * as google_cloud_dialogflow_v2_session_pb from '../../../../google/cloud/dialogflow/v2/session_pb';
import * as google_cloud_dialogflow_v2_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2/session_entity_type_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class WebhookRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getResponseId(): string;
  setResponseId(value: string): void;

  getQueryResult(): google_cloud_dialogflow_v2_session_pb.QueryResult | undefined;
  setQueryResult(value?: google_cloud_dialogflow_v2_session_pb.QueryResult): void;
  hasQueryResult(): boolean;
  clearQueryResult(): void;

  getOriginalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
  setOriginalDetectIntentRequest(value?: OriginalDetectIntentRequest): void;
  hasOriginalDetectIntentRequest(): boolean;
  clearOriginalDetectIntentRequest(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
  static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookRequest;
  static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
  export type AsObject = {
    session: string,
    responseId: string,
    queryResult?: google_cloud_dialogflow_v2_session_pb.QueryResult.AsObject,
    originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject,
  }
}

export class WebhookResponse extends jspb.Message {
  getFulfillmentText(): string;
  setFulfillmentText(value: string): void;

  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>): void;
  clearFulfillmentMessagesList(): void;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2_intent_pb.Intent.Message;

  getSource(): string;
  setSource(value: string): void;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): void;
  clearOutputContextsList(): void;
  addOutputContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getFollowupEventInput(): google_cloud_dialogflow_v2_session_pb.EventInput | undefined;
  setFollowupEventInput(value?: google_cloud_dialogflow_v2_session_pb.EventInput): void;
  hasFollowupEventInput(): boolean;
  clearFollowupEventInput(): void;

  getSessionEntityTypesList(): Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;
  setSessionEntityTypesList(value: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>): void;
  clearSessionEntityTypesList(): void;
  addSessionEntityTypes(value?: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType, index?: number): google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
  static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookResponse;
  static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
  export type AsObject = {
    fulfillmentText: string,
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message.AsObject>,
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    followupEventInput?: google_cloud_dialogflow_v2_session_pb.EventInput.AsObject,
    sessionEntityTypesList: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType.AsObject>,
  }
}

export class OriginalDetectIntentRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasPayload(): boolean;
  clearPayload(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalDetectIntentRequest): OriginalDetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
  static deserializeBinaryFromReader(message: OriginalDetectIntentRequest, reader: jspb.BinaryReader): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
  export type AsObject = {
    source: string,
    version: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

