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

var google_cloud_websecurityscanner_v1beta_scan_config_error_pb = require('../../../../google/cloud/websecurityscanner/v1beta/scan_config_error_pb.js');
goog.object.extend(proto, google_cloud_websecurityscanner_v1beta_scan_config_error_pb);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace', null, global);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code', null, global);
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
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.displayName = 'proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace';
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
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scanConfigError: (f = msg.getScanConfigError()) && google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError.toObject(includeInstance, f),
    mostCommonHttpErrorCode: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace;
  return proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = new google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError;
      reader.readMessage(value,google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError.deserializeBinaryFromReader);
      msg.setScanConfigError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMostCommonHttpErrorCode(value);
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
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getScanConfigError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError.serializeBinaryToWriter
    );
  }
  f = message.getMostCommonHttpErrorCode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code = {
  CODE_UNSPECIFIED: 0,
  INTERNAL_ERROR: 1,
  SCAN_CONFIG_ISSUE: 2,
  AUTHENTICATION_CONFIG_ISSUE: 3,
  TIMED_OUT_WHILE_SCANNING: 4,
  TOO_MANY_REDIRECTS: 5,
  TOO_MANY_HTTP_ERRORS: 6
};

/**
 * optional Code code = 1;
 * @return {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.getCode = function() {
  return /** @type {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code} value */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.setCode = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ScanConfigError scan_config_error = 2;
 * @return {?proto.google.cloud.websecurityscanner.v1beta.ScanConfigError}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.getScanConfigError = function() {
  return /** @type{?proto.google.cloud.websecurityscanner.v1beta.ScanConfigError} */ (
    jspb.Message.getWrapperField(this, google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError, 2));
};


/** @param {?proto.google.cloud.websecurityscanner.v1beta.ScanConfigError|undefined} value */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.setScanConfigError = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.clearScanConfigError = function() {
  this.setScanConfigError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.hasScanConfigError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 most_common_http_error_code = 3;
 * @return {number}
 */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.getMostCommonHttpErrorCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.prototype.setMostCommonHttpErrorCode = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.google.cloud.websecurityscanner.v1beta);
