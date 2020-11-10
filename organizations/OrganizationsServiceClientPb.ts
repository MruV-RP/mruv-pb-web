/**
 * @fileoverview gRPC-Web generated client stub for mruv.organizations
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as organizations_organizations_pb from '../organizations/organizations_pb';


export class MruVOrganizationsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.CreateOrganizationResponse,
    (request: organizations_organizations_pb.CreateOrganizationRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.CreateOrganizationResponse.deserializeBinary
  );

  createOrganization(
    request: organizations_organizations_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.CreateOrganizationResponse>;

  createOrganization(
    request: organizations_organizations_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.CreateOrganizationResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.CreateOrganizationResponse>;

  createOrganization(
    request: organizations_organizations_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.CreateOrganizationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/CreateOrganization',
        request,
        metadata || {},
        this.methodInfoCreateOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/CreateOrganization',
    request,
    metadata || {},
    this.methodInfoCreateOrganization);
  }

  methodInfoGetOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.GetOrganizationResponse,
    (request: organizations_organizations_pb.GetOrganizationRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.GetOrganizationResponse.deserializeBinary
  );

  getOrganization(
    request: organizations_organizations_pb.GetOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.GetOrganizationResponse>;

  getOrganization(
    request: organizations_organizations_pb.GetOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.GetOrganizationResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.GetOrganizationResponse>;

  getOrganization(
    request: organizations_organizations_pb.GetOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.GetOrganizationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/GetOrganization',
        request,
        metadata || {},
        this.methodInfoGetOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/GetOrganization',
    request,
    metadata || {},
    this.methodInfoGetOrganization);
  }

  methodInfoUpdateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.UpdateOrganizationResponse,
    (request: organizations_organizations_pb.UpdateOrganizationRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.UpdateOrganizationResponse.deserializeBinary
  );

  updateOrganization(
    request: organizations_organizations_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.UpdateOrganizationResponse>;

  updateOrganization(
    request: organizations_organizations_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.UpdateOrganizationResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.UpdateOrganizationResponse>;

  updateOrganization(
    request: organizations_organizations_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.UpdateOrganizationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/UpdateOrganization',
        request,
        metadata || {},
        this.methodInfoUpdateOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/UpdateOrganization',
    request,
    metadata || {},
    this.methodInfoUpdateOrganization);
  }

  methodInfoDeleteOrganization = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.DeleteOrganizationResponse,
    (request: organizations_organizations_pb.DeleteOrganizationRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.DeleteOrganizationResponse.deserializeBinary
  );

  deleteOrganization(
    request: organizations_organizations_pb.DeleteOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.DeleteOrganizationResponse>;

  deleteOrganization(
    request: organizations_organizations_pb.DeleteOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.DeleteOrganizationResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.DeleteOrganizationResponse>;

  deleteOrganization(
    request: organizations_organizations_pb.DeleteOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.DeleteOrganizationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/DeleteOrganization',
        request,
        metadata || {},
        this.methodInfoDeleteOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/DeleteOrganization',
    request,
    metadata || {},
    this.methodInfoDeleteOrganization);
  }

  methodInfoAssignLeader = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.AssignLeaderResponse,
    (request: organizations_organizations_pb.AssignLeaderRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.AssignLeaderResponse.deserializeBinary
  );

  assignLeader(
    request: organizations_organizations_pb.AssignLeaderRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.AssignLeaderResponse>;

  assignLeader(
    request: organizations_organizations_pb.AssignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.AssignLeaderResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.AssignLeaderResponse>;

  assignLeader(
    request: organizations_organizations_pb.AssignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.AssignLeaderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/AssignLeader',
        request,
        metadata || {},
        this.methodInfoAssignLeader,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/AssignLeader',
    request,
    metadata || {},
    this.methodInfoAssignLeader);
  }

  methodInfoUnassignLeader = new grpcWeb.AbstractClientBase.MethodInfo(
    organizations_organizations_pb.UnassignLeaderResponse,
    (request: organizations_organizations_pb.UnassignLeaderRequest) => {
      return request.serializeBinary();
    },
    organizations_organizations_pb.UnassignLeaderResponse.deserializeBinary
  );

  unassignLeader(
    request: organizations_organizations_pb.UnassignLeaderRequest,
    metadata: grpcWeb.Metadata | null): Promise<organizations_organizations_pb.UnassignLeaderResponse>;

  unassignLeader(
    request: organizations_organizations_pb.UnassignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: organizations_organizations_pb.UnassignLeaderResponse) => void): grpcWeb.ClientReadableStream<organizations_organizations_pb.UnassignLeaderResponse>;

  unassignLeader(
    request: organizations_organizations_pb.UnassignLeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: organizations_organizations_pb.UnassignLeaderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.organizations.MruVOrganizationsService/UnassignLeader',
        request,
        metadata || {},
        this.methodInfoUnassignLeader,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.organizations.MruVOrganizationsService/UnassignLeader',
    request,
    metadata || {},
    this.methodInfoUnassignLeader);
  }

}

