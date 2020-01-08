/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';

import {
  CreateKnowledgeBaseRequest,
  DeleteKnowledgeBaseRequest,
  GetKnowledgeBaseRequest,
  KnowledgeBase,
  ListKnowledgeBasesRequest,
  ListKnowledgeBasesResponse,
  UpdateKnowledgeBaseRequest} from './knowledge_base_pb';

export class KnowledgeBasesClient {
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

  methodInfoListKnowledgeBases = new grpcWeb.AbstractClientBase.MethodInfo(
    ListKnowledgeBasesResponse,
    (request: ListKnowledgeBasesRequest) => {
      return request.serializeBinary();
    },
    ListKnowledgeBasesResponse.deserializeBinary
  );

  listKnowledgeBases(
    request: ListKnowledgeBasesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListKnowledgeBasesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.KnowledgeBases/ListKnowledgeBases',
      request,
      metadata || {},
      this.methodInfoListKnowledgeBases,
      callback);
  }

  methodInfoGetKnowledgeBase = new grpcWeb.AbstractClientBase.MethodInfo(
    KnowledgeBase,
    (request: GetKnowledgeBaseRequest) => {
      return request.serializeBinary();
    },
    KnowledgeBase.deserializeBinary
  );

  getKnowledgeBase(
    request: GetKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: KnowledgeBase) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.KnowledgeBases/GetKnowledgeBase',
      request,
      metadata || {},
      this.methodInfoGetKnowledgeBase,
      callback);
  }

  methodInfoCreateKnowledgeBase = new grpcWeb.AbstractClientBase.MethodInfo(
    KnowledgeBase,
    (request: CreateKnowledgeBaseRequest) => {
      return request.serializeBinary();
    },
    KnowledgeBase.deserializeBinary
  );

  createKnowledgeBase(
    request: CreateKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: KnowledgeBase) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.KnowledgeBases/CreateKnowledgeBase',
      request,
      metadata || {},
      this.methodInfoCreateKnowledgeBase,
      callback);
  }

  methodInfoDeleteKnowledgeBase = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteKnowledgeBaseRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteKnowledgeBase(
    request: DeleteKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.KnowledgeBases/DeleteKnowledgeBase',
      request,
      metadata || {},
      this.methodInfoDeleteKnowledgeBase,
      callback);
  }

  methodInfoUpdateKnowledgeBase = new grpcWeb.AbstractClientBase.MethodInfo(
    KnowledgeBase,
    (request: UpdateKnowledgeBaseRequest) => {
      return request.serializeBinary();
    },
    KnowledgeBase.deserializeBinary
  );

  updateKnowledgeBase(
    request: UpdateKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: KnowledgeBase) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2beta1.KnowledgeBases/UpdateKnowledgeBase',
      request,
      metadata || {},
      this.methodInfoUpdateKnowledgeBase,
      callback);
  }

}

