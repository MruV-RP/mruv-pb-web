"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.estates
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
exports.MruVEstateServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var estates_estates_pb = __importStar(require("../estates/estates_pb"));
var MruVEstateServiceClient = /** @class */ (function () {
    function MruVEstateServiceClient(hostname, credentials, options) {
        this.methodInfoCreateEstate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.CreateEstateResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.CreateEstateResponse.deserializeBinary);
        this.methodInfoGetEstate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.Estate, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.Estate.deserializeBinary);
        this.methodInfoUpdateEstate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.UpdateEstateResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.UpdateEstateResponse.deserializeBinary);
        this.methodInfoDeleteEstate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.DeleteEstateResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.DeleteEstateResponse.deserializeBinary);
        this.methodInfoGetEstates = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.GetEstatesResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.GetEstatesResponse.deserializeBinary);
        this.methodInfoAddGate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.AddGateResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.AddGateResponse.deserializeBinary);
        this.methodInfoRemoveGate = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.RemoveGateResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.RemoveGateResponse.deserializeBinary);
        this.methodInfoGetEstateGates = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.GetEstateGatesResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.GetEstateGatesResponse.deserializeBinary);
        this.methodInfoAddEntrance = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.AddEntranceResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.AddEntranceResponse.deserializeBinary);
        this.methodInfoRemoveEntrance = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.RemoveEntranceResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.RemoveEntranceResponse.deserializeBinary);
        this.methodInfoGetEstateEntrances = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.GetEstateEntrancesResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.GetEstateEntrancesResponse.deserializeBinary);
        this.methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(estates_estates_pb.FetchAllEstatesResponse, function (request) {
            return request.serializeBinary();
        }, estates_estates_pb.FetchAllEstatesResponse.deserializeBinary);
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
    MruVEstateServiceClient.prototype.createEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/CreateEstate', request, metadata || {}, this.methodInfoCreateEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/CreateEstate', request, metadata || {}, this.methodInfoCreateEstate);
    };
    MruVEstateServiceClient.prototype.getEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/GetEstate', request, metadata || {}, this.methodInfoGetEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/GetEstate', request, metadata || {}, this.methodInfoGetEstate);
    };
    MruVEstateServiceClient.prototype.updateEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/UpdateEstate', request, metadata || {}, this.methodInfoUpdateEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/UpdateEstate', request, metadata || {}, this.methodInfoUpdateEstate);
    };
    MruVEstateServiceClient.prototype.deleteEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/DeleteEstate', request, metadata || {}, this.methodInfoDeleteEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/DeleteEstate', request, metadata || {}, this.methodInfoDeleteEstate);
    };
    MruVEstateServiceClient.prototype.getEstates = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/GetEstates', request, metadata || {}, this.methodInfoGetEstates, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/GetEstates', request, metadata || {}, this.methodInfoGetEstates);
    };
    MruVEstateServiceClient.prototype.addGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/AddGate', request, metadata || {}, this.methodInfoAddGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/AddGate', request, metadata || {}, this.methodInfoAddGate);
    };
    MruVEstateServiceClient.prototype.removeGate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/RemoveGate', request, metadata || {}, this.methodInfoRemoveGate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/RemoveGate', request, metadata || {}, this.methodInfoRemoveGate);
    };
    MruVEstateServiceClient.prototype.getEstateGates = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/GetEstateGates', request, metadata || {}, this.methodInfoGetEstateGates, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/GetEstateGates', request, metadata || {}, this.methodInfoGetEstateGates);
    };
    MruVEstateServiceClient.prototype.addEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/AddEntrance', request, metadata || {}, this.methodInfoAddEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/AddEntrance', request, metadata || {}, this.methodInfoAddEntrance);
    };
    MruVEstateServiceClient.prototype.removeEntrance = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/RemoveEntrance', request, metadata || {}, this.methodInfoRemoveEntrance, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/RemoveEntrance', request, metadata || {}, this.methodInfoRemoveEntrance);
    };
    MruVEstateServiceClient.prototype.getEstateEntrances = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.estates.MruVEstateService/GetEstateEntrances', request, metadata || {}, this.methodInfoGetEstateEntrances, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.estates.MruVEstateService/GetEstateEntrances', request, metadata || {}, this.methodInfoGetEstateEntrances);
    };
    MruVEstateServiceClient.prototype.fetchAll = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.estates.MruVEstateService/FetchAll', request, metadata || {}, this.methodInfoFetchAll);
    };
    return MruVEstateServiceClient;
}());
exports.MruVEstateServiceClient = MruVEstateServiceClient;
