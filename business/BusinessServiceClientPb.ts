/**
 * @fileoverview gRPC-Web generated client stub for mruv.business
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as business_business_pb from '../business/business_pb';


export class MruVBusinessServiceClient {
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

  methodInfoCreateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.CreateBusinessResponse,
    (request: business_business_pb.CreateBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.CreateBusinessResponse.deserializeBinary
  );

  createBusiness(
    request: business_business_pb.CreateBusinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.CreateBusinessResponse>;

  createBusiness(
    request: business_business_pb.CreateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.CreateBusinessResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.CreateBusinessResponse>;

  createBusiness(
    request: business_business_pb.CreateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.CreateBusinessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/CreateBusiness',
        request,
        metadata || {},
        this.methodInfoCreateBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/CreateBusiness',
    request,
    metadata || {},
    this.methodInfoCreateBusiness);
  }

  methodInfoGetBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.Business,
    (request: business_business_pb.GetBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.Business.deserializeBinary
  );

  getBusiness(
    request: business_business_pb.GetBusinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.Business>;

  getBusiness(
    request: business_business_pb.GetBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.Business) => void): grpcWeb.ClientReadableStream<business_business_pb.Business>;

  getBusiness(
    request: business_business_pb.GetBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.Business) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/GetBusiness',
        request,
        metadata || {},
        this.methodInfoGetBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/GetBusiness',
    request,
    metadata || {},
    this.methodInfoGetBusiness);
  }

  methodInfoUpdateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.Business,
    (request: business_business_pb.UpdateBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.Business.deserializeBinary
  );

  updateBusiness(
    request: business_business_pb.UpdateBusinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.Business>;

  updateBusiness(
    request: business_business_pb.UpdateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.Business) => void): grpcWeb.ClientReadableStream<business_business_pb.Business>;

  updateBusiness(
    request: business_business_pb.UpdateBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.Business) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/UpdateBusiness',
        request,
        metadata || {},
        this.methodInfoUpdateBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/UpdateBusiness',
    request,
    metadata || {},
    this.methodInfoUpdateBusiness);
  }

  methodInfoDeleteBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.DeleteBusinessResponse,
    (request: business_business_pb.DeleteBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.DeleteBusinessResponse.deserializeBinary
  );

  deleteBusiness(
    request: business_business_pb.DeleteBusinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.DeleteBusinessResponse>;

  deleteBusiness(
    request: business_business_pb.DeleteBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.DeleteBusinessResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.DeleteBusinessResponse>;

  deleteBusiness(
    request: business_business_pb.DeleteBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.DeleteBusinessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/DeleteBusiness',
        request,
        metadata || {},
        this.methodInfoDeleteBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/DeleteBusiness',
    request,
    metadata || {},
    this.methodInfoDeleteBusiness);
  }

  methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.AssignOwnerResponse,
    (request: business_business_pb.AssignOwnerRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.AssignOwnerResponse.deserializeBinary
  );

  assignOwner(
    request: business_business_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.AssignOwnerResponse>;

  assignOwner(
    request: business_business_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.AssignOwnerResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.AssignOwnerResponse>;

  assignOwner(
    request: business_business_pb.AssignOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.AssignOwnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/AssignOwner',
        request,
        metadata || {},
        this.methodInfoAssignOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/AssignOwner',
    request,
    metadata || {},
    this.methodInfoAssignOwner);
  }

  methodInfoAssignEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.AssignEstateResponse,
    (request: business_business_pb.AssignEstateRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.AssignEstateResponse.deserializeBinary
  );

  assignEstate(
    request: business_business_pb.AssignEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.AssignEstateResponse>;

  assignEstate(
    request: business_business_pb.AssignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.AssignEstateResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.AssignEstateResponse>;

  assignEstate(
    request: business_business_pb.AssignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.AssignEstateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/AssignEstate',
        request,
        metadata || {},
        this.methodInfoAssignEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/AssignEstate',
    request,
    metadata || {},
    this.methodInfoAssignEstate);
  }

  methodInfoUnassignEstate = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.UnassignEstateResponse,
    (request: business_business_pb.UnassignEstateRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.UnassignEstateResponse.deserializeBinary
  );

  unassignEstate(
    request: business_business_pb.UnassignEstateRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.UnassignEstateResponse>;

  unassignEstate(
    request: business_business_pb.UnassignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.UnassignEstateResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.UnassignEstateResponse>;

  unassignEstate(
    request: business_business_pb.UnassignEstateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.UnassignEstateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/UnassignEstate',
        request,
        metadata || {},
        this.methodInfoUnassignEstate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/UnassignEstate',
    request,
    metadata || {},
    this.methodInfoUnassignEstate);
  }

  methodInfoBuyBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.BuyBusinessResponse,
    (request: business_business_pb.BuyBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.BuyBusinessResponse.deserializeBinary
  );

  buyBusiness(
    request: business_business_pb.BuyBusinessRequest,
    metadata: grpcWeb.Metadata | null): Promise<business_business_pb.BuyBusinessResponse>;

  buyBusiness(
    request: business_business_pb.BuyBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: business_business_pb.BuyBusinessResponse) => void): grpcWeb.ClientReadableStream<business_business_pb.BuyBusinessResponse>;

  buyBusiness(
    request: business_business_pb.BuyBusinessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: business_business_pb.BuyBusinessResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.business.MruVBusinessService/BuyBusiness',
        request,
        metadata || {},
        this.methodInfoBuyBusiness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.business.MruVBusinessService/BuyBusiness',
    request,
    metadata || {},
    this.methodInfoBuyBusiness);
  }

  methodInfoWatchBusiness = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.WatchBusinessResponse,
    (request: business_business_pb.WatchBusinessRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.WatchBusinessResponse.deserializeBinary
  );

  watchBusiness(
    request: business_business_pb.WatchBusinessRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/WatchBusiness',
      request,
      metadata || {},
      this.methodInfoWatchBusiness);
  }

  methodInfoWatchBusinesses = new grpcWeb.AbstractClientBase.MethodInfo(
    business_business_pb.WatchBusinessesResponse,
    (request: business_business_pb.WatchBusinessesRequest) => {
      return request.serializeBinary();
    },
    business_business_pb.WatchBusinessesResponse.deserializeBinary
  );

  watchBusinesses(
    request: business_business_pb.WatchBusinessesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.business.MruVBusinessService/WatchBusinesses',
      request,
      metadata || {},
      this.methodInfoWatchBusinesses);
  }

}

