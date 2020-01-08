import * as jspb from "google-protobuf"

import * as google_devtools_containeranalysis_v1beta1_source_source_pb from '../../../../../google/devtools/containeranalysis/v1beta1/source/source_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class BuildProvenance extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getCommandsList(): Array<Command>;
  setCommandsList(value: Array<Command>): void;
  clearCommandsList(): void;
  addCommands(value?: Command, index?: number): Command;

  getBuiltArtifactsList(): Array<Artifact>;
  setBuiltArtifactsList(value: Array<Artifact>): void;
  clearBuiltArtifactsList(): void;
  addBuiltArtifacts(value?: Artifact, index?: number): Artifact;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getCreator(): string;
  setCreator(value: string): void;

  getLogsUri(): string;
  setLogsUri(value: string): void;

  getSourceProvenance(): Source | undefined;
  setSourceProvenance(value?: Source): void;
  hasSourceProvenance(): boolean;
  clearSourceProvenance(): void;

  getTriggerId(): string;
  setTriggerId(value: string): void;

  getBuildOptionsMap(): jspb.Map<string, string>;
  clearBuildOptionsMap(): void;

  getBuilderVersion(): string;
  setBuilderVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: BuildProvenance): BuildProvenance.AsObject;
  static serializeBinaryToWriter(message: BuildProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildProvenance;
  static deserializeBinaryFromReader(message: BuildProvenance, reader: jspb.BinaryReader): BuildProvenance;
}

export namespace BuildProvenance {
  export type AsObject = {
    id: string,
    projectId: string,
    commandsList: Array<Command.AsObject>,
    builtArtifactsList: Array<Artifact.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    creator: string,
    logsUri: string,
    sourceProvenance?: Source.AsObject,
    triggerId: string,
    buildOptionsMap: Array<[string, string]>,
    builderVersion: string,
  }
}

export class Source extends jspb.Message {
  getArtifactStorageSourceUri(): string;
  setArtifactStorageSourceUri(value: string): void;

  getFileHashesMap(): jspb.Map<string, FileHashes>;
  clearFileHashesMap(): void;

  getContext(): google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext | undefined;
  setContext(value?: google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext): void;
  hasContext(): boolean;
  clearContext(): void;

  getAdditionalContextsList(): Array<google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext>;
  setAdditionalContextsList(value: Array<google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext>): void;
  clearAdditionalContextsList(): void;
  addAdditionalContexts(value?: google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext, index?: number): google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    artifactStorageSourceUri: string,
    fileHashesMap: Array<[string, FileHashes.AsObject]>,
    context?: google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext.AsObject,
    additionalContextsList: Array<google_devtools_containeranalysis_v1beta1_source_source_pb.SourceContext.AsObject>,
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
    HASH_TYPE_UNSPECIFIED = 0,
    SHA256 = 1,
  }
}

export class Command extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    name: string,
    envList: Array<string>,
    argsList: Array<string>,
    dir: string,
    id: string,
    waitForList: Array<string>,
  }
}

export class Artifact extends jspb.Message {
  getChecksum(): string;
  setChecksum(value: string): void;

  getId(): string;
  setId(value: string): void;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  clearNamesList(): void;
  addNames(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    checksum: string,
    id: string,
    namesList: Array<string>,
  }
}

