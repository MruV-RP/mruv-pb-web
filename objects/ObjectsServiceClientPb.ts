/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as objects_objects_pb from '../objects/objects_pb';


export class MruVObjectsServiceClient {
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

  methodInfoCreateObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.CreateObjectResponse,
    (request: objects_objects_pb.CreateObjectRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.CreateObjectResponse.deserializeBinary
  );

  createObject(
    request: objects_objects_pb.CreateObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.CreateObjectResponse>;

  createObject(
    request: objects_objects_pb.CreateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.CreateObjectResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.CreateObjectResponse>;

  createObject(
    request: objects_objects_pb.CreateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.CreateObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/CreateObject',
        request,
        metadata || {},
        this.methodInfoCreateObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/CreateObject',
    request,
    metadata || {},
    this.methodInfoCreateObject);
  }

  methodInfoGetObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.GetObjectResponse,
    (request: objects_objects_pb.GetObjectRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.GetObjectResponse.deserializeBinary
  );

  getObject(
    request: objects_objects_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.GetObjectResponse>;

  getObject(
    request: objects_objects_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.GetObjectResponse>;

  getObject(
    request: objects_objects_pb.GetObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/GetObject',
        request,
        metadata || {},
        this.methodInfoGetObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/GetObject',
    request,
    metadata || {},
    this.methodInfoGetObject);
  }

  methodInfoUpdateObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.UpdateObjectResponse,
    (request: objects_objects_pb.UpdateObjectRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.UpdateObjectResponse.deserializeBinary
  );

  updateObject(
    request: objects_objects_pb.UpdateObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.UpdateObjectResponse>;

  updateObject(
    request: objects_objects_pb.UpdateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.UpdateObjectResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.UpdateObjectResponse>;

  updateObject(
    request: objects_objects_pb.UpdateObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.UpdateObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/UpdateObject',
        request,
        metadata || {},
        this.methodInfoUpdateObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/UpdateObject',
    request,
    metadata || {},
    this.methodInfoUpdateObject);
  }

  methodInfoDeleteObject = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.DeleteObjectResponse,
    (request: objects_objects_pb.DeleteObjectRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.DeleteObjectResponse.deserializeBinary
  );

  deleteObject(
    request: objects_objects_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.DeleteObjectResponse>;

  deleteObject(
    request: objects_objects_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.DeleteObjectResponse>;

  deleteObject(
    request: objects_objects_pb.DeleteObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/DeleteObject',
        request,
        metadata || {},
        this.methodInfoDeleteObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/DeleteObject',
    request,
    metadata || {},
    this.methodInfoDeleteObject);
  }

  methodInfoAddObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.AddObjectMaterialResponse,
    (request: objects_objects_pb.AddObjectMaterialRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.AddObjectMaterialResponse.deserializeBinary
  );

  addObjectMaterial(
    request: objects_objects_pb.AddObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.AddObjectMaterialResponse>;

  addObjectMaterial(
    request: objects_objects_pb.AddObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.AddObjectMaterialResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.AddObjectMaterialResponse>;

  addObjectMaterial(
    request: objects_objects_pb.AddObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.AddObjectMaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/AddObjectMaterial',
        request,
        metadata || {},
        this.methodInfoAddObjectMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/AddObjectMaterial',
    request,
    metadata || {},
    this.methodInfoAddObjectMaterial);
  }

  methodInfoGetObjectMaterials = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.GetObjectMaterialsResponse,
    (request: objects_objects_pb.GetObjectMaterialsRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.GetObjectMaterialsResponse.deserializeBinary
  );

  getObjectMaterials(
    request: objects_objects_pb.GetObjectMaterialsRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.GetObjectMaterialsResponse>;

  getObjectMaterials(
    request: objects_objects_pb.GetObjectMaterialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectMaterialsResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.GetObjectMaterialsResponse>;

  getObjectMaterials(
    request: objects_objects_pb.GetObjectMaterialsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectMaterialsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/GetObjectMaterials',
        request,
        metadata || {},
        this.methodInfoGetObjectMaterials,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/GetObjectMaterials',
    request,
    metadata || {},
    this.methodInfoGetObjectMaterials);
  }

  methodInfoDeleteObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.DeleteObjectMaterialResponse,
    (request: objects_objects_pb.DeleteObjectMaterialRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.DeleteObjectMaterialResponse.deserializeBinary
  );

  deleteObjectMaterial(
    request: objects_objects_pb.DeleteObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.DeleteObjectMaterialResponse>;

  deleteObjectMaterial(
    request: objects_objects_pb.DeleteObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectMaterialResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.DeleteObjectMaterialResponse>;

  deleteObjectMaterial(
    request: objects_objects_pb.DeleteObjectMaterialRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectMaterialResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/DeleteObjectMaterial',
        request,
        metadata || {},
        this.methodInfoDeleteObjectMaterial,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/DeleteObjectMaterial',
    request,
    metadata || {},
    this.methodInfoDeleteObjectMaterial);
  }

  methodInfoAddObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.AddObjectMaterialTextResponse,
    (request: objects_objects_pb.AddObjectMaterialTextRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.AddObjectMaterialTextResponse.deserializeBinary
  );

  addObjectMaterialText(
    request: objects_objects_pb.AddObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.AddObjectMaterialTextResponse>;

  addObjectMaterialText(
    request: objects_objects_pb.AddObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.AddObjectMaterialTextResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.AddObjectMaterialTextResponse>;

  addObjectMaterialText(
    request: objects_objects_pb.AddObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.AddObjectMaterialTextResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/AddObjectMaterialText',
        request,
        metadata || {},
        this.methodInfoAddObjectMaterialText,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/AddObjectMaterialText',
    request,
    metadata || {},
    this.methodInfoAddObjectMaterialText);
  }

  methodInfoGetObjectMaterialTexts = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.GetObjectMaterialTextsResponse,
    (request: objects_objects_pb.GetObjectMaterialTextsRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.GetObjectMaterialTextsResponse.deserializeBinary
  );

  getObjectMaterialTexts(
    request: objects_objects_pb.GetObjectMaterialTextsRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.GetObjectMaterialTextsResponse>;

  getObjectMaterialTexts(
    request: objects_objects_pb.GetObjectMaterialTextsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectMaterialTextsResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.GetObjectMaterialTextsResponse>;

  getObjectMaterialTexts(
    request: objects_objects_pb.GetObjectMaterialTextsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.GetObjectMaterialTextsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts',
        request,
        metadata || {},
        this.methodInfoGetObjectMaterialTexts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts',
    request,
    metadata || {},
    this.methodInfoGetObjectMaterialTexts);
  }

  methodInfoDeleteObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.DeleteObjectMaterialTextResponse,
    (request: objects_objects_pb.DeleteObjectMaterialTextRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.DeleteObjectMaterialTextResponse.deserializeBinary
  );

  deleteObjectMaterialText(
    request: objects_objects_pb.DeleteObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.DeleteObjectMaterialTextResponse>;

  deleteObjectMaterialText(
    request: objects_objects_pb.DeleteObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectMaterialTextResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.DeleteObjectMaterialTextResponse>;

  deleteObjectMaterialText(
    request: objects_objects_pb.DeleteObjectMaterialTextRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteObjectMaterialTextResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText',
        request,
        metadata || {},
        this.methodInfoDeleteObjectMaterialText,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText',
    request,
    metadata || {},
    this.methodInfoDeleteObjectMaterialText);
  }

  methodInfoAddRemoveBuilding = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.AddRemoveBuildingResponse,
    (request: objects_objects_pb.AddRemoveBuildingRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.AddRemoveBuildingResponse.deserializeBinary
  );

  addRemoveBuilding(
    request: objects_objects_pb.AddRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.AddRemoveBuildingResponse>;

  addRemoveBuilding(
    request: objects_objects_pb.AddRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.AddRemoveBuildingResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.AddRemoveBuildingResponse>;

  addRemoveBuilding(
    request: objects_objects_pb.AddRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.AddRemoveBuildingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/AddRemoveBuilding',
        request,
        metadata || {},
        this.methodInfoAddRemoveBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/AddRemoveBuilding',
    request,
    metadata || {},
    this.methodInfoAddRemoveBuilding);
  }

  methodInfoGetRemovedBuildings = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.GetRemovedBuildingsResponse,
    (request: objects_objects_pb.GetRemovedBuildingsRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.GetRemovedBuildingsResponse.deserializeBinary
  );

  getRemovedBuildings(
    request: objects_objects_pb.GetRemovedBuildingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.GetRemovedBuildingsResponse>;

  getRemovedBuildings(
    request: objects_objects_pb.GetRemovedBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.GetRemovedBuildingsResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.GetRemovedBuildingsResponse>;

  getRemovedBuildings(
    request: objects_objects_pb.GetRemovedBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.GetRemovedBuildingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/GetRemovedBuildings',
        request,
        metadata || {},
        this.methodInfoGetRemovedBuildings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/GetRemovedBuildings',
    request,
    metadata || {},
    this.methodInfoGetRemovedBuildings);
  }

  methodInfoDeleteRemoveBuilding = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.DeleteRemoveBuildingResponse,
    (request: objects_objects_pb.DeleteRemoveBuildingRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.DeleteRemoveBuildingResponse.deserializeBinary
  );

  deleteRemoveBuilding(
    request: objects_objects_pb.DeleteRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null): Promise<objects_objects_pb.DeleteRemoveBuildingResponse>;

  deleteRemoveBuilding(
    request: objects_objects_pb.DeleteRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteRemoveBuildingResponse) => void): grpcWeb.ClientReadableStream<objects_objects_pb.DeleteRemoveBuildingResponse>;

  deleteRemoveBuilding(
    request: objects_objects_pb.DeleteRemoveBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: objects_objects_pb.DeleteRemoveBuildingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.objects.MruVObjectsService/DeleteRemoveBuilding',
        request,
        metadata || {},
        this.methodInfoDeleteRemoveBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.objects.MruVObjectsService/DeleteRemoveBuilding',
    request,
    metadata || {},
    this.methodInfoDeleteRemoveBuilding);
  }

  methodInfoFetchAllObjects = new grpcWeb.AbstractClientBase.MethodInfo(
    objects_objects_pb.FetchAllObjectsResponse,
    (request: objects_objects_pb.FetchAllObjectsRequest) => {
      return request.serializeBinary();
    },
    objects_objects_pb.FetchAllObjectsResponse.deserializeBinary
  );

  fetchAllObjects(
    request: objects_objects_pb.FetchAllObjectsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.objects.MruVObjectsService/FetchAllObjects',
      request,
      metadata || {},
      this.methodInfoFetchAllObjects);
  }

}

