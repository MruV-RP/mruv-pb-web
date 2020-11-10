"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.economy
 * @enhanceable
 * @public
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var economy_economy_pb = __importStar(require("../economy/economy_pb"));
var MruVEconomyServiceClient = /** @class */ (function () {
    function MruVEconomyServiceClient(hostname, credentials, options) {
        this.methodInfoRegisterProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.RegisterProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.RegisterProductResponse.deserializeBinary);
        this.methodInfoGetProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.GetProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.GetProductResponse.deserializeBinary);
        this.methodInfoUpdateProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.UpdateProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.UpdateProductResponse.deserializeBinary);
        this.methodInfoDeleteProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.DeleteProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.DeleteProductResponse.deserializeBinary);
        this.methodInfoUpdatePrice = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.UpdatePriceResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.UpdatePriceResponse.deserializeBinary);
        this.methodInfoGetPrice = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.GetPriceResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.GetPriceResponse.deserializeBinary);
        this.methodInfoBuyProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.BuyProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.BuyProductResponse.deserializeBinary);
        this.methodInfoWatchProduct = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.WatchProductResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.WatchProductResponse.deserializeBinary);
        this.methodInfoWatchPrice = new grpcWeb.AbstractClientBase.MethodInfo(economy_economy_pb.WatchPriceResponse, function (request) {
            return request.serializeBinary();
        }, economy_economy_pb.WatchPriceResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVEconomyServiceClient.prototype.registerProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/RegisterProduct', request, metadata || {}, this.methodInfoRegisterProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/RegisterProduct', request, metadata || {}, this.methodInfoRegisterProduct);
    };
    MruVEconomyServiceClient.prototype.getProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/GetProduct', request, metadata || {}, this.methodInfoGetProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/GetProduct', request, metadata || {}, this.methodInfoGetProduct);
    };
    MruVEconomyServiceClient.prototype.updateProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/UpdateProduct', request, metadata || {}, this.methodInfoUpdateProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/UpdateProduct', request, metadata || {}, this.methodInfoUpdateProduct);
    };
    MruVEconomyServiceClient.prototype.deleteProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/DeleteProduct', request, metadata || {}, this.methodInfoDeleteProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/DeleteProduct', request, metadata || {}, this.methodInfoDeleteProduct);
    };
    MruVEconomyServiceClient.prototype.updatePrice = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/UpdatePrice', request, metadata || {}, this.methodInfoUpdatePrice, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/UpdatePrice', request, metadata || {}, this.methodInfoUpdatePrice);
    };
    MruVEconomyServiceClient.prototype.getPrice = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/GetPrice', request, metadata || {}, this.methodInfoGetPrice, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/GetPrice', request, metadata || {}, this.methodInfoGetPrice);
    };
    MruVEconomyServiceClient.prototype.buyProduct = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.economy.MruVEconomyService/BuyProduct', request, metadata || {}, this.methodInfoBuyProduct, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.economy.MruVEconomyService/BuyProduct', request, metadata || {}, this.methodInfoBuyProduct);
    };
    MruVEconomyServiceClient.prototype.watchProduct = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.economy.MruVEconomyService/WatchProduct', request, metadata || {}, this.methodInfoWatchProduct);
    };
    MruVEconomyServiceClient.prototype.watchPrice = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.economy.MruVEconomyService/WatchPrice', request, metadata || {}, this.methodInfoWatchPrice);
    };
    return MruVEconomyServiceClient;
}());
exports.MruVEconomyServiceClient = MruVEconomyServiceClient;
