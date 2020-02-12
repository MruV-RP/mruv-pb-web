import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_metrics_pb from '../../../../../google/ads/googleads/v2/common/metrics_pb';
import * as google_ads_googleads_v2_common_segments_pb from '../../../../../google/ads/googleads/v2/common/segments_pb';
import * as google_ads_googleads_v2_resources_account_budget_pb from '../../../../../google/ads/googleads/v2/resources/account_budget_pb';
import * as google_ads_googleads_v2_resources_account_budget_proposal_pb from '../../../../../google/ads/googleads/v2/resources/account_budget_proposal_pb';
import * as google_ads_googleads_v2_resources_ad_group_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_pb';
import * as google_ads_googleads_v2_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_ad_pb';
import * as google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_ad_asset_view_pb';
import * as google_ads_googleads_v2_resources_ad_group_ad_label_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_ad_label_pb';
import * as google_ads_googleads_v2_resources_ad_group_audience_view_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_audience_view_pb';
import * as google_ads_googleads_v2_resources_ad_group_bid_modifier_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_bid_modifier_pb';
import * as google_ads_googleads_v2_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_criterion_pb';
import * as google_ads_googleads_v2_resources_ad_group_criterion_label_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_criterion_label_pb';
import * as google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_criterion_simulation_pb';
import * as google_ads_googleads_v2_resources_ad_group_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_extension_setting_pb';
import * as google_ads_googleads_v2_resources_ad_group_feed_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_feed_pb';
import * as google_ads_googleads_v2_resources_ad_group_label_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_label_pb';
import * as google_ads_googleads_v2_resources_ad_group_simulation_pb from '../../../../../google/ads/googleads/v2/resources/ad_group_simulation_pb';
import * as google_ads_googleads_v2_resources_ad_parameter_pb from '../../../../../google/ads/googleads/v2/resources/ad_parameter_pb';
import * as google_ads_googleads_v2_resources_ad_schedule_view_pb from '../../../../../google/ads/googleads/v2/resources/ad_schedule_view_pb';
import * as google_ads_googleads_v2_resources_age_range_view_pb from '../../../../../google/ads/googleads/v2/resources/age_range_view_pb';
import * as google_ads_googleads_v2_resources_asset_pb from '../../../../../google/ads/googleads/v2/resources/asset_pb';
import * as google_ads_googleads_v2_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v2/resources/bidding_strategy_pb';
import * as google_ads_googleads_v2_resources_billing_setup_pb from '../../../../../google/ads/googleads/v2/resources/billing_setup_pb';
import * as google_ads_googleads_v2_resources_campaign_pb from '../../../../../google/ads/googleads/v2/resources/campaign_pb';
import * as google_ads_googleads_v2_resources_campaign_audience_view_pb from '../../../../../google/ads/googleads/v2/resources/campaign_audience_view_pb';
import * as google_ads_googleads_v2_resources_campaign_bid_modifier_pb from '../../../../../google/ads/googleads/v2/resources/campaign_bid_modifier_pb';
import * as google_ads_googleads_v2_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v2/resources/campaign_budget_pb';
import * as google_ads_googleads_v2_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v2/resources/campaign_criterion_pb';
import * as google_ads_googleads_v2_resources_campaign_criterion_simulation_pb from '../../../../../google/ads/googleads/v2/resources/campaign_criterion_simulation_pb';
import * as google_ads_googleads_v2_resources_campaign_draft_pb from '../../../../../google/ads/googleads/v2/resources/campaign_draft_pb';
import * as google_ads_googleads_v2_resources_campaign_experiment_pb from '../../../../../google/ads/googleads/v2/resources/campaign_experiment_pb';
import * as google_ads_googleads_v2_resources_campaign_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/campaign_extension_setting_pb';
import * as google_ads_googleads_v2_resources_campaign_feed_pb from '../../../../../google/ads/googleads/v2/resources/campaign_feed_pb';
import * as google_ads_googleads_v2_resources_campaign_label_pb from '../../../../../google/ads/googleads/v2/resources/campaign_label_pb';
import * as google_ads_googleads_v2_resources_campaign_shared_set_pb from '../../../../../google/ads/googleads/v2/resources/campaign_shared_set_pb';
import * as google_ads_googleads_v2_resources_carrier_constant_pb from '../../../../../google/ads/googleads/v2/resources/carrier_constant_pb';
import * as google_ads_googleads_v2_resources_change_status_pb from '../../../../../google/ads/googleads/v2/resources/change_status_pb';
import * as google_ads_googleads_v2_resources_click_view_pb from '../../../../../google/ads/googleads/v2/resources/click_view_pb';
import * as google_ads_googleads_v2_resources_conversion_action_pb from '../../../../../google/ads/googleads/v2/resources/conversion_action_pb';
import * as google_ads_googleads_v2_resources_custom_interest_pb from '../../../../../google/ads/googleads/v2/resources/custom_interest_pb';
import * as google_ads_googleads_v2_resources_customer_pb from '../../../../../google/ads/googleads/v2/resources/customer_pb';
import * as google_ads_googleads_v2_resources_customer_client_pb from '../../../../../google/ads/googleads/v2/resources/customer_client_pb';
import * as google_ads_googleads_v2_resources_customer_client_link_pb from '../../../../../google/ads/googleads/v2/resources/customer_client_link_pb';
import * as google_ads_googleads_v2_resources_customer_extension_setting_pb from '../../../../../google/ads/googleads/v2/resources/customer_extension_setting_pb';
import * as google_ads_googleads_v2_resources_customer_feed_pb from '../../../../../google/ads/googleads/v2/resources/customer_feed_pb';
import * as google_ads_googleads_v2_resources_customer_label_pb from '../../../../../google/ads/googleads/v2/resources/customer_label_pb';
import * as google_ads_googleads_v2_resources_customer_manager_link_pb from '../../../../../google/ads/googleads/v2/resources/customer_manager_link_pb';
import * as google_ads_googleads_v2_resources_customer_negative_criterion_pb from '../../../../../google/ads/googleads/v2/resources/customer_negative_criterion_pb';
import * as google_ads_googleads_v2_resources_detail_placement_view_pb from '../../../../../google/ads/googleads/v2/resources/detail_placement_view_pb';
import * as google_ads_googleads_v2_resources_display_keyword_view_pb from '../../../../../google/ads/googleads/v2/resources/display_keyword_view_pb';
import * as google_ads_googleads_v2_resources_distance_view_pb from '../../../../../google/ads/googleads/v2/resources/distance_view_pb';
import * as google_ads_googleads_v2_resources_domain_category_pb from '../../../../../google/ads/googleads/v2/resources/domain_category_pb';
import * as google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb from '../../../../../google/ads/googleads/v2/resources/dynamic_search_ads_search_term_view_pb';
import * as google_ads_googleads_v2_resources_expanded_landing_page_view_pb from '../../../../../google/ads/googleads/v2/resources/expanded_landing_page_view_pb';
import * as google_ads_googleads_v2_resources_extension_feed_item_pb from '../../../../../google/ads/googleads/v2/resources/extension_feed_item_pb';
import * as google_ads_googleads_v2_resources_feed_pb from '../../../../../google/ads/googleads/v2/resources/feed_pb';
import * as google_ads_googleads_v2_resources_feed_item_pb from '../../../../../google/ads/googleads/v2/resources/feed_item_pb';
import * as google_ads_googleads_v2_resources_feed_item_target_pb from '../../../../../google/ads/googleads/v2/resources/feed_item_target_pb';
import * as google_ads_googleads_v2_resources_feed_mapping_pb from '../../../../../google/ads/googleads/v2/resources/feed_mapping_pb';
import * as google_ads_googleads_v2_resources_feed_placeholder_view_pb from '../../../../../google/ads/googleads/v2/resources/feed_placeholder_view_pb';
import * as google_ads_googleads_v2_resources_gender_view_pb from '../../../../../google/ads/googleads/v2/resources/gender_view_pb';
import * as google_ads_googleads_v2_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v2/resources/geo_target_constant_pb';
import * as google_ads_googleads_v2_resources_geographic_view_pb from '../../../../../google/ads/googleads/v2/resources/geographic_view_pb';
import * as google_ads_googleads_v2_resources_group_placement_view_pb from '../../../../../google/ads/googleads/v2/resources/group_placement_view_pb';
import * as google_ads_googleads_v2_resources_hotel_group_view_pb from '../../../../../google/ads/googleads/v2/resources/hotel_group_view_pb';
import * as google_ads_googleads_v2_resources_hotel_performance_view_pb from '../../../../../google/ads/googleads/v2/resources/hotel_performance_view_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_ad_group_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_ad_group_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_campaign_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_campaign_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_keyword_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_keyword_pb';
import * as google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb from '../../../../../google/ads/googleads/v2/resources/keyword_plan_negative_keyword_pb';
import * as google_ads_googleads_v2_resources_keyword_view_pb from '../../../../../google/ads/googleads/v2/resources/keyword_view_pb';
import * as google_ads_googleads_v2_resources_label_pb from '../../../../../google/ads/googleads/v2/resources/label_pb';
import * as google_ads_googleads_v2_resources_landing_page_view_pb from '../../../../../google/ads/googleads/v2/resources/landing_page_view_pb';
import * as google_ads_googleads_v2_resources_language_constant_pb from '../../../../../google/ads/googleads/v2/resources/language_constant_pb';
import * as google_ads_googleads_v2_resources_location_view_pb from '../../../../../google/ads/googleads/v2/resources/location_view_pb';
import * as google_ads_googleads_v2_resources_managed_placement_view_pb from '../../../../../google/ads/googleads/v2/resources/managed_placement_view_pb';
import * as google_ads_googleads_v2_resources_media_file_pb from '../../../../../google/ads/googleads/v2/resources/media_file_pb';
import * as google_ads_googleads_v2_resources_mobile_app_category_constant_pb from '../../../../../google/ads/googleads/v2/resources/mobile_app_category_constant_pb';
import * as google_ads_googleads_v2_resources_mobile_device_constant_pb from '../../../../../google/ads/googleads/v2/resources/mobile_device_constant_pb';
import * as google_ads_googleads_v2_resources_mutate_job_pb from '../../../../../google/ads/googleads/v2/resources/mutate_job_pb';
import * as google_ads_googleads_v2_resources_operating_system_version_constant_pb from '../../../../../google/ads/googleads/v2/resources/operating_system_version_constant_pb';
import * as google_ads_googleads_v2_resources_paid_organic_search_term_view_pb from '../../../../../google/ads/googleads/v2/resources/paid_organic_search_term_view_pb';
import * as google_ads_googleads_v2_resources_parental_status_view_pb from '../../../../../google/ads/googleads/v2/resources/parental_status_view_pb';
import * as google_ads_googleads_v2_resources_product_bidding_category_constant_pb from '../../../../../google/ads/googleads/v2/resources/product_bidding_category_constant_pb';
import * as google_ads_googleads_v2_resources_product_group_view_pb from '../../../../../google/ads/googleads/v2/resources/product_group_view_pb';
import * as google_ads_googleads_v2_resources_recommendation_pb from '../../../../../google/ads/googleads/v2/resources/recommendation_pb';
import * as google_ads_googleads_v2_resources_remarketing_action_pb from '../../../../../google/ads/googleads/v2/resources/remarketing_action_pb';
import * as google_ads_googleads_v2_resources_search_term_view_pb from '../../../../../google/ads/googleads/v2/resources/search_term_view_pb';
import * as google_ads_googleads_v2_resources_shared_criterion_pb from '../../../../../google/ads/googleads/v2/resources/shared_criterion_pb';
import * as google_ads_googleads_v2_resources_shared_set_pb from '../../../../../google/ads/googleads/v2/resources/shared_set_pb';
import * as google_ads_googleads_v2_resources_shopping_performance_view_pb from '../../../../../google/ads/googleads/v2/resources/shopping_performance_view_pb';
import * as google_ads_googleads_v2_resources_topic_constant_pb from '../../../../../google/ads/googleads/v2/resources/topic_constant_pb';
import * as google_ads_googleads_v2_resources_topic_view_pb from '../../../../../google/ads/googleads/v2/resources/topic_view_pb';
import * as google_ads_googleads_v2_resources_user_interest_pb from '../../../../../google/ads/googleads/v2/resources/user_interest_pb';
import * as google_ads_googleads_v2_resources_user_list_pb from '../../../../../google/ads/googleads/v2/resources/user_list_pb';
import * as google_ads_googleads_v2_resources_user_location_view_pb from '../../../../../google/ads/googleads/v2/resources/user_location_view_pb';
import * as google_ads_googleads_v2_resources_video_pb from '../../../../../google/ads/googleads/v2/resources/video_pb';
import * as google_ads_googleads_v2_services_ad_group_ad_label_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_ad_label_service_pb';
import * as google_ads_googleads_v2_services_ad_group_ad_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_ad_service_pb';
import * as google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_bid_modifier_service_pb';
import * as google_ads_googleads_v2_services_ad_group_criterion_label_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_criterion_label_service_pb';
import * as google_ads_googleads_v2_services_ad_group_criterion_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_criterion_service_pb';
import * as google_ads_googleads_v2_services_ad_group_extension_setting_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_extension_setting_service_pb';
import * as google_ads_googleads_v2_services_ad_group_feed_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_feed_service_pb';
import * as google_ads_googleads_v2_services_ad_group_label_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_label_service_pb';
import * as google_ads_googleads_v2_services_ad_group_service_pb from '../../../../../google/ads/googleads/v2/services/ad_group_service_pb';
import * as google_ads_googleads_v2_services_ad_parameter_service_pb from '../../../../../google/ads/googleads/v2/services/ad_parameter_service_pb';
import * as google_ads_googleads_v2_services_asset_service_pb from '../../../../../google/ads/googleads/v2/services/asset_service_pb';
import * as google_ads_googleads_v2_services_bidding_strategy_service_pb from '../../../../../google/ads/googleads/v2/services/bidding_strategy_service_pb';
import * as google_ads_googleads_v2_services_campaign_bid_modifier_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_bid_modifier_service_pb';
import * as google_ads_googleads_v2_services_campaign_budget_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_budget_service_pb';
import * as google_ads_googleads_v2_services_campaign_criterion_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_criterion_service_pb';
import * as google_ads_googleads_v2_services_campaign_draft_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_draft_service_pb';
import * as google_ads_googleads_v2_services_campaign_experiment_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_experiment_service_pb';
import * as google_ads_googleads_v2_services_campaign_extension_setting_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_extension_setting_service_pb';
import * as google_ads_googleads_v2_services_campaign_feed_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_feed_service_pb';
import * as google_ads_googleads_v2_services_campaign_label_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_label_service_pb';
import * as google_ads_googleads_v2_services_campaign_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_service_pb';
import * as google_ads_googleads_v2_services_campaign_shared_set_service_pb from '../../../../../google/ads/googleads/v2/services/campaign_shared_set_service_pb';
import * as google_ads_googleads_v2_services_conversion_action_service_pb from '../../../../../google/ads/googleads/v2/services/conversion_action_service_pb';
import * as google_ads_googleads_v2_services_customer_extension_setting_service_pb from '../../../../../google/ads/googleads/v2/services/customer_extension_setting_service_pb';
import * as google_ads_googleads_v2_services_customer_feed_service_pb from '../../../../../google/ads/googleads/v2/services/customer_feed_service_pb';
import * as google_ads_googleads_v2_services_customer_label_service_pb from '../../../../../google/ads/googleads/v2/services/customer_label_service_pb';
import * as google_ads_googleads_v2_services_customer_negative_criterion_service_pb from '../../../../../google/ads/googleads/v2/services/customer_negative_criterion_service_pb';
import * as google_ads_googleads_v2_services_customer_service_pb from '../../../../../google/ads/googleads/v2/services/customer_service_pb';
import * as google_ads_googleads_v2_services_extension_feed_item_service_pb from '../../../../../google/ads/googleads/v2/services/extension_feed_item_service_pb';
import * as google_ads_googleads_v2_services_feed_item_service_pb from '../../../../../google/ads/googleads/v2/services/feed_item_service_pb';
import * as google_ads_googleads_v2_services_feed_item_target_service_pb from '../../../../../google/ads/googleads/v2/services/feed_item_target_service_pb';
import * as google_ads_googleads_v2_services_feed_mapping_service_pb from '../../../../../google/ads/googleads/v2/services/feed_mapping_service_pb';
import * as google_ads_googleads_v2_services_feed_service_pb from '../../../../../google/ads/googleads/v2/services/feed_service_pb';
import * as google_ads_googleads_v2_services_label_service_pb from '../../../../../google/ads/googleads/v2/services/label_service_pb';
import * as google_ads_googleads_v2_services_media_file_service_pb from '../../../../../google/ads/googleads/v2/services/media_file_service_pb';
import * as google_ads_googleads_v2_services_remarketing_action_service_pb from '../../../../../google/ads/googleads/v2/services/remarketing_action_service_pb';
import * as google_ads_googleads_v2_services_shared_criterion_service_pb from '../../../../../google/ads/googleads/v2/services/shared_criterion_service_pb';
import * as google_ads_googleads_v2_services_shared_set_service_pb from '../../../../../google/ads/googleads/v2/services/shared_set_service_pb';
import * as google_ads_googleads_v2_services_user_list_service_pb from '../../../../../google/ads/googleads/v2/services/user_list_service_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';
import * as google_api_client_pb from '../../../../../google/api/client_pb';

