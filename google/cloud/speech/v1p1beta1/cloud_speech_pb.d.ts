import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

export class RecognizeRequest extends jspb.Message {
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getAudio(): RecognitionAudio | undefined;
  setAudio(value?: RecognitionAudio): void;
  hasAudio(): boolean;
  clearAudio(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecognizeRequest): RecognizeRequest.AsObject;
  static serializeBinaryToWriter(message: RecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognizeRequest;
  static deserializeBinaryFromReader(message: RecognizeRequest, reader: jspb.BinaryReader): RecognizeRequest;
}

export namespace RecognizeRequest {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    audio?: RecognitionAudio.AsObject,
  }
}

export class LongRunningRecognizeRequest extends jspb.Message {
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getAudio(): RecognitionAudio | undefined;
  setAudio(value?: RecognitionAudio): void;
  hasAudio(): boolean;
  clearAudio(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeRequest): LongRunningRecognizeRequest.AsObject;
  static serializeBinaryToWriter(message: LongRunningRecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeRequest;
  static deserializeBinaryFromReader(message: LongRunningRecognizeRequest, reader: jspb.BinaryReader): LongRunningRecognizeRequest;
}

export namespace LongRunningRecognizeRequest {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    audio?: RecognitionAudio.AsObject,
  }
}

export class StreamingRecognizeRequest extends jspb.Message {
  getStreamingConfig(): StreamingRecognitionConfig | undefined;
  setStreamingConfig(value?: StreamingRecognitionConfig): void;
  hasStreamingConfig(): boolean;
  clearStreamingConfig(): void;

  getAudioContent(): Uint8Array | string;
  getAudioContent_asU8(): Uint8Array;
  getAudioContent_asB64(): string;
  setAudioContent(value: Uint8Array | string): void;

  getStreamingRequestCase(): StreamingRecognizeRequest.StreamingRequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognizeRequest): StreamingRecognizeRequest.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognizeRequest;
  static deserializeBinaryFromReader(message: StreamingRecognizeRequest, reader: jspb.BinaryReader): StreamingRecognizeRequest;
}

export namespace StreamingRecognizeRequest {
  export type AsObject = {
    streamingConfig?: StreamingRecognitionConfig.AsObject,
    audioContent: Uint8Array | string,
  }

  export enum StreamingRequestCase { 
    STREAMING_REQUEST_NOT_SET = 0,
    STREAMING_CONFIG = 1,
    AUDIO_CONTENT = 2,
  }
}

export class StreamingRecognitionConfig extends jspb.Message {
  getConfig(): RecognitionConfig | undefined;
  setConfig(value?: RecognitionConfig): void;
  hasConfig(): boolean;
  clearConfig(): void;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): void;

  getInterimResults(): boolean;
  setInterimResults(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionConfig): StreamingRecognitionConfig.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognitionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionConfig;
  static deserializeBinaryFromReader(message: StreamingRecognitionConfig, reader: jspb.BinaryReader): StreamingRecognitionConfig;
}

export namespace StreamingRecognitionConfig {
  export type AsObject = {
    config?: RecognitionConfig.AsObject,
    singleUtterance: boolean,
    interimResults: boolean,
  }
}

export class RecognitionConfig extends jspb.Message {
  getEncoding(): RecognitionConfig.AudioEncoding;
  setEncoding(value: RecognitionConfig.AudioEncoding): void;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  getAudioChannelCount(): number;
  setAudioChannelCount(value: number): void;

  getEnableSeparateRecognitionPerChannel(): boolean;
  setEnableSeparateRecognitionPerChannel(value: boolean): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getAlternativeLanguageCodesList(): Array<string>;
  setAlternativeLanguageCodesList(value: Array<string>): void;
  clearAlternativeLanguageCodesList(): void;
  addAlternativeLanguageCodes(value: string, index?: number): void;

  getMaxAlternatives(): number;
  setMaxAlternatives(value: number): void;

  getProfanityFilter(): boolean;
  setProfanityFilter(value: boolean): void;

  getSpeechContextsList(): Array<SpeechContext>;
  setSpeechContextsList(value: Array<SpeechContext>): void;
  clearSpeechContextsList(): void;
  addSpeechContexts(value?: SpeechContext, index?: number): SpeechContext;

  getEnableWordTimeOffsets(): boolean;
  setEnableWordTimeOffsets(value: boolean): void;

  getEnableWordConfidence(): boolean;
  setEnableWordConfidence(value: boolean): void;

  getEnableAutomaticPunctuation(): boolean;
  setEnableAutomaticPunctuation(value: boolean): void;

