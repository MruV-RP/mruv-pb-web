"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for texture_studio
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
var texturestudio_texturestudio_server_pb = __importStar(require("../texturestudio/texturestudio_server_pb"));
var TextureStudioServerServiceClient = /** @class */ (function () {
    function TextureStudioServerServiceClient(hostname, credentials, options) {
        this.methodInfoStartServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.StartServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.StartServerResponse.deserializeBinary);
        this.methodInfoStopServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.StopServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.StopServerResponse.deserializeBinary);
        this.methodInfoRestartServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.RestartServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.RestartServerResponse.deserializeBinary);
        this.methodInfoServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.ServerStatusResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.ServerStatusResponse.deserializeBinary);
        this.methodInfoUploadProject = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.UploadProjectResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.UploadProjectResponse.deserializeBinary);
        this.methodInfoGetProject = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.GetProjectResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.GetProjectResponse.deserializeBinary);
        this.methodInfoGetProjects = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.GetProjectsResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.GetProjectsResponse.deserializeBinary);
        this.methodInfoSubscribeToProjectsChanges = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_server_pb.SubscribeToProjectsChangesResponse.deserializeBinary);
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
    TextureStudioServerServiceClient.prototype.startServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/StartServer', request, metadata || {}, this.methodInfoStartServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/StartServer', request, metadata || {}, this.methodInfoStartServer);
    };
    TextureStudioServerServiceClient.prototype.stopServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/StopServer', request, metadata || {}, this.methodInfoStopServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/StopServer', request, metadata || {}, this.methodInfoStopServer);
    };
    TextureStudioServerServiceClient.prototype.restartServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/RestartServer', request, metadata || {}, this.methodInfoRestartServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/RestartServer', request, metadata || {}, this.methodInfoRestartServer);
    };
    TextureStudioServerServiceClient.prototype.serverStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/ServerStatus', request, metadata || {}, this.methodInfoServerStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/ServerStatus', request, metadata || {}, this.methodInfoServerStatus);
    };
    TextureStudioServerServiceClient.prototype.uploadProject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/UploadProject', request, metadata || {}, this.methodInfoUploadProject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/UploadProject', request, metadata || {}, this.methodInfoUploadProject);
    };
    TextureStudioServerServiceClient.prototype.getProject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/GetProject', request, metadata || {}, this.methodInfoGetProject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/GetProject', request, metadata || {}, this.methodInfoGetProject);
    };
    TextureStudioServerServiceClient.prototype.getProjects = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioServerService/GetProjects', request, metadata || {}, this.methodInfoGetProjects, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioServerService/GetProjects', request, metadata || {}, this.methodInfoGetProjects);
    };
    TextureStudioServerServiceClient.prototype.subscribeToProjectsChanges = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/texture_studio.TextureStudioServerService/SubscribeToProjectsChanges', request, metadata || {}, this.methodInfoSubscribeToProjectsChanges);
    };
    return TextureStudioServerServiceClient;
}());
exports.TextureStudioServerServiceClient = TextureStudioServerServiceClient;
