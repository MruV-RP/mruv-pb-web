/**
 * @fileoverview gRPC-Web generated client stub for mruv.items
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as common_health_pb from '../common/health_pb';
import * as items_items_model_pb from '../items/items_model_pb';
import * as items_items_pb from '../items/items_pb';


export class MruVItemServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ItemID>;

  createItem(
    request: items_items_model_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ItemID>;

  createItem(
    request: items_items_model_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/CreateItem',
        request,
        metadata || {},
        this.methodInfoCreateItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/CreateItem',
    request,
    metadata || {},
    this.methodInfoCreateItem);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.Item>;

  getItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void): grpcWeb.ClientReadableStream<items_items_model_pb.Item>;

  getItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetItem',
        request,
        metadata || {},
        this.methodInfoGetItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetItem',
    request,
    metadata || {},
    this.methodInfoGetItem);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ItemID>;

  deleteItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ItemID>;

  deleteItem(
    request: items_items_model_pb.ItemID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/DeleteItem',
        request,
        metadata || {},
        this.methodInfoDeleteItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/DeleteItem',
    request,
    metadata || {},
    this.methodInfoDeleteItem);
  }

  methodInfoGetItems = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetItemsResponse,
    (request: items_items_pb.GetItemsRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetItemsResponse.deserializeBinary
  );

  getItems(
    request: items_items_pb.GetItemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetItemsResponse>;

  getItems(
    request: items_items_pb.GetItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetItemsResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetItemsResponse>;

  getItems(
    request: items_items_pb.GetItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetItems',
        request,
        metadata || {},
        this.methodInfoGetItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetItems',
    request,
    metadata || {},
    this.methodInfoGetItems);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ItemTypeID>;

  createItemType(
    request: items_items_model_pb.ItemType,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ItemTypeID>;

  createItemType(
    request: items_items_model_pb.ItemType,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/CreateItemType',
        request,
        metadata || {},
        this.methodInfoCreateItemType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/CreateItemType',
    request,
    metadata || {},
    this.methodInfoCreateItemType);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ItemType>;

  getItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemType) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ItemType>;

  getItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemType) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetItemType',
        request,
        metadata || {},
        this.methodInfoGetItemType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetItemType',
    request,
    metadata || {},
    this.methodInfoGetItemType);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ItemTypeID>;

  deleteItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ItemTypeID>;

  deleteItemType(
    request: items_items_model_pb.ItemTypeID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ItemTypeID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/DeleteItemType',
        request,
        metadata || {},
        this.methodInfoDeleteItemType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/DeleteItemType',
    request,
    metadata || {},
    this.methodInfoDeleteItemType);
  }

  methodInfoGetItemTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetItemTypesResponse,
    (request: items_items_pb.GetItemTypesRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetItemTypesResponse.deserializeBinary
  );

  getItemTypes(
    request: items_items_pb.GetItemTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetItemTypesResponse>;

  getItemTypes(
    request: items_items_pb.GetItemTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetItemTypesResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetItemTypesResponse>;

  getItemTypes(
    request: items_items_pb.GetItemTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetItemTypesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetItemTypes',
        request,
        metadata || {},
        this.methodInfoGetItemTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetItemTypes',
    request,
    metadata || {},
    this.methodInfoGetItemTypes);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ContainerID>;

  createContainer(
    request: items_items_model_pb.Container,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ContainerID>;

  createContainer(
    request: items_items_model_pb.Container,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/CreateContainer',
        request,
        metadata || {},
        this.methodInfoCreateContainer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/CreateContainer',
    request,
    metadata || {},
    this.methodInfoCreateContainer);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.Container>;

  getContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Container) => void): grpcWeb.ClientReadableStream<items_items_model_pb.Container>;

  getContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.Container) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetContainer',
        request,
        metadata || {},
        this.methodInfoGetContainer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetContainer',
    request,
    metadata || {},
    this.methodInfoGetContainer);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ContainerID>;

  deleteContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ContainerID>;

  deleteContainer(
    request: items_items_model_pb.ContainerID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/DeleteContainer',
        request,
        metadata || {},
        this.methodInfoDeleteContainer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/DeleteContainer',
    request,
    metadata || {},
    this.methodInfoDeleteContainer);
  }

  methodInfoGetContainers = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetContainersResponse,
    (request: items_items_pb.GetContainersRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetContainersResponse.deserializeBinary
  );

  getContainers(
    request: items_items_pb.GetContainersRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetContainersResponse>;

  getContainers(
    request: items_items_pb.GetContainersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetContainersResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetContainersResponse>;

  getContainers(
    request: items_items_pb.GetContainersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetContainersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetContainers',
        request,
        metadata || {},
        this.methodInfoGetContainers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetContainers',
    request,
    metadata || {},
    this.methodInfoGetContainers);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ContainerTypeID>;

  createContainerType(
    request: items_items_model_pb.ContainerType,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ContainerTypeID>;

  createContainerType(
    request: items_items_model_pb.ContainerType,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/CreateContainerType',
        request,
        metadata || {},
        this.methodInfoCreateContainerType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/CreateContainerType',
    request,
    metadata || {},
    this.methodInfoCreateContainerType);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ContainerType>;

  getContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerType) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ContainerType>;

  getContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerType) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetContainerType',
        request,
        metadata || {},
        this.methodInfoGetContainerType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetContainerType',
    request,
    metadata || {},
    this.methodInfoGetContainerType);
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
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.ContainerTypeID>;

  deleteContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void): grpcWeb.ClientReadableStream<items_items_model_pb.ContainerTypeID>;

  deleteContainerType(
    request: items_items_model_pb.ContainerTypeID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.ContainerTypeID) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/DeleteContainerType',
        request,
        metadata || {},
        this.methodInfoDeleteContainerType,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/DeleteContainerType',
    request,
    metadata || {},
    this.methodInfoDeleteContainerType);
  }

  methodInfoGetContainerTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetContainerTypesResponse,
    (request: items_items_pb.GetContainerTypesRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetContainerTypesResponse.deserializeBinary
  );

  getContainerTypes(
    request: items_items_pb.GetContainerTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetContainerTypesResponse>;

  getContainerTypes(
    request: items_items_pb.GetContainerTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetContainerTypesResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetContainerTypesResponse>;

  getContainerTypes(
    request: items_items_pb.GetContainerTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetContainerTypesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetContainerTypes',
        request,
        metadata || {},
        this.methodInfoGetContainerTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetContainerTypes',
    request,
    metadata || {},
    this.methodInfoGetContainerTypes);
  }

  methodInfoGetContainerItems = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetContainerItemsResponse,
    (request: items_items_pb.GetContainerItemsRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetContainerItemsResponse.deserializeBinary
  );

  getContainerItems(
    request: items_items_pb.GetContainerItemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetContainerItemsResponse>;

  getContainerItems(
    request: items_items_pb.GetContainerItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetContainerItemsResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetContainerItemsResponse>;

  getContainerItems(
    request: items_items_pb.GetContainerItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetContainerItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetContainerItems',
        request,
        metadata || {},
        this.methodInfoGetContainerItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetContainerItems',
    request,
    metadata || {},
    this.methodInfoGetContainerItems);
  }

  methodInfoPullItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_model_pb.Item,
    (request: items_items_pb.PullItemRequest) => {
      return request.serializeBinary();
    },
    items_items_model_pb.Item.deserializeBinary
  );

  pullItem(
    request: items_items_pb.PullItemRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_model_pb.Item>;

  pullItem(
    request: items_items_pb.PullItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void): grpcWeb.ClientReadableStream<items_items_model_pb.Item>;

  pullItem(
    request: items_items_pb.PullItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_model_pb.Item) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/PullItem',
        request,
        metadata || {},
        this.methodInfoPullItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/PullItem',
    request,
    metadata || {},
    this.methodInfoPullItem);
  }

  methodInfoPutItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.PutItemResponse,
    (request: items_items_pb.PutItemRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.PutItemResponse.deserializeBinary
  );

  putItem(
    request: items_items_pb.PutItemRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.PutItemResponse>;

  putItem(
    request: items_items_pb.PutItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.PutItemResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.PutItemResponse>;

  putItem(
    request: items_items_pb.PutItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.PutItemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/PutItem',
        request,
        metadata || {},
        this.methodInfoPutItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/PutItem',
    request,
    metadata || {},
    this.methodInfoPutItem);
  }

  methodInfoSortItems = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.SortItemsResponse,
    (request: items_items_pb.SortItemsRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.SortItemsResponse.deserializeBinary
  );

  sortItems(
    request: items_items_pb.SortItemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.SortItemsResponse>;

  sortItems(
    request: items_items_pb.SortItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.SortItemsResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.SortItemsResponse>;

  sortItems(
    request: items_items_pb.SortItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.SortItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/SortItems',
        request,
        metadata || {},
        this.methodInfoSortItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/SortItems',
    request,
    metadata || {},
    this.methodInfoSortItems);
  }

  methodInfoGetNearestItems = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.GetNearestItemsResponse,
    (request: items_items_pb.GetNearestItemsRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.GetNearestItemsResponse.deserializeBinary
  );

  getNearestItems(
    request: items_items_pb.GetNearestItemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.GetNearestItemsResponse>;

  getNearestItems(
    request: items_items_pb.GetNearestItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.GetNearestItemsResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.GetNearestItemsResponse>;

  getNearestItems(
    request: items_items_pb.GetNearestItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.GetNearestItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/GetNearestItems',
        request,
        metadata || {},
        this.methodInfoGetNearestItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetNearestItems',
    request,
    metadata || {},
    this.methodInfoGetNearestItems);
  }

  methodInfoUseItem = new grpcWeb.AbstractClientBase.MethodInfo(
    items_items_pb.UseItemResponse,
    (request: items_items_pb.UseItemRequest) => {
      return request.serializeBinary();
    },
    items_items_pb.UseItemResponse.deserializeBinary
  );

  useItem(
    request: items_items_pb.UseItemRequest,
    metadata: grpcWeb.Metadata | null): Promise<items_items_pb.UseItemResponse>;

  useItem(
    request: items_items_pb.UseItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: items_items_pb.UseItemResponse) => void): grpcWeb.ClientReadableStream<items_items_pb.UseItemResponse>;

  useItem(
    request: items_items_pb.UseItemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: items_items_pb.UseItemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.items.MruVItemService/UseItem',
        request,
        metadata || {},
        this.methodInfoUseItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/UseItem',
    request,
    metadata || {},
    this.methodInfoUseItem);
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
          '/mruv.items.MruVItemService/GetServiceStatus',
        request,
        metadata || {},
        this.methodInfoGetServiceStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetServiceStatus',
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
          '/mruv.items.MruVItemService/GetServiceVersion',
        request,
        metadata || {},
        this.methodInfoGetServiceVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.items.MruVItemService/GetServiceVersion',
    request,
    metadata || {},
    this.methodInfoGetServiceVersion);
  }

}

