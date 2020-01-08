import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignSharedSetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSetErrorEnum): CampaignSharedSetErrorEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignSharedSetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSetErrorEnum;
  static deserializeBinaryFromReader(message: CampaignSharedSetErrorEnum, reader: jspb.BinaryReader): CampaignSharedSetErrorEnum;
}

export namespace CampaignSharedSetErrorEnum {
  export type AsObject = {
  }

  export enum CampaignSharedSetError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SHARED_SET_ACCESS_DENIED = 2,
  }
}

