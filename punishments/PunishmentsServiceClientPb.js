"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for mruv.punishments
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
exports.MruVPunishmentsServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = __importStar(require("grpc-web"));
var punishments_punishments_pb = __importStar(require("../punishments/punishments_pb"));
var MruVPunishmentsServiceClient = /** @class */ (function () {
    function MruVPunishmentsServiceClient(hostname, credentials, options) {
        this.methodInfoBan = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BanResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BanResponse.deserializeBinary);
        this.methodInfoBlock = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BlockResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BlockResponse.deserializeBinary);
        this.methodInfoWarn = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WarnResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WarnResponse.deserializeBinary);
        this.methodInfoAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.AdminJailResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.AdminJailResponse.deserializeBinary);
        this.methodInfoMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.MuteGlobalChatsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.MuteGlobalChatsResponse.deserializeBinary);
        this.methodInfoUnBan = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnBanResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnBanResponse.deserializeBinary);
        this.methodInfoUnBlock = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnBlockResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnBlockResponse.deserializeBinary);
        this.methodInfoUnWarn = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnWarnResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnWarnResponse.deserializeBinary);
        this.methodInfoUnAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnAdminJailResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnAdminJailResponse.deserializeBinary);
        this.methodInfoUnMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnMuteGlobalChatsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnMuteGlobalChatsResponse.deserializeBinary);
        this.methodInfoGetPlayerBans = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.GetPlayerBansResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.GetPlayerBansResponse.deserializeBinary);
        this.methodInfoGetPlayerWarns = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.GetPlayerWarnsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.GetPlayerWarnsResponse.deserializeBinary);
        this.methodInfoGetPlayerAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.GetPlayerAdminJailResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.GetPlayerAdminJailResponse.deserializeBinary);
        this.methodInfoGetBan = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BanMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BanMessage.deserializeBinary);
        this.methodInfoGetWarn = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WarnMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WarnMessage.deserializeBinary);
        this.methodInfoGetBlock = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BlockMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BlockMessage.deserializeBinary);
        this.methodInfoIsPlayerBanned = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.IsPlayerBannedResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.IsPlayerBannedResponse.deserializeBinary);
        this.methodInfoIsCharacterBlocked = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.IsCharacterBlockedResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.IsCharacterBlockedResponse.deserializeBinary);
        this.methodInfoIsCharacterJailed = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.IsCharacterJailedResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.IsCharacterJailedResponse.deserializeBinary);
        this.methodInfoWatchBans = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BanMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BanMessage.deserializeBinary);
        this.methodInfoWatchBlocks = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.BlockMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.BlockMessage.deserializeBinary);
        this.methodInfoWatchWarns = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WarnMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WarnMessage.deserializeBinary);
        this.methodInfoWatchAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.AdminJailMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.AdminJailMessage.deserializeBinary);
        this.methodInfoWatchUnBans = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnBanMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnBanMessage.deserializeBinary);
        this.methodInfoWatchUnBlocks = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnBlockMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnBlockMessage.deserializeBinary);
        this.methodInfoWatchUnWarns = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnWarnMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnWarnMessage.deserializeBinary);
        this.methodInfoWatchUnAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.UnAdminJailMessage, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.UnAdminJailMessage.deserializeBinary);
        this.methodInfoWatchPlayerPunishments = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WatchPlayerPunishmentsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WatchPlayerPunishmentsResponse.deserializeBinary);
        this.methodInfoWatchPlayerAcquittals = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WatchPlayerAcquittalsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WatchPlayerAcquittalsResponse.deserializeBinary);
        this.methodInfoWatchPunishments = new grpcWeb.AbstractClientBase.MethodInfo(punishments_punishments_pb.WatchPunishmentsResponse, function (request) {
            return request.serializeBinary();
        }, punishments_punishments_pb.WatchPunishmentsResponse.deserializeBinary);
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
    MruVPunishmentsServiceClient.prototype.ban = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/Ban', request, metadata || {}, this.methodInfoBan, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/Ban', request, metadata || {}, this.methodInfoBan);
    };
    MruVPunishmentsServiceClient.prototype.block = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/Block', request, metadata || {}, this.methodInfoBlock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/Block', request, metadata || {}, this.methodInfoBlock);
    };
    MruVPunishmentsServiceClient.prototype.warn = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/Warn', request, metadata || {}, this.methodInfoWarn, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/Warn', request, metadata || {}, this.methodInfoWarn);
    };
    MruVPunishmentsServiceClient.prototype.adminJail = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/AdminJail', request, metadata || {}, this.methodInfoAdminJail, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/AdminJail', request, metadata || {}, this.methodInfoAdminJail);
    };
    MruVPunishmentsServiceClient.prototype.muteGlobalChats = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats', request, metadata || {}, this.methodInfoMuteGlobalChats, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats', request, metadata || {}, this.methodInfoMuteGlobalChats);
    };
    MruVPunishmentsServiceClient.prototype.unBan = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/UnBan', request, metadata || {}, this.methodInfoUnBan, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/UnBan', request, metadata || {}, this.methodInfoUnBan);
    };
    MruVPunishmentsServiceClient.prototype.unBlock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/UnBlock', request, metadata || {}, this.methodInfoUnBlock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/UnBlock', request, metadata || {}, this.methodInfoUnBlock);
    };
    MruVPunishmentsServiceClient.prototype.unWarn = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/UnWarn', request, metadata || {}, this.methodInfoUnWarn, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/UnWarn', request, metadata || {}, this.methodInfoUnWarn);
    };
    MruVPunishmentsServiceClient.prototype.unAdminJail = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/UnAdminJail', request, metadata || {}, this.methodInfoUnAdminJail, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/UnAdminJail', request, metadata || {}, this.methodInfoUnAdminJail);
    };
    MruVPunishmentsServiceClient.prototype.unMuteGlobalChats = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats', request, metadata || {}, this.methodInfoUnMuteGlobalChats, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats', request, metadata || {}, this.methodInfoUnMuteGlobalChats);
    };
    MruVPunishmentsServiceClient.prototype.getPlayerBans = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetPlayerBans', request, metadata || {}, this.methodInfoGetPlayerBans, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetPlayerBans', request, metadata || {}, this.methodInfoGetPlayerBans);
    };
    MruVPunishmentsServiceClient.prototype.getPlayerWarns = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns', request, metadata || {}, this.methodInfoGetPlayerWarns, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns', request, metadata || {}, this.methodInfoGetPlayerWarns);
    };
    MruVPunishmentsServiceClient.prototype.getPlayerAdminJail = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail', request, metadata || {}, this.methodInfoGetPlayerAdminJail, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail', request, metadata || {}, this.methodInfoGetPlayerAdminJail);
    };
    MruVPunishmentsServiceClient.prototype.getBan = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetBan', request, metadata || {}, this.methodInfoGetBan, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetBan', request, metadata || {}, this.methodInfoGetBan);
    };
    MruVPunishmentsServiceClient.prototype.getWarn = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetWarn', request, metadata || {}, this.methodInfoGetWarn, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetWarn', request, metadata || {}, this.methodInfoGetWarn);
    };
    MruVPunishmentsServiceClient.prototype.getBlock = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/GetBlock', request, metadata || {}, this.methodInfoGetBlock, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/GetBlock', request, metadata || {}, this.methodInfoGetBlock);
    };
    MruVPunishmentsServiceClient.prototype.isPlayerBanned = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned', request, metadata || {}, this.methodInfoIsPlayerBanned, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned', request, metadata || {}, this.methodInfoIsPlayerBanned);
    };
    MruVPunishmentsServiceClient.prototype.isCharacterBlocked = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked', request, metadata || {}, this.methodInfoIsCharacterBlocked, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked', request, metadata || {}, this.methodInfoIsCharacterBlocked);
    };
    MruVPunishmentsServiceClient.prototype.isCharacterJailed = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed', request, metadata || {}, this.methodInfoIsCharacterJailed, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed', request, metadata || {}, this.methodInfoIsCharacterJailed);
    };
    MruVPunishmentsServiceClient.prototype.watchBans = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchBans', request, metadata || {}, this.methodInfoWatchBans);
    };
    MruVPunishmentsServiceClient.prototype.watchBlocks = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchBlocks', request, metadata || {}, this.methodInfoWatchBlocks);
    };
    MruVPunishmentsServiceClient.prototype.watchWarns = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchWarns', request, metadata || {}, this.methodInfoWatchWarns);
    };
    MruVPunishmentsServiceClient.prototype.watchAdminJails = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchAdminJails', request, metadata || {}, this.methodInfoWatchAdminJails);
    };
    MruVPunishmentsServiceClient.prototype.watchUnBans = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchUnBans', request, metadata || {}, this.methodInfoWatchUnBans);
    };
    MruVPunishmentsServiceClient.prototype.watchUnBlocks = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchUnBlocks', request, metadata || {}, this.methodInfoWatchUnBlocks);
    };
    MruVPunishmentsServiceClient.prototype.watchUnWarns = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchUnWarns', request, metadata || {}, this.methodInfoWatchUnWarns);
    };
    MruVPunishmentsServiceClient.prototype.watchUnAdminJails = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchUnAdminJails', request, metadata || {}, this.methodInfoWatchUnAdminJails);
    };
    MruVPunishmentsServiceClient.prototype.watchPlayerPunishments = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchPlayerPunishments', request, metadata || {}, this.methodInfoWatchPlayerPunishments);
    };
    MruVPunishmentsServiceClient.prototype.watchPlayerAcquittals = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchPlayerAcquittals', request, metadata || {}, this.methodInfoWatchPlayerAcquittals);
    };
    MruVPunishmentsServiceClient.prototype.watchPunishments = function (request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/mruv.punishments.MruVPunishmentsService/WatchPunishments', request, metadata || {}, this.methodInfoWatchPunishments);
    };
    return MruVPunishmentsServiceClient;
}());
exports.MruVPunishmentsServiceClient = MruVPunishmentsServiceClient;
