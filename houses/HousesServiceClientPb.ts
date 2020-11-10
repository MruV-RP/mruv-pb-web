/**
 * @fileoverview gRPC-Web generated client stub for mruv.houses
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as houses_houses_pb from '../houses/houses_pb';


export class MruVHousesServiceClient {
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

  methodInfoCreateHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    houses_houses_pb.CreateHouseResponse,
    (request: houses_houses_pb.CreateHouseRequest) => {
      return request.serializeBinary();
    },
    houses_houses_pb.CreateHouseResponse.deserializeBinary
  );

  createHouse(
    request: houses_houses_pb.CreateHouseRequest,
    metadata: grpcWeb.Metadata | null): Promise<houses_houses_pb.CreateHouseResponse>;

  createHouse(
    request: houses_houses_pb.CreateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: houses_houses_pb.CreateHouseResponse) => void): grpcWeb.ClientReadableStream<houses_houses_pb.CreateHouseResponse>;

  createHouse(
    request: houses_houses_pb.CreateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: houses_houses_pb.CreateHouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.houses.MruVHousesService/CreateHouse',
        request,
        metadata || {},
        this.methodInfoCreateHouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.houses.MruVHousesService/CreateHouse',
    request,
    metadata || {},
    this.methodInfoCreateHouse);
  }

  methodInfoGetHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    houses_houses_pb.GetHouseResponse,
    (request: houses_houses_pb.GetHouseRequest) => {
      return request.serializeBinary();
    },
    houses_houses_pb.GetHouseResponse.deserializeBinary
  );

  getHouse(
    request: houses_houses_pb.GetHouseRequest,
    metadata: grpcWeb.Metadata | null): Promise<houses_houses_pb.GetHouseResponse>;

  getHouse(
    request: houses_houses_pb.GetHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: houses_houses_pb.GetHouseResponse) => void): grpcWeb.ClientReadableStream<houses_houses_pb.GetHouseResponse>;

  getHouse(
    request: houses_houses_pb.GetHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: houses_houses_pb.GetHouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.houses.MruVHousesService/GetHouse',
        request,
        metadata || {},
        this.methodInfoGetHouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.houses.MruVHousesService/GetHouse',
    request,
    metadata || {},
    this.methodInfoGetHouse);
  }

  methodInfoUpdateHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    houses_houses_pb.UpdateHouseResponse,
    (request: houses_houses_pb.UpdateHouseRequest) => {
      return request.serializeBinary();
    },
    houses_houses_pb.UpdateHouseResponse.deserializeBinary
  );

  updateHouse(
    request: houses_houses_pb.UpdateHouseRequest,
    metadata: grpcWeb.Metadata | null): Promise<houses_houses_pb.UpdateHouseResponse>;

  updateHouse(
    request: houses_houses_pb.UpdateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: houses_houses_pb.UpdateHouseResponse) => void): grpcWeb.ClientReadableStream<houses_houses_pb.UpdateHouseResponse>;

  updateHouse(
    request: houses_houses_pb.UpdateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: houses_houses_pb.UpdateHouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.houses.MruVHousesService/UpdateHouse',
        request,
        metadata || {},
        this.methodInfoUpdateHouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.houses.MruVHousesService/UpdateHouse',
    request,
    metadata || {},
    this.methodInfoUpdateHouse);
  }

  methodInfoDeleteHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    houses_houses_pb.DeleteHouseResponse,
    (request: houses_houses_pb.DeleteHouseRequest) => {
      return request.serializeBinary();
    },
    houses_houses_pb.DeleteHouseResponse.deserializeBinary
  );

  deleteHouse(
    request: houses_houses_pb.DeleteHouseRequest,
    metadata: grpcWeb.Metadata | null): Promise<houses_houses_pb.DeleteHouseResponse>;

  deleteHouse(
    request: houses_houses_pb.DeleteHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: houses_houses_pb.DeleteHouseResponse) => void): grpcWeb.ClientReadableStream<houses_houses_pb.DeleteHouseResponse>;

  deleteHouse(
    request: houses_houses_pb.DeleteHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: houses_houses_pb.DeleteHouseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.houses.MruVHousesService/DeleteHouse',
        request,
        metadata || {},
        this.methodInfoDeleteHouse,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.houses.MruVHousesService/DeleteHouse',
    request,
    metadata || {},
    this.methodInfoDeleteHouse);
  }

}

