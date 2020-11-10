"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.objects
 * @enhanceable
 * @public
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var objects_objects_pb = __importStar(require("../objects/objects_pb"));
var MruVObjectsServiceClient = /** @class */ (function () {
    function MruVObjectsServiceClient(hostname, credentials, options) {
        this.methodInfoCreateObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.CreateObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.CreateObjectResponse.deserializeBinary);
        this.methodInfoGetObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.GetObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.GetObjectResponse.deserializeBinary);
        this.methodInfoUpdateObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.UpdateObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.UpdateObjectResponse.deserializeBinary);
        this.methodInfoDeleteObject = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.DeleteObjectResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.DeleteObjectResponse.deserializeBinary);
        this.methodInfoAddObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.AddObjectMaterialResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.AddObjectMaterialResponse.deserializeBinary);
        this.methodInfoGetObjectMaterials = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.GetObjectMaterialsResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.GetObjectMaterialsResponse.deserializeBinary);
        this.methodInfoDeleteObjectMaterial = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.DeleteObjectMaterialResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.DeleteObjectMaterialResponse.deserializeBinary);
        this.methodInfoAddObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.AddObjectMaterialTextResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.AddObjectMaterialTextResponse.deserializeBinary);
        this.methodInfoGetObjectMaterialTexts = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.GetObjectMaterialTextsResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.GetObjectMaterialTextsResponse.deserializeBinary);
        this.methodInfoDeleteObjectMaterialText = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.DeleteObjectMaterialTextResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.DeleteObjectMaterialTextResponse.deserializeBinary);
        this.methodInfoAddRemoveBuilding = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.AddRemoveBuildingResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.AddRemoveBuildingResponse.deserializeBinary);
        this.methodInfoGetRemovedBuildings = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.GetRemovedBuildingsResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.GetRemovedBuildingsResponse.deserializeBinary);
        this.methodInfoDeleteRemoveBuilding = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.DeleteRemoveBuildingResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.DeleteRemoveBuildingResponse.deserializeBinary);
        this.methodInfoFetchAllObjects = new grpcWeb.AbstractClientBase.MethodInfo(objects_objects_pb.FetchAllObjectsResponse, function (request) {
            return request.serializeBinary();
        }, objects_objects_pb.FetchAllObjectsResponse.deserializeBinary);
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
    MruVObjectsServiceClient.prototype.createObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/CreateObject', request, metadata || {}, this.methodInfoCreateObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/CreateObject', request, metadata || {}, this.methodInfoCreateObject);
    };
    MruVObjectsServiceClient.prototype.getObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/GetObject', request, metadata || {}, this.methodInfoGetObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/GetObject', request, metadata || {}, this.methodInfoGetObject);
    };
    MruVObjectsServiceClient.prototype.updateObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/UpdateObject', request, metadata || {}, this.methodInfoUpdateObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/UpdateObject', request, metadata || {}, this.methodInfoUpdateObject);
    };
    MruVObjectsServiceClient.prototype.deleteObject = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/DeleteObject', request, metadata || {}, this.methodInfoDeleteObject, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/DeleteObject', request, metadata || {}, this.methodInfoDeleteObject);
    };
    MruVObjectsServiceClient.prototype.addObjectMaterial = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/AddObjectMaterial', request, metadata || {}, this.methodInfoAddObjectMaterial, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/AddObjectMaterial', request, metadata || {}, this.methodInfoAddObjectMaterial);
    };
    MruVObjectsServiceClient.prototype.getObjectMaterials = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/GetObjectMaterials', request, metadata || {}, this.methodInfoGetObjectMaterials, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/GetObjectMaterials', request, metadata || {}, this.methodInfoGetObjectMaterials);
    };
    MruVObjectsServiceClient.prototype.deleteObjectMaterial = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/DeleteObjectMaterial', request, metadata || {}, this.methodInfoDeleteObjectMaterial, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/DeleteObjectMaterial', request, metadata || {}, this.methodInfoDeleteObjectMaterial);
    };
    MruVObjectsServiceClient.prototype.addObjectMaterialText = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/AddObjectMaterialText', request, metadata || {}, this.methodInfoAddObjectMaterialText, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/AddObjectMaterialText', request, metadata || {}, this.methodInfoAddObjectMaterialText);
    };
    MruVObjectsServiceClient.prototype.getObjectMaterialTexts = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts', request, metadata || {}, this.methodInfoGetObjectMaterialTexts, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/GetObjectMaterialTexts', request, metadata || {}, this.methodInfoGetObjectMaterialTexts);
    };
    MruVObjectsServiceClient.prototype.deleteObjectMaterialText = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText', request, metadata || {}, this.methodInfoDeleteObjectMaterialText, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/DeleteObjectMaterialText', request, metadata || {}, this.methodInfoDeleteObjectMaterialText);
    };
    MruVObjectsServiceClient.prototype.addRemoveBuilding = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/AddRemoveBuilding', request, metadata || {}, this.methodInfoAddRemoveBuilding, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/AddRemoveBuilding', request, metadata || {}, this.methodInfoAddRemoveBuilding);
    };
    MruVObjectsServiceClient.prototype.getRemovedBuildings = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/GetRemovedBuildings', request, metadata || {}, this.methodInfoGetRemovedBuildings, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/GetRemovedBuildings', request, metadata || {}, this.methodInfoGetRemovedBuildings);
    };
    MruVObjectsServiceClient.prototype.deleteRemoveBuilding = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.objects.MruVObjectsService/DeleteRemoveBuilding', request, metadata || {}, this.methodInfoDeleteRemoveBuilding, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.objects.MruVObjectsService/DeleteRemoveBuilding', request, metadata || {}, this.methodInfoDeleteRemoveBuilding);
    };
    MruVObjectsServiceClient.prototype.fetchAllObjects = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.objects.MruVObjectsService/FetchAllObjects', request, metadata || {}, this.methodInfoFetchAllObjects);
    };
    return MruVObjectsServiceClient;
}());
exports.MruVObjectsServiceClient = MruVObjectsServiceClient;