  getEnableSpeakerDiarization(): boolean;
  setEnableSpeakerDiarization(value: boolean): void;

  getDiarizationSpeakerCount(): number;
  setDiarizationSpeakerCount(value: number): void;

  getDiarizationConfig(): SpeakerDiarizationConfig | undefined;
  setDiarizationConfig(value?: SpeakerDiarizationConfig): void;
  hasDiarizationConfig(): boolean;
  clearDiarizationConfig(): void;

  getMetadata(): RecognitionMetadata | undefined;
  setMetadata(value?: RecognitionMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getModel(): string;
  setModel(value: string): void;

  getUseEnhanced(): boolean;
  setUseEnhanced(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RecognitionConfig): RecognitionConfig.AsObject;
  static serializeBinaryToWriter(message: RecognitionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionConfig;
  static deserializeBinaryFromReader(message: RecognitionConfig, reader: jspb.BinaryReader): RecognitionConfig;
}

export namespace RecognitionConfig {
  export type AsObject = {
    encoding: RecognitionConfig.AudioEncoding,
    sampleRateHertz: number,
    audioChannelCount: number,
    enableSeparateRecognitionPerChannel: boolean,
    languageCode: string,
    alternativeLanguageCodesList: Array<string>,
    maxAlternatives: number,
    profanityFilter: boolean,
    speechContextsList: Array<SpeechContext.AsObject>,
    enableWordTimeOffsets: boolean,
    enableWordConfidence: boolean,
    enableAutomaticPunctuation: boolean,
    enableSpeakerDiarization: boolean,
    diarizationSpeakerCount: number,
    diarizationConfig?: SpeakerDiarizationConfig.AsObject,
    metadata?: RecognitionMetadata.AsObject,
    model: string,
    useEnhanced: boolean,
  }

  export enum AudioEncoding { 
    ENCODING_UNSPECIFIED = 0,
    LINEAR16 = 1,
    FLAC = 2,
    MULAW = 3,
    AMR = 4,
    AMR_WB = 5,
    OGG_OPUS = 6,
    SPEEX_WITH_HEADER_BYTE = 7,
    MP3 = 8,
  }
}

export class SpeakerDiarizationConfig extends jspb.Message {
  getEnableSpeakerDiarization(): boolean;
  setEnableSpeakerDiarization(value: boolean): void;

  getMinSpeakerCount(): number;
  setMinSpeakerCount(value: number): void;

  getMaxSpeakerCount(): number;
  setMaxSpeakerCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeakerDiarizationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SpeakerDiarizationConfig): SpeakerDiarizationConfig.AsObject;
  static serializeBinaryToWriter(message: SpeakerDiarizationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeakerDiarizationConfig;
  static deserializeBinaryFromReader(message: SpeakerDiarizationConfig, reader: jspb.BinaryReader): SpeakerDiarizationConfig;
}

export namespace SpeakerDiarizationConfig {
  export type AsObject = {
    enableSpeakerDiarization: boolean,
    minSpeakerCount: number,
    maxSpeakerCount: number,
  }
}

export class RecognitionMetadata extends jspb.Message {
  getInteractionType(): RecognitionMetadata.InteractionType;
  setInteractionType(value: RecognitionMetadata.InteractionType): void;

  getIndustryNaicsCodeOfAudio(): number;
  setIndustryNaicsCodeOfAudio(value: number): void;

  getMicrophoneDistance(): RecognitionMetadata.MicrophoneDistance;
  setMicrophoneDistance(value: RecognitionMetadata.MicrophoneDistance): void;

  getOriginalMediaType(): RecognitionMetadata.OriginalMediaType;
  setOriginalMediaType(value: RecognitionMetadata.OriginalMediaType): void;

  getRecordingDeviceType(): RecognitionMetadata.RecordingDeviceType;
  setRecordingDeviceType(value: RecognitionMetadata.RecordingDeviceType): void;

  getRecordingDeviceName(): string;
  setRecordingDeviceName(value: string): void;

  getOriginalMimeType(): string;
  setOriginalMimeType(value: string): void;

  getObfuscatedId(): number;
  setObfuscatedId(value: number): void;

  getAudioTopic(): string;
  setAudioTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RecognitionMetadata): RecognitionMetadata.AsObject;
  static serializeBinaryToWriter(message: RecognitionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionMetadata;
  static deserializeBinaryFromReader(message: RecognitionMetadata, reader: jspb.BinaryReader): RecognitionMetadata;
}

export namespace RecognitionMetadata {
  export type AsObject = {
    interactionType: RecognitionMetadata.InteractionType,
    industryNaicsCodeOfAudio: number,
    microphoneDistance: RecognitionMetadata.MicrophoneDistance,
    originalMediaType: RecognitionMetadata.OriginalMediaType,
    recordingDeviceType: RecognitionMetadata.RecordingDeviceType,
    recordingDeviceName: string,
    originalMimeType: string,
    obfuscatedId: number,
    audioTopic: string,
  }

  export enum InteractionType { 
    INTERACTION_TYPE_UNSPECIFIED = 0,
    DISCUSSION = 1,
    PRESENTATION = 2,
    PHONE_CALL = 3,
    VOICEMAIL = 4,
    PROFESSIONALLY_PRODUCED = 5,
    VOICE_SEARCH = 6,
    VOICE_COMMAND = 7,
    DICTATION = 8,
  }

  export enum MicrophoneDistance { 
    MICROPHONE_DISTANCE_UNSPECIFIED = 0,
    NEARFIELD = 1,
    MIDFIELD = 2,
    FARFIELD = 3,
  }

  export enum OriginalMediaType { 
    ORIGINAL_MEDIA_TYPE_UNSPECIFIED = 0,
    AUDIO = 1,
    VIDEO = 2,
  }

  export enum RecordingDeviceType { 
    RECORDING_DEVICE_TYPE_UNSPECIFIED = 0,
    SMARTPHONE = 1,
    PC = 2,
    PHONE_LINE = 3,
    VEHICLE = 4,
    OTHER_OUTDOOR_DEVICE = 5,
    OTHER_INDOOR_DEVICE = 6,
  }
}

export class SpeechContext extends jspb.Message {
  getPhrasesList(): Array<string>;
  setPhrasesList(value: Array<string>): void;
  clearPhrasesList(): void;
  addPhrases(value: string, index?: number): void;

  getBoost(): number;
  setBoost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechContext.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechContext): SpeechContext.AsObject;
  static serializeBinaryToWriter(message: SpeechContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechContext;
  static deserializeBinaryFromReader(message: SpeechContext, reader: jspb.BinaryReader): SpeechContext;
}

export namespace SpeechContext {
  export type AsObject = {
    phrasesList: Array<string>,
    boost: number,
  }
}

export class RecognitionAudio extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getUri(): string;
  setUri(value: string): void;

  getAudioSourceCase(): RecognitionAudio.AudioSourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionAudio.AsObject;
  static toObject(includeInstance: boolean, msg: RecognitionAudio): RecognitionAudio.AsObject;
  static serializeBinaryToWriter(message: RecognitionAudio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionAudio;
  static deserializeBinaryFromReader(message: RecognitionAudio, reader: jspb.BinaryReader): RecognitionAudio;
}

export namespace RecognitionAudio {
  export type AsObject = {
    content: Uint8Array | string,
    uri: string,
  }

  export enum AudioSourceCase { 
    AUDIO_SOURCE_NOT_SET = 0,
    CONTENT = 1,
    URI = 2,
  }
}

export class RecognizeResponse extends jspb.Message {
  getResultsList(): Array<SpeechRecognitionResult>;
  setResultsList(value: Array<SpeechRecognitionResult>): void;
  clearResultsList(): void;
  addResults(value?: SpeechRecognitionResult, index?: number): SpeechRecognitionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecognizeResponse): RecognizeResponse.AsObject;
  static serializeBinaryToWriter(message: RecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecognizeResponse;
  static deserializeBinaryFromReader(message: RecognizeResponse, reader: jspb.BinaryReader): RecognizeResponse;
}

export namespace RecognizeResponse {
  export type AsObject = {
    resultsList: Array<SpeechRecognitionResult.AsObject>,
  }
}

export class LongRunningRecognizeResponse extends jspb.Message {
  getResultsList(): Array<SpeechRecognitionResult>;
  setResultsList(value: Array<SpeechRecognitionResult>): void;
  clearResultsList(): void;
  addResults(value?: SpeechRecognitionResult, index?: number): SpeechRecognitionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeResponse): LongRunningRecognizeResponse.AsObject;
  static serializeBinaryToWriter(message: LongRunningRecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeResponse;
  static deserializeBinaryFromReader(message: LongRunningRecognizeResponse, reader: jspb.BinaryReader): LongRunningRecognizeResponse;
}

export namespace LongRunningRecognizeResponse {
  export type AsObject = {
    resultsList: Array<SpeechRecognitionResult.AsObject>,
  }
}

export class LongRunningRecognizeMetadata extends jspb.Message {
  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getLastUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastUpdateTime(): boolean;
  clearLastUpdateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LongRunningRecognizeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LongRunningRecognizeMetadata): LongRunningRecognizeMetadata.AsObject;
  static serializeBinaryToWriter(message: LongRunningRecognizeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LongRunningRecognizeMetadata;
  static deserializeBinaryFromReader(message: LongRunningRecognizeMetadata, reader: jspb.BinaryReader): LongRunningRecognizeMetadata;
}

export namespace LongRunningRecognizeMetadata {
  export type AsObject = {
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUpdateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StreamingRecognizeResponse extends jspb.Message {
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;
  hasError(): boolean;
  clearError(): void;

  getResultsList(): Array<StreamingRecognitionResult>;
  setResultsList(value: Array<StreamingRecognitionResult>): void;
  clearResultsList(): void;
  addResults(value?: StreamingRecognitionResult, index?: number): StreamingRecognitionResult;

  getSpeechEventType(): StreamingRecognizeResponse.SpeechEventType;
  setSpeechEventType(value: StreamingRecognizeResponse.SpeechEventType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognizeResponse): StreamingRecognizeResponse.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognizeResponse;
  static deserializeBinaryFromReader(message: StreamingRecognizeResponse, reader: jspb.BinaryReader): StreamingRecognizeResponse;
}

export namespace StreamingRecognizeResponse {
  export type AsObject = {
    error?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<StreamingRecognitionResult.AsObject>,
    speechEventType: StreamingRecognizeResponse.SpeechEventType,
  }

  export enum SpeechEventType { 
    SPEECH_EVENT_UNSPECIFIED = 0,
    END_OF_SINGLE_UTTERANCE = 1,
  }
}

export class StreamingRecognitionResult extends jspb.Message {
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  clearAlternativesList(): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): void;

  getStability(): number;
  setStability(value: number): void;

  getResultEndTime(): google_protobuf_duration_pb.Duration | undefined;
  setResultEndTime(value?: google_protobuf_duration_pb.Duration): void;
  hasResultEndTime(): boolean;
  clearResultEndTime(): void;

  getChannelTag(): number;
  setChannelTag(value: number): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
  static deserializeBinaryFromReader(message: StreamingRecognitionResult, reader: jspb.BinaryReader): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
    isFinal: boolean,
    stability: number,
    resultEndTime?: google_protobuf_duration_pb.Duration.AsObject,
    channelTag: number,
    languageCode: string,
  }
}

export class SpeechRecognitionResult extends jspb.Message {
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  clearAlternativesList(): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;

  getChannelTag(): number;
  setChannelTag(value: number): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionResult): SpeechRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: SpeechRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionResult;
  static deserializeBinaryFromReader(message: SpeechRecognitionResult, reader: jspb.BinaryReader): SpeechRecognitionResult;
}

export namespace SpeechRecognitionResult {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
    channelTag: number,
    languageCode: string,
  }
}

