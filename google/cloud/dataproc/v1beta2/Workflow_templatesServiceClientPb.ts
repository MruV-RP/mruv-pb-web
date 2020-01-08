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
import * as google_cloud_dataproc_v1beta2_clusters_pb from '../../../../google/cloud/dataproc/v1beta2/clusters_pb';
import * as google_cloud_dataproc_v1beta2_jobs_pb from '../../../../google/cloud/dataproc/v1beta2/jobs_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CreateWorkflowTemplateRequest,
  DeleteWorkflowTemplateRequest,
  GetWorkflowTemplateRequest,
  InstantiateInlineWorkflowTemplateRequest,
  InstantiateWorkflowTemplateRequest,
  ListWorkflowTemplatesRequest,
  ListWorkflowTemplatesResponse,
  UpdateWorkflowTemplateRequest,
  WorkflowTemplate} from './workflow_templates_pb';

export class WorkflowTemplateServiceClient {
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

  methodInfoCreateWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkflowTemplate,
    (request: CreateWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    WorkflowTemplate.deserializeBinary
  );

  createWorkflowTemplate(
    request: CreateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkflowTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/CreateWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoCreateWorkflowTemplate,
      callback);
  }

  methodInfoGetWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkflowTemplate,
    (request: GetWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    WorkflowTemplate.deserializeBinary
  );

  getWorkflowTemplate(
    request: GetWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkflowTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/GetWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoGetWorkflowTemplate,
      callback);
  }

  methodInfoInstantiateWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: InstantiateWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  instantiateWorkflowTemplate(
    request: InstantiateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoInstantiateWorkflowTemplate,
      callback);
  }

  methodInfoInstantiateInlineWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: InstantiateInlineWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  instantiateInlineWorkflowTemplate(
    request: InstantiateInlineWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/InstantiateInlineWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoInstantiateInlineWorkflowTemplate,
      callback);
  }

  methodInfoUpdateWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    WorkflowTemplate,
    (request: UpdateWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    WorkflowTemplate.deserializeBinary
  );

  updateWorkflowTemplate(
    request: UpdateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WorkflowTemplate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/UpdateWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoUpdateWorkflowTemplate,
      callback);
  }

  methodInfoListWorkflowTemplates = new grpcWeb.AbstractClientBase.MethodInfo(
    ListWorkflowTemplatesResponse,
    (request: ListWorkflowTemplatesRequest) => {
      return request.serializeBinary();
    },
    ListWorkflowTemplatesResponse.deserializeBinary
  );

  listWorkflowTemplates(
    request: ListWorkflowTemplatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListWorkflowTemplatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/ListWorkflowTemplates',
      request,
      metadata || {},
      this.methodInfoListWorkflowTemplates,
      callback);
  }

  methodInfoDeleteWorkflowTemplate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteWorkflowTemplateRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteWorkflowTemplate(
    request: DeleteWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1beta2.WorkflowTemplateService/DeleteWorkflowTemplate',
      request,
      metadata || {},
      this.methodInfoDeleteWorkflowTemplate,
      callback);
  }

}

