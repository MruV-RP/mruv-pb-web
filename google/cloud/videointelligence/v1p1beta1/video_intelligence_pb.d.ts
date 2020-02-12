import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

export class AnnotateVideoRequest extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getInputContent(): Uint8Array | string;
  getInputContent_asU8(): Uint8Array;
  getInputContent_asB64(): string;
  setInputContent(value: Uint8Array | string): void;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): void;
  clearFeaturesList(): void;
  addFeatures(value: Feature, index?: number): void;

  getVideoContext(): VideoContext | undefined;
  setVideoContext(value?: VideoContext): void;
  hasVideoContext(): boolean;
  clearVideoContext(): void;

  getOutputUri(): string;
  setOutputUri(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoRequest): AnnotateVideoRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoRequest;
  static deserializeBinaryFromReader(message: AnnotateVideoRequest, reader: jspb.BinaryReader): AnnotateVideoRequest;
}

export namespace AnnotateVideoRequest {
  export type AsObject = {
    inputUri: string,
    inputContent: Uint8Array | string,
    featuresList: Array<Feature>,
    videoContext?: VideoContext.AsObject,
    outputUri: string,
    locationId: string,
  }
}

export class VideoContext extends jspb.Message {
  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): void;
  clearSegmentsList(): void;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  getLabelDetectionConfig(): LabelDetectionConfig | undefined;
  setLabelDetectionConfig(value?: LabelDetectionConfig): void;
  hasLabelDetectionConfig(): boolean;
  clearLabelDetectionConfig(): void;

  getShotChangeDetectionConfig(): ShotChangeDetectionConfig | undefined;
  setShotChangeDetectionConfig(value?: ShotChangeDetectionConfig): void;
  hasShotChangeDetectionConfig(): boolean;
  clearShotChangeDetectionConfig(): void;

  getExplicitContentDetectionConfig(): ExplicitContentDetectionConfig | undefined;
  setExplicitContentDetectionConfig(value?: ExplicitContentDetectionConfig): void;
  hasExplicitContentDetectionConfig(): boolean;
  clearExplicitContentDetectionConfig(): void;

  getSpeechTranscriptionConfig(): SpeechTranscriptionConfig | undefined;
  setSpeechTranscriptionConfig(value?: SpeechTranscriptionConfig): void;
  hasSpeechTranscriptionConfig(): boolean;
  clearSpeechTranscriptionConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoContext.AsObject;
  static toObject(includeInstance: boolean, msg: VideoContext): VideoContext.AsObject;
  static serializeBinaryToWriter(message: VideoContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoContext;
  static deserializeBinaryFromReader(message: VideoContext, reader: jspb.BinaryReader): VideoContext;
}

export namespace VideoContext {
  export type AsObject = {
    segmentsList: Array<VideoSegment.AsObject>,
    labelDetectionConfig?: LabelDetectionConfig.AsObject,
    shotChangeDetectionConfig?: ShotChangeDetectionConfig.AsObject,
    explicitContentDetectionConfig?: ExplicitContentDetectionConfig.AsObject,
    speechTranscriptionConfig?: SpeechTranscriptionConfig.AsObject,
  }
}

export class LabelDetectionConfig extends jspb.Message {
  getLabelDetectionMode(): LabelDetectionMode;
  setLabelDetectionMode(value: LabelDetectionMode): void;

  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LabelDetectionConfig): LabelDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: LabelDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelDetectionConfig;
  static deserializeBinaryFromReader(message: LabelDetectionConfig, reader: jspb.BinaryReader): LabelDetectionConfig;
}

export namespace LabelDetectionConfig {
  export type AsObject = {
    labelDetectionMode: LabelDetectionMode,
    stationaryCamera: boolean,
    model: string,
  }
}

export class ShotChangeDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShotChangeDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ShotChangeDetectionConfig): ShotChangeDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: ShotChangeDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShotChangeDetectionConfig;
  static deserializeBinaryFromReader(message: ShotChangeDetectionConfig, reader: jspb.BinaryReader): ShotChangeDetectionConfig;
}

export namespace ShotChangeDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class ExplicitContentDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentDetectionConfig): ExplicitContentDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentDetectionConfig;
  static deserializeBinaryFromReader(message: ExplicitContentDetectionConfig, reader: jspb.BinaryReader): ExplicitContentDetectionConfig;
}

export namespace ExplicitContentDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class VideoSegment extends jspb.Message {
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): void;

  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSegment.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSegment): VideoSegment.AsObject;
  static serializeBinaryToWriter(message: VideoSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSegment;
  static deserializeBinaryFromReader(message: VideoSegment, reader: jspb.BinaryReader): VideoSegment;
}

export namespace VideoSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LabelSegment extends jspb.Message {
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;
  hasSegment(): boolean;
  clearSegment(): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSegment.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSegment): LabelSegment.AsObject;
  static serializeBinaryToWriter(message: LabelSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSegment;
  static deserializeBinaryFromReader(message: LabelSegment, reader: jspb.BinaryReader): LabelSegment;
}

