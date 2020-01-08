import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_change_status_pb from '../../../../../google/ads/googleads/v1/resources/change_status_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetChangeStatusRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChangeStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChangeStatusRequest): GetChangeStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetChangeStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChangeStatusRequest;
  static deserializeBinaryFromReader(message: GetChangeStatusRequest, reader: jspb.BinaryReader): GetChangeStatusRequest;
}

export namespace GetChangeStatusRequest {
  export type AsObject = {
    resourceName: string,
  }
}

