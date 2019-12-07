/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as characters_characters_model_pb from '../characters/characters_model_pb';

import {
  DeathStreamRequest,
  DeathStreamResponse} from './characters_pb';

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

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_model_pb.CharacterID,
    (request: characters_characters_model_pb.Character) => {
      return request.serializeBinary();
    },
    characters_characters_model_pb.CharacterID.deserializeBinary
  );

  create(
    request: characters_characters_model_pb.Character,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_model_pb.CharacterID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/Create',
      request,
      metadata || {},
      this.methodInfoCreate,
      callback);
  }

  methodInfoGet = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_model_pb.Character,
    (request: characters_characters_model_pb.CharacterID) => {
      return request.serializeBinary();
    },
    characters_characters_model_pb.Character.deserializeBinary
  );

  get(
    request: characters_characters_model_pb.CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_model_pb.Character) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/Get',
      request,
      metadata || {},
      this.methodInfoGet,
      callback);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_model_pb.CharacterID,
    (request: characters_characters_model_pb.Character) => {
      return request.serializeBinary();
    },
    characters_characters_model_pb.CharacterID.deserializeBinary
  );

  update(
    request: characters_characters_model_pb.Character,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_model_pb.CharacterID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/Update',
      request,
      metadata || {},
      this.methodInfoUpdate,
      callback);
  }

  methodInfoRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_model_pb.CharacterID,
    (request: characters_characters_model_pb.CharacterID) => {
      return request.serializeBinary();
    },
    characters_characters_model_pb.CharacterID.deserializeBinary
  );

  remove(
    request: characters_characters_model_pb.CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_model_pb.CharacterID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/Remove',
      request,
      metadata || {},
      this.methodInfoRemove,
      callback);
  }

  methodInfoPermanentCharacterKill = new grpcWeb.AbstractClientBase.MethodInfo(
    characters_characters_model_pb.CharacterID,
    (request: characters_characters_model_pb.CharacterID) => {
      return request.serializeBinary();
    },
    characters_characters_model_pb.CharacterID.deserializeBinary
  );

  permanentCharacterKill(
    request: characters_characters_model_pb.CharacterID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: characters_characters_model_pb.CharacterID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.MruVCharactersService/PermanentCharacterKill',
      request,
      metadata || {},
      this.methodInfoPermanentCharacterKill,
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

