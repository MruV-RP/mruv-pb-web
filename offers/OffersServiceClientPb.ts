/**
 * @fileoverview gRPC-Web generated client stub for mruv.offers
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  AcceptOfferRequest,
  AcceptOfferResponse,
  CreateOfferRequest,
  CreateOfferResponse,
  DeleteOfferRequest,
  DeleteOfferResponse,
  GetOfferRequest,
  GetOfferResponse,
  UpdateOfferRequest,
  UpdateOfferResponse} from './offers_pb';

export class MruVOffersServiceClient {
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

  methodInfoCreateOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateOfferResponse,
    (request: CreateOfferRequest) => {
      return request.serializeBinary();
    },
    CreateOfferResponse.deserializeBinary
  );

  createOffer(
    request: CreateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateOfferResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.offers.MruVOffersService/CreateOffer',
      request,
      metadata || {},
      this.methodInfoCreateOffer,
      callback);
  }

  methodInfoGetOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    GetOfferResponse,
    (request: GetOfferRequest) => {
      return request.serializeBinary();
    },
    GetOfferResponse.deserializeBinary
  );

  getOffer(
    request: GetOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetOfferResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.offers.MruVOffersService/GetOffer',
      request,
      metadata || {},
      this.methodInfoGetOffer,
      callback);
  }

  methodInfoUpdateOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateOfferResponse,
    (request: UpdateOfferRequest) => {
      return request.serializeBinary();
    },
    UpdateOfferResponse.deserializeBinary
  );

  updateOffer(
    request: UpdateOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateOfferResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.offers.MruVOffersService/UpdateOffer',
      request,
      metadata || {},
      this.methodInfoUpdateOffer,
      callback);
  }

  methodInfoDeleteOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteOfferResponse,
    (request: DeleteOfferRequest) => {
      return request.serializeBinary();
    },
    DeleteOfferResponse.deserializeBinary
  );

  deleteOffer(
    request: DeleteOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteOfferResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.offers.MruVOffersService/DeleteOffer',
      request,
      metadata || {},
      this.methodInfoDeleteOffer,
      callback);
  }

  methodInfoAcceptOffer = new grpcWeb.AbstractClientBase.MethodInfo(
    AcceptOfferResponse,
    (request: AcceptOfferRequest) => {
      return request.serializeBinary();
    },
    AcceptOfferResponse.deserializeBinary
  );

  acceptOffer(
    request: AcceptOfferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AcceptOfferResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.offers.MruVOffersService/AcceptOffer',
      request,
      metadata || {},
      this.methodInfoAcceptOffer,
      callback);
  }

}

