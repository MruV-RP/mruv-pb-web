import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_datacatalog_v1beta1_timestamps_pb from '../../../../google/cloud/datacatalog/v1beta1/timestamps_pb';

export class GcsFilesetSpec extends jspb.Message {
  getFilePatternsList(): Array<string>;
  setFilePatternsList(value: Array<string>): void;
  clearFilePatternsList(): void;
  addFilePatterns(value: string, index?: number): void;

  getSampleGcsFileSpecsList(): Array<GcsFileSpec>;
  setSampleGcsFileSpecsList(value: Array<GcsFileSpec>): void;
  clearSampleGcsFileSpecsList(): void;
  addSampleGcsFileSpecs(value?: GcsFileSpec, index?: number): GcsFileSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsFilesetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcsFilesetSpec): GcsFilesetSpec.AsObject;
  static serializeBinaryToWriter(message: GcsFilesetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsFilesetSpec;
  static deserializeBinaryFromReader(message: GcsFilesetSpec, reader: jspb.BinaryReader): GcsFilesetSpec;
}

export namespace GcsFilesetSpec {
  export type AsObject = {
    filePatternsList: Array<string>,
    sampleGcsFileSpecsList: Array<GcsFileSpec.AsObject>,
  }
}

export class GcsFileSpec extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): void;

  getGcsTimestamps(): google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps | undefined;
  setGcsTimestamps(value?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps): void;
  hasGcsTimestamps(): boolean;
  clearGcsTimestamps(): void;

  getSizeBytes(): number;
  setSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsFileSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GcsFileSpec): GcsFileSpec.AsObject;
  static serializeBinaryToWriter(message: GcsFileSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsFileSpec;
  static deserializeBinaryFromReader(message: GcsFileSpec, reader: jspb.BinaryReader): GcsFileSpec;
}

export namespace GcsFileSpec {
  export type AsObject = {
    filePath: string,
    gcsTimestamps?: google_cloud_datacatalog_v1beta1_timestamps_pb.SystemTimestamps.AsObject,
    sizeBytes: number,
  }
}

