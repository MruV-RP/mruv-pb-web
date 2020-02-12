import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignCriterionStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterionStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterionStatusEnum): CampaignCriterionStatusEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignCriterionStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterionStatusEnum;
  static deserializeBinaryFromReader(message: CampaignCriterionStatusEnum, reader: jspb.BinaryReader): CampaignCriterionStatusEnum;
}

export namespace CampaignCriterionStatusEnum {
  export type AsObject = {
  }

  export enum CampaignCriterionStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

