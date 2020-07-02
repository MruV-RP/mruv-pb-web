/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';

import {
  ChangeClothesRequest,
  ChangeClothesResponse,
  CharacterID,
  CreateCharacterRequest,
  CreateCharacterResponse,
  DeathStreamRequest,
  DeathStreamResponse,
  DeleteCharacterRequest,
  DeleteCharacterResponse,
  GetCharacterRequest,
  GetCharacterResponse,
  UpdateCharacterRequest,
  UpdateCharacterResponse} from './characters_pb';

export class MruVCharactersServiceClient {
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

  methodInfoCreateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateCharacterResponse,
    (request: CreateCharacterRequest) => {
      return request.serializeBinary();
    },
    CreateCharacterResponse.deserializeBinary
  );

  createCharacter(
    request: CreateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateCharacterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/CreateCharacter',
      request,
      metadata || {},
      this.methodInfoCreateCharacter,
      callback);
  }

  methodInfoGetCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    GetCharacterResponse,
    (request: GetCharacterRequest) => {
      return request.serializeBinary();
    },
    GetCharacterResponse.deserializeBinary
  );

  getCharacter(
    request: GetCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetCharacterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/GetCharacter',
      request,
      metadata || {},
      this.methodInfoGetCharacter,
      callback);
  }

  methodInfoUpdateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateCharacterResponse,
    (request: UpdateCharacterRequest) => {
      return request.serializeBinary();
    },
    UpdateCharacterResponse.deserializeBinary
  );

  updateCharacter(
    request: UpdateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateCharacterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/UpdateCharacter',
      request,
      metadata || {},
      this.methodInfoUpdateCharacter,
      callback);
  }

  methodInfoDeleteCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteCharacterResponse,
    (request: DeleteCharacterRequest) => {
      return request.serializeBinary();
    },
    DeleteCharacterResponse.deserializeBinary
  );

  deleteCharacter(
    request: DeleteCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteCharacterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/DeleteCharacter',
      request,
      metadata || {},
      this.methodInfoDeleteCharacter,
      callback);
  }

  methodInfoPermanentCharacterKill = new grpcWeb.AbstractClientBase.MethodInfo(
    CharacterID,
    (request: CharacterID) => {
      return request.serializeBinary();
    },
    CharacterID.deserializeBinary
  );

  permanentCharacterKill(
    request: CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CharacterID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/PermanentCharacterKill',
      request,
      metadata || {},
      this.methodInfoPermanentCharacterKill,
      callback);
  }

  methodInfoChangeClothes = new grpcWeb.AbstractClientBase.MethodInfo(
    ChangeClothesResponse,
    (request: ChangeClothesRequest) => {
      return request.serializeBinary();
    },
    ChangeClothesResponse.deserializeBinary
  );

  changeClothes(
    request: ChangeClothesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChangeClothesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/ChangeClothes',
      request,
      metadata || {},
      this.methodInfoChangeClothes,
      callback);
  }

  methodInfoDeathsStream = new grpcWeb.AbstractClientBase.MethodInfo(
    DeathStreamResponse,
    (request: DeathStreamRequest) => {
      return request.serializeBinary();
    },
    DeathStreamResponse.deserializeBinary
  );

  deathsStream(
    request: DeathStreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.MruVCharactersService/DeathsStream',
      request,
      metadata || {},
      this.methodInfoDeathsStream);
  }

  methodInfoGetServiceStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.ServiceStatusResponse,
    (request: common_health_pb.ServiceStatusRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.ServiceStatusResponse.deserializeBinary
  );

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/GetServiceStatus',
      request,
      metadata || {},
      this.methodInfoGetServiceStatus,
      callback);
  }

  methodInfoGetServiceVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    common_health_pb.VersionResponse,
    (request: common_health_pb.VersionRequest) => {
      return request.serializeBinary();
    },
    common_health_pb.VersionResponse.deserializeBinary
  );

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/GetServiceVersion',
      request,
      metadata || {},
      this.methodInfoGetServiceVersion,
      callback);
  }

}

