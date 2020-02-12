import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_criteria_pb from '../../../../../google/ads/googleads/v2/common/criteria_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignBidModifier extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCriterionId(): boolean;
  clearCriterionId(): void;

  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasBidModifier(): boolean;
  clearBidModifier(): void;

  getInteractionType(): google_ads_googleads_v2_common_criteria_pb.InteractionTypeInfo | undefined;
  setInteractionType(value?: google_ads_googleads_v2_common_criteria_pb.InteractionTypeInfo): void;
  hasInteractionType(): boolean;
  clearInteractionType(): void;

  getCriterionCase(): CampaignBidModifier.CriterionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBidModifier.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBidModifier): CampaignBidModifier.AsObject;
  static serializeBinaryToWriter(message: CampaignBidModifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBidModifier;
  static deserializeBinaryFromReader(message: CampaignBidModifier, reader: jspb.BinaryReader): CampaignBidModifier;
}

export namespace CampaignBidModifier {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    interactionType?: google_ads_googleads_v2_common_criteria_pb.InteractionTypeInfo.AsObject,
  }

  export enum CriterionCase { 
    CRITERION_NOT_SET = 0,
    INTERACTION_TYPE = 5,
  }
}

