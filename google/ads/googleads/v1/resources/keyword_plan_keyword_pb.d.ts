import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v1/enums/keyword_match_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class KeywordPlanKeyword extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getKeywordPlanAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasText(): boolean;
  clearText(): void;

  getMatchType(): google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
  setMatchType(value: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanKeyword.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanKeyword): KeywordPlanKeyword.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanKeyword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanKeyword;
  static deserializeBinaryFromReader(message: KeywordPlanKeyword, reader: jspb.BinaryReader): KeywordPlanKeyword;
}

export namespace KeywordPlanKeyword {
  export type AsObject = {
    resourceName: string,
    keywordPlanAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v1_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

