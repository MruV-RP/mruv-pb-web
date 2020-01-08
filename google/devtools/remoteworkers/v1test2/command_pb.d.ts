import * as jspb from "google-protobuf"

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

export class CommandTask extends jspb.Message {
  getInputs(): CommandTask.Inputs | undefined;
  setInputs(value?: CommandTask.Inputs): void;
  hasInputs(): boolean;
  clearInputs(): void;

  getExpectedOutputs(): CommandTask.Outputs | undefined;
  setExpectedOutputs(value?: CommandTask.Outputs): void;
  hasExpectedOutputs(): boolean;
  clearExpectedOutputs(): void;

  getTimeouts(): CommandTask.Timeouts | undefined;
  setTimeouts(value?: CommandTask.Timeouts): void;
  hasTimeouts(): boolean;
  clearTimeouts(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandTask.AsObject;
  static toObject(includeInstance: boolean, msg: CommandTask): CommandTask.AsObject;
  static serializeBinaryToWriter(message: CommandTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandTask;
  static deserializeBinaryFromReader(message: CommandTask, reader: jspb.BinaryReader): CommandTask;
}

export namespace CommandTask {
  export type AsObject = {
    inputs?: CommandTask.Inputs.AsObject,
    expectedOutputs?: CommandTask.Outputs.AsObject,
    timeouts?: CommandTask.Timeouts.AsObject,
  }

  export class Inputs extends jspb.Message {
    getArgumentsList(): Array<string>;
    setArgumentsList(value: Array<string>): void;
    clearArgumentsList(): void;
    addArguments(value: string, index?: number): void;

    getFilesList(): Array<Digest>;
    setFilesList(value: Array<Digest>): void;
    clearFilesList(): void;
    addFiles(value?: Digest, index?: number): Digest;

    getInlineBlobsList(): Array<Blob>;
    setInlineBlobsList(value: Array<Blob>): void;
    clearInlineBlobsList(): void;
    addInlineBlobs(value?: Blob, index?: number): Blob;

    getEnvironmentVariablesList(): Array<CommandTask.Inputs.EnvironmentVariable>;
    setEnvironmentVariablesList(value: Array<CommandTask.Inputs.EnvironmentVariable>): void;
    clearEnvironmentVariablesList(): void;
    addEnvironmentVariables(value?: CommandTask.Inputs.EnvironmentVariable, index?: number): CommandTask.Inputs.EnvironmentVariable;

    getWorkingDirectory(): string;
    setWorkingDirectory(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Inputs.AsObject;
    static toObject(includeInstance: boolean, msg: Inputs): Inputs.AsObject;
    static serializeBinaryToWriter(message: Inputs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Inputs;
    static deserializeBinaryFromReader(message: Inputs, reader: jspb.BinaryReader): Inputs;
  }

  export namespace Inputs {
    export type AsObject = {
      argumentsList: Array<string>,
      filesList: Array<Digest.AsObject>,
      inlineBlobsList: Array<Blob.AsObject>,
      environmentVariablesList: Array<CommandTask.Inputs.EnvironmentVariable.AsObject>,
      workingDirectory: string,
    }

    export class EnvironmentVariable extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getValue(): string;
      setValue(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EnvironmentVariable.AsObject;
      static toObject(includeInstance: boolean, msg: EnvironmentVariable): EnvironmentVariable.AsObject;
      static serializeBinaryToWriter(message: EnvironmentVariable, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EnvironmentVariable;
      static deserializeBinaryFromReader(message: EnvironmentVariable, reader: jspb.BinaryReader): EnvironmentVariable;
    }

    export namespace EnvironmentVariable {
      export type AsObject = {
        name: string,
        value: string,
      }
    }

  }


  export class Outputs extends jspb.Message {
    getFilesList(): Array<string>;
    setFilesList(value: Array<string>): void;
    clearFilesList(): void;
    addFiles(value: string, index?: number): void;

    getDirectoriesList(): Array<string>;
    setDirectoriesList(value: Array<string>): void;
    clearDirectoriesList(): void;
    addDirectories(value: string, index?: number): void;

    getStdoutDestination(): string;
    setStdoutDestination(value: string): void;

    getStderrDestination(): string;
    setStderrDestination(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Outputs.AsObject;
    static toObject(includeInstance: boolean, msg: Outputs): Outputs.AsObject;
    static serializeBinaryToWriter(message: Outputs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Outputs;
    static deserializeBinaryFromReader(message: Outputs, reader: jspb.BinaryReader): Outputs;
  }

  export namespace Outputs {
    export type AsObject = {
      filesList: Array<string>,
      directoriesList: Array<string>,
      stdoutDestination: string,
      stderrDestination: string,
    }
  }


  export class Timeouts extends jspb.Message {
    getExecution(): google_protobuf_duration_pb.Duration | undefined;
    setExecution(value?: google_protobuf_duration_pb.Duration): void;
    hasExecution(): boolean;
    clearExecution(): void;

    getIdle(): google_protobuf_duration_pb.Duration | undefined;
    setIdle(value?: google_protobuf_duration_pb.Duration): void;
    hasIdle(): boolean;
    clearIdle(): void;

    getShutdown(): google_protobuf_duration_pb.Duration | undefined;
    setShutdown(value?: google_protobuf_duration_pb.Duration): void;
    hasShutdown(): boolean;
    clearShutdown(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timeouts.AsObject;
    static toObject(includeInstance: boolean, msg: Timeouts): Timeouts.AsObject;
    static serializeBinaryToWriter(message: Timeouts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timeouts;
    static deserializeBinaryFromReader(message: Timeouts, reader: jspb.BinaryReader): Timeouts;
  }

  export namespace Timeouts {
    export type AsObject = {
      execution?: google_protobuf_duration_pb.Duration.AsObject,
      idle?: google_protobuf_duration_pb.Duration.AsObject,
      shutdown?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

}

export class CommandOutputs extends jspb.Message {
  getExitCode(): number;
  setExitCode(value: number): void;

  getOutputs(): Digest | undefined;
  setOutputs(value?: Digest): void;
  hasOutputs(): boolean;
  clearOutputs(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandOutputs.AsObject;
  static toObject(includeInstance: boolean, msg: CommandOutputs): CommandOutputs.AsObject;
  static serializeBinaryToWriter(message: CommandOutputs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandOutputs;
  static deserializeBinaryFromReader(message: CommandOutputs, reader: jspb.BinaryReader): CommandOutputs;
}

export namespace CommandOutputs {
  export type AsObject = {
    exitCode: number,
    outputs?: Digest.AsObject,
  }
}

export class CommandOverhead extends jspb.Message {
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasDuration(): boolean;
  clearDuration(): void;

  getOverhead(): google_protobuf_duration_pb.Duration | undefined;
  setOverhead(value?: google_protobuf_duration_pb.Duration): void;
  hasOverhead(): boolean;
  clearOverhead(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandOverhead.AsObject;
  static toObject(includeInstance: boolean, msg: CommandOverhead): CommandOverhead.AsObject;
  static serializeBinaryToWriter(message: CommandOverhead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandOverhead;
  static deserializeBinaryFromReader(message: CommandOverhead, reader: jspb.BinaryReader): CommandOverhead;
}

export namespace CommandOverhead {
  export type AsObject = {
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    overhead?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class CommandResult extends jspb.Message {
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getExitCode(): number;
  setExitCode(value: number): void;

  getOutputs(): Digest | undefined;
  setOutputs(value?: Digest): void;
  hasOutputs(): boolean;
  clearOutputs(): void;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasDuration(): boolean;
  clearDuration(): void;

  getOverhead(): google_protobuf_duration_pb.Duration | undefined;
  setOverhead(value?: google_protobuf_duration_pb.Duration): void;
  hasOverhead(): boolean;
  clearOverhead(): void;

  getMetadataList(): Array<google_protobuf_any_pb.Any>;
  setMetadataList(value: Array<google_protobuf_any_pb.Any>): void;
  clearMetadataList(): void;
  addMetadata(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandResult.AsObject;
  static toObject(includeInstance: boolean, msg: CommandResult): CommandResult.AsObject;
  static serializeBinaryToWriter(message: CommandResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandResult;
  static deserializeBinaryFromReader(message: CommandResult, reader: jspb.BinaryReader): CommandResult;
}

export namespace CommandResult {
  export type AsObject = {
    status?: google_rpc_status_pb.Status.AsObject,
    exitCode: number,
    outputs?: Digest.AsObject,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    overhead?: google_protobuf_duration_pb.Duration.AsObject,
    metadataList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class FileMetadata extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;
  hasDigest(): boolean;
  clearDigest(): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  getIsExecutable(): boolean;
  setIsExecutable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    path: string,
    digest?: Digest.AsObject,
    contents: Uint8Array | string,
    isExecutable: boolean,
  }
}

export class DirectoryMetadata extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;
  hasDigest(): boolean;
  clearDigest(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryMetadata): DirectoryMetadata.AsObject;
  static serializeBinaryToWriter(message: DirectoryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryMetadata;
  static deserializeBinaryFromReader(message: DirectoryMetadata, reader: jspb.BinaryReader): DirectoryMetadata;
}

export namespace DirectoryMetadata {
  export type AsObject = {
    path: string,
    digest?: Digest.AsObject,
  }
}

export class Digest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getSizeBytes(): number;
  setSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Digest.AsObject;
  static toObject(includeInstance: boolean, msg: Digest): Digest.AsObject;
  static serializeBinaryToWriter(message: Digest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Digest;
  static deserializeBinaryFromReader(message: Digest, reader: jspb.BinaryReader): Digest;
}

export namespace Digest {
  export type AsObject = {
    hash: string,
    sizeBytes: number,
  }
}

export class Blob extends jspb.Message {
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;
  hasDigest(): boolean;
  clearDigest(): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blob.AsObject;
  static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
  static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blob;
  static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
  export type AsObject = {
    digest?: Digest.AsObject,
    contents: Uint8Array | string,
  }
}

export class Directory extends jspb.Message {
  getFilesList(): Array<FileMetadata>;
  setFilesList(value: Array<FileMetadata>): void;
  clearFilesList(): void;
  addFiles(value?: FileMetadata, index?: number): FileMetadata;

  getDirectoriesList(): Array<DirectoryMetadata>;
  setDirectoriesList(value: Array<DirectoryMetadata>): void;
  clearDirectoriesList(): void;
  addDirectories(value?: DirectoryMetadata, index?: number): DirectoryMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Directory.AsObject;
  static toObject(includeInstance: boolean, msg: Directory): Directory.AsObject;
  static serializeBinaryToWriter(message: Directory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Directory;
  static deserializeBinaryFromReader(message: Directory, reader: jspb.BinaryReader): Directory;
}

export namespace Directory {
  export type AsObject = {
    filesList: Array<FileMetadata.AsObject>,
    directoriesList: Array<DirectoryMetadata.AsObject>,
  }
}

