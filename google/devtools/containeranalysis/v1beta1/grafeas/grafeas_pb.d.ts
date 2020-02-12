import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1beta1_attestation_attestation_pb from '../../../../../google/devtools/containeranalysis/v1beta1/attestation/attestation_pb';
import * as google_devtools_containeranalysis_v1beta1_build_build_pb from '../../../../../google/devtools/containeranalysis/v1beta1/build/build_pb';
import * as google_devtools_containeranalysis_v1beta1_common_common_pb from '../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb';
import * as google_devtools_containeranalysis_v1beta1_deployment_deployment_pb from '../../../../../google/devtools/containeranalysis/v1beta1/deployment/deployment_pb';
import * as google_devtools_containeranalysis_v1beta1_discovery_discovery_pb from '../../../../../google/devtools/containeranalysis/v1beta1/discovery/discovery_pb';
import * as google_devtools_containeranalysis_v1beta1_image_image_pb from '../../../../../google/devtools/containeranalysis/v1beta1/image/image_pb';
import * as google_devtools_containeranalysis_v1beta1_package_package_pb from '../../../../../google/devtools/containeranalysis/v1beta1/package/package_pb';
import * as google_devtools_containeranalysis_v1beta1_provenance_provenance_pb from '../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb';
import * as google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb from '../../../../../google/devtools/containeranalysis/v1beta1/vulnerability/vulnerability_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Occurrence extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getResource(): Resource | undefined;
  setResource(value?: Resource): void;
  hasResource(): boolean;
  clearResource(): void;

  getNoteName(): string;
  setNoteName(value: string): void;

  getKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind;
  setKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind): void;

  getRemediation(): string;
  setRemediation(value: string): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getVulnerability(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details | undefined;
  setVulnerability(value?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details): void;
  hasVulnerability(): boolean;
  clearVulnerability(): void;

  getBuild(): google_devtools_containeranalysis_v1beta1_build_build_pb.Details | undefined;
  setBuild(value?: google_devtools_containeranalysis_v1beta1_build_build_pb.Details): void;
  hasBuild(): boolean;
  clearBuild(): void;

  getDerivedImage(): google_devtools_containeranalysis_v1beta1_image_image_pb.Details | undefined;
  setDerivedImage(value?: google_devtools_containeranalysis_v1beta1_image_image_pb.Details): void;
  hasDerivedImage(): boolean;
  clearDerivedImage(): void;

  getInstallation(): google_devtools_containeranalysis_v1beta1_package_package_pb.Details | undefined;
  setInstallation(value?: google_devtools_containeranalysis_v1beta1_package_package_pb.Details): void;
  hasInstallation(): boolean;
  clearInstallation(): void;

  getDeployment(): google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details | undefined;
  setDeployment(value?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details): void;
  hasDeployment(): boolean;
  clearDeployment(): void;

  getDiscovered(): google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details | undefined;
  setDiscovered(value?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details): void;
  hasDiscovered(): boolean;
  clearDiscovered(): void;

  getAttestation(): google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details | undefined;
  setAttestation(value?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details): void;
  hasAttestation(): boolean;
  clearAttestation(): void;

  getDetailsCase(): Occurrence.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Occurrence.AsObject;
  static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
  static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Occurrence;
  static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
}

export namespace Occurrence {
  export type AsObject = {
    name: string,
    resource?: Resource.AsObject,
    noteName: string,
    kind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind,
    remediation: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    vulnerability?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details.AsObject,
    build?: google_devtools_containeranalysis_v1beta1_build_build_pb.Details.AsObject,
    derivedImage?: google_devtools_containeranalysis_v1beta1_image_image_pb.Details.AsObject,
    installation?: google_devtools_containeranalysis_v1beta1_package_package_pb.Details.AsObject,
    deployment?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details.AsObject,
    discovered?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details.AsObject,
    attestation?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details.AsObject,
  }

  export enum DetailsCase { 
    DETAILS_NOT_SET = 0,
    VULNERABILITY = 8,
    BUILD = 9,
    DERIVED_IMAGE = 10,
    INSTALLATION = 11,
    DEPLOYMENT = 12,
    DISCOVERED = 13,
    ATTESTATION = 14,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getContentHash(): google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash | undefined;
  setContentHash(value?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash): void;
  hasContentHash(): boolean;
  clearContentHash(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    name: string,
    uri: string,
    contentHash?: google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash.AsObject,
  }
}

export class Note extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getShortDescription(): string;
  setShortDescription(value: string): void;

