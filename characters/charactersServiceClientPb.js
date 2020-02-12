"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv
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
var grpcWeb = __importStar(require("grpc-web"));
var common_health_pb = __importStar(require("../common/health_pb"));
var characters_characters_model_pb = __importStar(require("../characters/characters_model_pb"));
var characters_pb_1 = require("./characters_pb");
var MruVCharactersServiceClient = /** @class */ (function () {
    function MruVCharactersServiceClient(hostname, credentials, options) {
        this.methodInfoCreateCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_model_pb.CharacterID, function (request) {
            return request.serializeBinary();
        }, characters_characters_model_pb.CharacterID.deserializeBinary);
        this.methodInfoGetCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_model_pb.Character, function (request) {
            return request.serializeBinary();
        }, characters_characters_model_pb.Character.deserializeBinary);
        this.methodInfoRemoveCharacter = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_model_pb.CharacterID, function (request) {
            return request.serializeBinary();
        }, characters_characters_model_pb.CharacterID.deserializeBinary);
        this.methodInfoPermanentCharacterKill = new grpcWeb.AbstractClientBase.MethodInfo(characters_characters_model_pb.CharacterID, function (request) {
            return request.serializeBinary();
        }, characters_characters_model_pb.CharacterID.deserializeBinary);
        this.methodInfoDeathsStream = new grpcWeb.AbstractClientBase.MethodInfo(characters_pb_1.DeathStreamResponse, function (request) {
            return request.serializeBinary();
        }, characters_pb_1.DeathStreamResponse.deserializeBinary);
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
    MruVCharactersServiceClient.prototype.createCharacter = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/CreateCharacter', request, metadata || {}, this.methodInfoCreateCharacter, callback);
    };
    MruVCharactersServiceClient.prototype.getCharacter = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/GetCharacter', request, metadata || {}, this.methodInfoGetCharacter, callback);
    };
    MruVCharactersServiceClient.prototype.removeCharacter = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/RemoveCharacter', request, metadata || {}, this.methodInfoRemoveCharacter, callback);
    };
    MruVCharactersServiceClient.prototype.permanentCharacterKill = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/PermanentCharacterKill', request, metadata || {}, this.methodInfoPermanentCharacterKill, callback);
    };
    MruVCharactersServiceClient.prototype.deathsStream = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.MruVCharactersService/DeathsStream', request, metadata || {}, this.methodInfoDeathsStream);
    };
    MruVCharactersServiceClient.prototype.getServiceStatus = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/GetServiceStatus', request, metadata || {}, this.methodInfoGetServiceStatus, callback);
    };
    MruVCharactersServiceClient.prototype.getServiceVersion = function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/mruv.MruVCharactersService/GetServiceVersion', request, metadata || {}, this.methodInfoGetServiceVersion, callback);
    };
    return MruVCharactersServiceClient;
}());
exports.MruVCharactersServiceClient = MruVCharactersServiceClient;
