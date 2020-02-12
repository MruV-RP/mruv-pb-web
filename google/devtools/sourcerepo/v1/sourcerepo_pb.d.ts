import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class Repo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getMirrorConfig(): MirrorConfig | undefined;
  setMirrorConfig(value?: MirrorConfig): void;
  hasMirrorConfig(): boolean;
  clearMirrorConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Repo.AsObject;
  static toObject(includeInstance: boolean, msg: Repo): Repo.AsObject;
  static serializeBinaryToWriter(message: Repo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Repo;
  static deserializeBinaryFromReader(message: Repo, reader: jspb.BinaryReader): Repo;
}

export namespace Repo {
  export type AsObject = {
    name: string,
    size: number,
    url: string,
    mirrorConfig?: MirrorConfig.AsObject,
  }
}

export class MirrorConfig extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getWebhookId(): string;
  setWebhookId(value: string): void;

  getDeployKeyId(): string;
  setDeployKeyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MirrorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MirrorConfig): MirrorConfig.AsObject;
  static serializeBinaryToWriter(message: MirrorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MirrorConfig;
  static deserializeBinaryFromReader(message: MirrorConfig, reader: jspb.BinaryReader): MirrorConfig;
}

export namespace MirrorConfig {
  export type AsObject = {
    url: string,
    webhookId: string,
    deployKeyId: string,
  }
}

export class GetRepoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRepoRequest): GetRepoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRepoRequest;
  static deserializeBinaryFromReader(message: GetRepoRequest, reader: jspb.BinaryReader): GetRepoRequest;
}

export namespace GetRepoRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListReposRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReposRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReposRequest): ListReposRequest.AsObject;
  static serializeBinaryToWriter(message: ListReposRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReposRequest;
  static deserializeBinaryFromReader(message: ListReposRequest, reader: jspb.BinaryReader): ListReposRequest;
}

export namespace ListReposRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReposResponse extends jspb.Message {
  getReposList(): Array<Repo>;
  setReposList(value: Array<Repo>): void;
  clearReposList(): void;
  addRepos(value?: Repo, index?: number): Repo;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReposResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReposResponse): ListReposResponse.AsObject;
  static serializeBinaryToWriter(message: ListReposResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReposResponse;
  static deserializeBinaryFromReader(message: ListReposResponse, reader: jspb.BinaryReader): ListReposResponse;
}

export namespace ListReposResponse {
  export type AsObject = {
    reposList: Array<Repo.AsObject>,
    nextPageToken: string,
  }
}

export class CreateRepoRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getRepo(): Repo | undefined;
  setRepo(value?: Repo): void;
  hasRepo(): boolean;
  clearRepo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRepoRequest): CreateRepoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRepoRequest;
  static deserializeBinaryFromReader(message: CreateRepoRequest, reader: jspb.BinaryReader): CreateRepoRequest;
}

export namespace CreateRepoRequest {
  export type AsObject = {
    parent: string,
    repo?: Repo.AsObject,
  }
}

export class DeleteRepoRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRepoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRepoRequest): DeleteRepoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRepoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRepoRequest;
  static deserializeBinaryFromReader(message: DeleteRepoRequest, reader: jspb.BinaryReader): DeleteRepoRequest;
}

export namespace DeleteRepoRequest {
  export type AsObject = {
    name: string,
  }
}

