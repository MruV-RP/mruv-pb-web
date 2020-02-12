import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class RetryBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryBuildRequest): RetryBuildRequest.AsObject;
  static serializeBinaryToWriter(message: RetryBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryBuildRequest;
  static deserializeBinaryFromReader(message: RetryBuildRequest, reader: jspb.BinaryReader): RetryBuildRequest;
}

export namespace RetryBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class RunBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  getSource(): RepoSource | undefined;
  setSource(value?: RepoSource): void;
  hasSource(): boolean;
  clearSource(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunBuildTriggerRequest): RunBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: RunBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBuildTriggerRequest;
  static deserializeBinaryFromReader(message: RunBuildTriggerRequest, reader: jspb.BinaryReader): RunBuildTriggerRequest;
}

export namespace RunBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    source?: RepoSource.AsObject,
  }
}

export class StorageSource extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): void;

  getObject(): string;
  setObject(value: string): void;

  getGeneration(): number;
  setGeneration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSource.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSource): StorageSource.AsObject;
  static serializeBinaryToWriter(message: StorageSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSource;
  static deserializeBinaryFromReader(message: StorageSource, reader: jspb.BinaryReader): StorageSource;
}

export namespace StorageSource {
  export type AsObject = {
    bucket: string,
    object: string,
    generation: number,
  }
}

export class RepoSource extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getRepoName(): string;
  setRepoName(value: string): void;

  getBranchName(): string;
  setBranchName(value: string): void;

  getTagName(): string;
  setTagName(value: string): void;

  getCommitSha(): string;
  setCommitSha(value: string): void;

  getDir(): string;
  setDir(value: string): void;

  getRevisionCase(): RepoSource.RevisionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepoSource.AsObject;
  static toObject(includeInstance: boolean, msg: RepoSource): RepoSource.AsObject;
  static serializeBinaryToWriter(message: RepoSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepoSource;
  static deserializeBinaryFromReader(message: RepoSource, reader: jspb.BinaryReader): RepoSource;
}

export namespace RepoSource {
  export type AsObject = {
    projectId: string,
    repoName: string,
    branchName: string,
    tagName: string,
    commitSha: string,
    dir: string,
  }

  export enum RevisionCase { 
    REVISION_NOT_SET = 0,
    BRANCH_NAME = 3,
    TAG_NAME = 4,
    COMMIT_SHA = 5,
  }
}

export class Source extends jspb.Message {
  getStorageSource(): StorageSource | undefined;
  setStorageSource(value?: StorageSource): void;
  hasStorageSource(): boolean;
  clearStorageSource(): void;

  getRepoSource(): RepoSource | undefined;
  setRepoSource(value?: RepoSource): void;
  hasRepoSource(): boolean;
  clearRepoSource(): void;

  getSourceCase(): Source.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    storageSource?: StorageSource.AsObject,
    repoSource?: RepoSource.AsObject,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    STORAGE_SOURCE = 2,
    REPO_SOURCE = 3,
  }
}

export class BuiltImage extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDigest(): string;
  setDigest(value: string): void;

  getPushTiming(): TimeSpan | undefined;
  setPushTiming(value?: TimeSpan): void;
  hasPushTiming(): boolean;
  clearPushTiming(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltImage.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltImage): BuiltImage.AsObject;
  static serializeBinaryToWriter(message: BuiltImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltImage;
  static deserializeBinaryFromReader(message: BuiltImage, reader: jspb.BinaryReader): BuiltImage;
}

export namespace BuiltImage {
  export type AsObject = {
    name: string,
    digest: string,
    pushTiming?: TimeSpan.AsObject,
  }
}

