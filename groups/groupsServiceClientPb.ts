/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as groups_groups_model_pb from '../groups/groups_model_pb';

import {
  GetGroupsRequest,
  GetGroupsResponse,
  GroupID} from './groups_pb';

export class MruVGroupsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupID,
    (request: groups_groups_model_pb.Group) => {
      return request.serializeBinary();
    },
    GroupID.deserializeBinary
  );

  createGroup(
    request: groups_groups_model_pb.Group,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/CreateGroup',
      request,
      metadata || {},
      this.methodInfoCreateGroup,
      callback);
  }

  methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_model_pb.Group,
    (request: GroupID) => {
      return request.serializeBinary();
    },
    groups_groups_model_pb.Group.deserializeBinary
  );

  getGroup(
    request: GroupID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_model_pb.Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetGroup',
      request,
      metadata || {},
      this.methodInfoGetGroup,
      callback);
  }

  methodInfoUpdateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupID,
    (request: groups_groups_model_pb.Group) => {
      return request.serializeBinary();
    },
    GroupID.deserializeBinary
  );

  updateGroup(
    request: groups_groups_model_pb.Group,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/UpdateGroup',
      request,
      metadata || {},
      this.methodInfoUpdateGroup,
      callback);
  }

  methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    GroupID,
    (request: GroupID) => {
      return request.serializeBinary();
    },
    GroupID.deserializeBinary
  );

  deleteGroup(
    request: GroupID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GroupID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/DeleteGroup',
      request,
      metadata || {},
      this.methodInfoDeleteGroup,
      callback);
  }

  methodInfoGetGroups = new grpcWeb.AbstractClientBase.MethodInfo(
    GetGroupsResponse,
    (request: GetGroupsRequest) => {
      return request.serializeBinary();
    },
    GetGroupsResponse.deserializeBinary
  );

  getGroups(
    request: GetGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetGroupsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetGroups',
      request,
      metadata || {},
      this.methodInfoGetGroups,
      callback);
  }

  methodInfoGetServiceStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.ServiceStatusResponse,
    (request: common_health_pb.ServiceStatusRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.ServiceStatusResponse.deserializeBinary
  );

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetServiceStatus',
      request,
      metadata || {},
      this.methodInfoGetServiceStatus,
      callback);
  }

  methodInfoGetServiceVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.VersionResponse,
    (request: common_health_pb.VersionRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.VersionResponse.deserializeBinary
  );

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetServiceVersion',
      request,
      metadata || {},
      this.methodInfoGetServiceVersion,
      callback);
  }

}