export class SpeechRecognitionAlternative extends jspb.Message {
  getTranscript(): string;
  setTranscript(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getWordsList(): Array<WordInfo>;
  setWordsList(value: Array<WordInfo>): void;
  clearWordsList(): void;
  addWords(value?: WordInfo, index?: number): WordInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionAlternative.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionAlternative): SpeechRecognitionAlternative.AsObject;
  static serializeBinaryToWriter(message: SpeechRecognitionAlternative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionAlternative;
  static deserializeBinaryFromReader(message: SpeechRecognitionAlternative, reader: jspb.BinaryReader): SpeechRecognitionAlternative;
}

export namespace SpeechRecognitionAlternative {
  export type AsObject = {
    transcript: string,
    confidence: number,
    wordsList: Array<WordInfo.AsObject>,
  }
}

export class WordInfo extends jspb.Message {
  getStartTime(): google_protobuf_duration_pb.Duration | undefined;
  setStartTime(value?: google_protobuf_duration_pb.Duration): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_duration_pb.Duration | undefined;
  setEndTime(value?: google_protobuf_duration_pb.Duration): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getWord(): string;
  setWord(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getSpeakerTag(): number;
  setSpeakerTag(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WordInfo): WordInfo.AsObject;
  static serializeBinaryToWriter(message: WordInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordInfo;
  static deserializeBinaryFromReader(message: WordInfo, reader: jspb.BinaryReader): WordInfo;
}

export namespace WordInfo {
  export type AsObject = {
    startTime?: google_protobuf_duration_pb.Duration.AsObject,
    endTime?: google_protobuf_duration_pb.Duration.AsObject,
    word: string,
    confidence: number,
    speakerTag: number,
  }
}

