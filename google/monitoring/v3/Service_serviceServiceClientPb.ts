/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_monitoring_v3_service_pb from '../../../google/monitoring/v3/service_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateServiceLevelObjectiveRequest,
  CreateServiceRequest,
  DeleteServiceLevelObjectiveRequest,
  DeleteServiceRequest,
  GetServiceLevelObjectiveRequest,
  GetServiceRequest,
  ListServiceLevelObjectivesRequest,
  ListServiceLevelObjectivesResponse,
  ListServicesRequest,
  ListServicesResponse,
  UpdateServiceLevelObjectiveRequest,
  UpdateServiceRequest} from './service_service_pb';

export class ServiceMonitoringServiceClient {
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

  methodInfoCreateService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.Service,
    (request: CreateServiceRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.Service.deserializeBinary
  );

  createService(
    request: CreateServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/CreateService',
      request,
      metadata || {},
      this.methodInfoCreateService,
      callback);
  }

  methodInfoGetService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.Service,
    (request: GetServiceRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.Service.deserializeBinary
  );

  getService(
    request: GetServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/GetService',
      request,
      metadata || {},
      this.methodInfoGetService,
      callback);
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
        '/google.monitoring.v3.ServiceMonitoringService/ListServices',
      request,
      metadata || {},
      this.methodInfoListServices,
      callback);
  }

  methodInfoUpdateService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.Service,
    (request: UpdateServiceRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.Service.deserializeBinary
  );

  updateService(
    request: UpdateServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/UpdateService',
      request,
      metadata || {},
      this.methodInfoUpdateService,
      callback);
  }

  methodInfoDeleteService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteServiceRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteService(
    request: DeleteServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/DeleteService',
      request,
      metadata || {},
      this.methodInfoDeleteService,
      callback);
  }

  methodInfoCreateServiceLevelObjective = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.ServiceLevelObjective,
    (request: CreateServiceLevelObjectiveRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.ServiceLevelObjective.deserializeBinary
  );

  createServiceLevelObjective(
    request: CreateServiceLevelObjectiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.ServiceLevelObjective) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/CreateServiceLevelObjective',
      request,
      metadata || {},
      this.methodInfoCreateServiceLevelObjective,
      callback);
  }

  methodInfoGetServiceLevelObjective = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.ServiceLevelObjective,
    (request: GetServiceLevelObjectiveRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.ServiceLevelObjective.deserializeBinary
  );

  getServiceLevelObjective(
    request: GetServiceLevelObjectiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.ServiceLevelObjective) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/GetServiceLevelObjective',
      request,
      metadata || {},
      this.methodInfoGetServiceLevelObjective,
      callback);
  }

  methodInfoListServiceLevelObjectives = new grpcWeb.AbstractClientBase.MethodInfo(
    ListServiceLevelObjectivesResponse,
    (request: ListServiceLevelObjectivesRequest) => {
      return request.serializeBinary();
    },
    ListServiceLevelObjectivesResponse.deserializeBinary
  );

  listServiceLevelObjectives(
    request: ListServiceLevelObjectivesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListServiceLevelObjectivesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/ListServiceLevelObjectives',
      request,
      metadata || {},
      this.methodInfoListServiceLevelObjectives,
      callback);
  }

  methodInfoUpdateServiceLevelObjective = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_service_pb.ServiceLevelObjective,
    (request: UpdateServiceLevelObjectiveRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_service_pb.ServiceLevelObjective.deserializeBinary
  );

  updateServiceLevelObjective(
    request: UpdateServiceLevelObjectiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_service_pb.ServiceLevelObjective) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/UpdateServiceLevelObjective',
      request,
      metadata || {},
      this.methodInfoUpdateServiceLevelObjective,
      callback);
  }

  methodInfoDeleteServiceLevelObjective = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteServiceLevelObjectiveRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServiceLevelObjective(
    request: DeleteServiceLevelObjectiveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.ServiceMonitoringService/DeleteServiceLevelObjective',
      request,
      metadata || {},
      this.methodInfoDeleteServiceLevelObjective,
      callback);
  }

}