  getLongDescription(): string;
  setLongDescription(value: string): void;

  getKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind;
  setKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind): void;

  getRelatedUrlList(): Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl>;
  setRelatedUrlList(value: Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl>): void;
  clearRelatedUrlList(): void;
  addRelatedUrl(value?: google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl, index?: number): google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl;

  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpirationTime(): boolean;
  clearExpirationTime(): void;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdateTime(): boolean;
  clearUpdateTime(): void;

  getRelatedNoteNamesList(): Array<string>;
  setRelatedNoteNamesList(value: Array<string>): void;
  clearRelatedNoteNamesList(): void;
  addRelatedNoteNames(value: string, index?: number): void;

  getVulnerability(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability | undefined;
  setVulnerability(value?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability): void;
  hasVulnerability(): boolean;
  clearVulnerability(): void;

  getBuild(): google_devtools_containeranalysis_v1beta1_build_build_pb.Build | undefined;
  setBuild(value?: google_devtools_containeranalysis_v1beta1_build_build_pb.Build): void;
  hasBuild(): boolean;
  clearBuild(): void;

  getBaseImage(): google_devtools_containeranalysis_v1beta1_image_image_pb.Basis | undefined;
  setBaseImage(value?: google_devtools_containeranalysis_v1beta1_image_image_pb.Basis): void;
  hasBaseImage(): boolean;
  clearBaseImage(): void;

  getPackage(): google_devtools_containeranalysis_v1beta1_package_package_pb.Package | undefined;
  setPackage(value?: google_devtools_containeranalysis_v1beta1_package_package_pb.Package): void;
  hasPackage(): boolean;
  clearPackage(): void;

  getDeployable(): google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable | undefined;
  setDeployable(value?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable): void;
  hasDeployable(): boolean;
  clearDeployable(): void;

  getDiscovery(): google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery | undefined;
  setDiscovery(value?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery): void;
  hasDiscovery(): boolean;
  clearDiscovery(): void;

  getAttestationAuthority(): google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority | undefined;
  setAttestationAuthority(value?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority): void;
  hasAttestationAuthority(): boolean;
  clearAttestationAuthority(): void;

  getTypeCase(): Note.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    name: string,
    shortDescription: string,
    longDescription: string,
    kind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind,
    relatedUrlList: Array<google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl.AsObject>,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    relatedNoteNamesList: Array<string>,
    vulnerability?: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability.AsObject,
    build?: google_devtools_containeranalysis_v1beta1_build_build_pb.Build.AsObject,
    baseImage?: google_devtools_containeranalysis_v1beta1_image_image_pb.Basis.AsObject,
    pb_package?: google_devtools_containeranalysis_v1beta1_package_package_pb.Package.AsObject,
    deployable?: google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable.AsObject,
    discovery?: google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery.AsObject,
    attestationAuthority?: google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    VULNERABILITY = 10,
    BUILD = 11,
    BASE_IMAGE = 12,
    PACKAGE = 13,
    DEPLOYABLE = 14,
    DISCOVERY = 15,
    ATTESTATION_AUTHORITY = 16,
  }
}

export class GetOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceRequest): GetOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceRequest, reader: jspb.BinaryReader): GetOccurrenceRequest;
}

export namespace GetOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListOccurrencesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesRequest): ListOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListOccurrencesRequest, reader: jspb.BinaryReader): ListOccurrencesRequest;
}

export namespace ListOccurrencesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  clearOccurrencesList(): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOccurrencesResponse): ListOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: ListOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListOccurrencesResponse, reader: jspb.BinaryReader): ListOccurrencesResponse;
}

export namespace ListOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOccurrenceRequest): DeleteOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOccurrenceRequest;
  static deserializeBinaryFromReader(message: DeleteOccurrenceRequest, reader: jspb.BinaryReader): DeleteOccurrenceRequest;
}

export namespace DeleteOccurrenceRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateOccurrenceRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): void;
  hasOccurrence(): boolean;
  clearOccurrence(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOccurrenceRequest): CreateOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOccurrenceRequest;
  static deserializeBinaryFromReader(message: CreateOccurrenceRequest, reader: jspb.BinaryReader): CreateOccurrenceRequest;
}

