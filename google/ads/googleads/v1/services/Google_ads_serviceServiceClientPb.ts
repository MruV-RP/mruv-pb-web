/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v1.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_ads_googleads_v1_common_metrics_pb from '../../../../../google/ads/googleads/v1/common/metrics_pb';
import * as google_ads_googleads_v1_common_segments_pb from '../../../../../google/ads/googleads/v1/common/segments_pb';
import * as google_ads_googleads_v1_resources_account_budget_pb from '../../../../../google/ads/googleads/v1/resources/account_budget_pb';
import * as google_ads_googleads_v1_resources_account_budget_proposal_pb from '../../../../../google/ads/googleads/v1/resources/account_budget_proposal_pb';
import * as google_ads_googleads_v1_resources_ad_group_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_pb';
import * as google_ads_googleads_v1_resources_ad_group_ad_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_ad_pb';
import * as google_ads_googleads_v1_resources_ad_group_ad_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_ad_label_pb';
import * as google_ads_googleads_v1_resources_ad_group_audience_view_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_audience_view_pb';
import * as google_ads_googleads_v1_resources_ad_group_bid_modifier_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_bid_modifier_pb';
import * as google_ads_googleads_v1_resources_ad_group_criterion_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_pb';
import * as google_ads_googleads_v1_resources_ad_group_criterion_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_label_pb';
import * as google_ads_googleads_v1_resources_ad_group_criterion_simulation_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_criterion_simulation_pb';
import * as google_ads_googleads_v1_resources_ad_group_extension_setting_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_extension_setting_pb';
import * as google_ads_googleads_v1_resources_ad_group_feed_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb';
import * as google_ads_googleads_v1_resources_ad_group_label_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_label_pb';
import * as google_ads_googleads_v1_resources_ad_group_simulation_pb from '../../../../../google/ads/googleads/v1/resources/ad_group_simulation_pb';
import * as google_ads_googleads_v1_resources_ad_parameter_pb from '../../../../../google/ads/googleads/v1/resources/ad_parameter_pb';
import * as google_ads_googleads_v1_resources_ad_schedule_view_pb from '../../../../../google/ads/googleads/v1/resources/ad_schedule_view_pb';
import * as google_ads_googleads_v1_resources_age_range_view_pb from '../../../../../google/ads/googleads/v1/resources/age_range_view_pb';
import * as google_ads_googleads_v1_resources_asset_pb from '../../../../../google/ads/googleads/v1/resources/asset_pb';
import * as google_ads_googleads_v1_resources_bidding_strategy_pb from '../../../../../google/ads/googleads/v1/resources/bidding_strategy_pb';
import * as google_ads_googleads_v1_resources_billing_setup_pb from '../../../../../google/ads/googleads/v1/resources/billing_setup_pb';
import * as google_ads_googleads_v1_resources_campaign_pb from '../../../../../google/ads/googleads/v1/resources/campaign_pb';
import * as google_ads_googleads_v1_resources_campaign_audience_view_pb from '../../../../../google/ads/googleads/v1/resources/campaign_audience_view_pb';
import * as google_ads_googleads_v1_resources_campaign_bid_modifier_pb from '../../../../../google/ads/googleads/v1/resources/campaign_bid_modifier_pb';
import * as google_ads_googleads_v1_resources_campaign_budget_pb from '../../../../../google/ads/googleads/v1/resources/campaign_budget_pb';
import * as google_ads_googleads_v1_resources_campaign_criterion_pb from '../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb';
import * as google_ads_googleads_v1_resources_campaign_criterion_simulation_pb from '../../../../../google/ads/googleads/v1/resources/campaign_criterion_simulation_pb';
import * as google_ads_googleads_v1_resources_campaign_draft_pb from '../../../../../google/ads/googleads/v1/resources/campaign_draft_pb';
import * as google_ads_googleads_v1_resources_campaign_experiment_pb from '../../../../../google/ads/googleads/v1/resources/campaign_experiment_pb';
import * as google_ads_googleads_v1_resources_campaign_extension_setting_pb from '../../../../../google/ads/googleads/v1/resources/campaign_extension_setting_pb';
import * as google_ads_googleads_v1_resources_campaign_feed_pb from '../../../../../google/ads/googleads/v1/resources/campaign_feed_pb';
import * as google_ads_googleads_v1_resources_campaign_label_pb from '../../../../../google/ads/googleads/v1/resources/campaign_label_pb';
import * as google_ads_googleads_v1_resources_campaign_shared_set_pb from '../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb';
import * as google_ads_googleads_v1_resources_carrier_constant_pb from '../../../../../google/ads/googleads/v1/resources/carrier_constant_pb';
import * as google_ads_googleads_v1_resources_change_status_pb from '../../../../../google/ads/googleads/v1/resources/change_status_pb';
import * as google_ads_googleads_v1_resources_click_view_pb from '../../../../../google/ads/googleads/v1/resources/click_view_pb';
import * as google_ads_googleads_v1_resources_conversion_action_pb from '../../../../../google/ads/googleads/v1/resources/conversion_action_pb';
import * as google_ads_googleads_v1_resources_custom_interest_pb from '../../../../../google/ads/googleads/v1/resources/custom_interest_pb';
import * as google_ads_googleads_v1_resources_customer_pb from '../../../../../google/ads/googleads/v1/resources/customer_pb';
import * as google_ads_googleads_v1_resources_customer_client_pb from '../../../../../google/ads/googleads/v1/resources/customer_client_pb';
import * as google_ads_googleads_v1_resources_customer_client_link_pb from '../../../../../google/ads/googleads/v1/resources/customer_client_link_pb';
import * as google_ads_googleads_v1_resources_customer_extension_setting_pb from '../../../../../google/ads/googleads/v1/resources/customer_extension_setting_pb';
import * as google_ads_googleads_v1_resources_customer_feed_pb from '../../../../../google/ads/googleads/v1/resources/customer_feed_pb';
import * as google_ads_googleads_v1_resources_customer_label_pb from '../../../../../google/ads/googleads/v1/resources/customer_label_pb';
import * as google_ads_googleads_v1_resources_customer_manager_link_pb from '../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb';
import * as google_ads_googleads_v1_resources_customer_negative_criterion_pb from '../../../../../google/ads/googleads/v1/resources/customer_negative_criterion_pb';
import * as google_ads_googleads_v1_resources_detail_placement_view_pb from '../../../../../google/ads/googleads/v1/resources/detail_placement_view_pb';
import * as google_ads_googleads_v1_resources_display_keyword_view_pb from '../../../../../google/ads/googleads/v1/resources/display_keyword_view_pb';
import * as google_ads_googleads_v1_resources_domain_category_pb from '../../../../../google/ads/googleads/v1/resources/domain_category_pb';
import * as google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb from '../../../../../google/ads/googleads/v1/resources/dynamic_search_ads_search_term_view_pb';
import * as google_ads_googleads_v1_resources_expanded_landing_page_view_pb from '../../../../../google/ads/googleads/v1/resources/expanded_landing_page_view_pb';
import * as google_ads_googleads_v1_resources_extension_feed_item_pb from '../../../../../google/ads/googleads/v1/resources/extension_feed_item_pb';
import * as google_ads_googleads_v1_resources_feed_pb from '../../../../../google/ads/googleads/v1/resources/feed_pb';
import * as google_ads_googleads_v1_resources_feed_item_pb from '../../../../../google/ads/googleads/v1/resources/feed_item_pb';
import * as google_ads_googleads_v1_resources_feed_item_target_pb from '../../../../../google/ads/googleads/v1/resources/feed_item_target_pb';
import * as google_ads_googleads_v1_resources_feed_mapping_pb from '../../../../../google/ads/googleads/v1/resources/feed_mapping_pb';
import * as google_ads_googleads_v1_resources_feed_placeholder_view_pb from '../../../../../google/ads/googleads/v1/resources/feed_placeholder_view_pb';
import * as google_ads_googleads_v1_resources_gender_view_pb from '../../../../../google/ads/googleads/v1/resources/gender_view_pb';
import * as google_ads_googleads_v1_resources_geo_target_constant_pb from '../../../../../google/ads/googleads/v1/resources/geo_target_constant_pb';
import * as google_ads_googleads_v1_resources_geographic_view_pb from '../../../../../google/ads/googleads/v1/resources/geographic_view_pb';
import * as google_ads_googleads_v1_resources_group_placement_view_pb from '../../../../../google/ads/googleads/v1/resources/group_placement_view_pb';
import * as google_ads_googleads_v1_resources_hotel_group_view_pb from '../../../../../google/ads/googleads/v1/resources/hotel_group_view_pb';
import * as google_ads_googleads_v1_resources_hotel_performance_view_pb from '../../../../../google/ads/googleads/v1/resources/hotel_performance_view_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_ad_group_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_ad_group_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_campaign_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_campaign_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_keyword_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_keyword_pb';
import * as google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb from '../../../../../google/ads/googleads/v1/resources/keyword_plan_negative_keyword_pb';
import * as google_ads_googleads_v1_resources_keyword_view_pb from '../../../../../google/ads/googleads/v1/resources/keyword_view_pb';
import * as google_ads_googleads_v1_resources_label_pb from '../../../../../google/ads/googleads/v1/resources/label_pb';
import * as google_ads_googleads_v1_resources_landing_page_view_pb from '../../../../../google/ads/googleads/v1/resources/landing_page_view_pb';
import * as google_ads_googleads_v1_resources_language_constant_pb from '../../../../../google/ads/googleads/v1/resources/language_constant_pb';
import * as google_ads_googleads_v1_resources_location_view_pb from '../../../../../google/ads/googleads/v1/resources/location_view_pb';
import * as google_ads_googleads_v1_resources_managed_placement_view_pb from '../../../../../google/ads/googleads/v1/resources/managed_placement_view_pb';
import * as google_ads_googleads_v1_resources_media_file_pb from '../../../../../google/ads/googleads/v1/resources/media_file_pb';
import * as google_ads_googleads_v1_resources_mobile_app_category_constant_pb from '../../../../../google/ads/googleads/v1/resources/mobile_app_category_constant_pb';
import * as google_ads_googleads_v1_resources_mobile_device_constant_pb from '../../../../../google/ads/googleads/v1/resources/mobile_device_constant_pb';
import * as google_ads_googleads_v1_resources_mutate_job_pb from '../../../../../google/ads/googleads/v1/resources/mutate_job_pb';
import * as google_ads_googleads_v1_resources_operating_system_version_constant_pb from '../../../../../google/ads/googleads/v1/resources/operating_system_version_constant_pb';
import * as google_ads_googleads_v1_resources_paid_organic_search_term_view_pb from '../../../../../google/ads/googleads/v1/resources/paid_organic_search_term_view_pb';
import * as google_ads_googleads_v1_resources_parental_status_view_pb from '../../../../../google/ads/googleads/v1/resources/parental_status_view_pb';
import * as google_ads_googleads_v1_resources_product_bidding_category_constant_pb from '../../../../../google/ads/googleads/v1/resources/product_bidding_category_constant_pb';
import * as google_ads_googleads_v1_resources_product_group_view_pb from '../../../../../google/ads/googleads/v1/resources/product_group_view_pb';
import * as google_ads_googleads_v1_resources_recommendation_pb from '../../../../../google/ads/googleads/v1/resources/recommendation_pb';
import * as google_ads_googleads_v1_resources_remarketing_action_pb from '../../../../../google/ads/googleads/v1/resources/remarketing_action_pb';
import * as google_ads_googleads_v1_resources_search_term_view_pb from '../../../../../google/ads/googleads/v1/resources/search_term_view_pb';
import * as google_ads_googleads_v1_resources_shared_criterion_pb from '../../../../../google/ads/googleads/v1/resources/shared_criterion_pb';
import * as google_ads_googleads_v1_resources_shared_set_pb from '../../../../../google/ads/googleads/v1/resources/shared_set_pb';
import * as google_ads_googleads_v1_resources_shopping_performance_view_pb from '../../../../../google/ads/googleads/v1/resources/shopping_performance_view_pb';
import * as google_ads_googleads_v1_resources_topic_constant_pb from '../../../../../google/ads/googleads/v1/resources/topic_constant_pb';
import * as google_ads_googleads_v1_resources_topic_view_pb from '../../../../../google/ads/googleads/v1/resources/topic_view_pb';
import * as google_ads_googleads_v1_resources_user_interest_pb from '../../../../../google/ads/googleads/v1/resources/user_interest_pb';
import * as google_ads_googleads_v1_resources_user_list_pb from '../../../../../google/ads/googleads/v1/resources/user_list_pb';
import * as google_ads_googleads_v1_resources_video_pb from '../../../../../google/ads/googleads/v1/resources/video_pb';
import * as google_ads_googleads_v1_services_ad_group_ad_label_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_ad_label_service_pb';
import * as google_ads_googleads_v1_services_ad_group_ad_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_ad_service_pb';
import * as google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_bid_modifier_service_pb';
import * as google_ads_googleads_v1_services_ad_group_criterion_label_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_criterion_label_service_pb';
import * as google_ads_googleads_v1_services_ad_group_criterion_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_criterion_service_pb';
import * as google_ads_googleads_v1_services_ad_group_extension_setting_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_extension_setting_service_pb';
import * as google_ads_googleads_v1_services_ad_group_feed_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_feed_service_pb';
import * as google_ads_googleads_v1_services_ad_group_label_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_label_service_pb';
import * as google_ads_googleads_v1_services_ad_group_service_pb from '../../../../../google/ads/googleads/v1/services/ad_group_service_pb';
import * as google_ads_googleads_v1_services_ad_parameter_service_pb from '../../../../../google/ads/googleads/v1/services/ad_parameter_service_pb';
import * as google_ads_googleads_v1_services_asset_service_pb from '../../../../../google/ads/googleads/v1/services/asset_service_pb';
import * as google_ads_googleads_v1_services_bidding_strategy_service_pb from '../../../../../google/ads/googleads/v1/services/bidding_strategy_service_pb';
import * as google_ads_googleads_v1_services_campaign_bid_modifier_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_bid_modifier_service_pb';
import * as google_ads_googleads_v1_services_campaign_budget_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_budget_service_pb';
import * as google_ads_googleads_v1_services_campaign_criterion_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_criterion_service_pb';
import * as google_ads_googleads_v1_services_campaign_draft_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_draft_service_pb';
import * as google_ads_googleads_v1_services_campaign_experiment_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_experiment_service_pb';
import * as google_ads_googleads_v1_services_campaign_extension_setting_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_extension_setting_service_pb';
import * as google_ads_googleads_v1_services_campaign_feed_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_feed_service_pb';
import * as google_ads_googleads_v1_services_campaign_label_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_label_service_pb';
import * as google_ads_googleads_v1_services_campaign_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_service_pb';
import * as google_ads_googleads_v1_services_campaign_shared_set_service_pb from '../../../../../google/ads/googleads/v1/services/campaign_shared_set_service_pb';
import * as google_ads_googleads_v1_services_conversion_action_service_pb from '../../../../../google/ads/googleads/v1/services/conversion_action_service_pb';
import * as google_ads_googleads_v1_services_customer_extension_setting_service_pb from '../../../../../google/ads/googleads/v1/services/customer_extension_setting_service_pb';
import * as google_ads_googleads_v1_services_customer_feed_service_pb from '../../../../../google/ads/googleads/v1/services/customer_feed_service_pb';
import * as google_ads_googleads_v1_services_customer_label_service_pb from '../../../../../google/ads/googleads/v1/services/customer_label_service_pb';
import * as google_ads_googleads_v1_services_customer_negative_criterion_service_pb from '../../../../../google/ads/googleads/v1/services/customer_negative_criterion_service_pb';
import * as google_ads_googleads_v1_services_customer_service_pb from '../../../../../google/ads/googleads/v1/services/customer_service_pb';
import * as google_ads_googleads_v1_services_extension_feed_item_service_pb from '../../../../../google/ads/googleads/v1/services/extension_feed_item_service_pb';
import * as google_ads_googleads_v1_services_feed_item_service_pb from '../../../../../google/ads/googleads/v1/services/feed_item_service_pb';
import * as google_ads_googleads_v1_services_feed_item_target_service_pb from '../../../../../google/ads/googleads/v1/services/feed_item_target_service_pb';
import * as google_ads_googleads_v1_services_feed_mapping_service_pb from '../../../../../google/ads/googleads/v1/services/feed_mapping_service_pb';
import * as google_ads_googleads_v1_services_feed_service_pb from '../../../../../google/ads/googleads/v1/services/feed_service_pb';
import * as google_ads_googleads_v1_services_label_service_pb from '../../../../../google/ads/googleads/v1/services/label_service_pb';
import * as google_ads_googleads_v1_services_media_file_service_pb from '../../../../../google/ads/googleads/v1/services/media_file_service_pb';
import * as google_ads_googleads_v1_services_remarketing_action_service_pb from '../../../../../google/ads/googleads/v1/services/remarketing_action_service_pb';
import * as google_ads_googleads_v1_services_shared_criterion_service_pb from '../../../../../google/ads/googleads/v1/services/shared_criterion_service_pb';
import * as google_ads_googleads_v1_services_shared_set_service_pb from '../../../../../google/ads/googleads/v1/services/shared_set_service_pb';
import * as google_ads_googleads_v1_services_user_list_service_pb from '../../../../../google/ads/googleads/v1/services/user_list_service_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';

import {
  MutateGoogleAdsRequest,
  MutateGoogleAdsResponse,
  SearchGoogleAdsRequest,
  SearchGoogleAdsResponse} from './google_ads_service_pb';

export class GoogleAdsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchGoogleAdsResponse,
    (request: SearchGoogleAdsRequest) => {
      return request.serializeBinary();
    },
    SearchGoogleAdsResponse.deserializeBinary
  );

  search(
    request: SearchGoogleAdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchGoogleAdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.GoogleAdsService/Search',
      request,
      metadata || {},
      this.methodInfoSearch,
      callback);
  }

  methodInfoMutate = new grpcWeb.AbstractClientBase.MethodInfo(
    MutateGoogleAdsResponse,
    (request: MutateGoogleAdsRequest) => {
      return request.serializeBinary();
    },
    MutateGoogleAdsResponse.deserializeBinary
  );

  mutate(
    request: MutateGoogleAdsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MutateGoogleAdsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.ads.googleads.v1.services.GoogleAdsService/Mutate',
      request,
      metadata || {},
      this.methodInfoMutate,
      callback);
  }

}

