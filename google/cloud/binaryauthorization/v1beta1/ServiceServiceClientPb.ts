/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.binaryauthorization.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_binaryauthorization_v1beta1_resources_pb from '../../../../google/cloud/binaryauthorization/v1beta1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  CreateAttestorRequest,
  DeleteAttestorRequest,
  GetAttestorRequest,
  GetPolicyRequest,
  ListAttestorsRequest,
  ListAttestorsResponse,
  UpdateAttestorRequest,
  UpdatePolicyRequest} from './service_pb';

export class BinauthzManagementServiceV1Beta1Client {
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

  methodInfoGetPolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_binaryauthorization_v1beta1_resources_pb.Policy,
    (request: GetPolicyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_binaryauthorization_v1beta1_resources_pb.Policy.deserializeBinary
  );

  getPolicy(
    request: GetPolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/GetPolicy',
      request,
      metadata || {},
      this.methodInfoGetPolicy,
      callback);
  }

  methodInfoUpdatePolicy = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_binaryauthorization_v1beta1_resources_pb.Policy,
    (request: UpdatePolicyRequest) => {
      return request.serializeBinary();
    },
    google_cloud_binaryauthorization_v1beta1_resources_pb.Policy.deserializeBinary
  );

  updatePolicy(
    request: UpdatePolicyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_binaryauthorization_v1beta1_resources_pb.Policy) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/UpdatePolicy',
      request,
      metadata || {},
      this.methodInfoUpdatePolicy,
      callback);
  }

  methodInfoCreateAttestor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    (request: CreateAttestorRequest) => {
      return request.serializeBinary();
    },
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.deserializeBinary
  );

  createAttestor(
    request: CreateAttestorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/CreateAttestor',
      request,
      metadata || {},
      this.methodInfoCreateAttestor,
      callback);
  }

  methodInfoGetAttestor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    (request: GetAttestorRequest) => {
      return request.serializeBinary();
    },
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.deserializeBinary
  );

  getAttestor(
    request: GetAttestorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/GetAttestor',
      request,
      metadata || {},
      this.methodInfoGetAttestor,
      callback);
  }

  methodInfoUpdateAttestor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor,
    (request: UpdateAttestorRequest) => {
      return request.serializeBinary();
    },
    google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor.deserializeBinary
  );

  updateAttestor(
    request: UpdateAttestorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_binaryauthorization_v1beta1_resources_pb.Attestor) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/UpdateAttestor',
      request,
      metadata || {},
      this.methodInfoUpdateAttestor,
      callback);
  }

  methodInfoListAttestors = new grpcWeb.AbstractClientBase.MethodInfo(
    ListAttestorsResponse,
    (request: ListAttestorsRequest) => {
      return request.serializeBinary();
    },
    ListAttestorsResponse.deserializeBinary
  );

  listAttestors(
    request: ListAttestorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListAttestorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/ListAttestors',
      request,
      metadata || {},
      this.methodInfoListAttestors,
      callback);
  }

  methodInfoDeleteAttestor = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAttestorRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAttestor(
    request: DeleteAttestorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1/DeleteAttestor',
      request,
      metadata || {},
      this.methodInfoDeleteAttestor,
      callback);
  }

}

