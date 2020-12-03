"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.server
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MruVServerServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var server_server_model_pb = __importStar(require("../server/server_model_pb"));
var server_server_pb = __importStar(require("../server/server_pb"));
var MruVServerServiceClient = /** @class */ (function () {
    function MruVServerServiceClient(hostname, credentials, options) {
        this.methodInfoRegisterServer = new grpcWeb.AbstractClientBase.MethodInfo(server_server_model_pb.ServerID, function (request) {
            return request.serializeBinary();
        }, server_server_model_pb.ServerID.deserializeBinary);
        this.methodInfoGetRegisteredServers = new grpcWeb.AbstractClientBase.MethodInfo(server_server_pb.GetRegisteredServersResponse, function (request) {
            return request.serializeBinary();
        }, server_server_pb.GetRegisteredServersResponse.deserializeBinary);
        this.methodInfoGetServerInfo = new grpcWeb.AbstractClientBase.MethodInfo(server_server_model_pb.ServerInfo, function (request) {
            return request.serializeBinary();
        }, server_server_model_pb.ServerInfo.deserializeBinary);
        this.methodInfoUpdateServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(server_server_pb.UpdateServerStatusResponse, function (request) {
            return request.serializeBinary();
        }, server_server_pb.UpdateServerStatusResponse.deserializeBinary);
        this.methodInfoServerEventsStream = new grpcWeb.AbstractClientBase.MethodInfo(server_server_pb.ServerEvent, function (request) {
            return request.serializeBinary();
        }, server_server_pb.ServerEvent.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVServerServiceClient.prototype.registerServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.server.MruVServerService/RegisterServer', request, metadata || {}, this.methodInfoRegisterServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.server.MruVServerService/RegisterServer', request, metadata || {}, this.methodInfoRegisterServer);
    };
    MruVServerServiceClient.prototype.getRegisteredServers = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.server.MruVServerService/GetRegisteredServers', request, metadata || {}, this.methodInfoGetRegisteredServers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.server.MruVServerService/GetRegisteredServers', request, metadata || {}, this.methodInfoGetRegisteredServers);
    };
    MruVServerServiceClient.prototype.getServerInfo = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.server.MruVServerService/GetServerInfo', request, metadata || {}, this.methodInfoGetServerInfo, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.server.MruVServerService/GetServerInfo', request, metadata || {}, this.methodInfoGetServerInfo);
    };
    MruVServerServiceClient.prototype.updateServerStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.server.MruVServerService/UpdateServerStatus', request, metadata || {}, this.methodInfoUpdateServerStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.server.MruVServerService/UpdateServerStatus', request, metadata || {}, this.methodInfoUpdateServerStatus);
    };
    MruVServerServiceClient.prototype.serverEventsStream = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.server.MruVServerService/ServerEventsStream', request, metadata || {}, this.methodInfoServerEventsStream);
    };
    return MruVServerServiceClient;
}());
exports.MruVServerServiceClient = MruVServerServiceClient;
