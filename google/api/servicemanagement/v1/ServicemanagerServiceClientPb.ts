/**
 * @fileoverview gRPC-Web generated client stub for google.api.servicemanagement.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_service_pb from '../../../../google/api/service_pb';
import * as google_api_servicemanagement_v1_resources_pb from '../../../../google/api/servicemanagement/v1/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  CreateServiceConfigRequest,
  CreateServiceRequest,
  CreateServiceRolloutRequest,
  DeleteServiceRequest,
  DisableServiceRequest,
  EnableServiceRequest,
  GenerateConfigReportRequest,
  GenerateConfigReportResponse,
  GetServiceConfigRequest,
  GetServiceRequest,
  GetServiceRolloutRequest,
  ListServiceConfigsRequest,
  ListServiceConfigsResponse,
  ListServiceRolloutsRequest,
  ListServiceRolloutsResponse,
  ListServicesRequest,
  ListServicesResponse,
  SubmitConfigSourceRequest,
  UndeleteServiceRequest} from './servicemanager_pb';

export class ServiceManagerClient {
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

  methodInfoListServices = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServicesResponse,
    (request: ListServicesRequest) => {
      return request.serializeBinary();
    },
    ListServicesResponse.deserializeBinary
  );

  listServices(
    request: ListServicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/ListServices',
      request,
      metadata || {},
      this.methodInfoListServices,
      callback);
  }

  methodInfoGetService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_servicemanagement_v1_resources_pb.ManagedService,
    (request: GetServiceRequest) => {
      return request.serializeBinary();
    },
    google_api_servicemanagement_v1_resources_pb.ManagedService.deserializeBinary
  );

  getService(
    request: GetServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_resources_pb.ManagedService) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/GetService',
      request,
      metadata || {},
      this.methodInfoGetService,
      callback);
  }

  methodInfoCreateService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createService(
    request: CreateServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/CreateService',
      request,
      metadata || {},
      this.methodInfoCreateService,
      callback);
  }

  methodInfoDeleteService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteService(
    request: DeleteServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/DeleteService',
      request,
      metadata || {},
      this.methodInfoDeleteService,
      callback);
  }

  methodInfoUndeleteService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UndeleteServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  undeleteService(
    request: UndeleteServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/UndeleteService',
      request,
      metadata || {},
      this.methodInfoUndeleteService,
      callback);
  }

  methodInfoListServiceConfigs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServiceConfigsResponse,
    (request: ListServiceConfigsRequest) => {
      return request.serializeBinary();
    },
    ListServiceConfigsResponse.deserializeBinary
  );

  listServiceConfigs(
    request: ListServiceConfigsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServiceConfigsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/ListServiceConfigs',
      request,
      metadata || {},
      this.methodInfoListServiceConfigs,
      callback);
  }

  methodInfoGetServiceConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_service_pb.Service,
    (request: GetServiceConfigRequest) => {
      return request.serializeBinary();
    },
    google_api_service_pb.Service.deserializeBinary
  );

  getServiceConfig(
    request: GetServiceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/GetServiceConfig',
      request,
      metadata || {},
      this.methodInfoGetServiceConfig,
      callback);
  }

  methodInfoCreateServiceConfig = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_service_pb.Service,
    (request: CreateServiceConfigRequest) => {
      return request.serializeBinary();
    },
    google_api_service_pb.Service.deserializeBinary
  );

  createServiceConfig(
    request: CreateServiceConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/CreateServiceConfig',
      request,
      metadata || {},
      this.methodInfoCreateServiceConfig,
      callback);
  }

  methodInfoSubmitConfigSource = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: SubmitConfigSourceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  submitConfigSource(
    request: SubmitConfigSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/SubmitConfigSource',
      request,
      metadata || {},
      this.methodInfoSubmitConfigSource,
      callback);
  }

  methodInfoListServiceRollouts = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServiceRolloutsResponse,
    (request: ListServiceRolloutsRequest) => {
      return request.serializeBinary();
    },
    ListServiceRolloutsResponse.deserializeBinary
  );

  listServiceRollouts(
    request: ListServiceRolloutsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServiceRolloutsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/ListServiceRollouts',
      request,
      metadata || {},
      this.methodInfoListServiceRollouts,
      callback);
  }

  methodInfoGetServiceRollout = new grpcWeb.AbstractClientBase.MethodInfo(
    google_api_servicemanagement_v1_resources_pb.Rollout,
    (request: GetServiceRolloutRequest) => {
      return request.serializeBinary();
    },
    google_api_servicemanagement_v1_resources_pb.Rollout.deserializeBinary
  );

  getServiceRollout(
    request: GetServiceRolloutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_resources_pb.Rollout) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/GetServiceRollout',
      request,
      metadata || {},
      this.methodInfoGetServiceRollout,
      callback);
  }

  methodInfoCreateServiceRollout = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateServiceRolloutRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createServiceRollout(
    request: CreateServiceRolloutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/CreateServiceRollout',
      request,
      metadata || {},
      this.methodInfoCreateServiceRollout,
      callback);
  }

  methodInfoGenerateConfigReport = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateConfigReportResponse,
    (request: GenerateConfigReportRequest) => {
      return request.serializeBinary();
    },
    GenerateConfigReportResponse.deserializeBinary
  );

  generateConfigReport(
    request: GenerateConfigReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateConfigReportResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/GenerateConfigReport',
      request,
      metadata || {},
      this.methodInfoGenerateConfigReport,
      callback);
  }

  methodInfoEnableService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: EnableServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  enableService(
    request: EnableServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/EnableService',
      request,
      metadata || {},
      this.methodInfoEnableService,
      callback);
  }

  methodInfoDisableService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DisableServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  disableService(
    request: DisableServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.api.servicemanagement.v1.ServiceManager/DisableService',
      request,
      metadata || {},
      this.methodInfoDisableService,
      callback);
  }

}

