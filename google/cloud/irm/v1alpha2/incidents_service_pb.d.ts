import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_cloud_irm_v1alpha2_incidents_pb from '../../../../google/cloud/irm/v1alpha2/incidents_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class CreateIncidentRequest extends jspb.Message {
  getIncident(): google_cloud_irm_v1alpha2_incidents_pb.Incident | undefined;
  setIncident(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident): void;
  hasIncident(): boolean;
  clearIncident(): void;

  getParent(): string;
  setParent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIncidentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIncidentRequest): CreateIncidentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIncidentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIncidentRequest;
  static deserializeBinaryFromReader(message: CreateIncidentRequest, reader: jspb.BinaryReader): CreateIncidentRequest;
}

export namespace CreateIncidentRequest {
  export type AsObject = {
    incident?: google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject,
    parent: string,
  }
}

export class GetIncidentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIncidentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIncidentRequest): GetIncidentRequest.AsObject;
  static serializeBinaryToWriter(message: GetIncidentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIncidentRequest;
  static deserializeBinaryFromReader(message: GetIncidentRequest, reader: jspb.BinaryReader): GetIncidentRequest;
}

export namespace GetIncidentRequest {
  export type AsObject = {
    name: string,
  }
}

export class UpdateIncidentRequest extends jspb.Message {
  getIncident(): google_cloud_irm_v1alpha2_incidents_pb.Incident | undefined;
  setIncident(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident): void;
  hasIncident(): boolean;
  clearIncident(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIncidentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIncidentRequest): UpdateIncidentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateIncidentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIncidentRequest;
  static deserializeBinaryFromReader(message: UpdateIncidentRequest, reader: jspb.BinaryReader): UpdateIncidentRequest;
}

export namespace UpdateIncidentRequest {
  export type AsObject = {
    incident?: google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SearchSimilarIncidentsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSimilarIncidentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSimilarIncidentsRequest): SearchSimilarIncidentsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchSimilarIncidentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSimilarIncidentsRequest;
  static deserializeBinaryFromReader(message: SearchSimilarIncidentsRequest, reader: jspb.BinaryReader): SearchSimilarIncidentsRequest;
}

export namespace SearchSimilarIncidentsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchSimilarIncidentsResponse extends jspb.Message {
  getResultsList(): Array<SearchSimilarIncidentsResponse.Result>;
  setResultsList(value: Array<SearchSimilarIncidentsResponse.Result>): void;
  clearResultsList(): void;
  addResults(value?: SearchSimilarIncidentsResponse.Result, index?: number): SearchSimilarIncidentsResponse.Result;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSimilarIncidentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSimilarIncidentsResponse): SearchSimilarIncidentsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchSimilarIncidentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSimilarIncidentsResponse;
  static deserializeBinaryFromReader(message: SearchSimilarIncidentsResponse, reader: jspb.BinaryReader): SearchSimilarIncidentsResponse;
}

export namespace SearchSimilarIncidentsResponse {
  export type AsObject = {
    resultsList: Array<SearchSimilarIncidentsResponse.Result.AsObject>,
    nextPageToken: string,
  }

  export class Result extends jspb.Message {
    getIncident(): google_cloud_irm_v1alpha2_incidents_pb.Incident | undefined;
    setIncident(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident): void;
    hasIncident(): boolean;
    clearIncident(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      incident?: google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject,
    }
  }

}

export class CreateAnnotationRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAnnotation(): google_cloud_irm_v1alpha2_incidents_pb.Annotation | undefined;
  setAnnotation(value?: google_cloud_irm_v1alpha2_incidents_pb.Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnnotationRequest): CreateAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnnotationRequest;
  static deserializeBinaryFromReader(message: CreateAnnotationRequest, reader: jspb.BinaryReader): CreateAnnotationRequest;
}

export namespace CreateAnnotationRequest {
  export type AsObject = {
    parent: string,
    annotation?: google_cloud_irm_v1alpha2_incidents_pb.Annotation.AsObject,
  }
}

export class ListAnnotationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationsRequest): ListAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationsRequest;
  static deserializeBinaryFromReader(message: ListAnnotationsRequest, reader: jspb.BinaryReader): ListAnnotationsRequest;
}

