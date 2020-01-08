import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';

export class AnnotationSet extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSourceUri(): string;
  setSourceUri(value: string): void;

  getType(): AnnotationType;
  setType(value: AnnotationType): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotationSet.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotationSet): AnnotationSet.AsObject;
  static serializeBinaryToWriter(message: AnnotationSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotationSet;
  static deserializeBinaryFromReader(message: AnnotationSet, reader: jspb.BinaryReader): AnnotationSet;
}

export namespace AnnotationSet {
  export type AsObject = {
    id: string,
    datasetId: string,
    referenceSetId: string,
    name: string,
    sourceUri: string,
    type: AnnotationType,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

export class Annotation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAnnotationSetId(): string;
  setAnnotationSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getReverseStrand(): boolean;
  setReverseStrand(value: boolean): void;

  getType(): AnnotationType;
  setType(value: AnnotationType): void;

  getVariant(): VariantAnnotation | undefined;
  setVariant(value?: VariantAnnotation): void;
  hasVariant(): boolean;
  clearVariant(): void;

  getTranscript(): Transcript | undefined;
  setTranscript(value?: Transcript): void;
  hasTranscript(): boolean;
  clearTranscript(): void;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;

  getValueCase(): Annotation.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    id: string,
    annotationSetId: string,
    name: string,
    referenceId: string,
    referenceName: string,
    start: number,
    end: number,
    reverseStrand: boolean,
    type: AnnotationType,
    variant?: VariantAnnotation.AsObject,
    transcript?: Transcript.AsObject,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    VARIANT = 10,
    TRANSCRIPT = 11,
  }
}

export class VariantAnnotation extends jspb.Message {
  getType(): VariantAnnotation.Type;
  setType(value: VariantAnnotation.Type): void;

  getEffect(): VariantAnnotation.Effect;
  setEffect(value: VariantAnnotation.Effect): void;

  getAlternateBases(): string;
  setAlternateBases(value: string): void;

  getGeneId(): string;
  setGeneId(value: string): void;

  getTranscriptIdsList(): Array<string>;
  setTranscriptIdsList(value: Array<string>): void;
  clearTranscriptIdsList(): void;
  addTranscriptIds(value: string, index?: number): void;

  getConditionsList(): Array<VariantAnnotation.ClinicalCondition>;
  setConditionsList(value: Array<VariantAnnotation.ClinicalCondition>): void;
  clearConditionsList(): void;
  addConditions(value?: VariantAnnotation.ClinicalCondition, index?: number): VariantAnnotation.ClinicalCondition;

  getClinicalSignificance(): VariantAnnotation.ClinicalSignificance;
  setClinicalSignificance(value: VariantAnnotation.ClinicalSignificance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariantAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: VariantAnnotation): VariantAnnotation.AsObject;
  static serializeBinaryToWriter(message: VariantAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariantAnnotation;
  static deserializeBinaryFromReader(message: VariantAnnotation, reader: jspb.BinaryReader): VariantAnnotation;
}

export namespace VariantAnnotation {
  export type AsObject = {
    type: VariantAnnotation.Type,
    effect: VariantAnnotation.Effect,
    alternateBases: string,
    geneId: string,
    transcriptIdsList: Array<string>,
    conditionsList: Array<VariantAnnotation.ClinicalCondition.AsObject>,
    clinicalSignificance: VariantAnnotation.ClinicalSignificance,
  }

  export class ClinicalCondition extends jspb.Message {
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): void;
    clearNamesList(): void;
    addNames(value: string, index?: number): void;

    getExternalIdsList(): Array<ExternalId>;
    setExternalIdsList(value: Array<ExternalId>): void;
    clearExternalIdsList(): void;
    addExternalIds(value?: ExternalId, index?: number): ExternalId;

    getConceptId(): string;
    setConceptId(value: string): void;

    getOmimId(): string;
    setOmimId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClinicalCondition.AsObject;
    static toObject(includeInstance: boolean, msg: ClinicalCondition): ClinicalCondition.AsObject;
    static serializeBinaryToWriter(message: ClinicalCondition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClinicalCondition;
    static deserializeBinaryFromReader(message: ClinicalCondition, reader: jspb.BinaryReader): ClinicalCondition;
  }

  export namespace ClinicalCondition {
    export type AsObject = {
      namesList: Array<string>,
      externalIdsList: Array<ExternalId.AsObject>,
      conceptId: string,
      omimId: string,
    }
  }


