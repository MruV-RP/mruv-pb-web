"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.vehicles
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
var vehicles_vehicles_pb = __importStar(require("../vehicles/vehicles_pb"));
var MruVVehiclesServiceClient = /** @class */ (function () {
    function MruVVehiclesServiceClient(hostname, credentials, options) {
        this.methodInfoCreateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(vehicles_vehicles_pb.CreateVehicleResponse, function (request) {
            return request.serializeBinary();
        }, vehicles_vehicles_pb.CreateVehicleResponse.deserializeBinary);
        this.methodInfoGetVehicle = new grpcWeb.AbstractClientBase.MethodInfo(vehicles_vehicles_pb.GetVehicleResponse, function (request) {
            return request.serializeBinary();
        }, vehicles_vehicles_pb.GetVehicleResponse.deserializeBinary);
        this.methodInfoUpdateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(vehicles_vehicles_pb.UpdateVehicleResponse, function (request) {
            return request.serializeBinary();
        }, vehicles_vehicles_pb.UpdateVehicleResponse.deserializeBinary);
        this.methodInfoDeleteVehicle = new grpcWeb.AbstractClientBase.MethodInfo(vehicles_vehicles_pb.DeleteVehicleResponse, function (request) {
            return request.serializeBinary();
        }, vehicles_vehicles_pb.DeleteVehicleResponse.deserializeBinary);
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
    MruVVehiclesServiceClient.prototype.createVehicle = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.vehicles.MruVVehiclesService/CreateVehicle', request, metadata || {}, this.methodInfoCreateVehicle, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.vehicles.MruVVehiclesService/CreateVehicle', request, metadata || {}, this.methodInfoCreateVehicle);
    };
    MruVVehiclesServiceClient.prototype.getVehicle = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.vehicles.MruVVehiclesService/GetVehicle', request, metadata || {}, this.methodInfoGetVehicle, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.vehicles.MruVVehiclesService/GetVehicle', request, metadata || {}, this.methodInfoGetVehicle);
    };
    MruVVehiclesServiceClient.prototype.updateVehicle = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.vehicles.MruVVehiclesService/UpdateVehicle', request, metadata || {}, this.methodInfoUpdateVehicle, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.vehicles.MruVVehiclesService/UpdateVehicle', request, metadata || {}, this.methodInfoUpdateVehicle);
    };
    MruVVehiclesServiceClient.prototype.deleteVehicle = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.vehicles.MruVVehiclesService/DeleteVehicle', request, metadata || {}, this.methodInfoDeleteVehicle, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.vehicles.MruVVehiclesService/DeleteVehicle', request, metadata || {}, this.methodInfoDeleteVehicle);
    };
    return MruVVehiclesServiceClient;
}());
exports.MruVVehiclesServiceClient = MruVVehiclesServiceClient;
