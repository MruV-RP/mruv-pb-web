import * as jspb from "google-protobuf"

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

export enum DeathType { 
  DEATH_TYPE_NONE = 0,
  DEATH_TYPE_BW = 1,
  DEATH_TYPE_BW_KILL = 2,
  DEATH_TYPE_CK = 3,
}
