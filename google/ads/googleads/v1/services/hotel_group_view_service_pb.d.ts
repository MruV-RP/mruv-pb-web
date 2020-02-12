import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_hotel_group_view_pb from '../../../../../google/ads/googleads/v1/resources/hotel_group_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetHotelGroupViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHotelGroupViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHotelGroupViewRequest): GetHotelGroupViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetHotelGroupViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHotelGroupViewRequest;
  static deserializeBinaryFromReader(message: GetHotelGroupViewRequest, reader: jspb.BinaryReader): GetHotelGroupViewRequest;
}

export namespace GetHotelGroupViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

