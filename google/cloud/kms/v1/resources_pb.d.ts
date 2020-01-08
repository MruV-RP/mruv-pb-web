import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class KeyRing extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRing.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRing): KeyRing.AsObject;
  static serializeBinaryToWriter(message: KeyRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRing;
  static deserializeBinaryFromReader(message: KeyRing, reader: jspb.BinaryReader): KeyRing;
}

export namespace KeyRing {
  export type AsObject = {
    name: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CryptoKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPrimary(): CryptoKeyVersion | undefined;
  setPrimary(value?: CryptoKeyVersion): void;
  hasPrimary(): boolean;
  clearPrimary(): void;

  getPurpose(): CryptoKey.CryptoKeyPurpose;
  setPurpose(value: CryptoKey.CryptoKeyPurpose): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getNextRotationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextRotationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasNextRotationTime(): boolean;
  clearNextRotationTime(): void;

  getRotationPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setRotationPeriod(value?: google_protobuf_duration_pb.Duration): void;
  hasRotationPeriod(): boolean;
  clearRotationPeriod(): void;

  getVersionTemplate(): CryptoKeyVersionTemplate | undefined;
  setVersionTemplate(value?: CryptoKeyVersionTemplate): void;
  hasVersionTemplate(): boolean;
  clearVersionTemplate(): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getRotationScheduleCase(): CryptoKey.RotationScheduleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKey.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKey): CryptoKey.AsObject;
  static serializeBinaryToWriter(message: CryptoKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKey;
  static deserializeBinaryFromReader(message: CryptoKey, reader: jspb.BinaryReader): CryptoKey;
}

export namespace CryptoKey {
  export type AsObject = {
    name: string,
    primary?: CryptoKeyVersion.AsObject,
    purpose: CryptoKey.CryptoKeyPurpose,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextRotationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rotationPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    versionTemplate?: CryptoKeyVersionTemplate.AsObject,
    labelsMap: Array<[string, string]>,
  }

  export enum CryptoKeyPurpose { 
    CRYPTO_KEY_PURPOSE_UNSPECIFIED = 0,
    ENCRYPT_DECRYPT = 1,
    ASYMMETRIC_SIGN = 5,
    ASYMMETRIC_DECRYPT = 6,
  }

  export enum RotationScheduleCase { 
    ROTATION_SCHEDULE_NOT_SET = 0,
    ROTATION_PERIOD = 8,
  }
}

export class CryptoKeyVersionTemplate extends jspb.Message {
  getProtectionLevel(): ProtectionLevel;
  setProtectionLevel(value: ProtectionLevel): void;

  getAlgorithm(): CryptoKeyVersion.CryptoKeyVersionAlgorithm;
  setAlgorithm(value: CryptoKeyVersion.CryptoKeyVersionAlgorithm): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKeyVersionTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKeyVersionTemplate): CryptoKeyVersionTemplate.AsObject;
  static serializeBinaryToWriter(message: CryptoKeyVersionTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKeyVersionTemplate;
  static deserializeBinaryFromReader(message: CryptoKeyVersionTemplate, reader: jspb.BinaryReader): CryptoKeyVersionTemplate;
}

export namespace CryptoKeyVersionTemplate {
  export type AsObject = {
    protectionLevel: ProtectionLevel,
    algorithm: CryptoKeyVersion.CryptoKeyVersionAlgorithm,
  }
}

export class KeyOperationAttestation extends jspb.Message {
  getFormat(): KeyOperationAttestation.AttestationFormat;
  setFormat(value: KeyOperationAttestation.AttestationFormat): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyOperationAttestation.AsObject;
  static toObject(includeInstance: boolean, msg: KeyOperationAttestation): KeyOperationAttestation.AsObject;
  static serializeBinaryToWriter(message: KeyOperationAttestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyOperationAttestation;
  static deserializeBinaryFromReader(message: KeyOperationAttestation, reader: jspb.BinaryReader): KeyOperationAttestation;
}

export namespace KeyOperationAttestation {
  export type AsObject = {
    format: KeyOperationAttestation.AttestationFormat,
    content: Uint8Array | string,
  }

  export enum AttestationFormat { 
    ATTESTATION_FORMAT_UNSPECIFIED = 0,
    CAVIUM_V1_COMPRESSED = 3,
    CAVIUM_V2_COMPRESSED = 4,
  }
}

export class CryptoKeyVersion extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): CryptoKeyVersion.CryptoKeyVersionState;
  setState(value: CryptoKeyVersion.CryptoKeyVersionState): void;

  getProtectionLevel(): ProtectionLevel;
  setProtectionLevel(value: ProtectionLevel): void;

  getAlgorithm(): CryptoKeyVersion.CryptoKeyVersionAlgorithm;
  setAlgorithm(value: CryptoKeyVersion.CryptoKeyVersionAlgorithm): void;

  getAttestation(): KeyOperationAttestation | undefined;
  setAttestation(value?: KeyOperationAttestation): void;
  hasAttestation(): boolean;
  clearAttestation(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getGenerateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGenerateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasGenerateTime(): boolean;
  clearGenerateTime(): void;

  getDestroyTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDestroyTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDestroyTime(): boolean;
  clearDestroyTime(): void;

  getDestroyEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDestroyEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDestroyEventTime(): boolean;
  clearDestroyEventTime(): void;

  getImportJob(): string;
  setImportJob(value: string): void;

  getImportTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setImportTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasImportTime(): boolean;
  clearImportTime(): void;

  getImportFailureReason(): string;
  setImportFailureReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoKeyVersion.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoKeyVersion): CryptoKeyVersion.AsObject;
  static serializeBinaryToWriter(message: CryptoKeyVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoKeyVersion;
  static deserializeBinaryFromReader(message: CryptoKeyVersion, reader: jspb.BinaryReader): CryptoKeyVersion;
}

export namespace CryptoKeyVersion {
  export type AsObject = {
    name: string,
    state: CryptoKeyVersion.CryptoKeyVersionState,
    protectionLevel: ProtectionLevel,
    algorithm: CryptoKeyVersion.CryptoKeyVersionAlgorithm,
    attestation?: KeyOperationAttestation.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    generateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    destroyTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    destroyEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    importJob: string,
    importTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    importFailureReason: string,
  }

