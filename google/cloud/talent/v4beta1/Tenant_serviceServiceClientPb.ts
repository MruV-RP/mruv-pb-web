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
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_cloud_talent_v4beta1_tenant_pb from '../../../../google/cloud/talent/v4beta1/tenant_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateTenantRequest,
  DeleteTenantRequest,
  GetTenantRequest,
  ListTenantsRequest,
  ListTenantsResponse,
  UpdateTenantRequest} from './tenant_service_pb';

export class TenantServiceClient {
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

  methodInfoCreateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_tenant_pb.Tenant,
    (request: CreateTenantRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_tenant_pb.Tenant.deserializeBinary
  );

  createTenant(
    request: CreateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_tenant_pb.Tenant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.TenantService/CreateTenant',
      request,
      metadata || {},
      this.methodInfoCreateTenant,
      callback);
  }

  methodInfoGetTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_tenant_pb.Tenant,
    (request: GetTenantRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_tenant_pb.Tenant.deserializeBinary
  );

  getTenant(
    request: GetTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_tenant_pb.Tenant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.TenantService/GetTenant',
      request,
      metadata || {},
      this.methodInfoGetTenant,
      callback);
  }

  methodInfoUpdateTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_tenant_pb.Tenant,
    (request: UpdateTenantRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_tenant_pb.Tenant.deserializeBinary
  );

  updateTenant(
    request: UpdateTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_tenant_pb.Tenant) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.TenantService/UpdateTenant',
      request,
      metadata || {},
      this.methodInfoUpdateTenant,
      callback);
  }

  methodInfoDeleteTenant = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteTenantRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteTenant(
    request: DeleteTenantRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.TenantService/DeleteTenant',
      request,
      metadata || {},
      this.methodInfoDeleteTenant,
      callback);
  }

  methodInfoListTenants = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTenantsResponse,
    (request: ListTenantsRequest) => {
      return request.serializeBinary();
    },
    ListTenantsResponse.deserializeBinary
  );

  listTenants(
    request: ListTenantsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTenantsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.TenantService/ListTenants',
      request,
      metadata || {},
      this.methodInfoListTenants,
      callback);
  }

}

