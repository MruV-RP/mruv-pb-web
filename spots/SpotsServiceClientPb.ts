/**
 * @fileoverview gRPC-Web generated client stub for mruv.spots
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateSpotRequest,
  CreateSpotResponse,
  DeleteSpotRequest,
  DeleteSpotResponse,
  GetSpotRequest,
  GetSpotResponse,
  UpdateSpotRequest,
  UpdateSpotResponse} from './spots_pb';

export class MruVSpotsServiceClient {
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

  methodInfoCreateSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateSpotResponse,
    (request: CreateSpotRequest) => {
      return request.serializeBinary();
    },
    CreateSpotResponse.deserializeBinary
  );

  createSpot(
    request: CreateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateSpotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.spots.MruVSpotsService/CreateSpot',
      request,
      metadata || {},
      this.methodInfoCreateSpot,
      callback);
  }

  methodInfoGetSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    GetSpotResponse,
    (request: GetSpotRequest) => {
      return request.serializeBinary();
    },
    GetSpotResponse.deserializeBinary
  );

  getSpot(
    request: GetSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetSpotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.spots.MruVSpotsService/GetSpot',
      request,
      metadata || {},
      this.methodInfoGetSpot,
      callback);
  }

  methodInfoUpdateSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateSpotResponse,
    (request: UpdateSpotRequest) => {
      return request.serializeBinary();
    },
    UpdateSpotResponse.deserializeBinary
  );

  updateSpot(
    request: UpdateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateSpotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.spots.MruVSpotsService/UpdateSpot',
      request,
      metadata || {},
      this.methodInfoUpdateSpot,
      callback);
  }

  methodInfoDeleteSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteSpotResponse,
    (request: DeleteSpotRequest) => {
      return request.serializeBinary();
    },
    DeleteSpotResponse.deserializeBinary
  );

  deleteSpot(
    request: DeleteSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteSpotResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.spots.MruVSpotsService/DeleteSpot',
      request,
      metadata || {},
      this.methodInfoDeleteSpot,
      callback);
  }

}