  export enum CryptoKeyVersionAlgorithm { 
    CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 0,
    GOOGLE_SYMMETRIC_ENCRYPTION = 1,
    RSA_SIGN_PSS_2048_SHA256 = 2,
    RSA_SIGN_PSS_3072_SHA256 = 3,
    RSA_SIGN_PSS_4096_SHA256 = 4,
    RSA_SIGN_PSS_4096_SHA512 = 15,
    RSA_SIGN_PKCS1_2048_SHA256 = 5,
    RSA_SIGN_PKCS1_3072_SHA256 = 6,
    RSA_SIGN_PKCS1_4096_SHA256 = 7,
    RSA_SIGN_PKCS1_4096_SHA512 = 16,
    RSA_DECRYPT_OAEP_2048_SHA256 = 8,
    RSA_DECRYPT_OAEP_3072_SHA256 = 9,
    RSA_DECRYPT_OAEP_4096_SHA256 = 10,
    RSA_DECRYPT_OAEP_4096_SHA512 = 17,
    EC_SIGN_P256_SHA256 = 12,
    EC_SIGN_P384_SHA384 = 13,
  }

  export enum CryptoKeyVersionState { 
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 0,
    PENDING_GENERATION = 5,
    ENABLED = 1,
    DISABLED = 2,
    DESTROYED = 3,
    DESTROY_SCHEDULED = 4,
    PENDING_IMPORT = 6,
    IMPORT_FAILED = 7,
  }

  export enum CryptoKeyVersionView { 
    CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED = 0,
    FULL = 1,
  }
}

export class PublicKey extends jspb.Message {
  getPem(): string;
  setPem(value: string): void;

  getAlgorithm(): CryptoKeyVersion.CryptoKeyVersionAlgorithm;
  setAlgorithm(value: CryptoKeyVersion.CryptoKeyVersionAlgorithm): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    pem: string,
    algorithm: CryptoKeyVersion.CryptoKeyVersionAlgorithm,
  }
}

export class ImportJob extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getImportMethod(): ImportJob.ImportMethod;
  setImportMethod(value: ImportJob.ImportMethod): void;

  getProtectionLevel(): ProtectionLevel;
  setProtectionLevel(value: ProtectionLevel): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getGenerateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setGenerateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasGenerateTime(): boolean;
  clearGenerateTime(): void;

  getExpireTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpireTime(): boolean;
  clearExpireTime(): void;

  getExpireEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireEventTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpireEventTime(): boolean;
  clearExpireEventTime(): void;

  getState(): ImportJob.ImportJobState;
  setState(value: ImportJob.ImportJobState): void;

  getPublicKey(): ImportJob.WrappingPublicKey | undefined;
  setPublicKey(value?: ImportJob.WrappingPublicKey): void;
  hasPublicKey(): boolean;
  clearPublicKey(): void;

  getAttestation(): KeyOperationAttestation | undefined;
  setAttestation(value?: KeyOperationAttestation): void;
  hasAttestation(): boolean;
  clearAttestation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportJob.AsObject;
  static toObject(includeInstance: boolean, msg: ImportJob): ImportJob.AsObject;
  static serializeBinaryToWriter(message: ImportJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportJob;
  static deserializeBinaryFromReader(message: ImportJob, reader: jspb.BinaryReader): ImportJob;
}

export namespace ImportJob {
  export type AsObject = {
    name: string,
    importMethod: ImportJob.ImportMethod,
    protectionLevel: ProtectionLevel,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    generateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expireEventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: ImportJob.ImportJobState,
    publicKey?: ImportJob.WrappingPublicKey.AsObject,
    attestation?: KeyOperationAttestation.AsObject,
  }

  export class WrappingPublicKey extends jspb.Message {
    getPem(): string;
    setPem(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WrappingPublicKey.AsObject;
    static toObject(includeInstance: boolean, msg: WrappingPublicKey): WrappingPublicKey.AsObject;
    static serializeBinaryToWriter(message: WrappingPublicKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WrappingPublicKey;
    static deserializeBinaryFromReader(message: WrappingPublicKey, reader: jspb.BinaryReader): WrappingPublicKey;
  }

  export namespace WrappingPublicKey {
    export type AsObject = {
      pem: string,
    }
  }


  export enum ImportMethod { 
    IMPORT_METHOD_UNSPECIFIED = 0,
    RSA_OAEP_3072_SHA1_AES_256 = 1,
    RSA_OAEP_4096_SHA1_AES_256 = 2,
  }

  export enum ImportJobState { 
    IMPORT_JOB_STATE_UNSPECIFIED = 0,
    PENDING_GENERATION = 1,
    ACTIVE = 2,
    EXPIRED = 3,
  }
}

export enum ProtectionLevel { 
  PROTECTION_LEVEL_UNSPECIFIED = 0,
  SOFTWARE = 1,
  HSM = 2,
}