export class SearchGoogleAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  getReturnSummaryRow(): boolean;
  setReturnSummaryRow(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsRequest): SearchGoogleAdsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsRequest;
  static deserializeBinaryFromReader(message: SearchGoogleAdsRequest, reader: jspb.BinaryReader): SearchGoogleAdsRequest;
}

export namespace SearchGoogleAdsRequest {
  export type AsObject = {
    customerId: string,
    query: string,
    pageToken: string,
    pageSize: number,
    validateOnly: boolean,
    returnSummaryRow: boolean,
  }
}

export class SearchGoogleAdsResponse extends jspb.Message {
  getResultsList(): Array<GoogleAdsRow>;
  setResultsList(value: Array<GoogleAdsRow>): void;
  clearResultsList(): void;
  addResults(value?: GoogleAdsRow, index?: number): GoogleAdsRow;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalResultsCount(): number;
  setTotalResultsCount(value: number): void;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasFieldMask(): boolean;
  clearFieldMask(): void;

  getSummaryRow(): GoogleAdsRow | undefined;
  setSummaryRow(value?: GoogleAdsRow): void;
  hasSummaryRow(): boolean;
  clearSummaryRow(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsResponse): SearchGoogleAdsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchGoogleAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsResponse;
  static deserializeBinaryFromReader(message: SearchGoogleAdsResponse, reader: jspb.BinaryReader): SearchGoogleAdsResponse;
}

