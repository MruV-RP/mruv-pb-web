/**
 * @fileoverview gRPC-Web generated client stub for mruv.spots
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as spots_spots_pb from '../spots/spots_pb';


export class MruVSpotsServiceClient {
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

  methodInfoCreateSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    spots_spots_pb.CreateSpotResponse,
    (request: spots_spots_pb.CreateSpotRequest) => {
      return request.serializeBinary();
    },
    spots_spots_pb.CreateSpotResponse.deserializeBinary
  );

  createSpot(
    request: spots_spots_pb.CreateSpotRequest,
    metadata: grpcWeb.Metadata | null): Promise<spots_spots_pb.CreateSpotResponse>;

  createSpot(
    request: spots_spots_pb.CreateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: spots_spots_pb.CreateSpotResponse) => void): grpcWeb.ClientReadableStream<spots_spots_pb.CreateSpotResponse>;

  createSpot(
    request: spots_spots_pb.CreateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: spots_spots_pb.CreateSpotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.spots.MruVSpotsService/CreateSpot',
        request,
        metadata || {},
        this.methodInfoCreateSpot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.spots.MruVSpotsService/CreateSpot',
    request,
    metadata || {},
    this.methodInfoCreateSpot);
  }

  methodInfoGetSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    spots_spots_pb.GetSpotResponse,
    (request: spots_spots_pb.GetSpotRequest) => {
      return request.serializeBinary();
    },
    spots_spots_pb.GetSpotResponse.deserializeBinary
  );

  getSpot(
    request: spots_spots_pb.GetSpotRequest,
    metadata: grpcWeb.Metadata | null): Promise<spots_spots_pb.GetSpotResponse>;

  getSpot(
    request: spots_spots_pb.GetSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: spots_spots_pb.GetSpotResponse) => void): grpcWeb.ClientReadableStream<spots_spots_pb.GetSpotResponse>;

  getSpot(
    request: spots_spots_pb.GetSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: spots_spots_pb.GetSpotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.spots.MruVSpotsService/GetSpot',
        request,
        metadata || {},
        this.methodInfoGetSpot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.spots.MruVSpotsService/GetSpot',
    request,
    metadata || {},
    this.methodInfoGetSpot);
  }

  methodInfoUpdateSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    spots_spots_pb.UpdateSpotResponse,
    (request: spots_spots_pb.UpdateSpotRequest) => {
      return request.serializeBinary();
    },
    spots_spots_pb.UpdateSpotResponse.deserializeBinary
  );

  updateSpot(
    request: spots_spots_pb.UpdateSpotRequest,
    metadata: grpcWeb.Metadata | null): Promise<spots_spots_pb.UpdateSpotResponse>;

  updateSpot(
    request: spots_spots_pb.UpdateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: spots_spots_pb.UpdateSpotResponse) => void): grpcWeb.ClientReadableStream<spots_spots_pb.UpdateSpotResponse>;

  updateSpot(
    request: spots_spots_pb.UpdateSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: spots_spots_pb.UpdateSpotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.spots.MruVSpotsService/UpdateSpot',
        request,
        metadata || {},
        this.methodInfoUpdateSpot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.spots.MruVSpotsService/UpdateSpot',
    request,
    metadata || {},
    this.methodInfoUpdateSpot);
  }

  methodInfoDeleteSpot = new grpcWeb.AbstractClientBase.MethodInfo(
    spots_spots_pb.DeleteSpotResponse,
    (request: spots_spots_pb.DeleteSpotRequest) => {
      return request.serializeBinary();
    },
    spots_spots_pb.DeleteSpotResponse.deserializeBinary
  );

  deleteSpot(
    request: spots_spots_pb.DeleteSpotRequest,
    metadata: grpcWeb.Metadata | null): Promise<spots_spots_pb.DeleteSpotResponse>;

  deleteSpot(
    request: spots_spots_pb.DeleteSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: spots_spots_pb.DeleteSpotResponse) => void): grpcWeb.ClientReadableStream<spots_spots_pb.DeleteSpotResponse>;

  deleteSpot(
    request: spots_spots_pb.DeleteSpotRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: spots_spots_pb.DeleteSpotResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.spots.MruVSpotsService/DeleteSpot',
        request,
        metadata || {},
        this.methodInfoDeleteSpot,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.spots.MruVSpotsService/DeleteSpot',
    request,
    metadata || {},
    this.methodInfoDeleteSpot);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    spots_spots_pb.FetchAllSpotsResponse,
    (request: spots_spots_pb.FetchAllSpotsRequest) => {
      return request.serializeBinary();
    },
    spots_spots_pb.FetchAllSpotsResponse.deserializeBinary
  );

  fetchAll(
    request: spots_spots_pb.FetchAllSpotsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.spots.MruVSpotsService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

