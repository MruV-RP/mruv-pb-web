/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.containeranalysis.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb from '../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb';
import * as google_devtools_containeranalysis_v1alpha1_image_basis_pb from '../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb';
import * as google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb from '../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb';
import * as google_devtools_containeranalysis_v1alpha1_provenance_pb from '../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  CreateNoteRequest,
  CreateOccurrenceRequest,
  CreateOperationRequest,
  DeleteNoteRequest,
  DeleteOccurrenceRequest,
  GetNoteRequest,
  GetOccurrenceNoteRequest,
  GetOccurrenceRequest,
  GetScanConfigRequest,
  GetVulnzOccurrencesSummaryRequest,
  GetVulnzOccurrencesSummaryResponse,
  ListNoteOccurrencesRequest,
  ListNoteOccurrencesResponse,
  ListNotesRequest,
  ListNotesResponse,
  ListOccurrencesRequest,
  ListOccurrencesResponse,
  ListScanConfigsRequest,
  ListScanConfigsResponse,
  Note,
  Occurrence,
  ScanConfig,
  UpdateNoteRequest,
  UpdateOccurrenceRequest,
  UpdateOperationRequest,
  UpdateScanConfigRequest} from './containeranalysis_pb';

export class ContainerAnalysisClient {
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrence',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListOccurrences',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteOccurrence',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOccurrence',
      request,
      metadata || {},
      this.methodInfoCreateOccurrence,
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOccurrence',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetOccurrenceNote',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetNote',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNotes',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/DeleteNote',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateNote',
      request,
      metadata || {},
      this.methodInfoCreateNote,
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateNote',
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
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListNoteOccurrences',
      request,
      metadata || {},
      this.methodInfoListNoteOccurrences,
      callback);
  }

  methodInfoGetVulnzOccurrencesSummary = new grpcWeb.AbstractClientBase.MethodInfo(
    GetVulnzOccurrencesSummaryResponse,
    (request: GetVulnzOccurrencesSummaryRequest) => {
      return request.serializeBinary();
    },
    GetVulnzOccurrencesSummaryResponse.deserializeBinary
  );

  getVulnzOccurrencesSummary(
    request: GetVulnzOccurrencesSummaryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetVulnzOccurrencesSummaryResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetVulnzOccurrencesSummary',
      request,
      metadata || {},
      this.methodInfoGetVulnzOccurrencesSummary,
      callback);
  }

  methodInfoSetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/SetIamPolicy',
      request,
      metadata || {},
      this.methodInfoSetIamPolicy,
      callback);
  }

  methodInfoGetIamPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_policy_pb.Policy,
    (request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_policy_pb.Policy.deserializeBinary
  );

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetIamPolicy',
      request,
      metadata || {},
      this.methodInfoGetIamPolicy,
      callback);
  }

  methodInfoTestIamPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    (request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest) => {
      return request.serializeBinary();
    },
    google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
  );

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/TestIamPermissions',
      request,
      metadata || {},
      this.methodInfoTestIamPermissions,
      callback);
  }

  methodInfoCreateOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateOperationRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createOperation(
    request: CreateOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/CreateOperation',
      request,
      metadata || {},
      this.methodInfoCreateOperation,
      callback);
  }

  methodInfoUpdateOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateOperationRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateOperation(
    request: UpdateOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateOperation',
      request,
      metadata || {},
      this.methodInfoUpdateOperation,
      callback);
  }

  methodInfoGetScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    ScanConfig,
    (request: GetScanConfigRequest) => {
      return request.serializeBinary();
    },
    ScanConfig.deserializeBinary
  );

  getScanConfig(
    request: GetScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ScanConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/GetScanConfig',
      request,
      metadata || {},
      this.methodInfoGetScanConfig,
      callback);
  }

  methodInfoListScanConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListScanConfigsResponse,
    (request: ListScanConfigsRequest) => {
      return request.serializeBinary();
    },
    ListScanConfigsResponse.deserializeBinary
  );

  listScanConfigs(
    request: ListScanConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListScanConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/ListScanConfigs',
      request,
      metadata || {},
      this.methodInfoListScanConfigs,
      callback);
  }

  methodInfoUpdateScanConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    ScanConfig,
    (request: UpdateScanConfigRequest) => {
      return request.serializeBinary();
    },
    ScanConfig.deserializeBinary
  );

  updateScanConfig(
    request: UpdateScanConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ScanConfig) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.containeranalysis.v1alpha1.ContainerAnalysis/UpdateScanConfig',
      request,
      metadata || {},
      this.methodInfoUpdateScanConfig,
      callback);
  }

}

