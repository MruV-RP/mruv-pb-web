/**
 * @fileoverview gRPC-Web generated client stub for mruv.economy
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as economy_economy_pb from '../economy/economy_pb';


export class MruVEconomyServiceClient {
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

  methodInfoRegisterProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.RegisterProductResponse,
    (request: economy_economy_pb.RegisterProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.RegisterProductResponse.deserializeBinary
  );

  registerProduct(
    request: economy_economy_pb.RegisterProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.RegisterProductResponse>;

  registerProduct(
    request: economy_economy_pb.RegisterProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.RegisterProductResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.RegisterProductResponse>;

  registerProduct(
    request: economy_economy_pb.RegisterProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.RegisterProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/RegisterProduct',
        request,
        metadata || {},
        this.methodInfoRegisterProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/RegisterProduct',
    request,
    metadata || {},
    this.methodInfoRegisterProduct);
  }

  methodInfoGetProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.GetProductResponse,
    (request: economy_economy_pb.GetProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.GetProductResponse.deserializeBinary
  );

  getProduct(
    request: economy_economy_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.GetProductResponse>;

  getProduct(
    request: economy_economy_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.GetProductResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.GetProductResponse>;

  getProduct(
    request: economy_economy_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.GetProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/GetProduct',
        request,
        metadata || {},
        this.methodInfoGetProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/GetProduct',
    request,
    metadata || {},
    this.methodInfoGetProduct);
  }

  methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.UpdateProductResponse,
    (request: economy_economy_pb.UpdateProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.UpdateProductResponse.deserializeBinary
  );

  updateProduct(
    request: economy_economy_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.UpdateProductResponse>;

  updateProduct(
    request: economy_economy_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.UpdateProductResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.UpdateProductResponse>;

  updateProduct(
    request: economy_economy_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.UpdateProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/UpdateProduct',
        request,
        metadata || {},
        this.methodInfoUpdateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/UpdateProduct',
    request,
    metadata || {},
    this.methodInfoUpdateProduct);
  }

  methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.DeleteProductResponse,
    (request: economy_economy_pb.DeleteProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.DeleteProductResponse.deserializeBinary
  );

  deleteProduct(
    request: economy_economy_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.DeleteProductResponse>;

  deleteProduct(
    request: economy_economy_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.DeleteProductResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.DeleteProductResponse>;

  deleteProduct(
    request: economy_economy_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.DeleteProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/DeleteProduct',
        request,
        metadata || {},
        this.methodInfoDeleteProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/DeleteProduct',
    request,
    metadata || {},
    this.methodInfoDeleteProduct);
  }

  methodInfoUpdatePrice = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.UpdatePriceResponse,
    (request: economy_economy_pb.UpdatePriceRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.UpdatePriceResponse.deserializeBinary
  );

  updatePrice(
    request: economy_economy_pb.UpdatePriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.UpdatePriceResponse>;

  updatePrice(
    request: economy_economy_pb.UpdatePriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.UpdatePriceResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.UpdatePriceResponse>;

  updatePrice(
    request: economy_economy_pb.UpdatePriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.UpdatePriceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/UpdatePrice',
        request,
        metadata || {},
        this.methodInfoUpdatePrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/UpdatePrice',
    request,
    metadata || {},
    this.methodInfoUpdatePrice);
  }

  methodInfoGetPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.GetPriceResponse,
    (request: economy_economy_pb.GetPriceRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.GetPriceResponse.deserializeBinary
  );

  getPrice(
    request: economy_economy_pb.GetPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.GetPriceResponse>;

  getPrice(
    request: economy_economy_pb.GetPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.GetPriceResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.GetPriceResponse>;

  getPrice(
    request: economy_economy_pb.GetPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.GetPriceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/GetPrice',
        request,
        metadata || {},
        this.methodInfoGetPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/GetPrice',
    request,
    metadata || {},
    this.methodInfoGetPrice);
  }

  methodInfoBuyProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.BuyProductResponse,
    (request: economy_economy_pb.BuyProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.BuyProductResponse.deserializeBinary
  );

  buyProduct(
    request: economy_economy_pb.BuyProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<economy_economy_pb.BuyProductResponse>;

  buyProduct(
    request: economy_economy_pb.BuyProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: economy_economy_pb.BuyProductResponse) => void): grpcWeb.ClientReadableStream<economy_economy_pb.BuyProductResponse>;

  buyProduct(
    request: economy_economy_pb.BuyProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: economy_economy_pb.BuyProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.economy.MruVEconomyService/BuyProduct',
        request,
        metadata || {},
        this.methodInfoBuyProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.economy.MruVEconomyService/BuyProduct',
    request,
    metadata || {},
    this.methodInfoBuyProduct);
  }

  methodInfoWatchProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.WatchProductResponse,
    (request: economy_economy_pb.WatchProductRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.WatchProductResponse.deserializeBinary
  );

  watchProduct(
    request: economy_economy_pb.WatchProductRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/WatchProduct',
      request,
      metadata || {},
      this.methodInfoWatchProduct);
  }

  methodInfoWatchPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    economy_economy_pb.WatchPriceResponse,
    (request: economy_economy_pb.WatchPriceRequest) => {
      return request.serializeBinary();
    },
    economy_economy_pb.WatchPriceResponse.deserializeBinary
  );

  watchPrice(
    request: economy_economy_pb.WatchPriceRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.economy.MruVEconomyService/WatchPrice',
      request,
      metadata || {},
      this.methodInfoWatchPrice);
  }

}

