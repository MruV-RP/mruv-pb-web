"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.items
 * @enhanceable
 * @public
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MruVItemServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var common_health_pb = __importStar(require("../common/health_pb"));
var items_items_model_pb = __importStar(require("../items/items_model_pb"));
var items_items_pb = __importStar(require("../items/items_pb"));
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
        this.methodInfoGetItems = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetItemsResponse.deserializeBinary);
        this.methodInfoCreateItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemTypeID.deserializeBinary);
        this.methodInfoGetItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemType, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemType.deserializeBinary);
        this.methodInfoDeleteItemType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ItemTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ItemTypeID.deserializeBinary);
        this.methodInfoGetItemTypes = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetItemTypesResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetItemTypesResponse.deserializeBinary);
        this.methodInfoCreateContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerID.deserializeBinary);
        this.methodInfoGetContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.Container, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.Container.deserializeBinary);
        this.methodInfoDeleteContainer = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerID.deserializeBinary);
        this.methodInfoGetContainers = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetContainersResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetContainersResponse.deserializeBinary);
        this.methodInfoCreateContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerTypeID.deserializeBinary);
        this.methodInfoGetContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerType, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerType.deserializeBinary);
        this.methodInfoDeleteContainerType = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.ContainerTypeID, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.ContainerTypeID.deserializeBinary);
        this.methodInfoGetContainerTypes = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetContainerTypesResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetContainerTypesResponse.deserializeBinary);
        this.methodInfoGetContainerItems = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetContainerItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetContainerItemsResponse.deserializeBinary);
        this.methodInfoPullItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_model_pb.Item, function (request) {
            return request.serializeBinary();
        }, items_items_model_pb.Item.deserializeBinary);
        this.methodInfoPutItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.PutItemResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.PutItemResponse.deserializeBinary);
        this.methodInfoSortItems = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.SortItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.SortItemsResponse.deserializeBinary);
        this.methodInfoGetNearestItems = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.GetNearestItemsResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.GetNearestItemsResponse.deserializeBinary);
        this.methodInfoUseItem = new grpcWeb.AbstractClientBase.MethodInfo(items_items_pb.UseItemResponse, function (request) {
            return request.serializeBinary();
        }, items_items_pb.UseItemResponse.deserializeBinary);
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
        options['format'] = 'binary';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    MruVItemServiceClient.prototype.createItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/CreateItem', request, metadata || {}, this.methodInfoCreateItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/CreateItem', request, metadata || {}, this.methodInfoCreateItem);
    };
    MruVItemServiceClient.prototype.getItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetItem', request, metadata || {}, this.methodInfoGetItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetItem', request, metadata || {}, this.methodInfoGetItem);
    };
    MruVItemServiceClient.prototype.deleteItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/DeleteItem', request, metadata || {}, this.methodInfoDeleteItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/DeleteItem', request, metadata || {}, this.methodInfoDeleteItem);
    };
    MruVItemServiceClient.prototype.getItems = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetItems', request, metadata || {}, this.methodInfoGetItems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetItems', request, metadata || {}, this.methodInfoGetItems);
    };
    MruVItemServiceClient.prototype.createItemType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/CreateItemType', request, metadata || {}, this.methodInfoCreateItemType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/CreateItemType', request, metadata || {}, this.methodInfoCreateItemType);
    };
    MruVItemServiceClient.prototype.getItemType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetItemType', request, metadata || {}, this.methodInfoGetItemType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetItemType', request, metadata || {}, this.methodInfoGetItemType);
    };
    MruVItemServiceClient.prototype.deleteItemType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/DeleteItemType', request, metadata || {}, this.methodInfoDeleteItemType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/DeleteItemType', request, metadata || {}, this.methodInfoDeleteItemType);
    };
    MruVItemServiceClient.prototype.getItemTypes = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetItemTypes', request, metadata || {}, this.methodInfoGetItemTypes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetItemTypes', request, metadata || {}, this.methodInfoGetItemTypes);
    };
    MruVItemServiceClient.prototype.createContainer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/CreateContainer', request, metadata || {}, this.methodInfoCreateContainer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/CreateContainer', request, metadata || {}, this.methodInfoCreateContainer);
    };
    MruVItemServiceClient.prototype.getContainer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetContainer', request, metadata || {}, this.methodInfoGetContainer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetContainer', request, metadata || {}, this.methodInfoGetContainer);
    };
    MruVItemServiceClient.prototype.deleteContainer = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/DeleteContainer', request, metadata || {}, this.methodInfoDeleteContainer, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/DeleteContainer', request, metadata || {}, this.methodInfoDeleteContainer);
    };
    MruVItemServiceClient.prototype.getContainers = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetContainers', request, metadata || {}, this.methodInfoGetContainers, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetContainers', request, metadata || {}, this.methodInfoGetContainers);
    };
    MruVItemServiceClient.prototype.createContainerType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/CreateContainerType', request, metadata || {}, this.methodInfoCreateContainerType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/CreateContainerType', request, metadata || {}, this.methodInfoCreateContainerType);
    };
    MruVItemServiceClient.prototype.getContainerType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetContainerType', request, metadata || {}, this.methodInfoGetContainerType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetContainerType', request, metadata || {}, this.methodInfoGetContainerType);
    };
    MruVItemServiceClient.prototype.deleteContainerType = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/DeleteContainerType', request, metadata || {}, this.methodInfoDeleteContainerType, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/DeleteContainerType', request, metadata || {}, this.methodInfoDeleteContainerType);
    };
    MruVItemServiceClient.prototype.getContainerTypes = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetContainerTypes', request, metadata || {}, this.methodInfoGetContainerTypes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetContainerTypes', request, metadata || {}, this.methodInfoGetContainerTypes);
    };
    MruVItemServiceClient.prototype.getContainerItems = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetContainerItems', request, metadata || {}, this.methodInfoGetContainerItems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetContainerItems', request, metadata || {}, this.methodInfoGetContainerItems);
    };
    MruVItemServiceClient.prototype.pullItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/PullItem', request, metadata || {}, this.methodInfoPullItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/PullItem', request, metadata || {}, this.methodInfoPullItem);
    };
    MruVItemServiceClient.prototype.putItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/PutItem', request, metadata || {}, this.methodInfoPutItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/PutItem', request, metadata || {}, this.methodInfoPutItem);
    };
    MruVItemServiceClient.prototype.sortItems = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/SortItems', request, metadata || {}, this.methodInfoSortItems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/SortItems', request, metadata || {}, this.methodInfoSortItems);
    };
    MruVItemServiceClient.prototype.getNearestItems = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetNearestItems', request, metadata || {}, this.methodInfoGetNearestItems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetNearestItems', request, metadata || {}, this.methodInfoGetNearestItems);
    };
    MruVItemServiceClient.prototype.useItem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/UseItem', request, metadata || {}, this.methodInfoUseItem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/UseItem', request, metadata || {}, this.methodInfoUseItem);
    };
    MruVItemServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus);
    };
    MruVItemServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.items.MruVItemService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.items.MruVItemService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion);
    };
    return MruVItemServiceClient;
}());
exports.MruVItemServiceClient = MruVItemServiceClient;
