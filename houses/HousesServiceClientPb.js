"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.houses
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
var houses_houses_pb = __importStar(require("../houses/houses_pb"));
var MruVHousesServiceClient = /** @class */ (function () {
    function MruVHousesServiceClient(hostname, credentials, options) {
        this.methodInfoCreateHouse = new grpcWeb.AbstractClientBase.MethodInfo(houses_houses_pb.CreateHouseResponse, function (request) {
            return request.serializeBinary();
        }, houses_houses_pb.CreateHouseResponse.deserializeBinary);
        this.methodInfoGetHouse = new grpcWeb.AbstractClientBase.MethodInfo(houses_houses_pb.GetHouseResponse, function (request) {
            return request.serializeBinary();
        }, houses_houses_pb.GetHouseResponse.deserializeBinary);
        this.methodInfoUpdateHouse = new grpcWeb.AbstractClientBase.MethodInfo(houses_houses_pb.UpdateHouseResponse, function (request) {
            return request.serializeBinary();
        }, houses_houses_pb.UpdateHouseResponse.deserializeBinary);
        this.methodInfoDeleteHouse = new grpcWeb.AbstractClientBase.MethodInfo(houses_houses_pb.DeleteHouseResponse, function (request) {
            return request.serializeBinary();
        }, houses_houses_pb.DeleteHouseResponse.deserializeBinary);
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
    MruVHousesServiceClient.prototype.createHouse = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.houses.MruVHousesService/CreateHouse', request, metadata || {}, this.methodInfoCreateHouse, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.houses.MruVHousesService/CreateHouse', request, metadata || {}, this.methodInfoCreateHouse);
    };
    MruVHousesServiceClient.prototype.getHouse = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.houses.MruVHousesService/GetHouse', request, metadata || {}, this.methodInfoGetHouse, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.houses.MruVHousesService/GetHouse', request, metadata || {}, this.methodInfoGetHouse);
    };
    MruVHousesServiceClient.prototype.updateHouse = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.houses.MruVHousesService/UpdateHouse', request, metadata || {}, this.methodInfoUpdateHouse, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.houses.MruVHousesService/UpdateHouse', request, metadata || {}, this.methodInfoUpdateHouse);
    };
    MruVHousesServiceClient.prototype.deleteHouse = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.houses.MruVHousesService/DeleteHouse', request, metadata || {}, this.methodInfoDeleteHouse, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.houses.MruVHousesService/DeleteHouse', request, metadata || {}, this.methodInfoDeleteHouse);
    };
    return MruVHousesServiceClient;
}());
exports.MruVHousesServiceClient = MruVHousesServiceClient;
