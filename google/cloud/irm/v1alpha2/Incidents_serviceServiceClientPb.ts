/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.irm.v1alpha2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_cloud_irm_v1alpha2_incidents_pb from '../../../../google/cloud/irm/v1alpha2/incidents_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CancelIncidentRoleHandoverRequest,
  ConfirmIncidentRoleHandoverRequest,
  CreateAnnotationRequest,
  CreateArtifactRequest,
  CreateIncidentRequest,
  CreateIncidentRoleAssignmentRequest,
  CreateSignalRequest,
  CreateSubscriptionRequest,
  CreateTagRequest,
  DeleteArtifactRequest,
  DeleteIncidentRoleAssignmentRequest,
  DeleteSubscriptionRequest,
  DeleteTagRequest,
  EscalateIncidentRequest,
  EscalateIncidentResponse,
  ForceIncidentRoleHandoverRequest,
  GetIncidentRequest,
  GetSignalRequest,
  ListAnnotationsRequest,
  ListAnnotationsResponse,
  ListArtifactsRequest,
  ListArtifactsResponse,
  ListIncidentRoleAssignmentsRequest,
  ListIncidentRoleAssignmentsResponse,
  ListSubscriptionsRequest,
  ListSubscriptionsResponse,
  ListTagsRequest,
  ListTagsResponse,
  LookupSignalRequest,
  RequestIncidentRoleHandoverRequest,
  SearchIncidentsRequest,
  SearchIncidentsResponse,
  SearchSignalsRequest,
  SearchSignalsResponse,
  SearchSimilarIncidentsRequest,
  SearchSimilarIncidentsResponse,
  SendShiftHandoffRequest,
  SendShiftHandoffResponse,
  UpdateArtifactRequest,
  UpdateIncidentRequest,
  UpdateSignalRequest,
  UpdateSubscriptionRequest} from './incidents_service_pb';

export class IncidentServiceClient {
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

  methodInfoCreateIncident = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Incident,
    (request: CreateIncidentRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinary
  );

