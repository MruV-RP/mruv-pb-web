import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_asset_v1beta1_assets_pb from '../../../../google/cloud/asset/v1beta1/assets_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ExportAssetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReadTime(): boolean;
  clearReadTime(): void;

  getAssetTypesList(): Array<string>;
  setAssetTypesList(value: Array<string>): void;
  clearAssetTypesList(): void;
  addAssetTypes(value: string, index?: number): void;

  getContentType(): ContentType;
  setContentType(value: ContentType): void;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAssetsRequest): ExportAssetsRequest.AsObject;
  static serializeBinaryToWriter(message: ExportAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAssetsRequest;
  static deserializeBinaryFromReader(message: ExportAssetsRequest, reader: jspb.BinaryReader): ExportAssetsRequest;
}

export namespace ExportAssetsRequest {
  export type AsObject = {
    parent: string,
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assetTypesList: Array<string>,
    contentType: ContentType,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class ExportAssetsResponse extends jspb.Message {
  getReadTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasReadTime(): boolean;
  clearReadTime(): void;

  getOutputConfig(): OutputConfig | undefined;
  setOutputConfig(value?: OutputConfig): void;
  hasOutputConfig(): boolean;
  clearOutputConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportAssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExportAssetsResponse): ExportAssetsResponse.AsObject;
  static serializeBinaryToWriter(message: ExportAssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportAssetsResponse;
  static deserializeBinaryFromReader(message: ExportAssetsResponse, reader: jspb.BinaryReader): ExportAssetsResponse;
}

export namespace ExportAssetsResponse {
  export type AsObject = {
    readTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outputConfig?: OutputConfig.AsObject,
  }
}

export class BatchGetAssetsHistoryRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getAssetNamesList(): Array<string>;
  setAssetNamesList(value: Array<string>): void;
  clearAssetNamesList(): void;
  addAssetNames(value: string, index?: number): void;

  getContentType(): ContentType;
  setContentType(value: ContentType): void;

  getReadTimeWindow(): google_cloud_asset_v1beta1_assets_pb.TimeWindow | undefined;
  setReadTimeWindow(value?: google_cloud_asset_v1beta1_assets_pb.TimeWindow): void;
  hasReadTimeWindow(): boolean;
  clearReadTimeWindow(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetAssetsHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetAssetsHistoryRequest): BatchGetAssetsHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetAssetsHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetAssetsHistoryRequest;
  static deserializeBinaryFromReader(message: BatchGetAssetsHistoryRequest, reader: jspb.BinaryReader): BatchGetAssetsHistoryRequest;
}

export namespace BatchGetAssetsHistoryRequest {
  export type AsObject = {
    parent: string,
    assetNamesList: Array<string>,
    contentType: ContentType,
    readTimeWindow?: google_cloud_asset_v1beta1_assets_pb.TimeWindow.AsObject,
  }
}

export class BatchGetAssetsHistoryResponse extends jspb.Message {
  getAssetsList(): Array<google_cloud_asset_v1beta1_assets_pb.TemporalAsset>;
  setAssetsList(value: Array<google_cloud_asset_v1beta1_assets_pb.TemporalAsset>): void;
  clearAssetsList(): void;
  addAssets(value?: google_cloud_asset_v1beta1_assets_pb.TemporalAsset, index?: number): google_cloud_asset_v1beta1_assets_pb.TemporalAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetAssetsHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetAssetsHistoryResponse): BatchGetAssetsHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetAssetsHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetAssetsHistoryResponse;
  static deserializeBinaryFromReader(message: BatchGetAssetsHistoryResponse, reader: jspb.BinaryReader): BatchGetAssetsHistoryResponse;
}

export namespace BatchGetAssetsHistoryResponse {
  export type AsObject = {
    assetsList: Array<google_cloud_asset_v1beta1_assets_pb.TemporalAsset.AsObject>,
  }
}

export class OutputConfig extends jspb.Message {
  getGcsDestination(): GcsDestination | undefined;
  setGcsDestination(value?: GcsDestination): void;
  hasGcsDestination(): boolean;
  clearGcsDestination(): void;

  getDestinationCase(): OutputConfig.DestinationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputConfig.AsObject;
  static toObject(includeInstance: boolean, msg: OutputConfig): OutputConfig.AsObject;
  static serializeBinaryToWriter(message: OutputConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputConfig;
  static deserializeBinaryFromReader(message: OutputConfig, reader: jspb.BinaryReader): OutputConfig;
}

export namespace OutputConfig {
  export type AsObject = {
    gcsDestination?: GcsDestination.AsObject,
  }

  export enum DestinationCase { 
    DESTINATION_NOT_SET = 0,
    GCS_DESTINATION = 1,
  }
}

export class GcsDestination extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getObjectUriCase(): GcsDestination.ObjectUriCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcsDestination.AsObject;
  static toObject(includeInstance: boolean, msg: GcsDestination): GcsDestination.AsObject;
  static serializeBinaryToWriter(message: GcsDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcsDestination;
  static deserializeBinaryFromReader(message: GcsDestination, reader: jspb.BinaryReader): GcsDestination;
}

export namespace GcsDestination {
  export type AsObject = {
    uri: string,
  }

  export enum ObjectUriCase { 
    OBJECT_URI_NOT_SET = 0,
    URI = 1,
  }
}

export enum ContentType { 
  CONTENT_TYPE_UNSPECIFIED = 0,
  RESOURCE = 1,
  IAM_POLICY = 2,
}