export namespace ListAnnotationsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAnnotationsResponse extends jspb.Message {
  getAnnotationsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Annotation>;
  setAnnotationsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Annotation>): void;
  clearAnnotationsList(): void;
  addAnnotations(value?: google_cloud_irm_v1alpha2_incidents_pb.Annotation, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Annotation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAnnotationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAnnotationsResponse): ListAnnotationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAnnotationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAnnotationsResponse;
  static deserializeBinaryFromReader(message: ListAnnotationsResponse, reader: jspb.BinaryReader): ListAnnotationsResponse;
}

export namespace ListAnnotationsResponse {
  export type AsObject = {
    annotationsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Annotation.AsObject>,
    nextPageToken: string,
  }
}

export class CreateTagRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getTag(): google_cloud_irm_v1alpha2_incidents_pb.Tag | undefined;
  setTag(value?: google_cloud_irm_v1alpha2_incidents_pb.Tag): void;
  hasTag(): boolean;
  clearTag(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagRequest): CreateTagRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagRequest;
  static deserializeBinaryFromReader(message: CreateTagRequest, reader: jspb.BinaryReader): CreateTagRequest;
}

export namespace CreateTagRequest {
  export type AsObject = {
    parent: string,
    tag?: google_cloud_irm_v1alpha2_incidents_pb.Tag.AsObject,
  }
}

export class DeleteTagRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagRequest): DeleteTagRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagRequest;
  static deserializeBinaryFromReader(message: DeleteTagRequest, reader: jspb.BinaryReader): DeleteTagRequest;
}

export namespace DeleteTagRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListTagsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagsRequest): ListTagsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagsRequest;
  static deserializeBinaryFromReader(message: ListTagsRequest, reader: jspb.BinaryReader): ListTagsRequest;
}

export namespace ListTagsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTagsResponse extends jspb.Message {
  getTagsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>;
  setTagsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>): void;
  clearTagsList(): void;
  addTags(value?: google_cloud_irm_v1alpha2_incidents_pb.Tag, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Tag;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagsResponse): ListTagsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagsResponse;
  static deserializeBinaryFromReader(message: ListTagsResponse, reader: jspb.BinaryReader): ListTagsResponse;
}

export namespace ListTagsResponse {
  export type AsObject = {
    tagsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag.AsObject>,
    nextPageToken: string,
  }
}

export class CreateSignalRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getSignal(): google_cloud_irm_v1alpha2_incidents_pb.Signal | undefined;
  setSignal(value?: google_cloud_irm_v1alpha2_incidents_pb.Signal): void;
  hasSignal(): boolean;
  clearSignal(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSignalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSignalRequest): CreateSignalRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSignalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSignalRequest;
  static deserializeBinaryFromReader(message: CreateSignalRequest, reader: jspb.BinaryReader): CreateSignalRequest;
}

export namespace CreateSignalRequest {
  export type AsObject = {
    parent: string,
    signal?: google_cloud_irm_v1alpha2_incidents_pb.Signal.AsObject,
  }
}

export class SearchSignalsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSignalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSignalsRequest): SearchSignalsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchSignalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSignalsRequest;
  static deserializeBinaryFromReader(message: SearchSignalsRequest, reader: jspb.BinaryReader): SearchSignalsRequest;
}

export namespace SearchSignalsRequest {
  export type AsObject = {
    parent: string,
    query: string,
    pageSize: number,
    pageToken: string,
  }
}

export class SearchSignalsResponse extends jspb.Message {
  getSignalsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Signal>;
  setSignalsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Signal>): void;
  clearSignalsList(): void;
  addSignals(value?: google_cloud_irm_v1alpha2_incidents_pb.Signal, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Signal;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchSignalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchSignalsResponse): SearchSignalsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchSignalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchSignalsResponse;
  static deserializeBinaryFromReader(message: SearchSignalsResponse, reader: jspb.BinaryReader): SearchSignalsResponse;
}

export namespace SearchSignalsResponse {
  export type AsObject = {
    signalsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Signal.AsObject>,
    nextPageToken: string,
  }
}

