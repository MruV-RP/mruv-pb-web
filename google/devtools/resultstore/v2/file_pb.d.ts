import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class File extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getLength(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLength(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasLength(): boolean;
  clearLength(): void;

  getContentType(): string;
  setContentType(value: string): void;

  getArchiveEntry(): ArchiveEntry | undefined;
  setArchiveEntry(value?: ArchiveEntry): void;
  hasArchiveEntry(): boolean;
  clearArchiveEntry(): void;

  getContentViewer(): string;
  setContentViewer(value: string): void;

  getHidden(): boolean;
  setHidden(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDigest(): string;
  setDigest(value: string): void;

  getHashType(): File.HashType;
  setHashType(value: File.HashType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    uid: string,
    uri: string,
    length?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    contentType: string,
    archiveEntry?: ArchiveEntry.AsObject,
    contentViewer: string,
    hidden: boolean,
    description: string,
    digest: string,
    hashType: File.HashType,
  }

  export enum HashType { 
    HASH_TYPE_UNSPECIFIED = 0,
    MD5 = 1,
    SHA1 = 2,
    SHA256 = 3,
  }
}

export class ArchiveEntry extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getLength(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLength(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasLength(): boolean;
  clearLength(): void;

  getContentType(): string;
  setContentType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveEntry): ArchiveEntry.AsObject;
  static serializeBinaryToWriter(message: ArchiveEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveEntry;
  static deserializeBinaryFromReader(message: ArchiveEntry, reader: jspb.BinaryReader): ArchiveEntry;
}

export namespace ArchiveEntry {
  export type AsObject = {
    path: string,
    length?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    contentType: string,
  }
}

