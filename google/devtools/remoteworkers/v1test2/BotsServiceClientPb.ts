/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.remoteworkers.v1test2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_devtools_remoteworkers_v1test2_worker_pb from '../../../../google/devtools/remoteworkers/v1test2/worker_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  BotSession,
  CreateBotSessionRequest,
  UpdateBotSessionRequest} from './bots_pb';

export class BotsClient {
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

  methodInfoCreateBotSession = new grpcWeb.AbstractClientBase.MethodInfo(
    BotSession,
    (request: CreateBotSessionRequest) => {
      return request.serializeBinary();
    },
    BotSession.deserializeBinary
  );

  createBotSession(
    request: CreateBotSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BotSession) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.remoteworkers.v1test2.Bots/CreateBotSession',
      request,
      metadata || {},
      this.methodInfoCreateBotSession,
      callback);
  }

  methodInfoUpdateBotSession = new grpcWeb.AbstractClientBase.MethodInfo(
    BotSession,
    (request: UpdateBotSessionRequest) => {
      return request.serializeBinary();
    },
    BotSession.deserializeBinary
  );

  updateBotSession(
    request: UpdateBotSessionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BotSession) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.devtools.remoteworkers.v1test2.Bots/UpdateBotSession',
      request,
      metadata || {},
      this.methodInfoUpdateBotSession,
      callback);
  }

}

