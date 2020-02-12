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

var google_ads_googleads_v1_enums_targeting_dimension_pb = require('../../../../../google/ads/googleads/v1/enums/targeting_dimension_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_targeting_dimension_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.common.TargetRestriction', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.common.TargetingSetting', null, global);
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
proto.google.ads.googleads.v1.common.TargetingSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.common.TargetingSetting.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.common.TargetingSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.common.TargetingSetting.displayName = 'proto.google.ads.googleads.v1.common.TargetingSetting';
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
proto.google.ads.googleads.v1.common.TargetRestriction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.common.TargetRestriction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.common.TargetRestriction.displayName = 'proto.google.ads.googleads.v1.common.TargetRestriction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.common.TargetingSetting.repeatedFields_ = [1];



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
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.TargetingSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.TargetingSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.TargetingSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetRestrictionsList: jspb.Message.toObjectList(msg.getTargetRestrictionsList(),
    proto.google.ads.googleads.v1.common.TargetRestriction.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v1.common.TargetingSetting}
 */
proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.TargetingSetting;
  return proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.TargetingSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.TargetingSetting}
 */
proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.ads.googleads.v1.common.TargetRestriction;
      reader.readMessage(value,proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader);
      msg.addTargetRestrictions(value);
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
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.TargetingSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.TargetingSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.TargetingSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetRestrictionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TargetRestriction target_restrictions = 1;
 * @return {!Array<!proto.google.ads.googleads.v1.common.TargetRestriction>}
 */
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.getTargetRestrictionsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.common.TargetRestriction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.common.TargetRestriction, 1));
};


/** @param {!Array<!proto.google.ads.googleads.v1.common.TargetRestriction>} value */
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.setTargetRestrictionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.common.TargetRestriction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.common.TargetRestriction}
 */
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.addTargetRestrictions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.ads.googleads.v1.common.TargetRestriction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v1.common.TargetingSetting.prototype.clearTargetRestrictionsList = function() {
  this.setTargetRestrictionsList([]);
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
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.TargetRestriction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.TargetRestriction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.TargetRestriction.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetingDimension: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bidOnly: (f = msg.getBidOnly()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.common.TargetRestriction}
 */
proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.TargetRestriction;
  return proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.TargetRestriction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.TargetRestriction}
 */
proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.TargetingDimensionEnum.TargetingDimension} */ (reader.readEnum());
      msg.setTargetingDimension(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setBidOnly(value);
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
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.TargetRestriction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetingDimension();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBidOnly();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v1.enums.TargetingDimensionEnum.TargetingDimension targeting_dimension = 1;
 * @return {!proto.google.ads.googleads.v1.enums.TargetingDimensionEnum.TargetingDimension}
 */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.getTargetingDimension = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.TargetingDimensionEnum.TargetingDimension} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.TargetingDimensionEnum.TargetingDimension} value */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.setTargetingDimension = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue bid_only = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.getBidOnly = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.setBidOnly = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.clearBidOnly = function() {
  this.setBidOnly(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.common.TargetRestriction.prototype.hasBidOnly = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.common);