export class BuildStep extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): void;
  clearEnvList(): void;
  addEnv(value: string, index?: number): void;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  clearArgsList(): void;
  addArgs(value: string, index?: number): void;

  getDir(): string;
  setDir(value: string): void;

  getId(): string;
  setId(value: string): void;

  getWaitForList(): Array<string>;
  setWaitForList(value: Array<string>): void;
  clearWaitForList(): void;
  addWaitFor(value: string, index?: number): void;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  getSecretEnvList(): Array<string>;
  setSecretEnvList(value: Array<string>): void;
  clearSecretEnvList(): void;
  addSecretEnv(value: string, index?: number): void;

  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): void;
  clearVolumesList(): void;
  addVolumes(value?: Volume, index?: number): Volume;

  getTiming(): TimeSpan | undefined;
  setTiming(value?: TimeSpan): void;
  hasTiming(): boolean;
  clearTiming(): void;

  getPullTiming(): TimeSpan | undefined;
  setPullTiming(value?: TimeSpan): void;
  hasPullTiming(): boolean;
  clearPullTiming(): void;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeout(): boolean;
  clearTimeout(): void;

  getStatus(): Build.Status;
  setStatus(value: Build.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStep.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStep): BuildStep.AsObject;
  static serializeBinaryToWriter(message: BuildStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStep;
  static deserializeBinaryFromReader(message: BuildStep, reader: jspb.BinaryReader): BuildStep;
}

export namespace BuildStep {
  export type AsObject = {
    name: string,
    envList: Array<string>,
    argsList: Array<string>,
    dir: string,
    id: string,
    waitForList: Array<string>,
    entrypoint: string,
    secretEnvList: Array<string>,
    volumesList: Array<Volume.AsObject>,
    timing?: TimeSpan.AsObject,
    pullTiming?: TimeSpan.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    status: Build.Status,
  }
}

export class Volume extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Volume.AsObject;
  static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
  static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Volume;
  static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
  export type AsObject = {
    name: string,
    path: string,
  }
}

export class Results extends jspb.Message {
  getImagesList(): Array<BuiltImage>;
  setImagesList(value: Array<BuiltImage>): void;
  clearImagesList(): void;
  addImages(value?: BuiltImage, index?: number): BuiltImage;

  getBuildStepImagesList(): Array<string>;
  setBuildStepImagesList(value: Array<string>): void;
  clearBuildStepImagesList(): void;
  addBuildStepImages(value: string, index?: number): void;

  getArtifactManifest(): string;
  setArtifactManifest(value: string): void;

  getNumArtifacts(): number;
  setNumArtifacts(value: number): void;

  getBuildStepOutputsList(): Array<Uint8Array | string>;
  setBuildStepOutputsList(value: Array<Uint8Array | string>): void;
  clearBuildStepOutputsList(): void;
  addBuildStepOutputs(value: Uint8Array | string, index?: number): void;

  getArtifactTiming(): TimeSpan | undefined;
  setArtifactTiming(value?: TimeSpan): void;
  hasArtifactTiming(): boolean;
  clearArtifactTiming(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
}

export namespace Results {
  export type AsObject = {
    imagesList: Array<BuiltImage.AsObject>,
    buildStepImagesList: Array<string>,
    artifactManifest: string,
    numArtifacts: number,
    buildStepOutputsList: Array<Uint8Array | string>,
    artifactTiming?: TimeSpan.AsObject,
  }
}

export class ArtifactResult extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  getFileHashList(): Array<FileHashes>;
  setFileHashList(value: Array<FileHashes>): void;
  clearFileHashList(): void;
  addFileHash(value?: FileHashes, index?: number): FileHashes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtifactResult.AsObject;
  static toObject(includeInstance: boolean, msg: ArtifactResult): ArtifactResult.AsObject;
  static serializeBinaryToWriter(message: ArtifactResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtifactResult;
  static deserializeBinaryFromReader(message: ArtifactResult, reader: jspb.BinaryReader): ArtifactResult;
}

export namespace ArtifactResult {
  export type AsObject = {
    location: string,
    fileHashList: Array<FileHashes.AsObject>,
  }
}

export class Build extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getStatus(): Build.Status;
  setStatus(value: Build.Status): void;

  getStatusDetail(): string;
  setStatusDetail(value: string): void;

  getSource(): Source | undefined;
  setSource(value?: Source): void;
  hasSource(): boolean;
  clearSource(): void;

  getStepsList(): Array<BuildStep>;
  setStepsList(value: Array<BuildStep>): void;
  clearStepsList(): void;
  addSteps(value?: BuildStep, index?: number): BuildStep;

