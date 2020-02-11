"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv
 * @enhanceable
 * @public
 */
exports.__esModule = true;
// GENERATED CODE -- DO NOT EDIT!
var grpcWeb = require("grpc-web");
var common_health_pb = require("../common/health_pb");
var items_items_model_pb = require("../items/items_model_pb");
var items_pb_1 = require("./items_pb");
var MruVItemServiceClient = /** @class */ (function () {
    function MruVItemServiceClient(hostname, credentials, options) {
        this.methodInfoCreateItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemID.deserializeBinary);
        this.methodInfoGetItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.Item, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.Item.deserializeBinary);
        this.methodInfoDeleteItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemID.deserializeBinary);
        this.methodInfoGetItems = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetItemsResponse.deserializeBinary);
        this.methodInfoCreateItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemTypeID.deserializeBinary);
        this.methodInfoGetItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemType, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemType.deserializeBinary);
        this.methodInfoDeleteItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemTypeID.deserializeBinary);
        this.methodInfoGetItemTypes = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetItemTypesResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetItemTypesResponse.deserializeBinary);
        this.methodInfoCreateContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerID.deserializeBinary);
        this.methodInfoGetContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.Container, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.Container.deserializeBinary);
        this.methodInfoDeleteContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerID.deserializeBinary);
        this.methodInfoGetContainers = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetContainersResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetContainersResponse.deserializeBinary);
        this.methodInfoCreateContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerTypeID.deserializeBinary);
        this.methodInfoGetContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerType, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerType.deserializeBinary);
        this.methodInfoDeleteContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerTypeID.deserializeBinary);
        this.methodInfoGetContainerTypes = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetContainerTypesResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetContainerTypesResponse.deserializeBinary);
        this.methodInfoGetContainerItems = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetContainerItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetContainerItemsResponse.deserializeBinary);
        this.methodInfoPullItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.Item, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.Item.deserializeBinary);
        this.methodInfoPutItem = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.PutItemResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.PutItemResponse.deserializeBinary);
        this.methodInfoSortItems = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.SortItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.SortItemsResponse.deserializeBinary);
        this.methodInfoGetNearestItems = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.GetNearestItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.GetNearestItemsResponse.deserializeBinary);
        this.methodInfoUseItem = new grpcWeb.AbstractClientBase.MethodInfo(items_pb_1.UseItemResponse, function (request) {
            return request.serializeBinary();
        }, items_pb_1.UseItemResponse.deserializeBinary);
        this.methodInfoGetServiceStatus = new grpcWeb.AbstractClientBase.MethodInfo(common_health_pb.ServiceStatusResponse, function (request) {
            return request.serializeBinary();
        }, common_health_pb.ServiceStatusResponse.deserializeBinary);
        this.methodInfoGetServiceVersion = new grpcWeb.AbstractClientBase.MethodInfo(common_health_pb.VersionResponse, function (request) {
            return request.serializeBinary();
        }, common_health_pb.VersionResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVItemServiceClient.prototype.createItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/CreateItem', request, metadata || {}, this.methodInfoCreateItem, callback);
    };
    MruVItemServiceClient.prototype.getItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetItem', request, metadata || {}, this.methodInfoGetItem, callback);
    };
    MruVItemServiceClient.prototype.deleteItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/DeleteItem', request, metadata || {}, this.methodInfoDeleteItem, callback);
    };
    MruVItemServiceClient.prototype.getItems = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetItems', request, metadata || {}, this.methodInfoGetItems, callback);
    };
    MruVItemServiceClient.prototype.createItemType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/CreateItemType', request, metadata || {}, this.methodInfoCreateItemType, callback);
    };
    MruVItemServiceClient.prototype.getItemType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetItemType', request, metadata || {}, this.methodInfoGetItemType, callback);
    };
    MruVItemServiceClient.prototype.deleteItemType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/DeleteItemType', request, metadata || {}, this.methodInfoDeleteItemType, callback);
    };
    MruVItemServiceClient.prototype.getItemTypes = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetItemTypes', request, metadata || {}, this.methodInfoGetItemTypes, callback);
    };
    MruVItemServiceClient.prototype.createContainer = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/CreateContainer', request, metadata || {}, this.methodInfoCreateContainer, callback);
    };
    MruVItemServiceClient.prototype.getContainer = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetContainer', request, metadata || {}, this.methodInfoGetContainer, callback);
    };
    MruVItemServiceClient.prototype.deleteContainer = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/DeleteContainer', request, metadata || {}, this.methodInfoDeleteContainer, callback);
    };
    MruVItemServiceClient.prototype.getContainers = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetContainers', request, metadata || {}, this.methodInfoGetContainers, callback);
    };
    MruVItemServiceClient.prototype.createContainerType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/CreateContainerType', request, metadata || {}, this.methodInfoCreateContainerType, callback);
    };
    MruVItemServiceClient.prototype.getContainerType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetContainerType', request, metadata || {}, this.methodInfoGetContainerType, callback);
    };
    MruVItemServiceClient.prototype.deleteContainerType = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/DeleteContainerType', request, metadata || {}, this.methodInfoDeleteContainerType, callback);
    };
    MruVItemServiceClient.prototype.getContainerTypes = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetContainerTypes', request, metadata || {}, this.methodInfoGetContainerTypes, callback);
    };
    MruVItemServiceClient.prototype.getContainerItems = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetContainerItems', request, metadata || {}, this.methodInfoGetContainerItems, callback);
    };
    MruVItemServiceClient.prototype.pullItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/PullItem', request, metadata || {}, this.methodInfoPullItem, callback);
    };
    MruVItemServiceClient.prototype.putItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/PutItem', request, metadata || {}, this.methodInfoPutItem, callback);
    };
    MruVItemServiceClient.prototype.sortItems = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/SortItems', request, metadata || {}, this.methodInfoSortItems, callback);
    };
    MruVItemServiceClient.prototype.getNearestItems = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetNearestItems', request, metadata || {}, this.methodInfoGetNearestItems, callback);
    };
    MruVItemServiceClient.prototype.useItem = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/UseItem', request, metadata || {}, this.methodInfoUseItem, callback);
    };
    MruVItemServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
    };
    MruVItemServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVItemService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
    };
    return MruVItemServiceClient;
}());
exports.MruVItemServiceClient = MruVItemServiceClient;