export namespace LabelSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
  }
}

export class LabelFrame extends jspb.Message {
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelFrame.AsObject;
  static toObject(includeInstance: boolean, msg: LabelFrame): LabelFrame.AsObject;
  static serializeBinaryToWriter(message: LabelFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelFrame;
  static deserializeBinaryFromReader(message: LabelFrame, reader: jspb.BinaryReader): LabelFrame;
}

export namespace LabelFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    confidence: number,
  }
}

export class Entity extends jspb.Message {
  getEntityId(): string;
  setEntityId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entityId: string,
    description: string,
    languageCode: string,
  }
}

export class LabelAnnotation extends jspb.Message {
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;
  hasEntity(): boolean;
  clearEntity(): void;

  getCategoryEntitiesList(): Array<Entity>;
  setCategoryEntitiesList(value: Array<Entity>): void;
  clearCategoryEntitiesList(): void;
  addCategoryEntities(value?: Entity, index?: number): Entity;

  getSegmentsList(): Array<LabelSegment>;
  setSegmentsList(value: Array<LabelSegment>): void;
  clearSegmentsList(): void;
  addSegments(value?: LabelSegment, index?: number): LabelSegment;

  getFramesList(): Array<LabelFrame>;
  setFramesList(value: Array<LabelFrame>): void;
  clearFramesList(): void;
  addFrames(value?: LabelFrame, index?: number): LabelFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAnnotation): LabelAnnotation.AsObject;
  static serializeBinaryToWriter(message: LabelAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAnnotation;
  static deserializeBinaryFromReader(message: LabelAnnotation, reader: jspb.BinaryReader): LabelAnnotation;
}

export namespace LabelAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    categoryEntitiesList: Array<Entity.AsObject>,
    segmentsList: Array<LabelSegment.AsObject>,
    framesList: Array<LabelFrame.AsObject>,
  }
}

export class ExplicitContentFrame extends jspb.Message {
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;

  getPornographyLikelihood(): Likelihood;
  setPornographyLikelihood(value: Likelihood): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentFrame): ExplicitContentFrame.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentFrame;
  static deserializeBinaryFromReader(message: ExplicitContentFrame, reader: jspb.BinaryReader): ExplicitContentFrame;
}

export namespace ExplicitContentFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    pornographyLikelihood: Likelihood,
  }
}

export class ExplicitContentAnnotation extends jspb.Message {
  getFramesList(): Array<ExplicitContentFrame>;
  setFramesList(value: Array<ExplicitContentFrame>): void;
  clearFramesList(): void;
  addFrames(value?: ExplicitContentFrame, index?: number): ExplicitContentFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentAnnotation): ExplicitContentAnnotation.AsObject;
  static serializeBinaryToWriter(message: ExplicitContentAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentAnnotation;
  static deserializeBinaryFromReader(message: ExplicitContentAnnotation, reader: jspb.BinaryReader): ExplicitContentAnnotation;
}

export namespace ExplicitContentAnnotation {
  export type AsObject = {
    framesList: Array<ExplicitContentFrame.AsObject>,
  }
}

export class VideoAnnotationResults extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getSegmentLabelAnnotationsList(): Array<LabelAnnotation>;
  setSegmentLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  clearSegmentLabelAnnotationsList(): void;
  addSegmentLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getShotLabelAnnotationsList(): Array<LabelAnnotation>;
  setShotLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  clearShotLabelAnnotationsList(): void;
  addShotLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getFrameLabelAnnotationsList(): Array<LabelAnnotation>;
  setFrameLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  clearFrameLabelAnnotationsList(): void;
  addFrameLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): void;
  clearShotAnnotationsList(): void;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  getExplicitAnnotation(): ExplicitContentAnnotation | undefined;
  setExplicitAnnotation(value?: ExplicitContentAnnotation): void;
  hasExplicitAnnotation(): boolean;
  clearExplicitAnnotation(): void;

  getSpeechTranscriptionsList(): Array<SpeechTranscription>;
  setSpeechTranscriptionsList(value: Array<SpeechTranscription>): void;
  clearSpeechTranscriptionsList(): void;
  addSpeechTranscriptions(value?: SpeechTranscription, index?: number): SpeechTranscription;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;
  hasError(): boolean;
  clearError(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationResults.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationResults): VideoAnnotationResults.AsObject;
  static serializeBinaryToWriter(message: VideoAnnotationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationResults;
  static deserializeBinaryFromReader(message: VideoAnnotationResults, reader: jspb.BinaryReader): VideoAnnotationResults;
}