  getResults(): Results | undefined;
  setResults(value?: Results): void;
  hasResults(): boolean;
  clearResults(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasFinishTime(): boolean;
  clearFinishTime(): void;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeout(): boolean;
  clearTimeout(): void;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  clearImagesList(): void;
  addImages(value: string, index?: number): void;

  getArtifacts(): Artifacts | undefined;
  setArtifacts(value?: Artifacts): void;
  hasArtifacts(): boolean;
  clearArtifacts(): void;

  getLogsBucket(): string;
  setLogsBucket(value: string): void;

  getSourceProvenance(): SourceProvenance | undefined;
  setSourceProvenance(value?: SourceProvenance): void;
  hasSourceProvenance(): boolean;
  clearSourceProvenance(): void;

  getBuildTriggerId(): string;
  setBuildTriggerId(value: string): void;

  getOptions(): BuildOptions | undefined;
  setOptions(value?: BuildOptions): void;
  hasOptions(): boolean;
  clearOptions(): void;

  getLogUrl(): string;
  setLogUrl(value: string): void;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  getSecretsList(): Array<Secret>;
  setSecretsList(value: Array<Secret>): void;
  clearSecretsList(): void;
  addSecrets(value?: Secret, index?: number): Secret;

  getTimingMap(): jspb.Map<string, TimeSpan>;
  clearTimingMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Build.AsObject;
  static toObject(includeInstance: boolean, msg: Build): Build.AsObject;
  static serializeBinaryToWriter(message: Build, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Build;
  static deserializeBinaryFromReader(message: Build, reader: jspb.BinaryReader): Build;
}

export namespace Build {
  export type AsObject = {
    id: string,
    projectId: string,
    status: Build.Status,
    statusDetail: string,
    source?: Source.AsObject,
    stepsList: Array<BuildStep.AsObject>,
    results?: Results.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    imagesList: Array<string>,
    artifacts?: Artifacts.AsObject,
    logsBucket: string,
    sourceProvenance?: SourceProvenance.AsObject,
    buildTriggerId: string,
    options?: BuildOptions.AsObject,
    logUrl: string,
    substitutionsMap: Array<[string, string]>,
    tagsList: Array<string>,
    secretsList: Array<Secret.AsObject>,
    timingMap: Array<[string, TimeSpan.AsObject]>,
  }

  export enum Status { 
    STATUS_UNKNOWN = 0,
    QUEUED = 1,
    WORKING = 2,
    SUCCESS = 3,
    FAILURE = 4,
    INTERNAL_ERROR = 5,
    TIMEOUT = 6,
    CANCELLED = 7,
  }
}

export class Artifacts extends jspb.Message {
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  clearImagesList(): void;
  addImages(value: string, index?: number): void;

  getObjects(): Artifacts.ArtifactObjects | undefined;
  setObjects(value?: Artifacts.ArtifactObjects): void;
  hasObjects(): boolean;
  clearObjects(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifacts.AsObject;
  static toObject(includeInstance: boolean, msg: Artifacts): Artifacts.AsObject;
  static serializeBinaryToWriter(message: Artifacts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifacts;
  static deserializeBinaryFromReader(message: Artifacts, reader: jspb.BinaryReader): Artifacts;
}

export namespace Artifacts {
  export type AsObject = {
    imagesList: Array<string>,
    objects?: Artifacts.ArtifactObjects.AsObject,
  }

  export class ArtifactObjects extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): void;
    clearPathsList(): void;
    addPaths(value: string, index?: number): void;

    getTiming(): TimeSpan | undefined;
    setTiming(value?: TimeSpan): void;
    hasTiming(): boolean;
    clearTiming(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtifactObjects.AsObject;
    static toObject(includeInstance: boolean, msg: ArtifactObjects): ArtifactObjects.AsObject;
    static serializeBinaryToWriter(message: ArtifactObjects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtifactObjects;
    static deserializeBinaryFromReader(message: ArtifactObjects, reader: jspb.BinaryReader): ArtifactObjects;
  }

  export namespace ArtifactObjects {
    export type AsObject = {
      location: string,
      pathsList: Array<string>,
      timing?: TimeSpan.AsObject,
    }
  }

}

export class TimeSpan extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSpan.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSpan): TimeSpan.AsObject;
  static serializeBinaryToWriter(message: TimeSpan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSpan;
  static deserializeBinaryFromReader(message: TimeSpan, reader: jspb.BinaryReader): TimeSpan;
}

export namespace TimeSpan {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BuildOperationMetadata extends jspb.Message {
  getBuild(): Build | undefined;
  setBuild(value?: Build): void;
  hasBuild(): boolean;
  clearBuild(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOperationMetadata): BuildOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: BuildOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOperationMetadata;
  static deserializeBinaryFromReader(message: BuildOperationMetadata, reader: jspb.BinaryReader): BuildOperationMetadata;
}

export namespace BuildOperationMetadata {
  export type AsObject = {
    build?: Build.AsObject,
  }
}

export class SourceProvenance extends jspb.Message {
  getResolvedStorageSource(): StorageSource | undefined;
  setResolvedStorageSource(value?: StorageSource): void;
  hasResolvedStorageSource(): boolean;
  clearResolvedStorageSource(): void;

  getResolvedRepoSource(): RepoSource | undefined;
  setResolvedRepoSource(value?: RepoSource): void;
  hasResolvedRepoSource(): boolean;
  clearResolvedRepoSource(): void;

  getFileHashesMap(): jspb.Map<string, FileHashes>;
  clearFileHashesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: SourceProvenance): SourceProvenance.AsObject;
  static serializeBinaryToWriter(message: SourceProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceProvenance;
  static deserializeBinaryFromReader(message: SourceProvenance, reader: jspb.BinaryReader): SourceProvenance;
}

export namespace SourceProvenance {
  export type AsObject = {
    resolvedStorageSource?: StorageSource.AsObject,
    resolvedRepoSource?: RepoSource.AsObject,
    fileHashesMap: Array<[string, FileHashes.AsObject]>,
  }
}

export class FileHashes extends jspb.Message {
  getFileHashList(): Array<Hash>;
  setFileHashList(value: Array<Hash>): void;
  clearFileHashList(): void;
  addFileHash(value?: Hash, index?: number): Hash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHashes.AsObject;
  static toObject(includeInstance: boolean, msg: FileHashes): FileHashes.AsObject;
  static serializeBinaryToWriter(message: FileHashes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHashes;
  static deserializeBinaryFromReader(message: FileHashes, reader: jspb.BinaryReader): FileHashes;
}

export namespace FileHashes {
  export type AsObject = {
    fileHashList: Array<Hash.AsObject>,
  }
}

export class Hash extends jspb.Message {
  getType(): Hash.HashType;
  setType(value: Hash.HashType): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hash.AsObject;
  static toObject(includeInstance: boolean, msg: Hash): Hash.AsObject;
  static serializeBinaryToWriter(message: Hash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hash;
  static deserializeBinaryFromReader(message: Hash, reader: jspb.BinaryReader): Hash;
}

export namespace Hash {
  export type AsObject = {
    type: Hash.HashType,
    value: Uint8Array | string,
  }

  export enum HashType { 
    NONE = 0,
    SHA256 = 1,
    MD5 = 2,
  }
}

export class Secret extends jspb.Message {
  getKmsKeyName(): string;
  setKmsKeyName(value: string): void;

  getSecretEnvMap(): jspb.Map<string, Uint8Array | string>;
  clearSecretEnvMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    kmsKeyName: string,
    secretEnvMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getBuild(): Build | undefined;
  setBuild(value?: Build): void;
  hasBuild(): boolean;
  clearBuild(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildRequest): CreateBuildRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildRequest;
  static deserializeBinaryFromReader(message: CreateBuildRequest, reader: jspb.BinaryReader): CreateBuildRequest;
}

export namespace CreateBuildRequest {
  export type AsObject = {
    projectId: string,
    build?: Build.AsObject,
  }
}

export class GetBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildRequest): GetBuildRequest.AsObject;
  static serializeBinaryToWriter(message: GetBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildRequest;
  static deserializeBinaryFromReader(message: GetBuildRequest, reader: jspb.BinaryReader): GetBuildRequest;
}

export namespace GetBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class ListBuildsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsRequest): ListBuildsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsRequest;
  static deserializeBinaryFromReader(message: ListBuildsRequest, reader: jspb.BinaryReader): ListBuildsRequest;
}

export namespace ListBuildsRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListBuildsResponse extends jspb.Message {
  getBuildsList(): Array<Build>;
  setBuildsList(value: Array<Build>): void;
  clearBuildsList(): void;
  addBuilds(value?: Build, index?: number): Build;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildsResponse): ListBuildsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildsResponse;
  static deserializeBinaryFromReader(message: ListBuildsResponse, reader: jspb.BinaryReader): ListBuildsResponse;
}

export namespace ListBuildsResponse {
  export type AsObject = {
    buildsList: Array<Build.AsObject>,
    nextPageToken: string,
  }
}

export class CancelBuildRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBuildRequest): CancelBuildRequest.AsObject;
  static serializeBinaryToWriter(message: CancelBuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBuildRequest;
  static deserializeBinaryFromReader(message: CancelBuildRequest, reader: jspb.BinaryReader): CancelBuildRequest;
}

export namespace CancelBuildRequest {
  export type AsObject = {
    projectId: string,
    id: string,
  }
}

export class BuildTrigger extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  getTriggerTemplate(): RepoSource | undefined;
  setTriggerTemplate(value?: RepoSource): void;
  hasTriggerTemplate(): boolean;
  clearTriggerTemplate(): void;

