/**
 * @fileoverview gRPC-Web generated client stub for mruv.estates
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as estates_estates_pb from '../estates/estates_pb';


export class MruVEstateServiceClient {
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

  methodInfoCreateEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.CreateEstateResponse,
    (request: estates_estates_pb.CreateEstateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.CreateEstateResponse.deserializeBinary
  );

  createEstate(
    request: estates_estates_pb.CreateEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.CreateEstateResponse>;

  createEstate(
    request: estates_estates_pb.CreateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.CreateEstateResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.CreateEstateResponse>;

  createEstate(
    request: estates_estates_pb.CreateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.CreateEstateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/CreateEstate',
        request,
        metadata || {},
        this.methodInfoCreateEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/CreateEstate',
    request,
    metadata || {},
    this.methodInfoCreateEstate);
  }

  methodInfoGetEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.Estate,
    (request: estates_estates_pb.GetEstateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.Estate.deserializeBinary
  );

  getEstate(
    request: estates_estates_pb.GetEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.Estate>;

  getEstate(
    request: estates_estates_pb.GetEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.Estate) => void): grpcWeb.ClientReadableStream<estates_estates_pb.Estate>;

  getEstate(
    request: estates_estates_pb.GetEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.Estate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/GetEstate',
        request,
        metadata || {},
        this.methodInfoGetEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/GetEstate',
    request,
    metadata || {},
    this.methodInfoGetEstate);
  }

  methodInfoUpdateEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.UpdateEstateResponse,
    (request: estates_estates_pb.UpdateEstateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.UpdateEstateResponse.deserializeBinary
  );

  updateEstate(
    request: estates_estates_pb.UpdateEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.UpdateEstateResponse>;

  updateEstate(
    request: estates_estates_pb.UpdateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.UpdateEstateResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.UpdateEstateResponse>;

  updateEstate(
    request: estates_estates_pb.UpdateEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.UpdateEstateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/UpdateEstate',
        request,
        metadata || {},
        this.methodInfoUpdateEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/UpdateEstate',
    request,
    metadata || {},
    this.methodInfoUpdateEstate);
  }

  methodInfoDeleteEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.DeleteEstateResponse,
    (request: estates_estates_pb.DeleteEstateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.DeleteEstateResponse.deserializeBinary
  );

  deleteEstate(
    request: estates_estates_pb.DeleteEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.DeleteEstateResponse>;

  deleteEstate(
    request: estates_estates_pb.DeleteEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.DeleteEstateResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.DeleteEstateResponse>;

  deleteEstate(
    request: estates_estates_pb.DeleteEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.DeleteEstateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/DeleteEstate',
        request,
        metadata || {},
        this.methodInfoDeleteEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/DeleteEstate',
    request,
    metadata || {},
    this.methodInfoDeleteEstate);
  }

  methodInfoGetEstates = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.GetEstatesResponse,
    (request: estates_estates_pb.GetEstatesRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.GetEstatesResponse.deserializeBinary
  );

  getEstates(
    request: estates_estates_pb.GetEstatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.GetEstatesResponse>;

  getEstates(
    request: estates_estates_pb.GetEstatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstatesResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.GetEstatesResponse>;

  getEstates(
    request: estates_estates_pb.GetEstatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstatesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/GetEstates',
        request,
        metadata || {},
        this.methodInfoGetEstates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/GetEstates',
    request,
    metadata || {},
    this.methodInfoGetEstates);
  }

  methodInfoAddGate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.AddGateResponse,
    (request: estates_estates_pb.AddGateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.AddGateResponse.deserializeBinary
  );

  addGate(
    request: estates_estates_pb.AddGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.AddGateResponse>;

  addGate(
    request: estates_estates_pb.AddGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.AddGateResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.AddGateResponse>;

  addGate(
    request: estates_estates_pb.AddGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.AddGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/AddGate',
        request,
        metadata || {},
        this.methodInfoAddGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/AddGate',
    request,
    metadata || {},
    this.methodInfoAddGate);
  }

  methodInfoRemoveGate = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.RemoveGateResponse,
    (request: estates_estates_pb.RemoveGateRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.RemoveGateResponse.deserializeBinary
  );

  removeGate(
    request: estates_estates_pb.RemoveGateRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.RemoveGateResponse>;

  removeGate(
    request: estates_estates_pb.RemoveGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.RemoveGateResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.RemoveGateResponse>;

  removeGate(
    request: estates_estates_pb.RemoveGateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.RemoveGateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/RemoveGate',
        request,
        metadata || {},
        this.methodInfoRemoveGate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/RemoveGate',
    request,
    metadata || {},
    this.methodInfoRemoveGate);
  }

  methodInfoGetEstateGates = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.GetEstateGatesResponse,
    (request: estates_estates_pb.GetEstateGatesRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.GetEstateGatesResponse.deserializeBinary
  );

  getEstateGates(
    request: estates_estates_pb.GetEstateGatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.GetEstateGatesResponse>;

  getEstateGates(
    request: estates_estates_pb.GetEstateGatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstateGatesResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.GetEstateGatesResponse>;

  getEstateGates(
    request: estates_estates_pb.GetEstateGatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstateGatesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/GetEstateGates',
        request,
        metadata || {},
        this.methodInfoGetEstateGates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/GetEstateGates',
    request,
    metadata || {},
    this.methodInfoGetEstateGates);
  }

  methodInfoAddEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.AddEntranceResponse,
    (request: estates_estates_pb.AddEntranceRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.AddEntranceResponse.deserializeBinary
  );

  addEntrance(
    request: estates_estates_pb.AddEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.AddEntranceResponse>;

  addEntrance(
    request: estates_estates_pb.AddEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.AddEntranceResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.AddEntranceResponse>;

  addEntrance(
    request: estates_estates_pb.AddEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.AddEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/AddEntrance',
        request,
        metadata || {},
        this.methodInfoAddEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/AddEntrance',
    request,
    metadata || {},
    this.methodInfoAddEntrance);
  }

  methodInfoRemoveEntrance = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.RemoveEntranceResponse,
    (request: estates_estates_pb.RemoveEntranceRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.RemoveEntranceResponse.deserializeBinary
  );

  removeEntrance(
    request: estates_estates_pb.RemoveEntranceRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.RemoveEntranceResponse>;

  removeEntrance(
    request: estates_estates_pb.RemoveEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.RemoveEntranceResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.RemoveEntranceResponse>;

  removeEntrance(
    request: estates_estates_pb.RemoveEntranceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.RemoveEntranceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/RemoveEntrance',
        request,
        metadata || {},
        this.methodInfoRemoveEntrance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/RemoveEntrance',
    request,
    metadata || {},
    this.methodInfoRemoveEntrance);
  }

  methodInfoGetEstateEntrances = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.GetEstateEntrancesResponse,
    (request: estates_estates_pb.GetEstateEntrancesRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.GetEstateEntrancesResponse.deserializeBinary
  );

  getEstateEntrances(
    request: estates_estates_pb.GetEstateEntrancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<estates_estates_pb.GetEstateEntrancesResponse>;

  getEstateEntrances(
    request: estates_estates_pb.GetEstateEntrancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstateEntrancesResponse) => void): grpcWeb.ClientReadableStream<estates_estates_pb.GetEstateEntrancesResponse>;

  getEstateEntrances(
    request: estates_estates_pb.GetEstateEntrancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: estates_estates_pb.GetEstateEntrancesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.estates.MruVEstateService/GetEstateEntrances',
        request,
        metadata || {},
        this.methodInfoGetEstateEntrances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.estates.MruVEstateService/GetEstateEntrances',
    request,
    metadata || {},
    this.methodInfoGetEstateEntrances);
  }

  methodInfoFetchAll = new grpcWeb.AbstractClientBase.MethodInfo(
    estates_estates_pb.FetchAllEstatesResponse,
    (request: estates_estates_pb.FetchAllEstatesRequest) => {
      return request.serializeBinary();
    },
    estates_estates_pb.FetchAllEstatesResponse.deserializeBinary
  );

  fetchAll(
    request: estates_estates_pb.FetchAllEstatesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.estates.MruVEstateService/FetchAll',
      request,
      metadata || {},
      this.methodInfoFetchAll);
  }

}