export namespace CreateOccurrenceRequest {
  export type AsObject = {
    parent: string,
    occurrence?: Occurrence.AsObject,
  }
}

export class UpdateOccurrenceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOccurrence(): Occurrence | undefined;
  setOccurrence(value?: Occurrence): void;
  hasOccurrence(): boolean;
  clearOccurrence(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOccurrenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOccurrenceRequest): UpdateOccurrenceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOccurrenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOccurrenceRequest;
  static deserializeBinaryFromReader(message: UpdateOccurrenceRequest, reader: jspb.BinaryReader): UpdateOccurrenceRequest;
}

export namespace UpdateOccurrenceRequest {
  export type AsObject = {
    name: string,
    occurrence?: Occurrence.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoteRequest): GetNoteRequest.AsObject;
  static serializeBinaryToWriter(message: GetNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoteRequest;
  static deserializeBinaryFromReader(message: GetNoteRequest, reader: jspb.BinaryReader): GetNoteRequest;
}

export namespace GetNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetOccurrenceNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOccurrenceNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOccurrenceNoteRequest): GetOccurrenceNoteRequest.AsObject;
  static serializeBinaryToWriter(message: GetOccurrenceNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOccurrenceNoteRequest;
  static deserializeBinaryFromReader(message: GetOccurrenceNoteRequest, reader: jspb.BinaryReader): GetOccurrenceNoteRequest;
}

export namespace GetOccurrenceNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListNotesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesRequest): ListNotesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesRequest;
  static deserializeBinaryFromReader(message: ListNotesRequest, reader: jspb.BinaryReader): ListNotesRequest;
}

export namespace ListNotesRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotesResponse extends jspb.Message {
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): void;
  clearNotesList(): void;
  addNotes(value?: Note, index?: number): Note;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotesResponse): ListNotesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotesResponse;
  static deserializeBinaryFromReader(message: ListNotesResponse, reader: jspb.BinaryReader): ListNotesResponse;
}

export namespace ListNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNoteRequest): DeleteNoteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNoteRequest;
  static deserializeBinaryFromReader(message: DeleteNoteRequest, reader: jspb.BinaryReader): DeleteNoteRequest;
}

export namespace DeleteNoteRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateNoteRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getNoteId(): string;
  setNoteId(value: string): void;

  getNote(): Note | undefined;
  setNote(value?: Note): void;
  hasNote(): boolean;
  clearNote(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNoteRequest): CreateNoteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNoteRequest;
  static deserializeBinaryFromReader(message: CreateNoteRequest, reader: jspb.BinaryReader): CreateNoteRequest;
}

export namespace CreateNoteRequest {
  export type AsObject = {
    parent: string,
    noteId: string,
    note?: Note.AsObject,
  }
}

export class UpdateNoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNote(): Note | undefined;
  setNote(value?: Note): void;
  hasNote(): boolean;
  clearNote(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNoteRequest): UpdateNoteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNoteRequest;
  static deserializeBinaryFromReader(message: UpdateNoteRequest, reader: jspb.BinaryReader): UpdateNoteRequest;
}

export namespace UpdateNoteRequest {
  export type AsObject = {
    name: string,
    note?: Note.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListNoteOccurrencesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesRequest): ListNoteOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: ListNoteOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesRequest;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesRequest, reader: jspb.BinaryReader): ListNoteOccurrencesRequest;
}

export namespace ListNoteOccurrencesRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNoteOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  clearOccurrencesList(): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNoteOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNoteOccurrencesResponse): ListNoteOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: ListNoteOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNoteOccurrencesResponse;
  static deserializeBinaryFromReader(message: ListNoteOccurrencesResponse, reader: jspb.BinaryReader): ListNoteOccurrencesResponse;
}

export namespace ListNoteOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
    nextPageToken: string,
  }
}

export class BatchCreateNotesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getNotesMap(): jspb.Map<string, Note>;
  clearNotesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateNotesRequest): BatchCreateNotesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateNotesRequest;
  static deserializeBinaryFromReader(message: BatchCreateNotesRequest, reader: jspb.BinaryReader): BatchCreateNotesRequest;
}

export namespace BatchCreateNotesRequest {
  export type AsObject = {
    parent: string,
    notesMap: Array<[string, Note.AsObject]>,
  }
}

