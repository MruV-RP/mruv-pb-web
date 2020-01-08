import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_extension_feed_item_pb from '../../../../../google/ads/googleads/v1/resources/extension_feed_item_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class GetExtensionFeedItemRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExtensionFeedItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExtensionFeedItemRequest): GetExtensionFeedItemRequest.AsObject;
  static serializeBinaryToWriter(message: GetExtensionFeedItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExtensionFeedItemRequest;
  static deserializeBinaryFromReader(message: GetExtensionFeedItemRequest, reader: jspb.BinaryReader): GetExtensionFeedItemRequest;
}

export namespace GetExtensionFeedItemRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateExtensionFeedItemsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getOperationsList(): Array<ExtensionFeedItemOperation>;
  setOperationsList(value: Array<ExtensionFeedItemOperation>): void;
  clearOperationsList(): void;
  addOperations(value?: ExtensionFeedItemOperation, index?: number): ExtensionFeedItemOperation;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemsRequest): MutateExtensionFeedItemsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateExtensionFeedItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemsRequest;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemsRequest, reader: jspb.BinaryReader): MutateExtensionFeedItemsRequest;
}

export namespace MutateExtensionFeedItemsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ExtensionFeedItemOperation.AsObject>,
    validateOnly: boolean,
  }
}

export class ExtensionFeedItemOperation extends jspb.Message {
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;

  getCreate(): google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem): void;
  hasCreate(): boolean;
  clearCreate(): void;

  getUpdate(): google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): ExtensionFeedItemOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionFeedItemOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionFeedItemOperation): ExtensionFeedItemOperation.AsObject;
  static serializeBinaryToWriter(message: ExtensionFeedItemOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionFeedItemOperation;
  static deserializeBinaryFromReader(message: ExtensionFeedItemOperation, reader: jspb.BinaryReader): ExtensionFeedItemOperation;
}

export namespace ExtensionFeedItemOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    update?: google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    remove: string,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateExtensionFeedItemsResponse extends jspb.Message {
  getResultsList(): Array<MutateExtensionFeedItemResult>;
  setResultsList(value: Array<MutateExtensionFeedItemResult>): void;
  clearResultsList(): void;
  addResults(value?: MutateExtensionFeedItemResult, index?: number): MutateExtensionFeedItemResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemsResponse): MutateExtensionFeedItemsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateExtensionFeedItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemsResponse;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemsResponse, reader: jspb.BinaryReader): MutateExtensionFeedItemsResponse;
}

export namespace MutateExtensionFeedItemsResponse {
  export type AsObject = {
    resultsList: Array<MutateExtensionFeedItemResult.AsObject>,
  }
}

export class MutateExtensionFeedItemResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemResult): MutateExtensionFeedItemResult.AsObject;
  static serializeBinaryToWriter(message: MutateExtensionFeedItemResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemResult;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemResult, reader: jspb.BinaryReader): MutateExtensionFeedItemResult;
}

export namespace MutateExtensionFeedItemResult {
  export type AsObject = {
    resourceName: string,
  }
}

