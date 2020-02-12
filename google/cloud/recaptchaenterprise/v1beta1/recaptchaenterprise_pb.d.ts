import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class CreateAssessmentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAssessment(): Assessment | undefined;
  setAssessment(value?: Assessment): void;
  hasAssessment(): boolean;
  clearAssessment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssessmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssessmentRequest): CreateAssessmentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAssessmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssessmentRequest;
  static deserializeBinaryFromReader(message: CreateAssessmentRequest, reader: jspb.BinaryReader): CreateAssessmentRequest;
}

export namespace CreateAssessmentRequest {
  export type AsObject = {
    parent: string,
    assessment?: Assessment.AsObject,
  }
}

export class AnnotateAssessmentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAnnotation(): AnnotateAssessmentRequest.Annotation;
  setAnnotation(value: AnnotateAssessmentRequest.Annotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateAssessmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateAssessmentRequest): AnnotateAssessmentRequest.AsObject;
  static serializeBinaryToWriter(message: AnnotateAssessmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateAssessmentRequest;
  static deserializeBinaryFromReader(message: AnnotateAssessmentRequest, reader: jspb.BinaryReader): AnnotateAssessmentRequest;
}

export namespace AnnotateAssessmentRequest {
  export type AsObject = {
    name: string,
    annotation: AnnotateAssessmentRequest.Annotation,
  }

  export enum Annotation { 
    ANNOTATION_UNSPECIFIED = 0,
    LEGITIMATE = 1,
    FRAUDULENT = 2,
  }
}

export class AnnotateAssessmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateAssessmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateAssessmentResponse): AnnotateAssessmentResponse.AsObject;
  static serializeBinaryToWriter(message: AnnotateAssessmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateAssessmentResponse;
  static deserializeBinaryFromReader(message: AnnotateAssessmentResponse, reader: jspb.BinaryReader): AnnotateAssessmentResponse;
}

export namespace AnnotateAssessmentResponse {
  export type AsObject = {
  }
}

export class Assessment extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEvent(): Event | undefined;
  setEvent(value?: Event): void;
  hasEvent(): boolean;
  clearEvent(): void;

  getScore(): number;
  setScore(value: number): void;

  getTokenProperties(): TokenProperties | undefined;
  setTokenProperties(value?: TokenProperties): void;
  hasTokenProperties(): boolean;
  clearTokenProperties(): void;

  getReasonsList(): Array<Assessment.ClassificationReason>;
  setReasonsList(value: Array<Assessment.ClassificationReason>): void;
  clearReasonsList(): void;
  addReasons(value: Assessment.ClassificationReason, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assessment.AsObject;
  static toObject(includeInstance: boolean, msg: Assessment): Assessment.AsObject;
  static serializeBinaryToWriter(message: Assessment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assessment;
  static deserializeBinaryFromReader(message: Assessment, reader: jspb.BinaryReader): Assessment;
}

export namespace Assessment {
  export type AsObject = {
    name: string,
    event?: Event.AsObject,
    score: number,
    tokenProperties?: TokenProperties.AsObject,
    reasonsList: Array<Assessment.ClassificationReason>,
  }

  export enum ClassificationReason { 
    CLASSIFICATION_REASON_UNSPECIFIED = 0,
    AUTOMATION = 1,
    UNEXPECTED_ENVIRONMENT = 2,
    TOO_MUCH_TRAFFIC = 3,
    UNEXPECTED_USAGE_PATTERNS = 4,
    LOW_CONFIDENCE_SCORE = 5,
  }
}

export class Event extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getSiteKey(): string;
  setSiteKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    token: string,
    siteKey: string,
  }
}

export class TokenProperties extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getInvalidReason(): TokenProperties.InvalidReason;
  setInvalidReason(value: TokenProperties.InvalidReason): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getHostname(): string;
  setHostname(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenProperties.AsObject;
  static toObject(includeInstance: boolean, msg: TokenProperties): TokenProperties.AsObject;
  static serializeBinaryToWriter(message: TokenProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenProperties;
  static deserializeBinaryFromReader(message: TokenProperties, reader: jspb.BinaryReader): TokenProperties;
}

export namespace TokenProperties {
  export type AsObject = {
    valid: boolean,
    invalidReason: TokenProperties.InvalidReason,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hostname: string,
    action: string,
  }

  export enum InvalidReason { 
    INVALID_REASON_UNSPECIFIED = 0,
    UNKNOWN_INVALID_REASON = 1,
    MALFORMED = 2,
    EXPIRED = 3,
    DUPE = 4,
    SITE_MISMATCH = 5,
    MISSING = 6,
  }
}

