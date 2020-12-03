/**
 * @fileoverview gRPC-Web generated client stub for mruv.plots
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as plots_plots_pb from '../plots/plots_pb';


export class MruVPlotsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreatePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    plots_plots_pb.CreatePlotResponse,
    (request: plots_plots_pb.CreatePlotRequest) => {
      return request.serializeBinary();
    },
    plots_plots_pb.CreatePlotResponse.deserializeBinary
  );

  createPlot(
    request: plots_plots_pb.CreatePlotRequest,
    metadata: grpcWeb.Metadata | null): Promise<plots_plots_pb.CreatePlotResponse>;

  createPlot(
    request: plots_plots_pb.CreatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: plots_plots_pb.CreatePlotResponse) => void): grpcWeb.ClientReadableStream<plots_plots_pb.CreatePlotResponse>;

  createPlot(
    request: plots_plots_pb.CreatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: plots_plots_pb.CreatePlotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.plots.MruVPlotsService/CreatePlot',
        request,
        metadata || {},
        this.methodInfoCreatePlot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.plots.MruVPlotsService/CreatePlot',
    request,
    metadata || {},
    this.methodInfoCreatePlot);
  }

  methodInfoGetPlot = new grpcWeb.AbstractClientBase.MethodInfo(
    plots_plots_pb.GetPlotResponse,
    (request: plots_plots_pb.GetPlotRequest) => {
      return request.serializeBinary();
    },
    plots_plots_pb.GetPlotResponse.deserializeBinary
  );

  getPlot(
    request: plots_plots_pb.GetPlotRequest,
    metadata: grpcWeb.Metadata | null): Promise<plots_plots_pb.GetPlotResponse>;

  getPlot(
    request: plots_plots_pb.GetPlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: plots_plots_pb.GetPlotResponse) => void): grpcWeb.ClientReadableStream<plots_plots_pb.GetPlotResponse>;

  getPlot(
    request: plots_plots_pb.GetPlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: plots_plots_pb.GetPlotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.plots.MruVPlotsService/GetPlot',
        request,
        metadata || {},
        this.methodInfoGetPlot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.plots.MruVPlotsService/GetPlot',
    request,
    metadata || {},
    this.methodInfoGetPlot);
  }

  methodInfoUpdatePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    plots_plots_pb.UpdatePlotResponse,
    (request: plots_plots_pb.UpdatePlotRequest) => {
      return request.serializeBinary();
    },
    plots_plots_pb.UpdatePlotResponse.deserializeBinary
  );

  updatePlot(
    request: plots_plots_pb.UpdatePlotRequest,
    metadata: grpcWeb.Metadata | null): Promise<plots_plots_pb.UpdatePlotResponse>;

  updatePlot(
    request: plots_plots_pb.UpdatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: plots_plots_pb.UpdatePlotResponse) => void): grpcWeb.ClientReadableStream<plots_plots_pb.UpdatePlotResponse>;

  updatePlot(
    request: plots_plots_pb.UpdatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: plots_plots_pb.UpdatePlotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.plots.MruVPlotsService/UpdatePlot',
        request,
        metadata || {},
        this.methodInfoUpdatePlot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.plots.MruVPlotsService/UpdatePlot',
    request,
    metadata || {},
    this.methodInfoUpdatePlot);
  }

  methodInfoDeletePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    plots_plots_pb.DeletePlotResponse,
    (request: plots_plots_pb.DeletePlotRequest) => {
      return request.serializeBinary();
    },
    plots_plots_pb.DeletePlotResponse.deserializeBinary
  );

  deletePlot(
    request: plots_plots_pb.DeletePlotRequest,
    metadata: grpcWeb.Metadata | null): Promise<plots_plots_pb.DeletePlotResponse>;

  deletePlot(
    request: plots_plots_pb.DeletePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: plots_plots_pb.DeletePlotResponse) => void): grpcWeb.ClientReadableStream<plots_plots_pb.DeletePlotResponse>;

  deletePlot(
    request: plots_plots_pb.DeletePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: plots_plots_pb.DeletePlotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.plots.MruVPlotsService/DeletePlot',
        request,
        metadata || {},
        this.methodInfoDeletePlot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.plots.MruVPlotsService/DeletePlot',
    request,
    metadata || {},
    this.methodInfoDeletePlot);
  }

}

