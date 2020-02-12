import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ComputeThreatListDiffRequest extends jspb.Message {
  getThreatType(): ThreatType;
  setThreatType(value: ThreatType): void;

  getVersionToken(): Uint8Array | string;
  getVersionToken_asU8(): Uint8Array;
  getVersionToken_asB64(): string;
  setVersionToken(value: Uint8Array | string): void;

  getConstraints(): ComputeThreatListDiffRequest.Constraints | undefined;
  setConstraints(value?: ComputeThreatListDiffRequest.Constraints): void;
  hasConstraints(): boolean;
  clearConstraints(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeThreatListDiffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeThreatListDiffRequest): ComputeThreatListDiffRequest.AsObject;
  static serializeBinaryToWriter(message: ComputeThreatListDiffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeThreatListDiffRequest;
  static deserializeBinaryFromReader(message: ComputeThreatListDiffRequest, reader: jspb.BinaryReader): ComputeThreatListDiffRequest;
}

export namespace ComputeThreatListDiffRequest {
  export type AsObject = {
    threatType: ThreatType,
    versionToken: Uint8Array | string,
    constraints?: ComputeThreatListDiffRequest.Constraints.AsObject,
  }

  export class Constraints extends jspb.Message {
    getMaxDiffEntries(): number;
    setMaxDiffEntries(value: number): void;

    getMaxDatabaseEntries(): number;
    setMaxDatabaseEntries(value: number): void;

    getSupportedCompressionsList(): Array<CompressionType>;
    setSupportedCompressionsList(value: Array<CompressionType>): void;
    clearSupportedCompressionsList(): void;
    addSupportedCompressions(value: CompressionType, index?: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Constraints.AsObject;
    static toObject(includeInstance: boolean, msg: Constraints): Constraints.AsObject;
    static serializeBinaryToWriter(message: Constraints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Constraints;
    static deserializeBinaryFromReader(message: Constraints, reader: jspb.BinaryReader): Constraints;
  }

  export namespace Constraints {
    export type AsObject = {
      maxDiffEntries: number,
      maxDatabaseEntries: number,
      supportedCompressionsList: Array<CompressionType>,
    }
  }

}

export class ComputeThreatListDiffResponse extends jspb.Message {
  getResponseType(): ComputeThreatListDiffResponse.ResponseType;
  setResponseType(value: ComputeThreatListDiffResponse.ResponseType): void;

  getAdditions(): ThreatEntryAdditions | undefined;
  setAdditions(value?: ThreatEntryAdditions): void;
  hasAdditions(): boolean;
  clearAdditions(): void;

  getRemovals(): ThreatEntryRemovals | undefined;
  setRemovals(value?: ThreatEntryRemovals): void;
  hasRemovals(): boolean;
  clearRemovals(): void;

  getNewVersionToken(): Uint8Array | string;
  getNewVersionToken_asU8(): Uint8Array;
  getNewVersionToken_asB64(): string;
  setNewVersionToken(value: Uint8Array | string): void;

  getChecksum(): ComputeThreatListDiffResponse.Checksum | undefined;
  setChecksum(value?: ComputeThreatListDiffResponse.Checksum): void;
  hasChecksum(): boolean;
  clearChecksum(): void;

  getRecommendedNextDiff(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecommendedNextDiff(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasRecommendedNextDiff(): boolean;
  clearRecommendedNextDiff(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputeThreatListDiffResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ComputeThreatListDiffResponse): ComputeThreatListDiffResponse.AsObject;
  static serializeBinaryToWriter(message: ComputeThreatListDiffResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputeThreatListDiffResponse;
  static deserializeBinaryFromReader(message: ComputeThreatListDiffResponse, reader: jspb.BinaryReader): ComputeThreatListDiffResponse;
}

export namespace ComputeThreatListDiffResponse {
  export type AsObject = {
    responseType: ComputeThreatListDiffResponse.ResponseType,
    additions?: ThreatEntryAdditions.AsObject,
    removals?: ThreatEntryRemovals.AsObject,
    newVersionToken: Uint8Array | string,
    checksum?: ComputeThreatListDiffResponse.Checksum.AsObject,
    recommendedNextDiff?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Checksum extends jspb.Message {
    getSha256(): Uint8Array | string;
    getSha256_asU8(): Uint8Array;
    getSha256_asB64(): string;
    setSha256(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Checksum.AsObject;
    static toObject(includeInstance: boolean, msg: Checksum): Checksum.AsObject;
    static serializeBinaryToWriter(message: Checksum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Checksum;
    static deserializeBinaryFromReader(message: Checksum, reader: jspb.BinaryReader): Checksum;
  }

  export namespace Checksum {
    export type AsObject = {
      sha256: Uint8Array | string,
    }
  }


  export enum ResponseType { 
    RESPONSE_TYPE_UNSPECIFIED = 0,
    DIFF = 1,
    RESET = 2,
  }
}

export class SearchUrisRequest extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getThreatTypesList(): Array<ThreatType>;
  setThreatTypesList(value: Array<ThreatType>): void;
  clearThreatTypesList(): void;
  addThreatTypes(value: ThreatType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUrisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUrisRequest): SearchUrisRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUrisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUrisRequest;
  static deserializeBinaryFromReader(message: SearchUrisRequest, reader: jspb.BinaryReader): SearchUrisRequest;
}

export namespace SearchUrisRequest {
  export type AsObject = {
    uri: string,
    threatTypesList: Array<ThreatType>,
  }
}

export class SearchUrisResponse extends jspb.Message {
  getThreat(): SearchUrisResponse.ThreatUri | undefined;
  setThreat(value?: SearchUrisResponse.ThreatUri): void;
  hasThreat(): boolean;
  clearThreat(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUrisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUrisResponse): SearchUrisResponse.AsObject;
  static serializeBinaryToWriter(message: SearchUrisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUrisResponse;
  static deserializeBinaryFromReader(message: SearchUrisResponse, reader: jspb.BinaryReader): SearchUrisResponse;
}

export namespace SearchUrisResponse {
  export type AsObject = {
    threat?: SearchUrisResponse.ThreatUri.AsObject,
  }

  export class ThreatUri extends jspb.Message {
    getThreatTypesList(): Array<ThreatType>;
    setThreatTypesList(value: Array<ThreatType>): void;
    clearThreatTypesList(): void;
    addThreatTypes(value: ThreatType, index?: number): void;

    getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasExpireTime(): boolean;
    clearExpireTime(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreatUri.AsObject;
    static toObject(includeInstance: boolean, msg: ThreatUri): ThreatUri.AsObject;
    static serializeBinaryToWriter(message: ThreatUri, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreatUri;
    static deserializeBinaryFromReader(message: ThreatUri, reader: jspb.BinaryReader): ThreatUri;
  }

  export namespace ThreatUri {
    export type AsObject = {
      threatTypesList: Array<ThreatType>,
      expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class SearchHashesRequest extends jspb.Message {
  getHashPrefix(): Uint8Array | string;
  getHashPrefix_asU8(): Uint8Array;
  getHashPrefix_asB64(): string;
  setHashPrefix(value: Uint8Array | string): void;

  getThreatTypesList(): Array<ThreatType>;
  setThreatTypesList(value: Array<ThreatType>): void;
  clearThreatTypesList(): void;
  addThreatTypes(value: ThreatType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchHashesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchHashesRequest): SearchHashesRequest.AsObject;
  static serializeBinaryToWriter(message: SearchHashesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchHashesRequest;
  static deserializeBinaryFromReader(message: SearchHashesRequest, reader: jspb.BinaryReader): SearchHashesRequest;
}

export namespace SearchHashesRequest {
  export type AsObject = {
    hashPrefix: Uint8Array | string,
    threatTypesList: Array<ThreatType>,
  }
}

export class SearchHashesResponse extends jspb.Message {
  getThreatsList(): Array<SearchHashesResponse.ThreatHash>;
  setThreatsList(value: Array<SearchHashesResponse.ThreatHash>): void;
  clearThreatsList(): void;
  addThreats(value?: SearchHashesResponse.ThreatHash, index?: number): SearchHashesResponse.ThreatHash;

  getNegativeExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNegativeExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasNegativeExpireTime(): boolean;
  clearNegativeExpireTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchHashesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchHashesResponse): SearchHashesResponse.AsObject;
  static serializeBinaryToWriter(message: SearchHashesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchHashesResponse;
  static deserializeBinaryFromReader(message: SearchHashesResponse, reader: jspb.BinaryReader): SearchHashesResponse;
}

export namespace SearchHashesResponse {
  export type AsObject = {
    threatsList: Array<SearchHashesResponse.ThreatHash.AsObject>,
    negativeExpireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ThreatHash extends jspb.Message {
    getThreatTypesList(): Array<ThreatType>;
    setThreatTypesList(value: Array<ThreatType>): void;
    clearThreatTypesList(): void;
    addThreatTypes(value: ThreatType, index?: number): void;

    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): void;

    getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasExpireTime(): boolean;
    clearExpireTime(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreatHash.AsObject;
    static toObject(includeInstance: boolean, msg: ThreatHash): ThreatHash.AsObject;
    static serializeBinaryToWriter(message: ThreatHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreatHash;
    static deserializeBinaryFromReader(message: ThreatHash, reader: jspb.BinaryReader): ThreatHash;
  }

  export namespace ThreatHash {
    export type AsObject = {
      threatTypesList: Array<ThreatType>,
      hash: Uint8Array | string,
      expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class ThreatEntryAdditions extends jspb.Message {
  getRawHashesList(): Array<RawHashes>;
  setRawHashesList(value: Array<RawHashes>): void;
  clearRawHashesList(): void;
  addRawHashes(value?: RawHashes, index?: number): RawHashes;

  getRiceHashes(): RiceDeltaEncoding | undefined;
  setRiceHashes(value?: RiceDeltaEncoding): void;
  hasRiceHashes(): boolean;
  clearRiceHashes(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreatEntryAdditions.AsObject;
  static toObject(includeInstance: boolean, msg: ThreatEntryAdditions): ThreatEntryAdditions.AsObject;
  static serializeBinaryToWriter(message: ThreatEntryAdditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreatEntryAdditions;
  static deserializeBinaryFromReader(message: ThreatEntryAdditions, reader: jspb.BinaryReader): ThreatEntryAdditions;
}

export namespace ThreatEntryAdditions {
  export type AsObject = {
    rawHashesList: Array<RawHashes.AsObject>,
    riceHashes?: RiceDeltaEncoding.AsObject,
  }
}

export class ThreatEntryRemovals extends jspb.Message {
  getRawIndices(): RawIndices | undefined;
  setRawIndices(value?: RawIndices): void;
  hasRawIndices(): boolean;
  clearRawIndices(): void;

  getRiceIndices(): RiceDeltaEncoding | undefined;
  setRiceIndices(value?: RiceDeltaEncoding): void;
  hasRiceIndices(): boolean;
  clearRiceIndices(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreatEntryRemovals.AsObject;
  static toObject(includeInstance: boolean, msg: ThreatEntryRemovals): ThreatEntryRemovals.AsObject;
  static serializeBinaryToWriter(message: ThreatEntryRemovals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreatEntryRemovals;
  static deserializeBinaryFromReader(message: ThreatEntryRemovals, reader: jspb.BinaryReader): ThreatEntryRemovals;
}

export namespace ThreatEntryRemovals {
  export type AsObject = {
    rawIndices?: RawIndices.AsObject,
    riceIndices?: RiceDeltaEncoding.AsObject,
  }
}

export class RawIndices extends jspb.Message {
  getIndicesList(): Array<number>;
  setIndicesList(value: Array<number>): void;
  clearIndicesList(): void;
  addIndices(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawIndices.AsObject;
  static toObject(includeInstance: boolean, msg: RawIndices): RawIndices.AsObject;
  static serializeBinaryToWriter(message: RawIndices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawIndices;
  static deserializeBinaryFromReader(message: RawIndices, reader: jspb.BinaryReader): RawIndices;
}

export namespace RawIndices {
  export type AsObject = {
    indicesList: Array<number>,
  }
}

export class RawHashes extends jspb.Message {
  getPrefixSize(): number;
  setPrefixSize(value: number): void;

  getRawHashes(): Uint8Array | string;
  getRawHashes_asU8(): Uint8Array;
  getRawHashes_asB64(): string;
  setRawHashes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RawHashes.AsObject;
  static toObject(includeInstance: boolean, msg: RawHashes): RawHashes.AsObject;
  static serializeBinaryToWriter(message: RawHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RawHashes;
  static deserializeBinaryFromReader(message: RawHashes, reader: jspb.BinaryReader): RawHashes;
}

export namespace RawHashes {
  export type AsObject = {
    prefixSize: number,
    rawHashes: Uint8Array | string,
  }
}

export class RiceDeltaEncoding extends jspb.Message {
  getFirstValue(): number;
  setFirstValue(value: number): void;

  getRiceParameter(): number;
  setRiceParameter(value: number): void;

  getEntryCount(): number;
  setEntryCount(value: number): void;

  getEncodedData(): Uint8Array | string;
  getEncodedData_asU8(): Uint8Array;
  getEncodedData_asB64(): string;
  setEncodedData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiceDeltaEncoding.AsObject;
  static toObject(includeInstance: boolean, msg: RiceDeltaEncoding): RiceDeltaEncoding.AsObject;
  static serializeBinaryToWriter(message: RiceDeltaEncoding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiceDeltaEncoding;
  static deserializeBinaryFromReader(message: RiceDeltaEncoding, reader: jspb.BinaryReader): RiceDeltaEncoding;
}

export namespace RiceDeltaEncoding {
  export type AsObject = {
    firstValue: number,
    riceParameter: number,
    entryCount: number,
    encodedData: Uint8Array | string,
  }
}

export enum ThreatType { 
  THREAT_TYPE_UNSPECIFIED = 0,
  MALWARE = 1,
  SOCIAL_ENGINEERING = 2,
  UNWANTED_SOFTWARE = 3,
}
export enum CompressionType { 
  COMPRESSION_TYPE_UNSPECIFIED = 0,
  RAW = 1,
  RICE = 2,
}
