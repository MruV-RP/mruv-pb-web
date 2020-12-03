/**
 * @fileoverview gRPC-Web generated client stub for mruv.offers
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as offers_offers_pb from '../offers/offers_pb';


export class MruVOffersServiceClient {
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

  methodInfoCreateOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    offers_offers_pb.CreateOfferResponse,
    (request: offers_offers_pb.CreateOfferRequest) => {
      return request.serializeBinary();
    },
    offers_offers_pb.CreateOfferResponse.deserializeBinary
  );

  createOffer(
    request: offers_offers_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<offers_offers_pb.CreateOfferResponse>;

  createOffer(
    request: offers_offers_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: offers_offers_pb.CreateOfferResponse) => void): grpcWeb.ClientReadableStream<offers_offers_pb.CreateOfferResponse>;

  createOffer(
    request: offers_offers_pb.CreateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: offers_offers_pb.CreateOfferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.offers.MruVOffersService/CreateOffer',
        request,
        metadata || {},
        this.methodInfoCreateOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.offers.MruVOffersService/CreateOffer',
    request,
    metadata || {},
    this.methodInfoCreateOffer);
  }

  methodInfoGetOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    offers_offers_pb.GetOfferResponse,
    (request: offers_offers_pb.GetOfferRequest) => {
      return request.serializeBinary();
    },
    offers_offers_pb.GetOfferResponse.deserializeBinary
  );

  getOffer(
    request: offers_offers_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<offers_offers_pb.GetOfferResponse>;

  getOffer(
    request: offers_offers_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: offers_offers_pb.GetOfferResponse) => void): grpcWeb.ClientReadableStream<offers_offers_pb.GetOfferResponse>;

  getOffer(
    request: offers_offers_pb.GetOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: offers_offers_pb.GetOfferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.offers.MruVOffersService/GetOffer',
        request,
        metadata || {},
        this.methodInfoGetOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.offers.MruVOffersService/GetOffer',
    request,
    metadata || {},
    this.methodInfoGetOffer);
  }

  methodInfoUpdateOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    offers_offers_pb.UpdateOfferResponse,
    (request: offers_offers_pb.UpdateOfferRequest) => {
      return request.serializeBinary();
    },
    offers_offers_pb.UpdateOfferResponse.deserializeBinary
  );

  updateOffer(
    request: offers_offers_pb.UpdateOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<offers_offers_pb.UpdateOfferResponse>;

  updateOffer(
    request: offers_offers_pb.UpdateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: offers_offers_pb.UpdateOfferResponse) => void): grpcWeb.ClientReadableStream<offers_offers_pb.UpdateOfferResponse>;

  updateOffer(
    request: offers_offers_pb.UpdateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: offers_offers_pb.UpdateOfferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.offers.MruVOffersService/UpdateOffer',
        request,
        metadata || {},
        this.methodInfoUpdateOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.offers.MruVOffersService/UpdateOffer',
    request,
    metadata || {},
    this.methodInfoUpdateOffer);
  }

  methodInfoDeleteOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    offers_offers_pb.DeleteOfferResponse,
    (request: offers_offers_pb.DeleteOfferRequest) => {
      return request.serializeBinary();
    },
    offers_offers_pb.DeleteOfferResponse.deserializeBinary
  );

  deleteOffer(
    request: offers_offers_pb.DeleteOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<offers_offers_pb.DeleteOfferResponse>;

  deleteOffer(
    request: offers_offers_pb.DeleteOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: offers_offers_pb.DeleteOfferResponse) => void): grpcWeb.ClientReadableStream<offers_offers_pb.DeleteOfferResponse>;

  deleteOffer(
    request: offers_offers_pb.DeleteOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: offers_offers_pb.DeleteOfferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.offers.MruVOffersService/DeleteOffer',
        request,
        metadata || {},
        this.methodInfoDeleteOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.offers.MruVOffersService/DeleteOffer',
    request,
    metadata || {},
    this.methodInfoDeleteOffer);
  }

  methodInfoAcceptOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    offers_offers_pb.AcceptOfferResponse,
    (request: offers_offers_pb.AcceptOfferRequest) => {
      return request.serializeBinary();
    },
    offers_offers_pb.AcceptOfferResponse.deserializeBinary
  );

  acceptOffer(
    request: offers_offers_pb.AcceptOfferRequest,
    metadata: grpcWeb.Metadata | null): Promise<offers_offers_pb.AcceptOfferResponse>;

  acceptOffer(
    request: offers_offers_pb.AcceptOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: offers_offers_pb.AcceptOfferResponse) => void): grpcWeb.ClientReadableStream<offers_offers_pb.AcceptOfferResponse>;

  acceptOffer(
    request: offers_offers_pb.AcceptOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: offers_offers_pb.AcceptOfferResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.offers.MruVOffersService/AcceptOffer',
        request,
        metadata || {},
        this.methodInfoAcceptOffer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.offers.MruVOffersService/AcceptOffer',
    request,
    metadata || {},
    this.methodInfoAcceptOffer);
  }

}

