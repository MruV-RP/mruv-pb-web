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
var texturestudio_texturestudio_manage_pb = __importStar(require("../texturestudio/texturestudio_manage_pb"));
var TextureStudioManagerServiceClient = /** @class */ (function () {
    function TextureStudioManagerServiceClient(hostname, credentials, options) {
        this.methodInfoCreateServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_manage_pb.CreateServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_manage_pb.CreateServerResponse.deserializeBinary);
        this.methodInfoGetServers = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_manage_pb.GetServersResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_manage_pb.GetServersResponse.deserializeBinary);
        this.methodInfoMyServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_manage_pb.MyServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_manage_pb.MyServerResponse.deserializeBinary);
        this.methodInfoTransferOwnership = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_manage_pb.TransferOwnershipResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_manage_pb.TransferOwnershipResponse.deserializeBinary);
        this.methodInfoDeleteServer = new grpcWeb.AbstractClientBase.MethodInfo(texturestudio_texturestudio_manage_pb.DeleteServerResponse, function (request) {
            return request.serializeBinary();
        }, texturestudio_texturestudio_manage_pb.DeleteServerResponse.deserializeBinary);
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
    TextureStudioManagerServiceClient.prototype.createServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioManagerService/CreateServer', request, metadata || {}, this.methodInfoCreateServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioManagerService/CreateServer', request, metadata || {}, this.methodInfoCreateServer);
    };
    TextureStudioManagerServiceClient.prototype.getServers = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioManagerService/GetServers', request, metadata || {}, this.methodInfoGetServers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioManagerService/GetServers', request, metadata || {}, this.methodInfoGetServers);
    };
    TextureStudioManagerServiceClient.prototype.myServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioManagerService/MyServer', request, metadata || {}, this.methodInfoMyServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioManagerService/MyServer', request, metadata || {}, this.methodInfoMyServer);
    };
    TextureStudioManagerServiceClient.prototype.transferOwnership = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioManagerService/TransferOwnership', request, metadata || {}, this.methodInfoTransferOwnership, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioManagerService/TransferOwnership', request, metadata || {}, this.methodInfoTransferOwnership);
    };
    TextureStudioManagerServiceClient.prototype.deleteServer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/texture_studio.TextureStudioManagerService/DeleteServer', request, metadata || {}, this.methodInfoDeleteServer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/texture_studio.TextureStudioManagerService/DeleteServer', request, metadata || {}, this.methodInfoDeleteServer);
    };
    return TextureStudioManagerServiceClient;
}());
exports.TextureStudioManagerServiceClient = TextureStudioManagerServiceClient;
