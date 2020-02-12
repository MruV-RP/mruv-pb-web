import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MerchantCenterLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerchantCenterLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MerchantCenterLinkStatusEnum): MerchantCenterLinkStatusEnum.AsObject;
  static serializeBinaryToWriter(message: MerchantCenterLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerchantCenterLinkStatusEnum;
  static deserializeBinaryFromReader(message: MerchantCenterLinkStatusEnum, reader: jspb.BinaryReader): MerchantCenterLinkStatusEnum;
}

export namespace MerchantCenterLinkStatusEnum {
  export type AsObject = {
  }

  export enum MerchantCenterLinkStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PENDING = 3,
  }
}

