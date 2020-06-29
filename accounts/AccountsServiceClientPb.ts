/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as characters_characters_pb from '../characters/characters_pb';

import {
  Account,
  AccountID,
  GetAccountCharactersResponse,
  IsAccountExistsRequest,
  IsAccountExistsResponse,
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

  methodInfoIsAccountExists = new grpcWeb.AbstractClientBase.MethodInfo(
    IsAccountExistsResponse,
    (request: IsAccountExistsRequest) => {
      return request.serializeBinary();
    },
    IsAccountExistsResponse.deserializeBinary
  );

  isAccountExists(
    request: IsAccountExistsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsAccountExistsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/IsAccountExists',
      request,
      metadata || {},
      this.methodInfoIsAccountExists,
      callback);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    Account,
    (request: AccountID) => {
      return request.serializeBinary();
    },
    Account.deserializeBinary
  );

  getAccount(
    request: AccountID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Account) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/GetAccount',
      request,
      metadata || {},
      this.methodInfoGetAccount,
      callback);
  }

  methodInfoGetAccountCharacters = new grpcWeb.AbstractClientBase.MethodInfo(
    GetAccountCharactersResponse,
    (request: AccountID) => {
      return request.serializeBinary();
    },
    GetAccountCharactersResponse.deserializeBinary
  );

  getAccountCharacters(
    request: AccountID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetAccountCharactersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVAccountsService/GetAccountCharacters',
      request,
      metadata || {},
      this.methodInfoGetAccountCharacters,
      callback);
  }

}

