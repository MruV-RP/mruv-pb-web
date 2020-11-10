"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.devtools
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
var devtools_devtools_pb = __importStar(require("../devtools/devtools_pb"));
var MruVDevToolsServiceClient = /** @class */ (function () {
    function MruVDevToolsServiceClient(hostname, credentials, options) {
        this.methodInfoGetPositions = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.GetPositionsResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.GetPositionsResponse.deserializeBinary);
        this.methodInfoSavePosition = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.SavePositionResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.SavePositionResponse.deserializeBinary);
        this.methodInfoDeletePosition = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.DeletePositionResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.DeletePositionResponse.deserializeBinary);
        this.methodInfoGetOutfits = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.GetOutfitsResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.GetOutfitsResponse.deserializeBinary);
        this.methodInfoSaveOutfit = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.SaveOutfitResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.SaveOutfitResponse.deserializeBinary);
        this.methodInfoGetAnimations = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.GetAnimationsResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.GetAnimationsResponse.deserializeBinary);
        this.methodInfoGetAnimation = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.GetAnimationResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.GetAnimationResponse.deserializeBinary);
        this.methodInfoSaveAnimation = new grpcWeb.AbstractClientBase.MethodInfo(devtools_devtools_pb.SaveAnimationResponse, function (request) {
            return request.serializeBinary();
        }, devtools_devtools_pb.SaveAnimationResponse.deserializeBinary);
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
    MruVDevToolsServiceClient.prototype.getPositions = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetPositions', request, metadata || {}, this.methodInfoGetPositions, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetPositions', request, metadata || {}, this.methodInfoGetPositions);
    };
    MruVDevToolsServiceClient.prototype.savePosition = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/SavePosition', request, metadata || {}, this.methodInfoSavePosition, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/SavePosition', request, metadata || {}, this.methodInfoSavePosition);
    };
    MruVDevToolsServiceClient.prototype.deletePosition = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/DeletePosition', request, metadata || {}, this.methodInfoDeletePosition, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/DeletePosition', request, metadata || {}, this.methodInfoDeletePosition);
    };
    MruVDevToolsServiceClient.prototype.getOutfits = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetOutfits', request, metadata || {}, this.methodInfoGetOutfits, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetOutfits', request, metadata || {}, this.methodInfoGetOutfits);
    };
    MruVDevToolsServiceClient.prototype.saveOutfit = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/SaveOutfit', request, metadata || {}, this.methodInfoSaveOutfit, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/SaveOutfit', request, metadata || {}, this.methodInfoSaveOutfit);
    };
    MruVDevToolsServiceClient.prototype.getAnimations = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetAnimations', request, metadata || {}, this.methodInfoGetAnimations, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetAnimations', request, metadata || {}, this.methodInfoGetAnimations);
    };
    MruVDevToolsServiceClient.prototype.getAnimation = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetAnimation', request, metadata || {}, this.methodInfoGetAnimation, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetAnimation', request, metadata || {}, this.methodInfoGetAnimation);
    };
    MruVDevToolsServiceClient.prototype.saveAnimation = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/SaveAnimation', request, metadata || {}, this.methodInfoSaveAnimation, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/SaveAnimation', request, metadata || {}, this.methodInfoSaveAnimation);
    };
    MruVDevToolsServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus);
    };
    MruVDevToolsServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.devtools.MruVDevToolsService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.devtools.MruVDevToolsService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion);
    };
    return MruVDevToolsServiceClient;
}());
exports.MruVDevToolsServiceClient = MruVDevToolsServiceClient;
