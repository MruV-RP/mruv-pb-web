"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
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
exports.MruVObjectModelsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var objects_models_pb = __importStar(require("../objects/models_pb"));
var MruVObjectModelsServiceClient = /** @class */ (function () {
    function MruVObjectModelsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(objects_models_pb.CreateObjectModelResponse, function (request) {
            return request.serializeBinary();
        }, objects_models_pb.CreateObjectModelResponse.deserializeBinary);
        this.methodInfoGetObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(objects_models_pb.GetObjectModelResponse, function (request) {
            return request.serializeBinary();
        }, objects_models_pb.GetObjectModelResponse.deserializeBinary);
        this.methodInfoUpdateObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(objects_models_pb.UpdateObjectModelResponse, function (request) {
            return request.serializeBinary();
        }, objects_models_pb.UpdateObjectModelResponse.deserializeBinary);
        this.methodInfoDeleteObjectModel = new grpcWeb.AbstractClientBase.MethodInfo(objects_models_pb.DeleteObjectModelResponse, function (request) {
            return request.serializeBinary();
        }, objects_models_pb.DeleteObjectModelResponse.deserializeBinary);
        this.methodInfoFetchAllModels = new grpcWeb.AbstractClientBase.MethodInfo(objects_models_pb.FetchAllModelsResponse, function (request) {
            return request.serializeBinary();
        }, objects_models_pb.FetchAllModelsResponse.deserializeBinary);
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
    MruVObjectModelsServiceClient.prototype.createObjectModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectModelsService/CreateObjectModel', request, metadata || {}, this.methodInfoCreateObjectModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectModelsService/CreateObjectModel', request, metadata || {}, this.methodInfoCreateObjectModel);
    };
    MruVObjectModelsServiceClient.prototype.getObjectModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectModelsService/GetObjectModel', request, metadata || {}, this.methodInfoGetObjectModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectModelsService/GetObjectModel', request, metadata || {}, this.methodInfoGetObjectModel);
    };
    MruVObjectModelsServiceClient.prototype.updateObjectModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectModelsService/UpdateObjectModel', request, metadata || {}, this.methodInfoUpdateObjectModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectModelsService/UpdateObjectModel', request, metadata || {}, this.methodInfoUpdateObjectModel);
    };
    MruVObjectModelsServiceClient.prototype.deleteObjectModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectModelsService/DeleteObjectModel', request, metadata || {}, this.methodInfoDeleteObjectModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectModelsService/DeleteObjectModel', request, metadata || {}, this.methodInfoDeleteObjectModel);
    };
    MruVObjectModelsServiceClient.prototype.fetchAllModels = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.objects.MruVObjectModelsService/FetchAllModels', request, metadata || {}, this.methodInfoFetchAllModels);
    };
    return MruVObjectModelsServiceClient;
}());
exports.MruVObjectModelsServiceClient = MruVObjectModelsServiceClient;
