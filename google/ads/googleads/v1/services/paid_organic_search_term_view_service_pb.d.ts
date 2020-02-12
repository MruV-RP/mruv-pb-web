import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_paid_organic_search_term_view_pb from '../../../../../google/ads/googleads/v1/resources/paid_organic_search_term_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetPaidOrganicSearchTermViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaidOrganicSearchTermViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaidOrganicSearchTermViewRequest): GetPaidOrganicSearchTermViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetPaidOrganicSearchTermViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaidOrganicSearchTermViewRequest;
  static deserializeBinaryFromReader(message: GetPaidOrganicSearchTermViewRequest, reader: jspb.BinaryReader): GetPaidOrganicSearchTermViewRequest;
}

export namespace GetPaidOrganicSearchTermViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

