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
goog.exportSymbol('proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.BillingSetupError', null, global);
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
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.displayName = 'proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum';
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
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum}
 */
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum;
  return proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum}
 */
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.errors.BillingSetupErrorEnum.BillingSetupError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  CANNOT_USE_EXISTING_AND_NEW_ACCOUNT: 2,
  CANNOT_REMOVE_STARTED_BILLING_SETUP: 3,
  CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT: 4,
  BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS: 5,
  INVALID_PAYMENTS_ACCOUNT: 6,
  BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY: 7,
  INVALID_START_TIME_TYPE: 8,
  THIRD_PARTY_ALREADY_HAS_BILLING: 9,
  BILLING_SETUP_IN_PROGRESS: 10,
  NO_SIGNUP_PERMISSION: 11,
  CHANGE_OF_BILL_TO_IN_PROGRESS: 12,
  PAYMENTS_PROFILE_NOT_FOUND: 13,
  PAYMENTS_ACCOUNT_NOT_FOUND: 14,
  PAYMENTS_PROFILE_INELIGIBLE: 15,
  PAYMENTS_ACCOUNT_INELIGIBLE: 16
};

goog.object.extend(exports, proto.google.ads.googleads.v1.errors);