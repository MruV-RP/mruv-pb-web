import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_vision_v1p4beta1_geometry_pb from '../../../../google/cloud/vision/v1p4beta1/geometry_pb';

export class FaceRecognitionParams extends jspb.Message {
  getCelebritySetList(): Array<string>;
  setCelebritySetList(value: Array<string>): void;
  clearCelebritySetList(): void;
  addCelebritySet(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceRecognitionParams.AsObject;
  static toObject(includeInstance: boolean, msg: FaceRecognitionParams): FaceRecognitionParams.AsObject;
  static serializeBinaryToWriter(message: FaceRecognitionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceRecognitionParams;
  static deserializeBinaryFromReader(message: FaceRecognitionParams, reader: jspb.BinaryReader): FaceRecognitionParams;
}

export namespace FaceRecognitionParams {
  export type AsObject = {
    celebritySetList: Array<string>,
  }
}

export class Celebrity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Celebrity.AsObject;
  static toObject(includeInstance: boolean, msg: Celebrity): Celebrity.AsObject;
  static serializeBinaryToWriter(message: Celebrity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Celebrity;
  static deserializeBinaryFromReader(message: Celebrity, reader: jspb.BinaryReader): Celebrity;
}

export namespace Celebrity {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
  }
}

export class FaceRecognitionResult extends jspb.Message {
  getCelebrity(): Celebrity | undefined;
  setCelebrity(value?: Celebrity): void;
  hasCelebrity(): boolean;
  clearCelebrity(): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: FaceRecognitionResult): FaceRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: FaceRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceRecognitionResult;
  static deserializeBinaryFromReader(message: FaceRecognitionResult, reader: jspb.BinaryReader): FaceRecognitionResult;
}

export namespace FaceRecognitionResult {
  export type AsObject = {
    celebrity?: Celebrity.AsObject,
    confidence: number,
  }
}

