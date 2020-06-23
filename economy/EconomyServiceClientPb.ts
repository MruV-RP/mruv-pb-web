/**
 * @fileoverview gRPC-Web generated client stub for mruv.economy
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  BuyProductRequest,
  BuyProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetPriceRequest,
  GetPriceResponse,
  GetProductRequest,
  GetProductResponse,
  RegisterProductRequest,
  RegisterProductResponse,
  UpdatePriceRequest,
  UpdatePriceResponse,
  UpdateProductRequest,
  UpdateProductResponse,
  WatchPriceRequest,
  WatchPriceResponse,
  WatchProductRequest,
  WatchProductResponse} from './economy_pb';

export class MruVEconomyServiceClient {
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

  methodInfoRegisterProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    RegisterProductResponse,
    (request: RegisterProductRequest) => {
      return request.serializeBinary();
    },
    RegisterProductResponse.deserializeBinary
  );

  registerProduct(
    request: RegisterProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegisterProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/RegisterProduct',
      request,
      metadata || {},
      this.methodInfoRegisterProduct,
      callback);
  }

  methodInfoGetProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    GetProductResponse,
    (request: GetProductRequest) => {
      return request.serializeBinary();
    },
    GetProductResponse.deserializeBinary
  );

  getProduct(
    request: GetProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/GetProduct',
      request,
      metadata || {},
      this.methodInfoGetProduct,
      callback);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateProductResponse,
    (request: UpdateProductRequest) => {
      return request.serializeBinary();
    },
    UpdateProductResponse.deserializeBinary
  );

  updateProduct(
    request: UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/UpdateProduct',
      request,
      metadata || {},
      this.methodInfoUpdateProduct,
      callback);
  }

  methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteProductResponse,
    (request: DeleteProductRequest) => {
      return request.serializeBinary();
    },
    DeleteProductResponse.deserializeBinary
  );

  deleteProduct(
    request: DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/DeleteProduct',
      request,
      metadata || {},
      this.methodInfoDeleteProduct,
      callback);
  }

  methodInfoUpdatePrice = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdatePriceResponse,
    (request: UpdatePriceRequest) => {
      return request.serializeBinary();
    },
    UpdatePriceResponse.deserializeBinary
  );

  updatePrice(
    request: UpdatePriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdatePriceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/UpdatePrice',
      request,
      metadata || {},
      this.methodInfoUpdatePrice,
      callback);
  }

  methodInfoGetPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPriceResponse,
    (request: GetPriceRequest) => {
      return request.serializeBinary();
    },
    GetPriceResponse.deserializeBinary
  );

  getPrice(
    request: GetPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPriceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/GetPrice',
      request,
      metadata || {},
      this.methodInfoGetPrice,
      callback);
  }

  methodInfoBuyProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    BuyProductResponse,
    (request: BuyProductRequest) => {
      return request.serializeBinary();
    },
    BuyProductResponse.deserializeBinary
  );

  buyProduct(
    request: BuyProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuyProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/BuyProduct',
      request,
      metadata || {},
      this.methodInfoBuyProduct,
      callback);
  }

  methodInfoWatchProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchProductResponse,
    (request: WatchProductRequest) => {
      return request.serializeBinary();
    },
    WatchProductResponse.deserializeBinary
  );

  watchProduct(
    request: WatchProductRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/WatchProduct',
      request,
      metadata || {},
      this.methodInfoWatchProduct);
  }

  methodInfoWatchPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchPriceResponse,
    (request: WatchPriceRequest) => {
      return request.serializeBinary();
    },
    WatchPriceResponse.deserializeBinary
  );

  watchPrice(
    request: WatchPriceRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/WatchPrice',
      request,
      metadata || {},
      this.methodInfoWatchPrice);
  }

}

