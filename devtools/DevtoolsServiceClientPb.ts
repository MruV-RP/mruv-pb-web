/**
 * @fileoverview gRPC-Web generated client stub for mruv.devtools
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as devtools_devtools_model_pb from '../devtools/devtools_model_pb';

import {
  DeletePositionRequest,
  DeletePositionResponse,
  GetAnimationRequest,
  GetAnimationResponse,
  GetAnimationsRequest,
  GetAnimationsResponse,
  GetOutfitsRequest,
  GetOutfitsResponse,
  GetPositionsRequest,
  GetPositionsResponse,
  SaveAnimationRequest,
  SaveAnimationResponse,
  SaveOutfitRequest,
  SaveOutfitResponse,
  SavePositionRequest,
  SavePositionResponse} from './devtools_pb';

export class MruVDevToolsServiceClient {
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

  methodInfoGetPositions = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPositionsResponse,
    (request: GetPositionsRequest) => {
      return request.serializeBinary();
    },
    GetPositionsResponse.deserializeBinary
  );

  getPositions(
    request: GetPositionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPositionsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/GetPositions',
      request,
      metadata || {},
      this.methodInfoGetPositions,
      callback);
  }

  methodInfoSavePosition = new grpcWeb.AbstractClientBase.MethodInfo(
    SavePositionResponse,
    (request: SavePositionRequest) => {
      return request.serializeBinary();
    },
    SavePositionResponse.deserializeBinary
  );

  savePosition(
    request: SavePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SavePositionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/SavePosition',
      request,
      metadata || {},
      this.methodInfoSavePosition,
      callback);
  }

  methodInfoDeletePosition = new grpcWeb.AbstractClientBase.MethodInfo(
    DeletePositionResponse,
    (request: DeletePositionRequest) => {
      return request.serializeBinary();
    },
    DeletePositionResponse.deserializeBinary
  );

  deletePosition(
    request: DeletePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeletePositionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/DeletePosition',
      request,
      metadata || {},
      this.methodInfoDeletePosition,
      callback);
  }

  methodInfoGetOutfits = new grpcWeb.AbstractClientBase.MethodInfo(
    GetOutfitsResponse,
    (request: GetOutfitsRequest) => {
      return request.serializeBinary();
    },
    GetOutfitsResponse.deserializeBinary
  );

  getOutfits(
    request: GetOutfitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetOutfitsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/GetOutfits',
      request,
      metadata || {},
      this.methodInfoGetOutfits,
      callback);
  }

  methodInfoSaveOutfit = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveOutfitResponse,
    (request: SaveOutfitRequest) => {
      return request.serializeBinary();
    },
    SaveOutfitResponse.deserializeBinary
  );

  saveOutfit(
    request: SaveOutfitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SaveOutfitResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/SaveOutfit',
      request,
      metadata || {},
      this.methodInfoSaveOutfit,
      callback);
  }

  methodInfoGetAnimations = new grpcWeb.AbstractClientBase.MethodInfo(
    GetAnimationsResponse,
    (request: GetAnimationsRequest) => {
      return request.serializeBinary();
    },
    GetAnimationsResponse.deserializeBinary
  );

  getAnimations(
    request: GetAnimationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetAnimationsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/GetAnimations',
      request,
      metadata || {},
      this.methodInfoGetAnimations,
      callback);
  }

  methodInfoGetAnimation = new grpcWeb.AbstractClientBase.MethodInfo(
    GetAnimationResponse,
    (request: GetAnimationRequest) => {
      return request.serializeBinary();
    },
    GetAnimationResponse.deserializeBinary
  );

  getAnimation(
    request: GetAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetAnimationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/GetAnimation',
      request,
      metadata || {},
      this.methodInfoGetAnimation,
      callback);
  }

  methodInfoSaveAnimation = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveAnimationResponse,
    (request: SaveAnimationRequest) => {
      return request.serializeBinary();
    },
    SaveAnimationResponse.deserializeBinary
  );

  saveAnimation(
    request: SaveAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SaveAnimationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.devtools.MruVDevToolsService/SaveAnimation',
      request,
      metadata || {},
      this.methodInfoSaveAnimation,
      callback);
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
        '/mruv.devtools.MruVDevToolsService/GetServiceStatus',
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
        '/mruv.devtools.MruVDevToolsService/GetServiceVersion',
      request,
      metadata || {},
      this.methodInfoGetServiceVersion,
      callback);
  }

}