export namespace SearchGoogleAdsResponse {
  export type AsObject = {
    resultsList: Array<GoogleAdsRow.AsObject>,
    nextPageToken: string,
    totalResultsCount: number,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    summaryRow?: GoogleAdsRow.AsObject,
  }
}

export class GoogleAdsRow extends jspb.Message {
  getAccountBudget(): google_ads_googleads_v2_resources_account_budget_pb.AccountBudget | undefined;
  setAccountBudget(value?: google_ads_googleads_v2_resources_account_budget_pb.AccountBudget): void;
  hasAccountBudget(): boolean;
  clearAccountBudget(): void;

  getAccountBudgetProposal(): google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal | undefined;
  setAccountBudgetProposal(value?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal): void;
  hasAccountBudgetProposal(): boolean;
  clearAccountBudgetProposal(): void;

  getAdGroup(): google_ads_googleads_v2_resources_ad_group_pb.AdGroup | undefined;
  setAdGroup(value?: google_ads_googleads_v2_resources_ad_group_pb.AdGroup): void;
  hasAdGroup(): boolean;
  clearAdGroup(): void;

  getAdGroupAd(): google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setAdGroupAd(value?: google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd): void;
  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;

  getAdGroupAdAssetView(): google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView | undefined;
  setAdGroupAdAssetView(value?: google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView): void;
  hasAdGroupAdAssetView(): boolean;
  clearAdGroupAdAssetView(): void;

  getAdGroupAdLabel(): google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel | undefined;
  setAdGroupAdLabel(value?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel): void;
  hasAdGroupAdLabel(): boolean;
  clearAdGroupAdLabel(): void;

  getAdGroupAudienceView(): google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView | undefined;
  setAdGroupAudienceView(value?: google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView): void;
  hasAdGroupAudienceView(): boolean;
  clearAdGroupAudienceView(): void;

  getAdGroupBidModifier(): google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setAdGroupBidModifier(value?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): void;
  hasAdGroupBidModifier(): boolean;
  clearAdGroupBidModifier(): void;

  getAdGroupCriterion(): google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setAdGroupCriterion(value?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion): void;
  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;

  getAdGroupCriterionLabel(): google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel | undefined;
  setAdGroupCriterionLabel(value?: google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel): void;
  hasAdGroupCriterionLabel(): boolean;
  clearAdGroupCriterionLabel(): void;

  getAdGroupCriterionSimulation(): google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation | undefined;
  setAdGroupCriterionSimulation(value?: google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation): void;
  hasAdGroupCriterionSimulation(): boolean;
  clearAdGroupCriterionSimulation(): void;

  getAdGroupExtensionSetting(): google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting | undefined;
  setAdGroupExtensionSetting(value?: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting): void;
  hasAdGroupExtensionSetting(): boolean;
  clearAdGroupExtensionSetting(): void;

  getAdGroupFeed(): google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed | undefined;
  setAdGroupFeed(value?: google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed): void;
  hasAdGroupFeed(): boolean;
  clearAdGroupFeed(): void;

  getAdGroupLabel(): google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel | undefined;
  setAdGroupLabel(value?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel): void;
  hasAdGroupLabel(): boolean;
  clearAdGroupLabel(): void;

  getAdGroupSimulation(): google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation | undefined;
  setAdGroupSimulation(value?: google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation): void;
  hasAdGroupSimulation(): boolean;
  clearAdGroupSimulation(): void;

  getAdParameter(): google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter | undefined;
  setAdParameter(value?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter): void;
  hasAdParameter(): boolean;
  clearAdParameter(): void;

  getAgeRangeView(): google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView | undefined;
  setAgeRangeView(value?: google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView): void;
  hasAgeRangeView(): boolean;
  clearAgeRangeView(): void;

  getAdScheduleView(): google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView | undefined;
  setAdScheduleView(value?: google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView): void;
  hasAdScheduleView(): boolean;
  clearAdScheduleView(): void;

  getDomainCategory(): google_ads_googleads_v2_resources_domain_category_pb.DomainCategory | undefined;
  setDomainCategory(value?: google_ads_googleads_v2_resources_domain_category_pb.DomainCategory): void;
  hasDomainCategory(): boolean;
  clearDomainCategory(): void;

  getAsset(): google_ads_googleads_v2_resources_asset_pb.Asset | undefined;
  setAsset(value?: google_ads_googleads_v2_resources_asset_pb.Asset): void;
  hasAsset(): boolean;
  clearAsset(): void;

