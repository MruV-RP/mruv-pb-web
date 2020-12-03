"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.vehicles
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
exports.MruVVehiclesServiceClient = void 0;
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
        options['format'] = 'binary';
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
