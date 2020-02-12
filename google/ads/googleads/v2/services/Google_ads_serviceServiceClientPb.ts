/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v2.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

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
        '/google.ads.googleads.v2.services.GoogleAdsService/Search',
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
        '/google.ads.googleads.v2.services.GoogleAdsService/Mutate',
      request,
      metadata || {},
      this.methodInfoMutate,
      callback);
  }

}

