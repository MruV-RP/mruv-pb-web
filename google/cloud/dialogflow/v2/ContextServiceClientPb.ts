/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

import {
  Context,
  CreateContextRequest,
  DeleteAllContextsRequest,
  DeleteContextRequest,
  GetContextRequest,
  ListContextsRequest,
  ListContextsResponse,
  UpdateContextRequest} from './context_pb';

export class ContextsClient {
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

  methodInfoListContexts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListContextsResponse,
    (request: ListContextsRequest) => {
      return request.serializeBinary();
    },
    ListContextsResponse.deserializeBinary
  );

  listContexts(
    request: ListContextsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListContextsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/ListContexts',
      request,
      metadata || {},
      this.methodInfoListContexts,
      callback);
  }

  methodInfoGetContext = new grpcWeb.AbstractClientBase.MethodInfo(
    Context,
    (request: GetContextRequest) => {
      return request.serializeBinary();
    },
    Context.deserializeBinary
  );

  getContext(
    request: GetContextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Context) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/GetContext',
      request,
      metadata || {},
      this.methodInfoGetContext,
      callback);
  }

  methodInfoCreateContext = new grpcWeb.AbstractClientBase.MethodInfo(
    Context,
    (request: CreateContextRequest) => {
      return request.serializeBinary();
    },
    Context.deserializeBinary
  );

  createContext(
    request: CreateContextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Context) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/CreateContext',
      request,
      metadata || {},
      this.methodInfoCreateContext,
      callback);
  }

  methodInfoUpdateContext = new grpcWeb.AbstractClientBase.MethodInfo(
    Context,
    (request: UpdateContextRequest) => {
      return request.serializeBinary();
    },
    Context.deserializeBinary
  );

  updateContext(
    request: UpdateContextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Context) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/UpdateContext',
      request,
      metadata || {},
      this.methodInfoUpdateContext,
      callback);
  }

  methodInfoDeleteContext = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteContextRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteContext(
    request: DeleteContextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/DeleteContext',
      request,
      metadata || {},
      this.methodInfoDeleteContext,
      callback);
  }

  methodInfoDeleteAllContexts = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAllContextsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAllContexts(
    request: DeleteAllContextsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Contexts/DeleteAllContexts',
      request,
      metadata || {},
      this.methodInfoDeleteAllContexts,
      callback);
  }

}

