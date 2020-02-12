import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_dialogflow_v2beta1_validation_result_pb from '../../../../google/cloud/dialogflow/v2beta1/validation_result_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

export class Agent extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDefaultLanguageCode(): string;
  setDefaultLanguageCode(value: string): void;

  getSupportedLanguageCodesList(): Array<string>;
  setSupportedLanguageCodesList(value: Array<string>): void;
  clearSupportedLanguageCodesList(): void;
  addSupportedLanguageCodes(value: string, index?: number): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAvatarUri(): string;
  setAvatarUri(value: string): void;

  getEnableLogging(): boolean;
  setEnableLogging(value: boolean): void;

  getMatchMode(): Agent.MatchMode;
  setMatchMode(value: Agent.MatchMode): void;

  getClassificationThreshold(): number;
  setClassificationThreshold(value: number): void;

  getApiVersion(): Agent.ApiVersion;
  setApiVersion(value: Agent.ApiVersion): void;

  getTier(): Agent.Tier;
  setTier(value: Agent.Tier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Agent.AsObject;
  static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
  static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Agent;
  static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
}

export namespace Agent {
  export type AsObject = {
    parent: string,
    displayName: string,
    defaultLanguageCode: string,
    supportedLanguageCodesList: Array<string>,
    timeZone: string,
    description: string,
    avatarUri: string,
    enableLogging: boolean,
    matchMode: Agent.MatchMode,
    classificationThreshold: number,
    apiVersion: Agent.ApiVersion,
    tier: Agent.Tier,
  }

  export enum MatchMode { 
    MATCH_MODE_UNSPECIFIED = 0,
    MATCH_MODE_HYBRID = 1,
    MATCH_MODE_ML_ONLY = 2,
  }

  export enum ApiVersion { 
    API_VERSION_UNSPECIFIED = 0,
    API_VERSION_V1 = 1,
    API_VERSION_V2 = 2,
    API_VERSION_V2_BETA_1 = 3,
  }

  export enum Tier { 
    TIER_UNSPECIFIED = 0,
    TIER_STANDARD = 1,
    TIER_ENTERPRISE = 2,
    TIER_ENTERPRISE_PLUS = 3,
  }
}

export class GetAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentRequest): GetAgentRequest.AsObject;
  static serializeBinaryToWriter(message: GetAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentRequest;
  static deserializeBinaryFromReader(message: GetAgentRequest, reader: jspb.BinaryReader): GetAgentRequest;
}

export namespace GetAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class SetAgentRequest extends jspb.Message {
  getAgent(): Agent | undefined;
  setAgent(value?: Agent): void;
  hasAgent(): boolean;
  clearAgent(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAgentRequest): SetAgentRequest.AsObject;
  static serializeBinaryToWriter(message: SetAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAgentRequest;
  static deserializeBinaryFromReader(message: SetAgentRequest, reader: jspb.BinaryReader): SetAgentRequest;
}

export namespace SetAgentRequest {
  export type AsObject = {
    agent?: Agent.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAgentRequest): DeleteAgentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAgentRequest;
  static deserializeBinaryFromReader(message: DeleteAgentRequest, reader: jspb.BinaryReader): DeleteAgentRequest;
}

export namespace DeleteAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class SearchAgentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsRequest): SearchAgentsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAgentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsRequest;
  static deserializeBinaryFromReader(message: SearchAgentsRequest, reader: jspb.BinaryReader): SearchAgentsRequest;
}

export namespace SearchAgentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchAgentsResponse extends jspb.Message {
  getAgentsList(): Array<Agent>;
  setAgentsList(value: Array<Agent>): void;
  clearAgentsList(): void;
  addAgents(value?: Agent, index?: number): Agent;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAgentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAgentsResponse): SearchAgentsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAgentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAgentsResponse;
  static deserializeBinaryFromReader(message: SearchAgentsResponse, reader: jspb.BinaryReader): SearchAgentsResponse;
}

export namespace SearchAgentsResponse {
  export type AsObject = {
    agentsList: Array<Agent.AsObject>,
    nextPageToken: string,
  }
}

export class TrainAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrainAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrainAgentRequest): TrainAgentRequest.AsObject;
  static serializeBinaryToWriter(message: TrainAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrainAgentRequest;
  static deserializeBinaryFromReader(message: TrainAgentRequest, reader: jspb.BinaryReader): TrainAgentRequest;
}

export namespace TrainAgentRequest {
  export type AsObject = {
    parent: string,
  }
}

export class ExportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAgentUri(): string;
  setAgentUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentRequest): ExportAgentRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentRequest;
  static deserializeBinaryFromReader(message: ExportAgentRequest, reader: jspb.BinaryReader): ExportAgentRequest;
}

export namespace ExportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
  }
}

export class ExportAgentResponse extends jspb.Message {
  getAgentUri(): string;
  setAgentUri(value: string): void;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): ExportAgentResponse.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAgentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAgentResponse): ExportAgentResponse.AsObject;
  static serializeBinaryToWriter(message: ExportAgentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAgentResponse;
  static deserializeBinaryFromReader(message: ExportAgentResponse, reader: jspb.BinaryReader): ExportAgentResponse;
}

export namespace ExportAgentResponse {
  export type AsObject = {
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 1,
    AGENT_CONTENT = 2,
  }
}

export class ImportAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAgentUri(): string;
  setAgentUri(value: string): void;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): ImportAgentRequest.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportAgentRequest): ImportAgentRequest.AsObject;
  static serializeBinaryToWriter(message: ImportAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportAgentRequest;
  static deserializeBinaryFromReader(message: ImportAgentRequest, reader: jspb.BinaryReader): ImportAgentRequest;
}

export namespace ImportAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

export class RestoreAgentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAgentUri(): string;
  setAgentUri(value: string): void;

  getAgentContent(): Uint8Array | string;
  getAgentContent_asU8(): Uint8Array;
  getAgentContent_asB64(): string;
  setAgentContent(value: Uint8Array | string): void;

  getAgentCase(): RestoreAgentRequest.AgentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAgentRequest): RestoreAgentRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAgentRequest;
  static deserializeBinaryFromReader(message: RestoreAgentRequest, reader: jspb.BinaryReader): RestoreAgentRequest;
}

export namespace RestoreAgentRequest {
  export type AsObject = {
    parent: string,
    agentUri: string,
    agentContent: Uint8Array | string,
  }

  export enum AgentCase { 
    AGENT_NOT_SET = 0,
    AGENT_URI = 2,
    AGENT_CONTENT = 3,
  }
}

export class GetValidationResultRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidationResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidationResultRequest): GetValidationResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetValidationResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidationResultRequest;
  static deserializeBinaryFromReader(message: GetValidationResultRequest, reader: jspb.BinaryReader): GetValidationResultRequest;
}

export namespace GetValidationResultRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
  }
}

