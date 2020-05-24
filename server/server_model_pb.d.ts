import * as jspb from "google-protobuf"

export class ServerID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerID.AsObject;
  static toObject(includeInstance: boolean, msg: ServerID): ServerID.AsObject;
  static serializeBinaryToWriter(message: ServerID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerID;
  static deserializeBinaryFromReader(message: ServerID, reader: jspb.BinaryReader): ServerID;
}

export namespace ServerID {
  export type AsObject = {
    id: number,
  }
}

export class ServerInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): string;
  setPort(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getStatus(): ServerStatus;
  setStatus(value: ServerStatus): void;

  getPlayers(): number;
  setPlayers(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfo): ServerInfo.AsObject;
  static serializeBinaryToWriter(message: ServerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfo;
  static deserializeBinaryFromReader(message: ServerInfo, reader: jspb.BinaryReader): ServerInfo;
}

export namespace ServerInfo {
  export type AsObject = {
    id: number,
    name: string,
    host: string,
    port: string,
    platform: string,
    status: ServerStatus,
    players: number,
  }
}

export enum ServerStatus { 
  UNKNOWN = 0,
  ON = 1,
  OFF = 2,
}
