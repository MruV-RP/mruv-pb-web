/**
 * @fileoverview gRPC-Web generated client stub for mruv.characters
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as common_health_pb from '../common/health_pb';
import * as characters_characters_pb from '../characters/characters_pb';


export class MruVCharactersServiceClient {
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

  methodInfoCreateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.CreateCharacterResponse,
    (request: characters_characters_pb.CreateCharacterRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.CreateCharacterResponse.deserializeBinary
  );

  createCharacter(
    request: characters_characters_pb.CreateCharacterRequest,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.CreateCharacterResponse>;

  createCharacter(
    request: characters_characters_pb.CreateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.CreateCharacterResponse) => void): grpcWeb.ClientReadableStream<characters_characters_pb.CreateCharacterResponse>;

  createCharacter(
    request: characters_characters_pb.CreateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.CreateCharacterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/CreateCharacter',
        request,
        metadata || {},
        this.methodInfoCreateCharacter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/CreateCharacter',
    request,
    metadata || {},
    this.methodInfoCreateCharacter);
  }

  methodInfoGetCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.GetCharacterResponse,
    (request: characters_characters_pb.GetCharacterRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.GetCharacterResponse.deserializeBinary
  );

  getCharacter(
    request: characters_characters_pb.GetCharacterRequest,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.GetCharacterResponse>;

  getCharacter(
    request: characters_characters_pb.GetCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.GetCharacterResponse) => void): grpcWeb.ClientReadableStream<characters_characters_pb.GetCharacterResponse>;

  getCharacter(
    request: characters_characters_pb.GetCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.GetCharacterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/GetCharacter',
        request,
        metadata || {},
        this.methodInfoGetCharacter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/GetCharacter',
    request,
    metadata || {},
    this.methodInfoGetCharacter);
  }

  methodInfoUpdateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.UpdateCharacterResponse,
    (request: characters_characters_pb.UpdateCharacterRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.UpdateCharacterResponse.deserializeBinary
  );

  updateCharacter(
    request: characters_characters_pb.UpdateCharacterRequest,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.UpdateCharacterResponse>;

  updateCharacter(
    request: characters_characters_pb.UpdateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.UpdateCharacterResponse) => void): grpcWeb.ClientReadableStream<characters_characters_pb.UpdateCharacterResponse>;

  updateCharacter(
    request: characters_characters_pb.UpdateCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.UpdateCharacterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/UpdateCharacter',
        request,
        metadata || {},
        this.methodInfoUpdateCharacter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/UpdateCharacter',
    request,
    metadata || {},
    this.methodInfoUpdateCharacter);
  }

  methodInfoDeleteCharacter = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.DeleteCharacterResponse,
    (request: characters_characters_pb.DeleteCharacterRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.DeleteCharacterResponse.deserializeBinary
  );

  deleteCharacter(
    request: characters_characters_pb.DeleteCharacterRequest,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.DeleteCharacterResponse>;

  deleteCharacter(
    request: characters_characters_pb.DeleteCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.DeleteCharacterResponse) => void): grpcWeb.ClientReadableStream<characters_characters_pb.DeleteCharacterResponse>;

  deleteCharacter(
    request: characters_characters_pb.DeleteCharacterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.DeleteCharacterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/DeleteCharacter',
        request,
        metadata || {},
        this.methodInfoDeleteCharacter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/DeleteCharacter',
    request,
    metadata || {},
    this.methodInfoDeleteCharacter);
  }

  methodInfoPermanentCharacterKill = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.CharacterID,
    (request: characters_characters_pb.CharacterID) => {
      return request.serializeBinary();
    },
    characters_characters_pb.CharacterID.deserializeBinary
  );

  permanentCharacterKill(
    request: characters_characters_pb.CharacterID,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.CharacterID>;

  permanentCharacterKill(
    request: characters_characters_pb.CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.CharacterID) => void): grpcWeb.ClientReadableStream<characters_characters_pb.CharacterID>;

  permanentCharacterKill(
    request: characters_characters_pb.CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.CharacterID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/PermanentCharacterKill',
        request,
        metadata || {},
        this.methodInfoPermanentCharacterKill,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/PermanentCharacterKill',
    request,
    metadata || {},
    this.methodInfoPermanentCharacterKill);
  }

  methodInfoChangeClothes = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.ChangeClothesResponse,
    (request: characters_characters_pb.ChangeClothesRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.ChangeClothesResponse.deserializeBinary
  );

  changeClothes(
    request: characters_characters_pb.ChangeClothesRequest,
    metadata: grpcWeb.Metadata | null): Promise<characters_characters_pb.ChangeClothesResponse>;

  changeClothes(
    request: characters_characters_pb.ChangeClothesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_pb.ChangeClothesResponse) => void): grpcWeb.ClientReadableStream<characters_characters_pb.ChangeClothesResponse>;

  changeClothes(
    request: characters_characters_pb.ChangeClothesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: characters_characters_pb.ChangeClothesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/ChangeClothes',
        request,
        metadata || {},
        this.methodInfoChangeClothes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/ChangeClothes',
    request,
    metadata || {},
    this.methodInfoChangeClothes);
  }

  methodInfoDeathsStream = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_pb.DeathStreamResponse,
    (request: characters_characters_pb.DeathStreamRequest) => {
      return request.serializeBinary();
    },
    characters_characters_pb.DeathStreamResponse.deserializeBinary
  );

  deathsStream(
    request: characters_characters_pb.DeathStreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.characters.MruVCharactersService/DeathsStream',
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
    metadata: grpcWeb.Metadata | null): Promise<common_health_pb.ServiceStatusResponse>;

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void): grpcWeb.ClientReadableStream<common_health_pb.ServiceStatusResponse>;

  getServiceStatus(
    request: common_health_pb.ServiceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: common_health_pb.ServiceStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/GetServiceStatus',
        request,
        metadata || {},
        this.methodInfoGetServiceStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/GetServiceStatus',
    request,
    metadata || {},
    this.methodInfoGetServiceStatus);
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
    metadata: grpcWeb.Metadata | null): Promise<common_health_pb.VersionResponse>;

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void): grpcWeb.ClientReadableStream<common_health_pb.VersionResponse>;

  getServiceVersion(
    request: common_health_pb.VersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: common_health_pb.VersionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.characters.MruVCharactersService/GetServiceVersion',
        request,
        metadata || {},
        this.methodInfoGetServiceVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.characters.MruVCharactersService/GetServiceVersion',
    request,
    metadata || {},
    this.methodInfoGetServiceVersion);
  }

}

