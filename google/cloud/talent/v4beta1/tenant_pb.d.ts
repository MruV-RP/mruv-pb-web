import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Tenant extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExternalId(): string;
  setExternalId(value: string): void;

  getUsageType(): Tenant.DataUsageType;
  setUsageType(value: Tenant.DataUsageType): void;

  getKeywordSearchableProfileCustomAttributesList(): Array<string>;
  setKeywordSearchableProfileCustomAttributesList(value: Array<string>): void;
  clearKeywordSearchableProfileCustomAttributesList(): void;
  addKeywordSearchableProfileCustomAttributes(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    name: string,
    externalId: string,
    usageType: Tenant.DataUsageType,
    keywordSearchableProfileCustomAttributesList: Array<string>,
  }

  export enum DataUsageType { 
    DATA_USAGE_TYPE_UNSPECIFIED = 0,
    AGGREGATED = 1,
    ISOLATED = 2,
  }
}

