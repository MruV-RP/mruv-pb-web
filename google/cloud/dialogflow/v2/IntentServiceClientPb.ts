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
import * as google_cloud_dialogflow_v2_audio_config_pb from '../../../../google/cloud/dialogflow/v2/audio_config_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

import {
  BatchDeleteIntentsRequest,
  BatchUpdateIntentsRequest,
  CreateIntentRequest,
  DeleteIntentRequest,
  GetIntentRequest,
  Intent,
  ListIntentsRequest,
  ListIntentsResponse,
  UpdateIntentRequest} from './intent_pb';

export class IntentsClient {
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

  methodInfoListIntents = new grpcWeb.AbstractClientBase.MethodInfo(
    ListIntentsResponse,
    (request: ListIntentsRequest) => {
      return request.serializeBinary();
    },
    ListIntentsResponse.deserializeBinary
  );

  listIntents(
    request: ListIntentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListIntentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/ListIntents',
      request,
      metadata || {},
      this.methodInfoListIntents,
      callback);
  }

  methodInfoGetIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    Intent,
    (request: GetIntentRequest) => {
      return request.serializeBinary();
    },
    Intent.deserializeBinary
  );

  getIntent(
    request: GetIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Intent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/GetIntent',
      request,
      metadata || {},
      this.methodInfoGetIntent,
      callback);
  }

  methodInfoCreateIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    Intent,
    (request: CreateIntentRequest) => {
      return request.serializeBinary();
    },
    Intent.deserializeBinary
  );

  createIntent(
    request: CreateIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Intent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/CreateIntent',
      request,
      metadata || {},
      this.methodInfoCreateIntent,
      callback);
  }

  methodInfoUpdateIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    Intent,
    (request: UpdateIntentRequest) => {
      return request.serializeBinary();
    },
    Intent.deserializeBinary
  );

  updateIntent(
    request: UpdateIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Intent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/UpdateIntent',
      request,
      metadata || {},
      this.methodInfoUpdateIntent,
      callback);
  }

  methodInfoDeleteIntent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteIntentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteIntent(
    request: DeleteIntentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/DeleteIntent',
      request,
      metadata || {},
      this.methodInfoDeleteIntent,
      callback);
  }

  methodInfoBatchUpdateIntents = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchUpdateIntentsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchUpdateIntents(
    request: BatchUpdateIntentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      this.methodInfoBatchUpdateIntents,
      callback);
  }

  methodInfoBatchDeleteIntents = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchDeleteIntentsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchDeleteIntents(
    request: BatchDeleteIntentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      this.methodInfoBatchDeleteIntents,
      callback);
  }

}

