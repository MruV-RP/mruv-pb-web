/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  AutoscalingPolicy,
  CreateAutoscalingPolicyRequest,
  DeleteAutoscalingPolicyRequest,
  GetAutoscalingPolicyRequest,
  ListAutoscalingPoliciesRequest,
  ListAutoscalingPoliciesResponse,
  UpdateAutoscalingPolicyRequest} from './autoscaling_policies_pb';

export class AutoscalingPolicyServiceClient {
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

  methodInfoCreateAutoscalingPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    AutoscalingPolicy,
    (request: CreateAutoscalingPolicyRequest) => {
      return request.serializeBinary();
    },
    AutoscalingPolicy.deserializeBinary
  );

  createAutoscalingPolicy(
    request: CreateAutoscalingPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AutoscalingPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.AutoscalingPolicyService/CreateAutoscalingPolicy',
      request,
      metadata || {},
      this.methodInfoCreateAutoscalingPolicy,
      callback);
  }

  methodInfoUpdateAutoscalingPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    AutoscalingPolicy,
    (request: UpdateAutoscalingPolicyRequest) => {
      return request.serializeBinary();
    },
    AutoscalingPolicy.deserializeBinary
  );

  updateAutoscalingPolicy(
    request: UpdateAutoscalingPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AutoscalingPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.AutoscalingPolicyService/UpdateAutoscalingPolicy',
      request,
      metadata || {},
      this.methodInfoUpdateAutoscalingPolicy,
      callback);
  }

  methodInfoGetAutoscalingPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    AutoscalingPolicy,
    (request: GetAutoscalingPolicyRequest) => {
      return request.serializeBinary();
    },
    AutoscalingPolicy.deserializeBinary
  );

  getAutoscalingPolicy(
    request: GetAutoscalingPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AutoscalingPolicy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.AutoscalingPolicyService/GetAutoscalingPolicy',
      request,
      metadata || {},
      this.methodInfoGetAutoscalingPolicy,
      callback);
  }

  methodInfoListAutoscalingPolicies = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAutoscalingPoliciesResponse,
    (request: ListAutoscalingPoliciesRequest) => {
      return request.serializeBinary();
    },
    ListAutoscalingPoliciesResponse.deserializeBinary
  );

  listAutoscalingPolicies(
    request: ListAutoscalingPoliciesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAutoscalingPoliciesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.AutoscalingPolicyService/ListAutoscalingPolicies',
      request,
      metadata || {},
      this.methodInfoListAutoscalingPolicies,
      callback);
  }

  methodInfoDeleteAutoscalingPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAutoscalingPolicyRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAutoscalingPolicy(
    request: DeleteAutoscalingPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.AutoscalingPolicyService/DeleteAutoscalingPolicy',
      request,
      metadata || {},
      this.methodInfoDeleteAutoscalingPolicy,
      callback);
  }

}

