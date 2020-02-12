import * as jspb from "google-protobuf"

import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';

export class InternalChecker extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getGcpZone(): string;
  setGcpZone(value: string): void;

  getPeerProjectId(): string;
  setPeerProjectId(value: string): void;

  getState(): InternalChecker.State;
  setState(value: InternalChecker.State): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalChecker.AsObject;
  static toObject(includeInstance: boolean, msg: InternalChecker): InternalChecker.AsObject;
  static serializeBinaryToWriter(message: InternalChecker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalChecker;
  static deserializeBinaryFromReader(message: InternalChecker, reader: jspb.BinaryReader): InternalChecker;
}

export namespace InternalChecker {
  export type AsObject = {
    name: string,
    displayName: string,
    network: string,
    gcpZone: string,
    peerProjectId: string,
    state: InternalChecker.State,
  }

  export enum State { 
    UNSPECIFIED = 0,
    CREATING = 1,
    RUNNING = 2,
  }
}

export class UptimeCheckConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getMonitoredResource(): google_api_monitored_resource_pb.MonitoredResource | undefined;
  setMonitoredResource(value?: google_api_monitored_resource_pb.MonitoredResource): void;
  hasMonitoredResource(): boolean;
  clearMonitoredResource(): void;

  getResourceGroup(): UptimeCheckConfig.ResourceGroup | undefined;
  setResourceGroup(value?: UptimeCheckConfig.ResourceGroup): void;
  hasResourceGroup(): boolean;
  clearResourceGroup(): void;

  getHttpCheck(): UptimeCheckConfig.HttpCheck | undefined;
  setHttpCheck(value?: UptimeCheckConfig.HttpCheck): void;
  hasHttpCheck(): boolean;
  clearHttpCheck(): void;

  getTcpCheck(): UptimeCheckConfig.TcpCheck | undefined;
  setTcpCheck(value?: UptimeCheckConfig.TcpCheck): void;
  hasTcpCheck(): boolean;
  clearTcpCheck(): void;

  getPeriod(): google_protobuf_duration_pb.Duration | undefined;
  setPeriod(value?: google_protobuf_duration_pb.Duration): void;
  hasPeriod(): boolean;
  clearPeriod(): void;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeout(): boolean;
  clearTimeout(): void;

  getContentMatchersList(): Array<UptimeCheckConfig.ContentMatcher>;
  setContentMatchersList(value: Array<UptimeCheckConfig.ContentMatcher>): void;
  clearContentMatchersList(): void;
  addContentMatchers(value?: UptimeCheckConfig.ContentMatcher, index?: number): UptimeCheckConfig.ContentMatcher;

  getSelectedRegionsList(): Array<UptimeCheckRegion>;
  setSelectedRegionsList(value: Array<UptimeCheckRegion>): void;
  clearSelectedRegionsList(): void;
  addSelectedRegions(value: UptimeCheckRegion, index?: number): void;

  getIsInternal(): boolean;
  setIsInternal(value: boolean): void;

  getInternalCheckersList(): Array<InternalChecker>;
  setInternalCheckersList(value: Array<InternalChecker>): void;
  clearInternalCheckersList(): void;
  addInternalCheckers(value?: InternalChecker, index?: number): InternalChecker;

  getResourceCase(): UptimeCheckConfig.ResourceCase;

  getCheckRequestTypeCase(): UptimeCheckConfig.CheckRequestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckConfig.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckConfig): UptimeCheckConfig.AsObject;
  static serializeBinaryToWriter(message: UptimeCheckConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckConfig;
  static deserializeBinaryFromReader(message: UptimeCheckConfig, reader: jspb.BinaryReader): UptimeCheckConfig;
}

