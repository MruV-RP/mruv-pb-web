/**
 * @fileoverview gRPC-Web generated client stub for mruv.elevators
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as elevators_elevators_pb from '../elevators/elevators_pb';


export class MruVElevatorsServiceClient {
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

  methodInfoCreateElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    elevators_elevators_pb.CreateElevatorResponse,
    (request: elevators_elevators_pb.CreateElevatorRequest) => {
      return request.serializeBinary();
    },
    elevators_elevators_pb.CreateElevatorResponse.deserializeBinary
  );

  createElevator(
    request: elevators_elevators_pb.CreateElevatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<elevators_elevators_pb.CreateElevatorResponse>;

  createElevator(
    request: elevators_elevators_pb.CreateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: elevators_elevators_pb.CreateElevatorResponse) => void): grpcWeb.ClientReadableStream<elevators_elevators_pb.CreateElevatorResponse>;

  createElevator(
    request: elevators_elevators_pb.CreateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: elevators_elevators_pb.CreateElevatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.elevators.MruVElevatorsService/CreateElevator',
        request,
        metadata || {},
        this.methodInfoCreateElevator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.elevators.MruVElevatorsService/CreateElevator',
    request,
    metadata || {},
    this.methodInfoCreateElevator);
  }

  methodInfoGetElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    elevators_elevators_pb.GetElevatorResponse,
    (request: elevators_elevators_pb.GetElevatorRequest) => {
      return request.serializeBinary();
    },
    elevators_elevators_pb.GetElevatorResponse.deserializeBinary
  );

  getElevator(
    request: elevators_elevators_pb.GetElevatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<elevators_elevators_pb.GetElevatorResponse>;

  getElevator(
    request: elevators_elevators_pb.GetElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: elevators_elevators_pb.GetElevatorResponse) => void): grpcWeb.ClientReadableStream<elevators_elevators_pb.GetElevatorResponse>;

  getElevator(
    request: elevators_elevators_pb.GetElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: elevators_elevators_pb.GetElevatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.elevators.MruVElevatorsService/GetElevator',
        request,
        metadata || {},
        this.methodInfoGetElevator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.elevators.MruVElevatorsService/GetElevator',
    request,
    metadata || {},
    this.methodInfoGetElevator);
  }

  methodInfoUpdateElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    elevators_elevators_pb.UpdateElevatorResponse,
    (request: elevators_elevators_pb.UpdateElevatorRequest) => {
      return request.serializeBinary();
    },
    elevators_elevators_pb.UpdateElevatorResponse.deserializeBinary
  );

  updateElevator(
    request: elevators_elevators_pb.UpdateElevatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<elevators_elevators_pb.UpdateElevatorResponse>;

  updateElevator(
    request: elevators_elevators_pb.UpdateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: elevators_elevators_pb.UpdateElevatorResponse) => void): grpcWeb.ClientReadableStream<elevators_elevators_pb.UpdateElevatorResponse>;

  updateElevator(
    request: elevators_elevators_pb.UpdateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: elevators_elevators_pb.UpdateElevatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.elevators.MruVElevatorsService/UpdateElevator',
        request,
        metadata || {},
        this.methodInfoUpdateElevator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.elevators.MruVElevatorsService/UpdateElevator',
    request,
    metadata || {},
    this.methodInfoUpdateElevator);
  }

  methodInfoDeleteElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    elevators_elevators_pb.DeleteElevatorResponse,
    (request: elevators_elevators_pb.DeleteElevatorRequest) => {
      return request.serializeBinary();
    },
    elevators_elevators_pb.DeleteElevatorResponse.deserializeBinary
  );

  deleteElevator(
    request: elevators_elevators_pb.DeleteElevatorRequest,
    metadata: grpcWeb.Metadata | null): Promise<elevators_elevators_pb.DeleteElevatorResponse>;

  deleteElevator(
    request: elevators_elevators_pb.DeleteElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: elevators_elevators_pb.DeleteElevatorResponse) => void): grpcWeb.ClientReadableStream<elevators_elevators_pb.DeleteElevatorResponse>;

  deleteElevator(
    request: elevators_elevators_pb.DeleteElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: elevators_elevators_pb.DeleteElevatorResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.elevators.MruVElevatorsService/DeleteElevator',
        request,
        metadata || {},
        this.methodInfoDeleteElevator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.elevators.MruVElevatorsService/DeleteElevator',
    request,
    metadata || {},
    this.methodInfoDeleteElevator);
  }

  methodInfoGetElevatorFloors = new grpcWeb.AbstractClientBase.MethodInfo(
    elevators_elevators_pb.GetElevatorFloorsResponse,
    (request: elevators_elevators_pb.GetElevatorFloorsRequest) => {
      return request.serializeBinary();
    },
    elevators_elevators_pb.GetElevatorFloorsResponse.deserializeBinary
  );

  getElevatorFloors(
    request: elevators_elevators_pb.GetElevatorFloorsRequest,
    metadata: grpcWeb.Metadata | null): Promise<elevators_elevators_pb.GetElevatorFloorsResponse>;

  getElevatorFloors(
    request: elevators_elevators_pb.GetElevatorFloorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: elevators_elevators_pb.GetElevatorFloorsResponse) => void): grpcWeb.ClientReadableStream<elevators_elevators_pb.GetElevatorFloorsResponse>;

  getElevatorFloors(
    request: elevators_elevators_pb.GetElevatorFloorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: elevators_elevators_pb.GetElevatorFloorsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.elevators.MruVElevatorsService/GetElevatorFloors',
        request,
        metadata || {},
        this.methodInfoGetElevatorFloors,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.elevators.MruVElevatorsService/GetElevatorFloors',
    request,
    metadata || {},
    this.methodInfoGetElevatorFloors);
  }

}

