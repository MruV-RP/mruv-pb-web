/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as common_health_pb from '../common/health_pb';
import * as groups_groups_pb from '../groups/groups_pb';


export class MruVGroupsServiceClient {
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

  methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.CreateGroupResponse,
    (request: groups_groups_pb.CreateGroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.CreateGroupResponse.deserializeBinary
  );

  createGroup(
    request: groups_groups_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.CreateGroupResponse>;

  createGroup(
    request: groups_groups_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.CreateGroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.CreateGroupResponse>;

  createGroup(
    request: groups_groups_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.CreateGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/CreateGroup',
        request,
        metadata || {},
        this.methodInfoCreateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/CreateGroup',
    request,
    metadata || {},
    this.methodInfoCreateGroup);
  }

  methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetGroupResponse,
    (request: groups_groups_pb.GetGroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetGroupResponse.deserializeBinary
  );

  getGroup(
    request: groups_groups_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetGroupResponse>;

  getGroup(
    request: groups_groups_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetGroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetGroupResponse>;

  getGroup(
    request: groups_groups_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetGroup',
        request,
        metadata || {},
        this.methodInfoGetGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetGroup',
    request,
    metadata || {},
    this.methodInfoGetGroup);
  }

  methodInfoUpdateGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.UpdateGroupResponse,
    (request: groups_groups_pb.UpdateGroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.UpdateGroupResponse.deserializeBinary
  );

  updateGroup(
    request: groups_groups_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.UpdateGroupResponse>;

  updateGroup(
    request: groups_groups_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.UpdateGroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.UpdateGroupResponse>;

  updateGroup(
    request: groups_groups_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.UpdateGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/UpdateGroup',
        request,
        metadata || {},
        this.methodInfoUpdateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/UpdateGroup',
    request,
    metadata || {},
    this.methodInfoUpdateGroup);
  }

  methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.DeleteGroupResponse,
    (request: groups_groups_pb.DeleteGroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.DeleteGroupResponse.deserializeBinary
  );

  deleteGroup(
    request: groups_groups_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.DeleteGroupResponse>;

  deleteGroup(
    request: groups_groups_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.DeleteGroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.DeleteGroupResponse>;

  deleteGroup(
    request: groups_groups_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.DeleteGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/DeleteGroup',
        request,
        metadata || {},
        this.methodInfoDeleteGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/DeleteGroup',
    request,
    metadata || {},
    this.methodInfoDeleteGroup);
  }

  methodInfoGetGroups = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetGroupsResponse,
    (request: groups_groups_pb.GetGroupsRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetGroupsResponse.deserializeBinary
  );

  getGroups(
    request: groups_groups_pb.GetGroupsRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetGroupsResponse>;

  getGroups(
    request: groups_groups_pb.GetGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetGroupsResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetGroupsResponse>;

  getGroups(
    request: groups_groups_pb.GetGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetGroupsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetGroups',
        request,
        metadata || {},
        this.methodInfoGetGroups,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetGroups',
    request,
    metadata || {},
    this.methodInfoGetGroups);
  }

  methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.AssignOwnerResponse,
    (request: groups_groups_pb.AssignOwnerRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.AssignOwnerResponse.deserializeBinary
  );

  assignOwner(
    request: groups_groups_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.AssignOwnerResponse>;

  assignOwner(
    request: groups_groups_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.AssignOwnerResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.AssignOwnerResponse>;

  assignOwner(
    request: groups_groups_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.AssignOwnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/AssignOwner',
        request,
        metadata || {},
        this.methodInfoAssignOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/AssignOwner',
    request,
    metadata || {},
    this.methodInfoAssignOwner);
  }

  methodInfoGetOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetOwnerResponse,
    (request: groups_groups_pb.GetOwnerRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetOwnerResponse.deserializeBinary
  );

  getOwner(
    request: groups_groups_pb.GetOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetOwnerResponse>;

  getOwner(
    request: groups_groups_pb.GetOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetOwnerResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetOwnerResponse>;

  getOwner(
    request: groups_groups_pb.GetOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetOwnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetOwner',
        request,
        metadata || {},
        this.methodInfoGetOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetOwner',
    request,
    metadata || {},
    this.methodInfoGetOwner);
  }

  methodInfoAddMember = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.AddMemberResponse,
    (request: groups_groups_pb.AddMemberRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.AddMemberResponse.deserializeBinary
  );

  addMember(
    request: groups_groups_pb.AddMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.AddMemberResponse>;

  addMember(
    request: groups_groups_pb.AddMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.AddMemberResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.AddMemberResponse>;

  addMember(
    request: groups_groups_pb.AddMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.AddMemberResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/AddMember',
        request,
        metadata || {},
        this.methodInfoAddMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/AddMember',
    request,
    metadata || {},
    this.methodInfoAddMember);
  }

  methodInfoGetMembers = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetMembersResponse,
    (request: groups_groups_pb.GetMembersRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetMembersResponse.deserializeBinary
  );

  getMembers(
    request: groups_groups_pb.GetMembersRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetMembersResponse>;

  getMembers(
    request: groups_groups_pb.GetMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetMembersResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetMembersResponse>;

  getMembers(
    request: groups_groups_pb.GetMembersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetMembersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetMembers',
        request,
        metadata || {},
        this.methodInfoGetMembers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetMembers',
    request,
    metadata || {},
    this.methodInfoGetMembers);
  }

  methodInfoRemoveMember = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.RemoveMemberResponse,
    (request: groups_groups_pb.RemoveMemberRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.RemoveMemberResponse.deserializeBinary
  );

  removeMember(
    request: groups_groups_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.RemoveMemberResponse>;

  removeMember(
    request: groups_groups_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.RemoveMemberResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.RemoveMemberResponse>;

  removeMember(
    request: groups_groups_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.RemoveMemberResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/RemoveMember',
        request,
        metadata || {},
        this.methodInfoRemoveMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/RemoveMember',
    request,
    metadata || {},
    this.methodInfoRemoveMember);
  }

  methodInfoAddPermission = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.AddPermissionResponse,
    (request: groups_groups_pb.AddPermissionRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.AddPermissionResponse.deserializeBinary
  );

  addPermission(
    request: groups_groups_pb.AddPermissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.AddPermissionResponse>;

  addPermission(
    request: groups_groups_pb.AddPermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.AddPermissionResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.AddPermissionResponse>;

  addPermission(
    request: groups_groups_pb.AddPermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.AddPermissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/AddPermission',
        request,
        metadata || {},
        this.methodInfoAddPermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/AddPermission',
    request,
    metadata || {},
    this.methodInfoAddPermission);
  }

  methodInfoGetPermissions = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetPermissionsResponse,
    (request: groups_groups_pb.GetPermissionsRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetPermissionsResponse.deserializeBinary
  );

  getPermissions(
    request: groups_groups_pb.GetPermissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetPermissionsResponse>;

  getPermissions(
    request: groups_groups_pb.GetPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetPermissionsResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetPermissionsResponse>;

  getPermissions(
    request: groups_groups_pb.GetPermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetPermissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetPermissions',
        request,
        metadata || {},
        this.methodInfoGetPermissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetPermissions',
    request,
    metadata || {},
    this.methodInfoGetPermissions);
  }

  methodInfoRemovePermission = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.RemovePermissionResponse,
    (request: groups_groups_pb.RemovePermissionRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.RemovePermissionResponse.deserializeBinary
  );

  removePermission(
    request: groups_groups_pb.RemovePermissionRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.RemovePermissionResponse>;

  removePermission(
    request: groups_groups_pb.RemovePermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.RemovePermissionResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.RemovePermissionResponse>;

  removePermission(
    request: groups_groups_pb.RemovePermissionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.RemovePermissionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/RemovePermission',
        request,
        metadata || {},
        this.methodInfoRemovePermission,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/RemovePermission',
    request,
    metadata || {},
    this.methodInfoRemovePermission);
  }

  methodInfoAddSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.AddSubgroupResponse,
    (request: groups_groups_pb.AddSubgroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.AddSubgroupResponse.deserializeBinary
  );

  addSubgroup(
    request: groups_groups_pb.AddSubgroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.AddSubgroupResponse>;

  addSubgroup(
    request: groups_groups_pb.AddSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.AddSubgroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.AddSubgroupResponse>;

  addSubgroup(
    request: groups_groups_pb.AddSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.AddSubgroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/AddSubgroup',
        request,
        metadata || {},
        this.methodInfoAddSubgroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/AddSubgroup',
    request,
    metadata || {},
    this.methodInfoAddSubgroup);
  }

  methodInfoGetSubgroups = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.GetSubgroupsResponse,
    (request: groups_groups_pb.GetSubgroupsRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.GetSubgroupsResponse.deserializeBinary
  );

  getSubgroups(
    request: groups_groups_pb.GetSubgroupsRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.GetSubgroupsResponse>;

  getSubgroups(
    request: groups_groups_pb.GetSubgroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.GetSubgroupsResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.GetSubgroupsResponse>;

  getSubgroups(
    request: groups_groups_pb.GetSubgroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.GetSubgroupsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetSubgroups',
        request,
        metadata || {},
        this.methodInfoGetSubgroups,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetSubgroups',
    request,
    metadata || {},
    this.methodInfoGetSubgroups);
  }

  methodInfoRemoveSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.RemoveSubgroupResponse,
    (request: groups_groups_pb.RemoveSubgroupRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.RemoveSubgroupResponse.deserializeBinary
  );

  removeSubgroup(
    request: groups_groups_pb.RemoveSubgroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.RemoveSubgroupResponse>;

  removeSubgroup(
    request: groups_groups_pb.RemoveSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.RemoveSubgroupResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.RemoveSubgroupResponse>;

  removeSubgroup(
    request: groups_groups_pb.RemoveSubgroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.RemoveSubgroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/RemoveSubgroup',
        request,
        metadata || {},
        this.methodInfoRemoveSubgroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/RemoveSubgroup',
    request,
    metadata || {},
    this.methodInfoRemoveSubgroup);
  }

  methodInfoIsPermitted = new grpcWeb.AbstractClientBase.MethodInfo(
    groups_groups_pb.IsPermittedResponse,
    (request: groups_groups_pb.IsPermittedRequest) => {
      return request.serializeBinary();
    },
    groups_groups_pb.IsPermittedResponse.deserializeBinary
  );

  isPermitted(
    request: groups_groups_pb.IsPermittedRequest,
    metadata: grpcWeb.Metadata | null): Promise<groups_groups_pb.IsPermittedResponse>;

  isPermitted(
    request: groups_groups_pb.IsPermittedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: groups_groups_pb.IsPermittedResponse) => void): grpcWeb.ClientReadableStream<groups_groups_pb.IsPermittedResponse>;

  isPermitted(
    request: groups_groups_pb.IsPermittedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: groups_groups_pb.IsPermittedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/IsPermitted',
        request,
        metadata || {},
        this.methodInfoIsPermitted,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/IsPermitted',
    request,
    metadata || {},
    this.methodInfoIsPermitted);
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
    metadata: grpcWeb.Metadata | null): Promise<common_health_pb.ServiceStatusResponse>;

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void): grpcWeb.ClientReadableStream<common_health_pb.ServiceStatusResponse>;

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetServiceStatus',
        request,
        metadata || {},
        this.methodInfoGetServiceStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetServiceStatus',
    request,
    metadata || {},
    this.methodInfoGetServiceStatus);
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
    metadata: grpcWeb.Metadata | null): Promise<common_health_pb.VersionResponse>;

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void): grpcWeb.ClientReadableStream<common_health_pb.VersionResponse>;

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.MruVGroupsService/GetServiceVersion',
        request,
        metadata || {},
        this.methodInfoGetServiceVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.MruVGroupsService/GetServiceVersion',
    request,
    metadata || {},
    this.methodInfoGetServiceVersion);
  }

}

