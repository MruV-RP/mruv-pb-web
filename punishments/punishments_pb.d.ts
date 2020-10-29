import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';

export class PunishmentMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getExpirationDate(): number;
  setExpirationDate(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getDate(): number;
  setDate(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PunishmentMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PunishmentMessage): PunishmentMessage.AsObject;
  static serializeBinaryToWriter(message: PunishmentMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PunishmentMessage;
  static deserializeBinaryFromReader(message: PunishmentMessage, reader: jspb.BinaryReader): PunishmentMessage;
}

export namespace PunishmentMessage {
  export type AsObject = {
    player: number,
    character: number,
    expirationDate: number,
    reason: string,
    admin: number,
    date: number,
    active: boolean,
  }
}

export class BanMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getIp(): string;
  setIp(value: string): void;

  getExpirationDate(): number;
  setExpirationDate(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getBanDate(): number;
  setBanDate(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getUnbanDate(): number;
  setUnbanDate(value: number): void;

  getUnbanAdmin(): number;
  setUnbanAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BanMessage): BanMessage.AsObject;
  static serializeBinaryToWriter(message: BanMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanMessage;
  static deserializeBinaryFromReader(message: BanMessage, reader: jspb.BinaryReader): BanMessage;
}

export namespace BanMessage {
  export type AsObject = {
    player: number,
    character: number,
    ip: string,
    expirationDate: number,
    reason: string,
    admin: number,
    banDate: number,
    active: boolean,
    unbanDate: number,
    unbanAdmin: number,
  }
}

export class WarnMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getExpirationDate(): number;
  setExpirationDate(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getWarnDate(): number;
  setWarnDate(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getUnwarnDate(): number;
  setUnwarnDate(value: number): void;

  getUnwarnAdmin(): number;
  setUnwarnAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarnMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WarnMessage): WarnMessage.AsObject;
  static serializeBinaryToWriter(message: WarnMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarnMessage;
  static deserializeBinaryFromReader(message: WarnMessage, reader: jspb.BinaryReader): WarnMessage;
}

export namespace WarnMessage {
  export type AsObject = {
    player: number,
    character: number,
    expirationDate: number,
    reason: string,
    admin: number,
    warnDate: number,
    active: boolean,
    unwarnDate: number,
    unwarnAdmin: number,
  }
}

export class BlockMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getBlockDate(): number;
  setBlockDate(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getUnblockDate(): number;
  setUnblockDate(value: number): void;

  getUnblockAdmin(): number;
  setUnblockAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BlockMessage): BlockMessage.AsObject;
  static serializeBinaryToWriter(message: BlockMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockMessage;
  static deserializeBinaryFromReader(message: BlockMessage, reader: jspb.BinaryReader): BlockMessage;
}

export namespace BlockMessage {
  export type AsObject = {
    player: number,
    character: number,
    reason: string,
    admin: number,
    blockDate: number,
    active: boolean,
    unblockDate: number,
    unblockAdmin: number,
  }
}

export class AdminJailMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getAjDate(): number;
  setAjDate(value: number): void;

  getJailTime(): number;
  setJailTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminJailMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AdminJailMessage): AdminJailMessage.AsObject;
  static serializeBinaryToWriter(message: AdminJailMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminJailMessage;
  static deserializeBinaryFromReader(message: AdminJailMessage, reader: jspb.BinaryReader): AdminJailMessage;
}

export namespace AdminJailMessage {
  export type AsObject = {
    player: number,
    character: number,
    reason: string,
    admin: number,
    ajDate: number,
    jailTime: number,
  }
}

export class UnBanMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getBanId(): number;
  setBanId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBanMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UnBanMessage): UnBanMessage.AsObject;
  static serializeBinaryToWriter(message: UnBanMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBanMessage;
  static deserializeBinaryFromReader(message: UnBanMessage, reader: jspb.BinaryReader): UnBanMessage;
}

export namespace UnBanMessage {
  export type AsObject = {
    player: number,
    banId: number,
  }
}

export class UnBlockMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getBlockId(): number;
  setBlockId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBlockMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UnBlockMessage): UnBlockMessage.AsObject;
  static serializeBinaryToWriter(message: UnBlockMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBlockMessage;
  static deserializeBinaryFromReader(message: UnBlockMessage, reader: jspb.BinaryReader): UnBlockMessage;
}

