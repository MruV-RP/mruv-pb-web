"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.entrances
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
exports.MruVEntrancesServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var entrances_entrances_pb = __importStar(require("../entrances/entrances_pb"));
var MruVEntrancesServiceClient = /** @class */ (function () {
    function MruVEntrancesServiceClient(hostname, credentials, options) {
        this.methodInfoCreateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.CreateEntranceResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.CreateEntranceResponse.deserializeBinary);
        this.methodInfoGetEntrance = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.GetEntranceResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.GetEntranceResponse.deserializeBinary);
        this.methodInfoUpdateEntrance = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.UpdateEntranceResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.UpdateEntranceResponse.deserializeBinary);
        this.methodInfoDeleteEntrance = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.DeleteEntranceResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.DeleteEntranceResponse.deserializeBinary);
        this.methodInfoLock = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.LockResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.LockResponse.deserializeBinary);
        this.methodInfoUnlock = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.UnlockResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.UnlockResponse.deserializeBinary);
        this.methodInfoFindNearestEntrance = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.FindNearestEntranceResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.FindNearestEntranceResponse.deserializeBinary);
        this.methodInfoEnter = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.EnterResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.EnterResponse.deserializeBinary);
        this.methodInfoExit = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.ExitResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.ExitResponse.deserializeBinary);
        this.methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(entrances_entrances_pb.FetchAllEntrancesResponse, function (request) {
            return request.serializeBinary();
        }, entrances_entrances_pb.FetchAllEntrancesResponse.deserializeBinary);
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
    MruVEntrancesServiceClient.prototype.createEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/CreateEntrance', request, metadata || {}, this.methodInfoCreateEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/CreateEntrance', request, metadata || {}, this.methodInfoCreateEntrance);
    };
    MruVEntrancesServiceClient.prototype.getEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/GetEntrance', request, metadata || {}, this.methodInfoGetEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/GetEntrance', request, metadata || {}, this.methodInfoGetEntrance);
    };
    MruVEntrancesServiceClient.prototype.updateEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/UpdateEntrance', request, metadata || {}, this.methodInfoUpdateEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/UpdateEntrance', request, metadata || {}, this.methodInfoUpdateEntrance);
    };
    MruVEntrancesServiceClient.prototype.deleteEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/DeleteEntrance', request, metadata || {}, this.methodInfoDeleteEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/DeleteEntrance', request, metadata || {}, this.methodInfoDeleteEntrance);
    };
    MruVEntrancesServiceClient.prototype.lock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/Lock', request, metadata || {}, this.methodInfoLock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/Lock', request, metadata || {}, this.methodInfoLock);
    };
    MruVEntrancesServiceClient.prototype.unlock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/Unlock', request, metadata || {}, this.methodInfoUnlock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/Unlock', request, metadata || {}, this.methodInfoUnlock);
    };
    MruVEntrancesServiceClient.prototype.findNearestEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/FindNearestEntrance', request, metadata || {}, this.methodInfoFindNearestEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/FindNearestEntrance', request, metadata || {}, this.methodInfoFindNearestEntrance);
    };
    MruVEntrancesServiceClient.prototype.enter = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/Enter', request, metadata || {}, this.methodInfoEnter, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/Enter', request, metadata || {}, this.methodInfoEnter);
    };
    MruVEntrancesServiceClient.prototype.exit = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.entrances.MruVEntrancesService/Exit', request, metadata || {}, this.methodInfoExit, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/Exit', request, metadata || {}, this.methodInfoExit);
    };
    MruVEntrancesServiceClient.prototype.fetchAll = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.entrances.MruVEntrancesService/FetchAll', request, metadata || {}, this.methodInfoFetchAll);
    };
    return MruVEntrancesServiceClient;
}());
exports.MruVEntrancesServiceClient = MruVEntrancesServiceClient;