  export enum Type { 
    TYPE_UNSPECIFIED = 0,
    TYPE_OTHER = 1,
    INSERTION = 2,
    DELETION = 3,
    SUBSTITUTION = 4,
    SNP = 5,
    STRUCTURAL = 6,
    CNV = 7,
  }

  export enum Effect { 
    EFFECT_UNSPECIFIED = 0,
    EFFECT_OTHER = 1,
    FRAMESHIFT = 2,
    FRAME_PRESERVING_INDEL = 3,
    SYNONYMOUS_SNP = 4,
    NONSYNONYMOUS_SNP = 5,
    STOP_GAIN = 6,
    STOP_LOSS = 7,
    SPLICE_SITE_DISRUPTION = 8,
  }

  export enum ClinicalSignificance { 
    CLINICAL_SIGNIFICANCE_UNSPECIFIED = 0,
    CLINICAL_SIGNIFICANCE_OTHER = 1,
    UNCERTAIN = 2,
    BENIGN = 3,
    LIKELY_BENIGN = 4,
    LIKELY_PATHOGENIC = 5,
    PATHOGENIC = 6,
    DRUG_RESPONSE = 7,
    HISTOCOMPATIBILITY = 8,
    CONFERS_SENSITIVITY = 9,
    RISK_FACTOR = 10,
    ASSOCIATION = 11,
    PROTECTIVE = 12,
    MULTIPLE_REPORTED = 13,
  }
}

export class Transcript extends jspb.Message {
  getGeneId(): string;
  setGeneId(value: string): void;

  getExonsList(): Array<Transcript.Exon>;
  setExonsList(value: Array<Transcript.Exon>): void;
  clearExonsList(): void;
  addExons(value?: Transcript.Exon, index?: number): Transcript.Exon;

