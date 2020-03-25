import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as common_health_pb from '../common/health_pb';
import * as devtools_devtools_model_pb from '../devtools/devtools_model_pb';

export class GetPositionsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  getAuthor(): devtools_devtools_model_pb.Player | undefined;
  setAuthor(value?: devtools_devtools_model_pb.Player): void;
  hasAuthor(): boolean;
  clearAuthor(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionsRequest): GetPositionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionsRequest;
  static deserializeBinaryFromReader(message: GetPositionsRequest, reader: jspb.BinaryReader): GetPositionsRequest;
}

export namespace GetPositionsRequest {
  export type AsObject = {
    limit: number,
    category: string,
    author?: devtools_devtools_model_pb.Player.AsObject,
  }
}

export class GetPositionsResponse extends jspb.Message {
  getPositionsList(): Array<GetPositionsResponse.Row>;
  setPositionsList(value: Array<GetPositionsResponse.Row>): void;
  clearPositionsList(): void;
  addPositions(value?: GetPositionsResponse.Row, index?: number): GetPositionsResponse.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionsResponse): GetPositionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionsResponse;
  static deserializeBinaryFromReader(message: GetPositionsResponse, reader: jspb.BinaryReader): GetPositionsResponse;
}

export namespace GetPositionsResponse {
  export type AsObject = {
    positionsList: Array<GetPositionsResponse.Row.AsObject>,
  }

  export class Row extends jspb.Message {
    getPosition(): devtools_devtools_model_pb.Position | undefined;
    setPosition(value?: devtools_devtools_model_pb.Position): void;
    hasPosition(): boolean;
    clearPosition(): void;

    getAuthor(): devtools_devtools_model_pb.Player | undefined;
    setAuthor(value?: devtools_devtools_model_pb.Player): void;
    hasAuthor(): boolean;
    clearAuthor(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      position?: devtools_devtools_model_pb.Position.AsObject,
      author?: devtools_devtools_model_pb.Player.AsObject,
    }
  }

}

export class SavePositionRequest extends jspb.Message {
  getPosition(): devtools_devtools_model_pb.Position | undefined;
  setPosition(value?: devtools_devtools_model_pb.Position): void;
  hasPosition(): boolean;
  clearPosition(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePositionRequest): SavePositionRequest.AsObject;
  static serializeBinaryToWriter(message: SavePositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePositionRequest;
  static deserializeBinaryFromReader(message: SavePositionRequest, reader: jspb.BinaryReader): SavePositionRequest;
}

export namespace SavePositionRequest {
  export type AsObject = {
    position?: devtools_devtools_model_pb.Position.AsObject,
  }
}

export class SavePositionResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SavePositionResponse): SavePositionResponse.AsObject;
  static serializeBinaryToWriter(message: SavePositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePositionResponse;
  static deserializeBinaryFromReader(message: SavePositionResponse, reader: jspb.BinaryReader): SavePositionResponse;
}

export namespace SavePositionResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeletePositionRequest extends jspb.Message {
  getPosition(): devtools_devtools_model_pb.Position | undefined;
  setPosition(value?: devtools_devtools_model_pb.Position): void;
  hasPosition(): boolean;
  clearPosition(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePositionRequest): DeletePositionRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePositionRequest;
  static deserializeBinaryFromReader(message: DeletePositionRequest, reader: jspb.BinaryReader): DeletePositionRequest;
}

export namespace DeletePositionRequest {
  export type AsObject = {
    position?: devtools_devtools_model_pb.Position.AsObject,
  }
}

export class DeletePositionResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePositionResponse): DeletePositionResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePositionResponse;
  static deserializeBinaryFromReader(message: DeletePositionResponse, reader: jspb.BinaryReader): DeletePositionResponse;
}

export namespace DeletePositionResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetOutfitsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutfitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutfitsRequest): GetOutfitsRequest.AsObject;
  static serializeBinaryToWriter(message: GetOutfitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutfitsRequest;
  static deserializeBinaryFromReader(message: GetOutfitsRequest, reader: jspb.BinaryReader): GetOutfitsRequest;
}

export namespace GetOutfitsRequest {
  export type AsObject = {
    name: string,
    category: string,
    author: string,
  }
}

export class GetOutfitsResponse extends jspb.Message {
  getOutfitsList(): Array<GetOutfitsResponse.Row>;
  setOutfitsList(value: Array<GetOutfitsResponse.Row>): void;
  clearOutfitsList(): void;
  addOutfits(value?: GetOutfitsResponse.Row, index?: number): GetOutfitsResponse.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutfitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutfitsResponse): GetOutfitsResponse.AsObject;
  static serializeBinaryToWriter(message: GetOutfitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutfitsResponse;
  static deserializeBinaryFromReader(message: GetOutfitsResponse, reader: jspb.BinaryReader): GetOutfitsResponse;
}

export namespace GetOutfitsResponse {
  export type AsObject = {
    outfitsList: Array<GetOutfitsResponse.Row.AsObject>,
  }

  export class Row extends jspb.Message {
    getOutfit(): devtools_devtools_model_pb.Outfit | undefined;
    setOutfit(value?: devtools_devtools_model_pb.Outfit): void;
    hasOutfit(): boolean;
    clearOutfit(): void;

    getAuthor(): devtools_devtools_model_pb.Player | undefined;
    setAuthor(value?: devtools_devtools_model_pb.Player): void;
    hasAuthor(): boolean;
    clearAuthor(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      outfit?: devtools_devtools_model_pb.Outfit.AsObject,
      author?: devtools_devtools_model_pb.Player.AsObject,
    }
  }

}

