"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv
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
var accounts_accounts_pb = __importStar(require("../accounts/accounts_pb"));
var MruVAccountsServiceClient = /** @class */ (function () {
    function MruVAccountsServiceClient(hostname, credentials, options) {
        this.methodInfoRegisterAccount = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_pb.RegisterAccountResponse, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_pb.RegisterAccountResponse.deserializeBinary);
        this.methodInfoLogIn = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_pb.LogInResponse, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_pb.LogInResponse.deserializeBinary);
        this.methodInfoIsAccountExist = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_pb.IsAccountExistResponse, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_pb.IsAccountExistResponse.deserializeBinary);
        this.methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_pb.GetAccountResponse, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_pb.GetAccountResponse.deserializeBinary);
        this.methodInfoGetAccountCharacters = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_pb.GetAccountCharactersResponse, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_pb.GetAccountCharactersResponse.deserializeBinary);
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
    MruVAccountsServiceClient.prototype.registerAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVAccountsService/RegisterAccount', request, metadata || {}, this.methodInfoRegisterAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVAccountsService/RegisterAccount', request, metadata || {}, this.methodInfoRegisterAccount);
    };
    MruVAccountsServiceClient.prototype.logIn = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVAccountsService/LogIn', request, metadata || {}, this.methodInfoLogIn, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVAccountsService/LogIn', request, metadata || {}, this.methodInfoLogIn);
    };
    MruVAccountsServiceClient.prototype.isAccountExist = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVAccountsService/IsAccountExist', request, metadata || {}, this.methodInfoIsAccountExist, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVAccountsService/IsAccountExist', request, metadata || {}, this.methodInfoIsAccountExist);
    };
    MruVAccountsServiceClient.prototype.getAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVAccountsService/GetAccount', request, metadata || {}, this.methodInfoGetAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVAccountsService/GetAccount', request, metadata || {}, this.methodInfoGetAccount);
    };
    MruVAccountsServiceClient.prototype.getAccountCharacters = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.MruVAccountsService/GetAccountCharacters', request, metadata || {}, this.methodInfoGetAccountCharacters, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.MruVAccountsService/GetAccountCharacters', request, metadata || {}, this.methodInfoGetAccountCharacters);
    };
    return MruVAccountsServiceClient;
}());
exports.MruVAccountsServiceClient = MruVAccountsServiceClient;