export namespace VideoAnnotationResults {
  export type AsObject = {
    inputUri: string,
    segmentLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    frameLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    explicitAnnotation?: ExplicitContentAnnotation.AsObject,
    speechTranscriptionsList: Array<SpeechTranscription.AsObject>,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class AnnotateVideoResponse extends jspb.Message {
  getAnnotationResultsList(): Array<VideoAnnotationResults>;
  setAnnotationResultsList(value: Array<VideoAnnotationResults>): void;
  clearAnnotationResultsList(): void;
  addAnnotationResults(value?: VideoAnnotationResults, index?: number): VideoAnnotationResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoResponse): AnnotateVideoResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoResponse;
  static deserializeBinaryFromReader(message: AnnotateVideoResponse, reader: jspb.BinaryReader): AnnotateVideoResponse;
}

export namespace AnnotateVideoResponse {
  export type AsObject = {
    annotationResultsList: Array<VideoAnnotationResults.AsObject>,
  }
}

export class VideoAnnotationProgress extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationProgress.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationProgress): VideoAnnotationProgress.AsObject;
  static serializeBinaryToWriter(message: VideoAnnotationProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationProgress;
  static deserializeBinaryFromReader(message: VideoAnnotationProgress, reader: jspb.BinaryReader): VideoAnnotationProgress;
}

export namespace VideoAnnotationProgress {
  export type AsObject = {
    inputUri: string,
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AnnotateVideoProgress extends jspb.Message {
  getAnnotationProgressList(): Array<VideoAnnotationProgress>;
  setAnnotationProgressList(value: Array<VideoAnnotationProgress>): void;
  clearAnnotationProgressList(): void;
  addAnnotationProgress(value?: VideoAnnotationProgress, index?: number): VideoAnnotationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoProgress.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoProgress): AnnotateVideoProgress.AsObject;
  static serializeBinaryToWriter(message: AnnotateVideoProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoProgress;
  static deserializeBinaryFromReader(message: AnnotateVideoProgress, reader: jspb.BinaryReader): AnnotateVideoProgress;
}

export namespace AnnotateVideoProgress {
  export type AsObject = {
    annotationProgressList: Array<VideoAnnotationProgress.AsObject>,
  }
}

export class SpeechTranscriptionConfig extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getMaxAlternatives(): number;
  setMaxAlternatives(value: number): void;

  getFilterProfanity(): boolean;
  setFilterProfanity(value: boolean): void;

  getSpeechContextsList(): Array<SpeechContext>;
  setSpeechContextsList(value: Array<SpeechContext>): void;
  clearSpeechContextsList(): void;
  addSpeechContexts(value?: SpeechContext, index?: number): SpeechContext;

  getEnableAutomaticPunctuation(): boolean;
  setEnableAutomaticPunctuation(value: boolean): void;

  getAudioTracksList(): Array<number>;
  setAudioTracksList(value: Array<number>): void;
  clearAudioTracksList(): void;
  addAudioTracks(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechTranscriptionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechTranscriptionConfig): SpeechTranscriptionConfig.AsObject;
  static serializeBinaryToWriter(message: SpeechTranscriptionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechTranscriptionConfig;
  static deserializeBinaryFromReader(message: SpeechTranscriptionConfig, reader: jspb.BinaryReader): SpeechTranscriptionConfig;
}

export namespace SpeechTranscriptionConfig {
  export type AsObject = {
    languageCode: string,
    maxAlternatives: number,
    filterProfanity: boolean,
    speechContextsList: Array<SpeechContext.AsObject>,
    enableAutomaticPunctuation: boolean,
    audioTracksList: Array<number>,
  }
}

export class SpeechContext extends jspb.Message {
  getPhrasesList(): Array<string>;
  setPhrasesList(value: Array<string>): void;
  clearPhrasesList(): void;
  addPhrases(value: string, index?: number): void;

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
  }
}

export class SpeechTranscription extends jspb.Message {
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  clearAlternativesList(): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechTranscription.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechTranscription): SpeechTranscription.AsObject;
  static serializeBinaryToWriter(message: SpeechTranscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechTranscription;
  static deserializeBinaryFromReader(message: SpeechTranscription, reader: jspb.BinaryReader): SpeechTranscription;
}

export namespace SpeechTranscription {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
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
  }
}

export enum Feature { 
  FEATURE_UNSPECIFIED = 0,
  LABEL_DETECTION = 1,
  SHOT_CHANGE_DETECTION = 2,
  EXPLICIT_CONTENT_DETECTION = 3,
  SPEECH_TRANSCRIPTION = 6,
}
export enum LabelDetectionMode { 
  LABEL_DETECTION_MODE_UNSPECIFIED = 0,
  SHOT_MODE = 1,
  FRAME_MODE = 2,
  SHOT_AND_FRAME_MODE = 3,
}
export enum Likelihood { 
  LIKELIHOOD_UNSPECIFIED = 0,
  VERY_UNLIKELY = 1,
  UNLIKELY = 2,
  POSSIBLE = 3,
  LIKELY = 4,
  VERY_LIKELY = 5,
}
