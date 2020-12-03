"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.spots
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
exports.MruVSpotsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var spots_spots_pb = __importStar(require("../spots/spots_pb"));
var MruVSpotsServiceClient = /** @class */ (function () {
    function MruVSpotsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateSpot = new grpcWeb.AbstractClientBase.MethodInfo(spots_spots_pb.CreateSpotResponse, function (request) {
            return request.serializeBinary();
        }, spots_spots_pb.CreateSpotResponse.deserializeBinary);
        this.methodInfoGetSpot = new grpcWeb.AbstractClientBase.MethodInfo(spots_spots_pb.GetSpotResponse, function (request) {
            return request.serializeBinary();
        }, spots_spots_pb.GetSpotResponse.deserializeBinary);
        this.methodInfoUpdateSpot = new grpcWeb.AbstractClientBase.MethodInfo(spots_spots_pb.UpdateSpotResponse, function (request) {
            return request.serializeBinary();
        }, spots_spots_pb.UpdateSpotResponse.deserializeBinary);
        this.methodInfoDeleteSpot = new grpcWeb.AbstractClientBase.MethodInfo(spots_spots_pb.DeleteSpotResponse, function (request) {
            return request.serializeBinary();
        }, spots_spots_pb.DeleteSpotResponse.deserializeBinary);
        this.methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(spots_spots_pb.FetchAllSpotsResponse, function (request) {
            return request.serializeBinary();
        }, spots_spots_pb.FetchAllSpotsResponse.deserializeBinary);
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
    MruVSpotsServiceClient.prototype.createSpot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.spots.MruVSpotsService/CreateSpot', request, metadata || {}, this.methodInfoCreateSpot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.spots.MruVSpotsService/CreateSpot', request, metadata || {}, this.methodInfoCreateSpot);
    };
    MruVSpotsServiceClient.prototype.getSpot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.spots.MruVSpotsService/GetSpot', request, metadata || {}, this.methodInfoGetSpot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.spots.MruVSpotsService/GetSpot', request, metadata || {}, this.methodInfoGetSpot);
    };
    MruVSpotsServiceClient.prototype.updateSpot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.spots.MruVSpotsService/UpdateSpot', request, metadata || {}, this.methodInfoUpdateSpot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.spots.MruVSpotsService/UpdateSpot', request, metadata || {}, this.methodInfoUpdateSpot);
    };
    MruVSpotsServiceClient.prototype.deleteSpot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.spots.MruVSpotsService/DeleteSpot', request, metadata || {}, this.methodInfoDeleteSpot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.spots.MruVSpotsService/DeleteSpot', request, metadata || {}, this.methodInfoDeleteSpot);
    };
    MruVSpotsServiceClient.prototype.fetchAll = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.spots.MruVSpotsService/FetchAll', request, metadata || {}, this.methodInfoFetchAll);
    };
    return MruVSpotsServiceClient;
}());
exports.MruVSpotsServiceClient = MruVSpotsServiceClient;