export class GetSignalRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSignalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSignalRequest): GetSignalRequest.AsObject;
  static serializeBinaryToWriter(message: GetSignalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSignalRequest;
  static deserializeBinaryFromReader(message: GetSignalRequest, reader: jspb.BinaryReader): GetSignalRequest;
}

export namespace GetSignalRequest {
  export type AsObject = {
    name: string,
  }
}

export class LookupSignalRequest extends jspb.Message {
  getCsccFinding(): string;
  setCsccFinding(value: string): void;

  getStackdriverNotificationId(): string;
  setStackdriverNotificationId(value: string): void;

  getAlternateIdCase(): LookupSignalRequest.AlternateIdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupSignalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupSignalRequest): LookupSignalRequest.AsObject;
  static serializeBinaryToWriter(message: LookupSignalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupSignalRequest;
  static deserializeBinaryFromReader(message: LookupSignalRequest, reader: jspb.BinaryReader): LookupSignalRequest;
}

export namespace LookupSignalRequest {
  export type AsObject = {
    csccFinding: string,
    stackdriverNotificationId: string,
  }

  export enum AlternateIdCase { 
    ALTERNATE_ID_NOT_SET = 0,
    CSCC_FINDING = 2,
    STACKDRIVER_NOTIFICATION_ID = 3,
  }
}

export class UpdateSignalRequest extends jspb.Message {
  getSignal(): google_cloud_irm_v1alpha2_incidents_pb.Signal | undefined;
  setSignal(value?: google_cloud_irm_v1alpha2_incidents_pb.Signal): void;
  hasSignal(): boolean;
  clearSignal(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSignalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSignalRequest): UpdateSignalRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSignalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSignalRequest;
  static deserializeBinaryFromReader(message: UpdateSignalRequest, reader: jspb.BinaryReader): UpdateSignalRequest;
}

export namespace UpdateSignalRequest {
  export type AsObject = {
    signal?: google_cloud_irm_v1alpha2_incidents_pb.Signal.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class SearchIncidentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchIncidentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchIncidentsRequest): SearchIncidentsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchIncidentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchIncidentsRequest;
  static deserializeBinaryFromReader(message: SearchIncidentsRequest, reader: jspb.BinaryReader): SearchIncidentsRequest;
}

export namespace SearchIncidentsRequest {
  export type AsObject = {
    parent: string,
    query: string,
    pageSize: number,
    pageToken: string,
    timeZone: string,
  }
}

export class SearchIncidentsResponse extends jspb.Message {
  getIncidentsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Incident>;
  setIncidentsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Incident>): void;
  clearIncidentsList(): void;
  addIncidents(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Incident;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchIncidentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchIncidentsResponse): SearchIncidentsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchIncidentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchIncidentsResponse;
  static deserializeBinaryFromReader(message: SearchIncidentsResponse, reader: jspb.BinaryReader): SearchIncidentsResponse;
}

export namespace SearchIncidentsResponse {
  export type AsObject = {
    incidentsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject>,
    nextPageToken: string,
  }
}

export class EscalateIncidentRequest extends jspb.Message {
  getIncident(): google_cloud_irm_v1alpha2_incidents_pb.Incident | undefined;
  setIncident(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident): void;
  hasIncident(): boolean;
  clearIncident(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getSubscriptionsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>;
  setSubscriptionsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>): void;
  clearSubscriptionsList(): void;
  addSubscriptions(value?: google_cloud_irm_v1alpha2_incidents_pb.Subscription, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Subscription;

  getTagsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>;
  setTagsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>): void;
  clearTagsList(): void;
  addTags(value?: google_cloud_irm_v1alpha2_incidents_pb.Tag, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Tag;

  getRolesList(): Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment>;
  setRolesList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment>): void;
  clearRolesList(): void;
  addRoles(value?: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment, index?: number): google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment;

  getArtifactsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>;
  setArtifactsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>): void;
  clearArtifactsList(): void;
  addArtifacts(value?: google_cloud_irm_v1alpha2_incidents_pb.Artifact, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscalateIncidentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EscalateIncidentRequest): EscalateIncidentRequest.AsObject;
  static serializeBinaryToWriter(message: EscalateIncidentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscalateIncidentRequest;
  static deserializeBinaryFromReader(message: EscalateIncidentRequest, reader: jspb.BinaryReader): EscalateIncidentRequest;
}

export namespace EscalateIncidentRequest {
  export type AsObject = {
    incident?: google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    subscriptionsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription.AsObject>,
    tagsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag.AsObject>,
    rolesList: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.AsObject>,
    artifactsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact.AsObject>,
  }
}

export class EscalateIncidentResponse extends jspb.Message {
  getIncident(): google_cloud_irm_v1alpha2_incidents_pb.Incident | undefined;
  setIncident(value?: google_cloud_irm_v1alpha2_incidents_pb.Incident): void;
  hasIncident(): boolean;
  clearIncident(): void;

  getSubscriptionsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>;
  setSubscriptionsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>): void;
  clearSubscriptionsList(): void;
  addSubscriptions(value?: google_cloud_irm_v1alpha2_incidents_pb.Subscription, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Subscription;

  getTagsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>;
  setTagsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag>): void;
  clearTagsList(): void;
  addTags(value?: google_cloud_irm_v1alpha2_incidents_pb.Tag, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Tag;

  getRolesList(): Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRole>;
  setRolesList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRole>): void;
  clearRolesList(): void;
  addRoles(value?: google_cloud_irm_v1alpha2_incidents_pb.IncidentRole, index?: number): google_cloud_irm_v1alpha2_incidents_pb.IncidentRole;

  getArtifactsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>;
  setArtifactsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>): void;
  clearArtifactsList(): void;
  addArtifacts(value?: google_cloud_irm_v1alpha2_incidents_pb.Artifact, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscalateIncidentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EscalateIncidentResponse): EscalateIncidentResponse.AsObject;
  static serializeBinaryToWriter(message: EscalateIncidentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscalateIncidentResponse;
  static deserializeBinaryFromReader(message: EscalateIncidentResponse, reader: jspb.BinaryReader): EscalateIncidentResponse;
}

export namespace EscalateIncidentResponse {
  export type AsObject = {
    incident?: google_cloud_irm_v1alpha2_incidents_pb.Incident.AsObject,
    subscriptionsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription.AsObject>,
    tagsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Tag.AsObject>,
    rolesList: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRole.AsObject>,
    artifactsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact.AsObject>,
  }
}

export class CreateArtifactRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getArtifact(): google_cloud_irm_v1alpha2_incidents_pb.Artifact | undefined;
  setArtifact(value?: google_cloud_irm_v1alpha2_incidents_pb.Artifact): void;
  hasArtifact(): boolean;
  clearArtifact(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateArtifactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateArtifactRequest): CreateArtifactRequest.AsObject;
  static serializeBinaryToWriter(message: CreateArtifactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateArtifactRequest;
  static deserializeBinaryFromReader(message: CreateArtifactRequest, reader: jspb.BinaryReader): CreateArtifactRequest;
}

export namespace CreateArtifactRequest {
  export type AsObject = {
    parent: string,
    artifact?: google_cloud_irm_v1alpha2_incidents_pb.Artifact.AsObject,
  }
}

export class ListArtifactsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtifactsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtifactsRequest): ListArtifactsRequest.AsObject;
  static serializeBinaryToWriter(message: ListArtifactsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtifactsRequest;
  static deserializeBinaryFromReader(message: ListArtifactsRequest, reader: jspb.BinaryReader): ListArtifactsRequest;
}

export namespace ListArtifactsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListArtifactsResponse extends jspb.Message {
  getArtifactsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>;
  setArtifactsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact>): void;
  clearArtifactsList(): void;
  addArtifacts(value?: google_cloud_irm_v1alpha2_incidents_pb.Artifact, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Artifact;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListArtifactsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListArtifactsResponse): ListArtifactsResponse.AsObject;
  static serializeBinaryToWriter(message: ListArtifactsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListArtifactsResponse;
  static deserializeBinaryFromReader(message: ListArtifactsResponse, reader: jspb.BinaryReader): ListArtifactsResponse;
}

