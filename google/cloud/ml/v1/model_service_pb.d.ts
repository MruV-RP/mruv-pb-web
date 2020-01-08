import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Model extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDefaultVersion(): Version | undefined;
  setDefaultVersion(value?: Version): void;
  hasDefaultVersion(): boolean;
  clearDefaultVersion(): void;

  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): void;
  clearRegionsList(): void;
  addRegions(value: string, index?: number): void;

  getOnlinePredictionLogging(): boolean;
  setOnlinePredictionLogging(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    name: string,
    description: string,
    defaultVersion?: Version.AsObject,
    regionsList: Array<string>,
    onlinePredictionLogging: boolean,
  }
}

export class Version extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  getDeploymentUri(): string;
  setDeploymentUri(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getLastUseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUseTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasLastUseTime(): boolean;
  clearLastUseTime(): void;

  getRuntimeVersion(): string;
  setRuntimeVersion(value: string): void;

  getManualScaling(): ManualScaling | undefined;
  setManualScaling(value?: ManualScaling): void;
  hasManualScaling(): boolean;
  clearManualScaling(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    name: string,
    description: string,
    isDefault: boolean,
    deploymentUri: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastUseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    runtimeVersion: string,
    manualScaling?: ManualScaling.AsObject,
  }
}

export class ManualScaling extends jspb.Message {
  getNodes(): number;
  setNodes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualScaling.AsObject;
  static toObject(includeInstance: boolean, msg: ManualScaling): ManualScaling.AsObject;
  static serializeBinaryToWriter(message: ManualScaling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualScaling;
  static deserializeBinaryFromReader(message: ManualScaling, reader: jspb.BinaryReader): ManualScaling;
}

export namespace ManualScaling {
  export type AsObject = {
    nodes: number,
  }
}

export class CreateModelRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getModel(): Model | undefined;
  setModel(value?: Model): void;
  hasModel(): boolean;
  clearModel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    parent: string,
    model?: Model.AsObject,
  }
}

export class ListModelsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListModelsResponse extends jspb.Message {
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  clearModelsList(): void;
  addModels(value?: Model, index?: number): Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelsList: Array<Model.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateVersionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getVersion(): Version | undefined;
  setVersion(value?: Version): void;
  hasVersion(): boolean;
  clearVersion(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVersionRequest): CreateVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVersionRequest;
  static deserializeBinaryFromReader(message: CreateVersionRequest, reader: jspb.BinaryReader): CreateVersionRequest;
}

export namespace CreateVersionRequest {
  export type AsObject = {
    parent: string,
    version?: Version.AsObject,
  }
}

export class ListVersionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
  static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListVersionsResponse extends jspb.Message {
  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): void;
  clearVersionsList(): void;
  addVersions(value?: Version, index?: number): Version;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
  static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
  export type AsObject = {
    versionsList: Array<Version.AsObject>,
    nextPageToken: string,
  }
}

export class GetVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVersionRequest): DeleteVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVersionRequest;
  static deserializeBinaryFromReader(message: DeleteVersionRequest, reader: jspb.BinaryReader): DeleteVersionRequest;
}

export namespace DeleteVersionRequest {
  export type AsObject = {
    name: string,
  }
}

export class SetDefaultVersionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultVersionRequest): SetDefaultVersionRequest.AsObject;
  static serializeBinaryToWriter(message: SetDefaultVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultVersionRequest;
  static deserializeBinaryFromReader(message: SetDefaultVersionRequest, reader: jspb.BinaryReader): SetDefaultVersionRequest;
}

export namespace SetDefaultVersionRequest {
  export type AsObject = {
    name: string,
  }
}