export namespace UnBlockMessage {
  export type AsObject = {
    player: number,
    blockId: number,
  }
}

export class UnWarnMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getWarnId(): number;
  setWarnId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnWarnMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UnWarnMessage): UnWarnMessage.AsObject;
  static serializeBinaryToWriter(message: UnWarnMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnWarnMessage;
  static deserializeBinaryFromReader(message: UnWarnMessage, reader: jspb.BinaryReader): UnWarnMessage;
}

export namespace UnWarnMessage {
  export type AsObject = {
    player: number,
    warnId: number,
  }
}

export class UnAdminJailMessage extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnAdminJailMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UnAdminJailMessage): UnAdminJailMessage.AsObject;
  static serializeBinaryToWriter(message: UnAdminJailMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnAdminJailMessage;
  static deserializeBinaryFromReader(message: UnAdminJailMessage, reader: jspb.BinaryReader): UnAdminJailMessage;
}

export namespace UnAdminJailMessage {
  export type AsObject = {
    player: number,
    character: number,
  }
}

export class PunishRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PunishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PunishRequest): PunishRequest.AsObject;
  static serializeBinaryToWriter(message: PunishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PunishRequest;
  static deserializeBinaryFromReader(message: PunishRequest, reader: jspb.BinaryReader): PunishRequest;
}

export namespace PunishRequest {
  export type AsObject = {
    player: number,
    character: number,
    reason: string,
    admin: number,
  }
}

export class PunishResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PunishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PunishResponse): PunishResponse.AsObject;
  static serializeBinaryToWriter(message: PunishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PunishResponse;
  static deserializeBinaryFromReader(message: PunishResponse, reader: jspb.BinaryReader): PunishResponse;
}

export namespace PunishResponse {
  export type AsObject = {
  }
}

export class BanRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getIp(): string;
  setIp(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BanRequest): BanRequest.AsObject;
  static serializeBinaryToWriter(message: BanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanRequest;
  static deserializeBinaryFromReader(message: BanRequest, reader: jspb.BinaryReader): BanRequest;
}

export namespace BanRequest {
  export type AsObject = {
    player: number,
    character: number,
    ip: string,
    time: number,
    reason: string,
    admin: number,
  }
}

export class BanResponse extends jspb.Message {
  getBanId(): number;
  setBanId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BanResponse): BanResponse.AsObject;
  static serializeBinaryToWriter(message: BanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanResponse;
  static deserializeBinaryFromReader(message: BanResponse, reader: jspb.BinaryReader): BanResponse;
}

export namespace BanResponse {
  export type AsObject = {
    banId: number,
  }
}

export class BlockRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
    character: number,
    reason: string,
    admin: number,
  }
}

export class BlockResponse extends jspb.Message {
  getBlockId(): number;
  setBlockId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
  static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
    blockId: number,
  }
}

export class WarnRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getCharacter(): number;
  setCharacter(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WarnRequest): WarnRequest.AsObject;
  static serializeBinaryToWriter(message: WarnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarnRequest;
  static deserializeBinaryFromReader(message: WarnRequest, reader: jspb.BinaryReader): WarnRequest;
}

export namespace WarnRequest {
  export type AsObject = {
    player: number,
    character: number,
    time: number,
    reason: string,
    admin: number,
  }
}

export class WarnResponse extends jspb.Message {
  getWarnId(): number;
  setWarnId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarnResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WarnResponse): WarnResponse.AsObject;
  static serializeBinaryToWriter(message: WarnResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarnResponse;
  static deserializeBinaryFromReader(message: WarnResponse, reader: jspb.BinaryReader): WarnResponse;
}

export namespace WarnResponse {
  export type AsObject = {
    warnId: number,
  }
}

export class AdminJailRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminJailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminJailRequest): AdminJailRequest.AsObject;
  static serializeBinaryToWriter(message: AdminJailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminJailRequest;
  static deserializeBinaryFromReader(message: AdminJailRequest, reader: jspb.BinaryReader): AdminJailRequest;
}

export namespace AdminJailRequest {
  export type AsObject = {
    character: number,
    time: number,
    reason: string,
    admin: number,
  }
}

