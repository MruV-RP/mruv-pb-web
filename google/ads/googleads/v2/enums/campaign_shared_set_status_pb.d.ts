import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignSharedSetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSetStatusEnum): CampaignSharedSetStatusEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignSharedSetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSetStatusEnum;
  static deserializeBinaryFromReader(message: CampaignSharedSetStatusEnum, reader: jspb.BinaryReader): CampaignSharedSetStatusEnum;
}

export namespace CampaignSharedSetStatusEnum {
  export type AsObject = {
  }

  export enum CampaignSharedSetStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

