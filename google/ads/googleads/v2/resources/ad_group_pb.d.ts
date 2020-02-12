import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_custom_parameter_pb from '../../../../../google/ads/googleads/v2/common/custom_parameter_pb';
import * as google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb from '../../../../../google/ads/googleads/v2/common/explorer_auto_optimizer_setting_pb';
import * as google_ads_googleads_v2_common_targeting_setting_pb from '../../../../../google/ads/googleads/v2/common/targeting_setting_pb';
import * as google_ads_googleads_v2_enums_ad_group_ad_rotation_mode_pb from '../../../../../google/ads/googleads/v2/enums/ad_group_ad_rotation_mode_pb';
import * as google_ads_googleads_v2_enums_ad_group_status_pb from '../../../../../google/ads/googleads/v2/enums/ad_group_status_pb';
import * as google_ads_googleads_v2_enums_ad_group_type_pb from '../../../../../google/ads/googleads/v2/enums/ad_group_type_pb';
import * as google_ads_googleads_v2_enums_bidding_source_pb from '../../../../../google/ads/googleads/v2/enums/bidding_source_pb';
import * as google_ads_googleads_v2_enums_targeting_dimension_pb from '../../../../../google/ads/googleads/v2/enums/targeting_dimension_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroup extends jspb.Message {
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

  getStatus(): google_ads_googleads_v2_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus;
  setStatus(value: google_ads_googleads_v2_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus): void;

  getType(): google_ads_googleads_v2_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType;
  setType(value: google_ads_googleads_v2_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType): void;

  getAdRotationMode(): google_ads_googleads_v2_enums_ad_group_ad_rotation_mode_pb.AdGroupAdRotationModeEnum.AdGroupAdRotationMode;
  setAdRotationMode(value: google_ads_googleads_v2_enums_ad_group_ad_rotation_mode_pb.AdGroupAdRotationModeEnum.AdGroupAdRotationMode): void;

  getBaseAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBaseAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasBaseAdGroup(): boolean;
  clearBaseAdGroup(): void;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;

  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  clearUrlCustomParametersList(): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;

  getCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCpmBidMicros(): boolean;
  clearCpmBidMicros(): void;

  getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTargetCpaMicros(): boolean;
  clearTargetCpaMicros(): void;

  getCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCpvBidMicros(): boolean;
  clearCpvBidMicros(): void;

  getTargetCpmMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetCpmMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasTargetCpmMicros(): boolean;
  clearTargetCpmMicros(): void;

  getTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasTargetRoas(): boolean;
  clearTargetRoas(): void;

  getPercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPercentCpcBidMicros(): boolean;
  clearPercentCpcBidMicros(): void;

  getExplorerAutoOptimizerSetting(): google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting | undefined;
  setExplorerAutoOptimizerSetting(value?: google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting): void;
  hasExplorerAutoOptimizerSetting(): boolean;
  clearExplorerAutoOptimizerSetting(): void;

  getDisplayCustomBidDimension(): google_ads_googleads_v2_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension;
  setDisplayCustomBidDimension(value: google_ads_googleads_v2_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension): void;

  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;

  getTargetingSetting(): google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting | undefined;
  setTargetingSetting(value?: google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting): void;
  hasTargetingSetting(): boolean;
  clearTargetingSetting(): void;

  getEffectiveTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasEffectiveTargetCpaMicros(): boolean;
  clearEffectiveTargetCpaMicros(): void;

  getEffectiveTargetCpaSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveTargetCpaSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  getEffectiveTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setEffectiveTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): void;
  hasEffectiveTargetRoas(): boolean;
  clearEffectiveTargetRoas(): void;

  getEffectiveTargetRoasSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveTargetRoasSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  getLabelsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setLabelsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  clearLabelsList(): void;
  addLabels(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroup): AdGroup.AsObject;
  static serializeBinaryToWriter(message: AdGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroup;
  static deserializeBinaryFromReader(message: AdGroup, reader: jspb.BinaryReader): AdGroup;
}

export namespace AdGroup {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_ad_group_status_pb.AdGroupStatusEnum.AdGroupStatus,
    type: google_ads_googleads_v2_enums_ad_group_type_pb.AdGroupTypeEnum.AdGroupType,
    adRotationMode: google_ads_googleads_v2_enums_ad_group_ad_rotation_mode_pb.AdGroupAdRotationModeEnum.AdGroupAdRotationMode,
    baseAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    targetCpmMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    targetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    percentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    explorerAutoOptimizerSetting?: google_ads_googleads_v2_common_explorer_auto_optimizer_setting_pb.ExplorerAutoOptimizerSetting.AsObject,
    displayCustomBidDimension: google_ads_googleads_v2_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetingSetting?: google_ads_googleads_v2_common_targeting_setting_pb.TargetingSetting.AsObject,
    effectiveTargetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveTargetCpaSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectiveTargetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    effectiveTargetRoasSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    labelsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

