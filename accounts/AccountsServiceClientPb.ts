/**
 * @fileoverview gRPC-Web generated client stub for mruv.accounts
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as accounts_accounts_pb from '../accounts/accounts_pb';


export class MruVAccountsServiceClient {
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

  methodInfoRegisterAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_pb.RegisterAccountResponse,
    (request: accounts_accounts_pb.RegisterAccountRequest) => {
      return request.serializeBinary();
    },
    accounts_accounts_pb.RegisterAccountResponse.deserializeBinary
  );

  registerAccount(
    request: accounts_accounts_pb.RegisterAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<accounts_accounts_pb.RegisterAccountResponse>;

  registerAccount(
    request: accounts_accounts_pb.RegisterAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_pb.RegisterAccountResponse) => void): grpcWeb.ClientReadableStream<accounts_accounts_pb.RegisterAccountResponse>;

  registerAccount(
    request: accounts_accounts_pb.RegisterAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: accounts_accounts_pb.RegisterAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.accounts.MruVAccountsService/RegisterAccount',
        request,
        metadata || {},
        this.methodInfoRegisterAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.accounts.MruVAccountsService/RegisterAccount',
    request,
    metadata || {},
    this.methodInfoRegisterAccount);
  }

  methodInfoLogIn = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_pb.LogInResponse,
    (request: accounts_accounts_pb.LogInRequest) => {
      return request.serializeBinary();
    },
    accounts_accounts_pb.LogInResponse.deserializeBinary
  );

  logIn(
    request: accounts_accounts_pb.LogInRequest,
    metadata: grpcWeb.Metadata | null): Promise<accounts_accounts_pb.LogInResponse>;

  logIn(
    request: accounts_accounts_pb.LogInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_pb.LogInResponse) => void): grpcWeb.ClientReadableStream<accounts_accounts_pb.LogInResponse>;

  logIn(
    request: accounts_accounts_pb.LogInRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: accounts_accounts_pb.LogInResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.accounts.MruVAccountsService/LogIn',
        request,
        metadata || {},
        this.methodInfoLogIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.accounts.MruVAccountsService/LogIn',
    request,
    metadata || {},
    this.methodInfoLogIn);
  }

  methodInfoIsAccountExist = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_pb.IsAccountExistResponse,
    (request: accounts_accounts_pb.IsAccountExistRequest) => {
      return request.serializeBinary();
    },
    accounts_accounts_pb.IsAccountExistResponse.deserializeBinary
  );

  isAccountExist(
    request: accounts_accounts_pb.IsAccountExistRequest,
    metadata: grpcWeb.Metadata | null): Promise<accounts_accounts_pb.IsAccountExistResponse>;

  isAccountExist(
    request: accounts_accounts_pb.IsAccountExistRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_pb.IsAccountExistResponse) => void): grpcWeb.ClientReadableStream<accounts_accounts_pb.IsAccountExistResponse>;

  isAccountExist(
    request: accounts_accounts_pb.IsAccountExistRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: accounts_accounts_pb.IsAccountExistResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.accounts.MruVAccountsService/IsAccountExist',
        request,
        metadata || {},
        this.methodInfoIsAccountExist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.accounts.MruVAccountsService/IsAccountExist',
    request,
    metadata || {},
    this.methodInfoIsAccountExist);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_pb.GetAccountResponse,
    (request: accounts_accounts_pb.GetAccountRequest) => {
      return request.serializeBinary();
    },
    accounts_accounts_pb.GetAccountResponse.deserializeBinary
  );

  getAccount(
    request: accounts_accounts_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<accounts_accounts_pb.GetAccountResponse>;

  getAccount(
    request: accounts_accounts_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_pb.GetAccountResponse) => void): grpcWeb.ClientReadableStream<accounts_accounts_pb.GetAccountResponse>;

  getAccount(
    request: accounts_accounts_pb.GetAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: accounts_accounts_pb.GetAccountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.accounts.MruVAccountsService/GetAccount',
        request,
        metadata || {},
        this.methodInfoGetAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.accounts.MruVAccountsService/GetAccount',
    request,
    metadata || {},
    this.methodInfoGetAccount);
  }

  methodInfoGetAccountCharacters = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_pb.GetAccountCharactersResponse,
    (request: accounts_accounts_pb.GetAccountCharactersRequest) => {
      return request.serializeBinary();
    },
    accounts_accounts_pb.GetAccountCharactersResponse.deserializeBinary
  );

  getAccountCharacters(
    request: accounts_accounts_pb.GetAccountCharactersRequest,
    metadata: grpcWeb.Metadata | null): Promise<accounts_accounts_pb.GetAccountCharactersResponse>;

  getAccountCharacters(
    request: accounts_accounts_pb.GetAccountCharactersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_pb.GetAccountCharactersResponse) => void): grpcWeb.ClientReadableStream<accounts_accounts_pb.GetAccountCharactersResponse>;

  getAccountCharacters(
    request: accounts_accounts_pb.GetAccountCharactersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: accounts_accounts_pb.GetAccountCharactersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.accounts.MruVAccountsService/GetAccountCharacters',
        request,
        metadata || {},
        this.methodInfoGetAccountCharacters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.accounts.MruVAccountsService/GetAccountCharacters',
    request,
    metadata || {},
    this.methodInfoGetAccountCharacters);
  }

}

