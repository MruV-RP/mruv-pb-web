/**
 * @fileoverview gRPC-Web generated client stub for mruv.punishments
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../google/api/annotations_pb';

import {
  AdminJailMessage,
  AdminJailRequest,
  AdminJailResponse,
  BanMessage,
  BanRequest,
  BanResponse,
  BlockMessage,
  BlockRequest,
  BlockResponse,
  GetBanRequest,
  GetBlockRequest,
  GetPlayerAdminJailRequest,
  GetPlayerAdminJailResponse,
  GetPlayerBansRequest,
  GetPlayerBansResponse,
  GetPlayerWarnsRequest,
  GetPlayerWarnsResponse,
  GetWarnRequest,
  IsCharacterBlockedRequest,
  IsCharacterBlockedResponse,
  IsCharacterJailedRequest,
  IsCharacterJailedResponse,
  IsPlayerBannedRequest,
  IsPlayerBannedResponse,
  MuteGlobalChatsRequest,
  MuteGlobalChatsResponse,
  PunishRequest,
  PunishResponse,
  UnAdminJailMessage,
  UnAdminJailRequest,
  UnAdminJailResponse,
  UnBanMessage,
  UnBanRequest,
  UnBanResponse,
  UnBlockMessage,
  UnBlockRequest,
  UnBlockResponse,
  UnMuteGlobalChatsRequest,
  UnMuteGlobalChatsResponse,
  UnWarnMessage,
  UnWarnRequest,
  UnWarnResponse,
  WarnMessage,
  WarnRequest,
  WarnResponse,
  WatchAcquittalsRequest,
  WatchAcquittalsResponse,
  WatchAdminJailsRequest,
  WatchBansRequest,
  WatchBlocksRequest,
  WatchPlayerAcquittalsRequest,
  WatchPlayerAcquittalsResponse,
  WatchPlayerPunishmentsRequest,
  WatchPlayerPunishmentsResponse,
  WatchPunishmentsRequest,
  WatchPunishmentsResponse,
  WatchUnAdminJailsRequest,
  WatchUnBansRequest,
  WatchUnBlocksRequest,
  WatchUnWarnsRequest,
  WatchWarnsRequest} from './punishments_pb';

export class MruVPunishmentsServiceClient {
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

  methodInfoPunish = new grpcWeb.AbstractClientBase.MethodInfo(
    PunishResponse,
    (request: PunishRequest) => {
      return request.serializeBinary();
    },
    PunishResponse.deserializeBinary
  );

  punish(
    request: PunishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PunishResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/Punish',
      request,
      metadata || {},
      this.methodInfoPunish,
      callback);
  }

  methodInfoBan = new grpcWeb.AbstractClientBase.MethodInfo(
    BanResponse,
    (request: BanRequest) => {
      return request.serializeBinary();
    },
    BanResponse.deserializeBinary
  );

  ban(
    request: BanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BanResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/Ban',
      request,
      metadata || {},
      this.methodInfoBan,
      callback);
  }

  methodInfoBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockResponse,
    (request: BlockRequest) => {
      return request.serializeBinary();
    },
    BlockResponse.deserializeBinary
  );

  block(
    request: BlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/Block',
      request,
      metadata || {},
      this.methodInfoBlock,
      callback);
  }

  methodInfoWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    WarnResponse,
    (request: WarnRequest) => {
      return request.serializeBinary();
    },
    WarnResponse.deserializeBinary
  );

  warn(
    request: WarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WarnResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/Warn',
      request,
      metadata || {},
      this.methodInfoWarn,
      callback);
  }

  methodInfoAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    AdminJailResponse,
    (request: AdminJailRequest) => {
      return request.serializeBinary();
    },
    AdminJailResponse.deserializeBinary
  );

  adminJail(
    request: AdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AdminJailResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/AdminJail',
      request,
      metadata || {},
      this.methodInfoAdminJail,
      callback);
  }

  methodInfoMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(
    MuteGlobalChatsResponse,
    (request: MuteGlobalChatsRequest) => {
      return request.serializeBinary();
    },
    MuteGlobalChatsResponse.deserializeBinary
  );

  muteGlobalChats(
    request: MuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MuteGlobalChatsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/MuteGlobalChats',
      request,
      metadata || {},
      this.methodInfoMuteGlobalChats,
      callback);
  }

  methodInfoUnBan = new grpcWeb.AbstractClientBase.MethodInfo(
    UnBanResponse,
    (request: UnBanRequest) => {
      return request.serializeBinary();
    },
    UnBanResponse.deserializeBinary
  );

  unBan(
    request: UnBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnBanResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/UnBan',
      request,
      metadata || {},
      this.methodInfoUnBan,
      callback);
  }

  methodInfoUnBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    UnBlockResponse,
    (request: UnBlockRequest) => {
      return request.serializeBinary();
    },
    UnBlockResponse.deserializeBinary
  );

  unBlock(
    request: UnBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnBlockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/UnBlock',
      request,
      metadata || {},
      this.methodInfoUnBlock,
      callback);
  }

  methodInfoUnWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    UnWarnResponse,
    (request: UnWarnRequest) => {
      return request.serializeBinary();
    },
    UnWarnResponse.deserializeBinary
  );

  unWarn(
    request: UnWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnWarnResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/UnWarn',
      request,
      metadata || {},
      this.methodInfoUnWarn,
      callback);
  }

  methodInfoUnAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    UnAdminJailResponse,
    (request: UnAdminJailRequest) => {
      return request.serializeBinary();
    },
    UnAdminJailResponse.deserializeBinary
  );

  unAdminJail(
    request: UnAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnAdminJailResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/UnAdminJail',
      request,
      metadata || {},
      this.methodInfoUnAdminJail,
      callback);
  }

  methodInfoUnMuteGlobalChats = new grpcWeb.AbstractClientBase.MethodInfo(
    UnMuteGlobalChatsResponse,
    (request: UnMuteGlobalChatsRequest) => {
      return request.serializeBinary();
    },
    UnMuteGlobalChatsResponse.deserializeBinary
  );

  unMuteGlobalChats(
    request: UnMuteGlobalChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnMuteGlobalChatsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/UnMuteGlobalChats',
      request,
      metadata || {},
      this.methodInfoUnMuteGlobalChats,
      callback);
  }

  methodInfoGetPlayerBans = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPlayerBansResponse,
    (request: GetPlayerBansRequest) => {
      return request.serializeBinary();
    },
    GetPlayerBansResponse.deserializeBinary
  );

  getPlayerBans(
    request: GetPlayerBansRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPlayerBansResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetPlayerBans',
      request,
      metadata || {},
      this.methodInfoGetPlayerBans,
      callback);
  }

  methodInfoGetPlayerWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPlayerWarnsResponse,
    (request: GetPlayerWarnsRequest) => {
      return request.serializeBinary();
    },
    GetPlayerWarnsResponse.deserializeBinary
  );

  getPlayerWarns(
    request: GetPlayerWarnsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPlayerWarnsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetPlayerWarns',
      request,
      metadata || {},
      this.methodInfoGetPlayerWarns,
      callback);
  }

  methodInfoGetPlayerAdminJail = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPlayerAdminJailResponse,
    (request: GetPlayerAdminJailRequest) => {
      return request.serializeBinary();
    },
    GetPlayerAdminJailResponse.deserializeBinary
  );

  getPlayerAdminJail(
    request: GetPlayerAdminJailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPlayerAdminJailResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetPlayerAdminJail',
      request,
      metadata || {},
      this.methodInfoGetPlayerAdminJail,
      callback);
  }

  methodInfoGetBan = new grpcWeb.AbstractClientBase.MethodInfo(
    BanMessage,
    (request: GetBanRequest) => {
      return request.serializeBinary();
    },
    BanMessage.deserializeBinary
  );

  getBan(
    request: GetBanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BanMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetBan',
      request,
      metadata || {},
      this.methodInfoGetBan,
      callback);
  }

  methodInfoGetWarn = new grpcWeb.AbstractClientBase.MethodInfo(
    WarnMessage,
    (request: GetWarnRequest) => {
      return request.serializeBinary();
    },
    WarnMessage.deserializeBinary
  );

  getWarn(
    request: GetWarnRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WarnMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetWarn',
      request,
      metadata || {},
      this.methodInfoGetWarn,
      callback);
  }

  methodInfoGetBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockMessage,
    (request: GetBlockRequest) => {
      return request.serializeBinary();
    },
    BlockMessage.deserializeBinary
  );

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/GetBlock',
      request,
      metadata || {},
      this.methodInfoGetBlock,
      callback);
  }

  methodInfoIsPlayerBanned = new grpcWeb.AbstractClientBase.MethodInfo(
    IsPlayerBannedResponse,
    (request: IsPlayerBannedRequest) => {
      return request.serializeBinary();
    },
    IsPlayerBannedResponse.deserializeBinary
  );

  isPlayerBanned(
    request: IsPlayerBannedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsPlayerBannedResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/IsPlayerBanned',
      request,
      metadata || {},
      this.methodInfoIsPlayerBanned,
      callback);
  }

  methodInfoIsCharacterBlocked = new grpcWeb.AbstractClientBase.MethodInfo(
    IsCharacterBlockedResponse,
    (request: IsCharacterBlockedRequest) => {
      return request.serializeBinary();
    },
    IsCharacterBlockedResponse.deserializeBinary
  );

  isCharacterBlocked(
    request: IsCharacterBlockedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsCharacterBlockedResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/IsCharacterBlocked',
      request,
      metadata || {},
      this.methodInfoIsCharacterBlocked,
      callback);
  }

  methodInfoIsCharacterJailed = new grpcWeb.AbstractClientBase.MethodInfo(
    IsCharacterJailedResponse,
    (request: IsCharacterJailedRequest) => {
      return request.serializeBinary();
    },
    IsCharacterJailedResponse.deserializeBinary
  );

  isCharacterJailed(
    request: IsCharacterJailedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsCharacterJailedResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/IsCharacterJailed',
      request,
      metadata || {},
      this.methodInfoIsCharacterJailed,
      callback);
  }

  methodInfoWatchBans = new grpcWeb.AbstractClientBase.MethodInfo(
    BanMessage,
    (request: WatchBansRequest) => {
      return request.serializeBinary();
    },
    BanMessage.deserializeBinary
  );

  watchBans(
    request: WatchBansRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchBans',
      request,
      metadata || {},
      this.methodInfoWatchBans);
  }

  methodInfoWatchBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockMessage,
    (request: WatchBlocksRequest) => {
      return request.serializeBinary();
    },
    BlockMessage.deserializeBinary
  );

  watchBlocks(
    request: WatchBlocksRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchBlocks',
      request,
      metadata || {},
      this.methodInfoWatchBlocks);
  }

  methodInfoWatchWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    WarnMessage,
    (request: WatchWarnsRequest) => {
      return request.serializeBinary();
    },
    WarnMessage.deserializeBinary
  );

  watchWarns(
    request: WatchWarnsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchWarns',
      request,
      metadata || {},
      this.methodInfoWatchWarns);
  }

  methodInfoWatchAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(
    AdminJailMessage,
    (request: WatchAdminJailsRequest) => {
      return request.serializeBinary();
    },
    AdminJailMessage.deserializeBinary
  );

  watchAdminJails(
    request: WatchAdminJailsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchAdminJails',
      request,
      metadata || {},
      this.methodInfoWatchAdminJails);
  }

  methodInfoWatchUnBans = new grpcWeb.AbstractClientBase.MethodInfo(
    UnBanMessage,
    (request: WatchUnBansRequest) => {
      return request.serializeBinary();
    },
    UnBanMessage.deserializeBinary
  );

  watchUnBans(
    request: WatchUnBansRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnBans',
      request,
      metadata || {},
      this.methodInfoWatchUnBans);
  }

  methodInfoWatchUnBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    UnBlockMessage,
    (request: WatchUnBlocksRequest) => {
      return request.serializeBinary();
    },
    UnBlockMessage.deserializeBinary
  );

  watchUnBlocks(
    request: WatchUnBlocksRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnBlocks',
      request,
      metadata || {},
      this.methodInfoWatchUnBlocks);
  }

  methodInfoWatchUnWarns = new grpcWeb.AbstractClientBase.MethodInfo(
    UnWarnMessage,
    (request: WatchUnWarnsRequest) => {
      return request.serializeBinary();
    },
    UnWarnMessage.deserializeBinary
  );

  watchUnWarns(
    request: WatchUnWarnsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnWarns',
      request,
      metadata || {},
      this.methodInfoWatchUnWarns);
  }

  methodInfoWatchUnAdminJails = new grpcWeb.AbstractClientBase.MethodInfo(
    UnAdminJailMessage,
    (request: WatchUnAdminJailsRequest) => {
      return request.serializeBinary();
    },
    UnAdminJailMessage.deserializeBinary
  );

  watchUnAdminJails(
    request: WatchUnAdminJailsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchUnAdminJails',
      request,
      metadata || {},
      this.methodInfoWatchUnAdminJails);
  }

  methodInfoWatchPlayerPunishments = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchPlayerPunishmentsResponse,
    (request: WatchPlayerPunishmentsRequest) => {
      return request.serializeBinary();
    },
    WatchPlayerPunishmentsResponse.deserializeBinary
  );

  watchPlayerPunishments(
    request: WatchPlayerPunishmentsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPlayerPunishments',
      request,
      metadata || {},
      this.methodInfoWatchPlayerPunishments);
  }

  methodInfoWatchPlayerAcquittals = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchPlayerAcquittalsResponse,
    (request: WatchPlayerAcquittalsRequest) => {
      return request.serializeBinary();
    },
    WatchPlayerAcquittalsResponse.deserializeBinary
  );

  watchPlayerAcquittals(
    request: WatchPlayerAcquittalsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPlayerAcquittals',
      request,
      metadata || {},
      this.methodInfoWatchPlayerAcquittals);
  }

  methodInfoWatchPunishments = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchPunishmentsResponse,
    (request: WatchPunishmentsRequest) => {
      return request.serializeBinary();
    },
    WatchPunishmentsResponse.deserializeBinary
  );

  watchPunishments(
    request: WatchPunishmentsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchPunishments',
      request,
      metadata || {},
      this.methodInfoWatchPunishments);
  }

  methodInfoWatchAcquittals = new grpcWeb.AbstractClientBase.MethodInfo(
    WatchAcquittalsResponse,
    (request: WatchAcquittalsRequest) => {
      return request.serializeBinary();
    },
    WatchAcquittalsResponse.deserializeBinary
  );

  watchAcquittals(
    request: WatchAcquittalsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WatchAcquittalsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/mruv.punishments.MruVPunishmentsService/WatchAcquittals',
      request,
      metadata || {},
      this.methodInfoWatchAcquittals,
      callback);
  }

}

