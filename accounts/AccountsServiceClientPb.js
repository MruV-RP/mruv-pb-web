"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.accounts
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
exports.MruVAccountsServiceClient = void 0;
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
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVAccountsServiceClient.prototype.registerAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.accounts.MruVAccountsService/RegisterAccount', request, metadata || {}, this.methodInfoRegisterAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.accounts.MruVAccountsService/RegisterAccount', request, metadata || {}, this.methodInfoRegisterAccount);
    };
    MruVAccountsServiceClient.prototype.logIn = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.accounts.MruVAccountsService/LogIn', request, metadata || {}, this.methodInfoLogIn, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.accounts.MruVAccountsService/LogIn', request, metadata || {}, this.methodInfoLogIn);
    };
    MruVAccountsServiceClient.prototype.isAccountExist = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.accounts.MruVAccountsService/IsAccountExist', request, metadata || {}, this.methodInfoIsAccountExist, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.accounts.MruVAccountsService/IsAccountExist', request, metadata || {}, this.methodInfoIsAccountExist);
    };
    MruVAccountsServiceClient.prototype.getAccount = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.accounts.MruVAccountsService/GetAccount', request, metadata || {}, this.methodInfoGetAccount, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.accounts.MruVAccountsService/GetAccount', request, metadata || {}, this.methodInfoGetAccount);
    };
    MruVAccountsServiceClient.prototype.getAccountCharacters = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.accounts.MruVAccountsService/GetAccountCharacters', request, metadata || {}, this.methodInfoGetAccountCharacters, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.accounts.MruVAccountsService/GetAccountCharacters', request, metadata || {}, this.methodInfoGetAccountCharacters);
    };
    return MruVAccountsServiceClient;
}());
exports.MruVAccountsServiceClient = MruVAccountsServiceClient;