  getGithub(): GitHubEventsConfig | undefined;
  setGithub(value?: GitHubEventsConfig): void;
  hasGithub(): boolean;
  clearGithub(): void;

  getBuild(): Build | undefined;
  setBuild(value?: Build): void;
  hasBuild(): boolean;
  clearBuild(): void;

  getFilename(): string;
  setFilename(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getDisabled(): boolean;
  setDisabled(value: boolean): void;

  getSubstitutionsMap(): jspb.Map<string, string>;
  clearSubstitutionsMap(): void;

  getIgnoredFilesList(): Array<string>;
  setIgnoredFilesList(value: Array<string>): void;
  clearIgnoredFilesList(): void;
  addIgnoredFiles(value: string, index?: number): void;

  getIncludedFilesList(): Array<string>;
  setIncludedFilesList(value: Array<string>): void;
  clearIncludedFilesList(): void;
  addIncludedFiles(value: string, index?: number): void;

  getBuildTemplateCase(): BuildTrigger.BuildTemplateCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: BuildTrigger): BuildTrigger.AsObject;
  static serializeBinaryToWriter(message: BuildTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildTrigger;
  static deserializeBinaryFromReader(message: BuildTrigger, reader: jspb.BinaryReader): BuildTrigger;
}

export namespace BuildTrigger {
  export type AsObject = {
    id: string,
    description: string,
    name: string,
    tagsList: Array<string>,
    triggerTemplate?: RepoSource.AsObject,
    github?: GitHubEventsConfig.AsObject,
    build?: Build.AsObject,
    filename: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    disabled: boolean,
    substitutionsMap: Array<[string, string]>,
    ignoredFilesList: Array<string>,
    includedFilesList: Array<string>,
  }