export namespace ListArtifactsResponse {
  export type AsObject = {
    artifactsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Artifact.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateArtifactRequest extends jspb.Message {
  getArtifact(): google_cloud_irm_v1alpha2_incidents_pb.Artifact | undefined;
  setArtifact(value?: google_cloud_irm_v1alpha2_incidents_pb.Artifact): void;
  hasArtifact(): boolean;
  clearArtifact(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateArtifactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateArtifactRequest): UpdateArtifactRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateArtifactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateArtifactRequest;
  static deserializeBinaryFromReader(message: UpdateArtifactRequest, reader: jspb.BinaryReader): UpdateArtifactRequest;
}

export namespace UpdateArtifactRequest {
  export type AsObject = {
    artifact?: google_cloud_irm_v1alpha2_incidents_pb.Artifact.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteArtifactRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteArtifactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteArtifactRequest): DeleteArtifactRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteArtifactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteArtifactRequest;
  static deserializeBinaryFromReader(message: DeleteArtifactRequest, reader: jspb.BinaryReader): DeleteArtifactRequest;
}

export namespace DeleteArtifactRequest {
  export type AsObject = {
    name: string,
  }
}

export class SendShiftHandoffRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): void;
  clearRecipientsList(): void;
  addRecipients(value: string, index?: number): void;

  getCcList(): Array<string>;
  setCcList(value: Array<string>): void;
  clearCcList(): void;
  addCc(value: string, index?: number): void;

  getSubject(): string;
  setSubject(value: string): void;

  getNotesContentType(): string;
  setNotesContentType(value: string): void;

  getNotesContent(): string;
  setNotesContent(value: string): void;

  getIncidentsList(): Array<SendShiftHandoffRequest.Incident>;
  setIncidentsList(value: Array<SendShiftHandoffRequest.Incident>): void;
  clearIncidentsList(): void;
  addIncidents(value?: SendShiftHandoffRequest.Incident, index?: number): SendShiftHandoffRequest.Incident;

  getPreviewOnly(): boolean;
  setPreviewOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendShiftHandoffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendShiftHandoffRequest): SendShiftHandoffRequest.AsObject;
  static serializeBinaryToWriter(message: SendShiftHandoffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendShiftHandoffRequest;
  static deserializeBinaryFromReader(message: SendShiftHandoffRequest, reader: jspb.BinaryReader): SendShiftHandoffRequest;
}

export namespace SendShiftHandoffRequest {
  export type AsObject = {
    parent: string,
    recipientsList: Array<string>,
    ccList: Array<string>,
    subject: string,
    notesContentType: string,
    notesContent: string,
    incidentsList: Array<SendShiftHandoffRequest.Incident.AsObject>,
    previewOnly: boolean,
  }

  export class Incident extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Incident.AsObject;
    static toObject(includeInstance: boolean, msg: Incident): Incident.AsObject;
    static serializeBinaryToWriter(message: Incident, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Incident;
    static deserializeBinaryFromReader(message: Incident, reader: jspb.BinaryReader): Incident;
  }

  export namespace Incident {
    export type AsObject = {
      name: string,
    }
  }

}

export class SendShiftHandoffResponse extends jspb.Message {
  getContentType(): string;
  setContentType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendShiftHandoffResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendShiftHandoffResponse): SendShiftHandoffResponse.AsObject;
  static serializeBinaryToWriter(message: SendShiftHandoffResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendShiftHandoffResponse;
  static deserializeBinaryFromReader(message: SendShiftHandoffResponse, reader: jspb.BinaryReader): SendShiftHandoffResponse;
}

export namespace SendShiftHandoffResponse {
  export type AsObject = {
    contentType: string,
    content: string,
  }
}

export class CreateSubscriptionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getSubscription(): google_cloud_irm_v1alpha2_incidents_pb.Subscription | undefined;
  setSubscription(value?: google_cloud_irm_v1alpha2_incidents_pb.Subscription): void;
  hasSubscription(): boolean;
  clearSubscription(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSubscriptionRequest): CreateSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSubscriptionRequest;
  static deserializeBinaryFromReader(message: CreateSubscriptionRequest, reader: jspb.BinaryReader): CreateSubscriptionRequest;
}