  getCodingSequence(): Transcript.CodingSequence | undefined;
  setCodingSequence(value?: Transcript.CodingSequence): void;
  hasCodingSequence(): boolean;
  clearCodingSequence(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transcript.AsObject;
  static toObject(includeInstance: boolean, msg: Transcript): Transcript.AsObject;
  static serializeBinaryToWriter(message: Transcript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transcript;
  static deserializeBinaryFromReader(message: Transcript, reader: jspb.BinaryReader): Transcript;
}

export namespace Transcript {
  export type AsObject = {
    geneId: string,
    exonsList: Array<Transcript.Exon.AsObject>,
    codingSequence?: Transcript.CodingSequence.AsObject,
  }

  export class Exon extends jspb.Message {
    getStart(): number;
    setStart(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;

    getFrame(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setFrame(value?: google_protobuf_wrappers_pb.Int32Value): void;
    hasFrame(): boolean;
    clearFrame(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exon.AsObject;
    static toObject(includeInstance: boolean, msg: Exon): Exon.AsObject;
    static serializeBinaryToWriter(message: Exon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exon;
    static deserializeBinaryFromReader(message: Exon, reader: jspb.BinaryReader): Exon;
  }

  export namespace Exon {
    export type AsObject = {
      start: number,
      end: number,
      frame?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
  }


  export class CodingSequence extends jspb.Message {
    getStart(): number;
    setStart(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodingSequence.AsObject;
    static toObject(includeInstance: boolean, msg: CodingSequence): CodingSequence.AsObject;
    static serializeBinaryToWriter(message: CodingSequence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodingSequence;
    static deserializeBinaryFromReader(message: CodingSequence, reader: jspb.BinaryReader): CodingSequence;
  }

  export namespace CodingSequence {
    export type AsObject = {
      start: number,
      end: number,
    }
  }

}

export class ExternalId extends jspb.Message {
  getSourceName(): string;
  setSourceName(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalId.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalId): ExternalId.AsObject;
  static serializeBinaryToWriter(message: ExternalId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalId;
  static deserializeBinaryFromReader(message: ExternalId, reader: jspb.BinaryReader): ExternalId;
}

export namespace ExternalId {
  export type AsObject = {
    sourceName: string,
    id: string,
  }
}

export class CreateAnnotationSetRequest extends jspb.Message {
  getAnnotationSet(): AnnotationSet | undefined;
  setAnnotationSet(value?: AnnotationSet): void;
  hasAnnotationSet(): boolean;
  clearAnnotationSet(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnnotationSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnnotationSetRequest): CreateAnnotationSetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAnnotationSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnnotationSetRequest;
  static deserializeBinaryFromReader(message: CreateAnnotationSetRequest, reader: jspb.BinaryReader): CreateAnnotationSetRequest;
}

export namespace CreateAnnotationSetRequest {
  export type AsObject = {
    annotationSet?: AnnotationSet.AsObject,
  }
}

export class GetAnnotationSetRequest extends jspb.Message {
  getAnnotationSetId(): string;
  setAnnotationSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationSetRequest): GetAnnotationSetRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationSetRequest;
  static deserializeBinaryFromReader(message: GetAnnotationSetRequest, reader: jspb.BinaryReader): GetAnnotationSetRequest;
}

export namespace GetAnnotationSetRequest {
  export type AsObject = {
    annotationSetId: string,
  }
}

export class UpdateAnnotationSetRequest extends jspb.Message {
  getAnnotationSetId(): string;
  setAnnotationSetId(value: string): void;

  getAnnotationSet(): AnnotationSet | undefined;
  setAnnotationSet(value?: AnnotationSet): void;
  hasAnnotationSet(): boolean;
  clearAnnotationSet(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAnnotationSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAnnotationSetRequest): UpdateAnnotationSetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAnnotationSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAnnotationSetRequest;
  static deserializeBinaryFromReader(message: UpdateAnnotationSetRequest, reader: jspb.BinaryReader): UpdateAnnotationSetRequest;
}

export namespace UpdateAnnotationSetRequest {
  export type AsObject = {
    annotationSetId: string,
    annotationSet?: AnnotationSet.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteAnnotationSetRequest extends jspb.Message {
  getAnnotationSetId(): string;
  setAnnotationSetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationSetRequest): DeleteAnnotationSetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationSetRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationSetRequest, reader: jspb.BinaryReader): DeleteAnnotationSetRequest;
}

export namespace DeleteAnnotationSetRequest {
  export type AsObject = {
    annotationSetId: string,
  }
}

export class SearchAnnotationSetsRequest extends jspb.Message {
  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): void;
  clearDatasetIdsList(): void;
  addDatasetIds(value: string, index?: number): void;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTypesList(): Array<AnnotationType>;
  setTypesList(value: Array<AnnotationType>): void;
  clearTypesList(): void;
  addTypes(value: AnnotationType, index?: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAnnotationSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAnnotationSetsRequest): SearchAnnotationSetsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAnnotationSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAnnotationSetsRequest;
  static deserializeBinaryFromReader(message: SearchAnnotationSetsRequest, reader: jspb.BinaryReader): SearchAnnotationSetsRequest;
}

export namespace SearchAnnotationSetsRequest {
  export type AsObject = {
    datasetIdsList: Array<string>,
    referenceSetId: string,
    name: string,
    typesList: Array<AnnotationType>,
    pageToken: string,
    pageSize: number,
  }
}

export class SearchAnnotationSetsResponse extends jspb.Message {
  getAnnotationSetsList(): Array<AnnotationSet>;
  setAnnotationSetsList(value: Array<AnnotationSet>): void;
  clearAnnotationSetsList(): void;
  addAnnotationSets(value?: AnnotationSet, index?: number): AnnotationSet;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAnnotationSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAnnotationSetsResponse): SearchAnnotationSetsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAnnotationSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAnnotationSetsResponse;
  static deserializeBinaryFromReader(message: SearchAnnotationSetsResponse, reader: jspb.BinaryReader): SearchAnnotationSetsResponse;
}

export namespace SearchAnnotationSetsResponse {
  export type AsObject = {
    annotationSetsList: Array<AnnotationSet.AsObject>,
    nextPageToken: string,
  }
}

export class CreateAnnotationRequest extends jspb.Message {
  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
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
    annotation?: Annotation.AsObject,
  }
}

export class BatchCreateAnnotationsRequest extends jspb.Message {
  getAnnotationsList(): Array<Annotation>;
  setAnnotationsList(value: Array<Annotation>): void;
  clearAnnotationsList(): void;
  addAnnotations(value?: Annotation, index?: number): Annotation;

  getRequestId(): string;
  setRequestId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateAnnotationsRequest): BatchCreateAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: BatchCreateAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateAnnotationsRequest;
  static deserializeBinaryFromReader(message: BatchCreateAnnotationsRequest, reader: jspb.BinaryReader): BatchCreateAnnotationsRequest;
}

export namespace BatchCreateAnnotationsRequest {
  export type AsObject = {
    annotationsList: Array<Annotation.AsObject>,
    requestId: string,
  }
}

export class BatchCreateAnnotationsResponse extends jspb.Message {
  getEntriesList(): Array<BatchCreateAnnotationsResponse.Entry>;
  setEntriesList(value: Array<BatchCreateAnnotationsResponse.Entry>): void;
  clearEntriesList(): void;
  addEntries(value?: BatchCreateAnnotationsResponse.Entry, index?: number): BatchCreateAnnotationsResponse.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchCreateAnnotationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchCreateAnnotationsResponse): BatchCreateAnnotationsResponse.AsObject;
  static serializeBinaryToWriter(message: BatchCreateAnnotationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchCreateAnnotationsResponse;
  static deserializeBinaryFromReader(message: BatchCreateAnnotationsResponse, reader: jspb.BinaryReader): BatchCreateAnnotationsResponse;
}

export namespace BatchCreateAnnotationsResponse {
  export type AsObject = {
    entriesList: Array<BatchCreateAnnotationsResponse.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;
    hasStatus(): boolean;
    clearStatus(): void;

    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): void;
    hasAnnotation(): boolean;
    clearAnnotation(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      status?: google_rpc_status_pb.Status.AsObject,
      annotation?: Annotation.AsObject,
    }
  }

}

export class GetAnnotationRequest extends jspb.Message {
  getAnnotationId(): string;
  setAnnotationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnnotationRequest): GetAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnnotationRequest;
  static deserializeBinaryFromReader(message: GetAnnotationRequest, reader: jspb.BinaryReader): GetAnnotationRequest;
}

export namespace GetAnnotationRequest {
  export type AsObject = {
    annotationId: string,
  }
}

export class UpdateAnnotationRequest extends jspb.Message {
  getAnnotationId(): string;
  setAnnotationId(value: string): void;

  getAnnotation(): Annotation | undefined;
  setAnnotation(value?: Annotation): void;
  hasAnnotation(): boolean;
  clearAnnotation(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAnnotationRequest): UpdateAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAnnotationRequest;
  static deserializeBinaryFromReader(message: UpdateAnnotationRequest, reader: jspb.BinaryReader): UpdateAnnotationRequest;
}

export namespace UpdateAnnotationRequest {
  export type AsObject = {
    annotationId: string,
    annotation?: Annotation.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteAnnotationRequest extends jspb.Message {
  getAnnotationId(): string;
  setAnnotationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnnotationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnnotationRequest): DeleteAnnotationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnnotationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnnotationRequest;
  static deserializeBinaryFromReader(message: DeleteAnnotationRequest, reader: jspb.BinaryReader): DeleteAnnotationRequest;
}

export namespace DeleteAnnotationRequest {
  export type AsObject = {
    annotationId: string,
  }
}

export class SearchAnnotationsRequest extends jspb.Message {
  getAnnotationSetIdsList(): Array<string>;
  setAnnotationSetIdsList(value: Array<string>): void;
  clearAnnotationSetIdsList(): void;
  addAnnotationSetIds(value: string, index?: number): void;

  getReferenceId(): string;
  setReferenceId(value: string): void;

  getReferenceName(): string;
  setReferenceName(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getReferenceCase(): SearchAnnotationsRequest.ReferenceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAnnotationsRequest): SearchAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAnnotationsRequest;
  static deserializeBinaryFromReader(message: SearchAnnotationsRequest, reader: jspb.BinaryReader): SearchAnnotationsRequest;
}

export namespace SearchAnnotationsRequest {
  export type AsObject = {
    annotationSetIdsList: Array<string>,
    referenceId: string,
    referenceName: string,
    start: number,
    end: number,
    pageToken: string,
    pageSize: number,
  }

  export enum ReferenceCase { 
    REFERENCE_NOT_SET = 0,
    REFERENCE_ID = 2,
    REFERENCE_NAME = 3,
  }
}

export class SearchAnnotationsResponse extends jspb.Message {
  getAnnotationsList(): Array<Annotation>;
  setAnnotationsList(value: Array<Annotation>): void;
  clearAnnotationsList(): void;
  addAnnotations(value?: Annotation, index?: number): Annotation;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAnnotationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAnnotationsResponse): SearchAnnotationsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAnnotationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAnnotationsResponse;
  static deserializeBinaryFromReader(message: SearchAnnotationsResponse, reader: jspb.BinaryReader): SearchAnnotationsResponse;
}

export namespace SearchAnnotationsResponse {
  export type AsObject = {
    annotationsList: Array<Annotation.AsObject>,
    nextPageToken: string,
  }
}

export enum AnnotationType { 
  ANNOTATION_TYPE_UNSPECIFIED = 0,
  GENERIC = 1,
  VARIANT = 2,
  GENE = 3,
  TRANSCRIPT = 4,
}
