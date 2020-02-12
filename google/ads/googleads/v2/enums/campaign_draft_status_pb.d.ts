import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignDraftStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDraftStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDraftStatusEnum): CampaignDraftStatusEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignDraftStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDraftStatusEnum;
  static deserializeBinaryFromReader(message: CampaignDraftStatusEnum, reader: jspb.BinaryReader): CampaignDraftStatusEnum;
}

export namespace CampaignDraftStatusEnum {
  export type AsObject = {
  }

  export enum CampaignDraftStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PROPOSED = 2,
    REMOVED = 3,
    PROMOTING = 5,
    PROMOTED = 4,
    PROMOTE_FAILED = 6,
  }
}

