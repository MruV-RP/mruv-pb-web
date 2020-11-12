/**
 * @fileoverview gRPC-Web generated client stub for mruv.vehicles
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as vehicles_vehicles_pb from '../vehicles/vehicles_pb';


export class MruVVehiclesServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    vehicles_vehicles_pb.CreateVehicleResponse,
    (request: vehicles_vehicles_pb.CreateVehicleRequest) => {
      return request.serializeBinary();
    },
    vehicles_vehicles_pb.CreateVehicleResponse.deserializeBinary
  );

  createVehicle(
    request: vehicles_vehicles_pb.CreateVehicleRequest,
    metadata: grpcWeb.Metadata | null): Promise<vehicles_vehicles_pb.CreateVehicleResponse>;

  createVehicle(
    request: vehicles_vehicles_pb.CreateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.CreateVehicleResponse) => void): grpcWeb.ClientReadableStream<vehicles_vehicles_pb.CreateVehicleResponse>;

  createVehicle(
    request: vehicles_vehicles_pb.CreateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.CreateVehicleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.vehicles.MruVVehiclesService/CreateVehicle',
        request,
        metadata || {},
        this.methodInfoCreateVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.vehicles.MruVVehiclesService/CreateVehicle',
    request,
    metadata || {},
    this.methodInfoCreateVehicle);
  }

  methodInfoGetVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    vehicles_vehicles_pb.GetVehicleResponse,
    (request: vehicles_vehicles_pb.GetVehicleRequest) => {
      return request.serializeBinary();
    },
    vehicles_vehicles_pb.GetVehicleResponse.deserializeBinary
  );

  getVehicle(
    request: vehicles_vehicles_pb.GetVehicleRequest,
    metadata: grpcWeb.Metadata | null): Promise<vehicles_vehicles_pb.GetVehicleResponse>;

  getVehicle(
    request: vehicles_vehicles_pb.GetVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.GetVehicleResponse) => void): grpcWeb.ClientReadableStream<vehicles_vehicles_pb.GetVehicleResponse>;

  getVehicle(
    request: vehicles_vehicles_pb.GetVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.GetVehicleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.vehicles.MruVVehiclesService/GetVehicle',
        request,
        metadata || {},
        this.methodInfoGetVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.vehicles.MruVVehiclesService/GetVehicle',
    request,
    metadata || {},
    this.methodInfoGetVehicle);
  }

  methodInfoUpdateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    vehicles_vehicles_pb.UpdateVehicleResponse,
    (request: vehicles_vehicles_pb.UpdateVehicleRequest) => {
      return request.serializeBinary();
    },
    vehicles_vehicles_pb.UpdateVehicleResponse.deserializeBinary
  );

  updateVehicle(
    request: vehicles_vehicles_pb.UpdateVehicleRequest,
    metadata: grpcWeb.Metadata | null): Promise<vehicles_vehicles_pb.UpdateVehicleResponse>;

  updateVehicle(
    request: vehicles_vehicles_pb.UpdateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.UpdateVehicleResponse) => void): grpcWeb.ClientReadableStream<vehicles_vehicles_pb.UpdateVehicleResponse>;

  updateVehicle(
    request: vehicles_vehicles_pb.UpdateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.UpdateVehicleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.vehicles.MruVVehiclesService/UpdateVehicle',
        request,
        metadata || {},
        this.methodInfoUpdateVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.vehicles.MruVVehiclesService/UpdateVehicle',
    request,
    metadata || {},
    this.methodInfoUpdateVehicle);
  }

  methodInfoDeleteVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    vehicles_vehicles_pb.DeleteVehicleResponse,
    (request: vehicles_vehicles_pb.DeleteVehicleRequest) => {
      return request.serializeBinary();
    },
    vehicles_vehicles_pb.DeleteVehicleResponse.deserializeBinary
  );

  deleteVehicle(
    request: vehicles_vehicles_pb.DeleteVehicleRequest,
    metadata: grpcWeb.Metadata | null): Promise<vehicles_vehicles_pb.DeleteVehicleResponse>;

  deleteVehicle(
    request: vehicles_vehicles_pb.DeleteVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.DeleteVehicleResponse) => void): grpcWeb.ClientReadableStream<vehicles_vehicles_pb.DeleteVehicleResponse>;

  deleteVehicle(
    request: vehicles_vehicles_pb.DeleteVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: vehicles_vehicles_pb.DeleteVehicleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.vehicles.MruVVehiclesService/DeleteVehicle',
        request,
        metadata || {},
        this.methodInfoDeleteVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.vehicles.MruVVehiclesService/DeleteVehicle',
    request,
    metadata || {},
    this.methodInfoDeleteVehicle);
  }

}

