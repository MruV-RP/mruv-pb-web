"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.organizations
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
var organizations_organizations_pb = __importStar(require("../organizations/organizations_pb"));
var MruVOrganizationsServiceClient = /** @class */ (function () {
    function MruVOrganizationsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.CreateOrganizationResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.CreateOrganizationResponse.deserializeBinary);
        this.methodInfoGetOrganization = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.GetOrganizationResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.GetOrganizationResponse.deserializeBinary);
        this.methodInfoUpdateOrganization = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.UpdateOrganizationResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.UpdateOrganizationResponse.deserializeBinary);
        this.methodInfoDeleteOrganization = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.DeleteOrganizationResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.DeleteOrganizationResponse.deserializeBinary);
        this.methodInfoAssignLeader = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.AssignLeaderResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.AssignLeaderResponse.deserializeBinary);
        this.methodInfoUnassignLeader = new grpcWeb.AbstractClientBase.MethodInfo(organizations_organizations_pb.UnassignLeaderResponse, function (request) {
            return request.serializeBinary();
        }, organizations_organizations_pb.UnassignLeaderResponse.deserializeBinary);
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
    MruVOrganizationsServiceClient.prototype.createOrganization = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/CreateOrganization', request, metadata || {}, this.methodInfoCreateOrganization, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/CreateOrganization', request, metadata || {}, this.methodInfoCreateOrganization);
    };
    MruVOrganizationsServiceClient.prototype.getOrganization = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/GetOrganization', request, metadata || {}, this.methodInfoGetOrganization, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/GetOrganization', request, metadata || {}, this.methodInfoGetOrganization);
    };
    MruVOrganizationsServiceClient.prototype.updateOrganization = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/UpdateOrganization', request, metadata || {}, this.methodInfoUpdateOrganization, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/UpdateOrganization', request, metadata || {}, this.methodInfoUpdateOrganization);
    };
    MruVOrganizationsServiceClient.prototype.deleteOrganization = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/DeleteOrganization', request, metadata || {}, this.methodInfoDeleteOrganization, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/DeleteOrganization', request, metadata || {}, this.methodInfoDeleteOrganization);
    };
    MruVOrganizationsServiceClient.prototype.assignLeader = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/AssignLeader', request, metadata || {}, this.methodInfoAssignLeader, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/AssignLeader', request, metadata || {}, this.methodInfoAssignLeader);
    };
    MruVOrganizationsServiceClient.prototype.unassignLeader = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.organizations.MruVOrganizationsService/UnassignLeader', request, metadata || {}, this.methodInfoUnassignLeader, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.organizations.MruVOrganizationsService/UnassignLeader', request, metadata || {}, this.methodInfoUnassignLeader);
    };
    return MruVOrganizationsServiceClient;
}());
exports.MruVOrganizationsServiceClient = MruVOrganizationsServiceClient;
