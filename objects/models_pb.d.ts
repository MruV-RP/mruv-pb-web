import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';


export class ObjectModel extends jspb.Message {
  getModel(): number;
  setModel(value: number): ObjectModel;

  getModelName(): string;
  setModelName(value: string): ObjectModel;

  getName(): string;
  setName(value: string): ObjectModel;

  getCategory(): string;
  setCategory(value: string): ObjectModel;

  getLength(): number;
  setLength(value: number): ObjectModel;

  getWidth(): number;
  setWidth(value: number): ObjectModel;

  getHeight(): number;
  setHeight(value: number): ObjectModel;

  getSize(): number;
  setSize(value: number): ObjectModel;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ObjectModel;
  clearTagsList(): ObjectModel;
  addTags(value: string, index?: number): ObjectModel;

  getHasCollision(): boolean;
  setHasCollision(value: boolean): ObjectModel;

  getBreaksOnHit(): boolean;
  setBreaksOnHit(value: boolean): ObjectModel;

  getHasAnimation(): boolean;
  setHasAnimation(value: boolean): ObjectModel;

  getVisibleByTime(): boolean;
  setVisibleByTime(value: boolean): ObjectModel;

  getVisibleFrom(): number;
  setVisibleFrom(value: number): ObjectModel;

  getVisibleTo(): number;
  setVisibleTo(value: number): ObjectModel;

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
  setObjectType(value?: ObjectModel): CreateObjectModelRequest;
  hasObjectType(): boolean;
  clearObjectType(): CreateObjectModelRequest;

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
  setId(value: number): CreateObjectModelResponse;

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
  setModel(value: number): GetObjectModelRequest;

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
  setObjectType(value?: ObjectModel): GetObjectModelResponse;
  hasObjectType(): boolean;
  clearObjectType(): GetObjectModelResponse;

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
  setObjectType(value?: ObjectModel): UpdateObjectModelRequest;
  hasObjectType(): boolean;
  clearObjectType(): UpdateObjectModelRequest;

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
  setModel(value: number): DeleteObjectModelRequest;

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
  setChunkSize(value: number): FetchAllModelsRequest;

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
  clearModelsMap(): FetchAllModelsResponse;

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

