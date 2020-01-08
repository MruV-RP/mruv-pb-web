import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_criteria_pb from '../../../../../google/ads/googleads/v2/common/criteria_pb';
import * as google_ads_googleads_v2_common_extensions_pb from '../../../../../google/ads/googleads/v2/common/extensions_pb';
import * as google_ads_googleads_v2_enums_keyword_match_type_pb from '../../../../../google/ads/googleads/v2/enums/keyword_match_type_pb';
import * as google_ads_googleads_v2_enums_recommendation_type_pb from '../../../../../google/ads/googleads/v2/enums/recommendation_type_pb';
import * as google_ads_googleads_v2_enums_target_cpa_opt_in_recommendation_goal_pb from '../../../../../google/ads/googleads/v2/enums/target_cpa_opt_in_recommendation_goal_pb';
import * as google_ads_googleads_v2_resources_ad_pb from '../../../../../google/ads/googleads/v2/resources/ad_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class Recommendation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getType(): google_ads_googleads_v2_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType;
  setType(value: google_ads_googleads_v2_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType): void;

  getImpact(): Recommendation.RecommendationImpact | undefined;
  setImpact(value?: Recommendation.RecommendationImpact): void;
  hasImpact(): boolean;
  clearImpact(): void;

  getCampaignBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignBudget(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroup(): boolean;
  clearAdGroup(): void;

  getDismissed(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDismissed(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasDismissed(): boolean;
  clearDismissed(): void;

  getCampaignBudgetRecommendation(): Recommendation.CampaignBudgetRecommendation | undefined;
  setCampaignBudgetRecommendation(value?: Recommendation.CampaignBudgetRecommendation): void;
  hasCampaignBudgetRecommendation(): boolean;
  clearCampaignBudgetRecommendation(): void;

  getKeywordRecommendation(): Recommendation.KeywordRecommendation | undefined;
  setKeywordRecommendation(value?: Recommendation.KeywordRecommendation): void;
  hasKeywordRecommendation(): boolean;
  clearKeywordRecommendation(): void;

  getTextAdRecommendation(): Recommendation.TextAdRecommendation | undefined;
  setTextAdRecommendation(value?: Recommendation.TextAdRecommendation): void;
  hasTextAdRecommendation(): boolean;
  clearTextAdRecommendation(): void;

  getTargetCpaOptInRecommendation(): Recommendation.TargetCpaOptInRecommendation | undefined;
  setTargetCpaOptInRecommendation(value?: Recommendation.TargetCpaOptInRecommendation): void;
  hasTargetCpaOptInRecommendation(): boolean;
  clearTargetCpaOptInRecommendation(): void;

  getMaximizeConversionsOptInRecommendation(): Recommendation.MaximizeConversionsOptInRecommendation | undefined;
  setMaximizeConversionsOptInRecommendation(value?: Recommendation.MaximizeConversionsOptInRecommendation): void;
  hasMaximizeConversionsOptInRecommendation(): boolean;
  clearMaximizeConversionsOptInRecommendation(): void;

  getEnhancedCpcOptInRecommendation(): Recommendation.EnhancedCpcOptInRecommendation | undefined;
  setEnhancedCpcOptInRecommendation(value?: Recommendation.EnhancedCpcOptInRecommendation): void;
  hasEnhancedCpcOptInRecommendation(): boolean;
  clearEnhancedCpcOptInRecommendation(): void;

  getSearchPartnersOptInRecommendation(): Recommendation.SearchPartnersOptInRecommendation | undefined;
  setSearchPartnersOptInRecommendation(value?: Recommendation.SearchPartnersOptInRecommendation): void;
  hasSearchPartnersOptInRecommendation(): boolean;
  clearSearchPartnersOptInRecommendation(): void;

  getMaximizeClicksOptInRecommendation(): Recommendation.MaximizeClicksOptInRecommendation | undefined;
  setMaximizeClicksOptInRecommendation(value?: Recommendation.MaximizeClicksOptInRecommendation): void;
  hasMaximizeClicksOptInRecommendation(): boolean;
  clearMaximizeClicksOptInRecommendation(): void;

  getOptimizeAdRotationRecommendation(): Recommendation.OptimizeAdRotationRecommendation | undefined;
  setOptimizeAdRotationRecommendation(value?: Recommendation.OptimizeAdRotationRecommendation): void;
  hasOptimizeAdRotationRecommendation(): boolean;
  clearOptimizeAdRotationRecommendation(): void;

  getCalloutExtensionRecommendation(): Recommendation.CalloutExtensionRecommendation | undefined;
  setCalloutExtensionRecommendation(value?: Recommendation.CalloutExtensionRecommendation): void;
  hasCalloutExtensionRecommendation(): boolean;
  clearCalloutExtensionRecommendation(): void;

  getSitelinkExtensionRecommendation(): Recommendation.SitelinkExtensionRecommendation | undefined;
  setSitelinkExtensionRecommendation(value?: Recommendation.SitelinkExtensionRecommendation): void;
  hasSitelinkExtensionRecommendation(): boolean;
  clearSitelinkExtensionRecommendation(): void;

  getCallExtensionRecommendation(): Recommendation.CallExtensionRecommendation | undefined;
  setCallExtensionRecommendation(value?: Recommendation.CallExtensionRecommendation): void;
  hasCallExtensionRecommendation(): boolean;
  clearCallExtensionRecommendation(): void;

  getKeywordMatchTypeRecommendation(): Recommendation.KeywordMatchTypeRecommendation | undefined;
  setKeywordMatchTypeRecommendation(value?: Recommendation.KeywordMatchTypeRecommendation): void;
  hasKeywordMatchTypeRecommendation(): boolean;
  clearKeywordMatchTypeRecommendation(): void;

  getMoveUnusedBudgetRecommendation(): Recommendation.MoveUnusedBudgetRecommendation | undefined;
  setMoveUnusedBudgetRecommendation(value?: Recommendation.MoveUnusedBudgetRecommendation): void;
  hasMoveUnusedBudgetRecommendation(): boolean;
  clearMoveUnusedBudgetRecommendation(): void;

  getRecommendationCase(): Recommendation.RecommendationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recommendation.AsObject;
  static toObject(includeInstance: boolean, msg: Recommendation): Recommendation.AsObject;
  static serializeBinaryToWriter(message: Recommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recommendation;
  static deserializeBinaryFromReader(message: Recommendation, reader: jspb.BinaryReader): Recommendation;
}

export namespace Recommendation {
  export type AsObject = {
    resourceName: string,
    type: google_ads_googleads_v2_enums_recommendation_type_pb.RecommendationTypeEnum.RecommendationType,
    impact?: Recommendation.RecommendationImpact.AsObject,
    campaignBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dismissed?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    campaignBudgetRecommendation?: Recommendation.CampaignBudgetRecommendation.AsObject,
    keywordRecommendation?: Recommendation.KeywordRecommendation.AsObject,
    textAdRecommendation?: Recommendation.TextAdRecommendation.AsObject,
    targetCpaOptInRecommendation?: Recommendation.TargetCpaOptInRecommendation.AsObject,
    maximizeConversionsOptInRecommendation?: Recommendation.MaximizeConversionsOptInRecommendation.AsObject,
    enhancedCpcOptInRecommendation?: Recommendation.EnhancedCpcOptInRecommendation.AsObject,
    searchPartnersOptInRecommendation?: Recommendation.SearchPartnersOptInRecommendation.AsObject,
    maximizeClicksOptInRecommendation?: Recommendation.MaximizeClicksOptInRecommendation.AsObject,
    optimizeAdRotationRecommendation?: Recommendation.OptimizeAdRotationRecommendation.AsObject,
    calloutExtensionRecommendation?: Recommendation.CalloutExtensionRecommendation.AsObject,
    sitelinkExtensionRecommendation?: Recommendation.SitelinkExtensionRecommendation.AsObject,
    callExtensionRecommendation?: Recommendation.CallExtensionRecommendation.AsObject,
    keywordMatchTypeRecommendation?: Recommendation.KeywordMatchTypeRecommendation.AsObject,
    moveUnusedBudgetRecommendation?: Recommendation.MoveUnusedBudgetRecommendation.AsObject,
  }

  export class RecommendationImpact extends jspb.Message {
    getBaseMetrics(): Recommendation.RecommendationMetrics | undefined;
    setBaseMetrics(value?: Recommendation.RecommendationMetrics): void;
    hasBaseMetrics(): boolean;
    clearBaseMetrics(): void;

    getPotentialMetrics(): Recommendation.RecommendationMetrics | undefined;
    setPotentialMetrics(value?: Recommendation.RecommendationMetrics): void;
    hasPotentialMetrics(): boolean;
    clearPotentialMetrics(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendationImpact.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendationImpact): RecommendationImpact.AsObject;
    static serializeBinaryToWriter(message: RecommendationImpact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendationImpact;
    static deserializeBinaryFromReader(message: RecommendationImpact, reader: jspb.BinaryReader): RecommendationImpact;
  }

  export namespace RecommendationImpact {
    export type AsObject = {
      baseMetrics?: Recommendation.RecommendationMetrics.AsObject,
      potentialMetrics?: Recommendation.RecommendationMetrics.AsObject,
    }
  }


  export class RecommendationMetrics extends jspb.Message {
    getImpressions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setImpressions(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasImpressions(): boolean;
    clearImpressions(): void;

    getClicks(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setClicks(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasClicks(): boolean;
    clearClicks(): void;

    getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasCostMicros(): boolean;
    clearCostMicros(): void;

    getConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setConversions(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasConversions(): boolean;
    clearConversions(): void;

    getVideoViews(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVideoViews(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasVideoViews(): boolean;
    clearVideoViews(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendationMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendationMetrics): RecommendationMetrics.AsObject;
    static serializeBinaryToWriter(message: RecommendationMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendationMetrics;
    static deserializeBinaryFromReader(message: RecommendationMetrics, reader: jspb.BinaryReader): RecommendationMetrics;
  }

  export namespace RecommendationMetrics {
    export type AsObject = {
      impressions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      clicks?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      conversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      videoViews?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
  }


  export class CampaignBudgetRecommendation extends jspb.Message {
    getCurrentBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCurrentBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasCurrentBudgetAmountMicros(): boolean;
    clearCurrentBudgetAmountMicros(): void;

    getRecommendedBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasRecommendedBudgetAmountMicros(): boolean;
    clearRecommendedBudgetAmountMicros(): void;

    getBudgetOptionsList(): Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption>;
    setBudgetOptionsList(value: Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption>): void;
    clearBudgetOptionsList(): void;
    addBudgetOptions(value?: Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption, index?: number): Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignBudgetRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignBudgetRecommendation): CampaignBudgetRecommendation.AsObject;
    static serializeBinaryToWriter(message: CampaignBudgetRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignBudgetRecommendation;
    static deserializeBinaryFromReader(message: CampaignBudgetRecommendation, reader: jspb.BinaryReader): CampaignBudgetRecommendation;
  }

  export namespace CampaignBudgetRecommendation {
    export type AsObject = {
      currentBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      recommendedBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      budgetOptionsList: Array<Recommendation.CampaignBudgetRecommendation.CampaignBudgetRecommendationOption.AsObject>,
    }

    export class CampaignBudgetRecommendationOption extends jspb.Message {
      getBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
      hasBudgetAmountMicros(): boolean;
      clearBudgetAmountMicros(): void;

      getImpact(): Recommendation.RecommendationImpact | undefined;
      setImpact(value?: Recommendation.RecommendationImpact): void;
      hasImpact(): boolean;
      clearImpact(): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CampaignBudgetRecommendationOption.AsObject;
      static toObject(includeInstance: boolean, msg: CampaignBudgetRecommendationOption): CampaignBudgetRecommendationOption.AsObject;
      static serializeBinaryToWriter(message: CampaignBudgetRecommendationOption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CampaignBudgetRecommendationOption;
      static deserializeBinaryFromReader(message: CampaignBudgetRecommendationOption, reader: jspb.BinaryReader): CampaignBudgetRecommendationOption;
    }

    export namespace CampaignBudgetRecommendationOption {
      export type AsObject = {
        budgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        impact?: Recommendation.RecommendationImpact.AsObject,
      }
    }

  }


  export class KeywordRecommendation extends jspb.Message {
    getKeyword(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
    setKeyword(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;
    hasKeyword(): boolean;
    clearKeyword(): void;

    getRecommendedCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasRecommendedCpcBidMicros(): boolean;
    clearRecommendedCpcBidMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordRecommendation): KeywordRecommendation.AsObject;
    static serializeBinaryToWriter(message: KeywordRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordRecommendation;
    static deserializeBinaryFromReader(message: KeywordRecommendation, reader: jspb.BinaryReader): KeywordRecommendation;
  }

  export namespace KeywordRecommendation {
    export type AsObject = {
      keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
      recommendedCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class SitelinkExtensionRecommendation extends jspb.Message {
    getRecommendedExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem>;
    setRecommendedExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem>): void;
    clearRecommendedExtensionsList(): void;
    addRecommendedExtensions(value?: google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SitelinkExtensionRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: SitelinkExtensionRecommendation): SitelinkExtensionRecommendation.AsObject;
    static serializeBinaryToWriter(message: SitelinkExtensionRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SitelinkExtensionRecommendation;
    static deserializeBinaryFromReader(message: SitelinkExtensionRecommendation, reader: jspb.BinaryReader): SitelinkExtensionRecommendation;
  }

  export namespace SitelinkExtensionRecommendation {
    export type AsObject = {
      recommendedExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.SitelinkFeedItem.AsObject>,
    }
  }


  export class MoveUnusedBudgetRecommendation extends jspb.Message {
    getExcessCampaignBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
    setExcessCampaignBudget(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasExcessCampaignBudget(): boolean;
    clearExcessCampaignBudget(): void;

    getBudgetRecommendation(): Recommendation.CampaignBudgetRecommendation | undefined;
    setBudgetRecommendation(value?: Recommendation.CampaignBudgetRecommendation): void;
    hasBudgetRecommendation(): boolean;
    clearBudgetRecommendation(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveUnusedBudgetRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: MoveUnusedBudgetRecommendation): MoveUnusedBudgetRecommendation.AsObject;
    static serializeBinaryToWriter(message: MoveUnusedBudgetRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveUnusedBudgetRecommendation;
    static deserializeBinaryFromReader(message: MoveUnusedBudgetRecommendation, reader: jspb.BinaryReader): MoveUnusedBudgetRecommendation;
  }

  export namespace MoveUnusedBudgetRecommendation {
    export type AsObject = {
      excessCampaignBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
      budgetRecommendation?: Recommendation.CampaignBudgetRecommendation.AsObject,
    }
  }


  export class TextAdRecommendation extends jspb.Message {
    getAd(): google_ads_googleads_v2_resources_ad_pb.Ad | undefined;
    setAd(value?: google_ads_googleads_v2_resources_ad_pb.Ad): void;
    hasAd(): boolean;
    clearAd(): void;

    getCreationDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreationDate(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasCreationDate(): boolean;
    clearCreationDate(): void;

    getAutoApplyDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAutoApplyDate(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasAutoApplyDate(): boolean;
    clearAutoApplyDate(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAdRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: TextAdRecommendation): TextAdRecommendation.AsObject;
    static serializeBinaryToWriter(message: TextAdRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAdRecommendation;
    static deserializeBinaryFromReader(message: TextAdRecommendation, reader: jspb.BinaryReader): TextAdRecommendation;
  }

  export namespace TextAdRecommendation {
    export type AsObject = {
      ad?: google_ads_googleads_v2_resources_ad_pb.Ad.AsObject,
      creationDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
      autoApplyDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }


  export class TargetCpaOptInRecommendation extends jspb.Message {
    getOptionsList(): Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption>;
    setOptionsList(value: Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption>): void;
    clearOptionsList(): void;
    addOptions(value?: Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption, index?: number): Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption;

    getRecommendedTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasRecommendedTargetCpaMicros(): boolean;
    clearRecommendedTargetCpaMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCpaOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendation): TargetCpaOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: TargetCpaOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendation;
    static deserializeBinaryFromReader(message: TargetCpaOptInRecommendation, reader: jspb.BinaryReader): TargetCpaOptInRecommendation;
  }

  export namespace TargetCpaOptInRecommendation {
    export type AsObject = {
      optionsList: Array<Recommendation.TargetCpaOptInRecommendation.TargetCpaOptInRecommendationOption.AsObject>,
      recommendedTargetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export class TargetCpaOptInRecommendationOption extends jspb.Message {
      getGoal(): google_ads_googleads_v2_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal;
      setGoal(value: google_ads_googleads_v2_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal): void;

      getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
      hasTargetCpaMicros(): boolean;
      clearTargetCpaMicros(): void;

      getRequiredCampaignBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
      setRequiredCampaignBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
      hasRequiredCampaignBudgetAmountMicros(): boolean;
      clearRequiredCampaignBudgetAmountMicros(): void;

      getImpact(): Recommendation.RecommendationImpact | undefined;
      setImpact(value?: Recommendation.RecommendationImpact): void;
      hasImpact(): boolean;
      clearImpact(): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TargetCpaOptInRecommendationOption.AsObject;
      static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendationOption): TargetCpaOptInRecommendationOption.AsObject;
      static serializeBinaryToWriter(message: TargetCpaOptInRecommendationOption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendationOption;
      static deserializeBinaryFromReader(message: TargetCpaOptInRecommendationOption, reader: jspb.BinaryReader): TargetCpaOptInRecommendationOption;
    }

    export namespace TargetCpaOptInRecommendationOption {
      export type AsObject = {
        goal: google_ads_googleads_v2_enums_target_cpa_opt_in_recommendation_goal_pb.TargetCpaOptInRecommendationGoalEnum.TargetCpaOptInRecommendationGoal,
        targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        requiredCampaignBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        impact?: Recommendation.RecommendationImpact.AsObject,
      }
    }

  }


  export class MaximizeConversionsOptInRecommendation extends jspb.Message {
    getRecommendedBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasRecommendedBudgetAmountMicros(): boolean;
    clearRecommendedBudgetAmountMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaximizeConversionsOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: MaximizeConversionsOptInRecommendation): MaximizeConversionsOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: MaximizeConversionsOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaximizeConversionsOptInRecommendation;
    static deserializeBinaryFromReader(message: MaximizeConversionsOptInRecommendation, reader: jspb.BinaryReader): MaximizeConversionsOptInRecommendation;
  }

  export namespace MaximizeConversionsOptInRecommendation {
    export type AsObject = {
      recommendedBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class OptimizeAdRotationRecommendation extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptimizeAdRotationRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: OptimizeAdRotationRecommendation): OptimizeAdRotationRecommendation.AsObject;
    static serializeBinaryToWriter(message: OptimizeAdRotationRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptimizeAdRotationRecommendation;
    static deserializeBinaryFromReader(message: OptimizeAdRotationRecommendation, reader: jspb.BinaryReader): OptimizeAdRotationRecommendation;
  }

  export namespace OptimizeAdRotationRecommendation {
    export type AsObject = {
    }
  }


  export class EnhancedCpcOptInRecommendation extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnhancedCpcOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: EnhancedCpcOptInRecommendation): EnhancedCpcOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: EnhancedCpcOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnhancedCpcOptInRecommendation;
    static deserializeBinaryFromReader(message: EnhancedCpcOptInRecommendation, reader: jspb.BinaryReader): EnhancedCpcOptInRecommendation;
  }

  export namespace EnhancedCpcOptInRecommendation {
    export type AsObject = {
    }
  }


  export class SearchPartnersOptInRecommendation extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchPartnersOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: SearchPartnersOptInRecommendation): SearchPartnersOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: SearchPartnersOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchPartnersOptInRecommendation;
    static deserializeBinaryFromReader(message: SearchPartnersOptInRecommendation, reader: jspb.BinaryReader): SearchPartnersOptInRecommendation;
  }

  export namespace SearchPartnersOptInRecommendation {
    export type AsObject = {
    }
  }


  export class KeywordMatchTypeRecommendation extends jspb.Message {
    getKeyword(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
    setKeyword(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;
    hasKeyword(): boolean;
    clearKeyword(): void;

    getRecommendedMatchType(): google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
    setRecommendedMatchType(value: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeywordMatchTypeRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: KeywordMatchTypeRecommendation): KeywordMatchTypeRecommendation.AsObject;
    static serializeBinaryToWriter(message: KeywordMatchTypeRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeywordMatchTypeRecommendation;
    static deserializeBinaryFromReader(message: KeywordMatchTypeRecommendation, reader: jspb.BinaryReader): KeywordMatchTypeRecommendation;
  }

  export namespace KeywordMatchTypeRecommendation {
    export type AsObject = {
      keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
      recommendedMatchType: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
    }
  }


  export class MaximizeClicksOptInRecommendation extends jspb.Message {
    getRecommendedBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecommendedBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasRecommendedBudgetAmountMicros(): boolean;
    clearRecommendedBudgetAmountMicros(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaximizeClicksOptInRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: MaximizeClicksOptInRecommendation): MaximizeClicksOptInRecommendation.AsObject;
    static serializeBinaryToWriter(message: MaximizeClicksOptInRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaximizeClicksOptInRecommendation;
    static deserializeBinaryFromReader(message: MaximizeClicksOptInRecommendation, reader: jspb.BinaryReader): MaximizeClicksOptInRecommendation;
  }

  export namespace MaximizeClicksOptInRecommendation {
    export type AsObject = {
      recommendedBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }


  export class CalloutExtensionRecommendation extends jspb.Message {
    getRecommendedExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem>;
    setRecommendedExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem>): void;
    clearRecommendedExtensionsList(): void;
    addRecommendedExtensions(value?: google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalloutExtensionRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: CalloutExtensionRecommendation): CalloutExtensionRecommendation.AsObject;
    static serializeBinaryToWriter(message: CalloutExtensionRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalloutExtensionRecommendation;
    static deserializeBinaryFromReader(message: CalloutExtensionRecommendation, reader: jspb.BinaryReader): CalloutExtensionRecommendation;
  }

  export namespace CalloutExtensionRecommendation {
    export type AsObject = {
      recommendedExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.CalloutFeedItem.AsObject>,
    }
  }


  export class CallExtensionRecommendation extends jspb.Message {
    getRecommendedExtensionsList(): Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem>;
    setRecommendedExtensionsList(value: Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem>): void;
    clearRecommendedExtensionsList(): void;
    addRecommendedExtensions(value?: google_ads_googleads_v2_common_extensions_pb.CallFeedItem, index?: number): google_ads_googleads_v2_common_extensions_pb.CallFeedItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CallExtensionRecommendation.AsObject;
    static toObject(includeInstance: boolean, msg: CallExtensionRecommendation): CallExtensionRecommendation.AsObject;
    static serializeBinaryToWriter(message: CallExtensionRecommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CallExtensionRecommendation;
    static deserializeBinaryFromReader(message: CallExtensionRecommendation, reader: jspb.BinaryReader): CallExtensionRecommendation;
  }

  export namespace CallExtensionRecommendation {
    export type AsObject = {
      recommendedExtensionsList: Array<google_ads_googleads_v2_common_extensions_pb.CallFeedItem.AsObject>,
    }
  }


  export enum RecommendationCase { 
    RECOMMENDATION_NOT_SET = 0,
    CAMPAIGN_BUDGET_RECOMMENDATION = 4,
    KEYWORD_RECOMMENDATION = 8,
    TEXT_AD_RECOMMENDATION = 9,
    TARGET_CPA_OPT_IN_RECOMMENDATION = 10,
    MAXIMIZE_CONVERSIONS_OPT_IN_RECOMMENDATION = 11,
    ENHANCED_CPC_OPT_IN_RECOMMENDATION = 12,
    SEARCH_PARTNERS_OPT_IN_RECOMMENDATION = 14,
    MAXIMIZE_CLICKS_OPT_IN_RECOMMENDATION = 15,
    OPTIMIZE_AD_ROTATION_RECOMMENDATION = 16,
    CALLOUT_EXTENSION_RECOMMENDATION = 17,
    SITELINK_EXTENSION_RECOMMENDATION = 18,
    CALL_EXTENSION_RECOMMENDATION = 19,
    KEYWORD_MATCH_TYPE_RECOMMENDATION = 20,
    MOVE_UNUSED_BUDGET_RECOMMENDATION = 21,
  }
}

