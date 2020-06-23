import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as common_spatial_pb from '../common/spatial_pb';

export class Character extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getSecondName(): string;
  setSecondName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  getPosition(): common_spatial_pb.Position | undefined;
  setPosition(value?: common_spatial_pb.Position): void;
  hasPosition(): boolean;
  clearPosition(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Character.AsObject;
  static toObject(includeInstance: boolean, msg: Character): Character.AsObject;
  static serializeBinaryToWriter(message: Character, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Character;
  static deserializeBinaryFromReader(message: Character, reader: jspb.BinaryReader): Character;
}

export namespace Character {
  export type AsObject = {
    id: number,
    ownerId: number,
    firstName: string,
    secondName: string,
    age: number,
    sex: number,
    position?: common_spatial_pb.Position.AsObject,
  }
}

export class CharacterID extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterID.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterID): CharacterID.AsObject;
  static serializeBinaryToWriter(message: CharacterID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterID;
  static deserializeBinaryFromReader(message: CharacterID, reader: jspb.BinaryReader): CharacterID;
}

export namespace CharacterID {
  export type AsObject = {
    id: number,
  }
}

export class CreateCharacterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOwnerId(): number;
  setOwnerId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getSecondName(): string;
  setSecondName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCharacterRequest): CreateCharacterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCharacterRequest;
  static deserializeBinaryFromReader(message: CreateCharacterRequest, reader: jspb.BinaryReader): CreateCharacterRequest;
}

export namespace CreateCharacterRequest {
  export type AsObject = {
    id: number,
    ownerId: number,
    firstName: string,
    secondName: string,
    age: number,
    sex: number,
  }
}

export class CreateCharacterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCharacterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCharacterResponse): CreateCharacterResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCharacterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCharacterResponse;
  static deserializeBinaryFromReader(message: CreateCharacterResponse, reader: jspb.BinaryReader): CreateCharacterResponse;
}

export namespace CreateCharacterResponse {
  export type AsObject = {
  }
}

export class GetCharacterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCharacterRequest): GetCharacterRequest.AsObject;
  static serializeBinaryToWriter(message: GetCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCharacterRequest;
  static deserializeBinaryFromReader(message: GetCharacterRequest, reader: jspb.BinaryReader): GetCharacterRequest;
}

export namespace GetCharacterRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetCharacterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCharacterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCharacterResponse): GetCharacterResponse.AsObject;
  static serializeBinaryToWriter(message: GetCharacterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCharacterResponse;
  static deserializeBinaryFromReader(message: GetCharacterResponse, reader: jspb.BinaryReader): GetCharacterResponse;
}

export namespace GetCharacterResponse {
  export type AsObject = {
  }
}

export class UpdateCharacterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCharacterRequest): UpdateCharacterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCharacterRequest;
  static deserializeBinaryFromReader(message: UpdateCharacterRequest, reader: jspb.BinaryReader): UpdateCharacterRequest;
}

export namespace UpdateCharacterRequest {
  export type AsObject = {
    id: number,
  }
}

export class UpdateCharacterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCharacterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCharacterResponse): UpdateCharacterResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCharacterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCharacterResponse;
  static deserializeBinaryFromReader(message: UpdateCharacterResponse, reader: jspb.BinaryReader): UpdateCharacterResponse;
}

export namespace UpdateCharacterResponse {
  export type AsObject = {
  }
}

export class DeleteCharacterRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCharacterRequest): DeleteCharacterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCharacterRequest;
  static deserializeBinaryFromReader(message: DeleteCharacterRequest, reader: jspb.BinaryReader): DeleteCharacterRequest;
}

export namespace DeleteCharacterRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteCharacterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCharacterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCharacterResponse): DeleteCharacterResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCharacterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCharacterResponse;
  static deserializeBinaryFromReader(message: DeleteCharacterResponse, reader: jspb.BinaryReader): DeleteCharacterResponse;
}

export namespace DeleteCharacterResponse {
  export type AsObject = {
  }
}

export class DeathStreamRequest extends jspb.Message {
  getDeathTypesList(): Array<DeathType>;
  setDeathTypesList(value: Array<DeathType>): void;
  clearDeathTypesList(): void;
  addDeathTypes(value: DeathType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamRequest): DeathStreamRequest.AsObject;
  static serializeBinaryToWriter(message: DeathStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamRequest;
  static deserializeBinaryFromReader(message: DeathStreamRequest, reader: jspb.BinaryReader): DeathStreamRequest;
}

export namespace DeathStreamRequest {
  export type AsObject = {
    deathTypesList: Array<DeathType>,
  }
}

export class DeathStreamResponse extends jspb.Message {
  getCharacter(): Character | undefined;
  setCharacter(value?: Character): void;
  hasCharacter(): boolean;
  clearCharacter(): void;

  getDeathType(): DeathType;
  setDeathType(value: DeathType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamResponse): DeathStreamResponse.AsObject;
  static serializeBinaryToWriter(message: DeathStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamResponse;
  static deserializeBinaryFromReader(message: DeathStreamResponse, reader: jspb.BinaryReader): DeathStreamResponse;
}

export namespace DeathStreamResponse {
  export type AsObject = {
    character?: Character.AsObject,
    deathType: DeathType,
  }
}

export enum DeathType { 
  DEATH_TYPE_NONE = 0,
  DEATH_TYPE_BW = 1,
  DEATH_TYPE_BW_KILL = 2,
  DEATH_TYPE_CK = 3,
}
