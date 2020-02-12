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

var google_ads_googleads_v2_enums_tracking_code_page_format_pb = require('../../../../../google/ads/googleads/v2/enums/tracking_code_page_format_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_tracking_code_page_format_pb);
var google_ads_googleads_v2_enums_tracking_code_type_pb = require('../../../../../google/ads/googleads/v2/enums/tracking_code_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_tracking_code_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.common.TagSnippet', null, global);
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
proto.google.ads.googleads.v2.common.TagSnippet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.common.TagSnippet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.common.TagSnippet.displayName = 'proto.google.ads.googleads.v2.common.TagSnippet';
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
proto.google.ads.googleads.v2.common.TagSnippet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.common.TagSnippet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.common.TagSnippet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.common.TagSnippet.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageFormat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    globalSiteTag: (f = msg.getGlobalSiteTag()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    eventSnippet: (f = msg.getEventSnippet()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.common.TagSnippet}
 */
proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.common.TagSnippet;
  return proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.common.TagSnippet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.common.TagSnippet}
 */
proto.google.ads.googleads.v2.common.TagSnippet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat} */ (reader.readEnum());
      msg.setPageFormat(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGlobalSiteTag(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEventSnippet(value);
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
proto.google.ads.googleads.v2.common.TagSnippet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.common.TagSnippet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.common.TagSnippet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.common.TagSnippet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPageFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGlobalSiteTag();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEventSnippet();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType type = 1;
 * @return {!proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.getType = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.TrackingCodeTypeEnum.TrackingCodeType} value */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat page_format = 2;
 * @return {!proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.getPageFormat = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.TrackingCodePageFormatEnum.TrackingCodePageFormat} value */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.setPageFormat = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue global_site_tag = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.getGlobalSiteTag = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.setGlobalSiteTag = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.clearGlobalSiteTag = function() {
  this.setGlobalSiteTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.hasGlobalSiteTag = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue event_snippet = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.getEventSnippet = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.setEventSnippet = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.clearEventSnippet = function() {
  this.setEventSnippet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.common.TagSnippet.prototype.hasEventSnippet = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.common);
