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
exports.MruVMovableObjectsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var objects_movable_pb = __importStar(require("../objects/movable_pb"));
var MruVMovableObjectsServiceClient = /** @class */ (function () {
    function MruVMovableObjectsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.CreateMovableObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.CreateMovableObjectResponse.deserializeBinary);
        this.methodInfoGetMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.GetMovableObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.GetMovableObjectResponse.deserializeBinary);
        this.methodInfoUpdateMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.UpdateMovableObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.UpdateMovableObjectResponse.deserializeBinary);
        this.methodInfoDeleteMovableObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.DeleteMovableObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.DeleteMovableObjectResponse.deserializeBinary);
        this.methodInfoMoveObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.MoveObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.MoveObjectResponse.deserializeBinary);
        this.methodInfoMoveObjectNext = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.MoveObjectNextResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.MoveObjectNextResponse.deserializeBinary);
        this.methodInfoMoveObjectPrevious = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.MoveObjectPreviousResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.MoveObjectPreviousResponse.deserializeBinary);
        this.methodInfoFetchAllMovableObjects = new grpcWeb.AbstractClientBase.MethodInfo(objects_movable_pb.FetchAllMovableObjectsResponse, function (request) {
            return request.serializeBinary();
        }, objects_movable_pb.FetchAllMovableObjectsResponse.deserializeBinary);
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
    MruVMovableObjectsServiceClient.prototype.createMovableObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/CreateMovableObject', request, metadata || {}, this.methodInfoCreateMovableObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/CreateMovableObject', request, metadata || {}, this.methodInfoCreateMovableObject);
    };
    MruVMovableObjectsServiceClient.prototype.getMovableObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/GetMovableObject', request, metadata || {}, this.methodInfoGetMovableObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/GetMovableObject', request, metadata || {}, this.methodInfoGetMovableObject);
    };
    MruVMovableObjectsServiceClient.prototype.updateMovableObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject', request, metadata || {}, this.methodInfoUpdateMovableObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/UpdateMovableObject', request, metadata || {}, this.methodInfoUpdateMovableObject);
    };
    MruVMovableObjectsServiceClient.prototype.deleteMovableObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject', request, metadata || {}, this.methodInfoDeleteMovableObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/DeleteMovableObject', request, metadata || {}, this.methodInfoDeleteMovableObject);
    };
    MruVMovableObjectsServiceClient.prototype.moveObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/MoveObject', request, metadata || {}, this.methodInfoMoveObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/MoveObject', request, metadata || {}, this.methodInfoMoveObject);
    };
    MruVMovableObjectsServiceClient.prototype.moveObjectNext = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/MoveObjectNext', request, metadata || {}, this.methodInfoMoveObjectNext, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/MoveObjectNext', request, metadata || {}, this.methodInfoMoveObjectNext);
    };
    MruVMovableObjectsServiceClient.prototype.moveObjectPrevious = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious', request, metadata || {}, this.methodInfoMoveObjectPrevious, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/MoveObjectPrevious', request, metadata || {}, this.methodInfoMoveObjectPrevious);
    };
    MruVMovableObjectsServiceClient.prototype.fetchAllMovableObjects = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.objects.MruVMovableObjectsService/FetchAllMovableObjects', request, metadata || {}, this.methodInfoFetchAllMovableObjects);
    };
    return MruVMovableObjectsServiceClient;
}());
exports.MruVMovableObjectsServiceClient = MruVMovableObjectsServiceClient;
