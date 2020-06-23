/**
 * @fileoverview gRPC-Web generated client stub for mruv.elevators
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  CreateElevatorRequest,
  CreateElevatorResponse,
  DeleteElevatorRequest,
  DeleteElevatorResponse,
  GetElevatorFloorsRequest,
  GetElevatorFloorsResponse,
  GetElevatorRequest,
  GetElevatorResponse,
  UpdateElevatorRequest,
  UpdateElevatorResponse} from './elevators_pb';

export class MruVElevatorsServiceClient {
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

  methodInfoCreateElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateElevatorResponse,
    (request: CreateElevatorRequest) => {
      return request.serializeBinary();
    },
    CreateElevatorResponse.deserializeBinary
  );

  createElevator(
    request: CreateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateElevatorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.elevators.MruVElevatorsService/CreateElevator',
      request,
      metadata || {},
      this.methodInfoCreateElevator,
      callback);
  }

  methodInfoGetElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    GetElevatorResponse,
    (request: GetElevatorRequest) => {
      return request.serializeBinary();
    },
    GetElevatorResponse.deserializeBinary
  );

  getElevator(
    request: GetElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetElevatorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.elevators.MruVElevatorsService/GetElevator',
      request,
      metadata || {},
      this.methodInfoGetElevator,
      callback);
  }

  methodInfoUpdateElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateElevatorResponse,
    (request: UpdateElevatorRequest) => {
      return request.serializeBinary();
    },
    UpdateElevatorResponse.deserializeBinary
  );

  updateElevator(
    request: UpdateElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateElevatorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.elevators.MruVElevatorsService/UpdateElevator',
      request,
      metadata || {},
      this.methodInfoUpdateElevator,
      callback);
  }

  methodInfoDeleteElevator = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteElevatorResponse,
    (request: DeleteElevatorRequest) => {
      return request.serializeBinary();
    },
    DeleteElevatorResponse.deserializeBinary
  );

  deleteElevator(
    request: DeleteElevatorRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteElevatorResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.elevators.MruVElevatorsService/DeleteElevator',
      request,
      metadata || {},
      this.methodInfoDeleteElevator,
      callback);
  }

  methodInfoGetElevatorFloors = new grpcWeb.AbstractClientBase.MethodInfo(
    GetElevatorFloorsResponse,
    (request: GetElevatorFloorsRequest) => {
      return request.serializeBinary();
    },
    GetElevatorFloorsResponse.deserializeBinary
  );

  getElevatorFloors(
    request: GetElevatorFloorsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetElevatorFloorsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.elevators.MruVElevatorsService/GetElevatorFloors',
      request,
      metadata || {},
      this.methodInfoGetElevatorFloors,
      callback);
  }

}

