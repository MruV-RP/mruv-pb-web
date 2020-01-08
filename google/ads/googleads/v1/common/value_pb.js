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
goog.exportSymbol('proto.google.ads.googleads.v1.common.Value', null, global);
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
proto.google.ads.googleads.v1.common.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v1.common.Value.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.common.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.common.Value.displayName = 'proto.google.ads.googleads.v1.common.Value';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v1.common.Value.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.common.Value.ValueCase = {
  VALUE_NOT_SET: 0,
  BOOLEAN_VALUE: 1,
  INT64_VALUE: 2,
  FLOAT_VALUE: 3,
  DOUBLE_VALUE: 4,
  STRING_VALUE: 5
};

/**
 * @return {proto.google.ads.googleads.v1.common.Value.ValueCase}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getValueCase = function() {
  return /** @type {proto.google.ads.googleads.v1.common.Value.ValueCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0]));
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
proto.google.ads.googleads.v1.common.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    booleanValue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    int64Value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    floatValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    doubleValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.ads.googleads.v1.common.Value}
 */
proto.google.ads.googleads.v1.common.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.Value;
  return proto.google.ads.googleads.v1.common.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.Value}
 */
proto.google.ads.googleads.v1.common.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooleanValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64Value(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
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
proto.google.ads.googleads.v1.common.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool boolean_value = 1;
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getBooleanValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v1.common.Value.prototype.setBooleanValue = function(value) {
  jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.common.Value.prototype.clearBooleanValue = function() {
  jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.hasBooleanValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 int64_value = 2;
 * @return {number}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getInt64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.ads.googleads.v1.common.Value.prototype.setInt64Value = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.common.Value.prototype.clearInt64Value = function() {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.hasInt64Value = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float float_value = 3;
 * @return {number}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getFloatValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.google.ads.googleads.v1.common.Value.prototype.setFloatValue = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.common.Value.prototype.clearFloatValue = function() {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double double_value = 4;
 * @return {number}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.ads.googleads.v1.common.Value.prototype.setDoubleValue = function(value) {
  jspb.Message.setOneofField(this, 4, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.common.Value.prototype.clearDoubleValue = function() {
  jspb.Message.setOneofField(this, 4, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string string_value = 5;
 * @return {string}
 */
proto.google.ads.googleads.v1.common.Value.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.common.Value.prototype.setStringValue = function(value) {
  jspb.Message.setOneofField(this, 5, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.common.Value.prototype.clearStringValue = function() {
  jspb.Message.setOneofField(this, 5, proto.google.ads.googleads.v1.common.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.Value.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.common);
