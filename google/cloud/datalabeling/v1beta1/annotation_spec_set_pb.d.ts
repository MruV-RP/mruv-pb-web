import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class AnnotationSpecSet extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAnnotationSpecsList(): Array<AnnotationSpec>;
  setAnnotationSpecsList(value: Array<AnnotationSpec>): void;
  clearAnnotationSpecsList(): void;
  addAnnotationSpecs(value?: AnnotationSpec, index?: number): AnnotationSpec;

  getBlockingResourcesList(): Array<string>;
  setBlockingResourcesList(value: Array<string>): void;
  clearBlockingResourcesList(): void;
  addBlockingResources(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSpecSet.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSpecSet): AnnotationSpecSet.AsObject;
  static serializeBinaryToWriter(message: AnnotationSpecSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSpecSet;
  static deserializeBinaryFromReader(message: AnnotationSpecSet, reader: jspb.BinaryReader): AnnotationSpecSet;
}

export namespace AnnotationSpecSet {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    annotationSpecsList: Array<AnnotationSpec.AsObject>,
    blockingResourcesList: Array<string>,
  }
}

export class AnnotationSpec extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSpec): AnnotationSpec.AsObject;
  static serializeBinaryToWriter(message: AnnotationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSpec;
  static deserializeBinaryFromReader(message: AnnotationSpec, reader: jspb.BinaryReader): AnnotationSpec;
}

export namespace AnnotationSpec {
  export type AsObject = {
    displayName: string,
    description: string,
  }
}