export namespace UptimeCheckConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    monitoredResource?: google_api_monitored_resource_pb.MonitoredResource.AsObject,
    resourceGroup?: UptimeCheckConfig.ResourceGroup.AsObject,
    httpCheck?: UptimeCheckConfig.HttpCheck.AsObject,
    tcpCheck?: UptimeCheckConfig.TcpCheck.AsObject,
    period?: google_protobuf_duration_pb.Duration.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    contentMatchersList: Array<UptimeCheckConfig.ContentMatcher.AsObject>,
    selectedRegionsList: Array<UptimeCheckRegion>,
    isInternal: boolean,
    internalCheckersList: Array<InternalChecker.AsObject>,
  }

  export class ResourceGroup extends jspb.Message {
    getGroupId(): string;
    setGroupId(value: string): void;

    getResourceType(): GroupResourceType;
    setResourceType(value: GroupResourceType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceGroup): ResourceGroup.AsObject;
    static serializeBinaryToWriter(message: ResourceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceGroup;
    static deserializeBinaryFromReader(message: ResourceGroup, reader: jspb.BinaryReader): ResourceGroup;
  }

  export namespace ResourceGroup {
    export type AsObject = {
      groupId: string,
      resourceType: GroupResourceType,
    }
  }


  export class HttpCheck extends jspb.Message {
    getUseSsl(): boolean;
    setUseSsl(value: boolean): void;

    getPath(): string;
    setPath(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    getAuthInfo(): UptimeCheckConfig.HttpCheck.BasicAuthentication | undefined;
    setAuthInfo(value?: UptimeCheckConfig.HttpCheck.BasicAuthentication): void;
    hasAuthInfo(): boolean;
    clearAuthInfo(): void;

    getMaskHeaders(): boolean;
    setMaskHeaders(value: boolean): void;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    getValidateSsl(): boolean;
    setValidateSsl(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: HttpCheck): HttpCheck.AsObject;
    static serializeBinaryToWriter(message: HttpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpCheck;
    static deserializeBinaryFromReader(message: HttpCheck, reader: jspb.BinaryReader): HttpCheck;
  }

  export namespace HttpCheck {
    export type AsObject = {
      useSsl: boolean,
      path: string,
      port: number,
      authInfo?: UptimeCheckConfig.HttpCheck.BasicAuthentication.AsObject,
      maskHeaders: boolean,
      headersMap: Array<[string, string]>,
      validateSsl: boolean,
    }

    export class BasicAuthentication extends jspb.Message {
      getUsername(): string;
      setUsername(value: string): void;

      getPassword(): string;
      setPassword(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BasicAuthentication.AsObject;
      static toObject(includeInstance: boolean, msg: BasicAuthentication): BasicAuthentication.AsObject;
      static serializeBinaryToWriter(message: BasicAuthentication, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BasicAuthentication;
      static deserializeBinaryFromReader(message: BasicAuthentication, reader: jspb.BinaryReader): BasicAuthentication;
    }

    export namespace BasicAuthentication {
      export type AsObject = {
        username: string,
        password: string,
      }
    }

  }


  export class TcpCheck extends jspb.Message {
    getPort(): number;
    setPort(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpCheck.AsObject;
    static toObject(includeInstance: boolean, msg: TcpCheck): TcpCheck.AsObject;
    static serializeBinaryToWriter(message: TcpCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpCheck;
    static deserializeBinaryFromReader(message: TcpCheck, reader: jspb.BinaryReader): TcpCheck;
  }

  export namespace TcpCheck {
    export type AsObject = {
      port: number,
    }
  }


  export class ContentMatcher extends jspb.Message {
    getContent(): string;
    setContent(value: string): void;

    getMatcher(): UptimeCheckConfig.ContentMatcher.ContentMatcherOption;
    setMatcher(value: UptimeCheckConfig.ContentMatcher.ContentMatcherOption): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: ContentMatcher): ContentMatcher.AsObject;
    static serializeBinaryToWriter(message: ContentMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentMatcher;
    static deserializeBinaryFromReader(message: ContentMatcher, reader: jspb.BinaryReader): ContentMatcher;
  }

  export namespace ContentMatcher {
    export type AsObject = {
      content: string,
      matcher: UptimeCheckConfig.ContentMatcher.ContentMatcherOption,
    }

    export enum ContentMatcherOption { 
      CONTENT_MATCHER_OPTION_UNSPECIFIED = 0,
      CONTAINS_STRING = 1,
      NOT_CONTAINS_STRING = 2,
      MATCHES_REGEX = 3,
      NOT_MATCHES_REGEX = 4,
    }
  }


  export enum ResourceCase { 
    RESOURCE_NOT_SET = 0,
    MONITORED_RESOURCE = 3,
    RESOURCE_GROUP = 4,
  }

  export enum CheckRequestTypeCase { 
    CHECK_REQUEST_TYPE_NOT_SET = 0,
    HTTP_CHECK = 5,
    TCP_CHECK = 6,
  }
}

export class UptimeCheckIp extends jspb.Message {
  getRegion(): UptimeCheckRegion;
  setRegion(value: UptimeCheckRegion): void;

  getLocation(): string;
  setLocation(value: string): void;

  getIpAddress(): string;
  setIpAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UptimeCheckIp.AsObject;
  static toObject(includeInstance: boolean, msg: UptimeCheckIp): UptimeCheckIp.AsObject;
  static serializeBinaryToWriter(message: UptimeCheckIp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UptimeCheckIp;
  static deserializeBinaryFromReader(message: UptimeCheckIp, reader: jspb.BinaryReader): UptimeCheckIp;
}

export namespace UptimeCheckIp {
  export type AsObject = {
    region: UptimeCheckRegion,
    location: string,
    ipAddress: string,
  }
}

export enum UptimeCheckRegion { 
  REGION_UNSPECIFIED = 0,
  USA = 1,
  EUROPE = 2,
  SOUTH_AMERICA = 3,
  ASIA_PACIFIC = 4,
}
export enum GroupResourceType { 
  RESOURCE_TYPE_UNSPECIFIED = 0,
  INSTANCE = 1,
  AWS_ELB_LOAD_BALANCER = 2,
}
