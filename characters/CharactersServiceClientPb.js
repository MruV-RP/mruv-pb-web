"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.characters
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
exports.MruVCharactersServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var common_health_pb = __importStar(require("../common/health_pb"));
var characters_characters_pb = __importStar(require("../characters/characters_pb"));
var MruVCharactersServiceClient = /** @class */ (function () {
    function MruVCharactersServiceClient(hostname, credentials, options) {
        this.methodInfoCreateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.CreateCharacterResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.CreateCharacterResponse.deserializeBinary);
        this.methodInfoGetCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.GetCharacterResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.GetCharacterResponse.deserializeBinary);
        this.methodInfoUpdateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.UpdateCharacterResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.UpdateCharacterResponse.deserializeBinary);
        this.methodInfoDeleteCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.DeleteCharacterResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.DeleteCharacterResponse.deserializeBinary);
        this.methodInfoPermanentCharacterKill = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.CharacterID, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.CharacterID.deserializeBinary);
        this.methodInfoChangeClothes = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.ChangeClothesResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.ChangeClothesResponse.deserializeBinary);
        this.methodInfoDeathsStream = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_pb.DeathStreamResponse, function (request) {
            return request.serializeBinary();
        }, characters_characters_pb.DeathStreamResponse.deserializeBinary);
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
    MruVCharactersServiceClient.prototype.createCharacter = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/CreateCharacter', request, metadata || {}, this.methodInfoCreateCharacter, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/CreateCharacter', request, metadata || {}, this.methodInfoCreateCharacter);
    };
    MruVCharactersServiceClient.prototype.getCharacter = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/GetCharacter', request, metadata || {}, this.methodInfoGetCharacter, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/GetCharacter', request, metadata || {}, this.methodInfoGetCharacter);
    };
    MruVCharactersServiceClient.prototype.updateCharacter = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/UpdateCharacter', request, metadata || {}, this.methodInfoUpdateCharacter, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/UpdateCharacter', request, metadata || {}, this.methodInfoUpdateCharacter);
    };
    MruVCharactersServiceClient.prototype.deleteCharacter = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/DeleteCharacter', request, metadata || {}, this.methodInfoDeleteCharacter, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/DeleteCharacter', request, metadata || {}, this.methodInfoDeleteCharacter);
    };
    MruVCharactersServiceClient.prototype.permanentCharacterKill = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/PermanentCharacterKill', request, metadata || {}, this.methodInfoPermanentCharacterKill, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/PermanentCharacterKill', request, metadata || {}, this.methodInfoPermanentCharacterKill);
    };
    MruVCharactersServiceClient.prototype.changeClothes = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/ChangeClothes', request, metadata || {}, this.methodInfoChangeClothes, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/ChangeClothes', request, metadata || {}, this.methodInfoChangeClothes);
    };
    MruVCharactersServiceClient.prototype.deathsStream = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.characters.MruVCharactersService/DeathsStream', request, metadata || {}, this.methodInfoDeathsStream);
    };
    MruVCharactersServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus);
    };
    MruVCharactersServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.characters.MruVCharactersService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.characters.MruVCharactersService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion);
    };
    return MruVCharactersServiceClient;
}());
exports.MruVCharactersServiceClient = MruVCharactersServiceClient;
