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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError', null, global);
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
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.displayName = 'proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum';
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
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum}
 */
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum;
  return proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum}
 */
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.errors.AdGroupCriterionErrorEnum.AdGroupCriterionError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  AD_GROUP_CRITERION_LABEL_DOES_NOT_EXIST: 2,
  AD_GROUP_CRITERION_LABEL_ALREADY_EXISTS: 3,
  CANNOT_ADD_LABEL_TO_NEGATIVE_CRITERION: 4,
  TOO_MANY_OPERATIONS: 5,
  CANT_UPDATE_NEGATIVE: 6,
  CONCRETE_TYPE_REQUIRED: 7,
  BID_INCOMPATIBLE_WITH_ADGROUP: 8,
  CANNOT_TARGET_AND_EXCLUDE: 9,
  ILLEGAL_URL: 10,
  INVALID_KEYWORD_TEXT: 11,
  INVALID_DESTINATION_URL: 12,
  MISSING_DESTINATION_URL_TAG: 13,
  KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM: 14,
  INVALID_USER_STATUS: 15,
  CANNOT_ADD_CRITERIA_TYPE: 16,
  CANNOT_EXCLUDE_CRITERIA_TYPE: 17,
  CAMPAIGN_TYPE_NOT_COMPATIBLE_WITH_PARTIAL_FAILURE: 27,
  OPERATIONS_FOR_TOO_MANY_SHOPPING_ADGROUPS: 28,
  CANNOT_MODIFY_URL_FIELDS_WITH_DUPLICATE_ELEMENTS: 29,
  CANNOT_SET_WITHOUT_FINAL_URLS: 30,
  CANNOT_CLEAR_FINAL_URLS_IF_FINAL_MOBILE_URLS_EXIST: 31,
  CANNOT_CLEAR_FINAL_URLS_IF_FINAL_APP_URLS_EXIST: 32,
  CANNOT_CLEAR_FINAL_URLS_IF_TRACKING_URL_TEMPLATE_EXISTS: 33,
  CANNOT_CLEAR_FINAL_URLS_IF_URL_CUSTOM_PARAMETERS_EXIST: 34,
  CANNOT_SET_BOTH_DESTINATION_URL_AND_FINAL_URLS: 35,
  CANNOT_SET_BOTH_DESTINATION_URL_AND_TRACKING_URL_TEMPLATE: 36,
  FINAL_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE: 37,
  FINAL_MOBILE_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE: 38,
  INVALID_LISTING_GROUP_HIERARCHY: 39,
  LISTING_GROUP_UNIT_CANNOT_HAVE_CHILDREN: 40,
  LISTING_GROUP_SUBDIVISION_REQUIRES_OTHERS_CASE: 41,
  LISTING_GROUP_REQUIRES_SAME_DIMENSION_TYPE_AS_SIBLINGS: 42,
  LISTING_GROUP_ALREADY_EXISTS: 43,
  LISTING_GROUP_DOES_NOT_EXIST: 44,
  LISTING_GROUP_CANNOT_BE_REMOVED: 45,
  INVALID_LISTING_GROUP_TYPE: 46,
  LISTING_GROUP_ADD_MAY_ONLY_USE_TEMP_ID: 47
};

goog.object.extend(exports, proto.google.ads.googleads.v2.errors);