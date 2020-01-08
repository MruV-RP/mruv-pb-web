import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_common_keyword_plan_common_pb from '../../../../../google/ads/googleads/v1/common/keyword_plan_common_pb';
import * as google_ads_googleads_v1_enums_keyword_plan_network_pb from '../../../../../google/ads/googleads/v1/enums/keyword_plan_network_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class GenerateKeywordIdeasRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getLanguage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguage(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLanguage(): boolean;
  clearLanguage(): void;

  getGeoTargetConstantsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setGeoTargetConstantsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearGeoTargetConstantsList(): void;
  addGeoTargetConstants(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getKeywordPlanNetwork(): google_ads_googleads_v1_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork;
  setKeywordPlanNetwork(value: google_ads_googleads_v1_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork): void;

  getKeywordAndUrlSeed(): KeywordAndUrlSeed | undefined;
  setKeywordAndUrlSeed(value?: KeywordAndUrlSeed): void;
  hasKeywordAndUrlSeed(): boolean;
  clearKeywordAndUrlSeed(): void;

  getKeywordSeed(): KeywordSeed | undefined;
  setKeywordSeed(value?: KeywordSeed): void;
  hasKeywordSeed(): boolean;
  clearKeywordSeed(): void;

  getUrlSeed(): UrlSeed | undefined;
  setUrlSeed(value?: UrlSeed): void;
  hasUrlSeed(): boolean;
  clearUrlSeed(): void;

  getSeedCase(): GenerateKeywordIdeasRequest.SeedCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeywordIdeasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeywordIdeasRequest): GenerateKeywordIdeasRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateKeywordIdeasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeywordIdeasRequest;
  static deserializeBinaryFromReader(message: GenerateKeywordIdeasRequest, reader: jspb.BinaryReader): GenerateKeywordIdeasRequest;
}

export namespace GenerateKeywordIdeasRequest {
  export type AsObject = {
    customerId: string,
    language?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetConstantsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    keywordPlanNetwork: google_ads_googleads_v1_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork,
    keywordAndUrlSeed?: KeywordAndUrlSeed.AsObject,
    keywordSeed?: KeywordSeed.AsObject,
    urlSeed?: UrlSeed.AsObject,
  }

  export enum SeedCase { 
    SEED_NOT_SET = 0,
    KEYWORD_AND_URL_SEED = 2,
    KEYWORD_SEED = 3,
    URL_SEED = 5,
  }
}

export class KeywordAndUrlSeed extends jspb.Message {
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUrl(): boolean;
  clearUrl(): void;

  getKeywordsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setKeywordsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearKeywordsList(): void;
  addKeywords(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordAndUrlSeed.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordAndUrlSeed): KeywordAndUrlSeed.AsObject;
  static serializeBinaryToWriter(message: KeywordAndUrlSeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordAndUrlSeed;
  static deserializeBinaryFromReader(message: KeywordAndUrlSeed, reader: jspb.BinaryReader): KeywordAndUrlSeed;
}

export namespace KeywordAndUrlSeed {
  export type AsObject = {
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keywordsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class KeywordSeed extends jspb.Message {
  getKeywordsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setKeywordsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearKeywordsList(): void;
  addKeywords(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordSeed.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordSeed): KeywordSeed.AsObject;
  static serializeBinaryToWriter(message: KeywordSeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordSeed;
  static deserializeBinaryFromReader(message: KeywordSeed, reader: jspb.BinaryReader): KeywordSeed;
}

export namespace KeywordSeed {
  export type AsObject = {
    keywordsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class UrlSeed extends jspb.Message {
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUrl(): boolean;
  clearUrl(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlSeed.AsObject;
  static toObject(includeInstance: boolean, msg: UrlSeed): UrlSeed.AsObject;
  static serializeBinaryToWriter(message: UrlSeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlSeed;
  static deserializeBinaryFromReader(message: UrlSeed, reader: jspb.BinaryReader): UrlSeed;
}

export namespace UrlSeed {
  export type AsObject = {
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class GenerateKeywordIdeaResponse extends jspb.Message {
  getResultsList(): Array<GenerateKeywordIdeaResult>;
  setResultsList(value: Array<GenerateKeywordIdeaResult>): void;
  clearResultsList(): void;
  addResults(value?: GenerateKeywordIdeaResult, index?: number): GenerateKeywordIdeaResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeywordIdeaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeywordIdeaResponse): GenerateKeywordIdeaResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateKeywordIdeaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeywordIdeaResponse;
  static deserializeBinaryFromReader(message: GenerateKeywordIdeaResponse, reader: jspb.BinaryReader): GenerateKeywordIdeaResponse;
}

export namespace GenerateKeywordIdeaResponse {
  export type AsObject = {
    resultsList: Array<GenerateKeywordIdeaResult.AsObject>,
  }
}

export class GenerateKeywordIdeaResult extends jspb.Message {
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasText(): boolean;
  clearText(): void;

  getKeywordIdeaMetrics(): google_ads_googleads_v1_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics | undefined;
  setKeywordIdeaMetrics(value?: google_ads_googleads_v1_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics): void;
  hasKeywordIdeaMetrics(): boolean;
  clearKeywordIdeaMetrics(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateKeywordIdeaResult.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateKeywordIdeaResult): GenerateKeywordIdeaResult.AsObject;
  static serializeBinaryToWriter(message: GenerateKeywordIdeaResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateKeywordIdeaResult;
  static deserializeBinaryFromReader(message: GenerateKeywordIdeaResult, reader: jspb.BinaryReader): GenerateKeywordIdeaResult;
}

export namespace GenerateKeywordIdeaResult {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keywordIdeaMetrics?: google_ads_googleads_v1_common_keyword_plan_common_pb.KeywordPlanHistoricalMetrics.AsObject,
  }
}

