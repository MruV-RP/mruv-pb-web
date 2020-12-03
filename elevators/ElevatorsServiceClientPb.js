"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.elevators
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
exports.MruVElevatorsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var elevators_elevators_pb = __importStar(require("../elevators/elevators_pb"));
var MruVElevatorsServiceClient = /** @class */ (function () {
    function MruVElevatorsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateElevator = new grpcWeb.AbstractClientBase.MethodInfo(elevators_elevators_pb.CreateElevatorResponse, function (request) {
            return request.serializeBinary();
        }, elevators_elevators_pb.CreateElevatorResponse.deserializeBinary);
        this.methodInfoGetElevator = new grpcWeb.AbstractClientBase.MethodInfo(elevators_elevators_pb.GetElevatorResponse, function (request) {
            return request.serializeBinary();
        }, elevators_elevators_pb.GetElevatorResponse.deserializeBinary);
        this.methodInfoUpdateElevator = new grpcWeb.AbstractClientBase.MethodInfo(elevators_elevators_pb.UpdateElevatorResponse, function (request) {
            return request.serializeBinary();
        }, elevators_elevators_pb.UpdateElevatorResponse.deserializeBinary);
        this.methodInfoDeleteElevator = new grpcWeb.AbstractClientBase.MethodInfo(elevators_elevators_pb.DeleteElevatorResponse, function (request) {
            return request.serializeBinary();
        }, elevators_elevators_pb.DeleteElevatorResponse.deserializeBinary);
        this.methodInfoGetElevatorFloors = new grpcWeb.AbstractClientBase.MethodInfo(elevators_elevators_pb.GetElevatorFloorsResponse, function (request) {
            return request.serializeBinary();
        }, elevators_elevators_pb.GetElevatorFloorsResponse.deserializeBinary);
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
    MruVElevatorsServiceClient.prototype.createElevator = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.elevators.MruVElevatorsService/CreateElevator', request, metadata || {}, this.methodInfoCreateElevator, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.elevators.MruVElevatorsService/CreateElevator', request, metadata || {}, this.methodInfoCreateElevator);
    };
    MruVElevatorsServiceClient.prototype.getElevator = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.elevators.MruVElevatorsService/GetElevator', request, metadata || {}, this.methodInfoGetElevator, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.elevators.MruVElevatorsService/GetElevator', request, metadata || {}, this.methodInfoGetElevator);
    };
    MruVElevatorsServiceClient.prototype.updateElevator = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.elevators.MruVElevatorsService/UpdateElevator', request, metadata || {}, this.methodInfoUpdateElevator, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.elevators.MruVElevatorsService/UpdateElevator', request, metadata || {}, this.methodInfoUpdateElevator);
    };
    MruVElevatorsServiceClient.prototype.deleteElevator = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.elevators.MruVElevatorsService/DeleteElevator', request, metadata || {}, this.methodInfoDeleteElevator, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.elevators.MruVElevatorsService/DeleteElevator', request, metadata || {}, this.methodInfoDeleteElevator);
    };
    MruVElevatorsServiceClient.prototype.getElevatorFloors = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.elevators.MruVElevatorsService/GetElevatorFloors', request, metadata || {}, this.methodInfoGetElevatorFloors, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.elevators.MruVElevatorsService/GetElevatorFloors', request, metadata || {}, this.methodInfoGetElevatorFloors);
    };
    return MruVElevatorsServiceClient;
}());
exports.MruVElevatorsServiceClient = MruVElevatorsServiceClient;
