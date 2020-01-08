import * as jspb from "google-protobuf"

import * as google_devtools_containeranalysis_v1beta1_provenance_provenance_pb from '../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb';

export class Build extends jspb.Message {
  getBuilderVersion(): string;
  setBuilderVersion(value: string): void;

  getSignature(): BuildSignature | undefined;
  setSignature(value?: BuildSignature): void;
  hasSignature(): boolean;
  clearSignature(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    builderVersion: string,
    signature?: BuildSignature.AsObject,
  }
}

export class BuildSignature extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  getKeyType(): BuildSignature.KeyType;
  setKeyType(value: BuildSignature.KeyType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BuildSignature): BuildSignature.AsObject;
  static serializeBinaryToWriter(message: BuildSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildSignature;
  static deserializeBinaryFromReader(message: BuildSignature, reader: jspb.BinaryReader): BuildSignature;
}

export namespace BuildSignature {
  export type AsObject = {
    publicKey: string,
    signature: Uint8Array | string,
    keyId: string,
    keyType: BuildSignature.KeyType,
  }

  export enum KeyType { 
    KEY_TYPE_UNSPECIFIED = 0,
    PGP_ASCII_ARMORED = 1,
    PKIX_PEM = 2,
  }
}

export class Details extends jspb.Message {
  getProvenance(): google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance | undefined;
  setProvenance(value?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance): void;
  hasProvenance(): boolean;
  clearProvenance(): void;

  getProvenanceBytes(): string;
  setProvenanceBytes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    provenance?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance.AsObject,
    provenanceBytes: string,
  }
}

