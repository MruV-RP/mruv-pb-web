import * as jspb from "google-protobuf"

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_streetview_publish_v1_resources_pb from '../../../../google/streetview/publish/v1/resources_pb';

export class CreatePhotoRequest extends jspb.Message {
  getPhoto(): google_streetview_publish_v1_resources_pb.Photo | undefined;
  setPhoto(value?: google_streetview_publish_v1_resources_pb.Photo): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePhotoRequest): CreatePhotoRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePhotoRequest;
  static deserializeBinaryFromReader(message: CreatePhotoRequest, reader: jspb.BinaryReader): CreatePhotoRequest;
}

export namespace CreatePhotoRequest {
  export type AsObject = {
    photo?: google_streetview_publish_v1_resources_pb.Photo.AsObject,
  }
}

export class GetPhotoRequest extends jspb.Message {
  getPhotoId(): string;
  setPhotoId(value: string): void;

  getView(): PhotoView;
  setView(value: PhotoView): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPhotoRequest): GetPhotoRequest.AsObject;
  static serializeBinaryToWriter(message: GetPhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPhotoRequest;
  static deserializeBinaryFromReader(message: GetPhotoRequest, reader: jspb.BinaryReader): GetPhotoRequest;
}

export namespace GetPhotoRequest {
  export type AsObject = {
    photoId: string,
    view: PhotoView,
    languageCode: string,
  }
}

export class BatchGetPhotosRequest extends jspb.Message {
  getPhotoIdsList(): Array<string>;
  setPhotoIdsList(value: Array<string>): void;
  clearPhotoIdsList(): void;
  addPhotoIds(value: string, index?: number): void;

  getView(): PhotoView;
  setView(value: PhotoView): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetPhotosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetPhotosRequest): BatchGetPhotosRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetPhotosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetPhotosRequest;
  static deserializeBinaryFromReader(message: BatchGetPhotosRequest, reader: jspb.BinaryReader): BatchGetPhotosRequest;
}

export namespace BatchGetPhotosRequest {
  export type AsObject = {
    photoIdsList: Array<string>,
    view: PhotoView,
    languageCode: string,
  }
}

export class BatchGetPhotosResponse extends jspb.Message {
  getResultsList(): Array<PhotoResponse>;
  setResultsList(value: Array<PhotoResponse>): void;
  clearResultsList(): void;
  addResults(value?: PhotoResponse, index?: number): PhotoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetPhotosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetPhotosResponse): BatchGetPhotosResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetPhotosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetPhotosResponse;
  static deserializeBinaryFromReader(message: BatchGetPhotosResponse, reader: jspb.BinaryReader): BatchGetPhotosResponse;
}

export namespace BatchGetPhotosResponse {
  export type AsObject = {
    resultsList: Array<PhotoResponse.AsObject>,
  }
}

export class PhotoResponse extends jspb.Message {
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getPhoto(): google_streetview_publish_v1_resources_pb.Photo | undefined;
  setPhoto(value?: google_streetview_publish_v1_resources_pb.Photo): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhotoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PhotoResponse): PhotoResponse.AsObject;
  static serializeBinaryToWriter(message: PhotoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhotoResponse;
  static deserializeBinaryFromReader(message: PhotoResponse, reader: jspb.BinaryReader): PhotoResponse;
}

export namespace PhotoResponse {
  export type AsObject = {
    status?: google_rpc_status_pb.Status.AsObject,
    photo?: google_streetview_publish_v1_resources_pb.Photo.AsObject,
  }
}

export class ListPhotosRequest extends jspb.Message {
  getView(): PhotoView;
  setView(value: PhotoView): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhotosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhotosRequest): ListPhotosRequest.AsObject;
  static serializeBinaryToWriter(message: ListPhotosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhotosRequest;
  static deserializeBinaryFromReader(message: ListPhotosRequest, reader: jspb.BinaryReader): ListPhotosRequest;
}

export namespace ListPhotosRequest {
  export type AsObject = {
    view: PhotoView,
    pageSize: number,
    pageToken: string,
    filter: string,
    languageCode: string,
  }
}

export class ListPhotosResponse extends jspb.Message {
  getPhotosList(): Array<google_streetview_publish_v1_resources_pb.Photo>;
  setPhotosList(value: Array<google_streetview_publish_v1_resources_pb.Photo>): void;
  clearPhotosList(): void;
  addPhotos(value?: google_streetview_publish_v1_resources_pb.Photo, index?: number): google_streetview_publish_v1_resources_pb.Photo;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPhotosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPhotosResponse): ListPhotosResponse.AsObject;
  static serializeBinaryToWriter(message: ListPhotosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPhotosResponse;
  static deserializeBinaryFromReader(message: ListPhotosResponse, reader: jspb.BinaryReader): ListPhotosResponse;
}

