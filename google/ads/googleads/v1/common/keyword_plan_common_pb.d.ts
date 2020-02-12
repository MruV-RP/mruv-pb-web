import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_keyword_plan_competition_level_pb from '../../../../../google/ads/googleads/v1/enums/keyword_plan_competition_level_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class KeywordPlanHistoricalMetrics extends jspb.Message {
  getAvgMonthlySearches(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAvgMonthlySearches(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAvgMonthlySearches(): boolean;
  clearAvgMonthlySearches(): void;

  getCompetition(): google_ads_googleads_v1_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel;
  setCompetition(value: google_ads_googleads_v1_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanHistoricalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanHistoricalMetrics): KeywordPlanHistoricalMetrics.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanHistoricalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanHistoricalMetrics;
  static deserializeBinaryFromReader(message: KeywordPlanHistoricalMetrics, reader: jspb.BinaryReader): KeywordPlanHistoricalMetrics;
}

export namespace KeywordPlanHistoricalMetrics {
  export type AsObject = {
    avgMonthlySearches?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    competition: google_ads_googleads_v1_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel,
  }
}

