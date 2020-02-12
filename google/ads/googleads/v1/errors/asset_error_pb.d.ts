import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AssetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetErrorEnum): AssetErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AssetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetErrorEnum;
  static deserializeBinaryFromReader(message: AssetErrorEnum, reader: jspb.BinaryReader): AssetErrorEnum;
}

export namespace AssetErrorEnum {
  export type AsObject = {
  }

  export enum AssetError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOMER_NOT_WHITELISTED_FOR_ASSET_TYPE = 2,
    DUPLICATE_ASSET = 3,
    DUPLICATE_ASSET_NAME = 4,
    ASSET_DATA_IS_MISSING = 5,
    CANNOT_MODIFY_ASSET_NAME = 6,
  }
}

