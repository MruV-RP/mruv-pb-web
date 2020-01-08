import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_datacatalog_v1beta1_timestamps_pb from '../../../../google/cloud/datacatalog/v1beta1/timestamps_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class Taxonomy extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getActivatedPolicyTypesList(): Array<Taxonomy.PolicyType>;
  setActivatedPolicyTypesList(value: Array<Taxonomy.PolicyType>): void;
  clearActivatedPolicyTypesList(): void;
  addActivatedPolicyTypes(value: Taxonomy.PolicyType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Taxonomy.AsObject;
  static toObject(includeInstance: boolean, msg: Taxonomy): Taxonomy.AsObject;
  static serializeBinaryToWriter(message: Taxonomy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Taxonomy;
  static deserializeBinaryFromReader(message: Taxonomy, reader: jspb.BinaryReader): Taxonomy;
}

export namespace Taxonomy {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    activatedPolicyTypesList: Array<Taxonomy.PolicyType>,
  }

  export enum PolicyType { 
    POLICY_TYPE_UNSPECIFIED = 0,
    FINE_GRAINED_ACCESS_CONTROL = 1,
  }
}

export class PolicyTag extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParentPolicyTag(): string;
  setParentPolicyTag(value: string): void;

  getChildPolicyTagsList(): Array<string>;
  setChildPolicyTagsList(value: Array<string>): void;
  clearChildPolicyTagsList(): void;
  addChildPolicyTags(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTag.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTag): PolicyTag.AsObject;
  static serializeBinaryToWriter(message: PolicyTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTag;
  static deserializeBinaryFromReader(message: PolicyTag, reader: jspb.BinaryReader): PolicyTag;
}

export namespace PolicyTag {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    parentPolicyTag: string,
    childPolicyTagsList: Array<string>,
  }
}

export class CreateTaxonomyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTaxonomy(): Taxonomy | undefined;
  setTaxonomy(value?: Taxonomy): void;
  hasTaxonomy(): boolean;
  clearTaxonomy(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaxonomyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaxonomyRequest): CreateTaxonomyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaxonomyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaxonomyRequest;
  static deserializeBinaryFromReader(message: CreateTaxonomyRequest, reader: jspb.BinaryReader): CreateTaxonomyRequest;
}

export namespace CreateTaxonomyRequest {
  export type AsObject = {
    parent: string,
    taxonomy?: Taxonomy.AsObject,
  }
}

export class DeleteTaxonomyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaxonomyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaxonomyRequest): DeleteTaxonomyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaxonomyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaxonomyRequest;
  static deserializeBinaryFromReader(message: DeleteTaxonomyRequest, reader: jspb.BinaryReader): DeleteTaxonomyRequest;
}

export namespace DeleteTaxonomyRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateTaxonomyRequest extends jspb.Message {
  getTaxonomy(): Taxonomy | undefined;
  setTaxonomy(value?: Taxonomy): void;
  hasTaxonomy(): boolean;
  clearTaxonomy(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaxonomyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaxonomyRequest): UpdateTaxonomyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaxonomyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaxonomyRequest;
  static deserializeBinaryFromReader(message: UpdateTaxonomyRequest, reader: jspb.BinaryReader): UpdateTaxonomyRequest;
}

export namespace UpdateTaxonomyRequest {
  export type AsObject = {
    taxonomy?: Taxonomy.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListTaxonomiesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaxonomiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaxonomiesRequest): ListTaxonomiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListTaxonomiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaxonomiesRequest;
  static deserializeBinaryFromReader(message: ListTaxonomiesRequest, reader: jspb.BinaryReader): ListTaxonomiesRequest;
}

