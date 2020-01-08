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
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  Agent,
  DeleteAgentRequest,
  ExportAgentRequest,
  GetAgentRequest,
  ImportAgentRequest,
  RestoreAgentRequest,
  SearchAgentsRequest,
  SearchAgentsResponse,
  SetAgentRequest,
  TrainAgentRequest} from './agent_pb';

export class AgentsClient {
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

  methodInfoGetAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    Agent,
    (request: GetAgentRequest) => {
      return request.serializeBinary();
    },
    Agent.deserializeBinary
  );

  getAgent(
    request: GetAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Agent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/GetAgent',
      request,
      metadata || {},
      this.methodInfoGetAgent,
      callback);
  }

  methodInfoSetAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    Agent,
    (request: SetAgentRequest) => {
      return request.serializeBinary();
    },
    Agent.deserializeBinary
  );

  setAgent(
    request: SetAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Agent) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/SetAgent',
      request,
      metadata || {},
      this.methodInfoSetAgent,
      callback);
  }

  methodInfoDeleteAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteAgentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteAgent(
    request: DeleteAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/DeleteAgent',
      request,
      metadata || {},
      this.methodInfoDeleteAgent,
      callback);
  }

  methodInfoSearchAgents = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchAgentsResponse,
    (request: SearchAgentsRequest) => {
      return request.serializeBinary();
    },
    SearchAgentsResponse.deserializeBinary
  );

  searchAgents(
    request: SearchAgentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchAgentsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/SearchAgents',
      request,
      metadata || {},
      this.methodInfoSearchAgents,
      callback);
  }

  methodInfoTrainAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: TrainAgentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  trainAgent(
    request: TrainAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/TrainAgent',
      request,
      metadata || {},
      this.methodInfoTrainAgent,
      callback);
  }

  methodInfoExportAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ExportAgentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  exportAgent(
    request: ExportAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/ExportAgent',
      request,
      metadata || {},
      this.methodInfoExportAgent,
      callback);
  }

  methodInfoImportAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: ImportAgentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  importAgent(
    request: ImportAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/ImportAgent',
      request,
      metadata || {},
      this.methodInfoImportAgent,
      callback);
  }

  methodInfoRestoreAgent = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RestoreAgentRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  restoreAgent(
    request: RestoreAgentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.Agents/RestoreAgent',
      request,
      metadata || {},
      this.methodInfoRestoreAgent,
      callback);
  }

}