export namespace ListPhotosResponse {
  export type AsObject = {
    photosList: Array<google_streetview_publish_v1_resources_pb.Photo.AsObject>,
    nextPageToken: string,
  }
}

export class UpdatePhotoRequest extends jspb.Message {
  getPhoto(): google_streetview_publish_v1_resources_pb.Photo | undefined;
  setPhoto(value?: google_streetview_publish_v1_resources_pb.Photo): void;
  hasPhoto(): boolean;
  clearPhoto(): void;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePhotoRequest): UpdatePhotoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePhotoRequest;
  static deserializeBinaryFromReader(message: UpdatePhotoRequest, reader: jspb.BinaryReader): UpdatePhotoRequest;
}

export namespace UpdatePhotoRequest {
  export type AsObject = {
    photo?: google_streetview_publish_v1_resources_pb.Photo.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class BatchUpdatePhotosRequest extends jspb.Message {
  getUpdatePhotoRequestsList(): Array<UpdatePhotoRequest>;
  setUpdatePhotoRequestsList(value: Array<UpdatePhotoRequest>): void;
  clearUpdatePhotoRequestsList(): void;
  addUpdatePhotoRequests(value?: UpdatePhotoRequest, index?: number): UpdatePhotoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdatePhotosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdatePhotosRequest): BatchUpdatePhotosRequest.AsObject;
  static serializeBinaryToWriter(message: BatchUpdatePhotosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdatePhotosRequest;
  static deserializeBinaryFromReader(message: BatchUpdatePhotosRequest, reader: jspb.BinaryReader): BatchUpdatePhotosRequest;
}

export namespace BatchUpdatePhotosRequest {
  export type AsObject = {
    updatePhotoRequestsList: Array<UpdatePhotoRequest.AsObject>,
  }
}

export class BatchUpdatePhotosResponse extends jspb.Message {
  getResultsList(): Array<PhotoResponse>;
  setResultsList(value: Array<PhotoResponse>): void;
  clearResultsList(): void;
  addResults(value?: PhotoResponse, index?: number): PhotoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdatePhotosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdatePhotosResponse): BatchUpdatePhotosResponse.AsObject;
  static serializeBinaryToWriter(message: BatchUpdatePhotosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdatePhotosResponse;
  static deserializeBinaryFromReader(message: BatchUpdatePhotosResponse, reader: jspb.BinaryReader): BatchUpdatePhotosResponse;
}

export namespace BatchUpdatePhotosResponse {
  export type AsObject = {
    resultsList: Array<PhotoResponse.AsObject>,
  }
}

export class DeletePhotoRequest extends jspb.Message {
  getPhotoId(): string;
  setPhotoId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePhotoRequest): DeletePhotoRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePhotoRequest;
  static deserializeBinaryFromReader(message: DeletePhotoRequest, reader: jspb.BinaryReader): DeletePhotoRequest;
}

export namespace DeletePhotoRequest {
  export type AsObject = {
    photoId: string,
  }
}

export class BatchDeletePhotosRequest extends jspb.Message {
  getPhotoIdsList(): Array<string>;
  setPhotoIdsList(value: Array<string>): void;
  clearPhotoIdsList(): void;
  addPhotoIds(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeletePhotosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeletePhotosRequest): BatchDeletePhotosRequest.AsObject;
  static serializeBinaryToWriter(message: BatchDeletePhotosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeletePhotosRequest;
  static deserializeBinaryFromReader(message: BatchDeletePhotosRequest, reader: jspb.BinaryReader): BatchDeletePhotosRequest;
}

export namespace BatchDeletePhotosRequest {
  export type AsObject = {
    photoIdsList: Array<string>,
  }
}

export class BatchDeletePhotosResponse extends jspb.Message {
  getStatusList(): Array<google_rpc_status_pb.Status>;
  setStatusList(value: Array<google_rpc_status_pb.Status>): void;
  clearStatusList(): void;
  addStatus(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchDeletePhotosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchDeletePhotosResponse): BatchDeletePhotosResponse.AsObject;
  static serializeBinaryToWriter(message: BatchDeletePhotosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchDeletePhotosResponse;
  static deserializeBinaryFromReader(message: BatchDeletePhotosResponse, reader: jspb.BinaryReader): BatchDeletePhotosResponse;
}

export namespace BatchDeletePhotosResponse {
  export type AsObject = {
    statusList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export enum PhotoView { 
  BASIC = 0,
  INCLUDE_DOWNLOAD_URL = 1,
}
