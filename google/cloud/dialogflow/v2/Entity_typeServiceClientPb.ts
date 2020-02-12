/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  BatchCreateEntitiesRequest,
  BatchDeleteEntitiesRequest,
  BatchDeleteEntityTypesRequest,
  BatchUpdateEntitiesRequest,
  BatchUpdateEntityTypesRequest,
  CreateEntityTypeRequest,
  DeleteEntityTypeRequest,
  EntityType,
  GetEntityTypeRequest,
  ListEntityTypesRequest,
  ListEntityTypesResponse,
  UpdateEntityTypeRequest} from './entity_type_pb';

export class EntityTypesClient {
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

  methodInfoListEntityTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    ListEntityTypesResponse,
    (request: ListEntityTypesRequest) => {
      return request.serializeBinary();
    },
    ListEntityTypesResponse.deserializeBinary
  );

  listEntityTypes(
    request: ListEntityTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListEntityTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/ListEntityTypes',
      request,
      metadata || {},
      this.methodInfoListEntityTypes,
      callback);
  }

  methodInfoGetEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    EntityType,
    (request: GetEntityTypeRequest) => {
      return request.serializeBinary();
    },
    EntityType.deserializeBinary
  );

  getEntityType(
    request: GetEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/GetEntityType',
      request,
      metadata || {},
      this.methodInfoGetEntityType,
      callback);
  }

  methodInfoCreateEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    EntityType,
    (request: CreateEntityTypeRequest) => {
      return request.serializeBinary();
    },
    EntityType.deserializeBinary
  );

  createEntityType(
    request: CreateEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/CreateEntityType',
      request,
      metadata || {},
      this.methodInfoCreateEntityType,
      callback);
  }

  methodInfoUpdateEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    EntityType,
    (request: UpdateEntityTypeRequest) => {
      return request.serializeBinary();
    },
    EntityType.deserializeBinary
  );

  updateEntityType(
    request: UpdateEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EntityType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/UpdateEntityType',
      request,
      metadata || {},
      this.methodInfoUpdateEntityType,
      callback);
  }

  methodInfoDeleteEntityType = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteEntityTypeRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteEntityType(
    request: DeleteEntityTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/DeleteEntityType',
      request,
      metadata || {},
      this.methodInfoDeleteEntityType,
      callback);
  }

  methodInfoBatchUpdateEntityTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchUpdateEntityTypesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchUpdateEntityTypes(
    request: BatchUpdateEntityTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntityTypes',
      request,
      metadata || {},
      this.methodInfoBatchUpdateEntityTypes,
      callback);
  }

  methodInfoBatchDeleteEntityTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchDeleteEntityTypesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchDeleteEntityTypes(
    request: BatchDeleteEntityTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntityTypes',
      request,
      metadata || {},
      this.methodInfoBatchDeleteEntityTypes,
      callback);
  }

  methodInfoBatchCreateEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchCreateEntitiesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchCreateEntities(
    request: BatchCreateEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/BatchCreateEntities',
      request,
      metadata || {},
      this.methodInfoBatchCreateEntities,
      callback);
  }

  methodInfoBatchUpdateEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchUpdateEntitiesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchUpdateEntities(
    request: BatchUpdateEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/BatchUpdateEntities',
      request,
      metadata || {},
      this.methodInfoBatchUpdateEntities,
      callback);
  }

  methodInfoBatchDeleteEntities = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchDeleteEntitiesRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchDeleteEntities(
    request: BatchDeleteEntitiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dialogflow.v2.EntityTypes/BatchDeleteEntities',
      request,
      metadata || {},
      this.methodInfoBatchDeleteEntities,
      callback);
  }

}

