/**
 * @fileoverview gRPC-Web generated client stub for mruv.business
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  AssignEstateRequest,
  AssignEstateResponse,
  AssignOwnerRequest,
  AssignOwnerResponse,
  Business,
  BuyBusinessRequest,
  BuyBusinessResponse,
  CreateBusinessRequest,
  CreateBusinessResponse,
  DeleteBusinessRequest,
  DeleteBusinessResponse,
  GetBusinessRequest,
  UnassignEstateRequest,
  UnassignEstateResponse,
  UpdateBusinessRequest,
  WatchBusinessRequest,
  WatchBusinessResponse,
  WatchBusinessesRequest,
  WatchBusinessesResponse} from './business_pb';

export class MruVBusinessServiceClient {
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

  methodInfoCreateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateBusinessResponse,
    (request: CreateBusinessRequest) => {
      return request.serializeBinary();
    },
    CreateBusinessResponse.deserializeBinary
  );

  createBusiness(
    request: CreateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateBusinessResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/CreateBusiness',
      request,
      metadata || {},
      this.methodInfoCreateBusiness,
      callback);
  }

  methodInfoGetBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    Business,
    (request: GetBusinessRequest) => {
      return request.serializeBinary();
    },
    Business.deserializeBinary
  );

  getBusiness(
    request: GetBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Business) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/GetBusiness',
      request,
      metadata || {},
      this.methodInfoGetBusiness,
      callback);
  }

  methodInfoUpdateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    Business,
    (request: UpdateBusinessRequest) => {
      return request.serializeBinary();
    },
    Business.deserializeBinary
  );

  updateBusiness(
    request: UpdateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Business) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/UpdateBusiness',
      request,
      metadata || {},
      this.methodInfoUpdateBusiness,
      callback);
  }

  methodInfoDeleteBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteBusinessResponse,
    (request: DeleteBusinessRequest) => {
      return request.serializeBinary();
    },
    DeleteBusinessResponse.deserializeBinary
  );

  deleteBusiness(
    request: DeleteBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteBusinessResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/DeleteBusiness',
      request,
      metadata || {},
      this.methodInfoDeleteBusiness,
      callback);
  }

  methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    AssignOwnerResponse,
    (request: AssignOwnerRequest) => {
      return request.serializeBinary();
    },
    AssignOwnerResponse.deserializeBinary
  );

  assignOwner(
    request: AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AssignOwnerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/AssignOwner',
      request,
      metadata || {},
      this.methodInfoAssignOwner,
      callback);
  }

  methodInfoAssignEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    AssignEstateResponse,
    (request: AssignEstateRequest) => {
      return request.serializeBinary();
    },
    AssignEstateResponse.deserializeBinary
  );

  assignEstate(
    request: AssignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AssignEstateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/AssignEstate',
      request,
      metadata || {},
      this.methodInfoAssignEstate,
      callback);
  }

  methodInfoUnassignEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    UnassignEstateResponse,
    (request: UnassignEstateRequest) => {
      return request.serializeBinary();
    },
    UnassignEstateResponse.deserializeBinary
  );

  unassignEstate(
    request: UnassignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnassignEstateResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/UnassignEstate',
      request,
      metadata || {},
      this.methodInfoUnassignEstate,
      callback);
  }

  methodInfoBuyBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    BuyBusinessResponse,
    (request: BuyBusinessRequest) => {
      return request.serializeBinary();
    },
    BuyBusinessResponse.deserializeBinary
  );

  buyBusiness(
    request: BuyBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuyBusinessResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/BuyBusiness',
      request,
      metadata || {},
      this.methodInfoBuyBusiness,
      callback);
  }

  methodInfoWatchBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchBusinessResponse,
    (request: WatchBusinessRequest) => {
      return request.serializeBinary();
    },
    WatchBusinessResponse.deserializeBinary
  );

  watchBusiness(
    request: WatchBusinessRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/WatchBusiness',
      request,
      metadata || {},
      this.methodInfoWatchBusiness);
  }

  methodInfoWatchBusinesses = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchBusinessesResponse,
    (request: WatchBusinessesRequest) => {
      return request.serializeBinary();
    },
    WatchBusinessesResponse.deserializeBinary
  );

  watchBusinesses(
    request: WatchBusinessesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/WatchBusinesses',
      request,
      metadata || {},
      this.methodInfoWatchBusinesses);
  }

}

