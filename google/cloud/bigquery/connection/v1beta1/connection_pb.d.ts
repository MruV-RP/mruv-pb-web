import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class CreateConnectionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  getConnection(): Connection | undefined;
  setConnection(value?: Connection): void;
  hasConnection(): boolean;
  clearConnection(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    parent: string,
    connectionId: string,
    connection?: Connection.AsObject,
  }
}

export class GetConnectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListConnectionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getMaxResults(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setMaxResults(value?: google_protobuf_wrappers_pb.UInt32Value): void;
  hasMaxResults(): boolean;
  clearMaxResults(): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsRequest): ListConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsRequest;
  static deserializeBinaryFromReader(message: ListConnectionsRequest, reader: jspb.BinaryReader): ListConnectionsRequest;
}

export namespace ListConnectionsRequest {
  export type AsObject = {
    parent: string,
    maxResults?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    pageToken: string,
  }
}

export class ListConnectionsResponse extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getConnectionsList(): Array<Connection>;
  setConnectionsList(value: Array<Connection>): void;
  clearConnectionsList(): void;
  addConnections(value?: Connection, index?: number): Connection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsResponse): ListConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsResponse;
  static deserializeBinaryFromReader(message: ListConnectionsResponse, reader: jspb.BinaryReader): ListConnectionsResponse;
}

export namespace ListConnectionsResponse {
  export type AsObject = {
    nextPageToken: string,
    connectionsList: Array<Connection.AsObject>,
  }
}

export class UpdateConnectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConnection(): Connection | undefined;
  setConnection(value?: Connection): void;
  hasConnection(): boolean;
  clearConnection(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    name: string,
    connection?: Connection.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateConnectionCredentialRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCredential(): ConnectionCredential | undefined;
  setCredential(value?: ConnectionCredential): void;
  hasCredential(): boolean;
  clearCredential(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionCredentialRequest): UpdateConnectionCredentialRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionCredentialRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionCredentialRequest, reader: jspb.BinaryReader): UpdateConnectionCredentialRequest;
}

export namespace UpdateConnectionCredentialRequest {
  export type AsObject = {
    name: string,
    credential?: ConnectionCredential.AsObject,
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    name: string,
  }
}

export class Connection extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFriendlyName(): string;
  setFriendlyName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCloudSql(): CloudSqlProperties | undefined;
  setCloudSql(value?: CloudSqlProperties): void;
  hasCloudSql(): boolean;
  clearCloudSql(): void;

  getCreationTime(): number;
  setCreationTime(value: number): void;

  getLastModifiedTime(): number;
  setLastModifiedTime(value: number): void;

  getHasCredential(): boolean;
  setHasCredential(value: boolean): void;

  getPropertiesCase(): Connection.PropertiesCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    name: string,
    friendlyName: string,
    description: string,
    cloudSql?: CloudSqlProperties.AsObject,
    creationTime: number,
    lastModifiedTime: number,
    hasCredential: boolean,
  }

  export enum PropertiesCase { 
    PROPERTIES_NOT_SET = 0,
    CLOUD_SQL = 4,
  }
}

export class ConnectionCredential extends jspb.Message {
  getCloudSql(): CloudSqlCredential | undefined;
  setCloudSql(value?: CloudSqlCredential): void;
  hasCloudSql(): boolean;
  clearCloudSql(): void;

  getCredentialCase(): ConnectionCredential.CredentialCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCredential.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCredential): ConnectionCredential.AsObject;
  static serializeBinaryToWriter(message: ConnectionCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCredential;
  static deserializeBinaryFromReader(message: ConnectionCredential, reader: jspb.BinaryReader): ConnectionCredential;
}

export namespace ConnectionCredential {
  export type AsObject = {
    cloudSql?: CloudSqlCredential.AsObject,
  }

  export enum CredentialCase { 
    CREDENTIAL_NOT_SET = 0,
    CLOUD_SQL = 1,
  }
}

export class CloudSqlProperties extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): void;

  getDatabase(): string;
  setDatabase(value: string): void;

  getType(): CloudSqlProperties.DatabaseType;
  setType(value: CloudSqlProperties.DatabaseType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudSqlProperties.AsObject;
  static toObject(includeInstance: boolean, msg: CloudSqlProperties): CloudSqlProperties.AsObject;
  static serializeBinaryToWriter(message: CloudSqlProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudSqlProperties;
  static deserializeBinaryFromReader(message: CloudSqlProperties, reader: jspb.BinaryReader): CloudSqlProperties;
}

export namespace CloudSqlProperties {
  export type AsObject = {
    instanceId: string,
    database: string,
    type: CloudSqlProperties.DatabaseType,
  }

  export enum DatabaseType { 
    DATABASE_TYPE_UNSPECIFIED = 0,
    POSTGRES = 1,
    MYSQL = 2,
  }
}

export class CloudSqlCredential extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudSqlCredential.AsObject;
  static toObject(includeInstance: boolean, msg: CloudSqlCredential): CloudSqlCredential.AsObject;
  static serializeBinaryToWriter(message: CloudSqlCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudSqlCredential;
  static deserializeBinaryFromReader(message: CloudSqlCredential, reader: jspb.BinaryReader): CloudSqlCredential;
}

export namespace CloudSqlCredential {
  export type AsObject = {
    username: string,
    password: string,
  }
}

