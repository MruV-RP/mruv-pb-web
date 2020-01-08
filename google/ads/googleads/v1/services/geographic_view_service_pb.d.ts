import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_geographic_view_pb from '../../../../../google/ads/googleads/v1/resources/geographic_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetGeographicViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeographicViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeographicViewRequest): GetGeographicViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetGeographicViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeographicViewRequest;
  static deserializeBinaryFromReader(message: GetGeographicViewRequest, reader: jspb.BinaryReader): GetGeographicViewRequest;
}

export namespace GetGeographicViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