  createIncident(
    request: CreateIncidentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Incident) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateIncident',
      request,
      metadata || {},
      this.methodInfoCreateIncident,
      callback);
  }

  methodInfoGetIncident = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Incident,
    (request: GetIncidentRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinary
  );

  getIncident(
    request: GetIncidentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Incident) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/GetIncident',
      request,
      metadata || {},
      this.methodInfoGetIncident,
      callback);
  }

  methodInfoSearchIncidents = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchIncidentsResponse,
    (request: SearchIncidentsRequest) => {
      return request.serializeBinary();
    },
    SearchIncidentsResponse.deserializeBinary
  );

  searchIncidents(
    request: SearchIncidentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchIncidentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/SearchIncidents',
      request,
      metadata || {},
      this.methodInfoSearchIncidents,
      callback);
  }

  methodInfoUpdateIncident = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Incident,
    (request: UpdateIncidentRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinary
  );

  updateIncident(
    request: UpdateIncidentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Incident) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/UpdateIncident',
      request,
      metadata || {},
      this.methodInfoUpdateIncident,
      callback);
  }

  methodInfoSearchSimilarIncidents = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchSimilarIncidentsResponse,
    (request: SearchSimilarIncidentsRequest) => {
      return request.serializeBinary();
    },
    SearchSimilarIncidentsResponse.deserializeBinary
  );

  searchSimilarIncidents(
    request: SearchSimilarIncidentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchSimilarIncidentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/SearchSimilarIncidents',
      request,
      metadata || {},
      this.methodInfoSearchSimilarIncidents,
      callback);
  }

  methodInfoCreateAnnotation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Annotation,
    (request: CreateAnnotationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Annotation.deserializeBinary
  );

  createAnnotation(
    request: CreateAnnotationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Annotation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateAnnotation',
      request,
      metadata || {},
      this.methodInfoCreateAnnotation,
      callback);
  }

  methodInfoListAnnotations = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAnnotationsResponse,
    (request: ListAnnotationsRequest) => {
      return request.serializeBinary();
    },
    ListAnnotationsResponse.deserializeBinary
  );

  listAnnotations(
    request: ListAnnotationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAnnotationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ListAnnotations',
      request,
      metadata || {},
      this.methodInfoListAnnotations,
      callback);
  }

  methodInfoCreateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Tag,
    (request: CreateTagRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinary
  );

  createTag(
    request: CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Tag) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateTag',
      request,
      metadata || {},
      this.methodInfoCreateTag,
      callback);
  }

  methodInfoDeleteTag = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTagRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTag(
    request: DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/DeleteTag',
      request,
      metadata || {},
      this.methodInfoDeleteTag,
      callback);
  }

  methodInfoListTags = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTagsResponse,
    (request: ListTagsRequest) => {
      return request.serializeBinary();
    },
    ListTagsResponse.deserializeBinary
  );

  listTags(
    request: ListTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTagsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ListTags',
      request,
      metadata || {},
      this.methodInfoListTags,
      callback);
  }

  methodInfoCreateSignal = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Signal,
    (request: CreateSignalRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinary
  );

  createSignal(
    request: CreateSignalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Signal) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateSignal',
      request,
      metadata || {},
      this.methodInfoCreateSignal,
      callback);
  }

  methodInfoSearchSignals = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchSignalsResponse,
    (request: SearchSignalsRequest) => {
      return request.serializeBinary();
    },
    SearchSignalsResponse.deserializeBinary
  );

  searchSignals(
    request: SearchSignalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchSignalsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/SearchSignals',
      request,
      metadata || {},
      this.methodInfoSearchSignals,
      callback);
  }

  methodInfoLookupSignal = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Signal,
    (request: LookupSignalRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinary
  );

  lookupSignal(
    request: LookupSignalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Signal) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/LookupSignal',
      request,
      metadata || {},
      this.methodInfoLookupSignal,
      callback);
  }

  methodInfoGetSignal = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Signal,
    (request: GetSignalRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinary
  );

  getSignal(
    request: GetSignalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Signal) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/GetSignal',
      request,
      metadata || {},
      this.methodInfoGetSignal,
      callback);
  }

  methodInfoUpdateSignal = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Signal,
    (request: UpdateSignalRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinary
  );

  updateSignal(
    request: UpdateSignalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Signal) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/UpdateSignal',
      request,
      metadata || {},
      this.methodInfoUpdateSignal,
      callback);
  }

  methodInfoEscalateIncident = new grpcWeb.AbstractClientBase.MethodInfo(
    EscalateIncidentResponse,
    (request: EscalateIncidentRequest) => {
      return request.serializeBinary();
    },
    EscalateIncidentResponse.deserializeBinary
  );

  escalateIncident(
    request: EscalateIncidentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EscalateIncidentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/EscalateIncident',
      request,
      metadata || {},
      this.methodInfoEscalateIncident,
      callback);
  }

  methodInfoCreateArtifact = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Artifact,
    (request: CreateArtifactRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinary
  );

  createArtifact(
    request: CreateArtifactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Artifact) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateArtifact',
      request,
      metadata || {},
      this.methodInfoCreateArtifact,
      callback);
  }

  methodInfoListArtifacts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListArtifactsResponse,
    (request: ListArtifactsRequest) => {
      return request.serializeBinary();
    },
    ListArtifactsResponse.deserializeBinary
  );

  listArtifacts(
    request: ListArtifactsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListArtifactsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ListArtifacts',
      request,
      metadata || {},
      this.methodInfoListArtifacts,
      callback);
  }

  methodInfoUpdateArtifact = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Artifact,
    (request: UpdateArtifactRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinary
  );

  updateArtifact(
    request: UpdateArtifactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Artifact) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/UpdateArtifact',
      request,
      metadata || {},
      this.methodInfoUpdateArtifact,
      callback);
  }

  methodInfoDeleteArtifact = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteArtifactRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteArtifact(
    request: DeleteArtifactRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/DeleteArtifact',
      request,
      metadata || {},
      this.methodInfoDeleteArtifact,
      callback);
  }

  methodInfoSendShiftHandoff = new grpcWeb.AbstractClientBase.MethodInfo(
    SendShiftHandoffResponse,
    (request: SendShiftHandoffRequest) => {
      return request.serializeBinary();
    },
    SendShiftHandoffResponse.deserializeBinary
  );

  sendShiftHandoff(
    request: SendShiftHandoffRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SendShiftHandoffResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/SendShiftHandoff',
      request,
      metadata || {},
      this.methodInfoSendShiftHandoff,
      callback);
  }

  methodInfoCreateSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Subscription,
    (request: CreateSubscriptionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinary
  );

  createSubscription(
    request: CreateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Subscription) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateSubscription',
      request,
      metadata || {},
      this.methodInfoCreateSubscription,
      callback);
  }

  methodInfoUpdateSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.Subscription,
    (request: UpdateSubscriptionRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinary
  );

  updateSubscription(
    request: UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.Subscription) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/UpdateSubscription',
      request,
      metadata || {},
      this.methodInfoUpdateSubscription,
      callback);
  }

  methodInfoListSubscriptions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSubscriptionsResponse,
    (request: ListSubscriptionsRequest) => {
      return request.serializeBinary();
    },
    ListSubscriptionsResponse.deserializeBinary
  );

  listSubscriptions(
    request: ListSubscriptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSubscriptionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ListSubscriptions',
      request,
      metadata || {},
      this.methodInfoListSubscriptions,
      callback);
  }

  methodInfoDeleteSubscription = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSubscriptionRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSubscription(
    request: DeleteSubscriptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/DeleteSubscription',
      request,
      metadata || {},
      this.methodInfoDeleteSubscription,
      callback);
  }

  methodInfoCreateIncidentRoleAssignment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    (request: CreateIncidentRoleAssignmentRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary
  );

  createIncidentRoleAssignment(
    request: CreateIncidentRoleAssignmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CreateIncidentRoleAssignment',
      request,
      metadata || {},
      this.methodInfoCreateIncidentRoleAssignment,
      callback);
  }

  methodInfoDeleteIncidentRoleAssignment = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteIncidentRoleAssignmentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteIncidentRoleAssignment(
    request: DeleteIncidentRoleAssignmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/DeleteIncidentRoleAssignment',
      request,
      metadata || {},
      this.methodInfoDeleteIncidentRoleAssignment,
      callback);
  }

  methodInfoListIncidentRoleAssignments = new grpcWeb.AbstractClientBase.MethodInfo(
    ListIncidentRoleAssignmentsResponse,
    (request: ListIncidentRoleAssignmentsRequest) => {
      return request.serializeBinary();
    },
    ListIncidentRoleAssignmentsResponse.deserializeBinary
  );

  listIncidentRoleAssignments(
    request: ListIncidentRoleAssignmentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListIncidentRoleAssignmentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ListIncidentRoleAssignments',
      request,
      metadata || {},
      this.methodInfoListIncidentRoleAssignments,
      callback);
  }

  methodInfoRequestIncidentRoleHandover = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    (request: RequestIncidentRoleHandoverRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary
  );

  requestIncidentRoleHandover(
    request: RequestIncidentRoleHandoverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/RequestIncidentRoleHandover',
      request,
      metadata || {},
      this.methodInfoRequestIncidentRoleHandover,
      callback);
  }

  methodInfoConfirmIncidentRoleHandover = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    (request: ConfirmIncidentRoleHandoverRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary
  );

  confirmIncidentRoleHandover(
    request: ConfirmIncidentRoleHandoverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ConfirmIncidentRoleHandover',
      request,
      metadata || {},
      this.methodInfoConfirmIncidentRoleHandover,
      callback);
  }

  methodInfoForceIncidentRoleHandover = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    (request: ForceIncidentRoleHandoverRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary
  );

  forceIncidentRoleHandover(
    request: ForceIncidentRoleHandoverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/ForceIncidentRoleHandover',
      request,
      metadata || {},
      this.methodInfoForceIncidentRoleHandover,
      callback);
  }

  methodInfoCancelIncidentRoleHandover = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    (request: CancelIncidentRoleHandoverRequest) => {
      return request.serializeBinary();
    },
    google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary
  );

  cancelIncidentRoleHandover(
    request: CancelIncidentRoleHandoverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.irm.v1alpha2.IncidentService/CancelIncidentRoleHandover',
      request,
      metadata || {},
      this.methodInfoCancelIncidentRoleHandover,
      callback);
  }

}

