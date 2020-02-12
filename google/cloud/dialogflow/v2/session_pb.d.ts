import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_dialogflow_v2_audio_config_pb from '../../../../google/cloud/dialogflow/v2/audio_config_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_cloud_dialogflow_v2_intent_pb from '../../../../google/cloud/dialogflow/v2/intent_pb';
import * as google_cloud_dialogflow_v2_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2/session_entity_type_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';

export class DetectIntentRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getQueryParams(): QueryParameters | undefined;
  setQueryParams(value?: QueryParameters): void;
  hasQueryParams(): boolean;
  clearQueryParams(): void;

  getQueryInput(): QueryInput | undefined;
  setQueryInput(value?: QueryInput): void;
  hasQueryInput(): boolean;
  clearQueryInput(): void;

  getOutputAudioConfig(): google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig): void;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): void;

  getInputAudio(): Uint8Array | string;
  getInputAudio_asU8(): Uint8Array;
  getInputAudio_asB64(): string;
  setInputAudio(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetectIntentRequest): DetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: DetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectIntentRequest;
  static deserializeBinaryFromReader(message: DetectIntentRequest, reader: jspb.BinaryReader): DetectIntentRequest;
}

export namespace DetectIntentRequest {
  export type AsObject = {
    session: string,
    queryParams?: QueryParameters.AsObject,
    queryInput?: QueryInput.AsObject,
    outputAudioConfig?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig.AsObject,
    inputAudio: Uint8Array | string,
  }
}

export class DetectIntentResponse extends jspb.Message {
  getResponseId(): string;
  setResponseId(value: string): void;

  getQueryResult(): QueryResult | undefined;
  setQueryResult(value?: QueryResult): void;
  hasQueryResult(): boolean;
  clearQueryResult(): void;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): void;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): void;

  getOutputAudio(): Uint8Array | string;
  getOutputAudio_asU8(): Uint8Array;
  getOutputAudio_asB64(): string;
  setOutputAudio(value: Uint8Array | string): void;

  getOutputAudioConfig(): google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig): void;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetectIntentResponse): DetectIntentResponse.AsObject;
  static serializeBinaryToWriter(message: DetectIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectIntentResponse;
  static deserializeBinaryFromReader(message: DetectIntentResponse, reader: jspb.BinaryReader): DetectIntentResponse;
}

export namespace DetectIntentResponse {
  export type AsObject = {
    responseId: string,
    queryResult?: QueryResult.AsObject,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
    outputAudio: Uint8Array | string,
    outputAudioConfig?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig.AsObject,
  }
}

export class QueryParameters extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): void;

  getGeoLocation(): google_type_latlng_pb.LatLng | undefined;
  setGeoLocation(value?: google_type_latlng_pb.LatLng): void;
  hasGeoLocation(): boolean;
  clearGeoLocation(): void;

  getContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): void;
  clearContextsList(): void;
  addContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getResetContexts(): boolean;
  setResetContexts(value: boolean): void;

  getSessionEntityTypesList(): Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;
  setSessionEntityTypesList(value: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>): void;
  clearSessionEntityTypesList(): void;
  addSessionEntityTypes(value?: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType, index?: number): google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getSentimentAnalysisRequestConfig(): SentimentAnalysisRequestConfig | undefined;
  setSentimentAnalysisRequestConfig(value?: SentimentAnalysisRequestConfig): void;
  hasSentimentAnalysisRequestConfig(): boolean;
  clearSentimentAnalysisRequestConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParameters.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParameters): QueryParameters.AsObject;
  static serializeBinaryToWriter(message: QueryParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParameters;
  static deserializeBinaryFromReader(message: QueryParameters, reader: jspb.BinaryReader): QueryParameters;
}

export namespace QueryParameters {
  export type AsObject = {
    timeZone: string,
    geoLocation?: google_type_latlng_pb.LatLng.AsObject,
    contextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    resetContexts: boolean,
    sessionEntityTypesList: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType.AsObject>,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    sentimentAnalysisRequestConfig?: SentimentAnalysisRequestConfig.AsObject,
  }
}

export class QueryInput extends jspb.Message {
  getAudioConfig(): google_cloud_dialogflow_v2_audio_config_pb.InputAudioConfig | undefined;
  setAudioConfig(value?: google_cloud_dialogflow_v2_audio_config_pb.InputAudioConfig): void;
  hasAudioConfig(): boolean;
  clearAudioConfig(): void;

  getText(): TextInput | undefined;
  setText(value?: TextInput): void;
  hasText(): boolean;
  clearText(): void;

  getEvent(): EventInput | undefined;
  setEvent(value?: EventInput): void;
  hasEvent(): boolean;
  clearEvent(): void;

