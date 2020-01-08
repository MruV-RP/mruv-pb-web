/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_monitoring_v3_alert_pb from '../../../google/monitoring/v3/alert_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateAlertPolicyRequest,
  DeleteAlertPolicyRequest,
  GetAlertPolicyRequest,
  ListAlertPoliciesRequest,
  ListAlertPoliciesResponse,
  UpdateAlertPolicyRequest} from './alert_service_pb';

export class AlertPolicyServiceClient {
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

  methodInfoListAlertPolicies = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAlertPoliciesResponse,
    (request: ListAlertPoliciesRequest) => {
      return request.serializeBinary();
    },
    ListAlertPoliciesResponse.deserializeBinary
  );

  listAlertPolicies(
    request: ListAlertPoliciesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAlertPoliciesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.AlertPolicyService/ListAlertPolicies',
      request,
      metadata || {},
      this.methodInfoListAlertPolicies,
      callback);
  }

  methodInfoGetAlertPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_alert_pb.AlertPolicy,
    (request: GetAlertPolicyRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
  );

  getAlertPolicy(
    request: GetAlertPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.AlertPolicyService/GetAlertPolicy',
      request,
      metadata || {},
      this.methodInfoGetAlertPolicy,
      callback);
  }

  methodInfoCreateAlertPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_alert_pb.AlertPolicy,
    (request: CreateAlertPolicyRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
  );

  createAlertPolicy(
    request: CreateAlertPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.AlertPolicyService/CreateAlertPolicy',
      request,
      metadata || {},
      this.methodInfoCreateAlertPolicy,
      callback);
  }

  methodInfoDeleteAlertPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAlertPolicyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAlertPolicy(
    request: DeleteAlertPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.AlertPolicyService/DeleteAlertPolicy',
      request,
      metadata || {},
      this.methodInfoDeleteAlertPolicy,
      callback);
  }

  methodInfoUpdateAlertPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_alert_pb.AlertPolicy,
    (request: UpdateAlertPolicyRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_alert_pb.AlertPolicy.deserializeBinary
  );

  updateAlertPolicy(
    request: UpdateAlertPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.AlertPolicyService/UpdateAlertPolicy',
      request,
      metadata || {},
      this.methodInfoUpdateAlertPolicy,
      callback);
  }

}

