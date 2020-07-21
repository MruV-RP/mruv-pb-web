/**
 * @fileoverview gRPC-Web generated client stub for mruv.plots
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_spatial_pb from '../common/spatial_pb';

import {
  CreatePlotRequest,
  CreatePlotResponse,
  DeletePlotRequest,
  DeletePlotResponse,
  GetPlotRequest,
  GetPlotResponse,
  UpdatePlotRequest,
  UpdatePlotResponse} from './plots_pb';

export class MruVPlotsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreatePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    CreatePlotResponse,
    (request: CreatePlotRequest) => {
      return request.serializeBinary();
    },
    CreatePlotResponse.deserializeBinary
  );

  createPlot(
    request: CreatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreatePlotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.plots.MruVPlotsService/CreatePlot',
      request,
      metadata || {},
      this.methodInfoCreatePlot,
      callback);
  }

  methodInfoGetPlot = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPlotResponse,
    (request: GetPlotRequest) => {
      return request.serializeBinary();
    },
    GetPlotResponse.deserializeBinary
  );

  getPlot(
    request: GetPlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPlotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.plots.MruVPlotsService/GetPlot',
      request,
      metadata || {},
      this.methodInfoGetPlot,
      callback);
  }

  methodInfoUpdatePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdatePlotResponse,
    (request: UpdatePlotRequest) => {
      return request.serializeBinary();
    },
    UpdatePlotResponse.deserializeBinary
  );

  updatePlot(
    request: UpdatePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdatePlotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.plots.MruVPlotsService/UpdatePlot',
      request,
      metadata || {},
      this.methodInfoUpdatePlot,
      callback);
  }

  methodInfoDeletePlot = new grpcWeb.AbstractClientBase.MethodInfo(
    DeletePlotResponse,
    (request: DeletePlotRequest) => {
      return request.serializeBinary();
    },
    DeletePlotResponse.deserializeBinary
  );

  deletePlot(
    request: DeletePlotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeletePlotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.plots.MruVPlotsService/DeletePlot',
      request,
      metadata || {},
      this.methodInfoDeletePlot,
      callback);
  }

}

