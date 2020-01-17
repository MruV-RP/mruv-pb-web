import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_age_range_view_pb from '../../../../../google/ads/googleads/v1/resources/age_range_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetAgeRangeViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgeRangeViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgeRangeViewRequest): GetAgeRangeViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetAgeRangeViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgeRangeViewRequest;
  static deserializeBinaryFromReader(message: GetAgeRangeViewRequest, reader: jspb.BinaryReader): GetAgeRangeViewRequest;
}

export namespace GetAgeRangeViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}
