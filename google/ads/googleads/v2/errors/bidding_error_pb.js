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
goog.exportSymbol('proto.google.ads.googleads.v2.errors.BiddingErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.BiddingErrorEnum.BiddingError', null, global);
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
proto.google.ads.googleads.v2.errors.BiddingErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.errors.BiddingErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.errors.BiddingErrorEnum.displayName = 'proto.google.ads.googleads.v2.errors.BiddingErrorEnum';
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
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.errors.BiddingErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.errors.BiddingErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.errors.BiddingErrorEnum}
 */
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.errors.BiddingErrorEnum;
  return proto.google.ads.googleads.v2.errors.BiddingErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.errors.BiddingErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.errors.BiddingErrorEnum}
 */
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.errors.BiddingErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.errors.BiddingErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.errors.BiddingErrorEnum.BiddingError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED: 2,
  CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN: 7,
  INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE: 10,
  INVALID_BIDDING_STRATEGY_TYPE: 14,
  INVALID_BID: 17,
  BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE: 18,
  CONVERSION_TRACKING_NOT_ENABLED: 19,
  NOT_ENOUGH_CONVERSIONS: 20,
  CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY: 21,
  CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY: 23,
  BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE: 24,
  PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER: 25,
  PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA: 26,
  BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS: 27,
  BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS: 28,
  BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION: 29,
  BID_TOO_SMALL: 30,
  BID_TOO_BIG: 31,
  BID_TOO_MANY_FRACTIONAL_DIGITS: 32,
  INVALID_DOMAIN_NAME: 33,
  NOT_COMPATIBLE_WITH_PAYMENT_MODE: 34,
  NOT_COMPATIBLE_WITH_BUDGET_TYPE: 35,
  NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE: 36
};

goog.object.extend(exports, proto.google.ads.googleads.v2.errors);