  getInputCase(): QueryInput.InputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInput.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInput): QueryInput.AsObject;
  static serializeBinaryToWriter(message: QueryInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInput;
  static deserializeBinaryFromReader(message: QueryInput, reader: jspb.BinaryReader): QueryInput;
}

export namespace QueryInput {
  export type AsObject = {
    audioConfig?: google_cloud_dialogflow_v2_audio_config_pb.InputAudioConfig.AsObject,
    text?: TextInput.AsObject,
    event?: EventInput.AsObject,
  }

  export enum InputCase { 
    INPUT_NOT_SET = 0,
    AUDIO_CONFIG = 1,
    TEXT = 2,
    EVENT = 3,
  }
}

export class QueryResult extends jspb.Message {
  getQueryText(): string;
  setQueryText(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getSpeechRecognitionConfidence(): number;
  setSpeechRecognitionConfidence(value: number): void;

  getAction(): string;
  setAction(value: string): void;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): void;
  hasParameters(): boolean;
  clearParameters(): void;

  getAllRequiredParamsPresent(): boolean;
  setAllRequiredParamsPresent(value: boolean): void;

  getFulfillmentText(): string;
  setFulfillmentText(value: string): void;

  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>): void;
  clearFulfillmentMessagesList(): void;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2_intent_pb.Intent.Message;

  getWebhookSource(): string;
  setWebhookSource(value: string): void;

  getWebhookPayload(): google_protobuf_struct_pb.Struct | undefined;
  setWebhookPayload(value?: google_protobuf_struct_pb.Struct): void;
  hasWebhookPayload(): boolean;
  clearWebhookPayload(): void;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): void;
  clearOutputContextsList(): void;
  addOutputContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getIntent(): google_cloud_dialogflow_v2_intent_pb.Intent | undefined;
  setIntent(value?: google_cloud_dialogflow_v2_intent_pb.Intent): void;
  hasIntent(): boolean;
  clearIntent(): void;

  getIntentDetectionConfidence(): number;
  setIntentDetectionConfidence(value: number): void;

  getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
  setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): void;
  hasDiagnosticInfo(): boolean;
  clearDiagnosticInfo(): void;

  getSentimentAnalysisResult(): SentimentAnalysisResult | undefined;
  setSentimentAnalysisResult(value?: SentimentAnalysisResult): void;
  hasSentimentAnalysisResult(): boolean;
  clearSentimentAnalysisResult(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResult): QueryResult.AsObject;
  static serializeBinaryToWriter(message: QueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResult;
  static deserializeBinaryFromReader(message: QueryResult, reader: jspb.BinaryReader): QueryResult;
}

export namespace QueryResult {
  export type AsObject = {
    queryText: string,
    languageCode: string,
    speechRecognitionConfidence: number,
    action: string,
    parameters?: google_protobuf_struct_pb.Struct.AsObject,
    allRequiredParamsPresent: boolean,
    fulfillmentText: string,
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message.AsObject>,
    webhookSource: string,
    webhookPayload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    intent?: google_cloud_dialogflow_v2_intent_pb.Intent.AsObject,
    intentDetectionConfidence: number,
    diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject,
    sentimentAnalysisResult?: SentimentAnalysisResult.AsObject,
  }
}

export class StreamingDetectIntentRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): void;

  getQueryParams(): QueryParameters | undefined;
  setQueryParams(value?: QueryParameters): void;
  hasQueryParams(): boolean;
  clearQueryParams(): void;

  getQueryInput(): QueryInput | undefined;
  setQueryInput(value?: QueryInput): void;
  hasQueryInput(): boolean;
  clearQueryInput(): void;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): void;

  getOutputAudioConfig(): google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig): void;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): void;

  getInputAudio(): Uint8Array | string;
  getInputAudio_asU8(): Uint8Array;
  getInputAudio_asB64(): string;
  setInputAudio(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingDetectIntentRequest): StreamingDetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: StreamingDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentRequest;
  static deserializeBinaryFromReader(message: StreamingDetectIntentRequest, reader: jspb.BinaryReader): StreamingDetectIntentRequest;
}

export namespace StreamingDetectIntentRequest {
  export type AsObject = {
    session: string,
    queryParams?: QueryParameters.AsObject,
    queryInput?: QueryInput.AsObject,
    singleUtterance: boolean,
    outputAudioConfig?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig.AsObject,
    inputAudio: Uint8Array | string,
  }
}

export class StreamingDetectIntentResponse extends jspb.Message {
  getResponseId(): string;
  setResponseId(value: string): void;

  getRecognitionResult(): StreamingRecognitionResult | undefined;
  setRecognitionResult(value?: StreamingRecognitionResult): void;
  hasRecognitionResult(): boolean;
  clearRecognitionResult(): void;

