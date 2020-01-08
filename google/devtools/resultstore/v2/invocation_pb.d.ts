import * as jspb from "google-protobuf"

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_coverage_pb from '../../../../google/devtools/resultstore/v2/coverage_pb';
import * as google_devtools_resultstore_v2_coverage_summary_pb from '../../../../google/devtools/resultstore/v2/coverage_summary_pb';
import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';
import * as google_devtools_resultstore_v2_file_processing_error_pb from '../../../../google/devtools/resultstore/v2/file_processing_error_pb';

export class Invocation extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): Invocation.Id | undefined;
  setId(value?: Invocation.Id): void;
  hasId(): boolean;
  clearId(): void;

  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;
  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;
  hasTiming(): boolean;
  clearTiming(): void;

  getInvocationAttributes(): InvocationAttributes | undefined;
  setInvocationAttributes(value?: InvocationAttributes): void;
  hasInvocationAttributes(): boolean;
  clearInvocationAttributes(): void;

  getWorkspaceInfo(): WorkspaceInfo | undefined;
  setWorkspaceInfo(value?: WorkspaceInfo): void;
  hasWorkspaceInfo(): boolean;
  clearWorkspaceInfo(): void;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  clearPropertiesList(): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  clearFilesList(): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  getCoverageSummariesList(): Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary>;
  setCoverageSummariesList(value: Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary>): void;
  clearCoverageSummariesList(): void;
  addCoverageSummaries(value?: google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary, index?: number): google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary;

  getAggregateCoverage(): google_devtools_resultstore_v2_coverage_pb.AggregateCoverage | undefined;
  setAggregateCoverage(value?: google_devtools_resultstore_v2_coverage_pb.AggregateCoverage): void;
  hasAggregateCoverage(): boolean;
  clearAggregateCoverage(): void;

  getFileProcessingErrorsList(): Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors>;
  setFileProcessingErrorsList(value: Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors>): void;
  clearFileProcessingErrorsList(): void;
  addFileProcessingErrors(value?: google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors, index?: number): google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invocation.AsObject;
  static toObject(includeInstance: boolean, msg: Invocation): Invocation.AsObject;
  static serializeBinaryToWriter(message: Invocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invocation;
  static deserializeBinaryFromReader(message: Invocation, reader: jspb.BinaryReader): Invocation;
}

export namespace Invocation {
  export type AsObject = {
    name: string,
    id?: Invocation.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    invocationAttributes?: InvocationAttributes.AsObject,
    workspaceInfo?: WorkspaceInfo.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    coverageSummariesList: Array<google_devtools_resultstore_v2_coverage_summary_pb.LanguageCoverageSummary.AsObject>,
    aggregateCoverage?: google_devtools_resultstore_v2_coverage_pb.AggregateCoverage.AsObject,
    fileProcessingErrorsList: Array<google_devtools_resultstore_v2_file_processing_error_pb.FileProcessingErrors.AsObject>,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
    }
  }

}

export class WorkspaceContext extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceContext.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceContext): WorkspaceContext.AsObject;
  static serializeBinaryToWriter(message: WorkspaceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceContext;
  static deserializeBinaryFromReader(message: WorkspaceContext, reader: jspb.BinaryReader): WorkspaceContext;
}

export namespace WorkspaceContext {
  export type AsObject = {
  }
}

export class WorkspaceInfo extends jspb.Message {
  getWorkspaceContext(): WorkspaceContext | undefined;
  setWorkspaceContext(value?: WorkspaceContext): void;
  hasWorkspaceContext(): boolean;
  clearWorkspaceContext(): void;

  getHostname(): string;
  setHostname(value: string): void;

  getWorkingDirectory(): string;
  setWorkingDirectory(value: string): void;

  getToolTag(): string;
  setToolTag(value: string): void;

  getCommandLinesList(): Array<CommandLine>;
  setCommandLinesList(value: Array<CommandLine>): void;
  clearCommandLinesList(): void;
  addCommandLines(value?: CommandLine, index?: number): CommandLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceInfo): WorkspaceInfo.AsObject;
  static serializeBinaryToWriter(message: WorkspaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceInfo;
  static deserializeBinaryFromReader(message: WorkspaceInfo, reader: jspb.BinaryReader): WorkspaceInfo;
}

export namespace WorkspaceInfo {
  export type AsObject = {
    workspaceContext?: WorkspaceContext.AsObject,
    hostname: string,
    workingDirectory: string,
    toolTag: string,
    commandLinesList: Array<CommandLine.AsObject>,
  }
}

export class CommandLine extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getTool(): string;
  setTool(value: string): void;

  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  clearArgsList(): void;
  addArgs(value: string, index?: number): void;

  getCommand(): string;
  setCommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandLine.AsObject;
  static toObject(includeInstance: boolean, msg: CommandLine): CommandLine.AsObject;
  static serializeBinaryToWriter(message: CommandLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandLine;
  static deserializeBinaryFromReader(message: CommandLine, reader: jspb.BinaryReader): CommandLine;
}

export namespace CommandLine {
  export type AsObject = {
    label: string,
    tool: string,
    argsList: Array<string>,
    command: string,
  }
}

export class InvocationAttributes extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getUsersList(): Array<string>;
  setUsersList(value: Array<string>): void;
  clearUsersList(): void;
  addUsers(value: string, index?: number): void;

  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  clearLabelsList(): void;
  addLabels(value: string, index?: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInvocationContextsList(): Array<InvocationContext>;
  setInvocationContextsList(value: Array<InvocationContext>): void;
  clearInvocationContextsList(): void;
  addInvocationContexts(value?: InvocationContext, index?: number): InvocationContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvocationAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: InvocationAttributes): InvocationAttributes.AsObject;
  static serializeBinaryToWriter(message: InvocationAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvocationAttributes;
  static deserializeBinaryFromReader(message: InvocationAttributes, reader: jspb.BinaryReader): InvocationAttributes;
}

export namespace InvocationAttributes {
  export type AsObject = {
    projectId: string,
    usersList: Array<string>,
    labelsList: Array<string>,
    description: string,
    invocationContextsList: Array<InvocationContext.AsObject>,
  }
}

export class InvocationContext extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvocationContext.AsObject;
  static toObject(includeInstance: boolean, msg: InvocationContext): InvocationContext.AsObject;
  static serializeBinaryToWriter(message: InvocationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvocationContext;
  static deserializeBinaryFromReader(message: InvocationContext, reader: jspb.BinaryReader): InvocationContext;
}

export namespace InvocationContext {
  export type AsObject = {
    displayName: string,
    url: string,
  }
}

