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
var grpcWeb = __importStar(require("grpc-web"));
var common_health_pb = __importStar(require("../common/health_pb"));
var groups_groups_model_pb = __importStar(require("../groups/groups_model_pb"));
var groups_pb_1 = require("./groups_pb");
var MruVGroupsServiceClient = /** @class */ (function () {
    function MruVGroupsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_model_pb.GroupID, function (request) {
            return request.serializeBinary();
        }, groups_groups_model_pb.GroupID.deserializeBinary);
        this.methodInfoGetGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_model_pb.Group, function (request) {
            return request.serializeBinary();
        }, groups_groups_model_pb.Group.deserializeBinary);
        this.methodInfoDeleteGroup = new grpcWeb.AbstractClientBase.MethodInfo(groups_groups_model_pb.GroupID, function (request) {
            return request.serializeBinary();
        }, groups_groups_model_pb.GroupID.deserializeBinary);
        this.methodInfoGetGroups = new grpcWeb.AbstractClientBase.MethodInfo(groups_pb_1.GetGroupsResponse, function (request) {
            return request.serializeBinary();
        }, groups_pb_1.GetGroupsResponse.deserializeBinary);
        this.methodInfoAddGroupMember = new grpcWeb.AbstractClientBase.MethodInfo(groups_pb_1.AddGroupMemberResponse, function (request) {
            return request.serializeBinary();
        }, groups_pb_1.AddGroupMemberResponse.deserializeBinary);
        this.methodInfoRemoveGroupMember = new grpcWeb.AbstractClientBase.MethodInfo(groups_pb_1.RemoveGroupMemberResponse, function (request) {
            return request.serializeBinary();
        }, groups_pb_1.RemoveGroupMemberResponse.deserializeBinary);
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
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/CreateGroup', request, metadata || {}, this.methodInfoCreateGroup, callback);
    };
    MruVGroupsServiceClient.prototype.getGroup = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetGroup', request, metadata || {}, this.methodInfoGetGroup, callback);
    };
    MruVGroupsServiceClient.prototype.deleteGroup = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/DeleteGroup', request, metadata || {}, this.methodInfoDeleteGroup, callback);
    };
    MruVGroupsServiceClient.prototype.getGroups = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetGroups', request, metadata || {}, this.methodInfoGetGroups, callback);
    };
    MruVGroupsServiceClient.prototype.addGroupMember = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/AddGroupMember', request, metadata || {}, this.methodInfoAddGroupMember, callback);
    };
    MruVGroupsServiceClient.prototype.removeGroupMember = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/RemoveGroupMember', request, metadata || {}, this.methodInfoRemoveGroupMember, callback);
    };
    MruVGroupsServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
    };
    MruVGroupsServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVGroupsService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
    };
    return MruVGroupsServiceClient;
}());
exports.MruVGroupsServiceClient = MruVGroupsServiceClient;
