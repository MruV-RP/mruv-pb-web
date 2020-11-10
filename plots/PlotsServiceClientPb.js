"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.plots
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
        options['format'] = 'text';
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
