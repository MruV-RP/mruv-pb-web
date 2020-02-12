/**
 * @fileoverview gRPC-Web generated client stub for google.appengine.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_appengine_v1_application_pb from '../../../google/appengine/v1/application_pb';
import * as google_appengine_v1_instance_pb from '../../../google/appengine/v1/instance_pb';
import * as google_appengine_v1_service_pb from '../../../google/appengine/v1/service_pb';
import * as google_appengine_v1_version_pb from '../../../google/appengine/v1/version_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateVersionRequest,
  DebugInstanceRequest,
  DeleteInstanceRequest,
  DeleteServiceRequest,
  DeleteVersionRequest,
  GetApplicationRequest,
  GetInstanceRequest,
  GetServiceRequest,
  GetVersionRequest,
  ListInstancesRequest,
  ListInstancesResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListVersionsRequest,
  ListVersionsResponse,
  RepairApplicationRequest,
  UpdateServiceRequest,
  UpdateVersionRequest} from './appengine_pb';

export class InstancesClient {
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

  methodInfoListInstances = new grpcWeb.AbstractClientBase.MethodInfo(
    ListInstancesResponse,
    (request: ListInstancesRequest) => {
      return request.serializeBinary();
    },
    ListInstancesResponse.deserializeBinary
  );

  listInstances(
    request: ListInstancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListInstancesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Instances/ListInstances',
      request,
      metadata || {},
      this.methodInfoListInstances,
      callback);
  }

  methodInfoGetInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_appengine_v1_instance_pb.Instance,
    (request: GetInstanceRequest) => {
      return request.serializeBinary();
    },
    google_appengine_v1_instance_pb.Instance.deserializeBinary
  );

  getInstance(
    request: GetInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_instance_pb.Instance) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Instances/GetInstance',
      request,
      metadata || {},
      this.methodInfoGetInstance,
      callback);
  }

  methodInfoDeleteInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteInstance(
    request: DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Instances/DeleteInstance',
      request,
      metadata || {},
      this.methodInfoDeleteInstance,
      callback);
  }

  methodInfoDebugInstance = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DebugInstanceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  debugInstance(
    request: DebugInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Instances/DebugInstance',
      request,
      metadata || {},
      this.methodInfoDebugInstance,
      callback);
  }

}

export class VersionsClient {
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

  methodInfoListVersions = new grpcWeb.AbstractClientBase.MethodInfo(
    ListVersionsResponse,
    (request: ListVersionsRequest) => {
      return request.serializeBinary();
    },
    ListVersionsResponse.deserializeBinary
  );

  listVersions(
    request: ListVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListVersionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Versions/ListVersions',
      request,
      metadata || {},
      this.methodInfoListVersions,
      callback);
  }

  methodInfoGetVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_appengine_v1_version_pb.Version,
    (request: GetVersionRequest) => {
      return request.serializeBinary();
    },
    google_appengine_v1_version_pb.Version.deserializeBinary
  );

  getVersion(
    request: GetVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_version_pb.Version) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Versions/GetVersion',
      request,
      metadata || {},
      this.methodInfoGetVersion,
      callback);
  }

  methodInfoCreateVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: CreateVersionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  createVersion(
    request: CreateVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Versions/CreateVersion',
      request,
      metadata || {},
      this.methodInfoCreateVersion,
      callback);
  }

  methodInfoUpdateVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateVersionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateVersion(
    request: UpdateVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Versions/UpdateVersion',
      request,
      metadata || {},
      this.methodInfoUpdateVersion,
      callback);
  }

  methodInfoDeleteVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: DeleteVersionRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  deleteVersion(
    request: DeleteVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Versions/DeleteVersion',
      request,
      metadata || {},
      this.methodInfoDeleteVersion,
      callback);
  }

}

export class ServicesClient {
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
        '/google.appengine.v1.Services/ListServices',
      request,
      metadata || {},
      this.methodInfoListServices,
      callback);
  }

  methodInfoGetService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_appengine_v1_service_pb.Service,
    (request: GetServiceRequest) => {
      return request.serializeBinary();
    },
    google_appengine_v1_service_pb.Service.deserializeBinary
  );

  getService(
    request: GetServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_service_pb.Service) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Services/GetService',
      request,
      metadata || {},
      this.methodInfoGetService,
      callback);
  }

  methodInfoUpdateService = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: UpdateServiceRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  updateService(
    request: UpdateServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Services/UpdateService',
      request,
      metadata || {},
      this.methodInfoUpdateService,
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
        '/google.appengine.v1.Services/DeleteService',
      request,
      metadata || {},
      this.methodInfoDeleteService,
      callback);
  }

}

export class ApplicationsClient {
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

  methodInfoGetApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_appengine_v1_application_pb.Application,
    (request: GetApplicationRequest) => {
      return request.serializeBinary();
    },
    google_appengine_v1_application_pb.Application.deserializeBinary
  );

  getApplication(
    request: GetApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_application_pb.Application) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Applications/GetApplication',
      request,
      metadata || {},
      this.methodInfoGetApplication,
      callback);
  }

  methodInfoRepairApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: RepairApplicationRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  repairApplication(
    request: RepairApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.appengine.v1.Applications/RepairApplication',
      request,
      metadata || {},
      this.methodInfoRepairApplication,
      callback);
  }

}