export class AdminJailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminJailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminJailResponse): AdminJailResponse.AsObject;
  static serializeBinaryToWriter(message: AdminJailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminJailResponse;
  static deserializeBinaryFromReader(message: AdminJailResponse, reader: jspb.BinaryReader): AdminJailResponse;
}

export namespace AdminJailResponse {
  export type AsObject = {
  }
}

export class MuteGlobalChatsRequest extends jspb.Message {
  getAccount(): number;
  setAccount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MuteGlobalChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MuteGlobalChatsRequest): MuteGlobalChatsRequest.AsObject;
  static serializeBinaryToWriter(message: MuteGlobalChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MuteGlobalChatsRequest;
  static deserializeBinaryFromReader(message: MuteGlobalChatsRequest, reader: jspb.BinaryReader): MuteGlobalChatsRequest;
}

export namespace MuteGlobalChatsRequest {
  export type AsObject = {
    account: number,
  }
}

export class MuteGlobalChatsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MuteGlobalChatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MuteGlobalChatsResponse): MuteGlobalChatsResponse.AsObject;
  static serializeBinaryToWriter(message: MuteGlobalChatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MuteGlobalChatsResponse;
  static deserializeBinaryFromReader(message: MuteGlobalChatsResponse, reader: jspb.BinaryReader): MuteGlobalChatsResponse;
}

export namespace MuteGlobalChatsResponse {
  export type AsObject = {
  }
}

export class UnBanRequest extends jspb.Message {
  getBanId(): number;
  setBanId(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdminId(): number;
  setAdminId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnBanRequest): UnBanRequest.AsObject;
  static serializeBinaryToWriter(message: UnBanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBanRequest;
  static deserializeBinaryFromReader(message: UnBanRequest, reader: jspb.BinaryReader): UnBanRequest;
}

export namespace UnBanRequest {
  export type AsObject = {
    banId: number,
    reason: string,
    adminId: number,
  }
}

export class UnBanResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnBanResponse): UnBanResponse.AsObject;
  static serializeBinaryToWriter(message: UnBanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBanResponse;
  static deserializeBinaryFromReader(message: UnBanResponse, reader: jspb.BinaryReader): UnBanResponse;
}

export namespace UnBanResponse {
  export type AsObject = {
  }
}

export class UnBlockRequest extends jspb.Message {
  getBlockId(): number;
  setBlockId(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdminId(): number;
  setAdminId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnBlockRequest): UnBlockRequest.AsObject;
  static serializeBinaryToWriter(message: UnBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBlockRequest;
  static deserializeBinaryFromReader(message: UnBlockRequest, reader: jspb.BinaryReader): UnBlockRequest;
}

export namespace UnBlockRequest {
  export type AsObject = {
    blockId: number,
    reason: string,
    adminId: number,
  }
}

export class UnBlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnBlockResponse): UnBlockResponse.AsObject;
  static serializeBinaryToWriter(message: UnBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnBlockResponse;
  static deserializeBinaryFromReader(message: UnBlockResponse, reader: jspb.BinaryReader): UnBlockResponse;
}

export namespace UnBlockResponse {
  export type AsObject = {
  }
}

export class UnWarnRequest extends jspb.Message {
  getWarnId(): number;
  setWarnId(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdminId(): number;
  setAdminId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnWarnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnWarnRequest): UnWarnRequest.AsObject;
  static serializeBinaryToWriter(message: UnWarnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnWarnRequest;
  static deserializeBinaryFromReader(message: UnWarnRequest, reader: jspb.BinaryReader): UnWarnRequest;
}

export namespace UnWarnRequest {
  export type AsObject = {
    warnId: number,
    reason: string,
    adminId: number,
  }
}

export class UnWarnResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnWarnResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnWarnResponse): UnWarnResponse.AsObject;
  static serializeBinaryToWriter(message: UnWarnResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnWarnResponse;
  static deserializeBinaryFromReader(message: UnWarnResponse, reader: jspb.BinaryReader): UnWarnResponse;
}

export namespace UnWarnResponse {
  export type AsObject = {
  }
}