export namespace CreateSubscriptionRequest {
  export type AsObject = {
    parent: string,
    subscription?: google_cloud_irm_v1alpha2_incidents_pb.Subscription.AsObject,
  }
}

export class UpdateSubscriptionRequest extends jspb.Message {
  getSubscription(): google_cloud_irm_v1alpha2_incidents_pb.Subscription | undefined;
  setSubscription(value?: google_cloud_irm_v1alpha2_incidents_pb.Subscription): void;
  hasSubscription(): boolean;
  clearSubscription(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionRequest, reader: jspb.BinaryReader): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    subscription?: google_cloud_irm_v1alpha2_incidents_pb.Subscription.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListSubscriptionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsRequest): ListSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListSubscriptionsRequest, reader: jspb.BinaryReader): ListSubscriptionsRequest;
}

export namespace ListSubscriptionsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSubscriptionsResponse extends jspb.Message {
  getSubscriptionsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>;
  setSubscriptionsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription>): void;
  clearSubscriptionsList(): void;
  addSubscriptions(value?: google_cloud_irm_v1alpha2_incidents_pb.Subscription, index?: number): google_cloud_irm_v1alpha2_incidents_pb.Subscription;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListSubscriptionsResponse, reader: jspb.BinaryReader): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<google_cloud_irm_v1alpha2_incidents_pb.Subscription.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSubscriptionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionRequest): DeleteSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionRequest;
  static deserializeBinaryFromReader(message: DeleteSubscriptionRequest, reader: jspb.BinaryReader): DeleteSubscriptionRequest;
}

export namespace DeleteSubscriptionRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateIncidentRoleAssignmentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getIncidentRoleAssignment(): google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment | undefined;
  setIncidentRoleAssignment(value?: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment): void;
  hasIncidentRoleAssignment(): boolean;
  clearIncidentRoleAssignment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIncidentRoleAssignmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIncidentRoleAssignmentRequest): CreateIncidentRoleAssignmentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateIncidentRoleAssignmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIncidentRoleAssignmentRequest;
  static deserializeBinaryFromReader(message: CreateIncidentRoleAssignmentRequest, reader: jspb.BinaryReader): CreateIncidentRoleAssignmentRequest;
}

export namespace CreateIncidentRoleAssignmentRequest {
  export type AsObject = {
    parent: string,
    incidentRoleAssignment?: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.AsObject,
  }
}

export class DeleteIncidentRoleAssignmentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIncidentRoleAssignmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIncidentRoleAssignmentRequest): DeleteIncidentRoleAssignmentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteIncidentRoleAssignmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIncidentRoleAssignmentRequest;
  static deserializeBinaryFromReader(message: DeleteIncidentRoleAssignmentRequest, reader: jspb.BinaryReader): DeleteIncidentRoleAssignmentRequest;
}

export namespace DeleteIncidentRoleAssignmentRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListIncidentRoleAssignmentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIncidentRoleAssignmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIncidentRoleAssignmentsRequest): ListIncidentRoleAssignmentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListIncidentRoleAssignmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIncidentRoleAssignmentsRequest;
  static deserializeBinaryFromReader(message: ListIncidentRoleAssignmentsRequest, reader: jspb.BinaryReader): ListIncidentRoleAssignmentsRequest;
}

export namespace ListIncidentRoleAssignmentsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListIncidentRoleAssignmentsResponse extends jspb.Message {
  getIncidentRoleAssignmentsList(): Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment>;
  setIncidentRoleAssignmentsList(value: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment>): void;
  clearIncidentRoleAssignmentsList(): void;
  addIncidentRoleAssignments(value?: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment, index?: number): google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIncidentRoleAssignmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIncidentRoleAssignmentsResponse): ListIncidentRoleAssignmentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListIncidentRoleAssignmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIncidentRoleAssignmentsResponse;
  static deserializeBinaryFromReader(message: ListIncidentRoleAssignmentsResponse, reader: jspb.BinaryReader): ListIncidentRoleAssignmentsResponse;
}

