/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2beta1_entity_type_pb from '../../../../google/cloud/dialogflow/v2beta1/entity_type_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateSessionEntityTypeRequest,
  DeleteSessionEntityTypeRequest,
  GetSessionEntityTypeRequest,
  ListSessionEntityTypesRequest,
  ListSessionEntityTypesResponse,
  SessionEntityType,
  UpdateSessionEntityTypeRequest} from './session_entity_type_pb';

export class SessionEntityTypesClient {
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

  methodInfoListSessionEntityTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSessionEntityTypesResponse,
    (request: ListSessionEntityTypesRequest) => {
      return request.serializeBinary();
    },
    ListSessionEntityTypesResponse.deserializeBinary
  );

  listSessionEntityTypes(
    request: ListSessionEntityTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSessionEntityTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.SessionEntityTypes/ListSessionEntityTypes',
      request,
      metadata || {},
      this.methodInfoListSessionEntityTypes,
      callback);
  }

  methodInfoGetSessionEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    SessionEntityType,
    (request: GetSessionEntityTypeRequest) => {
      return request.serializeBinary();
    },
    SessionEntityType.deserializeBinary
  );

  getSessionEntityType(
    request: GetSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessionEntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.SessionEntityTypes/GetSessionEntityType',
      request,
      metadata || {},
      this.methodInfoGetSessionEntityType,
      callback);
  }

  methodInfoCreateSessionEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    SessionEntityType,
    (request: CreateSessionEntityTypeRequest) => {
      return request.serializeBinary();
    },
    SessionEntityType.deserializeBinary
  );

  createSessionEntityType(
    request: CreateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessionEntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.SessionEntityTypes/CreateSessionEntityType',
      request,
      metadata || {},
      this.methodInfoCreateSessionEntityType,
      callback);
  }

  methodInfoUpdateSessionEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    SessionEntityType,
    (request: UpdateSessionEntityTypeRequest) => {
      return request.serializeBinary();
    },
    SessionEntityType.deserializeBinary
  );

  updateSessionEntityType(
    request: UpdateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessionEntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.SessionEntityTypes/UpdateSessionEntityType',
      request,
      metadata || {},
      this.methodInfoUpdateSessionEntityType,
      callback);
  }

  methodInfoDeleteSessionEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteSessionEntityTypeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteSessionEntityType(
    request: DeleteSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.SessionEntityTypes/DeleteSessionEntityType',
      request,
      metadata || {},
      this.methodInfoDeleteSessionEntityType,
      callback);
  }

}