export class UnAdminJailRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdminId(): number;
  setAdminId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnAdminJailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnAdminJailRequest): UnAdminJailRequest.AsObject;
  static serializeBinaryToWriter(message: UnAdminJailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnAdminJailRequest;
  static deserializeBinaryFromReader(message: UnAdminJailRequest, reader: jspb.BinaryReader): UnAdminJailRequest;
}

export namespace UnAdminJailRequest {
  export type AsObject = {
    character: number,
    reason: string,
    adminId: number,
  }
}

export class UnAdminJailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnAdminJailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnAdminJailResponse): UnAdminJailResponse.AsObject;
  static serializeBinaryToWriter(message: UnAdminJailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnAdminJailResponse;
  static deserializeBinaryFromReader(message: UnAdminJailResponse, reader: jspb.BinaryReader): UnAdminJailResponse;
}

export namespace UnAdminJailResponse {
  export type AsObject = {
  }
}

export class UnMuteGlobalChatsRequest extends jspb.Message {
  getAccount(): number;
  setAccount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnMuteGlobalChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnMuteGlobalChatsRequest): UnMuteGlobalChatsRequest.AsObject;
  static serializeBinaryToWriter(message: UnMuteGlobalChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnMuteGlobalChatsRequest;
  static deserializeBinaryFromReader(message: UnMuteGlobalChatsRequest, reader: jspb.BinaryReader): UnMuteGlobalChatsRequest;
}

export namespace UnMuteGlobalChatsRequest {
  export type AsObject = {
    account: number,
  }
}

export class UnMuteGlobalChatsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnMuteGlobalChatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnMuteGlobalChatsResponse): UnMuteGlobalChatsResponse.AsObject;
  static serializeBinaryToWriter(message: UnMuteGlobalChatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnMuteGlobalChatsResponse;
  static deserializeBinaryFromReader(message: UnMuteGlobalChatsResponse, reader: jspb.BinaryReader): UnMuteGlobalChatsResponse;
}

export namespace UnMuteGlobalChatsResponse {
  export type AsObject = {
  }
}

export class GetPlayerBansRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerBansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerBansRequest): GetPlayerBansRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlayerBansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerBansRequest;
  static deserializeBinaryFromReader(message: GetPlayerBansRequest, reader: jspb.BinaryReader): GetPlayerBansRequest;
}

export namespace GetPlayerBansRequest {
  export type AsObject = {
    player: number,
    ip: string,
  }
}

export class GetPlayerBansResponse extends jspb.Message {
  getBansList(): Array<BanMessage>;
  setBansList(value: Array<BanMessage>): void;
  clearBansList(): void;
  addBans(value?: BanMessage, index?: number): BanMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerBansResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerBansResponse): GetPlayerBansResponse.AsObject;
  static serializeBinaryToWriter(message: GetPlayerBansResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerBansResponse;
  static deserializeBinaryFromReader(message: GetPlayerBansResponse, reader: jspb.BinaryReader): GetPlayerBansResponse;
}

export namespace GetPlayerBansResponse {
  export type AsObject = {
    bansList: Array<BanMessage.AsObject>,
  }
}

export class GetPlayerWarnsRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerWarnsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerWarnsRequest): GetPlayerWarnsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlayerWarnsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerWarnsRequest;
  static deserializeBinaryFromReader(message: GetPlayerWarnsRequest, reader: jspb.BinaryReader): GetPlayerWarnsRequest;
}

export namespace GetPlayerWarnsRequest {
  export type AsObject = {
    player: number,
  }
}

export class GetPlayerWarnsResponse extends jspb.Message {
  getWarnsList(): Array<WarnMessage>;
  setWarnsList(value: Array<WarnMessage>): void;
  clearWarnsList(): void;
  addWarns(value?: WarnMessage, index?: number): WarnMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerWarnsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerWarnsResponse): GetPlayerWarnsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPlayerWarnsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerWarnsResponse;
  static deserializeBinaryFromReader(message: GetPlayerWarnsResponse, reader: jspb.BinaryReader): GetPlayerWarnsResponse;
}

export namespace GetPlayerWarnsResponse {
  export type AsObject = {
    warnsList: Array<WarnMessage.AsObject>,
  }
}

