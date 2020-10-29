/**
 * @fileoverview gRPC-Web generated client stub for mruv.estates
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as objects_objects_pb from '../objects/objects_pb';
import * as entrances_entrances_pb from '../entrances/entrances_pb';
import * as gates_gates_pb from '../gates/gates_pb';

import {
  AddEntranceRequest,
  AddEntranceResponse,
  AddGateRequest,
  AddGateResponse,
  CreateEstateRequest,
  CreateEstateResponse,
  DeleteEstateRequest,
  DeleteEstateResponse,
  Estate,
  FetchAllEstatesRequest,
  FetchAllEstatesResponse,
  GetEstateEntrancesRequest,
  GetEstateEntrancesResponse,
  GetEstateGatesRequest,
  GetEstateGatesResponse,
  GetEstateRequest,
  GetEstatesRequest,
  GetEstatesResponse,
  RemoveEntranceRequest,
  RemoveEntranceResponse,
  RemoveGateRequest,
  RemoveGateResponse,
  UpdateEstateRequest,
  UpdateEstateResponse} from './estates_pb';

export class MruVEstateServiceClient {
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

  methodInfoCreateEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateEstateResponse,
    (request: CreateEstateRequest) => {
      return request.serializeBinary();
    },
    CreateEstateResponse.deserializeBinary
  );

  createEstate(
    request: CreateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateEstateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/CreateEstate',
      request,
      metadata || {},
      this.methodInfoCreateEstate,
      callback);
  }

  methodInfoGetEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    Estate,
    (request: GetEstateRequest) => {
      return request.serializeBinary();
    },
    Estate.deserializeBinary
  );

  getEstate(
    request: GetEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Estate) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/GetEstate',
      request,
      metadata || {},
      this.methodInfoGetEstate,
      callback);
  }

  methodInfoUpdateEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateEstateResponse,
    (request: UpdateEstateRequest) => {
      return request.serializeBinary();
    },
    UpdateEstateResponse.deserializeBinary
  );

  updateEstate(
    request: UpdateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateEstateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/UpdateEstate',
      request,
      metadata || {},
      this.methodInfoUpdateEstate,
      callback);
  }

  methodInfoDeleteEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteEstateResponse,
    (request: DeleteEstateRequest) => {
      return request.serializeBinary();
    },
    DeleteEstateResponse.deserializeBinary
  );

  deleteEstate(
    request: DeleteEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteEstateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/DeleteEstate',
      request,
      metadata || {},
      this.methodInfoDeleteEstate,
      callback);
  }

  methodInfoGetEstates = new grpcWeb.AbstractClientBase.MethodInfo(
    GetEstatesResponse,
    (request: GetEstatesRequest) => {
      return request.serializeBinary();
    },
    GetEstatesResponse.deserializeBinary
  );

  getEstates(
    request: GetEstatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetEstatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/GetEstates',
      request,
      metadata || {},
      this.methodInfoGetEstates,
      callback);
  }

  methodInfoAddGate = new grpcWeb.AbstractClientBase.MethodInfo(
    AddGateResponse,
    (request: AddGateRequest) => {
      return request.serializeBinary();
    },
    AddGateResponse.deserializeBinary
  );

  addGate(
    request: AddGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/AddGate',
      request,
      metadata || {},
      this.methodInfoAddGate,
      callback);
  }

  methodInfoRemoveGate = new grpcWeb.AbstractClientBase.MethodInfo(
    RemoveGateResponse,
    (request: RemoveGateRequest) => {
      return request.serializeBinary();
    },
    RemoveGateResponse.deserializeBinary
  );

  removeGate(
    request: RemoveGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemoveGateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/RemoveGate',
      request,
      metadata || {},
      this.methodInfoRemoveGate,
      callback);
  }

  methodInfoGetEstateGates = new grpcWeb.AbstractClientBase.MethodInfo(
    GetEstateGatesResponse,
    (request: GetEstateGatesRequest) => {
      return request.serializeBinary();
    },
    GetEstateGatesResponse.deserializeBinary
  );

  getEstateGates(
    request: GetEstateGatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetEstateGatesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/GetEstateGates',
      request,
      metadata || {},
      this.methodInfoGetEstateGates,
      callback);
  }

  methodInfoAddEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    AddEntranceResponse,
    (request: AddEntranceRequest) => {
      return request.serializeBinary();
    },
    AddEntranceResponse.deserializeBinary
  );

  addEntrance(
    request: AddEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/AddEntrance',
      request,
      metadata || {},
      this.methodInfoAddEntrance,
      callback);
  }

  methodInfoRemoveEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    RemoveEntranceResponse,
    (request: RemoveEntranceRequest) => {
      return request.serializeBinary();
    },
    RemoveEntranceResponse.deserializeBinary
  );

  removeEntrance(
    request: RemoveEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RemoveEntranceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/RemoveEntrance',
      request,
      metadata || {},
      this.methodInfoRemoveEntrance,
      callback);
  }

  methodInfoGetEstateEntrances = new grpcWeb.AbstractClientBase.MethodInfo(
    GetEstateEntrancesResponse,
    (request: GetEstateEntrancesRequest) => {
      return request.serializeBinary();
    },
    GetEstateEntrancesResponse.deserializeBinary
  );

  getEstateEntrances(
    request: GetEstateEntrancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetEstateEntrancesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/GetEstateEntrances',
      request,
      metadata || {},
      this.methodInfoGetEstateEntrances,
      callback);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    FetchAllEstatesResponse,
    (request: FetchAllEstatesRequest) => {
      return request.serializeBinary();
    },
    FetchAllEstatesResponse.deserializeBinary
  );

  fetchAll(
    request: FetchAllEstatesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}