export namespace ListTaxonomiesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTaxonomiesResponse extends jspb.Message {
  getTaxonomiesList(): Array<Taxonomy>;
  setTaxonomiesList(value: Array<Taxonomy>): void;
  clearTaxonomiesList(): void;
  addTaxonomies(value?: Taxonomy, index?: number): Taxonomy;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaxonomiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaxonomiesResponse): ListTaxonomiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListTaxonomiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaxonomiesResponse;
  static deserializeBinaryFromReader(message: ListTaxonomiesResponse, reader: jspb.BinaryReader): ListTaxonomiesResponse;
}

export namespace ListTaxonomiesResponse {
  export type AsObject = {
    taxonomiesList: Array<Taxonomy.AsObject>,
    nextPageToken: string,
  }
}

export class GetTaxonomyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaxonomyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaxonomyRequest): GetTaxonomyRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaxonomyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaxonomyRequest;
  static deserializeBinaryFromReader(message: GetTaxonomyRequest, reader: jspb.BinaryReader): GetTaxonomyRequest;
}

export namespace GetTaxonomyRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreatePolicyTagRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPolicyTag(): PolicyTag | undefined;
  setPolicyTag(value?: PolicyTag): void;
  hasPolicyTag(): boolean;
  clearPolicyTag(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePolicyTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePolicyTagRequest): CreatePolicyTagRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePolicyTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePolicyTagRequest;
  static deserializeBinaryFromReader(message: CreatePolicyTagRequest, reader: jspb.BinaryReader): CreatePolicyTagRequest;
}

export namespace CreatePolicyTagRequest {
  export type AsObject = {
    parent: string,
    policyTag?: PolicyTag.AsObject,
  }
}

export class DeletePolicyTagRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePolicyTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePolicyTagRequest): DeletePolicyTagRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePolicyTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePolicyTagRequest;
  static deserializeBinaryFromReader(message: DeletePolicyTagRequest, reader: jspb.BinaryReader): DeletePolicyTagRequest;
}

export namespace DeletePolicyTagRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdatePolicyTagRequest extends jspb.Message {
  getPolicyTag(): PolicyTag | undefined;
  setPolicyTag(value?: PolicyTag): void;
  hasPolicyTag(): boolean;
  clearPolicyTag(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePolicyTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePolicyTagRequest): UpdatePolicyTagRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePolicyTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyTagRequest;
  static deserializeBinaryFromReader(message: UpdatePolicyTagRequest, reader: jspb.BinaryReader): UpdatePolicyTagRequest;
}

export namespace UpdatePolicyTagRequest {
  export type AsObject = {
    policyTag?: PolicyTag.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListPolicyTagsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPolicyTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPolicyTagsRequest): ListPolicyTagsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPolicyTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPolicyTagsRequest;
  static deserializeBinaryFromReader(message: ListPolicyTagsRequest, reader: jspb.BinaryReader): ListPolicyTagsRequest;
}

export namespace ListPolicyTagsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPolicyTagsResponse extends jspb.Message {
  getPolicyTagsList(): Array<PolicyTag>;
  setPolicyTagsList(value: Array<PolicyTag>): void;
  clearPolicyTagsList(): void;
  addPolicyTags(value?: PolicyTag, index?: number): PolicyTag;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPolicyTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPolicyTagsResponse): ListPolicyTagsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPolicyTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPolicyTagsResponse;
  static deserializeBinaryFromReader(message: ListPolicyTagsResponse, reader: jspb.BinaryReader): ListPolicyTagsResponse;
}

export namespace ListPolicyTagsResponse {
  export type AsObject = {
    policyTagsList: Array<PolicyTag.AsObject>,
    nextPageToken: string,
  }
}

export class GetPolicyTagRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyTagRequest): GetPolicyTagRequest.AsObject;
  static serializeBinaryToWriter(message: GetPolicyTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyTagRequest;
  static deserializeBinaryFromReader(message: GetPolicyTagRequest, reader: jspb.BinaryReader): GetPolicyTagRequest;
}

export namespace GetPolicyTagRequest {
  export type AsObject = {
    name: string,
  }
}