export class GetPlayerAdminJailRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerAdminJailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerAdminJailRequest): GetPlayerAdminJailRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlayerAdminJailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerAdminJailRequest;
  static deserializeBinaryFromReader(message: GetPlayerAdminJailRequest, reader: jspb.BinaryReader): GetPlayerAdminJailRequest;
}

export namespace GetPlayerAdminJailRequest {
  export type AsObject = {
    character: number,
  }
}

export class GetPlayerAdminJailResponse extends jspb.Message {
  getJailTime(): number;
  setJailTime(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getAdmin(): number;
  setAdmin(value: number): void;

  getDate(): number;
  setDate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlayerAdminJailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlayerAdminJailResponse): GetPlayerAdminJailResponse.AsObject;
  static serializeBinaryToWriter(message: GetPlayerAdminJailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlayerAdminJailResponse;
  static deserializeBinaryFromReader(message: GetPlayerAdminJailResponse, reader: jspb.BinaryReader): GetPlayerAdminJailResponse;
}

export namespace GetPlayerAdminJailResponse {
  export type AsObject = {
    jailTime: number,
    reason: string,
    admin: number,
    date: number,
  }
}

export class GetBanRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBanRequest): GetBanRequest.AsObject;
  static serializeBinaryToWriter(message: GetBanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBanRequest;
  static deserializeBinaryFromReader(message: GetBanRequest, reader: jspb.BinaryReader): GetBanRequest;
}

export namespace GetBanRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetWarnRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWarnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWarnRequest): GetWarnRequest.AsObject;
  static serializeBinaryToWriter(message: GetWarnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWarnRequest;
  static deserializeBinaryFromReader(message: GetWarnRequest, reader: jspb.BinaryReader): GetWarnRequest;
}

export namespace GetWarnRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetBlockRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockRequest): GetBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(message: GetBlockRequest, reader: jspb.BinaryReader): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    id: number,
  }
}

export class IsPlayerBannedRequest extends jspb.Message {
  getPlayer(): number;
  setPlayer(value: number): void;

  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsPlayerBannedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsPlayerBannedRequest): IsPlayerBannedRequest.AsObject;
  static serializeBinaryToWriter(message: IsPlayerBannedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsPlayerBannedRequest;
  static deserializeBinaryFromReader(message: IsPlayerBannedRequest, reader: jspb.BinaryReader): IsPlayerBannedRequest;
}

export namespace IsPlayerBannedRequest {
  export type AsObject = {
    player: number,
    ip: string,
  }
}

export class IsPlayerBannedResponse extends jspb.Message {
  getBanned(): boolean;
  setBanned(value: boolean): void;

  getBanId(): number;
  setBanId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsPlayerBannedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsPlayerBannedResponse): IsPlayerBannedResponse.AsObject;
  static serializeBinaryToWriter(message: IsPlayerBannedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsPlayerBannedResponse;
  static deserializeBinaryFromReader(message: IsPlayerBannedResponse, reader: jspb.BinaryReader): IsPlayerBannedResponse;
}

export namespace IsPlayerBannedResponse {
  export type AsObject = {
    banned: boolean,
    banId: number,
  }
}

export class IsCharacterBlockedRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCharacterBlockedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsCharacterBlockedRequest): IsCharacterBlockedRequest.AsObject;
  static serializeBinaryToWriter(message: IsCharacterBlockedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCharacterBlockedRequest;
  static deserializeBinaryFromReader(message: IsCharacterBlockedRequest, reader: jspb.BinaryReader): IsCharacterBlockedRequest;
}

export namespace IsCharacterBlockedRequest {
  export type AsObject = {
    character: number,
  }
}

export class IsCharacterBlockedResponse extends jspb.Message {
  getBlocked(): boolean;
  setBlocked(value: boolean): void;

  getBlockId(): number;
  setBlockId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCharacterBlockedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsCharacterBlockedResponse): IsCharacterBlockedResponse.AsObject;
  static serializeBinaryToWriter(message: IsCharacterBlockedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCharacterBlockedResponse;
  static deserializeBinaryFromReader(message: IsCharacterBlockedResponse, reader: jspb.BinaryReader): IsCharacterBlockedResponse;
}

export namespace IsCharacterBlockedResponse {
  export type AsObject = {
    blocked: boolean,
    blockId: number,
  }
}

