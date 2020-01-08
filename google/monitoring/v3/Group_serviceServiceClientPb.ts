/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_monitored_resource_pb from '../../../google/api/monitored_resource_pb';
import * as google_monitoring_v3_common_pb from '../../../google/monitoring/v3/common_pb';
import * as google_monitoring_v3_group_pb from '../../../google/monitoring/v3/group_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';

import {
  CreateGroupRequest,
  DeleteGroupRequest,
  GetGroupRequest,
  ListGroupMembersRequest,
  ListGroupMembersResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  UpdateGroupRequest} from './group_service_pb';

export class GroupServiceClient {
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

  methodInfoListGroups = new grpcWeb.AbstractClientBase.MethodInfo(
    ListGroupsResponse,
    (request: ListGroupsRequest) => {
      return request.serializeBinary();
    },
    ListGroupsResponse.deserializeBinary
  );

  listGroups(
    request: ListGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListGroupsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/ListGroups',
      request,
      metadata || {},
      this.methodInfoListGroups,
      callback);
  }

  methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_group_pb.Group,
    (request: GetGroupRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_group_pb.Group.deserializeBinary
  );

  getGroup(
    request: GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/GetGroup',
      request,
      metadata || {},
      this.methodInfoGetGroup,
      callback);
  }

  methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_group_pb.Group,
    (request: CreateGroupRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_group_pb.Group.deserializeBinary
  );

  createGroup(
    request: CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/CreateGroup',
      request,
      metadata || {},
      this.methodInfoCreateGroup,
      callback);
  }

  methodInfoUpdateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_monitoring_v3_group_pb.Group,
    (request: UpdateGroupRequest) => {
      return request.serializeBinary();
    },
    google_monitoring_v3_group_pb.Group.deserializeBinary
  );

  updateGroup(
    request: UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/UpdateGroup',
      request,
      metadata || {},
      this.methodInfoUpdateGroup,
      callback);
  }

  methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteGroupRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteGroup(
    request: DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/DeleteGroup',
      request,
      metadata || {},
      this.methodInfoDeleteGroup,
      callback);
  }

  methodInfoListGroupMembers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListGroupMembersResponse,
    (request: ListGroupMembersRequest) => {
      return request.serializeBinary();
    },
    ListGroupMembersResponse.deserializeBinary
  );

  listGroupMembers(
    request: ListGroupMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListGroupMembersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.monitoring.v3.GroupService/ListGroupMembers',
      request,
      metadata || {},
      this.methodInfoListGroupMembers,
      callback);
  }

}

