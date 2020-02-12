import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignExperimentTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperimentTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperimentTypeEnum): CampaignExperimentTypeEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignExperimentTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperimentTypeEnum;
  static deserializeBinaryFromReader(message: CampaignExperimentTypeEnum, reader: jspb.BinaryReader): CampaignExperimentTypeEnum;
}

export namespace CampaignExperimentTypeEnum {
  export type AsObject = {
  }

  export enum CampaignExperimentType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BASE = 2,
    DRAFT = 3,
    EXPERIMENT = 4,
  }
}

