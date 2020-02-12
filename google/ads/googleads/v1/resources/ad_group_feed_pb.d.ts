import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_matching_function_pb from '../../../../../google/ads/googleads/v1/common/matching_function_pb';
import * as google_ads_googleads_v1_enums_feed_link_status_pb from '../../../../../google/ads/googleads/v1/enums/feed_link_status_pb';
import * as google_ads_googleads_v1_enums_placeholder_type_pb from '../../../../../google/ads/googleads/v1/enums/placeholder_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class AdGroupFeed extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFeed(): boolean;
  clearFeed(): void;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroup(): boolean;
  clearAdGroup(): void;

  getPlaceholderTypesList(): Array<google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>;
  setPlaceholderTypesList(value: Array<google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>): void;
  clearPlaceholderTypesList(): void;
  addPlaceholderTypes(value: google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType, index?: number): void;

  getMatchingFunction(): google_ads_googleads_v1_common_matching_function_pb.MatchingFunction | undefined;
  setMatchingFunction(value?: google_ads_googleads_v1_common_matching_function_pb.MatchingFunction): void;
  hasMatchingFunction(): boolean;
  clearMatchingFunction(): void;

  getStatus(): google_ads_googleads_v1_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus;
  setStatus(value: google_ads_googleads_v1_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupFeed.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupFeed): AdGroupFeed.AsObject;
  static serializeBinaryToWriter(message: AdGroupFeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupFeed;
  static deserializeBinaryFromReader(message: AdGroupFeed, reader: jspb.BinaryReader): AdGroupFeed;
}

export namespace AdGroupFeed {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placeholderTypesList: Array<google_ads_googleads_v1_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType>,
    matchingFunction?: google_ads_googleads_v1_common_matching_function_pb.MatchingFunction.AsObject,
    status: google_ads_googleads_v1_enums_feed_link_status_pb.FeedLinkStatusEnum.FeedLinkStatus,
  }
}