export class BatchCreateNotesResponse extends jspb.Message {
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): void;
  clearNotesList(): void;
  addNotes(value?: Note, index?: number): Note;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateNotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateNotesResponse): BatchCreateNotesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateNotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateNotesResponse;
  static deserializeBinaryFromReader(message: BatchCreateNotesResponse, reader: jspb.BinaryReader): BatchCreateNotesResponse;
}

export namespace BatchCreateNotesResponse {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
  }
}

export class BatchCreateOccurrencesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  clearOccurrencesList(): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateOccurrencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateOccurrencesRequest): BatchCreateOccurrencesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateOccurrencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateOccurrencesRequest;
  static deserializeBinaryFromReader(message: BatchCreateOccurrencesRequest, reader: jspb.BinaryReader): BatchCreateOccurrencesRequest;
}

export namespace BatchCreateOccurrencesRequest {
  export type AsObject = {
    parent: string,
    occurrencesList: Array<Occurrence.AsObject>,
  }
}

export class BatchCreateOccurrencesResponse extends jspb.Message {
  getOccurrencesList(): Array<Occurrence>;
  setOccurrencesList(value: Array<Occurrence>): void;
  clearOccurrencesList(): void;
  addOccurrences(value?: Occurrence, index?: number): Occurrence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateOccurrencesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateOccurrencesResponse): BatchCreateOccurrencesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateOccurrencesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateOccurrencesResponse;
  static deserializeBinaryFromReader(message: BatchCreateOccurrencesResponse, reader: jspb.BinaryReader): BatchCreateOccurrencesResponse;
}

export namespace BatchCreateOccurrencesResponse {
  export type AsObject = {
    occurrencesList: Array<Occurrence.AsObject>,
  }
}

export class GetVulnerabilityOccurrencesSummaryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVulnerabilityOccurrencesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVulnerabilityOccurrencesSummaryRequest): GetVulnerabilityOccurrencesSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetVulnerabilityOccurrencesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVulnerabilityOccurrencesSummaryRequest;
  static deserializeBinaryFromReader(message: GetVulnerabilityOccurrencesSummaryRequest, reader: jspb.BinaryReader): GetVulnerabilityOccurrencesSummaryRequest;
}

export namespace GetVulnerabilityOccurrencesSummaryRequest {
  export type AsObject = {
    parent: string,
    filter: string,
  }
}

export class VulnerabilityOccurrencesSummary extends jspb.Message {
  getCountsList(): Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest>;
  setCountsList(value: Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest>): void;
  clearCountsList(): void;
  addCounts(value?: VulnerabilityOccurrencesSummary.FixableTotalByDigest, index?: number): VulnerabilityOccurrencesSummary.FixableTotalByDigest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VulnerabilityOccurrencesSummary.AsObject;
  static toObject(includeInstance: boolean, msg: VulnerabilityOccurrencesSummary): VulnerabilityOccurrencesSummary.AsObject;
  static serializeBinaryToWriter(message: VulnerabilityOccurrencesSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VulnerabilityOccurrencesSummary;
  static deserializeBinaryFromReader(message: VulnerabilityOccurrencesSummary, reader: jspb.BinaryReader): VulnerabilityOccurrencesSummary;
}

export namespace VulnerabilityOccurrencesSummary {
  export type AsObject = {
    countsList: Array<VulnerabilityOccurrencesSummary.FixableTotalByDigest.AsObject>,
  }

  export class FixableTotalByDigest extends jspb.Message {
    getResource(): Resource | undefined;
    setResource(value?: Resource): void;
    hasResource(): boolean;
    clearResource(): void;

    getSeverity(): google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity;
    setSeverity(value: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity): void;

    getFixableCount(): number;
    setFixableCount(value: number): void;

    getTotalCount(): number;
    setTotalCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FixableTotalByDigest.AsObject;
    static toObject(includeInstance: boolean, msg: FixableTotalByDigest): FixableTotalByDigest.AsObject;
    static serializeBinaryToWriter(message: FixableTotalByDigest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FixableTotalByDigest;
    static deserializeBinaryFromReader(message: FixableTotalByDigest, reader: jspb.BinaryReader): FixableTotalByDigest;
  }

  export namespace FixableTotalByDigest {
    export type AsObject = {
      resource?: Resource.AsObject,
      severity: google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Severity,
      fixableCount: number,
      totalCount: number,
    }
  }

}

