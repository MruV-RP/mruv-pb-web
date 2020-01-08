import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class HttpTarget extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getHttpMethod(): HttpMethod;
  setHttpMethod(value: HttpMethod): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  getOauthToken(): OAuthToken | undefined;
  setOauthToken(value?: OAuthToken): void;
  hasOauthToken(): boolean;
  clearOauthToken(): void;

  getOidcToken(): OidcToken | undefined;
  setOidcToken(value?: OidcToken): void;
  hasOidcToken(): boolean;
  clearOidcToken(): void;

  getAuthorizationHeaderCase(): HttpTarget.AuthorizationHeaderCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HttpTarget.AsObject;
  static toObject(includeInstance: boolean, msg: HttpTarget): HttpTarget.AsObject;
  static serializeBinaryToWriter(message: HttpTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HttpTarget;
  static deserializeBinaryFromReader(message: HttpTarget, reader: jspb.BinaryReader): HttpTarget;
}

export namespace HttpTarget {
  export type AsObject = {
    uri: string,
    httpMethod: HttpMethod,
    headersMap: Array<[string, string]>,
    body: Uint8Array | string,
    oauthToken?: OAuthToken.AsObject,
    oidcToken?: OidcToken.AsObject,
  }

  export enum AuthorizationHeaderCase { 
    AUTHORIZATION_HEADER_NOT_SET = 0,
    OAUTH_TOKEN = 5,
    OIDC_TOKEN = 6,
  }
}

export class AppEngineHttpTarget extends jspb.Message {
  getHttpMethod(): HttpMethod;
  setHttpMethod(value: HttpMethod): void;

  getAppEngineRouting(): AppEngineRouting | undefined;
  setAppEngineRouting(value?: AppEngineRouting): void;
  hasAppEngineRouting(): boolean;
  clearAppEngineRouting(): void;

  getRelativeUri(): string;
  setRelativeUri(value: string): void;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): void;

  getBody(): Uint8Array | string;
  getBody_asU8(): Uint8Array;
  getBody_asB64(): string;
  setBody(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineHttpTarget.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineHttpTarget): AppEngineHttpTarget.AsObject;
  static serializeBinaryToWriter(message: AppEngineHttpTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineHttpTarget;
  static deserializeBinaryFromReader(message: AppEngineHttpTarget, reader: jspb.BinaryReader): AppEngineHttpTarget;
}

export namespace AppEngineHttpTarget {
  export type AsObject = {
    httpMethod: HttpMethod,
    appEngineRouting?: AppEngineRouting.AsObject,
    relativeUri: string,
    headersMap: Array<[string, string]>,
    body: Uint8Array | string,
  }
}

export class PubsubTarget extends jspb.Message {
  getTopicName(): string;
  setTopicName(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubTarget.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubTarget): PubsubTarget.AsObject;
  static serializeBinaryToWriter(message: PubsubTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubTarget;
  static deserializeBinaryFromReader(message: PubsubTarget, reader: jspb.BinaryReader): PubsubTarget;
}

export namespace PubsubTarget {
  export type AsObject = {
    topicName: string,
    data: Uint8Array | string,
    attributesMap: Array<[string, string]>,
  }
}

export class AppEngineRouting extends jspb.Message {
  getService(): string;
  setService(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getInstance(): string;
  setInstance(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppEngineRouting.AsObject;
  static toObject(includeInstance: boolean, msg: AppEngineRouting): AppEngineRouting.AsObject;
  static serializeBinaryToWriter(message: AppEngineRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppEngineRouting;
  static deserializeBinaryFromReader(message: AppEngineRouting, reader: jspb.BinaryReader): AppEngineRouting;
}

export namespace AppEngineRouting {
  export type AsObject = {
    service: string,
    version: string,
    instance: string,
    host: string,
  }
}

export class OAuthToken extends jspb.Message {
  getServiceAccountEmail(): string;
  setServiceAccountEmail(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthToken): OAuthToken.AsObject;
  static serializeBinaryToWriter(message: OAuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthToken;
  static deserializeBinaryFromReader(message: OAuthToken, reader: jspb.BinaryReader): OAuthToken;
}

export namespace OAuthToken {
  export type AsObject = {
    serviceAccountEmail: string,
    scope: string,
  }
}

export class OidcToken extends jspb.Message {
  getServiceAccountEmail(): string;
  setServiceAccountEmail(value: string): void;

  getAudience(): string;
  setAudience(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OidcToken.AsObject;
  static toObject(includeInstance: boolean, msg: OidcToken): OidcToken.AsObject;
  static serializeBinaryToWriter(message: OidcToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OidcToken;
  static deserializeBinaryFromReader(message: OidcToken, reader: jspb.BinaryReader): OidcToken;
}

export namespace OidcToken {
  export type AsObject = {
    serviceAccountEmail: string,
    audience: string,
  }
}

export enum HttpMethod { 
  HTTP_METHOD_UNSPECIFIED = 0,
  POST = 1,
  GET = 2,
  HEAD = 3,
  PUT = 4,
  DELETE = 5,
  PATCH = 6,
  OPTIONS = 7,
}
