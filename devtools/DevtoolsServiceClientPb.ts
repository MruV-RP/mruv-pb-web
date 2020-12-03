/**
 * @fileoverview gRPC-Web generated client stub for mruv.devtools
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as common_health_pb from '../common/health_pb';
import * as devtools_devtools_pb from '../devtools/devtools_pb';


export class MruVDevToolsServiceClient {
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

  methodInfoGetPositions = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.GetPositionsResponse,
    (request: devtools_devtools_pb.GetPositionsRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.GetPositionsResponse.deserializeBinary
  );

  getPositions(
    request: devtools_devtools_pb.GetPositionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.GetPositionsResponse>;

  getPositions(
    request: devtools_devtools_pb.GetPositionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetPositionsResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.GetPositionsResponse>;

  getPositions(
    request: devtools_devtools_pb.GetPositionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetPositionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/GetPositions',
        request,
        metadata || {},
        this.methodInfoGetPositions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetPositions',
    request,
    metadata || {},
    this.methodInfoGetPositions);
  }

  methodInfoSavePosition = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.SavePositionResponse,
    (request: devtools_devtools_pb.SavePositionRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.SavePositionResponse.deserializeBinary
  );

  savePosition(
    request: devtools_devtools_pb.SavePositionRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.SavePositionResponse>;

  savePosition(
    request: devtools_devtools_pb.SavePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SavePositionResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.SavePositionResponse>;

  savePosition(
    request: devtools_devtools_pb.SavePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SavePositionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/SavePosition',
        request,
        metadata || {},
        this.methodInfoSavePosition,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/SavePosition',
    request,
    metadata || {},
    this.methodInfoSavePosition);
  }

  methodInfoDeletePosition = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.DeletePositionResponse,
    (request: devtools_devtools_pb.DeletePositionRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.DeletePositionResponse.deserializeBinary
  );

  deletePosition(
    request: devtools_devtools_pb.DeletePositionRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.DeletePositionResponse>;

  deletePosition(
    request: devtools_devtools_pb.DeletePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.DeletePositionResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.DeletePositionResponse>;

  deletePosition(
    request: devtools_devtools_pb.DeletePositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.DeletePositionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/DeletePosition',
        request,
        metadata || {},
        this.methodInfoDeletePosition,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/DeletePosition',
    request,
    metadata || {},
    this.methodInfoDeletePosition);
  }

  methodInfoGetOutfits = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.GetOutfitsResponse,
    (request: devtools_devtools_pb.GetOutfitsRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.GetOutfitsResponse.deserializeBinary
  );

  getOutfits(
    request: devtools_devtools_pb.GetOutfitsRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.GetOutfitsResponse>;

  getOutfits(
    request: devtools_devtools_pb.GetOutfitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetOutfitsResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.GetOutfitsResponse>;

  getOutfits(
    request: devtools_devtools_pb.GetOutfitsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetOutfitsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/GetOutfits',
        request,
        metadata || {},
        this.methodInfoGetOutfits,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetOutfits',
    request,
    metadata || {},
    this.methodInfoGetOutfits);
  }

  methodInfoSaveOutfit = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.SaveOutfitResponse,
    (request: devtools_devtools_pb.SaveOutfitRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.SaveOutfitResponse.deserializeBinary
  );

  saveOutfit(
    request: devtools_devtools_pb.SaveOutfitRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.SaveOutfitResponse>;

  saveOutfit(
    request: devtools_devtools_pb.SaveOutfitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SaveOutfitResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.SaveOutfitResponse>;

  saveOutfit(
    request: devtools_devtools_pb.SaveOutfitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SaveOutfitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/SaveOutfit',
        request,
        metadata || {},
        this.methodInfoSaveOutfit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/SaveOutfit',
    request,
    metadata || {},
    this.methodInfoSaveOutfit);
  }

  methodInfoGetAnimations = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.GetAnimationsResponse,
    (request: devtools_devtools_pb.GetAnimationsRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.GetAnimationsResponse.deserializeBinary
  );

  getAnimations(
    request: devtools_devtools_pb.GetAnimationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.GetAnimationsResponse>;

  getAnimations(
    request: devtools_devtools_pb.GetAnimationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetAnimationsResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.GetAnimationsResponse>;

  getAnimations(
    request: devtools_devtools_pb.GetAnimationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetAnimationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/GetAnimations',
        request,
        metadata || {},
        this.methodInfoGetAnimations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetAnimations',
    request,
    metadata || {},
    this.methodInfoGetAnimations);
  }

  methodInfoGetAnimation = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.GetAnimationResponse,
    (request: devtools_devtools_pb.GetAnimationRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.GetAnimationResponse.deserializeBinary
  );

  getAnimation(
    request: devtools_devtools_pb.GetAnimationRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.GetAnimationResponse>;

  getAnimation(
    request: devtools_devtools_pb.GetAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetAnimationResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.GetAnimationResponse>;

  getAnimation(
    request: devtools_devtools_pb.GetAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.GetAnimationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/GetAnimation',
        request,
        metadata || {},
        this.methodInfoGetAnimation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetAnimation',
    request,
    metadata || {},
    this.methodInfoGetAnimation);
  }

  methodInfoSaveAnimation = new grpcWeb.AbstractClientBase.MethodInfo(
    devtools_devtools_pb.SaveAnimationResponse,
    (request: devtools_devtools_pb.SaveAnimationRequest) => {
      return request.serializeBinary();
    },
    devtools_devtools_pb.SaveAnimationResponse.deserializeBinary
  );

  saveAnimation(
    request: devtools_devtools_pb.SaveAnimationRequest,
    metadata: grpcWeb.Metadata | null): Promise<devtools_devtools_pb.SaveAnimationResponse>;

  saveAnimation(
    request: devtools_devtools_pb.SaveAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SaveAnimationResponse) => void): grpcWeb.ClientReadableStream<devtools_devtools_pb.SaveAnimationResponse>;

  saveAnimation(
    request: devtools_devtools_pb.SaveAnimationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: devtools_devtools_pb.SaveAnimationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.devtools.MruVDevToolsService/SaveAnimation',
        request,
        metadata || {},
        this.methodInfoSaveAnimation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/SaveAnimation',
    request,
    metadata || {},
    this.methodInfoSaveAnimation);
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
          '/mruv.devtools.MruVDevToolsService/GetServiceStatus',
        request,
        metadata || {},
        this.methodInfoGetServiceStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetServiceStatus',
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
          '/mruv.devtools.MruVDevToolsService/GetServiceVersion',
        request,
        metadata || {},
        this.methodInfoGetServiceVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.devtools.MruVDevToolsService/GetServiceVersion',
    request,
    metadata || {},
    this.methodInfoGetServiceVersion);
  }

}

