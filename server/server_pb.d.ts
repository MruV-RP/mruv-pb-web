import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as server_server_model_pb from '../server/server_model_pb';


export class GetRegisteredServersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegisteredServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegisteredServersRequest): GetRegisteredServersRequest.AsObject;
  static serializeBinaryToWriter(message: GetRegisteredServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegisteredServersRequest;
  static deserializeBinaryFromReader(message: GetRegisteredServersRequest, reader: jspb.BinaryReader): GetRegisteredServersRequest;
}

export namespace GetRegisteredServersRequest {
  export type AsObject = {
  }
}

export class GetRegisteredServersResponse extends jspb.Message {
  getServersList(): Array<server_server_model_pb.ServerInfo>;
  setServersList(value: Array<server_server_model_pb.ServerInfo>): GetRegisteredServersResponse;
  clearServersList(): GetRegisteredServersResponse;
  addServers(value?: server_server_model_pb.ServerInfo, index?: number): server_server_model_pb.ServerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegisteredServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegisteredServersResponse): GetRegisteredServersResponse.AsObject;
  static serializeBinaryToWriter(message: GetRegisteredServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegisteredServersResponse;
  static deserializeBinaryFromReader(message: GetRegisteredServersResponse, reader: jspb.BinaryReader): GetRegisteredServersResponse;
}

export namespace GetRegisteredServersResponse {
  export type AsObject = {
    serversList: Array<server_server_model_pb.ServerInfo.AsObject>,
  }
}

export class UpdateServerStatusRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateServerStatusRequest;

  getStatus(): server_server_model_pb.ServerStatus;
  setStatus(value: server_server_model_pb.ServerStatus): UpdateServerStatusRequest;

  getPlayers(): number;
  setPlayers(value: number): UpdateServerStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerStatusRequest): UpdateServerStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerStatusRequest;
  static deserializeBinaryFromReader(message: UpdateServerStatusRequest, reader: jspb.BinaryReader): UpdateServerStatusRequest;
}

export namespace UpdateServerStatusRequest {
  export type AsObject = {
    id: number,
    status: server_server_model_pb.ServerStatus,
    players: number,
  }
}

export class UpdateServerStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerStatusResponse): UpdateServerStatusResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateServerStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerStatusResponse;
  static deserializeBinaryFromReader(message: UpdateServerStatusResponse, reader: jspb.BinaryReader): UpdateServerStatusResponse;
}

export namespace UpdateServerStatusResponse {
  export type AsObject = {
  }
}

export class ServerEventsStreamRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ServerEventsStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerEventsStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerEventsStreamRequest): ServerEventsStreamRequest.AsObject;
  static serializeBinaryToWriter(message: ServerEventsStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerEventsStreamRequest;
  static deserializeBinaryFromReader(message: ServerEventsStreamRequest, reader: jspb.BinaryReader): ServerEventsStreamRequest;
}

export namespace ServerEventsStreamRequest {
  export type AsObject = {
    id: number,
  }
}

export class ServerEvent extends jspb.Message {
  getType(): ServerEvent.ServerEventType;
  setType(value: ServerEvent.ServerEventType): ServerEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ServerEvent): ServerEvent.AsObject;
  static serializeBinaryToWriter(message: ServerEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerEvent;
  static deserializeBinaryFromReader(message: ServerEvent, reader: jspb.BinaryReader): ServerEvent;
}

export namespace ServerEvent {
  export type AsObject = {
    type: ServerEvent.ServerEventType,
  }

  export enum ServerEventType { 
    UNKNOWN = 0,
    REGISTERED = 1,
    SERVER_DOWN = 2,
    SERVER_UP = 3,
    PLAYERS_CHANGED = 4,
  }
}