  export enum BuildTemplateCase { 
    BUILD_TEMPLATE_NOT_SET = 0,
    BUILD = 4,
    FILENAME = 8,
  }
}

export class GitHubEventsConfig extends jspb.Message {
  getInstallationId(): number;
  setInstallationId(value: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPullRequest(): PullRequestFilter | undefined;
  setPullRequest(value?: PullRequestFilter): void;
  hasPullRequest(): boolean;
  clearPullRequest(): void;

  getPush(): PushFilter | undefined;
  setPush(value?: PushFilter): void;
  hasPush(): boolean;
  clearPush(): void;

  getEventCase(): GitHubEventsConfig.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitHubEventsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: GitHubEventsConfig): GitHubEventsConfig.AsObject;
  static serializeBinaryToWriter(message: GitHubEventsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitHubEventsConfig;
  static deserializeBinaryFromReader(message: GitHubEventsConfig, reader: jspb.BinaryReader): GitHubEventsConfig;
}

export namespace GitHubEventsConfig {
  export type AsObject = {
    installationId: number,
    owner: string,
    name: string,
    pullRequest?: PullRequestFilter.AsObject,
    push?: PushFilter.AsObject,
  }

  export enum EventCase { 
    EVENT_NOT_SET = 0,
    PULL_REQUEST = 4,
    PUSH = 5,
  }
}

export class PullRequestFilter extends jspb.Message {
  getBranch(): string;
  setBranch(value: string): void;

