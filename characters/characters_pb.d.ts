import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as characters_characters_model_pb from '../characters/characters_model_pb';

export class DeathStreamRequest extends jspb.Message {
  getDeathTypesList(): Array<characters_characters_model_pb.DeathType>;
  setDeathTypesList(value: Array<characters_characters_model_pb.DeathType>): void;
  clearDeathTypesList(): void;
  addDeathTypes(value: characters_characters_model_pb.DeathType, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamRequest): DeathStreamRequest.AsObject;
  static serializeBinaryToWriter(message: DeathStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamRequest;
  static deserializeBinaryFromReader(message: DeathStreamRequest, reader: jspb.BinaryReader): DeathStreamRequest;
}

export namespace DeathStreamRequest {
  export type AsObject = {
    deathTypesList: Array<characters_characters_model_pb.DeathType>,
  }
}

export class DeathStreamResponse extends jspb.Message {
  getCharacter(): characters_characters_model_pb.Character | undefined;
  setCharacter(value?: characters_characters_model_pb.Character): void;
  hasCharacter(): boolean;
  clearCharacter(): void;

  getDeathType(): characters_characters_model_pb.DeathType;
  setDeathType(value: characters_characters_model_pb.DeathType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeathStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeathStreamResponse): DeathStreamResponse.AsObject;
  static serializeBinaryToWriter(message: DeathStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeathStreamResponse;
  static deserializeBinaryFromReader(message: DeathStreamResponse, reader: jspb.BinaryReader): DeathStreamResponse;
}

export namespace DeathStreamResponse {
  export type AsObject = {
    character?: characters_characters_model_pb.Character.AsObject,
    deathType: characters_characters_model_pb.DeathType,
  }
}

