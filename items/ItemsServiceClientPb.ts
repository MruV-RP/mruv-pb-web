/**
 * @fileoverview gRPC-Web generated client stub for mruv.items
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as items_items_model_pb from '../items/items_model_pb';
import * as common_spatial_pb from '../common/spatial_pb';

import {
  GetContainerItemsRequest,
  GetContainerItemsResponse,
  GetContainerTypesRequest,
  GetContainerTypesResponse,
  GetContainersRequest,
  GetContainersResponse,
  GetItemTypesRequest,
  GetItemTypesResponse,
  GetItemsRequest,
  GetItemsResponse,
  GetNearestItemsRequest,
  GetNearestItemsResponse,
  PullItemRequest,
  PutItemRequest,
  PutItemResponse,
  SortItemsRequest,
  SortItemsResponse,
  UseItemRequest,
  UseItemResponse} from './items_pb';

export class MruVItemServiceClient {
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

  methodInfoCreateItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ItemID,
    (request: items_items_model_pb.Item) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ItemID.deserializeBinary
  );

  createItem(
    request: items_items_model_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/CreateItem',
      request,
      metadata || {},
      this.methodInfoCreateItem,
      callback);
  }

  methodInfoGetItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.Item,
    (request: items_items_model_pb.ItemID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.Item.deserializeBinary
  );

  getItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetItem',
      request,
      metadata || {},
      this.methodInfoGetItem,
      callback);
  }

  methodInfoDeleteItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ItemID,
    (request: items_items_model_pb.ItemID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ItemID.deserializeBinary
  );

  deleteItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/DeleteItem',
      request,
      metadata || {},
      this.methodInfoDeleteItem,
      callback);
  }

  methodInfoGetItems = new grpcWeb.AbstractClientBase.MethodInfo(
    GetItemsResponse,
    (request: GetItemsRequest) => {
      return request.serializeBinary();
    },
    GetItemsResponse.deserializeBinary
  );

  getItems(
    request: GetItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetItems',
      request,
      metadata || {},
      this.methodInfoGetItems,
      callback);
  }

  methodInfoCreateItemType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ItemTypeID,
    (request: items_items_model_pb.ItemType) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ItemTypeID.deserializeBinary
  );

  createItemType(
    request: items_items_model_pb.ItemType,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/CreateItemType',
      request,
      metadata || {},
      this.methodInfoCreateItemType,
      callback);
  }

  methodInfoGetItemType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ItemType,
    (request: items_items_model_pb.ItemTypeID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ItemType.deserializeBinary
  );

  getItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetItemType',
      request,
      metadata || {},
      this.methodInfoGetItemType,
      callback);
  }

  methodInfoDeleteItemType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ItemTypeID,
    (request: items_items_model_pb.ItemTypeID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ItemTypeID.deserializeBinary
  );

  deleteItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/DeleteItemType',
      request,
      metadata || {},
      this.methodInfoDeleteItemType,
      callback);
  }

  methodInfoGetItemTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    GetItemTypesResponse,
    (request: GetItemTypesRequest) => {
      return request.serializeBinary();
    },
    GetItemTypesResponse.deserializeBinary
  );

  getItemTypes(
    request: GetItemTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetItemTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetItemTypes',
      request,
      metadata || {},
      this.methodInfoGetItemTypes,
      callback);
  }

  methodInfoCreateContainer = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ContainerID,
    (request: items_items_model_pb.Container) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ContainerID.deserializeBinary
  );

  createContainer(
    request: items_items_model_pb.Container,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/CreateContainer',
      request,
      metadata || {},
      this.methodInfoCreateContainer,
      callback);
  }

  methodInfoGetContainer = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.Container,
    (request: items_items_model_pb.ContainerID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.Container.deserializeBinary
  );

  getContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Container) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetContainer',
      request,
      metadata || {},
      this.methodInfoGetContainer,
      callback);
  }

  methodInfoDeleteContainer = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ContainerID,
    (request: items_items_model_pb.ContainerID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ContainerID.deserializeBinary
  );

  deleteContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/DeleteContainer',
      request,
      metadata || {},
      this.methodInfoDeleteContainer,
      callback);
  }

  methodInfoGetContainers = new grpcWeb.AbstractClientBase.MethodInfo(
    GetContainersResponse,
    (request: GetContainersRequest) => {
      return request.serializeBinary();
    },
    GetContainersResponse.deserializeBinary
  );

  getContainers(
    request: GetContainersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetContainersResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetContainers',
      request,
      metadata || {},
      this.methodInfoGetContainers,
      callback);
  }

  methodInfoCreateContainerType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ContainerTypeID,
    (request: items_items_model_pb.ContainerType) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ContainerTypeID.deserializeBinary
  );

  createContainerType(
    request: items_items_model_pb.ContainerType,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/CreateContainerType',
      request,
      metadata || {},
      this.methodInfoCreateContainerType,
      callback);
  }

  methodInfoGetContainerType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ContainerType,
    (request: items_items_model_pb.ContainerTypeID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ContainerType.deserializeBinary
  );

  getContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerType) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetContainerType',
      request,
      metadata || {},
      this.methodInfoGetContainerType,
      callback);
  }

  methodInfoDeleteContainerType = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.ContainerTypeID,
    (request: items_items_model_pb.ContainerTypeID) => {
      return request.serializeBinary();
    },
    items_items_model_pb.ContainerTypeID.deserializeBinary
  );

  deleteContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/DeleteContainerType',
      request,
      metadata || {},
      this.methodInfoDeleteContainerType,
      callback);
  }

  methodInfoGetContainerTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    GetContainerTypesResponse,
    (request: GetContainerTypesRequest) => {
      return request.serializeBinary();
    },
    GetContainerTypesResponse.deserializeBinary
  );

  getContainerTypes(
    request: GetContainerTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetContainerTypesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetContainerTypes',
      request,
      metadata || {},
      this.methodInfoGetContainerTypes,
      callback);
  }

  methodInfoGetContainerItems = new grpcWeb.AbstractClientBase.MethodInfo(
    GetContainerItemsResponse,
    (request: GetContainerItemsRequest) => {
      return request.serializeBinary();
    },
    GetContainerItemsResponse.deserializeBinary
  );

  getContainerItems(
    request: GetContainerItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetContainerItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetContainerItems',
      request,
      metadata || {},
      this.methodInfoGetContainerItems,
      callback);
  }

  methodInfoPullItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.Item,
    (request: PullItemRequest) => {
      return request.serializeBinary();
    },
    items_items_model_pb.Item.deserializeBinary
  );

  pullItem(
    request: PullItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/PullItem',
      request,
      metadata || {},
      this.methodInfoPullItem,
      callback);
  }

  methodInfoPutItem = new grpcWeb.AbstractClientBase.MethodInfo(
    PutItemResponse,
    (request: PutItemRequest) => {
      return request.serializeBinary();
    },
    PutItemResponse.deserializeBinary
  );

  putItem(
    request: PutItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PutItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/PutItem',
      request,
      metadata || {},
      this.methodInfoPutItem,
      callback);
  }

  methodInfoSortItems = new grpcWeb.AbstractClientBase.MethodInfo(
    SortItemsResponse,
    (request: SortItemsRequest) => {
      return request.serializeBinary();
    },
    SortItemsResponse.deserializeBinary
  );

  sortItems(
    request: SortItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SortItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/SortItems',
      request,
      metadata || {},
      this.methodInfoSortItems,
      callback);
  }

  methodInfoGetNearestItems = new grpcWeb.AbstractClientBase.MethodInfo(
    GetNearestItemsResponse,
    (request: GetNearestItemsRequest) => {
      return request.serializeBinary();
    },
    GetNearestItemsResponse.deserializeBinary
  );

  getNearestItems(
    request: GetNearestItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetNearestItemsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/GetNearestItems',
      request,
      metadata || {},
      this.methodInfoGetNearestItems,
      callback);
  }

  methodInfoUseItem = new grpcWeb.AbstractClientBase.MethodInfo(
    UseItemResponse,
    (request: UseItemRequest) => {
      return request.serializeBinary();
    },
    UseItemResponse.deserializeBinary
  );

  useItem(
    request: UseItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UseItemResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.items.MruVItemService/UseItem',
      request,
      metadata || {},
      this.methodInfoUseItem,
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
        '/mruv.items.MruVItemService/GetServiceStatus',
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
        '/mruv.items.MruVItemService/GetServiceVersion',
      request,
      metadata || {},
      this.methodInfoGetServiceVersion,
      callback);
  }

}

