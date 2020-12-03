"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.gates
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
exports.MruVGatesServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var gates_gates_pb = __importStar(require("../gates/gates_pb"));
var MruVGatesServiceClient = /** @class */ (function () {
    function MruVGatesServiceClient(hostname, credentials, options) {
        this.methodInfoCreateGate = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.CreateGateResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.CreateGateResponse.deserializeBinary);
        this.methodInfoGetGate = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.GetGateResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.GetGateResponse.deserializeBinary);
        this.methodInfoUpdateGate = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.UpdateGateResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.UpdateGateResponse.deserializeBinary);
        this.methodInfoDeleteGate = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.DeleteGateResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.DeleteGateResponse.deserializeBinary);
        this.methodInfoLock = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.LockResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.LockResponse.deserializeBinary);
        this.methodInfoUnlock = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.UnlockResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.UnlockResponse.deserializeBinary);
        this.methodInfoOpen = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.OpenResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.OpenResponse.deserializeBinary);
        this.methodInfoClose = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.CloseResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.CloseResponse.deserializeBinary);
        this.methodInfoFindNearestGate = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.FindNearestGateResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.FindNearestGateResponse.deserializeBinary);
        this.methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(gates_gates_pb.FetchAllGatesResponse, function (request) {
            return request.serializeBinary();
        }, gates_gates_pb.FetchAllGatesResponse.deserializeBinary);
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
    MruVGatesServiceClient.prototype.createGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/CreateGate', request, metadata || {}, this.methodInfoCreateGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/CreateGate', request, metadata || {}, this.methodInfoCreateGate);
    };
    MruVGatesServiceClient.prototype.getGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/GetGate', request, metadata || {}, this.methodInfoGetGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/GetGate', request, metadata || {}, this.methodInfoGetGate);
    };
    MruVGatesServiceClient.prototype.updateGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/UpdateGate', request, metadata || {}, this.methodInfoUpdateGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/UpdateGate', request, metadata || {}, this.methodInfoUpdateGate);
    };
    MruVGatesServiceClient.prototype.deleteGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/DeleteGate', request, metadata || {}, this.methodInfoDeleteGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/DeleteGate', request, metadata || {}, this.methodInfoDeleteGate);
    };
    MruVGatesServiceClient.prototype.lock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/Lock', request, metadata || {}, this.methodInfoLock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/Lock', request, metadata || {}, this.methodInfoLock);
    };
    MruVGatesServiceClient.prototype.unlock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/Unlock', request, metadata || {}, this.methodInfoUnlock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/Unlock', request, metadata || {}, this.methodInfoUnlock);
    };
    MruVGatesServiceClient.prototype.open = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/Open', request, metadata || {}, this.methodInfoOpen, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/Open', request, metadata || {}, this.methodInfoOpen);
    };
    MruVGatesServiceClient.prototype.close = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/Close', request, metadata || {}, this.methodInfoClose, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/Close', request, metadata || {}, this.methodInfoClose);
    };
    MruVGatesServiceClient.prototype.findNearestGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.gates.MruVGatesService/FindNearestGate', request, metadata || {}, this.methodInfoFindNearestGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.gates.MruVGatesService/FindNearestGate', request, metadata || {}, this.methodInfoFindNearestGate);
    };
    MruVGatesServiceClient.prototype.fetchAll = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.gates.MruVGatesService/FetchAll', request, metadata || {}, this.methodInfoFetchAll);
    };
    return MruVGatesServiceClient;
}());
exports.MruVGatesServiceClient = MruVGatesServiceClient;