  getBiddingStrategy(): google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setBiddingStrategy(value?: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy): void;
  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): void;

  getBillingSetup(): google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup | undefined;
  setBillingSetup(value?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup): void;
  hasBillingSetup(): boolean;
  clearBillingSetup(): void;

  getCampaignBudget(): google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget | undefined;
  setCampaignBudget(value?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget): void;
  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;

  getCampaign(): google_ads_googleads_v2_resources_campaign_pb.Campaign | undefined;
  setCampaign(value?: google_ads_googleads_v2_resources_campaign_pb.Campaign): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getCampaignAudienceView(): google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView | undefined;
  setCampaignAudienceView(value?: google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView): void;
  hasCampaignAudienceView(): boolean;
  clearCampaignAudienceView(): void;

  getCampaignBidModifier(): google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier | undefined;
  setCampaignBidModifier(value?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier): void;
  hasCampaignBidModifier(): boolean;
  clearCampaignBidModifier(): void;

  getCampaignCriterion(): google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCampaignCriterion(value?: google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion): void;
  hasCampaignCriterion(): boolean;
  clearCampaignCriterion(): void;

  getCampaignCriterionSimulation(): google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation | undefined;
  setCampaignCriterionSimulation(value?: google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation): void;
  hasCampaignCriterionSimulation(): boolean;
  clearCampaignCriterionSimulation(): void;

  getCampaignDraft(): google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft | undefined;
  setCampaignDraft(value?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft): void;
  hasCampaignDraft(): boolean;
  clearCampaignDraft(): void;

  getCampaignExperiment(): google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment | undefined;
  setCampaignExperiment(value?: google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment): void;
  hasCampaignExperiment(): boolean;
  clearCampaignExperiment(): void;

  getCampaignExtensionSetting(): google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting | undefined;
  setCampaignExtensionSetting(value?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting): void;
  hasCampaignExtensionSetting(): boolean;
  clearCampaignExtensionSetting(): void;

  getCampaignFeed(): google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed | undefined;
  setCampaignFeed(value?: google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed): void;
  hasCampaignFeed(): boolean;
  clearCampaignFeed(): void;

  getCampaignLabel(): google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel | undefined;
  setCampaignLabel(value?: google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel): void;
  hasCampaignLabel(): boolean;
  clearCampaignLabel(): void;

  getCampaignSharedSet(): google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet | undefined;
  setCampaignSharedSet(value?: google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet): void;
  hasCampaignSharedSet(): boolean;
  clearCampaignSharedSet(): void;

  getCarrierConstant(): google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant | undefined;
  setCarrierConstant(value?: google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant): void;
  hasCarrierConstant(): boolean;
  clearCarrierConstant(): void;

  getChangeStatus(): google_ads_googleads_v2_resources_change_status_pb.ChangeStatus | undefined;
  setChangeStatus(value?: google_ads_googleads_v2_resources_change_status_pb.ChangeStatus): void;
  hasChangeStatus(): boolean;
  clearChangeStatus(): void;

  getConversionAction(): google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction | undefined;
  setConversionAction(value?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction): void;
  hasConversionAction(): boolean;
  clearConversionAction(): void;

  getClickView(): google_ads_googleads_v2_resources_click_view_pb.ClickView | undefined;
  setClickView(value?: google_ads_googleads_v2_resources_click_view_pb.ClickView): void;
  hasClickView(): boolean;
  clearClickView(): void;

  getCustomInterest(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setCustomInterest(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;
  hasCustomInterest(): boolean;
  clearCustomInterest(): void;

  getCustomer(): google_ads_googleads_v2_resources_customer_pb.Customer | undefined;
  setCustomer(value?: google_ads_googleads_v2_resources_customer_pb.Customer): void;
  hasCustomer(): boolean;
  clearCustomer(): void;

  getCustomerManagerLink(): google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink | undefined;
  setCustomerManagerLink(value?: google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink): void;
  hasCustomerManagerLink(): boolean;
  clearCustomerManagerLink(): void;

  getCustomerClientLink(): google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink | undefined;
  setCustomerClientLink(value?: google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink): void;
  hasCustomerClientLink(): boolean;
  clearCustomerClientLink(): void;

  getCustomerClient(): google_ads_googleads_v2_resources_customer_client_pb.CustomerClient | undefined;
  setCustomerClient(value?: google_ads_googleads_v2_resources_customer_client_pb.CustomerClient): void;
  hasCustomerClient(): boolean;
  clearCustomerClient(): void;

  getCustomerExtensionSetting(): google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setCustomerExtensionSetting(value?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;
  hasCustomerExtensionSetting(): boolean;
  clearCustomerExtensionSetting(): void;

  getCustomerFeed(): google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed | undefined;
  setCustomerFeed(value?: google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed): void;
  hasCustomerFeed(): boolean;
  clearCustomerFeed(): void;

  getCustomerLabel(): google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel | undefined;
  setCustomerLabel(value?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel): void;
  hasCustomerLabel(): boolean;
  clearCustomerLabel(): void;

  getCustomerNegativeCriterion(): google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion | undefined;
  setCustomerNegativeCriterion(value?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion): void;
  hasCustomerNegativeCriterion(): boolean;
  clearCustomerNegativeCriterion(): void;

  getDetailPlacementView(): google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView | undefined;
  setDetailPlacementView(value?: google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView): void;
  hasDetailPlacementView(): boolean;
  clearDetailPlacementView(): void;

  getDisplayKeywordView(): google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView | undefined;
  setDisplayKeywordView(value?: google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView): void;
  hasDisplayKeywordView(): boolean;
  clearDisplayKeywordView(): void;

  getDistanceView(): google_ads_googleads_v2_resources_distance_view_pb.DistanceView | undefined;
  setDistanceView(value?: google_ads_googleads_v2_resources_distance_view_pb.DistanceView): void;
  hasDistanceView(): boolean;
  clearDistanceView(): void;

  getDynamicSearchAdsSearchTermView(): google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView | undefined;
  setDynamicSearchAdsSearchTermView(value?: google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView): void;
  hasDynamicSearchAdsSearchTermView(): boolean;
  clearDynamicSearchAdsSearchTermView(): void;

  getExpandedLandingPageView(): google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView | undefined;
  setExpandedLandingPageView(value?: google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView): void;
  hasExpandedLandingPageView(): boolean;
  clearExpandedLandingPageView(): void;

  getExtensionFeedItem(): google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setExtensionFeedItem(value?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem): void;
  hasExtensionFeedItem(): boolean;
  clearExtensionFeedItem(): void;

  getFeed(): google_ads_googleads_v2_resources_feed_pb.Feed | undefined;
  setFeed(value?: google_ads_googleads_v2_resources_feed_pb.Feed): void;
  hasFeed(): boolean;
  clearFeed(): void;

  getFeedItem(): google_ads_googleads_v2_resources_feed_item_pb.FeedItem | undefined;
  setFeedItem(value?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem): void;
  hasFeedItem(): boolean;
  clearFeedItem(): void;

  getFeedItemTarget(): google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget | undefined;
  setFeedItemTarget(value?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget): void;
  hasFeedItemTarget(): boolean;
  clearFeedItemTarget(): void;

  getFeedMapping(): google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping | undefined;
  setFeedMapping(value?: google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping): void;
  hasFeedMapping(): boolean;
  clearFeedMapping(): void;

  getFeedPlaceholderView(): google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView | undefined;
  setFeedPlaceholderView(value?: google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView): void;
  hasFeedPlaceholderView(): boolean;
  clearFeedPlaceholderView(): void;

  getGenderView(): google_ads_googleads_v2_resources_gender_view_pb.GenderView | undefined;
  setGenderView(value?: google_ads_googleads_v2_resources_gender_view_pb.GenderView): void;
  hasGenderView(): boolean;
  clearGenderView(): void;

  getGeoTargetConstant(): google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant | undefined;
  setGeoTargetConstant(value?: google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant): void;
  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;

  getGeographicView(): google_ads_googleads_v2_resources_geographic_view_pb.GeographicView | undefined;
  setGeographicView(value?: google_ads_googleads_v2_resources_geographic_view_pb.GeographicView): void;
  hasGeographicView(): boolean;
  clearGeographicView(): void;

  getGroupPlacementView(): google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView | undefined;
  setGroupPlacementView(value?: google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView): void;
  hasGroupPlacementView(): boolean;
  clearGroupPlacementView(): void;

  getHotelGroupView(): google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView | undefined;
  setHotelGroupView(value?: google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView): void;
  hasHotelGroupView(): boolean;
  clearHotelGroupView(): void;

  getHotelPerformanceView(): google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView | undefined;
  setHotelPerformanceView(value?: google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView): void;
  hasHotelPerformanceView(): boolean;
  clearHotelPerformanceView(): void;

  getKeywordView(): google_ads_googleads_v2_resources_keyword_view_pb.KeywordView | undefined;
  setKeywordView(value?: google_ads_googleads_v2_resources_keyword_view_pb.KeywordView): void;
  hasKeywordView(): boolean;
  clearKeywordView(): void;

  getKeywordPlan(): google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan | undefined;
  setKeywordPlan(value?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan): void;
  hasKeywordPlan(): boolean;
  clearKeywordPlan(): void;

  getKeywordPlanCampaign(): google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign | undefined;
  setKeywordPlanCampaign(value?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign): void;
  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;

  getKeywordPlanNegativeKeyword(): google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword | undefined;
  setKeywordPlanNegativeKeyword(value?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword): void;
  hasKeywordPlanNegativeKeyword(): boolean;
  clearKeywordPlanNegativeKeyword(): void;

  getKeywordPlanAdGroup(): google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup | undefined;
  setKeywordPlanAdGroup(value?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup): void;
  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;

  getKeywordPlanKeyword(): google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword | undefined;
  setKeywordPlanKeyword(value?: google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword): void;
  hasKeywordPlanKeyword(): boolean;
  clearKeywordPlanKeyword(): void;

  getLabel(): google_ads_googleads_v2_resources_label_pb.Label | undefined;
  setLabel(value?: google_ads_googleads_v2_resources_label_pb.Label): void;
  hasLabel(): boolean;
  clearLabel(): void;

  getLandingPageView(): google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView | undefined;
  setLandingPageView(value?: google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView): void;
  hasLandingPageView(): boolean;
  clearLandingPageView(): void;

  getLanguageConstant(): google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant | undefined;
  setLanguageConstant(value?: google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant): void;
  hasLanguageConstant(): boolean;
  clearLanguageConstant(): void;

  getLocationView(): google_ads_googleads_v2_resources_location_view_pb.LocationView | undefined;
  setLocationView(value?: google_ads_googleads_v2_resources_location_view_pb.LocationView): void;
  hasLocationView(): boolean;
  clearLocationView(): void;

  getManagedPlacementView(): google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView | undefined;
  setManagedPlacementView(value?: google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView): void;
  hasManagedPlacementView(): boolean;
  clearManagedPlacementView(): void;

  getMediaFile(): google_ads_googleads_v2_resources_media_file_pb.MediaFile | undefined;
  setMediaFile(value?: google_ads_googleads_v2_resources_media_file_pb.MediaFile): void;
  hasMediaFile(): boolean;
  clearMediaFile(): void;

  getMobileAppCategoryConstant(): google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant | undefined;
  setMobileAppCategoryConstant(value?: google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant): void;
  hasMobileAppCategoryConstant(): boolean;
  clearMobileAppCategoryConstant(): void;

  getMobileDeviceConstant(): google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant | undefined;
  setMobileDeviceConstant(value?: google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant): void;
  hasMobileDeviceConstant(): boolean;
  clearMobileDeviceConstant(): void;

  getMutateJob(): google_ads_googleads_v2_resources_mutate_job_pb.MutateJob | undefined;
  setMutateJob(value?: google_ads_googleads_v2_resources_mutate_job_pb.MutateJob): void;
  hasMutateJob(): boolean;
  clearMutateJob(): void;

  getOperatingSystemVersionConstant(): google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant | undefined;
  setOperatingSystemVersionConstant(value?: google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant): void;
  hasOperatingSystemVersionConstant(): boolean;
  clearOperatingSystemVersionConstant(): void;

  getPaidOrganicSearchTermView(): google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView | undefined;
  setPaidOrganicSearchTermView(value?: google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView): void;
  hasPaidOrganicSearchTermView(): boolean;
  clearPaidOrganicSearchTermView(): void;

  getParentalStatusView(): google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView | undefined;
  setParentalStatusView(value?: google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView): void;
  hasParentalStatusView(): boolean;
  clearParentalStatusView(): void;

  getProductBiddingCategoryConstant(): google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant | undefined;
  setProductBiddingCategoryConstant(value?: google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant): void;
  hasProductBiddingCategoryConstant(): boolean;
  clearProductBiddingCategoryConstant(): void;

  getProductGroupView(): google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView | undefined;
  setProductGroupView(value?: google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView): void;
  hasProductGroupView(): boolean;
  clearProductGroupView(): void;

  getRecommendation(): google_ads_googleads_v2_resources_recommendation_pb.Recommendation | undefined;
  setRecommendation(value?: google_ads_googleads_v2_resources_recommendation_pb.Recommendation): void;
  hasRecommendation(): boolean;
  clearRecommendation(): void;

  getSearchTermView(): google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView | undefined;
  setSearchTermView(value?: google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView): void;
  hasSearchTermView(): boolean;
  clearSearchTermView(): void;

  getSharedCriterion(): google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion | undefined;
  setSharedCriterion(value?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion): void;
  hasSharedCriterion(): boolean;
  clearSharedCriterion(): void;

  getSharedSet(): google_ads_googleads_v2_resources_shared_set_pb.SharedSet | undefined;
  setSharedSet(value?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet): void;
  hasSharedSet(): boolean;
  clearSharedSet(): void;

  getShoppingPerformanceView(): google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView | undefined;
  setShoppingPerformanceView(value?: google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView): void;
  hasShoppingPerformanceView(): boolean;
  clearShoppingPerformanceView(): void;

  getTopicView(): google_ads_googleads_v2_resources_topic_view_pb.TopicView | undefined;
  setTopicView(value?: google_ads_googleads_v2_resources_topic_view_pb.TopicView): void;
  hasTopicView(): boolean;
  clearTopicView(): void;

  getUserInterest(): google_ads_googleads_v2_resources_user_interest_pb.UserInterest | undefined;
  setUserInterest(value?: google_ads_googleads_v2_resources_user_interest_pb.UserInterest): void;
  hasUserInterest(): boolean;
  clearUserInterest(): void;

  getUserList(): google_ads_googleads_v2_resources_user_list_pb.UserList | undefined;
  setUserList(value?: google_ads_googleads_v2_resources_user_list_pb.UserList): void;
  hasUserList(): boolean;
  clearUserList(): void;

  getUserLocationView(): google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView | undefined;
  setUserLocationView(value?: google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView): void;
  hasUserLocationView(): boolean;
  clearUserLocationView(): void;

  getRemarketingAction(): google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction | undefined;
  setRemarketingAction(value?: google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction): void;
  hasRemarketingAction(): boolean;
  clearRemarketingAction(): void;

  getTopicConstant(): google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant | undefined;
  setTopicConstant(value?: google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant): void;
  hasTopicConstant(): boolean;
  clearTopicConstant(): void;

  getVideo(): google_ads_googleads_v2_resources_video_pb.Video | undefined;
  setVideo(value?: google_ads_googleads_v2_resources_video_pb.Video): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getMetrics(): google_ads_googleads_v2_common_metrics_pb.Metrics | undefined;
  setMetrics(value?: google_ads_googleads_v2_common_metrics_pb.Metrics): void;
  hasMetrics(): boolean;
  clearMetrics(): void;

  getSegments(): google_ads_googleads_v2_common_segments_pb.Segments | undefined;
  setSegments(value?: google_ads_googleads_v2_common_segments_pb.Segments): void;
  hasSegments(): boolean;
  clearSegments(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsRow.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsRow): GoogleAdsRow.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsRow;
  static deserializeBinaryFromReader(message: GoogleAdsRow, reader: jspb.BinaryReader): GoogleAdsRow;
}

export namespace GoogleAdsRow {
  export type AsObject = {
    accountBudget?: google_ads_googleads_v2_resources_account_budget_pb.AccountBudget.AsObject,
    accountBudgetProposal?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal.AsObject,
    adGroup?: google_ads_googleads_v2_resources_ad_group_pb.AdGroup.AsObject,
    adGroupAd?: google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    adGroupAdAssetView?: google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView.AsObject,
    adGroupAdLabel?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel.AsObject,
    adGroupAudienceView?: google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView.AsObject,
    adGroupBidModifier?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    adGroupCriterion?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    adGroupCriterionLabel?: google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel.AsObject,
    adGroupCriterionSimulation?: google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation.AsObject,
    adGroupExtensionSetting?: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.AsObject,
    adGroupFeed?: google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed.AsObject,
    adGroupLabel?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel.AsObject,
    adGroupSimulation?: google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation.AsObject,
    adParameter?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter.AsObject,
    ageRangeView?: google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView.AsObject,
    adScheduleView?: google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView.AsObject,
    domainCategory?: google_ads_googleads_v2_resources_domain_category_pb.DomainCategory.AsObject,
    asset?: google_ads_googleads_v2_resources_asset_pb.Asset.AsObject,
    biddingStrategy?: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    billingSetup?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup.AsObject,
    campaignBudget?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.AsObject,
    campaign?: google_ads_googleads_v2_resources_campaign_pb.Campaign.AsObject,
    campaignAudienceView?: google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView.AsObject,
    campaignBidModifier?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier.AsObject,
    campaignCriterion?: google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    campaignCriterionSimulation?: google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation.AsObject,
    campaignDraft?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft.AsObject,
    campaignExperiment?: google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment.AsObject,
    campaignExtensionSetting?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting.AsObject,
    campaignFeed?: google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed.AsObject,
    campaignLabel?: google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel.AsObject,
    campaignSharedSet?: google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet.AsObject,
    carrierConstant?: google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant.AsObject,
    changeStatus?: google_ads_googleads_v2_resources_change_status_pb.ChangeStatus.AsObject,
    conversionAction?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction.AsObject,
    clickView?: google_ads_googleads_v2_resources_click_view_pb.ClickView.AsObject,
    customInterest?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
    customer?: google_ads_googleads_v2_resources_customer_pb.Customer.AsObject,
    customerManagerLink?: google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink.AsObject,
    customerClientLink?: google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink.AsObject,
    customerClient?: google_ads_googleads_v2_resources_customer_client_pb.CustomerClient.AsObject,
    customerExtensionSetting?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    customerFeed?: google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed.AsObject,
    customerLabel?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.AsObject,
    customerNegativeCriterion?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion.AsObject,
    detailPlacementView?: google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView.AsObject,
    displayKeywordView?: google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView.AsObject,
    distanceView?: google_ads_googleads_v2_resources_distance_view_pb.DistanceView.AsObject,
    dynamicSearchAdsSearchTermView?: google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView.AsObject,
    expandedLandingPageView?: google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView.AsObject,
    extensionFeedItem?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    feed?: google_ads_googleads_v2_resources_feed_pb.Feed.AsObject,
    feedItem?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem.AsObject,
    feedItemTarget?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.AsObject,
    feedMapping?: google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping.AsObject,
    feedPlaceholderView?: google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView.AsObject,
    genderView?: google_ads_googleads_v2_resources_gender_view_pb.GenderView.AsObject,
    geoTargetConstant?: google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant.AsObject,
    geographicView?: google_ads_googleads_v2_resources_geographic_view_pb.GeographicView.AsObject,
    groupPlacementView?: google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView.AsObject,
    hotelGroupView?: google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView.AsObject,
    hotelPerformanceView?: google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView.AsObject,
    keywordView?: google_ads_googleads_v2_resources_keyword_view_pb.KeywordView.AsObject,
    keywordPlan?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan.AsObject,
    keywordPlanCampaign?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.AsObject,
    keywordPlanNegativeKeyword?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.AsObject,
    keywordPlanAdGroup?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.AsObject,
    keywordPlanKeyword?: google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.AsObject,
    label?: google_ads_googleads_v2_resources_label_pb.Label.AsObject,
    landingPageView?: google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView.AsObject,
    languageConstant?: google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant.AsObject,
    locationView?: google_ads_googleads_v2_resources_location_view_pb.LocationView.AsObject,
    managedPlacementView?: google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView.AsObject,
    mediaFile?: google_ads_googleads_v2_resources_media_file_pb.MediaFile.AsObject,
    mobileAppCategoryConstant?: google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant.AsObject,
    mobileDeviceConstant?: google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant.AsObject,
    mutateJob?: google_ads_googleads_v2_resources_mutate_job_pb.MutateJob.AsObject,
    operatingSystemVersionConstant?: google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant.AsObject,
    paidOrganicSearchTermView?: google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView.AsObject,
    parentalStatusView?: google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView.AsObject,
    productBiddingCategoryConstant?: google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant.AsObject,
    productGroupView?: google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView.AsObject,
    recommendation?: google_ads_googleads_v2_resources_recommendation_pb.Recommendation.AsObject,
    searchTermView?: google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView.AsObject,
    sharedCriterion?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion.AsObject,
    sharedSet?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet.AsObject,
    shoppingPerformanceView?: google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView.AsObject,
    topicView?: google_ads_googleads_v2_resources_topic_view_pb.TopicView.AsObject,
    userInterest?: google_ads_googleads_v2_resources_user_interest_pb.UserInterest.AsObject,
    userList?: google_ads_googleads_v2_resources_user_list_pb.UserList.AsObject,
    userLocationView?: google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView.AsObject,
    remarketingAction?: google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction.AsObject,
    topicConstant?: google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant.AsObject,
    video?: google_ads_googleads_v2_resources_video_pb.Video.AsObject,
    metrics?: google_ads_googleads_v2_common_metrics_pb.Metrics.AsObject,
    segments?: google_ads_googleads_v2_common_segments_pb.Segments.AsObject,
  }
}

export class MutateGoogleAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getMutateOperationsList(): Array<MutateOperation>;
  setMutateOperationsList(value: Array<MutateOperation>): void;
  clearMutateOperationsList(): void;
  addMutateOperations(value?: MutateOperation, index?: number): MutateOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateGoogleAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateGoogleAdsRequest): MutateGoogleAdsRequest.AsObject;
  static serializeBinaryToWriter(message: MutateGoogleAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateGoogleAdsRequest;
  static deserializeBinaryFromReader(message: MutateGoogleAdsRequest, reader: jspb.BinaryReader): MutateGoogleAdsRequest;
}

export namespace MutateGoogleAdsRequest {
  export type AsObject = {
    customerId: string,
    mutateOperationsList: Array<MutateOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class MutateGoogleAdsResponse extends jspb.Message {
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;

  getMutateOperationResponsesList(): Array<MutateOperationResponse>;
  setMutateOperationResponsesList(value: Array<MutateOperationResponse>): void;
  clearMutateOperationResponsesList(): void;
  addMutateOperationResponses(value?: MutateOperationResponse, index?: number): MutateOperationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateGoogleAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateGoogleAdsResponse): MutateGoogleAdsResponse.AsObject;
  static serializeBinaryToWriter(message: MutateGoogleAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateGoogleAdsResponse;
  static deserializeBinaryFromReader(message: MutateGoogleAdsResponse, reader: jspb.BinaryReader): MutateGoogleAdsResponse;
}

export namespace MutateGoogleAdsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    mutateOperationResponsesList: Array<MutateOperationResponse.AsObject>,
  }
}

export class MutateOperation extends jspb.Message {
  getAdGroupAdLabelOperation(): google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation | undefined;
  setAdGroupAdLabelOperation(value?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation): void;
  hasAdGroupAdLabelOperation(): boolean;
  clearAdGroupAdLabelOperation(): void;

  getAdGroupAdOperation(): google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation | undefined;
  setAdGroupAdOperation(value?: google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation): void;
  hasAdGroupAdOperation(): boolean;
  clearAdGroupAdOperation(): void;

  getAdGroupBidModifierOperation(): google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation | undefined;
  setAdGroupBidModifierOperation(value?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation): void;
  hasAdGroupBidModifierOperation(): boolean;
  clearAdGroupBidModifierOperation(): void;

  getAdGroupCriterionLabelOperation(): google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation | undefined;
  setAdGroupCriterionLabelOperation(value?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation): void;
  hasAdGroupCriterionLabelOperation(): boolean;
  clearAdGroupCriterionLabelOperation(): void;

  getAdGroupCriterionOperation(): google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation | undefined;
  setAdGroupCriterionOperation(value?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation): void;
  hasAdGroupCriterionOperation(): boolean;
  clearAdGroupCriterionOperation(): void;

  getAdGroupExtensionSettingOperation(): google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation | undefined;
  setAdGroupExtensionSettingOperation(value?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation): void;
  hasAdGroupExtensionSettingOperation(): boolean;
  clearAdGroupExtensionSettingOperation(): void;

  getAdGroupFeedOperation(): google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation | undefined;
  setAdGroupFeedOperation(value?: google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation): void;
  hasAdGroupFeedOperation(): boolean;
  clearAdGroupFeedOperation(): void;

  getAdGroupLabelOperation(): google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation | undefined;
  setAdGroupLabelOperation(value?: google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation): void;
  hasAdGroupLabelOperation(): boolean;
  clearAdGroupLabelOperation(): void;

  getAdGroupOperation(): google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation | undefined;
  setAdGroupOperation(value?: google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation): void;
  hasAdGroupOperation(): boolean;
  clearAdGroupOperation(): void;

  getAdParameterOperation(): google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation | undefined;
  setAdParameterOperation(value?: google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation): void;
  hasAdParameterOperation(): boolean;
  clearAdParameterOperation(): void;

  getAssetOperation(): google_ads_googleads_v2_services_asset_service_pb.AssetOperation | undefined;
  setAssetOperation(value?: google_ads_googleads_v2_services_asset_service_pb.AssetOperation): void;
  hasAssetOperation(): boolean;
  clearAssetOperation(): void;

  getBiddingStrategyOperation(): google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation | undefined;
  setBiddingStrategyOperation(value?: google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation): void;
  hasBiddingStrategyOperation(): boolean;
  clearBiddingStrategyOperation(): void;

  getCampaignBidModifierOperation(): google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation | undefined;
  setCampaignBidModifierOperation(value?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation): void;
  hasCampaignBidModifierOperation(): boolean;
  clearCampaignBidModifierOperation(): void;

  getCampaignBudgetOperation(): google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation | undefined;
  setCampaignBudgetOperation(value?: google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation): void;
  hasCampaignBudgetOperation(): boolean;
  clearCampaignBudgetOperation(): void;

  getCampaignCriterionOperation(): google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation | undefined;
  setCampaignCriterionOperation(value?: google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation): void;
  hasCampaignCriterionOperation(): boolean;
  clearCampaignCriterionOperation(): void;

  getCampaignDraftOperation(): google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation | undefined;
  setCampaignDraftOperation(value?: google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation): void;
  hasCampaignDraftOperation(): boolean;
  clearCampaignDraftOperation(): void;

  getCampaignExperimentOperation(): google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation | undefined;
  setCampaignExperimentOperation(value?: google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation): void;
  hasCampaignExperimentOperation(): boolean;
  clearCampaignExperimentOperation(): void;

  getCampaignExtensionSettingOperation(): google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation | undefined;
  setCampaignExtensionSettingOperation(value?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation): void;
  hasCampaignExtensionSettingOperation(): boolean;
  clearCampaignExtensionSettingOperation(): void;

  getCampaignFeedOperation(): google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation | undefined;
  setCampaignFeedOperation(value?: google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation): void;
  hasCampaignFeedOperation(): boolean;
  clearCampaignFeedOperation(): void;

  getCampaignLabelOperation(): google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation | undefined;
  setCampaignLabelOperation(value?: google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation): void;
  hasCampaignLabelOperation(): boolean;
  clearCampaignLabelOperation(): void;

  getCampaignOperation(): google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation | undefined;
  setCampaignOperation(value?: google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation): void;
  hasCampaignOperation(): boolean;
  clearCampaignOperation(): void;

  getCampaignSharedSetOperation(): google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation | undefined;
  setCampaignSharedSetOperation(value?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation): void;
  hasCampaignSharedSetOperation(): boolean;
  clearCampaignSharedSetOperation(): void;

  getConversionActionOperation(): google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation | undefined;
  setConversionActionOperation(value?: google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation): void;
  hasConversionActionOperation(): boolean;
  clearConversionActionOperation(): void;

  getCustomerExtensionSettingOperation(): google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation | undefined;
  setCustomerExtensionSettingOperation(value?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation): void;
  hasCustomerExtensionSettingOperation(): boolean;
  clearCustomerExtensionSettingOperation(): void;

  getCustomerFeedOperation(): google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation | undefined;
  setCustomerFeedOperation(value?: google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation): void;
  hasCustomerFeedOperation(): boolean;
  clearCustomerFeedOperation(): void;

  getCustomerLabelOperation(): google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation | undefined;
  setCustomerLabelOperation(value?: google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation): void;
  hasCustomerLabelOperation(): boolean;
  clearCustomerLabelOperation(): void;

  getCustomerNegativeCriterionOperation(): google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation | undefined;
  setCustomerNegativeCriterionOperation(value?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation): void;
  hasCustomerNegativeCriterionOperation(): boolean;
  clearCustomerNegativeCriterionOperation(): void;

  getCustomerOperation(): google_ads_googleads_v2_services_customer_service_pb.CustomerOperation | undefined;
  setCustomerOperation(value?: google_ads_googleads_v2_services_customer_service_pb.CustomerOperation): void;
  hasCustomerOperation(): boolean;
  clearCustomerOperation(): void;

  getExtensionFeedItemOperation(): google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation | undefined;
  setExtensionFeedItemOperation(value?: google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation): void;
  hasExtensionFeedItemOperation(): boolean;
  clearExtensionFeedItemOperation(): void;

  getFeedItemOperation(): google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation | undefined;
  setFeedItemOperation(value?: google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation): void;
  hasFeedItemOperation(): boolean;
  clearFeedItemOperation(): void;

  getFeedItemTargetOperation(): google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation | undefined;
  setFeedItemTargetOperation(value?: google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation): void;
  hasFeedItemTargetOperation(): boolean;
  clearFeedItemTargetOperation(): void;

  getFeedMappingOperation(): google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation | undefined;
  setFeedMappingOperation(value?: google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation): void;
  hasFeedMappingOperation(): boolean;
  clearFeedMappingOperation(): void;

  getFeedOperation(): google_ads_googleads_v2_services_feed_service_pb.FeedOperation | undefined;
  setFeedOperation(value?: google_ads_googleads_v2_services_feed_service_pb.FeedOperation): void;
  hasFeedOperation(): boolean;
  clearFeedOperation(): void;

  getLabelOperation(): google_ads_googleads_v2_services_label_service_pb.LabelOperation | undefined;
  setLabelOperation(value?: google_ads_googleads_v2_services_label_service_pb.LabelOperation): void;
  hasLabelOperation(): boolean;
  clearLabelOperation(): void;

  getMediaFileOperation(): google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation | undefined;
  setMediaFileOperation(value?: google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation): void;
  hasMediaFileOperation(): boolean;
  clearMediaFileOperation(): void;

  getRemarketingActionOperation(): google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation | undefined;
  setRemarketingActionOperation(value?: google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation): void;
  hasRemarketingActionOperation(): boolean;
  clearRemarketingActionOperation(): void;

  getSharedCriterionOperation(): google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation | undefined;
  setSharedCriterionOperation(value?: google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation): void;
  hasSharedCriterionOperation(): boolean;
  clearSharedCriterionOperation(): void;

  getSharedSetOperation(): google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation | undefined;
  setSharedSetOperation(value?: google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation): void;
  hasSharedSetOperation(): boolean;
  clearSharedSetOperation(): void;

  getUserListOperation(): google_ads_googleads_v2_services_user_list_service_pb.UserListOperation | undefined;
  setUserListOperation(value?: google_ads_googleads_v2_services_user_list_service_pb.UserListOperation): void;
  hasUserListOperation(): boolean;
  clearUserListOperation(): void;

  getOperationCase(): MutateOperation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateOperation.AsObject;
  static toObject(includeInstance: boolean, msg: MutateOperation): MutateOperation.AsObject;
  static serializeBinaryToWriter(message: MutateOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateOperation;
  static deserializeBinaryFromReader(message: MutateOperation, reader: jspb.BinaryReader): MutateOperation;
}

export namespace MutateOperation {
  export type AsObject = {
    adGroupAdLabelOperation?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation.AsObject,
    adGroupAdOperation?: google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation.AsObject,
    adGroupBidModifierOperation?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation.AsObject,
    adGroupCriterionLabelOperation?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation.AsObject,
    adGroupCriterionOperation?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation.AsObject,
    adGroupExtensionSettingOperation?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation.AsObject,
    adGroupFeedOperation?: google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation.AsObject,
    adGroupLabelOperation?: google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation.AsObject,
    adGroupOperation?: google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation.AsObject,
    adParameterOperation?: google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation.AsObject,
    assetOperation?: google_ads_googleads_v2_services_asset_service_pb.AssetOperation.AsObject,
    biddingStrategyOperation?: google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation.AsObject,
    campaignBidModifierOperation?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation.AsObject,
    campaignBudgetOperation?: google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation.AsObject,
    campaignCriterionOperation?: google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation.AsObject,
    campaignDraftOperation?: google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation.AsObject,
    campaignExperimentOperation?: google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation.AsObject,
    campaignExtensionSettingOperation?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation.AsObject,
    campaignFeedOperation?: google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation.AsObject,
    campaignLabelOperation?: google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation.AsObject,
    campaignOperation?: google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation.AsObject,
    campaignSharedSetOperation?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation.AsObject,
    conversionActionOperation?: google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation.AsObject,
    customerExtensionSettingOperation?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation.AsObject,
    customerFeedOperation?: google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation.AsObject,
    customerLabelOperation?: google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation.AsObject,
    customerNegativeCriterionOperation?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation.AsObject,
    customerOperation?: google_ads_googleads_v2_services_customer_service_pb.CustomerOperation.AsObject,
    extensionFeedItemOperation?: google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation.AsObject,
    feedItemOperation?: google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation.AsObject,
    feedItemTargetOperation?: google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation.AsObject,
    feedMappingOperation?: google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation.AsObject,
    feedOperation?: google_ads_googleads_v2_services_feed_service_pb.FeedOperation.AsObject,
    labelOperation?: google_ads_googleads_v2_services_label_service_pb.LabelOperation.AsObject,
    mediaFileOperation?: google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation.AsObject,
    remarketingActionOperation?: google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation.AsObject,
    sharedCriterionOperation?: google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation.AsObject,
    sharedSetOperation?: google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation.AsObject,
    userListOperation?: google_ads_googleads_v2_services_user_list_service_pb.UserListOperation.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    AD_GROUP_AD_LABEL_OPERATION = 17,
    AD_GROUP_AD_OPERATION = 1,
    AD_GROUP_BID_MODIFIER_OPERATION = 2,
    AD_GROUP_CRITERION_LABEL_OPERATION = 18,
    AD_GROUP_CRITERION_OPERATION = 3,
    AD_GROUP_EXTENSION_SETTING_OPERATION = 19,
    AD_GROUP_FEED_OPERATION = 20,
    AD_GROUP_LABEL_OPERATION = 21,
    AD_GROUP_OPERATION = 5,
    AD_PARAMETER_OPERATION = 22,
    ASSET_OPERATION = 23,
    BIDDING_STRATEGY_OPERATION = 6,
    CAMPAIGN_BID_MODIFIER_OPERATION = 7,
    CAMPAIGN_BUDGET_OPERATION = 8,
    CAMPAIGN_CRITERION_OPERATION = 13,
    CAMPAIGN_DRAFT_OPERATION = 24,
    CAMPAIGN_EXPERIMENT_OPERATION = 25,
    CAMPAIGN_EXTENSION_SETTING_OPERATION = 26,
    CAMPAIGN_FEED_OPERATION = 27,
    CAMPAIGN_LABEL_OPERATION = 28,
    CAMPAIGN_OPERATION = 10,
    CAMPAIGN_SHARED_SET_OPERATION = 11,
    CONVERSION_ACTION_OPERATION = 12,
    CUSTOMER_EXTENSION_SETTING_OPERATION = 30,
    CUSTOMER_FEED_OPERATION = 31,
    CUSTOMER_LABEL_OPERATION = 32,
    CUSTOMER_NEGATIVE_CRITERION_OPERATION = 34,
    CUSTOMER_OPERATION = 35,
    EXTENSION_FEED_ITEM_OPERATION = 36,
    FEED_ITEM_OPERATION = 37,
    FEED_ITEM_TARGET_OPERATION = 38,
    FEED_MAPPING_OPERATION = 39,
    FEED_OPERATION = 40,
    LABEL_OPERATION = 41,
    MEDIA_FILE_OPERATION = 42,
    REMARKETING_ACTION_OPERATION = 43,
    SHARED_CRITERION_OPERATION = 14,
    SHARED_SET_OPERATION = 15,
    USER_LIST_OPERATION = 16,
  }
}

export class MutateOperationResponse extends jspb.Message {
  getAdGroupAdLabelResult(): google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult | undefined;
  setAdGroupAdLabelResult(value?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult): void;
  hasAdGroupAdLabelResult(): boolean;
  clearAdGroupAdLabelResult(): void;

  getAdGroupAdResult(): google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult | undefined;
  setAdGroupAdResult(value?: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult): void;
  hasAdGroupAdResult(): boolean;
  clearAdGroupAdResult(): void;

  getAdGroupBidModifierResult(): google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult | undefined;
  setAdGroupBidModifierResult(value?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult): void;
  hasAdGroupBidModifierResult(): boolean;
  clearAdGroupBidModifierResult(): void;

  getAdGroupCriterionLabelResult(): google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult | undefined;
  setAdGroupCriterionLabelResult(value?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult): void;
  hasAdGroupCriterionLabelResult(): boolean;
  clearAdGroupCriterionLabelResult(): void;

  getAdGroupCriterionResult(): google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult | undefined;
  setAdGroupCriterionResult(value?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult): void;
  hasAdGroupCriterionResult(): boolean;
  clearAdGroupCriterionResult(): void;

  getAdGroupExtensionSettingResult(): google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult | undefined;
  setAdGroupExtensionSettingResult(value?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult): void;
  hasAdGroupExtensionSettingResult(): boolean;
  clearAdGroupExtensionSettingResult(): void;

  getAdGroupFeedResult(): google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult | undefined;
  setAdGroupFeedResult(value?: google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult): void;
  hasAdGroupFeedResult(): boolean;
  clearAdGroupFeedResult(): void;

  getAdGroupLabelResult(): google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult | undefined;
  setAdGroupLabelResult(value?: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult): void;
  hasAdGroupLabelResult(): boolean;
  clearAdGroupLabelResult(): void;

  getAdGroupResult(): google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult | undefined;
  setAdGroupResult(value?: google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult): void;
  hasAdGroupResult(): boolean;
  clearAdGroupResult(): void;

  getAdParameterResult(): google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult | undefined;
  setAdParameterResult(value?: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult): void;
  hasAdParameterResult(): boolean;
  clearAdParameterResult(): void;

  getAssetResult(): google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult | undefined;
  setAssetResult(value?: google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult): void;
  hasAssetResult(): boolean;
  clearAssetResult(): void;

  getBiddingStrategyResult(): google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult | undefined;
  setBiddingStrategyResult(value?: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult): void;
  hasBiddingStrategyResult(): boolean;
  clearBiddingStrategyResult(): void;

  getCampaignBidModifierResult(): google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult | undefined;
  setCampaignBidModifierResult(value?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult): void;
  hasCampaignBidModifierResult(): boolean;
  clearCampaignBidModifierResult(): void;

  getCampaignBudgetResult(): google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult | undefined;
  setCampaignBudgetResult(value?: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult): void;
  hasCampaignBudgetResult(): boolean;
  clearCampaignBudgetResult(): void;

  getCampaignCriterionResult(): google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult | undefined;
  setCampaignCriterionResult(value?: google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult): void;
  hasCampaignCriterionResult(): boolean;
  clearCampaignCriterionResult(): void;

  getCampaignDraftResult(): google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult | undefined;
  setCampaignDraftResult(value?: google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult): void;
  hasCampaignDraftResult(): boolean;
  clearCampaignDraftResult(): void;

  getCampaignExperimentResult(): google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult | undefined;
  setCampaignExperimentResult(value?: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult): void;
  hasCampaignExperimentResult(): boolean;
  clearCampaignExperimentResult(): void;

  getCampaignExtensionSettingResult(): google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult | undefined;
  setCampaignExtensionSettingResult(value?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult): void;
  hasCampaignExtensionSettingResult(): boolean;
  clearCampaignExtensionSettingResult(): void;

  getCampaignFeedResult(): google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult | undefined;
  setCampaignFeedResult(value?: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult): void;
  hasCampaignFeedResult(): boolean;
  clearCampaignFeedResult(): void;

  getCampaignLabelResult(): google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult | undefined;
  setCampaignLabelResult(value?: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult): void;
  hasCampaignLabelResult(): boolean;
  clearCampaignLabelResult(): void;

  getCampaignResult(): google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult | undefined;
  setCampaignResult(value?: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult): void;
  hasCampaignResult(): boolean;
  clearCampaignResult(): void;

  getCampaignSharedSetResult(): google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult | undefined;
  setCampaignSharedSetResult(value?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult): void;
  hasCampaignSharedSetResult(): boolean;
  clearCampaignSharedSetResult(): void;

  getConversionActionResult(): google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult | undefined;
  setConversionActionResult(value?: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult): void;
  hasConversionActionResult(): boolean;
  clearConversionActionResult(): void;

  getCustomerExtensionSettingResult(): google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult | undefined;
  setCustomerExtensionSettingResult(value?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult): void;
  hasCustomerExtensionSettingResult(): boolean;
  clearCustomerExtensionSettingResult(): void;

  getCustomerFeedResult(): google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult | undefined;
  setCustomerFeedResult(value?: google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult): void;
  hasCustomerFeedResult(): boolean;
  clearCustomerFeedResult(): void;

  getCustomerLabelResult(): google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult | undefined;
  setCustomerLabelResult(value?: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult): void;
  hasCustomerLabelResult(): boolean;
  clearCustomerLabelResult(): void;

  getCustomerNegativeCriterionResult(): google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult | undefined;
  setCustomerNegativeCriterionResult(value?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult): void;
  hasCustomerNegativeCriterionResult(): boolean;
  clearCustomerNegativeCriterionResult(): void;

  getCustomerResult(): google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult | undefined;
  setCustomerResult(value?: google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult): void;
  hasCustomerResult(): boolean;
  clearCustomerResult(): void;

  getExtensionFeedItemResult(): google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult | undefined;
  setExtensionFeedItemResult(value?: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult): void;
  hasExtensionFeedItemResult(): boolean;
  clearExtensionFeedItemResult(): void;

  getFeedItemResult(): google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult | undefined;
  setFeedItemResult(value?: google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult): void;
  hasFeedItemResult(): boolean;
  clearFeedItemResult(): void;

  getFeedItemTargetResult(): google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult | undefined;
  setFeedItemTargetResult(value?: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult): void;
  hasFeedItemTargetResult(): boolean;
  clearFeedItemTargetResult(): void;

  getFeedMappingResult(): google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult | undefined;
  setFeedMappingResult(value?: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult): void;
  hasFeedMappingResult(): boolean;
  clearFeedMappingResult(): void;

  getFeedResult(): google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult | undefined;
  setFeedResult(value?: google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult): void;
  hasFeedResult(): boolean;
  clearFeedResult(): void;

  getLabelResult(): google_ads_googleads_v2_services_label_service_pb.MutateLabelResult | undefined;
  setLabelResult(value?: google_ads_googleads_v2_services_label_service_pb.MutateLabelResult): void;
  hasLabelResult(): boolean;
  clearLabelResult(): void;

  getMediaFileResult(): google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult | undefined;
  setMediaFileResult(value?: google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult): void;
  hasMediaFileResult(): boolean;
  clearMediaFileResult(): void;

  getRemarketingActionResult(): google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult | undefined;
  setRemarketingActionResult(value?: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult): void;
  hasRemarketingActionResult(): boolean;
  clearRemarketingActionResult(): void;

  getSharedCriterionResult(): google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult | undefined;
  setSharedCriterionResult(value?: google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult): void;
  hasSharedCriterionResult(): boolean;
  clearSharedCriterionResult(): void;

  getSharedSetResult(): google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult | undefined;
  setSharedSetResult(value?: google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult): void;
  hasSharedSetResult(): boolean;
  clearSharedSetResult(): void;

  getUserListResult(): google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult | undefined;
  setUserListResult(value?: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult): void;
  hasUserListResult(): boolean;
  clearUserListResult(): void;

  getResponseCase(): MutateOperationResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateOperationResponse): MutateOperationResponse.AsObject;
  static serializeBinaryToWriter(message: MutateOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateOperationResponse;
  static deserializeBinaryFromReader(message: MutateOperationResponse, reader: jspb.BinaryReader): MutateOperationResponse;
}

export namespace MutateOperationResponse {
  export type AsObject = {
    adGroupAdLabelResult?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult.AsObject,
    adGroupAdResult?: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult.AsObject,
    adGroupBidModifierResult?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult.AsObject,
    adGroupCriterionLabelResult?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult.AsObject,
    adGroupCriterionResult?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult.AsObject,
    adGroupExtensionSettingResult?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult.AsObject,
    adGroupFeedResult?: google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult.AsObject,
    adGroupLabelResult?: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult.AsObject,
    adGroupResult?: google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult.AsObject,
    adParameterResult?: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult.AsObject,
    assetResult?: google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult.AsObject,
    biddingStrategyResult?: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult.AsObject,
    campaignBidModifierResult?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult.AsObject,
    campaignBudgetResult?: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult.AsObject,
    campaignCriterionResult?: google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult.AsObject,
    campaignDraftResult?: google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult.AsObject,
    campaignExperimentResult?: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult.AsObject,
    campaignExtensionSettingResult?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult.AsObject,
    campaignFeedResult?: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult.AsObject,
    campaignLabelResult?: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult.AsObject,
    campaignResult?: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult.AsObject,
    campaignSharedSetResult?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult.AsObject,
    conversionActionResult?: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult.AsObject,
    customerExtensionSettingResult?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult.AsObject,
    customerFeedResult?: google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult.AsObject,
    customerLabelResult?: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult.AsObject,
    customerNegativeCriterionResult?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult.AsObject,
    customerResult?: google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult.AsObject,
    extensionFeedItemResult?: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult.AsObject,
    feedItemResult?: google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult.AsObject,
    feedItemTargetResult?: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult.AsObject,
    feedMappingResult?: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult.AsObject,
    feedResult?: google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult.AsObject,
    labelResult?: google_ads_googleads_v2_services_label_service_pb.MutateLabelResult.AsObject,
    mediaFileResult?: google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult.AsObject,
    remarketingActionResult?: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult.AsObject,
    sharedCriterionResult?: google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult.AsObject,
    sharedSetResult?: google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult.AsObject,
    userListResult?: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    AD_GROUP_AD_LABEL_RESULT = 17,
    AD_GROUP_AD_RESULT = 1,
    AD_GROUP_BID_MODIFIER_RESULT = 2,
    AD_GROUP_CRITERION_LABEL_RESULT = 18,
    AD_GROUP_CRITERION_RESULT = 3,
    AD_GROUP_EXTENSION_SETTING_RESULT = 19,
    AD_GROUP_FEED_RESULT = 20,
    AD_GROUP_LABEL_RESULT = 21,
    AD_GROUP_RESULT = 5,
    AD_PARAMETER_RESULT = 22,
    ASSET_RESULT = 23,
    BIDDING_STRATEGY_RESULT = 6,
    CAMPAIGN_BID_MODIFIER_RESULT = 7,
    CAMPAIGN_BUDGET_RESULT = 8,
    CAMPAIGN_CRITERION_RESULT = 13,
    CAMPAIGN_DRAFT_RESULT = 24,
    CAMPAIGN_EXPERIMENT_RESULT = 25,
    CAMPAIGN_EXTENSION_SETTING_RESULT = 26,
    CAMPAIGN_FEED_RESULT = 27,
    CAMPAIGN_LABEL_RESULT = 28,
    CAMPAIGN_RESULT = 10,
    CAMPAIGN_SHARED_SET_RESULT = 11,
    CONVERSION_ACTION_RESULT = 12,
    CUSTOMER_EXTENSION_SETTING_RESULT = 30,
    CUSTOMER_FEED_RESULT = 31,
    CUSTOMER_LABEL_RESULT = 32,
    CUSTOMER_NEGATIVE_CRITERION_RESULT = 34,
    CUSTOMER_RESULT = 35,
    EXTENSION_FEED_ITEM_RESULT = 36,
    FEED_ITEM_RESULT = 37,
    FEED_ITEM_TARGET_RESULT = 38,
    FEED_MAPPING_RESULT = 39,
    FEED_RESULT = 40,
    LABEL_RESULT = 41,
    MEDIA_FILE_RESULT = 42,
    REMARKETING_ACTION_RESULT = 43,
    SHARED_CRITERION_RESULT = 14,
    SHARED_SET_RESULT = 15,
    USER_LIST_RESULT = 16,
  }
}

