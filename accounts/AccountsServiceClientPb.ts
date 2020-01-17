/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as accounts_accounts_model_pb from '../accounts/accounts_model_pb';

import {
  LogInRequest,
  LogInResponse,
  RegisterAccountRequest,
  RegisterAccountResponse} from './accounts_pb';

export class MruVAccountsServiceClient {
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

  methodInfoRegisterAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    RegisterAccountResponse,
    (request: RegisterAccountRequest) => {
      return request.serializeBinary();
    },
    RegisterAccountResponse.deserializeBinary
  );

  registerAccount(
    request: RegisterAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegisterAccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/RegisterAccount',
      request,
      metadata || {},
      this.methodInfoRegisterAccount,
      callback);
  }

  methodInfoLogIn = new grpcWeb.AbstractClientBase.MethodInfo(
    LogInResponse,
    (request: LogInRequest) => {
      return request.serializeBinary();
    },
    LogInResponse.deserializeBinary
  );

  logIn(
    request: LogInRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogInResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/LogIn',
      request,
      metadata || {},
      this.methodInfoLogIn,
      callback);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    accounts_accounts_model_pb.Account,
    (request: accounts_accounts_model_pb.AccountID) => {
      return request.serializeBinary();
    },
    accounts_accounts_model_pb.Account.deserializeBinary
  );

  getAccount(
    request: accounts_accounts_model_pb.AccountID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: accounts_accounts_model_pb.Account) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/GetAccount',
      request,
      metadata || {},
      this.methodInfoGetAccount,
      callback);
  }

}

