/**
 * @fileoverview gRPC-Web generated client stub for grafeas.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

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

import {
  BatchCreateNotesRequest,
  BatchCreateNotesResponse,
  BatchCreateOccurrencesRequest,
  BatchCreateOccurrencesResponse,
  CreateNoteRequest,
  CreateOccurrenceRequest,
  DeleteNoteRequest,
  DeleteOccurrenceRequest,
  GetNoteRequest,
  GetOccurrenceNoteRequest,
  GetOccurrenceRequest,
  GetVulnerabilityOccurrencesSummaryRequest,
  ListNoteOccurrencesRequest,
  ListNoteOccurrencesResponse,
  ListNotesRequest,
  ListNotesResponse,
  ListOccurrencesRequest,
  ListOccurrencesResponse,
  Note,
  Occurrence,
  UpdateNoteRequest,
  UpdateOccurrenceRequest,
  VulnerabilityOccurrencesSummary} from './grafeas_pb';

export class GrafeasV1Beta1Client {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetOccurrence = new grpcWeb.AbstractClientBase.MethodInfo(
    Occurrence,
    (request: GetOccurrenceRequest) => {
      return request.serializeBinary();
    },
    Occurrence.deserializeBinary
  );

  getOccurrence(
    request: GetOccurrenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Occurrence) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrence',
      request,
      metadata || {},
      this.methodInfoGetOccurrence,
      callback);
  }

  methodInfoListOccurrences = new grpcWeb.AbstractClientBase.MethodInfo(
    ListOccurrencesResponse,
    (request: ListOccurrencesRequest) => {
      return request.serializeBinary();
    },
    ListOccurrencesResponse.deserializeBinary
  );

  listOccurrences(
    request: ListOccurrencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListOccurrencesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/ListOccurrences',
      request,
      metadata || {},
      this.methodInfoListOccurrences,
      callback);
  }

  methodInfoDeleteOccurrence = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteOccurrenceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteOccurrence(
    request: DeleteOccurrenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/DeleteOccurrence',
      request,
      metadata || {},
      this.methodInfoDeleteOccurrence,
      callback);
  }

  methodInfoCreateOccurrence = new grpcWeb.AbstractClientBase.MethodInfo(
    Occurrence,
    (request: CreateOccurrenceRequest) => {
      return request.serializeBinary();
    },
    Occurrence.deserializeBinary
  );

  createOccurrence(
    request: CreateOccurrenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Occurrence) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/CreateOccurrence',
      request,
      metadata || {},
      this.methodInfoCreateOccurrence,
      callback);
  }

  methodInfoBatchCreateOccurrences = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchCreateOccurrencesResponse,
    (request: BatchCreateOccurrencesRequest) => {
      return request.serializeBinary();
    },
    BatchCreateOccurrencesResponse.deserializeBinary
  );

  batchCreateOccurrences(
    request: BatchCreateOccurrencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchCreateOccurrencesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateOccurrences',
      request,
      metadata || {},
      this.methodInfoBatchCreateOccurrences,
      callback);
  }

  methodInfoUpdateOccurrence = new grpcWeb.AbstractClientBase.MethodInfo(
    Occurrence,
    (request: UpdateOccurrenceRequest) => {
      return request.serializeBinary();
    },
    Occurrence.deserializeBinary
  );

  updateOccurrence(
    request: UpdateOccurrenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Occurrence) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/UpdateOccurrence',
      request,
      metadata || {},
      this.methodInfoUpdateOccurrence,
      callback);
  }

  methodInfoGetOccurrenceNote = new grpcWeb.AbstractClientBase.MethodInfo(
    Note,
    (request: GetOccurrenceNoteRequest) => {
      return request.serializeBinary();
    },
    Note.deserializeBinary
  );

  getOccurrenceNote(
    request: GetOccurrenceNoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Note) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/GetOccurrenceNote',
      request,
      metadata || {},
      this.methodInfoGetOccurrenceNote,
      callback);
  }

  methodInfoGetNote = new grpcWeb.AbstractClientBase.MethodInfo(
    Note,
    (request: GetNoteRequest) => {
      return request.serializeBinary();
    },
    Note.deserializeBinary
  );

  getNote(
    request: GetNoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Note) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/GetNote',
      request,
      metadata || {},
      this.methodInfoGetNote,
      callback);
  }

  methodInfoListNotes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNotesResponse,
    (request: ListNotesRequest) => {
      return request.serializeBinary();
    },
    ListNotesResponse.deserializeBinary
  );

  listNotes(
    request: ListNotesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNotesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/ListNotes',
      request,
      metadata || {},
      this.methodInfoListNotes,
      callback);
  }

  methodInfoDeleteNote = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteNoteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteNote(
    request: DeleteNoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/DeleteNote',
      request,
      metadata || {},
      this.methodInfoDeleteNote,
      callback);
  }

  methodInfoCreateNote = new grpcWeb.AbstractClientBase.MethodInfo(
    Note,
    (request: CreateNoteRequest) => {
      return request.serializeBinary();
    },
    Note.deserializeBinary
  );

  createNote(
    request: CreateNoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Note) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/CreateNote',
      request,
      metadata || {},
      this.methodInfoCreateNote,
      callback);
  }

  methodInfoBatchCreateNotes = new grpcWeb.AbstractClientBase.MethodInfo(
    BatchCreateNotesResponse,
    (request: BatchCreateNotesRequest) => {
      return request.serializeBinary();
    },
    BatchCreateNotesResponse.deserializeBinary
  );

  batchCreateNotes(
    request: BatchCreateNotesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BatchCreateNotesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/BatchCreateNotes',
      request,
      metadata || {},
      this.methodInfoBatchCreateNotes,
      callback);
  }

  methodInfoUpdateNote = new grpcWeb.AbstractClientBase.MethodInfo(
    Note,
    (request: UpdateNoteRequest) => {
      return request.serializeBinary();
    },
    Note.deserializeBinary
  );

  updateNote(
    request: UpdateNoteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Note) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/UpdateNote',
      request,
      metadata || {},
      this.methodInfoUpdateNote,
      callback);
  }

  methodInfoListNoteOccurrences = new grpcWeb.AbstractClientBase.MethodInfo(
    ListNoteOccurrencesResponse,
    (request: ListNoteOccurrencesRequest) => {
      return request.serializeBinary();
    },
    ListNoteOccurrencesResponse.deserializeBinary
  );

  listNoteOccurrences(
    request: ListNoteOccurrencesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListNoteOccurrencesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/ListNoteOccurrences',
      request,
      metadata || {},
      this.methodInfoListNoteOccurrences,
      callback);
  }

  methodInfoGetVulnerabilityOccurrencesSummary = new grpcWeb.AbstractClientBase.MethodInfo(
    VulnerabilityOccurrencesSummary,
    (request: GetVulnerabilityOccurrencesSummaryRequest) => {
      return request.serializeBinary();
    },
    VulnerabilityOccurrencesSummary.deserializeBinary
  );

  getVulnerabilityOccurrencesSummary(
    request: GetVulnerabilityOccurrencesSummaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: VulnerabilityOccurrencesSummary) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/grafeas.v1beta1.GrafeasV1Beta1/GetVulnerabilityOccurrencesSummary',
      request,
      metadata || {},
      this.methodInfoGetVulnerabilityOccurrencesSummary,
      callback);
  }

}

