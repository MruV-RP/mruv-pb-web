"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.plots
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
exports.MruVPlotsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var plots_plots_pb = __importStar(require("../plots/plots_pb"));
var MruVPlotsServiceClient = /** @class */ (function () {
    function MruVPlotsServiceClient(hostname, credentials, options) {
        this.methodInfoCreatePlot = new grpcWeb.AbstractClientBase.MethodInfo(plots_plots_pb.CreatePlotResponse, function (request) {
            return request.serializeBinary();
        }, plots_plots_pb.CreatePlotResponse.deserializeBinary);
        this.methodInfoGetPlot = new grpcWeb.AbstractClientBase.MethodInfo(plots_plots_pb.GetPlotResponse, function (request) {
            return request.serializeBinary();
        }, plots_plots_pb.GetPlotResponse.deserializeBinary);
        this.methodInfoUpdatePlot = new grpcWeb.AbstractClientBase.MethodInfo(plots_plots_pb.UpdatePlotResponse, function (request) {
            return request.serializeBinary();
        }, plots_plots_pb.UpdatePlotResponse.deserializeBinary);
        this.methodInfoDeletePlot = new grpcWeb.AbstractClientBase.MethodInfo(plots_plots_pb.DeletePlotResponse, function (request) {
            return request.serializeBinary();
        }, plots_plots_pb.DeletePlotResponse.deserializeBinary);
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
    MruVPlotsServiceClient.prototype.createPlot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.plots.MruVPlotsService/CreatePlot', request, metadata || {}, this.methodInfoCreatePlot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.plots.MruVPlotsService/CreatePlot', request, metadata || {}, this.methodInfoCreatePlot);
    };
    MruVPlotsServiceClient.prototype.getPlot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.plots.MruVPlotsService/GetPlot', request, metadata || {}, this.methodInfoGetPlot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.plots.MruVPlotsService/GetPlot', request, metadata || {}, this.methodInfoGetPlot);
    };
    MruVPlotsServiceClient.prototype.updatePlot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.plots.MruVPlotsService/UpdatePlot', request, metadata || {}, this.methodInfoUpdatePlot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.plots.MruVPlotsService/UpdatePlot', request, metadata || {}, this.methodInfoUpdatePlot);
    };
    MruVPlotsServiceClient.prototype.deletePlot = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.plots.MruVPlotsService/DeletePlot', request, metadata || {}, this.methodInfoDeletePlot, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.plots.MruVPlotsService/DeletePlot', request, metadata || {}, this.methodInfoDeletePlot);
    };
    return MruVPlotsServiceClient;
}());
exports.MruVPlotsServiceClient = MruVPlotsServiceClient;
