import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_ad_group_audience_view_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_audience_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetAdGroupAudienceViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupAudienceViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupAudienceViewRequest): GetAdGroupAudienceViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetAdGroupAudienceViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupAudienceViewRequest;
  static deserializeBinaryFromReader(message: GetAdGroupAudienceViewRequest, reader: jspb.BinaryReader): GetAdGroupAudienceViewRequest;
}

export namespace GetAdGroupAudienceViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

