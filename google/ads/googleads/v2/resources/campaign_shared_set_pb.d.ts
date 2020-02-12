import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_campaign_shared_set_status_pb from '../../../../../google/ads/googleads/v2/enums/campaign_shared_set_status_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignSharedSet extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getSharedSet(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSharedSet(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSharedSet(): boolean;
  clearSharedSet(): void;

  getStatus(): google_ads_googleads_v2_enums_campaign_shared_set_status_pb.CampaignSharedSetStatusEnum.CampaignSharedSetStatus;
  setStatus(value: google_ads_googleads_v2_enums_campaign_shared_set_status_pb.CampaignSharedSetStatusEnum.CampaignSharedSetStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSet.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSet): CampaignSharedSet.AsObject;
  static serializeBinaryToWriter(message: CampaignSharedSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSet;
  static deserializeBinaryFromReader(message: CampaignSharedSet, reader: jspb.BinaryReader): CampaignSharedSet;
}

export namespace CampaignSharedSet {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sharedSet?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_campaign_shared_set_status_pb.CampaignSharedSetStatusEnum.CampaignSharedSetStatus,
  }
}

