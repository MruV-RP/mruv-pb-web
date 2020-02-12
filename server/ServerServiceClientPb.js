"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv
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
var grpcWeb = __importStar(require("grpc-web"));
var server_server_model_pb = __importStar(require("../server/server_model_pb"));
var server_pb_1 = require("./server_pb");
var MruVServerServiceClient = /** @class */ (function () {
    function MruVServerServiceClient(hostname, credentials, options) {
        this.methodInfoRegisterServer = new grpcWeb.AbstractClientBase.MethodInfo(server_pb_1.RegisterServerResponse, function (request) {
            return request.serializeBinary();
        }, server_pb_1.RegisterServerResponse.deserializeBinary);
        this.methodInfoGetServerStatus = new grpcWeb.AbstractClientBase.MethodInfo(server_server_model_pb.ServerStatus, function (request) {
            return request.serializeBinary();
        }, server_server_model_pb.ServerStatus.deserializeBinary);
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
    MruVServerServiceClient.prototype.registerServer = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVServerService/RegisterServer', request, metadata || {}, this.methodInfoRegisterServer, callback);
    };
    MruVServerServiceClient.prototype.getServerStatus = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVServerService/GetServerStatus', request, metadata || {}, this.methodInfoGetServerStatus, callback);
    };
    return MruVServerServiceClient;
}());
exports.MruVServerServiceClient = MruVServerServiceClient;