export class IsCharacterJailedRequest extends jspb.Message {
  getCharacter(): number;
  setCharacter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCharacterJailedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsCharacterJailedRequest): IsCharacterJailedRequest.AsObject;
  static serializeBinaryToWriter(message: IsCharacterJailedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCharacterJailedRequest;
  static deserializeBinaryFromReader(message: IsCharacterJailedRequest, reader: jspb.BinaryReader): IsCharacterJailedRequest;
}

export namespace IsCharacterJailedRequest {
  export type AsObject = {
    character: number,
  }
}

export class IsCharacterJailedResponse extends jspb.Message {
  getJailed(): boolean;
  setJailed(value: boolean): void;

  getJailTime(): number;
  setJailTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsCharacterJailedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsCharacterJailedResponse): IsCharacterJailedResponse.AsObject;
  static serializeBinaryToWriter(message: IsCharacterJailedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsCharacterJailedResponse;
  static deserializeBinaryFromReader(message: IsCharacterJailedResponse, reader: jspb.BinaryReader): IsCharacterJailedResponse;
}

export namespace IsCharacterJailedResponse {
  export type AsObject = {
    jailed: boolean,
    jailTime: number,
  }
}

export class WatchBansRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBansRequest): WatchBansRequest.AsObject;
  static serializeBinaryToWriter(message: WatchBansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBansRequest;
  static deserializeBinaryFromReader(message: WatchBansRequest, reader: jspb.BinaryReader): WatchBansRequest;
}

export namespace WatchBansRequest {
  export type AsObject = {
  }
}

export class WatchBlocksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchBlocksRequest): WatchBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: WatchBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchBlocksRequest;
  static deserializeBinaryFromReader(message: WatchBlocksRequest, reader: jspb.BinaryReader): WatchBlocksRequest;
}

export namespace WatchBlocksRequest {
  export type AsObject = {
  }
}

export class WatchWarnsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchWarnsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchWarnsRequest): WatchWarnsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchWarnsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchWarnsRequest;
  static deserializeBinaryFromReader(message: WatchWarnsRequest, reader: jspb.BinaryReader): WatchWarnsRequest;
}

export namespace WatchWarnsRequest {
  export type AsObject = {
  }
}

export class WatchAdminJailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAdminJailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAdminJailsRequest): WatchAdminJailsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchAdminJailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAdminJailsRequest;
  static deserializeBinaryFromReader(message: WatchAdminJailsRequest, reader: jspb.BinaryReader): WatchAdminJailsRequest;
}

export namespace WatchAdminJailsRequest {
  export type AsObject = {
  }
}

export class WatchUnBansRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchUnBansRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchUnBansRequest): WatchUnBansRequest.AsObject;
  static serializeBinaryToWriter(message: WatchUnBansRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchUnBansRequest;
  static deserializeBinaryFromReader(message: WatchUnBansRequest, reader: jspb.BinaryReader): WatchUnBansRequest;
}

export namespace WatchUnBansRequest {
  export type AsObject = {
  }
}

export class WatchUnBlocksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchUnBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchUnBlocksRequest): WatchUnBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: WatchUnBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchUnBlocksRequest;
  static deserializeBinaryFromReader(message: WatchUnBlocksRequest, reader: jspb.BinaryReader): WatchUnBlocksRequest;
}

export namespace WatchUnBlocksRequest {
  export type AsObject = {
  }
}

export class WatchUnWarnsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchUnWarnsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchUnWarnsRequest): WatchUnWarnsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchUnWarnsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchUnWarnsRequest;
  static deserializeBinaryFromReader(message: WatchUnWarnsRequest, reader: jspb.BinaryReader): WatchUnWarnsRequest;
}

export namespace WatchUnWarnsRequest {
  export type AsObject = {
  }
}

export class WatchUnAdminJailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchUnAdminJailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchUnAdminJailsRequest): WatchUnAdminJailsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchUnAdminJailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchUnAdminJailsRequest;
  static deserializeBinaryFromReader(message: WatchUnAdminJailsRequest, reader: jspb.BinaryReader): WatchUnAdminJailsRequest;
}

export namespace WatchUnAdminJailsRequest {
  export type AsObject = {
  }
}

export class WatchPlayerPunishmentsRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getCharacterId(): number;
  setCharacterId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPlayerPunishmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPlayerPunishmentsRequest): WatchPlayerPunishmentsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchPlayerPunishmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPlayerPunishmentsRequest;
  static deserializeBinaryFromReader(message: WatchPlayerPunishmentsRequest, reader: jspb.BinaryReader): WatchPlayerPunishmentsRequest;
}

export namespace WatchPlayerPunishmentsRequest {
  export type AsObject = {
    accountId: number,
    characterId: number,
  }
}

export class WatchPlayerPunishmentsResponse extends jspb.Message {
  getBan(): BanMessage | undefined;
  setBan(value?: BanMessage): void;
  hasBan(): boolean;
  clearBan(): void;

  getBlock(): BlockMessage | undefined;
  setBlock(value?: BlockMessage): void;
  hasBlock(): boolean;
  clearBlock(): void;

  getWarn(): WarnMessage | undefined;
  setWarn(value?: WarnMessage): void;
  hasWarn(): boolean;
  clearWarn(): void;

  getAj(): AdminJailMessage | undefined;
  setAj(value?: AdminJailMessage): void;
  hasAj(): boolean;
  clearAj(): void;

  getPunishmentCase(): WatchPlayerPunishmentsResponse.PunishmentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPlayerPunishmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPlayerPunishmentsResponse): WatchPlayerPunishmentsResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPlayerPunishmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPlayerPunishmentsResponse;
  static deserializeBinaryFromReader(message: WatchPlayerPunishmentsResponse, reader: jspb.BinaryReader): WatchPlayerPunishmentsResponse;
}

export namespace WatchPlayerPunishmentsResponse {
  export type AsObject = {
    ban?: BanMessage.AsObject,
    block?: BlockMessage.AsObject,
    warn?: WarnMessage.AsObject,
    aj?: AdminJailMessage.AsObject,
  }

  export enum PunishmentCase { 
    PUNISHMENT_NOT_SET = 0,
    BAN = 1,
    BLOCK = 2,
    WARN = 3,
    AJ = 4,
  }
}

export class WatchPlayerAcquittalsRequest extends jspb.Message {
  getAccountId(): number;
  setAccountId(value: number): void;

  getCharacterId(): number;
  setCharacterId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPlayerAcquittalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPlayerAcquittalsRequest): WatchPlayerAcquittalsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchPlayerAcquittalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPlayerAcquittalsRequest;
  static deserializeBinaryFromReader(message: WatchPlayerAcquittalsRequest, reader: jspb.BinaryReader): WatchPlayerAcquittalsRequest;
}

export namespace WatchPlayerAcquittalsRequest {
  export type AsObject = {
    accountId: number,
    characterId: number,
  }
}

export class WatchPlayerAcquittalsResponse extends jspb.Message {
  getUnban(): UnBanMessage | undefined;
  setUnban(value?: UnBanMessage): void;
  hasUnban(): boolean;
  clearUnban(): void;

  getUnblock(): UnBlockMessage | undefined;
  setUnblock(value?: UnBlockMessage): void;
  hasUnblock(): boolean;
  clearUnblock(): void;

  getUnwarn(): UnWarnMessage | undefined;
  setUnwarn(value?: UnWarnMessage): void;
  hasUnwarn(): boolean;
  clearUnwarn(): void;

  getUnaj(): UnAdminJailMessage | undefined;
  setUnaj(value?: UnAdminJailMessage): void;
  hasUnaj(): boolean;
  clearUnaj(): void;

  getAcquittalCase(): WatchPlayerAcquittalsResponse.AcquittalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPlayerAcquittalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPlayerAcquittalsResponse): WatchPlayerAcquittalsResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPlayerAcquittalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPlayerAcquittalsResponse;
  static deserializeBinaryFromReader(message: WatchPlayerAcquittalsResponse, reader: jspb.BinaryReader): WatchPlayerAcquittalsResponse;
}

export namespace WatchPlayerAcquittalsResponse {
  export type AsObject = {
    unban?: UnBanMessage.AsObject,
    unblock?: UnBlockMessage.AsObject,
    unwarn?: UnWarnMessage.AsObject,
    unaj?: UnAdminJailMessage.AsObject,
  }

