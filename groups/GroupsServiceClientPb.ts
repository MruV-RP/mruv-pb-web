/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';

import {
  AddMemberRequest,
  AddMemberResponse,
  AddPermissionRequest,
  AddPermissionResponse,
  AddSubgroupRequest,
  AddSubgroupResponse,
  AssignOwnerRequest,
  AssignOwnerResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetGroupsRequest,
  GetGroupsResponse,
  GetMembersRequest,
  GetMembersResponse,
  GetOwnerRequest,
  GetOwnerResponse,
  GetPermissionsRequest,
  GetPermissionsResponse,
  GetSubgroupsRequest,
  GetSubgroupsResponse,
  IsPermittedRequest,
  IsPermittedResponse,
  RemoveMemberRequest,
  RemoveMemberResponse,
  RemovePermissionRequest,
  RemovePermissionResponse,
  RemoveSubgroupRequest,
  RemoveSubgroupResponse,
  UpdateGroupRequest,
  UpdateGroupResponse} from './groups_pb';

export class MruVGroupsServiceClient {
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

  methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateGroupResponse,
    (request: CreateGroupRequest) => {
      return request.serializeBinary();
    },
    CreateGroupResponse.deserializeBinary
  );

  createGroup(
    request: CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateGroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/CreateGroup',
      request,
      metadata || {},
      this.methodInfoCreateGroup,
      callback);
  }

  methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    GetGroupResponse,
    (request: GetGroupRequest) => {
      return request.serializeBinary();
    },
    GetGroupResponse.deserializeBinary
  );

  getGroup(
    request: GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetGroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetGroup',
      request,
      metadata || {},
      this.methodInfoGetGroup,
      callback);
  }

  methodInfoUpdateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateGroupResponse,
    (request: UpdateGroupRequest) => {
      return request.serializeBinary();
    },
    UpdateGroupResponse.deserializeBinary
  );

  updateGroup(
    request: UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateGroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/UpdateGroup',
      request,
      metadata || {},
      this.methodInfoUpdateGroup,
      callback);
  }

  methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteGroupResponse,
    (request: DeleteGroupRequest) => {
      return request.serializeBinary();
    },
    DeleteGroupResponse.deserializeBinary
  );

  deleteGroup(
    request: DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteGroupResponse) => void) {
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

  methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    AssignOwnerResponse,
    (request: AssignOwnerRequest) => {
      return request.serializeBinary();
    },
    AssignOwnerResponse.deserializeBinary
  );

  assignOwner(
    request: AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AssignOwnerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/AssignOwner',
      request,
      metadata || {},
      this.methodInfoAssignOwner,
      callback);
  }

  methodInfoGetOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    GetOwnerResponse,
    (request: GetOwnerRequest) => {
      return request.serializeBinary();
    },
    GetOwnerResponse.deserializeBinary
  );

  getOwner(
    request: GetOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetOwnerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetOwner',
      request,
      metadata || {},
      this.methodInfoGetOwner,
      callback);
  }

  methodInfoAddMember = new grpcWeb.AbstractClientBase.MethodInfo(
    AddMemberResponse,
    (request: AddMemberRequest) => {
      return request.serializeBinary();
    },
    AddMemberResponse.deserializeBinary
  );

  addMember(
    request: AddMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddMemberResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/AddMember',
      request,
      metadata || {},
      this.methodInfoAddMember,
      callback);
  }

  methodInfoGetMembers = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMembersResponse,
    (request: GetMembersRequest) => {
      return request.serializeBinary();
    },
    GetMembersResponse.deserializeBinary
  );

  getMembers(
    request: GetMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMembersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetMembers',
      request,
      metadata || {},
      this.methodInfoGetMembers,
      callback);
  }

  methodInfoRemoveMember = new grpcWeb.AbstractClientBase.MethodInfo(
    RemoveMemberResponse,
    (request: RemoveMemberRequest) => {
      return request.serializeBinary();
    },
    RemoveMemberResponse.deserializeBinary
  );

  removeMember(
    request: RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemoveMemberResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/RemoveMember',
      request,
      metadata || {},
      this.methodInfoRemoveMember,
      callback);
  }

  methodInfoAddPermission = new grpcWeb.AbstractClientBase.MethodInfo(
    AddPermissionResponse,
    (request: AddPermissionRequest) => {
      return request.serializeBinary();
    },
    AddPermissionResponse.deserializeBinary
  );

  addPermission(
    request: AddPermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddPermissionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/AddPermission',
      request,
      metadata || {},
      this.methodInfoAddPermission,
      callback);
  }

  methodInfoGetPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPermissionsResponse,
    (request: GetPermissionsRequest) => {
      return request.serializeBinary();
    },
    GetPermissionsResponse.deserializeBinary
  );

  getPermissions(
    request: GetPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPermissionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetPermissions',
      request,
      metadata || {},
      this.methodInfoGetPermissions,
      callback);
  }

  methodInfoRemovePermission = new grpcWeb.AbstractClientBase.MethodInfo(
    RemovePermissionResponse,
    (request: RemovePermissionRequest) => {
      return request.serializeBinary();
    },
    RemovePermissionResponse.deserializeBinary
  );

  removePermission(
    request: RemovePermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemovePermissionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/RemovePermission',
      request,
      metadata || {},
      this.methodInfoRemovePermission,
      callback);
  }

  methodInfoAddSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(
    AddSubgroupResponse,
    (request: AddSubgroupRequest) => {
      return request.serializeBinary();
    },
    AddSubgroupResponse.deserializeBinary
  );

  addSubgroup(
    request: AddSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddSubgroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/AddSubgroup',
      request,
      metadata || {},
      this.methodInfoAddSubgroup,
      callback);
  }

  methodInfoGetSubgroups = new grpcWeb.AbstractClientBase.MethodInfo(
    GetSubgroupsResponse,
    (request: GetSubgroupsRequest) => {
      return request.serializeBinary();
    },
    GetSubgroupsResponse.deserializeBinary
  );

  getSubgroups(
    request: GetSubgroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetSubgroupsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/GetSubgroups',
      request,
      metadata || {},
      this.methodInfoGetSubgroups,
      callback);
  }

  methodInfoRemoveSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(
    RemoveSubgroupResponse,
    (request: RemoveSubgroupRequest) => {
      return request.serializeBinary();
    },
    RemoveSubgroupResponse.deserializeBinary
  );

  removeSubgroup(
    request: RemoveSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemoveSubgroupResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/RemoveSubgroup',
      request,
      metadata || {},
      this.methodInfoRemoveSubgroup,
      callback);
  }

  methodInfoIsPermitted = new grpcWeb.AbstractClientBase.MethodInfo(
    IsPermittedResponse,
    (request: IsPermittedRequest) => {
      return request.serializeBinary();
    },
    IsPermittedResponse.deserializeBinary
  );

  isPermitted(
    request: IsPermittedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsPermittedResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVGroupsService/IsPermitted',
      request,
      metadata || {},
      this.methodInfoIsPermitted,
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

