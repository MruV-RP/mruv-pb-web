/**
 * @fileoverview gRPC-Web generated client stub for mruv.organizations
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  AssignLeaderRequest,
  AssignLeaderResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  DeleteOrganizationRequest,
  DeleteOrganizationResponse,
  GetOrganizationRequest,
  GetOrganizationResponse,
  UnassignLeaderRequest,
  UnassignLeaderResponse,
  UpdateOrganizationRequest,
  UpdateOrganizationResponse} from './organizations_pb';

export class MruVOrganizationsServiceClient {
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

  methodInfoCreateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateOrganizationResponse,
    (request: CreateOrganizationRequest) => {
      return request.serializeBinary();
    },
    CreateOrganizationResponse.deserializeBinary
  );

  createOrganization(
    request: CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateOrganizationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/CreateOrganization',
      request,
      metadata || {},
      this.methodInfoCreateOrganization,
      callback);
  }

  methodInfoGetOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    GetOrganizationResponse,
    (request: GetOrganizationRequest) => {
      return request.serializeBinary();
    },
    GetOrganizationResponse.deserializeBinary
  );

  getOrganization(
    request: GetOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetOrganizationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/GetOrganization',
      request,
      metadata || {},
      this.methodInfoGetOrganization,
      callback);
  }

  methodInfoUpdateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateOrganizationResponse,
    (request: UpdateOrganizationRequest) => {
      return request.serializeBinary();
    },
    UpdateOrganizationResponse.deserializeBinary
  );

  updateOrganization(
    request: UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateOrganizationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/UpdateOrganization',
      request,
      metadata || {},
      this.methodInfoUpdateOrganization,
      callback);
  }

  methodInfoDeleteOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteOrganizationResponse,
    (request: DeleteOrganizationRequest) => {
      return request.serializeBinary();
    },
    DeleteOrganizationResponse.deserializeBinary
  );

  deleteOrganization(
    request: DeleteOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteOrganizationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/DeleteOrganization',
      request,
      metadata || {},
      this.methodInfoDeleteOrganization,
      callback);
  }

  methodInfoAssignLeader = new grpcWeb.AbstractClientBase.MethodInfo(
    AssignLeaderResponse,
    (request: AssignLeaderRequest) => {
      return request.serializeBinary();
    },
    AssignLeaderResponse.deserializeBinary
  );

  assignLeader(
    request: AssignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AssignLeaderResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/AssignLeader',
      request,
      metadata || {},
      this.methodInfoAssignLeader,
      callback);
  }

  methodInfoUnassignLeader = new grpcWeb.AbstractClientBase.MethodInfo(
    UnassignLeaderResponse,
    (request: UnassignLeaderRequest) => {
      return request.serializeBinary();
    },
    UnassignLeaderResponse.deserializeBinary
  );

  unassignLeader(
    request: UnassignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnassignLeaderResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.organizations.MruVOrganizationsService/UnassignLeader',
      request,
      metadata || {},
      this.methodInfoUnassignLeader,
      callback);
  }

}