  export enum AcquittalCase { 
    ACQUITTAL_NOT_SET = 0,
    UNBAN = 1,
    UNBLOCK = 2,
    UNWARN = 3,
    UNAJ = 4,
  }
}

export class WatchPunishmentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPunishmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPunishmentsRequest): WatchPunishmentsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchPunishmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPunishmentsRequest;
  static deserializeBinaryFromReader(message: WatchPunishmentsRequest, reader: jspb.BinaryReader): WatchPunishmentsRequest;
}

export namespace WatchPunishmentsRequest {
  export type AsObject = {
  }
}

export class WatchPunishmentsResponse extends jspb.Message {
  getBan(): BanMessage | undefined;
  setBan(value?: BanMessage): void;
  hasBan(): boolean;
  clearBan(): void;

  getBlock(): BlockMessage | undefined;
  setBlock(value?: BlockMessage): void;
  hasBlock(): boolean;
  clearBlock(): void;

  getWarn(): WarnMessage | undefined;
  setWarn(value?: WarnMessage): void;
  hasWarn(): boolean;
  clearWarn(): void;

  getAj(): AdminJailMessage | undefined;
  setAj(value?: AdminJailMessage): void;
  hasAj(): boolean;
  clearAj(): void;

  getPunishmentCase(): WatchPunishmentsResponse.PunishmentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchPunishmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchPunishmentsResponse): WatchPunishmentsResponse.AsObject;
  static serializeBinaryToWriter(message: WatchPunishmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchPunishmentsResponse;
  static deserializeBinaryFromReader(message: WatchPunishmentsResponse, reader: jspb.BinaryReader): WatchPunishmentsResponse;
}

export namespace WatchPunishmentsResponse {
  export type AsObject = {
    ban?: BanMessage.AsObject,
    block?: BlockMessage.AsObject,
    warn?: WarnMessage.AsObject,
    aj?: AdminJailMessage.AsObject,
  }

  export enum PunishmentCase { 
    PUNISHMENT_NOT_SET = 0,
    BAN = 1,
    BLOCK = 2,
    WARN = 3,
    AJ = 4,
  }
}

export class WatchAcquittalsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAcquittalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAcquittalsRequest): WatchAcquittalsRequest.AsObject;
  static serializeBinaryToWriter(message: WatchAcquittalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAcquittalsRequest;
  static deserializeBinaryFromReader(message: WatchAcquittalsRequest, reader: jspb.BinaryReader): WatchAcquittalsRequest;
}

export namespace WatchAcquittalsRequest {
  export type AsObject = {
  }
}

export class WatchAcquittalsResponse extends jspb.Message {
  getUnban(): UnBanMessage | undefined;
  setUnban(value?: UnBanMessage): void;
  hasUnban(): boolean;
  clearUnban(): void;

  getUnblock(): UnBlockMessage | undefined;
  setUnblock(value?: UnBlockMessage): void;
  hasUnblock(): boolean;
  clearUnblock(): void;

  getUnwarn(): UnWarnMessage | undefined;
  setUnwarn(value?: UnWarnMessage): void;
  hasUnwarn(): boolean;
  clearUnwarn(): void;

  getUnaj(): UnAdminJailMessage | undefined;
  setUnaj(value?: UnAdminJailMessage): void;
  hasUnaj(): boolean;
  clearUnaj(): void;

  getAcquittalCase(): WatchAcquittalsResponse.AcquittalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchAcquittalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchAcquittalsResponse): WatchAcquittalsResponse.AsObject;
  static serializeBinaryToWriter(message: WatchAcquittalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchAcquittalsResponse;
  static deserializeBinaryFromReader(message: WatchAcquittalsResponse, reader: jspb.BinaryReader): WatchAcquittalsResponse;
}

export namespace WatchAcquittalsResponse {
  export type AsObject = {
    unban?: UnBanMessage.AsObject,
    unblock?: UnBlockMessage.AsObject,
    unwarn?: UnWarnMessage.AsObject,
    unaj?: UnAdminJailMessage.AsObject,
  }

  export enum AcquittalCase { 
    ACQUITTAL_NOT_SET = 0,
    UNBAN = 1,
    UNBLOCK = 2,
    UNWARN = 3,
    UNAJ = 4,
  }
}

