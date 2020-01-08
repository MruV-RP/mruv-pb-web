/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.talent.v4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_application_pb from '../../../../google/cloud/talent/v4beta1/application_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateApplicationRequest,
  DeleteApplicationRequest,
  GetApplicationRequest,
  ListApplicationsRequest,
  ListApplicationsResponse,
  UpdateApplicationRequest} from './application_service_pb';

export class ApplicationServiceClient {
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

  methodInfoCreateApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_application_pb.Application,
    (request: CreateApplicationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_application_pb.Application.deserializeBinary
  );

  createApplication(
    request: CreateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_application_pb.Application) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ApplicationService/CreateApplication',
      request,
      metadata || {},
      this.methodInfoCreateApplication,
      callback);
  }

  methodInfoGetApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_application_pb.Application,
    (request: GetApplicationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_application_pb.Application.deserializeBinary
  );

  getApplication(
    request: GetApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_application_pb.Application) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ApplicationService/GetApplication',
      request,
      metadata || {},
      this.methodInfoGetApplication,
      callback);
  }

  methodInfoUpdateApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_application_pb.Application,
    (request: UpdateApplicationRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_application_pb.Application.deserializeBinary
  );

  updateApplication(
    request: UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_application_pb.Application) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ApplicationService/UpdateApplication',
      request,
      metadata || {},
      this.methodInfoUpdateApplication,
      callback);
  }

  methodInfoDeleteApplication = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteApplicationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteApplication(
    request: DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ApplicationService/DeleteApplication',
      request,
      metadata || {},
      this.methodInfoDeleteApplication,
      callback);
  }

  methodInfoListApplications = new grpcWeb.AbstractClientBase.MethodInfo(
    ListApplicationsResponse,
    (request: ListApplicationsRequest) => {
      return request.serializeBinary();
    },
    ListApplicationsResponse.deserializeBinary
  );

  listApplications(
    request: ListApplicationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListApplicationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.ApplicationService/ListApplications',
      request,
      metadata || {},
      this.methodInfoListApplications,
      callback);
  }

}

