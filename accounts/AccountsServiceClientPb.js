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
var grpcWeb = __importStar(require("grpc-web"));
var accounts_accounts_model_pb = __importStar(require("../accounts/accounts_model_pb"));
var accounts_pb_1 = require("./accounts_pb");
var MruVAccountsServiceClient = /** @class */ (function () {
    function MruVAccountsServiceClient(hostname, credentials, options) {
        this.methodInfoRegisterAccount = new grpcWeb.AbstractClientBase.MethodInfo(accounts_pb_1.RegisterAccountResponse, function (request) {
            return request.serializeBinary();
        }, accounts_pb_1.RegisterAccountResponse.deserializeBinary);
        this.methodInfoLogIn = new grpcWeb.AbstractClientBase.MethodInfo(accounts_pb_1.LogInResponse, function (request) {
            return request.serializeBinary();
        }, accounts_pb_1.LogInResponse.deserializeBinary);
        this.methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(accounts_accounts_model_pb.Account, function (request) {
            return request.serializeBinary();
        }, accounts_accounts_model_pb.Account.deserializeBinary);
        this.methodInfoGetAccountCharacters = new grpcWeb.AbstractClientBase.MethodInfo(accounts_pb_1.GetAccountCharactersResponse, function (request) {
            return request.serializeBinary();
        }, accounts_pb_1.GetAccountCharactersResponse.deserializeBinary);
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
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVAccountsService/RegisterAccount', request, metadata || {}, this.methodInfoRegisterAccount, callback);
    };
    MruVAccountsServiceClient.prototype.logIn = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVAccountsService/LogIn', request, metadata || {}, this.methodInfoLogIn, callback);
    };
    MruVAccountsServiceClient.prototype.getAccount = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVAccountsService/GetAccount', request, metadata || {}, this.methodInfoGetAccount, callback);
    };
    MruVAccountsServiceClient.prototype.getAccountCharacters = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVAccountsService/GetAccountCharacters', request, metadata || {}, this.methodInfoGetAccountCharacters, callback);
    };
    return MruVAccountsServiceClient;
}());
exports.MruVAccountsServiceClient = MruVAccountsServiceClient;
