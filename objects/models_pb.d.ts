import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../google/api/annotations_pb';

export class ObjectModel extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  getModelName(): string;
  setModelName(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getLength(): number;
  setLength(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  getHasCollision(): boolean;
  setHasCollision(value: boolean): void;

  getBreaksOnHit(): boolean;
  setBreaksOnHit(value: boolean): void;

  getHasAnimation(): boolean;
  setHasAnimation(value: boolean): void;

  getVisibleByTime(): boolean;
  setVisibleByTime(value: boolean): void;

  getVisibleFrom(): number;
  setVisibleFrom(value: number): void;

  getVisibleTo(): number;
  setVisibleTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectModel.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectModel): ObjectModel.AsObject;
  static serializeBinaryToWriter(message: ObjectModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectModel;
  static deserializeBinaryFromReader(message: ObjectModel, reader: jspb.BinaryReader): ObjectModel;
}

export namespace ObjectModel {
  export type AsObject = {
    model: number,
    modelName: string,
    name: string,
    category: string,
    length: number,
    width: number,
    height: number,
    size: number,
    tagsList: Array<string>,
    hasCollision: boolean,
    breaksOnHit: boolean,
    hasAnimation: boolean,
    visibleByTime: boolean,
    visibleFrom: number,
    visibleTo: number,
  }
}

export class CreateObjectModelRequest extends jspb.Message {
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;
  hasObjectType(): boolean;
  clearObjectType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectModelRequest): CreateObjectModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectModelRequest;
  static deserializeBinaryFromReader(message: CreateObjectModelRequest, reader: jspb.BinaryReader): CreateObjectModelRequest;
}

export namespace CreateObjectModelRequest {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class CreateObjectModelResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateObjectModelResponse): CreateObjectModelResponse.AsObject;
  static serializeBinaryToWriter(message: CreateObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateObjectModelResponse;
  static deserializeBinaryFromReader(message: CreateObjectModelResponse, reader: jspb.BinaryReader): CreateObjectModelResponse;
}

export namespace CreateObjectModelResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetObjectModelRequest extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectModelRequest): GetObjectModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectModelRequest;
  static deserializeBinaryFromReader(message: GetObjectModelRequest, reader: jspb.BinaryReader): GetObjectModelRequest;
}

export namespace GetObjectModelRequest {
  export type AsObject = {
    model: number,
  }
}

export class GetObjectModelResponse extends jspb.Message {
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;
  hasObjectType(): boolean;
  clearObjectType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetObjectModelResponse): GetObjectModelResponse.AsObject;
  static serializeBinaryToWriter(message: GetObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetObjectModelResponse;
  static deserializeBinaryFromReader(message: GetObjectModelResponse, reader: jspb.BinaryReader): GetObjectModelResponse;
}

export namespace GetObjectModelResponse {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class UpdateObjectModelRequest extends jspb.Message {
  getObjectType(): ObjectModel | undefined;
  setObjectType(value?: ObjectModel): void;
  hasObjectType(): boolean;
  clearObjectType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectModelRequest): UpdateObjectModelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectModelRequest;
  static deserializeBinaryFromReader(message: UpdateObjectModelRequest, reader: jspb.BinaryReader): UpdateObjectModelRequest;
}

export namespace UpdateObjectModelRequest {
  export type AsObject = {
    objectType?: ObjectModel.AsObject,
  }
}

export class UpdateObjectModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateObjectModelResponse): UpdateObjectModelResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateObjectModelResponse;
  static deserializeBinaryFromReader(message: UpdateObjectModelResponse, reader: jspb.BinaryReader): UpdateObjectModelResponse;
}

export namespace UpdateObjectModelResponse {
  export type AsObject = {
  }
}

export class DeleteObjectModelRequest extends jspb.Message {
  getModel(): number;
  setModel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectModelRequest): DeleteObjectModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteObjectModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectModelRequest;
  static deserializeBinaryFromReader(message: DeleteObjectModelRequest, reader: jspb.BinaryReader): DeleteObjectModelRequest;
}

export namespace DeleteObjectModelRequest {
  export type AsObject = {
    model: number,
  }
}

export class DeleteObjectModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteObjectModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteObjectModelResponse): DeleteObjectModelResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteObjectModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteObjectModelResponse;
  static deserializeBinaryFromReader(message: DeleteObjectModelResponse, reader: jspb.BinaryReader): DeleteObjectModelResponse;
}

export namespace DeleteObjectModelResponse {
  export type AsObject = {
  }
}

export class FetchAllModelsRequest extends jspb.Message {
  getChunkSize(): number;
  setChunkSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllModelsRequest): FetchAllModelsRequest.AsObject;
  static serializeBinaryToWriter(message: FetchAllModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllModelsRequest;
  static deserializeBinaryFromReader(message: FetchAllModelsRequest, reader: jspb.BinaryReader): FetchAllModelsRequest;
}

export namespace FetchAllModelsRequest {
  export type AsObject = {
    chunkSize: number,
  }
}

export class FetchAllModelsResponse extends jspb.Message {
  getModelsMap(): jspb.Map<number, ObjectModel>;
  clearModelsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchAllModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchAllModelsResponse): FetchAllModelsResponse.AsObject;
  static serializeBinaryToWriter(message: FetchAllModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchAllModelsResponse;
  static deserializeBinaryFromReader(message: FetchAllModelsResponse, reader: jspb.BinaryReader): FetchAllModelsResponse;
}

export namespace FetchAllModelsResponse {
  export type AsObject = {
    modelsMap: Array<[number, ObjectModel.AsObject]>,
  }
}

