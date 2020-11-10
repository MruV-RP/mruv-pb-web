"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var common_health_pb = __importStar(require("../common/health_pb"));
var groups_groups_pb = __importStar(require("../groups/groups_pb"));
var MruVGroupsServiceClient = /** @class */ (function () {
    function MruVGroupsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.CreateGroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.CreateGroupResponse.deserializeBinary);
        this.methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetGroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetGroupResponse.deserializeBinary);
        this.methodInfoUpdateGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.UpdateGroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.UpdateGroupResponse.deserializeBinary);
        this.methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.DeleteGroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.DeleteGroupResponse.deserializeBinary);
        this.methodInfoGetGroups = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetGroupsResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetGroupsResponse.deserializeBinary);
        this.methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.AssignOwnerResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.AssignOwnerResponse.deserializeBinary);
        this.methodInfoGetOwner = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetOwnerResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetOwnerResponse.deserializeBinary);
        this.methodInfoAddMember = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.AddMemberResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.AddMemberResponse.deserializeBinary);
        this.methodInfoGetMembers = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetMembersResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetMembersResponse.deserializeBinary);
        this.methodInfoRemoveMember = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.RemoveMemberResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.RemoveMemberResponse.deserializeBinary);
        this.methodInfoAddPermission = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.AddPermissionResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.AddPermissionResponse.deserializeBinary);
        this.methodInfoGetPermissions = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetPermissionsResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetPermissionsResponse.deserializeBinary);
        this.methodInfoRemovePermission = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.RemovePermissionResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.RemovePermissionResponse.deserializeBinary);
        this.methodInfoAddSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.AddSubgroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.AddSubgroupResponse.deserializeBinary);
        this.methodInfoGetSubgroups = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.GetSubgroupsResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.GetSubgroupsResponse.deserializeBinary);
        this.methodInfoRemoveSubgroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.RemoveSubgroupResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.RemoveSubgroupResponse.deserializeBinary);
        this.methodInfoIsPermitted = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_pb.IsPermittedResponse, function (request) {
            return request.serializeBinary();
        }, groups_groups_pb.IsPermittedResponse.deserializeBinary);
        this.methodInfoGetServiceStatus = new grpcWeb.AbstractClientBase.MethodInfo(common_health_pb.ServiceStatusResponse, function (request) {
            return request.serializeBinary();
        }, common_health_pb.ServiceStatusResponse.deserializeBinary);
        this.methodInfoGetServiceVersion = new grpcWeb.AbstractClientBase.MethodInfo(common_health_pb.VersionResponse, function (request) {
            return request.serializeBinary();
        }, common_health_pb.VersionResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVGroupsServiceClient.prototype.createGroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/CreateGroup', request, metadata || {}, this.methodInfoCreateGroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/CreateGroup', request, metadata || {}, this.methodInfoCreateGroup);
    };
    MruVGroupsServiceClient.prototype.getGroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetGroup', request, metadata || {}, this.methodInfoGetGroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetGroup', request, metadata || {}, this.methodInfoGetGroup);
    };
    MruVGroupsServiceClient.prototype.updateGroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/UpdateGroup', request, metadata || {}, this.methodInfoUpdateGroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/UpdateGroup', request, metadata || {}, this.methodInfoUpdateGroup);
    };
    MruVGroupsServiceClient.prototype.deleteGroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/DeleteGroup', request, metadata || {}, this.methodInfoDeleteGroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/DeleteGroup', request, metadata || {}, this.methodInfoDeleteGroup);
    };
    MruVGroupsServiceClient.prototype.getGroups = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetGroups', request, metadata || {}, this.methodInfoGetGroups, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetGroups', request, metadata || {}, this.methodInfoGetGroups);
    };
    MruVGroupsServiceClient.prototype.assignOwner = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/AssignOwner', request, metadata || {}, this.methodInfoAssignOwner, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/AssignOwner', request, metadata || {}, this.methodInfoAssignOwner);
    };
    MruVGroupsServiceClient.prototype.getOwner = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetOwner', request, metadata || {}, this.methodInfoGetOwner, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetOwner', request, metadata || {}, this.methodInfoGetOwner);
    };
    MruVGroupsServiceClient.prototype.addMember = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/AddMember', request, metadata || {}, this.methodInfoAddMember, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/AddMember', request, metadata || {}, this.methodInfoAddMember);
    };
    MruVGroupsServiceClient.prototype.getMembers = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetMembers', request, metadata || {}, this.methodInfoGetMembers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetMembers', request, metadata || {}, this.methodInfoGetMembers);
    };
    MruVGroupsServiceClient.prototype.removeMember = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/RemoveMember', request, metadata || {}, this.methodInfoRemoveMember, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/RemoveMember', request, metadata || {}, this.methodInfoRemoveMember);
    };
    MruVGroupsServiceClient.prototype.addPermission = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/AddPermission', request, metadata || {}, this.methodInfoAddPermission, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/AddPermission', request, metadata || {}, this.methodInfoAddPermission);
    };
    MruVGroupsServiceClient.prototype.getPermissions = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetPermissions', request, metadata || {}, this.methodInfoGetPermissions, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetPermissions', request, metadata || {}, this.methodInfoGetPermissions);
    };
    MruVGroupsServiceClient.prototype.removePermission = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/RemovePermission', request, metadata || {}, this.methodInfoRemovePermission, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/RemovePermission', request, metadata || {}, this.methodInfoRemovePermission);
    };
    MruVGroupsServiceClient.prototype.addSubgroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/AddSubgroup', request, metadata || {}, this.methodInfoAddSubgroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/AddSubgroup', request, metadata || {}, this.methodInfoAddSubgroup);
    };
    MruVGroupsServiceClient.prototype.getSubgroups = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetSubgroups', request, metadata || {}, this.methodInfoGetSubgroups, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetSubgroups', request, metadata || {}, this.methodInfoGetSubgroups);
    };
    MruVGroupsServiceClient.prototype.removeSubgroup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/RemoveSubgroup', request, metadata || {}, this.methodInfoRemoveSubgroup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/RemoveSubgroup', request, metadata || {}, this.methodInfoRemoveSubgroup);
    };
    MruVGroupsServiceClient.prototype.isPermitted = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/IsPermitted', request, metadata || {}, this.methodInfoIsPermitted, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/IsPermitted', request, metadata || {}, this.methodInfoIsPermitted);
    };
    MruVGroupsServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus);
    };
    MruVGroupsServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVGroupsService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion);
    };
    return MruVGroupsServiceClient;
}());
exports.MruVGroupsServiceClient = MruVGroupsServiceClient;
