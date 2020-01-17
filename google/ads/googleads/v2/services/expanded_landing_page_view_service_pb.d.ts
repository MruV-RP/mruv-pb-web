import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_resources_expanded_landing_page_view_pb from '../../../../../google/ads/googleads/v2/resources/expanded_landing_page_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class GetExpandedLandingPageViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExpandedLandingPageViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExpandedLandingPageViewRequest): GetExpandedLandingPageViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetExpandedLandingPageViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExpandedLandingPageViewRequest;
  static deserializeBinaryFromReader(message: GetExpandedLandingPageViewRequest, reader: jspb.BinaryReader): GetExpandedLandingPageViewRequest;
}

export namespace GetExpandedLandingPageViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}