  getCommentControl(): PullRequestFilter.CommentControl;
  setCommentControl(value: PullRequestFilter.CommentControl): void;

  getGitRefCase(): PullRequestFilter.GitRefCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequestFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequestFilter): PullRequestFilter.AsObject;
  static serializeBinaryToWriter(message: PullRequestFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequestFilter;
  static deserializeBinaryFromReader(message: PullRequestFilter, reader: jspb.BinaryReader): PullRequestFilter;
}

export namespace PullRequestFilter {
  export type AsObject = {
    branch: string,
    commentControl: PullRequestFilter.CommentControl,
  }

  export enum CommentControl { 
    COMMENTS_DISABLED = 0,
    COMMENTS_ENABLED = 1,
  }

  export enum GitRefCase { 
    GIT_REF_NOT_SET = 0,
    BRANCH = 2,
  }
}

export class PushFilter extends jspb.Message {
  getBranch(): string;
  setBranch(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  getGitRefCase(): PushFilter.GitRefCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PushFilter): PushFilter.AsObject;
  static serializeBinaryToWriter(message: PushFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushFilter;
  static deserializeBinaryFromReader(message: PushFilter, reader: jspb.BinaryReader): PushFilter;
}

export namespace PushFilter {
  export type AsObject = {
    branch: string,
    tag: string,
  }

  export enum GitRefCase { 
    GIT_REF_NOT_SET = 0,
    BRANCH = 2,
    TAG = 3,
  }
}

export class CreateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): void;
  hasTrigger(): boolean;
  clearTrigger(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildTriggerRequest): CreateBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: CreateBuildTriggerRequest, reader: jspb.BinaryReader): CreateBuildTriggerRequest;
}

export namespace CreateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class GetBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildTriggerRequest): GetBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: GetBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildTriggerRequest;
  static deserializeBinaryFromReader(message: GetBuildTriggerRequest, reader: jspb.BinaryReader): GetBuildTriggerRequest;
}

export namespace GetBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class ListBuildTriggersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersRequest): ListBuildTriggersRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildTriggersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersRequest;
  static deserializeBinaryFromReader(message: ListBuildTriggersRequest, reader: jspb.BinaryReader): ListBuildTriggersRequest;
}

export namespace ListBuildTriggersRequest {
  export type AsObject = {
    projectId: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListBuildTriggersResponse extends jspb.Message {
  getTriggersList(): Array<BuildTrigger>;
  setTriggersList(value: Array<BuildTrigger>): void;
  clearTriggersList(): void;
  addTriggers(value?: BuildTrigger, index?: number): BuildTrigger;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildTriggersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildTriggersResponse): ListBuildTriggersResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildTriggersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildTriggersResponse;
  static deserializeBinaryFromReader(message: ListBuildTriggersResponse, reader: jspb.BinaryReader): ListBuildTriggersResponse;
}

export namespace ListBuildTriggersResponse {
  export type AsObject = {
    triggersList: Array<BuildTrigger.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBuildTriggerRequest): DeleteBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBuildTriggerRequest;
  static deserializeBinaryFromReader(message: DeleteBuildTriggerRequest, reader: jspb.BinaryReader): DeleteBuildTriggerRequest;
}

export namespace DeleteBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
  }
}

export class UpdateBuildTriggerRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  getTrigger(): BuildTrigger | undefined;
  setTrigger(value?: BuildTrigger): void;
  hasTrigger(): boolean;
  clearTrigger(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuildTriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuildTriggerRequest): UpdateBuildTriggerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBuildTriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuildTriggerRequest;
  static deserializeBinaryFromReader(message: UpdateBuildTriggerRequest, reader: jspb.BinaryReader): UpdateBuildTriggerRequest;
}

export namespace UpdateBuildTriggerRequest {
  export type AsObject = {
    projectId: string,
    triggerId: string,
    trigger?: BuildTrigger.AsObject,
  }
}

