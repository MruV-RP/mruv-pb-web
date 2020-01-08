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

var google_ads_googleads_v2_enums_app_url_operating_system_type_pb = require('../../../../../google/ads/googleads/v2/enums/app_url_operating_system_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_app_url_operating_system_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.common.FinalAppUrl', null, global);
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
proto.google.ads.googleads.v2.common.FinalAppUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.common.FinalAppUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.common.FinalAppUrl.displayName = 'proto.google.ads.googleads.v2.common.FinalAppUrl';
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
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.common.FinalAppUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.common.FinalAppUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    osType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    url: (f = msg.getUrl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.common.FinalAppUrl}
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.common.FinalAppUrl;
  return proto.google.ads.googleads.v2.common.FinalAppUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.common.FinalAppUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.common.FinalAppUrl}
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType} */ (reader.readEnum());
      msg.setOsType(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUrl(value);
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
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.common.FinalAppUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.common.FinalAppUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOsType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v2.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType os_type = 1;
 * @return {!proto.google.ads.googleads.v2.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType}
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.getOsType = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType} value */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.setOsType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue url = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.getUrl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.setUrl = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.clearUrl = function() {
  this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.common.FinalAppUrl.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.common);
