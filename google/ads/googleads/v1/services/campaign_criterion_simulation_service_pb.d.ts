import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_campaign_criterion_simulation_pb from '../../../../../google/ads/googleads/v1/resources/campaign_criterion_simulation_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetCampaignCriterionSimulationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCriterionSimulationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCriterionSimulationRequest): GetCampaignCriterionSimulationRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignCriterionSimulationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCriterionSimulationRequest;
  static deserializeBinaryFromReader(message: GetCampaignCriterionSimulationRequest, reader: jspb.BinaryReader): GetCampaignCriterionSimulationRequest;
}

export namespace GetCampaignCriterionSimulationRequest {
  export type AsObject = {
    resourceName: string,
  }
}