export namespace ListIncidentRoleAssignmentsResponse {
  export type AsObject = {
    incidentRoleAssignmentsList: Array<google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.AsObject>,
    nextPageToken: string,
  }
}

export class RequestIncidentRoleHandoverRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewAssignee(): google_cloud_irm_v1alpha2_incidents_pb.User | undefined;
  setNewAssignee(value?: google_cloud_irm_v1alpha2_incidents_pb.User): void;
  hasNewAssignee(): boolean;
  clearNewAssignee(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestIncidentRoleHandoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestIncidentRoleHandoverRequest): RequestIncidentRoleHandoverRequest.AsObject;
  static serializeBinaryToWriter(message: RequestIncidentRoleHandoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestIncidentRoleHandoverRequest;
  static deserializeBinaryFromReader(message: RequestIncidentRoleHandoverRequest, reader: jspb.BinaryReader): RequestIncidentRoleHandoverRequest;
}

export namespace RequestIncidentRoleHandoverRequest {
  export type AsObject = {
    name: string,
    newAssignee?: google_cloud_irm_v1alpha2_incidents_pb.User.AsObject,
  }
}

export class ConfirmIncidentRoleHandoverRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewAssignee(): google_cloud_irm_v1alpha2_incidents_pb.User | undefined;
  setNewAssignee(value?: google_cloud_irm_v1alpha2_incidents_pb.User): void;
  hasNewAssignee(): boolean;
  clearNewAssignee(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmIncidentRoleHandoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmIncidentRoleHandoverRequest): ConfirmIncidentRoleHandoverRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmIncidentRoleHandoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmIncidentRoleHandoverRequest;
  static deserializeBinaryFromReader(message: ConfirmIncidentRoleHandoverRequest, reader: jspb.BinaryReader): ConfirmIncidentRoleHandoverRequest;
}

export namespace ConfirmIncidentRoleHandoverRequest {
  export type AsObject = {
    name: string,
    newAssignee?: google_cloud_irm_v1alpha2_incidents_pb.User.AsObject,
  }
}

export class ForceIncidentRoleHandoverRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewAssignee(): google_cloud_irm_v1alpha2_incidents_pb.User | undefined;
  setNewAssignee(value?: google_cloud_irm_v1alpha2_incidents_pb.User): void;
  hasNewAssignee(): boolean;
  clearNewAssignee(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForceIncidentRoleHandoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForceIncidentRoleHandoverRequest): ForceIncidentRoleHandoverRequest.AsObject;
  static serializeBinaryToWriter(message: ForceIncidentRoleHandoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForceIncidentRoleHandoverRequest;
  static deserializeBinaryFromReader(message: ForceIncidentRoleHandoverRequest, reader: jspb.BinaryReader): ForceIncidentRoleHandoverRequest;
}

export namespace ForceIncidentRoleHandoverRequest {
  export type AsObject = {
    name: string,
    newAssignee?: google_cloud_irm_v1alpha2_incidents_pb.User.AsObject,
  }
}

export class CancelIncidentRoleHandoverRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNewAssignee(): google_cloud_irm_v1alpha2_incidents_pb.User | undefined;
  setNewAssignee(value?: google_cloud_irm_v1alpha2_incidents_pb.User): void;
  hasNewAssignee(): boolean;
  clearNewAssignee(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelIncidentRoleHandoverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelIncidentRoleHandoverRequest): CancelIncidentRoleHandoverRequest.AsObject;
  static serializeBinaryToWriter(message: CancelIncidentRoleHandoverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelIncidentRoleHandoverRequest;
  static deserializeBinaryFromReader(message: CancelIncidentRoleHandoverRequest, reader: jspb.BinaryReader): CancelIncidentRoleHandoverRequest;
}

export namespace CancelIncidentRoleHandoverRequest {
  export type AsObject = {
    name: string,
    newAssignee?: google_cloud_irm_v1alpha2_incidents_pb.User.AsObject,
  }
}