export class BuildOptions extends jspb.Message {
  getSourceProvenanceHashList(): Array<Hash.HashType>;
  setSourceProvenanceHashList(value: Array<Hash.HashType>): void;
  clearSourceProvenanceHashList(): void;
  addSourceProvenanceHash(value: Hash.HashType, index?: number): void;

  getRequestedVerifyOption(): BuildOptions.VerifyOption;
  setRequestedVerifyOption(value: BuildOptions.VerifyOption): void;

  getMachineType(): BuildOptions.MachineType;
  setMachineType(value: BuildOptions.MachineType): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  getSubstitutionOption(): BuildOptions.SubstitutionOption;
  setSubstitutionOption(value: BuildOptions.SubstitutionOption): void;

  getLogStreamingOption(): BuildOptions.LogStreamingOption;
  setLogStreamingOption(value: BuildOptions.LogStreamingOption): void;

  getWorkerPool(): string;
  setWorkerPool(value: string): void;

  getLogging(): BuildOptions.LoggingMode;
  setLogging(value: BuildOptions.LoggingMode): void;

  getEnvList(): Array<string>;
  setEnvList(value: Array<string>): void;
  clearEnvList(): void;
  addEnv(value: string, index?: number): void;

  getSecretEnvList(): Array<string>;
  setSecretEnvList(value: Array<string>): void;
  clearSecretEnvList(): void;
  addSecretEnv(value: string, index?: number): void;

  getVolumesList(): Array<Volume>;
  setVolumesList(value: Array<Volume>): void;
  clearVolumesList(): void;
  addVolumes(value?: Volume, index?: number): Volume;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildOptions.AsObject;
  static toObject(includeInstance: boolean, msg: BuildOptions): BuildOptions.AsObject;
  static serializeBinaryToWriter(message: BuildOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildOptions;
  static deserializeBinaryFromReader(message: BuildOptions, reader: jspb.BinaryReader): BuildOptions;
}

export namespace BuildOptions {
  export type AsObject = {
    sourceProvenanceHashList: Array<Hash.HashType>,
    requestedVerifyOption: BuildOptions.VerifyOption,
    machineType: BuildOptions.MachineType,
    diskSizeGb: number,
    substitutionOption: BuildOptions.SubstitutionOption,
    logStreamingOption: BuildOptions.LogStreamingOption,
    workerPool: string,
    logging: BuildOptions.LoggingMode,
    envList: Array<string>,
    secretEnvList: Array<string>,
    volumesList: Array<Volume.AsObject>,
  }

  export enum VerifyOption { 
    NOT_VERIFIED = 0,
    VERIFIED = 1,
  }

  export enum MachineType { 
    UNSPECIFIED = 0,
    N1_HIGHCPU_8 = 1,
    N1_HIGHCPU_32 = 2,
  }

  export enum SubstitutionOption { 
    MUST_MATCH = 0,
    ALLOW_LOOSE = 1,
  }

  export enum LogStreamingOption { 
    STREAM_DEFAULT = 0,
    STREAM_ON = 1,
    STREAM_OFF = 2,
  }

  export enum LoggingMode { 
    LOGGING_UNSPECIFIED = 0,
    LEGACY = 1,
    GCS_ONLY = 2,
  }
}

export class WorkerPool extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getServiceAccountEmail(): string;
  setServiceAccountEmail(value: string): void;

  getWorkerCount(): number;
  setWorkerCount(value: number): void;

  getWorkerConfig(): WorkerConfig | undefined;
  setWorkerConfig(value?: WorkerConfig): void;
  hasWorkerConfig(): boolean;
  clearWorkerConfig(): void;

  getRegionsList(): Array<WorkerPool.Region>;
  setRegionsList(value: Array<WorkerPool.Region>): void;
  clearRegionsList(): void;
  addRegions(value: WorkerPool.Region, index?: number): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDeleteTime(): boolean;
  clearDeleteTime(): void;

  getStatus(): WorkerPool.Status;
  setStatus(value: WorkerPool.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerPool.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerPool): WorkerPool.AsObject;
  static serializeBinaryToWriter(message: WorkerPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerPool;
  static deserializeBinaryFromReader(message: WorkerPool, reader: jspb.BinaryReader): WorkerPool;
}

export namespace WorkerPool {
  export type AsObject = {
    name: string,
    projectId: string,
    serviceAccountEmail: string,
    workerCount: number,
    workerConfig?: WorkerConfig.AsObject,
    regionsList: Array<WorkerPool.Region>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: WorkerPool.Status,
  }

