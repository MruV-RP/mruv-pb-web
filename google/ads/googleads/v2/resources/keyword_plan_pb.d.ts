import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_dates_pb from '../../../../../google/ads/googleads/v2/common/dates_pb';
import * as google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb from '../../../../../google/ads/googleads/v2/enums/keyword_plan_forecast_interval_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class KeywordPlan extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getForecastPeriod(): KeywordPlanForecastPeriod | undefined;
  setForecastPeriod(value?: KeywordPlanForecastPeriod): void;
  hasForecastPeriod(): boolean;
  clearForecastPeriod(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlan.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlan): KeywordPlan.AsObject;
  static serializeBinaryToWriter(message: KeywordPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlan;
  static deserializeBinaryFromReader(message: KeywordPlan, reader: jspb.BinaryReader): KeywordPlan;
}

export namespace KeywordPlan {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    forecastPeriod?: KeywordPlanForecastPeriod.AsObject,
  }
}

export class KeywordPlanForecastPeriod extends jspb.Message {
  getDateInterval(): google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval;
  setDateInterval(value: google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval): void;

  getDateRange(): google_ads_googleads_v2_common_dates_pb.DateRange | undefined;
  setDateRange(value?: google_ads_googleads_v2_common_dates_pb.DateRange): void;
  hasDateRange(): boolean;
  clearDateRange(): void;

  getIntervalCase(): KeywordPlanForecastPeriod.IntervalCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanForecastPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanForecastPeriod): KeywordPlanForecastPeriod.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanForecastPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanForecastPeriod;
  static deserializeBinaryFromReader(message: KeywordPlanForecastPeriod, reader: jspb.BinaryReader): KeywordPlanForecastPeriod;
}

export namespace KeywordPlanForecastPeriod {
  export type AsObject = {
    dateInterval: google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval,
    dateRange?: google_ads_googleads_v2_common_dates_pb.DateRange.AsObject,
  }

  export enum IntervalCase { 
    INTERVAL_NOT_SET = 0,
    DATE_INTERVAL = 1,
    DATE_RANGE = 2,
  }
}

