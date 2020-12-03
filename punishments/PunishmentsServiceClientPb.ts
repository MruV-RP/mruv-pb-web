/**
 * @fileoverview gRPC-Web generated client stub for mruv.punishments
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as punishments_punishments_pb from '../punishments/punishments_pb';


export class MruVPunishmentsServiceClient {
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

  methodInfoBan = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BanResponse,
    (request: punishments_punishments_pb.BanRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BanResponse.deserializeBinary
  );

  ban(
    request: punishments_punishments_pb.BanRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.BanResponse>;

  ban(
    request: punishments_punishments_pb.BanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BanResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.BanResponse>;

  ban(
    request: punishments_punishments_pb.BanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/Ban',
        request,
        metadata || {},
        this.methodInfoBan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/Ban',
    request,
    metadata || {},
    this.methodInfoBan);
  }

  methodInfoBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BlockResponse,
    (request: punishments_punishments_pb.BlockRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BlockResponse.deserializeBinary
  );

  block(
    request: punishments_punishments_pb.BlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.BlockResponse>;

  block(
    request: punishments_punishments_pb.BlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BlockResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.BlockResponse>;

  block(
    request: punishments_punishments_pb.BlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/Block',
        request,
        metadata || {},
        this.methodInfoBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/Block',
    request,
    metadata || {},
    this.methodInfoBlock);
  }

  methodInfoWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WarnResponse,
    (request: punishments_punishments_pb.WarnRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WarnResponse.deserializeBinary
  );

  warn(
    request: punishments_punishments_pb.WarnRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.WarnResponse>;

  warn(
    request: punishments_punishments_pb.WarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.WarnResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.WarnResponse>;

  warn(
    request: punishments_punishments_pb.WarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.WarnResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/Warn',
        request,
        metadata || {},
        this.methodInfoWarn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/Warn',
    request,
    metadata || {},
    this.methodInfoWarn);
  }

  methodInfoAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.AdminJailResponse,
    (request: punishments_punishments_pb.AdminJailRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.AdminJailResponse.deserializeBinary
  );

  adminJail(
    request: punishments_punishments_pb.AdminJailRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.AdminJailResponse>;

  adminJail(
    request: punishments_punishments_pb.AdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.AdminJailResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.AdminJailResponse>;

  adminJail(
    request: punishments_punishments_pb.AdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.AdminJailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/AdminJail',
        request,
        metadata || {},
        this.methodInfoAdminJail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/AdminJail',
    request,
    metadata || {},
    this.methodInfoAdminJail);
  }

  methodInfoMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.MuteGlobalChatsResponse,
    (request: punishments_punishments_pb.MuteGlobalChatsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.MuteGlobalChatsResponse.deserializeBinary
  );

  muteGlobalChats(
    request: punishments_punishments_pb.MuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.MuteGlobalChatsResponse>;

  muteGlobalChats(
    request: punishments_punishments_pb.MuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.MuteGlobalChatsResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.MuteGlobalChatsResponse>;

  muteGlobalChats(
    request: punishments_punishments_pb.MuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.MuteGlobalChatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats',
        request,
        metadata || {},
        this.methodInfoMuteGlobalChats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats',
    request,
    metadata || {},
    this.methodInfoMuteGlobalChats);
  }

  methodInfoUnBan = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnBanResponse,
    (request: punishments_punishments_pb.UnBanRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnBanResponse.deserializeBinary
  );

  unBan(
    request: punishments_punishments_pb.UnBanRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.UnBanResponse>;

  unBan(
    request: punishments_punishments_pb.UnBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnBanResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.UnBanResponse>;

  unBan(
    request: punishments_punishments_pb.UnBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnBanResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/UnBan',
        request,
        metadata || {},
        this.methodInfoUnBan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/UnBan',
    request,
    metadata || {},
    this.methodInfoUnBan);
  }

  methodInfoUnBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnBlockResponse,
    (request: punishments_punishments_pb.UnBlockRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnBlockResponse.deserializeBinary
  );

  unBlock(
    request: punishments_punishments_pb.UnBlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.UnBlockResponse>;

  unBlock(
    request: punishments_punishments_pb.UnBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnBlockResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.UnBlockResponse>;

  unBlock(
    request: punishments_punishments_pb.UnBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnBlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/UnBlock',
        request,
        metadata || {},
        this.methodInfoUnBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/UnBlock',
    request,
    metadata || {},
    this.methodInfoUnBlock);
  }

  methodInfoUnWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnWarnResponse,
    (request: punishments_punishments_pb.UnWarnRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnWarnResponse.deserializeBinary
  );

  unWarn(
    request: punishments_punishments_pb.UnWarnRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.UnWarnResponse>;

  unWarn(
    request: punishments_punishments_pb.UnWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnWarnResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.UnWarnResponse>;

  unWarn(
    request: punishments_punishments_pb.UnWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnWarnResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/UnWarn',
        request,
        metadata || {},
        this.methodInfoUnWarn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/UnWarn',
    request,
    metadata || {},
    this.methodInfoUnWarn);
  }

  methodInfoUnAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnAdminJailResponse,
    (request: punishments_punishments_pb.UnAdminJailRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnAdminJailResponse.deserializeBinary
  );

  unAdminJail(
    request: punishments_punishments_pb.UnAdminJailRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.UnAdminJailResponse>;

  unAdminJail(
    request: punishments_punishments_pb.UnAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnAdminJailResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.UnAdminJailResponse>;

  unAdminJail(
    request: punishments_punishments_pb.UnAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnAdminJailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/UnAdminJail',
        request,
        metadata || {},
        this.methodInfoUnAdminJail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/UnAdminJail',
    request,
    metadata || {},
    this.methodInfoUnAdminJail);
  }

  methodInfoUnMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnMuteGlobalChatsResponse,
    (request: punishments_punishments_pb.UnMuteGlobalChatsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnMuteGlobalChatsResponse.deserializeBinary
  );

  unMuteGlobalChats(
    request: punishments_punishments_pb.UnMuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.UnMuteGlobalChatsResponse>;

  unMuteGlobalChats(
    request: punishments_punishments_pb.UnMuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnMuteGlobalChatsResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.UnMuteGlobalChatsResponse>;

  unMuteGlobalChats(
    request: punishments_punishments_pb.UnMuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.UnMuteGlobalChatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats',
        request,
        metadata || {},
        this.methodInfoUnMuteGlobalChats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats',
    request,
    metadata || {},
    this.methodInfoUnMuteGlobalChats);
  }

  methodInfoGetPlayerBans = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.GetPlayerBansResponse,
    (request: punishments_punishments_pb.GetPlayerBansRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.GetPlayerBansResponse.deserializeBinary
  );

  getPlayerBans(
    request: punishments_punishments_pb.GetPlayerBansRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.GetPlayerBansResponse>;

  getPlayerBans(
    request: punishments_punishments_pb.GetPlayerBansRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerBansResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.GetPlayerBansResponse>;

  getPlayerBans(
    request: punishments_punishments_pb.GetPlayerBansRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerBansResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetPlayerBans',
        request,
        metadata || {},
        this.methodInfoGetPlayerBans,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetPlayerBans',
    request,
    metadata || {},
    this.methodInfoGetPlayerBans);
  }

  methodInfoGetPlayerWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.GetPlayerWarnsResponse,
    (request: punishments_punishments_pb.GetPlayerWarnsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.GetPlayerWarnsResponse.deserializeBinary
  );

  getPlayerWarns(
    request: punishments_punishments_pb.GetPlayerWarnsRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.GetPlayerWarnsResponse>;

  getPlayerWarns(
    request: punishments_punishments_pb.GetPlayerWarnsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerWarnsResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.GetPlayerWarnsResponse>;

  getPlayerWarns(
    request: punishments_punishments_pb.GetPlayerWarnsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerWarnsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns',
        request,
        metadata || {},
        this.methodInfoGetPlayerWarns,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns',
    request,
    metadata || {},
    this.methodInfoGetPlayerWarns);
  }

  methodInfoGetPlayerAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.GetPlayerAdminJailResponse,
    (request: punishments_punishments_pb.GetPlayerAdminJailRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.GetPlayerAdminJailResponse.deserializeBinary
  );

  getPlayerAdminJail(
    request: punishments_punishments_pb.GetPlayerAdminJailRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.GetPlayerAdminJailResponse>;

  getPlayerAdminJail(
    request: punishments_punishments_pb.GetPlayerAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerAdminJailResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.GetPlayerAdminJailResponse>;

  getPlayerAdminJail(
    request: punishments_punishments_pb.GetPlayerAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.GetPlayerAdminJailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail',
        request,
        metadata || {},
        this.methodInfoGetPlayerAdminJail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail',
    request,
    metadata || {},
    this.methodInfoGetPlayerAdminJail);
  }

  methodInfoGetBan = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BanMessage,
    (request: punishments_punishments_pb.GetBanRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BanMessage.deserializeBinary
  );

  getBan(
    request: punishments_punishments_pb.GetBanRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.BanMessage>;

  getBan(
    request: punishments_punishments_pb.GetBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BanMessage) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.BanMessage>;

  getBan(
    request: punishments_punishments_pb.GetBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BanMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetBan',
        request,
        metadata || {},
        this.methodInfoGetBan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetBan',
    request,
    metadata || {},
    this.methodInfoGetBan);
  }

  methodInfoGetWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WarnMessage,
    (request: punishments_punishments_pb.GetWarnRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WarnMessage.deserializeBinary
  );

  getWarn(
    request: punishments_punishments_pb.GetWarnRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.WarnMessage>;

  getWarn(
    request: punishments_punishments_pb.GetWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.WarnMessage) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.WarnMessage>;

  getWarn(
    request: punishments_punishments_pb.GetWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.WarnMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetWarn',
        request,
        metadata || {},
        this.methodInfoGetWarn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetWarn',
    request,
    metadata || {},
    this.methodInfoGetWarn);
  }

  methodInfoGetBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BlockMessage,
    (request: punishments_punishments_pb.GetBlockRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BlockMessage.deserializeBinary
  );

  getBlock(
    request: punishments_punishments_pb.GetBlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.BlockMessage>;

  getBlock(
    request: punishments_punishments_pb.GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BlockMessage) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.BlockMessage>;

  getBlock(
    request: punishments_punishments_pb.GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.BlockMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/GetBlock',
        request,
        metadata || {},
        this.methodInfoGetBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/GetBlock',
    request,
    metadata || {},
    this.methodInfoGetBlock);
  }

  methodInfoIsPlayerBanned = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.IsPlayerBannedResponse,
    (request: punishments_punishments_pb.IsPlayerBannedRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.IsPlayerBannedResponse.deserializeBinary
  );

  isPlayerBanned(
    request: punishments_punishments_pb.IsPlayerBannedRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.IsPlayerBannedResponse>;

  isPlayerBanned(
    request: punishments_punishments_pb.IsPlayerBannedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsPlayerBannedResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.IsPlayerBannedResponse>;

  isPlayerBanned(
    request: punishments_punishments_pb.IsPlayerBannedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsPlayerBannedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned',
        request,
        metadata || {},
        this.methodInfoIsPlayerBanned,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned',
    request,
    metadata || {},
    this.methodInfoIsPlayerBanned);
  }

  methodInfoIsCharacterBlocked = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.IsCharacterBlockedResponse,
    (request: punishments_punishments_pb.IsCharacterBlockedRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.IsCharacterBlockedResponse.deserializeBinary
  );

  isCharacterBlocked(
    request: punishments_punishments_pb.IsCharacterBlockedRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.IsCharacterBlockedResponse>;

  isCharacterBlocked(
    request: punishments_punishments_pb.IsCharacterBlockedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsCharacterBlockedResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.IsCharacterBlockedResponse>;

  isCharacterBlocked(
    request: punishments_punishments_pb.IsCharacterBlockedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsCharacterBlockedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked',
        request,
        metadata || {},
        this.methodInfoIsCharacterBlocked,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked',
    request,
    metadata || {},
    this.methodInfoIsCharacterBlocked);
  }

  methodInfoIsCharacterJailed = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.IsCharacterJailedResponse,
    (request: punishments_punishments_pb.IsCharacterJailedRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.IsCharacterJailedResponse.deserializeBinary
  );

  isCharacterJailed(
    request: punishments_punishments_pb.IsCharacterJailedRequest,
    metadata: grpcWeb.Metadata | null): Promise<punishments_punishments_pb.IsCharacterJailedResponse>;

  isCharacterJailed(
    request: punishments_punishments_pb.IsCharacterJailedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsCharacterJailedResponse) => void): grpcWeb.ClientReadableStream<punishments_punishments_pb.IsCharacterJailedResponse>;

  isCharacterJailed(
    request: punishments_punishments_pb.IsCharacterJailedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: punishments_punishments_pb.IsCharacterJailedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed',
        request,
        metadata || {},
        this.methodInfoIsCharacterJailed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed',
    request,
    metadata || {},
    this.methodInfoIsCharacterJailed);
  }

  methodInfoWatchBans = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BanMessage,
    (request: punishments_punishments_pb.WatchBansRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BanMessage.deserializeBinary
  );

  watchBans(
    request: punishments_punishments_pb.WatchBansRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchBans',
      request,
      metadata || {},
      this.methodInfoWatchBans);
  }

  methodInfoWatchBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.BlockMessage,
    (request: punishments_punishments_pb.WatchBlocksRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.BlockMessage.deserializeBinary
  );

  watchBlocks(
    request: punishments_punishments_pb.WatchBlocksRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchBlocks',
      request,
      metadata || {},
      this.methodInfoWatchBlocks);
  }

  methodInfoWatchWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WarnMessage,
    (request: punishments_punishments_pb.WatchWarnsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WarnMessage.deserializeBinary
  );

  watchWarns(
    request: punishments_punishments_pb.WatchWarnsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchWarns',
      request,
      metadata || {},
      this.methodInfoWatchWarns);
  }

  methodInfoWatchAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.AdminJailMessage,
    (request: punishments_punishments_pb.WatchAdminJailsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.AdminJailMessage.deserializeBinary
  );

  watchAdminJails(
    request: punishments_punishments_pb.WatchAdminJailsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchAdminJails',
      request,
      metadata || {},
      this.methodInfoWatchAdminJails);
  }

  methodInfoWatchUnBans = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnBanMessage,
    (request: punishments_punishments_pb.WatchUnBansRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnBanMessage.deserializeBinary
  );

  watchUnBans(
    request: punishments_punishments_pb.WatchUnBansRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnBans',
      request,
      metadata || {},
      this.methodInfoWatchUnBans);
  }

  methodInfoWatchUnBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnBlockMessage,
    (request: punishments_punishments_pb.WatchUnBlocksRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnBlockMessage.deserializeBinary
  );

  watchUnBlocks(
    request: punishments_punishments_pb.WatchUnBlocksRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnBlocks',
      request,
      metadata || {},
      this.methodInfoWatchUnBlocks);
  }

  methodInfoWatchUnWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnWarnMessage,
    (request: punishments_punishments_pb.WatchUnWarnsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnWarnMessage.deserializeBinary
  );

  watchUnWarns(
    request: punishments_punishments_pb.WatchUnWarnsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnWarns',
      request,
      metadata || {},
      this.methodInfoWatchUnWarns);
  }

  methodInfoWatchUnAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.UnAdminJailMessage,
    (request: punishments_punishments_pb.WatchUnAdminJailsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.UnAdminJailMessage.deserializeBinary
  );

  watchUnAdminJails(
    request: punishments_punishments_pb.WatchUnAdminJailsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnAdminJails',
      request,
      metadata || {},
      this.methodInfoWatchUnAdminJails);
  }

  methodInfoWatchPlayerPunishments = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WatchPlayerPunishmentsResponse,
    (request: punishments_punishments_pb.WatchPlayerPunishmentsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WatchPlayerPunishmentsResponse.deserializeBinary
  );

  watchPlayerPunishments(
    request: punishments_punishments_pb.WatchPlayerPunishmentsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPlayerPunishments',
      request,
      metadata || {},
      this.methodInfoWatchPlayerPunishments);
  }

  methodInfoWatchPlayerAcquittals = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WatchPlayerAcquittalsResponse,
    (request: punishments_punishments_pb.WatchPlayerAcquittalsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WatchPlayerAcquittalsResponse.deserializeBinary
  );

  watchPlayerAcquittals(
    request: punishments_punishments_pb.WatchPlayerAcquittalsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPlayerAcquittals',
      request,
      metadata || {},
      this.methodInfoWatchPlayerAcquittals);
  }

  methodInfoWatchPunishments = new grpcWeb.AbstractClientBase.MethodInfo(
    punishments_punishments_pb.WatchPunishmentsResponse,
    (request: punishments_punishments_pb.WatchPunishmentsRequest) => {
      return request.serializeBinary();
    },
    punishments_punishments_pb.WatchPunishmentsResponse.deserializeBinary
  );

  watchPunishments(
    request: punishments_punishments_pb.WatchPunishmentsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPunishments',
      request,
      metadata || {},
      this.methodInfoWatchPunishments);
  }

}

