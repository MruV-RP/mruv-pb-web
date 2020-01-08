/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v1_common_criteria_pb = require('../../../../../google/ads/googleads/v1/common/criteria_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_common_criteria_pb);
var google_ads_googleads_v1_enums_ad_network_type_pb = require('../../../../../google/ads/googleads/v1/enums/ad_network_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_ad_network_type_pb);
var google_ads_googleads_v1_enums_click_type_pb = require('../../../../../google/ads/googleads/v1/enums/click_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_click_type_pb);
var google_ads_googleads_v1_enums_conversion_action_category_pb = require('../../../../../google/ads/googleads/v1/enums/conversion_action_category_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_conversion_action_category_pb);
var google_ads_googleads_v1_enums_conversion_attribution_event_type_pb = require('../../../../../google/ads/googleads/v1/enums/conversion_attribution_event_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_conversion_attribution_event_type_pb);
var google_ads_googleads_v1_enums_conversion_lag_bucket_pb = require('../../../../../google/ads/googleads/v1/enums/conversion_lag_bucket_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_conversion_lag_bucket_pb);
var google_ads_googleads_v1_enums_conversion_or_adjustment_lag_bucket_pb = require('../../../../../google/ads/googleads/v1/enums/conversion_or_adjustment_lag_bucket_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_conversion_or_adjustment_lag_bucket_pb);
var google_ads_googleads_v1_enums_day_of_week_pb = require('../../../../../google/ads/googleads/v1/enums/day_of_week_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_day_of_week_pb);
var google_ads_googleads_v1_enums_device_pb = require('../../../../../google/ads/googleads/v1/enums/device_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_device_pb);
var google_ads_googleads_v1_enums_external_conversion_source_pb = require('../../../../../google/ads/googleads/v1/enums/external_conversion_source_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_external_conversion_source_pb);
var google_ads_googleads_v1_enums_hotel_date_selection_type_pb = require('../../../../../google/ads/googleads/v1/enums/hotel_date_selection_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_hotel_date_selection_type_pb);
var google_ads_googleads_v1_enums_hotel_rate_type_pb = require('../../../../../google/ads/googleads/v1/enums/hotel_rate_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_hotel_rate_type_pb);
var google_ads_googleads_v1_enums_month_of_year_pb = require('../../../../../google/ads/googleads/v1/enums/month_of_year_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_month_of_year_pb);
var google_ads_googleads_v1_enums_placeholder_type_pb = require('../../../../../google/ads/googleads/v1/enums/placeholder_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_placeholder_type_pb);
var google_ads_googleads_v1_enums_product_channel_pb = require('../../../../../google/ads/googleads/v1/enums/product_channel_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_product_channel_pb);
var google_ads_googleads_v1_enums_product_channel_exclusivity_pb = require('../../../../../google/ads/googleads/v1/enums/product_channel_exclusivity_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_product_channel_exclusivity_pb);
var google_ads_googleads_v1_enums_product_condition_pb = require('../../../../../google/ads/googleads/v1/enums/product_condition_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_product_condition_pb);
var google_ads_googleads_v1_enums_search_engine_results_page_type_pb = require('../../../../../google/ads/googleads/v1/enums/search_engine_results_page_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_search_engine_results_page_type_pb);
var google_ads_googleads_v1_enums_search_term_match_type_pb = require('../../../../../google/ads/googleads/v1/enums/search_term_match_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_search_term_match_type_pb);
var google_ads_googleads_v1_enums_slot_pb = require('../../../../../google/ads/googleads/v1/enums/slot_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_slot_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.common.Keyword', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.common.Segments', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.common.Segments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.common.Segments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.common.Segments.displayName = 'proto.google.ads.googleads.v1.common.Segments';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.common.Keyword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.common.Keyword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.common.Keyword.displayName = 'proto.google.ads.googleads.v1.common.Keyword';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.Segments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.Segments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Segments.toObject = function(includeInstance, msg) {
  var f, obj = {
    adNetworkType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clickType: jspb.Message.getFieldWithDefault(msg, 26, 0),
    conversionAction: (f = msg.getConversionAction()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    conversionActionCategory: jspb.Message.getFieldWithDefault(msg, 53, 0),
    conversionActionName: (f = msg.getConversionActionName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    conversionAdjustment: (f = msg.getConversionAdjustment()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    conversionAttributionEventType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    conversionLagBucket: jspb.Message.getFieldWithDefault(msg, 50, 0),
    conversionOrAdjustmentLagBucket: jspb.Message.getFieldWithDefault(msg, 51, 0),
    date: (f = msg.getDate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 5, 0),
    device: jspb.Message.getFieldWithDefault(msg, 1, 0),
    externalConversionSource: jspb.Message.getFieldWithDefault(msg, 55, 0),
    geoTargetAirport: (f = msg.getGeoTargetAirport()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetCity: (f = msg.getGeoTargetCity()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetCounty: (f = msg.getGeoTargetCounty()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetDistrict: (f = msg.getGeoTargetDistrict()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetMetro: (f = msg.getGeoTargetMetro()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetMostSpecificLocation: (f = msg.getGeoTargetMostSpecificLocation()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetPostalCode: (f = msg.getGeoTargetPostalCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetProvince: (f = msg.getGeoTargetProvince()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetRegion: (f = msg.getGeoTargetRegion()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    geoTargetState: (f = msg.getGeoTargetState()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hotelBookingWindowDays: (f = msg.getHotelBookingWindowDays()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    hotelCenterId: (f = msg.getHotelCenterId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    hotelCheckInDate: (f = msg.getHotelCheckInDate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hotelCheckInDayOfWeek: jspb.Message.getFieldWithDefault(msg, 9, 0),
    hotelCity: (f = msg.getHotelCity()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hotelClass: (f = msg.getHotelClass()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    hotelCountry: (f = msg.getHotelCountry()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hotelDateSelectionType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    hotelLengthOfStay: (f = msg.getHotelLengthOfStay()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    hotelRateRuleId: (f = msg.getHotelRateRuleId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hotelRateType: jspb.Message.getFieldWithDefault(msg, 74, 0),
    hotelState: (f = msg.getHotelState()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    hour: (f = msg.getHour()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    interactionOnThisExtension: (f = msg.getInteractionOnThisExtension()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    keyword: (f = msg.getKeyword()) && proto.google.ads.googleads.v1.common.Keyword.toObject(includeInstance, f),
    month: (f = msg.getMonth()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    monthOfYear: jspb.Message.getFieldWithDefault(msg, 18, 0),
    partnerHotelId: (f = msg.getPartnerHotelId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    placeholderType: jspb.Message.getFieldWithDefault(msg, 20, 0),
    productAggregatorId: (f = msg.getProductAggregatorId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    productBiddingCategoryLevel1: (f = msg.getProductBiddingCategoryLevel1()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productBiddingCategoryLevel2: (f = msg.getProductBiddingCategoryLevel2()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productBiddingCategoryLevel3: (f = msg.getProductBiddingCategoryLevel3()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productBiddingCategoryLevel4: (f = msg.getProductBiddingCategoryLevel4()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productBiddingCategoryLevel5: (f = msg.getProductBiddingCategoryLevel5()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productBrand: (f = msg.getProductBrand()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productChannel: jspb.Message.getFieldWithDefault(msg, 30, 0),
    productChannelExclusivity: jspb.Message.getFieldWithDefault(msg, 31, 0),
    productCondition: jspb.Message.getFieldWithDefault(msg, 32, 0),
    productCountry: (f = msg.getProductCountry()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productCustomAttribute0: (f = msg.getProductCustomAttribute0()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productCustomAttribute1: (f = msg.getProductCustomAttribute1()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productCustomAttribute2: (f = msg.getProductCustomAttribute2()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productCustomAttribute3: (f = msg.getProductCustomAttribute3()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productCustomAttribute4: (f = msg.getProductCustomAttribute4()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productItemId: (f = msg.getProductItemId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productLanguage: (f = msg.getProductLanguage()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productMerchantId: (f = msg.getProductMerchantId()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    productStoreId: (f = msg.getProductStoreId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTitle: (f = msg.getProductTitle()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTypeL1: (f = msg.getProductTypeL1()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTypeL2: (f = msg.getProductTypeL2()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTypeL3: (f = msg.getProductTypeL3()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTypeL4: (f = msg.getProductTypeL4()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    productTypeL5: (f = msg.getProductTypeL5()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    quarter: (f = msg.getQuarter()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    searchEngineResultsPageType: jspb.Message.getFieldWithDefault(msg, 70, 0),
    searchTermMatchType: jspb.Message.getFieldWithDefault(msg, 22, 0),
    slot: jspb.Message.getFieldWithDefault(msg, 23, 0),
    webpage: (f = msg.getWebpage()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    week: (f = msg.getWeek()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    year: (f = msg.getYear()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.common.Segments}
 */
proto.google.ads.googleads.v1.common.Segments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.Segments;
  return proto.google.ads.googleads.v1.common.Segments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.Segments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.Segments}
 */
proto.google.ads.googleads.v1.common.Segments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.AdNetworkTypeEnum.AdNetworkType} */ (reader.readEnum());
      msg.setAdNetworkType(value);
      break;
    case 26:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ClickTypeEnum.ClickType} */ (reader.readEnum());
      msg.setClickType(value);
      break;
    case 52:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setConversionAction(value);
      break;
    case 53:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ConversionActionCategoryEnum.ConversionActionCategory} */ (reader.readEnum());
      msg.setConversionActionCategory(value);
      break;
    case 54:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setConversionActionName(value);
      break;
    case 27:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setConversionAdjustment(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType} */ (reader.readEnum());
      msg.setConversionAttributionEventType(value);
      break;
    case 50:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket} */ (reader.readEnum());
      msg.setConversionLagBucket(value);
      break;
    case 51:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket} */ (reader.readEnum());
      msg.setConversionOrAdjustmentLagBucket(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} */ (reader.readEnum());
      msg.setDayOfWeek(value);
      break;
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.DeviceEnum.Device} */ (reader.readEnum());
      msg.setDevice(value);
      break;
    case 55:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ExternalConversionSourceEnum.ExternalConversionSource} */ (reader.readEnum());
      msg.setExternalConversionSource(value);
      break;
    case 65:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetAirport(value);
      break;
    case 62:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetCity(value);
      break;
    case 68:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetCounty(value);
      break;
    case 69:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetDistrict(value);
      break;
    case 63:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetMetro(value);
      break;
    case 72:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetMostSpecificLocation(value);
      break;
    case 71:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetPostalCode(value);
      break;
    case 75:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetProvince(value);
      break;
    case 64:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetRegion(value);
      break;
    case 67:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetState(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setHotelBookingWindowDays(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setHotelCenterId(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHotelCheckInDate(value);
      break;
    case 9:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} */ (reader.readEnum());
      msg.setHotelCheckInDayOfWeek(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHotelCity(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setHotelClass(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHotelCountry(value);
      break;
    case 13:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.HotelDateSelectionTypeEnum.HotelDateSelectionType} */ (reader.readEnum());
      msg.setHotelDateSelectionType(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setHotelLengthOfStay(value);
      break;
    case 73:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHotelRateRuleId(value);
      break;
    case 74:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.HotelRateTypeEnum.HotelRateType} */ (reader.readEnum());
      msg.setHotelRateType(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHotelState(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setHour(value);
      break;
    case 49:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setInteractionOnThisExtension(value);
      break;
    case 61:
      var value = new proto.google.ads.googleads.v1.common.Keyword;
      reader.readMessage(value,proto.google.ads.googleads.v1.common.Keyword.deserializeBinaryFromReader);
      msg.setKeyword(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setMonth(value);
      break;
    case 18:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.MonthOfYearEnum.MonthOfYear} */ (reader.readEnum());
      msg.setMonthOfYear(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setPartnerHotelId(value);
      break;
    case 20:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.PlaceholderTypeEnum.PlaceholderType} */ (reader.readEnum());
      msg.setPlaceholderType(value);
      break;
    case 28:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setProductAggregatorId(value);
      break;
    case 56:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBiddingCategoryLevel1(value);
      break;
    case 57:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBiddingCategoryLevel2(value);
      break;
    case 58:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBiddingCategoryLevel3(value);
      break;
    case 59:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBiddingCategoryLevel4(value);
      break;
    case 60:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBiddingCategoryLevel5(value);
      break;
    case 29:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductBrand(value);
      break;
    case 30:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ProductChannelEnum.ProductChannel} */ (reader.readEnum());
      msg.setProductChannel(value);
      break;
    case 31:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity} */ (reader.readEnum());
      msg.setProductChannelExclusivity(value);
      break;
    case 32:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ProductConditionEnum.ProductCondition} */ (reader.readEnum());
      msg.setProductCondition(value);
      break;
    case 33:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCountry(value);
      break;
    case 34:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCustomAttribute0(value);
      break;
    case 35:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCustomAttribute1(value);
      break;
    case 36:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCustomAttribute2(value);
      break;
    case 37:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCustomAttribute3(value);
      break;
    case 38:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductCustomAttribute4(value);
      break;
    case 39:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductItemId(value);
      break;
    case 40:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductLanguage(value);
      break;
    case 41:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setProductMerchantId(value);
      break;
    case 42:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductStoreId(value);
      break;
    case 43:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTitle(value);
      break;
    case 44:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTypeL1(value);
      break;
    case 45:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTypeL2(value);
      break;
    case 46:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTypeL3(value);
      break;
    case 47:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTypeL4(value);
      break;
    case 48:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProductTypeL5(value);
      break;
    case 21:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setQuarter(value);
      break;
    case 70:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType} */ (reader.readEnum());
      msg.setSearchEngineResultsPageType(value);
      break;
    case 22:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.SearchTermMatchTypeEnum.SearchTermMatchType} */ (reader.readEnum());
      msg.setSearchTermMatchType(value);
      break;
    case 23:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.SlotEnum.Slot} */ (reader.readEnum());
      msg.setSlot(value);
      break;
    case 66:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWebpage(value);
      break;
    case 24:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWeek(value);
      break;
    case 25:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.Segments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.Segments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Segments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdNetworkType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getClickType();
  if (f !== 0.0) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = message.getConversionAction();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getConversionActionCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      53,
      f
    );
  }
  f = message.getConversionActionName();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getConversionAdjustment();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getConversionAttributionEventType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getConversionLagBucket();
  if (f !== 0.0) {
    writer.writeEnum(
      50,
      f
    );
  }
  f = message.getConversionOrAdjustmentLagBucket();
  if (f !== 0.0) {
    writer.writeEnum(
      51,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDayOfWeek();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDevice();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getExternalConversionSource();
  if (f !== 0.0) {
    writer.writeEnum(
      55,
      f
    );
  }
  f = message.getGeoTargetAirport();
  if (f != null) {
    writer.writeMessage(
      65,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetCity();
  if (f != null) {
    writer.writeMessage(
      62,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetCounty();
  if (f != null) {
    writer.writeMessage(
      68,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetDistrict();
  if (f != null) {
    writer.writeMessage(
      69,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetMetro();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetMostSpecificLocation();
  if (f != null) {
    writer.writeMessage(
      72,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetPostalCode();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetProvince();
  if (f != null) {
    writer.writeMessage(
      75,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetRegion();
  if (f != null) {
    writer.writeMessage(
      64,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetState();
  if (f != null) {
    writer.writeMessage(
      67,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHotelBookingWindowDays();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getHotelCenterId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getHotelCheckInDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHotelCheckInDayOfWeek();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getHotelCity();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHotelClass();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getHotelCountry();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHotelDateSelectionType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getHotelLengthOfStay();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getHotelRateRuleId();
  if (f != null) {
    writer.writeMessage(
      73,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHotelRateType();
  if (f !== 0.0) {
    writer.writeEnum(
      74,
      f
    );
  }
  f = message.getHotelState();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getHour();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getInteractionOnThisExtension();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getKeyword();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.google.ads.googleads.v1.common.Keyword.serializeBinaryToWriter
    );
  }
  f = message.getMonth();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMonthOfYear();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = message.getPartnerHotelId();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPlaceholderType();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getProductAggregatorId();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getProductBiddingCategoryLevel1();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductBiddingCategoryLevel2();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductBiddingCategoryLevel3();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductBiddingCategoryLevel4();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductBiddingCategoryLevel5();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductBrand();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      30,
      f
    );
  }
  f = message.getProductChannelExclusivity();
  if (f !== 0.0) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = message.getProductCondition();
  if (f !== 0.0) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = message.getProductCountry();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductCustomAttribute0();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductCustomAttribute1();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductCustomAttribute2();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductCustomAttribute3();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductCustomAttribute4();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductItemId();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductLanguage();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductMerchantId();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getProductStoreId();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTitle();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTypeL1();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTypeL2();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTypeL3();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTypeL4();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getProductTypeL5();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getQuarter();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSearchEngineResultsPageType();
  if (f !== 0.0) {
    writer.writeEnum(
      70,
      f
    );
  }
  f = message.getSearchTermMatchType();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getSlot();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getWebpage();
  if (f != null) {
    writer.writeMessage(
      66,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getWeek();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getYear();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v1.enums.AdNetworkTypeEnum.AdNetworkType ad_network_type = 3;
 * @return {!proto.google.ads.googleads.v1.enums.AdNetworkTypeEnum.AdNetworkType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getAdNetworkType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.AdNetworkTypeEnum.AdNetworkType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.AdNetworkTypeEnum.AdNetworkType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setAdNetworkType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.ads.googleads.v1.enums.ClickTypeEnum.ClickType click_type = 26;
 * @return {!proto.google.ads.googleads.v1.enums.ClickTypeEnum.ClickType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getClickType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ClickTypeEnum.ClickType} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ClickTypeEnum.ClickType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setClickType = function(value) {
  jspb.Message.setProto3EnumField(this, 26, value);
};


/**
 * optional google.protobuf.StringValue conversion_action = 52;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionAction = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 52));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionAction = function(value) {
  jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearConversionAction = function() {
  this.setConversionAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasConversionAction = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional google.ads.googleads.v1.enums.ConversionActionCategoryEnum.ConversionActionCategory conversion_action_category = 53;
 * @return {!proto.google.ads.googleads.v1.enums.ConversionActionCategoryEnum.ConversionActionCategory}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionActionCategory = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ConversionActionCategoryEnum.ConversionActionCategory} */ (jspb.Message.getFieldWithDefault(this, 53, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ConversionActionCategoryEnum.ConversionActionCategory} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionActionCategory = function(value) {
  jspb.Message.setProto3EnumField(this, 53, value);
};


/**
 * optional google.protobuf.StringValue conversion_action_name = 54;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionActionName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 54));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionActionName = function(value) {
  jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearConversionActionName = function() {
  this.setConversionActionName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasConversionActionName = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional google.protobuf.BoolValue conversion_adjustment = 27;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionAdjustment = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 27));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionAdjustment = function(value) {
  jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearConversionAdjustment = function() {
  this.setConversionAdjustment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasConversionAdjustment = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional google.ads.googleads.v1.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType conversion_attribution_event_type = 2;
 * @return {!proto.google.ads.googleads.v1.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionAttributionEventType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ConversionAttributionEventTypeEnum.ConversionAttributionEventType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionAttributionEventType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket conversion_lag_bucket = 50;
 * @return {!proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionLagBucket = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket} */ (jspb.Message.getFieldWithDefault(this, 50, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionLagBucket = function(value) {
  jspb.Message.setProto3EnumField(this, 50, value);
};


/**
 * optional google.ads.googleads.v1.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket conversion_or_adjustment_lag_bucket = 51;
 * @return {!proto.google.ads.googleads.v1.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getConversionOrAdjustmentLagBucket = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ConversionOrAdjustmentLagBucketEnum.ConversionOrAdjustmentLagBucket} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setConversionOrAdjustmentLagBucket = function(value) {
  jspb.Message.setProto3EnumField(this, 51, value);
};


/**
 * optional google.protobuf.StringValue date = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek day_of_week = 5;
 * @return {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getDayOfWeek = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setDayOfWeek = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.ads.googleads.v1.enums.DeviceEnum.Device device = 1;
 * @return {!proto.google.ads.googleads.v1.enums.DeviceEnum.Device}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getDevice = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.DeviceEnum.Device} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.DeviceEnum.Device} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setDevice = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.ads.googleads.v1.enums.ExternalConversionSourceEnum.ExternalConversionSource external_conversion_source = 55;
 * @return {!proto.google.ads.googleads.v1.enums.ExternalConversionSourceEnum.ExternalConversionSource}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getExternalConversionSource = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ExternalConversionSourceEnum.ExternalConversionSource} */ (jspb.Message.getFieldWithDefault(this, 55, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ExternalConversionSourceEnum.ExternalConversionSource} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setExternalConversionSource = function(value) {
  jspb.Message.setProto3EnumField(this, 55, value);
};


/**
 * optional google.protobuf.StringValue geo_target_airport = 65;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetAirport = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 65));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetAirport = function(value) {
  jspb.Message.setWrapperField(this, 65, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetAirport = function() {
  this.setGeoTargetAirport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetAirport = function() {
  return jspb.Message.getField(this, 65) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_city = 62;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetCity = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 62));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetCity = function(value) {
  jspb.Message.setWrapperField(this, 62, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetCity = function() {
  this.setGeoTargetCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetCity = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_county = 68;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetCounty = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 68));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetCounty = function(value) {
  jspb.Message.setWrapperField(this, 68, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetCounty = function() {
  this.setGeoTargetCounty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetCounty = function() {
  return jspb.Message.getField(this, 68) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_district = 69;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetDistrict = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 69));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetDistrict = function(value) {
  jspb.Message.setWrapperField(this, 69, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetDistrict = function() {
  this.setGeoTargetDistrict(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetDistrict = function() {
  return jspb.Message.getField(this, 69) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_metro = 63;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetMetro = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 63));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetMetro = function(value) {
  jspb.Message.setWrapperField(this, 63, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetMetro = function() {
  this.setGeoTargetMetro(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetMetro = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_most_specific_location = 72;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetMostSpecificLocation = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 72));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetMostSpecificLocation = function(value) {
  jspb.Message.setWrapperField(this, 72, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetMostSpecificLocation = function() {
  this.setGeoTargetMostSpecificLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetMostSpecificLocation = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_postal_code = 71;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetPostalCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 71));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetPostalCode = function(value) {
  jspb.Message.setWrapperField(this, 71, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetPostalCode = function() {
  this.setGeoTargetPostalCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetPostalCode = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_province = 75;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetProvince = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 75));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetProvince = function(value) {
  jspb.Message.setWrapperField(this, 75, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetProvince = function() {
  this.setGeoTargetProvince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetProvince = function() {
  return jspb.Message.getField(this, 75) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_region = 64;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetRegion = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 64));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetRegion = function(value) {
  jspb.Message.setWrapperField(this, 64, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetRegion = function() {
  this.setGeoTargetRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetRegion = function() {
  return jspb.Message.getField(this, 64) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_state = 67;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getGeoTargetState = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 67));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setGeoTargetState = function(value) {
  jspb.Message.setWrapperField(this, 67, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearGeoTargetState = function() {
  this.setGeoTargetState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasGeoTargetState = function() {
  return jspb.Message.getField(this, 67) != null;
};


/**
 * optional google.protobuf.Int64Value hotel_booking_window_days = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelBookingWindowDays = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelBookingWindowDays = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelBookingWindowDays = function() {
  this.setHotelBookingWindowDays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelBookingWindowDays = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int64Value hotel_center_id = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelCenterId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelCenterId = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelCenterId = function() {
  this.setHotelCenterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelCenterId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue hotel_check_in_date = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelCheckInDate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelCheckInDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelCheckInDate = function() {
  this.setHotelCheckInDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelCheckInDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek hotel_check_in_day_of_week = 9;
 * @return {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelCheckInDayOfWeek = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.DayOfWeekEnum.DayOfWeek} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelCheckInDayOfWeek = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.StringValue hotel_city = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelCity = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelCity = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelCity = function() {
  this.setHotelCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelCity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Int32Value hotel_class = 11;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelClass = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 11));
};


/** @param {?proto.google.protobuf.Int32Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelClass = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelClass = function() {
  this.setHotelClass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelClass = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.StringValue hotel_country = 12;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelCountry = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 12));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelCountry = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelCountry = function() {
  this.setHotelCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelCountry = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.ads.googleads.v1.enums.HotelDateSelectionTypeEnum.HotelDateSelectionType hotel_date_selection_type = 13;
 * @return {!proto.google.ads.googleads.v1.enums.HotelDateSelectionTypeEnum.HotelDateSelectionType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelDateSelectionType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.HotelDateSelectionTypeEnum.HotelDateSelectionType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.HotelDateSelectionTypeEnum.HotelDateSelectionType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelDateSelectionType = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional google.protobuf.Int32Value hotel_length_of_stay = 14;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelLengthOfStay = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 14));
};


/** @param {?proto.google.protobuf.Int32Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelLengthOfStay = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelLengthOfStay = function() {
  this.setHotelLengthOfStay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelLengthOfStay = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.StringValue hotel_rate_rule_id = 73;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelRateRuleId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 73));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelRateRuleId = function(value) {
  jspb.Message.setWrapperField(this, 73, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelRateRuleId = function() {
  this.setHotelRateRuleId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelRateRuleId = function() {
  return jspb.Message.getField(this, 73) != null;
};


/**
 * optional google.ads.googleads.v1.enums.HotelRateTypeEnum.HotelRateType hotel_rate_type = 74;
 * @return {!proto.google.ads.googleads.v1.enums.HotelRateTypeEnum.HotelRateType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelRateType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.HotelRateTypeEnum.HotelRateType} */ (jspb.Message.getFieldWithDefault(this, 74, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.HotelRateTypeEnum.HotelRateType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelRateType = function(value) {
  jspb.Message.setProto3EnumField(this, 74, value);
};


/**
 * optional google.protobuf.StringValue hotel_state = 15;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHotelState = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 15));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHotelState = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHotelState = function() {
  this.setHotelState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHotelState = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Int32Value hour = 16;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getHour = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 16));
};


/** @param {?proto.google.protobuf.Int32Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setHour = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearHour = function() {
  this.setHour(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasHour = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.BoolValue interaction_on_this_extension = 49;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getInteractionOnThisExtension = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 49));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setInteractionOnThisExtension = function(value) {
  jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearInteractionOnThisExtension = function() {
  this.setInteractionOnThisExtension(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasInteractionOnThisExtension = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional Keyword keyword = 61;
 * @return {?proto.google.ads.googleads.v1.common.Keyword}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getKeyword = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.Keyword} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v1.common.Keyword, 61));
};


/** @param {?proto.google.ads.googleads.v1.common.Keyword|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setKeyword = function(value) {
  jspb.Message.setWrapperField(this, 61, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearKeyword = function() {
  this.setKeyword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasKeyword = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional google.protobuf.StringValue month = 17;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getMonth = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 17));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setMonth = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearMonth = function() {
  this.setMonth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.ads.googleads.v1.enums.MonthOfYearEnum.MonthOfYear month_of_year = 18;
 * @return {!proto.google.ads.googleads.v1.enums.MonthOfYearEnum.MonthOfYear}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getMonthOfYear = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.MonthOfYearEnum.MonthOfYear} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.MonthOfYearEnum.MonthOfYear} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setMonthOfYear = function(value) {
  jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional google.protobuf.StringValue partner_hotel_id = 19;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getPartnerHotelId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 19));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setPartnerHotelId = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearPartnerHotelId = function() {
  this.setPartnerHotelId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasPartnerHotelId = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.ads.googleads.v1.enums.PlaceholderTypeEnum.PlaceholderType placeholder_type = 20;
 * @return {!proto.google.ads.googleads.v1.enums.PlaceholderTypeEnum.PlaceholderType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getPlaceholderType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.PlaceholderTypeEnum.PlaceholderType} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.PlaceholderTypeEnum.PlaceholderType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setPlaceholderType = function(value) {
  jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional google.protobuf.UInt64Value product_aggregator_id = 28;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductAggregatorId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 28));
};


/** @param {?proto.google.protobuf.UInt64Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductAggregatorId = function(value) {
  jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductAggregatorId = function() {
  this.setProductAggregatorId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductAggregatorId = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.StringValue product_bidding_category_level1 = 56;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBiddingCategoryLevel1 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 56));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBiddingCategoryLevel1 = function(value) {
  jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBiddingCategoryLevel1 = function() {
  this.setProductBiddingCategoryLevel1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBiddingCategoryLevel1 = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional google.protobuf.StringValue product_bidding_category_level2 = 57;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBiddingCategoryLevel2 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 57));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBiddingCategoryLevel2 = function(value) {
  jspb.Message.setWrapperField(this, 57, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBiddingCategoryLevel2 = function() {
  this.setProductBiddingCategoryLevel2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBiddingCategoryLevel2 = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional google.protobuf.StringValue product_bidding_category_level3 = 58;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBiddingCategoryLevel3 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 58));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBiddingCategoryLevel3 = function(value) {
  jspb.Message.setWrapperField(this, 58, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBiddingCategoryLevel3 = function() {
  this.setProductBiddingCategoryLevel3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBiddingCategoryLevel3 = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional google.protobuf.StringValue product_bidding_category_level4 = 59;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBiddingCategoryLevel4 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 59));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBiddingCategoryLevel4 = function(value) {
  jspb.Message.setWrapperField(this, 59, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBiddingCategoryLevel4 = function() {
  this.setProductBiddingCategoryLevel4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBiddingCategoryLevel4 = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional google.protobuf.StringValue product_bidding_category_level5 = 60;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBiddingCategoryLevel5 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 60));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBiddingCategoryLevel5 = function(value) {
  jspb.Message.setWrapperField(this, 60, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBiddingCategoryLevel5 = function() {
  this.setProductBiddingCategoryLevel5(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBiddingCategoryLevel5 = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional google.protobuf.StringValue product_brand = 29;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductBrand = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 29));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductBrand = function(value) {
  jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductBrand = function() {
  this.setProductBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductBrand = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional google.ads.googleads.v1.enums.ProductChannelEnum.ProductChannel product_channel = 30;
 * @return {!proto.google.ads.googleads.v1.enums.ProductChannelEnum.ProductChannel}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductChannel = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ProductChannelEnum.ProductChannel} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ProductChannelEnum.ProductChannel} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductChannel = function(value) {
  jspb.Message.setProto3EnumField(this, 30, value);
};


/**
 * optional google.ads.googleads.v1.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity product_channel_exclusivity = 31;
 * @return {!proto.google.ads.googleads.v1.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductChannelExclusivity = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ProductChannelExclusivityEnum.ProductChannelExclusivity} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductChannelExclusivity = function(value) {
  jspb.Message.setProto3EnumField(this, 31, value);
};


/**
 * optional google.ads.googleads.v1.enums.ProductConditionEnum.ProductCondition product_condition = 32;
 * @return {!proto.google.ads.googleads.v1.enums.ProductConditionEnum.ProductCondition}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCondition = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ProductConditionEnum.ProductCondition} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ProductConditionEnum.ProductCondition} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCondition = function(value) {
  jspb.Message.setProto3EnumField(this, 32, value);
};


/**
 * optional google.protobuf.StringValue product_country = 33;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCountry = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 33));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCountry = function(value) {
  jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCountry = function() {
  this.setProductCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCountry = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional google.protobuf.StringValue product_custom_attribute0 = 34;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCustomAttribute0 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 34));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCustomAttribute0 = function(value) {
  jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCustomAttribute0 = function() {
  this.setProductCustomAttribute0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCustomAttribute0 = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional google.protobuf.StringValue product_custom_attribute1 = 35;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCustomAttribute1 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 35));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCustomAttribute1 = function(value) {
  jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCustomAttribute1 = function() {
  this.setProductCustomAttribute1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCustomAttribute1 = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional google.protobuf.StringValue product_custom_attribute2 = 36;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCustomAttribute2 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 36));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCustomAttribute2 = function(value) {
  jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCustomAttribute2 = function() {
  this.setProductCustomAttribute2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCustomAttribute2 = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional google.protobuf.StringValue product_custom_attribute3 = 37;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCustomAttribute3 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 37));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCustomAttribute3 = function(value) {
  jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCustomAttribute3 = function() {
  this.setProductCustomAttribute3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCustomAttribute3 = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional google.protobuf.StringValue product_custom_attribute4 = 38;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductCustomAttribute4 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 38));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductCustomAttribute4 = function(value) {
  jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductCustomAttribute4 = function() {
  this.setProductCustomAttribute4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductCustomAttribute4 = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional google.protobuf.StringValue product_item_id = 39;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductItemId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 39));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductItemId = function(value) {
  jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductItemId = function() {
  this.setProductItemId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductItemId = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional google.protobuf.StringValue product_language = 40;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductLanguage = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 40));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductLanguage = function(value) {
  jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductLanguage = function() {
  this.setProductLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductLanguage = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional google.protobuf.UInt64Value product_merchant_id = 41;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductMerchantId = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 41));
};


/** @param {?proto.google.protobuf.UInt64Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductMerchantId = function(value) {
  jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductMerchantId = function() {
  this.setProductMerchantId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductMerchantId = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional google.protobuf.StringValue product_store_id = 42;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductStoreId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 42));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductStoreId = function(value) {
  jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductStoreId = function() {
  this.setProductStoreId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductStoreId = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional google.protobuf.StringValue product_title = 43;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTitle = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 43));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTitle = function(value) {
  jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTitle = function() {
  this.setProductTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTitle = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional google.protobuf.StringValue product_type_l1 = 44;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTypeL1 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 44));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTypeL1 = function(value) {
  jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTypeL1 = function() {
  this.setProductTypeL1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTypeL1 = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional google.protobuf.StringValue product_type_l2 = 45;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTypeL2 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 45));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTypeL2 = function(value) {
  jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTypeL2 = function() {
  this.setProductTypeL2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTypeL2 = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional google.protobuf.StringValue product_type_l3 = 46;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTypeL3 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 46));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTypeL3 = function(value) {
  jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTypeL3 = function() {
  this.setProductTypeL3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTypeL3 = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional google.protobuf.StringValue product_type_l4 = 47;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTypeL4 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 47));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTypeL4 = function(value) {
  jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTypeL4 = function() {
  this.setProductTypeL4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTypeL4 = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional google.protobuf.StringValue product_type_l5 = 48;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getProductTypeL5 = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 48));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setProductTypeL5 = function(value) {
  jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearProductTypeL5 = function() {
  this.setProductTypeL5(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasProductTypeL5 = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional google.protobuf.StringValue quarter = 21;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getQuarter = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 21));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setQuarter = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearQuarter = function() {
  this.setQuarter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasQuarter = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional google.ads.googleads.v1.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType search_engine_results_page_type = 70;
 * @return {!proto.google.ads.googleads.v1.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getSearchEngineResultsPageType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType} */ (jspb.Message.getFieldWithDefault(this, 70, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.SearchEngineResultsPageTypeEnum.SearchEngineResultsPageType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setSearchEngineResultsPageType = function(value) {
  jspb.Message.setProto3EnumField(this, 70, value);
};


/**
 * optional google.ads.googleads.v1.enums.SearchTermMatchTypeEnum.SearchTermMatchType search_term_match_type = 22;
 * @return {!proto.google.ads.googleads.v1.enums.SearchTermMatchTypeEnum.SearchTermMatchType}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getSearchTermMatchType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.SearchTermMatchTypeEnum.SearchTermMatchType} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.SearchTermMatchTypeEnum.SearchTermMatchType} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setSearchTermMatchType = function(value) {
  jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * optional google.ads.googleads.v1.enums.SlotEnum.Slot slot = 23;
 * @return {!proto.google.ads.googleads.v1.enums.SlotEnum.Slot}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getSlot = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.SlotEnum.Slot} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.SlotEnum.Slot} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setSlot = function(value) {
  jspb.Message.setProto3EnumField(this, 23, value);
};


/**
 * optional google.protobuf.StringValue webpage = 66;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getWebpage = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 66));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setWebpage = function(value) {
  jspb.Message.setWrapperField(this, 66, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearWebpage = function() {
  this.setWebpage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasWebpage = function() {
  return jspb.Message.getField(this, 66) != null;
};


/**
 * optional google.protobuf.StringValue week = 24;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getWeek = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 24));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setWeek = function(value) {
  jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearWeek = function() {
  this.setWeek(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasWeek = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional google.protobuf.Int32Value year = 25;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.getYear = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 25));
};


/** @param {?proto.google.protobuf.Int32Value|undefined} value */
proto.google.ads.googleads.v1.common.Segments.prototype.setYear = function(value) {
  jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Segments.prototype.clearYear = function() {
  this.setYear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Segments.prototype.hasYear = function() {
  return jspb.Message.getField(this, 25) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.Keyword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.Keyword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Keyword.toObject = function(includeInstance, msg) {
  var f, obj = {
    adGroupCriterion: (f = msg.getAdGroupCriterion()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && google_ads_googleads_v1_common_criteria_pb.KeywordInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.common.Keyword}
 */
proto.google.ads.googleads.v1.common.Keyword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.Keyword;
  return proto.google.ads.googleads.v1.common.Keyword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.Keyword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.Keyword}
 */
proto.google.ads.googleads.v1.common.Keyword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroupCriterion(value);
      break;
    case 2:
      var value = new google_ads_googleads_v1_common_criteria_pb.KeywordInfo;
      reader.readMessage(value,google_ads_googleads_v1_common_criteria_pb.KeywordInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.Keyword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.Keyword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Keyword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdGroupCriterion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_ads_googleads_v1_common_criteria_pb.KeywordInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue ad_group_criterion = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.getAdGroupCriterion = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.Keyword.prototype.setAdGroupCriterion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.clearAdGroupCriterion = function() {
  this.setAdGroupCriterion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.hasAdGroupCriterion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KeywordInfo info = 2;
 * @return {?proto.google.ads.googleads.v1.common.KeywordInfo}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.getInfo = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.KeywordInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_criteria_pb.KeywordInfo, 2));
};


/** @param {?proto.google.ads.googleads.v1.common.KeywordInfo|undefined} value */
proto.google.ads.googleads.v1.common.Keyword.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Keyword.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.common);
