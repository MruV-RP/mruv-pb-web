import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class SearchCatalogResult extends jspb.Message {
  getSearchResultType(): SearchResultType;
  setSearchResultType(value: SearchResultType): void;

  getSearchResultSubtype(): string;
  setSearchResultSubtype(value: string): void;

  getRelativeResourceName(): string;
  setRelativeResourceName(value: string): void;

  getLinkedResource(): string;
  setLinkedResource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCatalogResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCatalogResult): SearchCatalogResult.AsObject;
  static serializeBinaryToWriter(message: SearchCatalogResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCatalogResult;
  static deserializeBinaryFromReader(message: SearchCatalogResult, reader: jspb.BinaryReader): SearchCatalogResult;
}

export namespace SearchCatalogResult {
  export type AsObject = {
    searchResultType: SearchResultType,
    searchResultSubtype: string,
    relativeResourceName: string,
    linkedResource: string,
  }
}

export enum SearchResultType { 
  SEARCH_RESULT_TYPE_UNSPECIFIED = 0,
  ENTRY = 1,
  TAG_TEMPLATE = 2,
  ENTRY_GROUP = 3,
}
