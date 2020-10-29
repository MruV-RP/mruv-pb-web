/**
 * @fileoverview gRPC-Web generated client stub for mruv.vehicles
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateVehicleRequest,
  CreateVehicleResponse,
  DeleteVehicleRequest,
  DeleteVehicleResponse,
  GetVehicleRequest,
  GetVehicleResponse,
  UpdateVehicleRequest,
  UpdateVehicleResponse} from './vehicles_pb';

export class MruVVehiclesServiceClient {
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

  methodInfoCreateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateVehicleResponse,
    (request: CreateVehicleRequest) => {
      return request.serializeBinary();
    },
    CreateVehicleResponse.deserializeBinary
  );

  createVehicle(
    request: CreateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateVehicleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.vehicles.MruVVehiclesService/CreateVehicle',
      request,
      metadata || {},
      this.methodInfoCreateVehicle,
      callback);
  }

  methodInfoGetVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    GetVehicleResponse,
    (request: GetVehicleRequest) => {
      return request.serializeBinary();
    },
    GetVehicleResponse.deserializeBinary
  );

  getVehicle(
    request: GetVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetVehicleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.vehicles.MruVVehiclesService/GetVehicle',
      request,
      metadata || {},
      this.methodInfoGetVehicle,
      callback);
  }

  methodInfoUpdateVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateVehicleResponse,
    (request: UpdateVehicleRequest) => {
      return request.serializeBinary();
    },
    UpdateVehicleResponse.deserializeBinary
  );

  updateVehicle(
    request: UpdateVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateVehicleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.vehicles.MruVVehiclesService/UpdateVehicle',
      request,
      metadata || {},
      this.methodInfoUpdateVehicle,
      callback);
  }

  methodInfoDeleteVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteVehicleResponse,
    (request: DeleteVehicleRequest) => {
      return request.serializeBinary();
    },
    DeleteVehicleResponse.deserializeBinary
  );

  deleteVehicle(
    request: DeleteVehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteVehicleResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.vehicles.MruVVehiclesService/DeleteVehicle',
      request,
      metadata || {},
      this.methodInfoDeleteVehicle,
      callback);
  }

}