  getQueryResult(): QueryResult | undefined;
  setQueryResult(value?: QueryResult): void;
  hasQueryResult(): boolean;
  clearQueryResult(): void;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): void;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): void;

  getOutputAudio(): Uint8Array | string;
  getOutputAudio_asU8(): Uint8Array;
  getOutputAudio_asB64(): string;
  setOutputAudio(value: Uint8Array | string): void;

  getOutputAudioConfig(): google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig): void;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingDetectIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingDetectIntentResponse): StreamingDetectIntentResponse.AsObject;
  static serializeBinaryToWriter(message: StreamingDetectIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentResponse;
  static deserializeBinaryFromReader(message: StreamingDetectIntentResponse, reader: jspb.BinaryReader): StreamingDetectIntentResponse;
}

export namespace StreamingDetectIntentResponse {
  export type AsObject = {
    responseId: string,
    recognitionResult?: StreamingRecognitionResult.AsObject,
    queryResult?: QueryResult.AsObject,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
    outputAudio: Uint8Array | string,
    outputAudioConfig?: google_cloud_dialogflow_v2_audio_config_pb.OutputAudioConfig.AsObject,
  }
}

export class StreamingRecognitionResult extends jspb.Message {
  getMessageType(): StreamingRecognitionResult.MessageType;
  setMessageType(value: StreamingRecognitionResult.MessageType): void;

  getTranscript(): string;
  setTranscript(value: string): void;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
  static deserializeBinaryFromReader(message: StreamingRecognitionResult, reader: jspb.BinaryReader): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
  export type AsObject = {
    messageType: StreamingRecognitionResult.MessageType,
    transcript: string,
    isFinal: boolean,
    confidence: number,
  }

  export enum MessageType { 
    MESSAGE_TYPE_UNSPECIFIED = 0,
    TRANSCRIPT = 1,
    END_OF_SINGLE_UTTERANCE = 2,
  }
}

export class TextInput extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextInput.AsObject;
  static toObject(includeInstance: boolean, msg: TextInput): TextInput.AsObject;
  static serializeBinaryToWriter(message: TextInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextInput;
  static deserializeBinaryFromReader(message: TextInput, reader: jspb.BinaryReader): TextInput;
}

export namespace TextInput {
  export type AsObject = {
    text: string,
    languageCode: string,
  }
}

export class EventInput extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): void;
  hasParameters(): boolean;
  clearParameters(): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInput.AsObject;
  static toObject(includeInstance: boolean, msg: EventInput): EventInput.AsObject;
  static serializeBinaryToWriter(message: EventInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInput;
  static deserializeBinaryFromReader(message: EventInput, reader: jspb.BinaryReader): EventInput;
}

export namespace EventInput {
  export type AsObject = {
    name: string,
    parameters?: google_protobuf_struct_pb.Struct.AsObject,
    languageCode: string,
  }
}

export class SentimentAnalysisRequestConfig extends jspb.Message {
  getAnalyzeQueryTextSentiment(): boolean;
  setAnalyzeQueryTextSentiment(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentimentAnalysisRequestConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SentimentAnalysisRequestConfig): SentimentAnalysisRequestConfig.AsObject;
  static serializeBinaryToWriter(message: SentimentAnalysisRequestConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentimentAnalysisRequestConfig;
  static deserializeBinaryFromReader(message: SentimentAnalysisRequestConfig, reader: jspb.BinaryReader): SentimentAnalysisRequestConfig;
}

export namespace SentimentAnalysisRequestConfig {
  export type AsObject = {
    analyzeQueryTextSentiment: boolean,
  }
}

export class SentimentAnalysisResult extends jspb.Message {
  getQueryTextSentiment(): Sentiment | undefined;
  setQueryTextSentiment(value?: Sentiment): void;
  hasQueryTextSentiment(): boolean;
  clearQueryTextSentiment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentimentAnalysisResult.AsObject;
  static toObject(includeInstance: boolean, msg: SentimentAnalysisResult): SentimentAnalysisResult.AsObject;
  static serializeBinaryToWriter(message: SentimentAnalysisResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentimentAnalysisResult;
  static deserializeBinaryFromReader(message: SentimentAnalysisResult, reader: jspb.BinaryReader): SentimentAnalysisResult;
}

export namespace SentimentAnalysisResult {
  export type AsObject = {
    queryTextSentiment?: Sentiment.AsObject,
  }
}

export class Sentiment extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  getMagnitude(): number;
  setMagnitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sentiment.AsObject;
  static toObject(includeInstance: boolean, msg: Sentiment): Sentiment.AsObject;
  static serializeBinaryToWriter(message: Sentiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sentiment;
  static deserializeBinaryFromReader(message: Sentiment, reader: jspb.BinaryReader): Sentiment;
}

export namespace Sentiment {
  export type AsObject = {
    score: number,
    magnitude: number,
  }
}