  export enum Region { 
    REGION_UNSPECIFIED = 0,
    US_CENTRAL1 = 1,
    US_WEST1 = 2,
    US_EAST1 = 3,
    US_EAST4 = 4,
  }

  export enum Status { 
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    RUNNING = 2,
    DELETING = 3,
    DELETED = 4,
  }
}

export class WorkerConfig extends jspb.Message {
  getMachineType(): string;
  setMachineType(value: string): void;

  getDiskSizeGb(): number;
  setDiskSizeGb(value: number): void;

  getNetwork(): Network | undefined;
  setNetwork(value?: Network): void;
  hasNetwork(): boolean;
  clearNetwork(): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WorkerConfig): WorkerConfig.AsObject;
  static serializeBinaryToWriter(message: WorkerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkerConfig;
  static deserializeBinaryFromReader(message: WorkerConfig, reader: jspb.BinaryReader): WorkerConfig;
}

export namespace WorkerConfig {
  export type AsObject = {
    machineType: string,
    diskSizeGb: number,
    network?: Network.AsObject,
    tag: string,
  }
}

export class Network extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getSubnetwork(): string;
  setSubnetwork(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    projectId: string,
    network: string,
    subnetwork: string,
  }
}

export class CreateWorkerPoolRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getWorkerPool(): WorkerPool | undefined;
  setWorkerPool(value?: WorkerPool): void;
  hasWorkerPool(): boolean;
  clearWorkerPool(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkerPoolRequest): CreateWorkerPoolRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkerPoolRequest;
  static deserializeBinaryFromReader(message: CreateWorkerPoolRequest, reader: jspb.BinaryReader): CreateWorkerPoolRequest;
}

export namespace CreateWorkerPoolRequest {
  export type AsObject = {
    parent: string,
    workerPool?: WorkerPool.AsObject,
  }
}

export class GetWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerPoolRequest): GetWorkerPoolRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerPoolRequest;
  static deserializeBinaryFromReader(message: GetWorkerPoolRequest, reader: jspb.BinaryReader): GetWorkerPoolRequest;
}

export namespace GetWorkerPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkerPoolRequest): DeleteWorkerPoolRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkerPoolRequest;
  static deserializeBinaryFromReader(message: DeleteWorkerPoolRequest, reader: jspb.BinaryReader): DeleteWorkerPoolRequest;
}

export namespace DeleteWorkerPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateWorkerPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getWorkerPool(): WorkerPool | undefined;
  setWorkerPool(value?: WorkerPool): void;
  hasWorkerPool(): boolean;
  clearWorkerPool(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerPoolRequest): UpdateWorkerPoolRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkerPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerPoolRequest;
  static deserializeBinaryFromReader(message: UpdateWorkerPoolRequest, reader: jspb.BinaryReader): UpdateWorkerPoolRequest;
}

export namespace UpdateWorkerPoolRequest {
  export type AsObject = {
    name: string,
    workerPool?: WorkerPool.AsObject,
  }
}

export class ListWorkerPoolsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkerPoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkerPoolsRequest): ListWorkerPoolsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkerPoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkerPoolsRequest;
  static deserializeBinaryFromReader(message: ListWorkerPoolsRequest, reader: jspb.BinaryReader): ListWorkerPoolsRequest;
}

export namespace ListWorkerPoolsRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ListWorkerPoolsResponse extends jspb.Message {
  getWorkerPoolsList(): Array<WorkerPool>;
  setWorkerPoolsList(value: Array<WorkerPool>): void;
  clearWorkerPoolsList(): void;
  addWorkerPools(value?: WorkerPool, index?: number): WorkerPool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkerPoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkerPoolsResponse): ListWorkerPoolsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkerPoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkerPoolsResponse;
  static deserializeBinaryFromReader(message: ListWorkerPoolsResponse, reader: jspb.BinaryReader): ListWorkerPoolsResponse;
}

export namespace ListWorkerPoolsResponse {
  export type AsObject = {
    workerPoolsList: Array<WorkerPool.AsObject>,
  }
}

