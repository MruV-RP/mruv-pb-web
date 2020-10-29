/**
 * @fileoverview gRPC-Web generated client stub for mruv.houses
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateHouseRequest,
  CreateHouseResponse,
  DeleteHouseRequest,
  DeleteHouseResponse,
  GetHouseRequest,
  GetHouseResponse,
  UpdateHouseRequest,
  UpdateHouseResponse} from './houses_pb';

export class MruVHousesServiceClient {
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

  methodInfoCreateHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateHouseResponse,
    (request: CreateHouseRequest) => {
      return request.serializeBinary();
    },
    CreateHouseResponse.deserializeBinary
  );

  createHouse(
    request: CreateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateHouseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.houses.MruVHousesService/CreateHouse',
      request,
      metadata || {},
      this.methodInfoCreateHouse,
      callback);
  }

  methodInfoGetHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    GetHouseResponse,
    (request: GetHouseRequest) => {
      return request.serializeBinary();
    },
    GetHouseResponse.deserializeBinary
  );

  getHouse(
    request: GetHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetHouseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.houses.MruVHousesService/GetHouse',
      request,
      metadata || {},
      this.methodInfoGetHouse,
      callback);
  }

  methodInfoUpdateHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateHouseResponse,
    (request: UpdateHouseRequest) => {
      return request.serializeBinary();
    },
    UpdateHouseResponse.deserializeBinary
  );

  updateHouse(
    request: UpdateHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateHouseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.houses.MruVHousesService/UpdateHouse',
      request,
      metadata || {},
      this.methodInfoUpdateHouse,
      callback);
  }

  methodInfoDeleteHouse = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteHouseResponse,
    (request: DeleteHouseRequest) => {
      return request.serializeBinary();
    },
    DeleteHouseResponse.deserializeBinary
  );

  deleteHouse(
    request: DeleteHouseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteHouseResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.houses.MruVHousesService/DeleteHouse',
      request,
      metadata || {},
      this.methodInfoDeleteHouse,
      callback);
  }

}

