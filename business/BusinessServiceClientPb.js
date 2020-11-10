"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.business
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
var business_business_pb = __importStar(require("../business/business_pb"));
var MruVBusinessServiceClient = /** @class */ (function () {
    function MruVBusinessServiceClient(hostname, credentials, options) {
        this.methodInfoCreateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.CreateBusinessResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.CreateBusinessResponse.deserializeBinary);
        this.methodInfoGetBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.Business, function (request) {
            return request.serializeBinary();
        }, business_business_pb.Business.deserializeBinary);
        this.methodInfoUpdateBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.Business, function (request) {
            return request.serializeBinary();
        }, business_business_pb.Business.deserializeBinary);
        this.methodInfoDeleteBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.DeleteBusinessResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.DeleteBusinessResponse.deserializeBinary);
        this.methodInfoAssignOwner = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.AssignOwnerResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.AssignOwnerResponse.deserializeBinary);
        this.methodInfoAssignEstate = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.AssignEstateResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.AssignEstateResponse.deserializeBinary);
        this.methodInfoUnassignEstate = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.UnassignEstateResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.UnassignEstateResponse.deserializeBinary);
        this.methodInfoBuyBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.BuyBusinessResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.BuyBusinessResponse.deserializeBinary);
        this.methodInfoWatchBusiness = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.WatchBusinessResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.WatchBusinessResponse.deserializeBinary);
        this.methodInfoWatchBusinesses = new grpcWeb.AbstractClientBase.MethodInfo(business_business_pb.WatchBusinessesResponse, function (request) {
            return request.serializeBinary();
        }, business_business_pb.WatchBusinessesResponse.deserializeBinary);
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
    MruVBusinessServiceClient.prototype.createBusiness = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/CreateBusiness', request, metadata || {}, this.methodInfoCreateBusiness, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/CreateBusiness', request, metadata || {}, this.methodInfoCreateBusiness);
    };
    MruVBusinessServiceClient.prototype.getBusiness = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/GetBusiness', request, metadata || {}, this.methodInfoGetBusiness, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/GetBusiness', request, metadata || {}, this.methodInfoGetBusiness);
    };
    MruVBusinessServiceClient.prototype.updateBusiness = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/UpdateBusiness', request, metadata || {}, this.methodInfoUpdateBusiness, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/UpdateBusiness', request, metadata || {}, this.methodInfoUpdateBusiness);
    };
    MruVBusinessServiceClient.prototype.deleteBusiness = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/DeleteBusiness', request, metadata || {}, this.methodInfoDeleteBusiness, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/DeleteBusiness', request, metadata || {}, this.methodInfoDeleteBusiness);
    };
    MruVBusinessServiceClient.prototype.assignOwner = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/AssignOwner', request, metadata || {}, this.methodInfoAssignOwner, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/AssignOwner', request, metadata || {}, this.methodInfoAssignOwner);
    };
    MruVBusinessServiceClient.prototype.assignEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/AssignEstate', request, metadata || {}, this.methodInfoAssignEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/AssignEstate', request, metadata || {}, this.methodInfoAssignEstate);
    };
    MruVBusinessServiceClient.prototype.unassignEstate = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/UnassignEstate', request, metadata || {}, this.methodInfoUnassignEstate, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/UnassignEstate', request, metadata || {}, this.methodInfoUnassignEstate);
    };
    MruVBusinessServiceClient.prototype.buyBusiness = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.business.MruVBusinessService/BuyBusiness', request, metadata || {}, this.methodInfoBuyBusiness, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.business.MruVBusinessService/BuyBusiness', request, metadata || {}, this.methodInfoBuyBusiness);
    };
    MruVBusinessServiceClient.prototype.watchBusiness = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.business.MruVBusinessService/WatchBusiness', request, metadata || {}, this.methodInfoWatchBusiness);
    };
    MruVBusinessServiceClient.prototype.watchBusinesses = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.business.MruVBusinessService/WatchBusinesses', request, metadata || {}, this.methodInfoWatchBusinesses);
    };
    return MruVBusinessServiceClient;
}());
exports.MruVBusinessServiceClient = MruVBusinessServiceClient;
