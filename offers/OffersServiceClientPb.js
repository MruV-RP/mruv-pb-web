"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.offers
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MruVOffersServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var offers_offers_pb = __importStar(require("../offers/offers_pb"));
var MruVOffersServiceClient = /** @class */ (function () {
    function MruVOffersServiceClient(hostname, credentials, options) {
        this.methodInfoCreateOffer = new grpcWeb.AbstractClientBase.MethodInfo(offers_offers_pb.CreateOfferResponse, function (request) {
            return request.serializeBinary();
        }, offers_offers_pb.CreateOfferResponse.deserializeBinary);
        this.methodInfoGetOffer = new grpcWeb.AbstractClientBase.MethodInfo(offers_offers_pb.GetOfferResponse, function (request) {
            return request.serializeBinary();
        }, offers_offers_pb.GetOfferResponse.deserializeBinary);
        this.methodInfoUpdateOffer = new grpcWeb.AbstractClientBase.MethodInfo(offers_offers_pb.UpdateOfferResponse, function (request) {
            return request.serializeBinary();
        }, offers_offers_pb.UpdateOfferResponse.deserializeBinary);
        this.methodInfoDeleteOffer = new grpcWeb.AbstractClientBase.MethodInfo(offers_offers_pb.DeleteOfferResponse, function (request) {
            return request.serializeBinary();
        }, offers_offers_pb.DeleteOfferResponse.deserializeBinary);
        this.methodInfoAcceptOffer = new grpcWeb.AbstractClientBase.MethodInfo(offers_offers_pb.AcceptOfferResponse, function (request) {
            return request.serializeBinary();
        }, offers_offers_pb.AcceptOfferResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVOffersServiceClient.prototype.createOffer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.offers.MruVOffersService/CreateOffer', request, metadata || {}, this.methodInfoCreateOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.offers.MruVOffersService/CreateOffer', request, metadata || {}, this.methodInfoCreateOffer);
    };
    MruVOffersServiceClient.prototype.getOffer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.offers.MruVOffersService/GetOffer', request, metadata || {}, this.methodInfoGetOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.offers.MruVOffersService/GetOffer', request, metadata || {}, this.methodInfoGetOffer);
    };
    MruVOffersServiceClient.prototype.updateOffer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.offers.MruVOffersService/UpdateOffer', request, metadata || {}, this.methodInfoUpdateOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.offers.MruVOffersService/UpdateOffer', request, metadata || {}, this.methodInfoUpdateOffer);
    };
    MruVOffersServiceClient.prototype.deleteOffer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.offers.MruVOffersService/DeleteOffer', request, metadata || {}, this.methodInfoDeleteOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.offers.MruVOffersService/DeleteOffer', request, metadata || {}, this.methodInfoDeleteOffer);
    };
    MruVOffersServiceClient.prototype.acceptOffer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.offers.MruVOffersService/AcceptOffer', request, metadata || {}, this.methodInfoAcceptOffer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.offers.MruVOffersService/AcceptOffer', request, metadata || {}, this.methodInfoAcceptOffer);
    };
    return MruVOffersServiceClient;
}());
exports.MruVOffersServiceClient = MruVOffersServiceClient;