export class SaveOutfitRequest extends jspb.Message {
  getOutfit(): devtools_devtools_model_pb.Outfit | undefined;
  setOutfit(value?: devtools_devtools_model_pb.Outfit): void;
  hasOutfit(): boolean;
  clearOutfit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOutfitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOutfitRequest): SaveOutfitRequest.AsObject;
  static serializeBinaryToWriter(message: SaveOutfitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOutfitRequest;
  static deserializeBinaryFromReader(message: SaveOutfitRequest, reader: jspb.BinaryReader): SaveOutfitRequest;
}

export namespace SaveOutfitRequest {
  export type AsObject = {
    outfit?: devtools_devtools_model_pb.Outfit.AsObject,
  }
}

export class SaveOutfitResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveOutfitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveOutfitResponse): SaveOutfitResponse.AsObject;
  static serializeBinaryToWriter(message: SaveOutfitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveOutfitResponse;
  static deserializeBinaryFromReader(message: SaveOutfitResponse, reader: jspb.BinaryReader): SaveOutfitResponse;
}

export namespace SaveOutfitResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetAnimationsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getDict(): string;
  setDict(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnimationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnimationsRequest): GetAnimationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnimationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnimationsRequest;
  static deserializeBinaryFromReader(message: GetAnimationsRequest, reader: jspb.BinaryReader): GetAnimationsRequest;
}

export namespace GetAnimationsRequest {
  export type AsObject = {
    limit: number,
    dict: string,
    name: string,
  }
}

export class GetAnimationsResponse extends jspb.Message {
  getAnimationsList(): Array<GetAnimationsResponse.Row>;
  setAnimationsList(value: Array<GetAnimationsResponse.Row>): void;
  clearAnimationsList(): void;
  addAnimations(value?: GetAnimationsResponse.Row, index?: number): GetAnimationsResponse.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnimationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnimationsResponse): GetAnimationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAnimationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnimationsResponse;
  static deserializeBinaryFromReader(message: GetAnimationsResponse, reader: jspb.BinaryReader): GetAnimationsResponse;
}

export namespace GetAnimationsResponse {
  export type AsObject = {
    animationsList: Array<GetAnimationsResponse.Row.AsObject>,
  }

  export class Row extends jspb.Message {
    getAnimation(): devtools_devtools_model_pb.Animation | undefined;
    setAnimation(value?: devtools_devtools_model_pb.Animation): void;
    hasAnimation(): boolean;
    clearAnimation(): void;

    getAuthor(): devtools_devtools_model_pb.Player | undefined;
    setAuthor(value?: devtools_devtools_model_pb.Player): void;
    hasAuthor(): boolean;
    clearAuthor(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      animation?: devtools_devtools_model_pb.Animation.AsObject,
      author?: devtools_devtools_model_pb.Player.AsObject,
    }
  }

}

export class GetAnimationRequest extends jspb.Message {
  getDict(): string;
  setDict(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnimationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnimationRequest): GetAnimationRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnimationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnimationRequest;
  static deserializeBinaryFromReader(message: GetAnimationRequest, reader: jspb.BinaryReader): GetAnimationRequest;
}

export namespace GetAnimationRequest {
  export type AsObject = {
    dict: string,
    name: string,
  }
}

export class GetAnimationResponse extends jspb.Message {
  getAnimation(): devtools_devtools_model_pb.Animation | undefined;
  setAnimation(value?: devtools_devtools_model_pb.Animation): void;
  hasAnimation(): boolean;
  clearAnimation(): void;

  getAuthor(): devtools_devtools_model_pb.Player | undefined;
  setAuthor(value?: devtools_devtools_model_pb.Player): void;
  hasAuthor(): boolean;
  clearAuthor(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnimationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnimationResponse): GetAnimationResponse.AsObject;
  static serializeBinaryToWriter(message: GetAnimationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnimationResponse;
  static deserializeBinaryFromReader(message: GetAnimationResponse, reader: jspb.BinaryReader): GetAnimationResponse;
}

export namespace GetAnimationResponse {
  export type AsObject = {
    animation?: devtools_devtools_model_pb.Animation.AsObject,
    author?: devtools_devtools_model_pb.Player.AsObject,
  }
}

export class SaveAnimationRequest extends jspb.Message {
  getAnimation(): devtools_devtools_model_pb.Animation | undefined;
  setAnimation(value?: devtools_devtools_model_pb.Animation): void;
  hasAnimation(): boolean;
  clearAnimation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveAnimationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveAnimationRequest): SaveAnimationRequest.AsObject;
  static serializeBinaryToWriter(message: SaveAnimationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveAnimationRequest;
  static deserializeBinaryFromReader(message: SaveAnimationRequest, reader: jspb.BinaryReader): SaveAnimationRequest;
}

export namespace SaveAnimationRequest {
  export type AsObject = {
    animation?: devtools_devtools_model_pb.Animation.AsObject,
  }
}

export class SaveAnimationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveAnimationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveAnimationResponse): SaveAnimationResponse.AsObject;
  static serializeBinaryToWriter(message: SaveAnimationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveAnimationResponse;
  static deserializeBinaryFromReader(message: SaveAnimationResponse, reader: jspb.BinaryReader): SaveAnimationResponse;
}

export namespace SaveAnimationResponse {
  export type AsObject = {
    success: boolean,
  }
}

