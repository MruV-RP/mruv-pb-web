import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_resources_topic_view_pb from '../../../../../google/ads/googleads/v1/resources/topic_view_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GetTopicViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicViewRequest): GetTopicViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetTopicViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicViewRequest;
  static deserializeBinaryFromReader(message: GetTopicViewRequest, reader: jspb.BinaryReader): GetTopicViewRequest;
}

export namespace GetTopicViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

