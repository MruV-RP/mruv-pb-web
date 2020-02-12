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

var google_api_label_pb = require('../../../google/api/label_pb.js');
goog.object.extend(proto, google_api_label_pb);
var google_api_launch_stage_pb = require('../../../google/api/launch_stage_pb.js');
goog.object.extend(proto, google_api_launch_stage_pb);
var google_monitoring_v3_common_pb = require('../../../google/monitoring/v3/common_pb.js');
goog.object.extend(proto, google_monitoring_v3_common_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.monitoring.v3.NotificationChannel', null, global);
goog.exportSymbol('proto.google.monitoring.v3.NotificationChannel.VerificationStatus', null, global);
goog.exportSymbol('proto.google.monitoring.v3.NotificationChannelDescriptor', null, global);
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
proto.google.monitoring.v3.NotificationChannelDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.monitoring.v3.NotificationChannelDescriptor.repeatedFields_, null);
};
goog.inherits(proto.google.monitoring.v3.NotificationChannelDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.monitoring.v3.NotificationChannelDescriptor.displayName = 'proto.google.monitoring.v3.NotificationChannelDescriptor';
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
proto.google.monitoring.v3.NotificationChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.monitoring.v3.NotificationChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.monitoring.v3.NotificationChannel.displayName = 'proto.google.monitoring.v3.NotificationChannel';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.repeatedFields_ = [4,5];



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
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.google.monitoring.v3.NotificationChannelDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.monitoring.v3.NotificationChannelDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    google_api_label_pb.LabelDescriptor.toObject, includeInstance),
    supportedTiersList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.google.monitoring.v3.NotificationChannelDescriptor}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.monitoring.v3.NotificationChannelDescriptor;
  return proto.google.monitoring.v3.NotificationChannelDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.monitoring.v3.NotificationChannelDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.monitoring.v3.NotificationChannelDescriptor}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new google_api_label_pb.LabelDescriptor;
      reader.readMessage(value,google_api_label_pb.LabelDescriptor.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 5:
      var value = /** @type {!Array<!proto.google.monitoring.v3.ServiceTier>} */ (reader.readPackedEnum());
      msg.setSupportedTiersList(value);
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
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.monitoring.v3.NotificationChannelDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.monitoring.v3.NotificationChannelDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_api_label_pb.LabelDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getSupportedTiersList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated google.api.LabelDescriptor labels = 4;
 * @return {!Array<!proto.google.api.LabelDescriptor>}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.google.api.LabelDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_label_pb.LabelDescriptor, 4));
};


/** @param {!Array<!proto.google.api.LabelDescriptor>} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setLabelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.api.LabelDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.LabelDescriptor}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.api.LabelDescriptor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.clearLabelsList = function() {
  this.setLabelsList([]);
};


/**
 * repeated ServiceTier supported_tiers = 5;
 * @return {!Array<!proto.google.monitoring.v3.ServiceTier>}
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.getSupportedTiersList = function() {
  return /** @type {!Array<!proto.google.monitoring.v3.ServiceTier>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<!proto.google.monitoring.v3.ServiceTier>} value */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.setSupportedTiersList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.google.monitoring.v3.ServiceTier} value
 * @param {number=} opt_index
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.addSupportedTiers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.monitoring.v3.NotificationChannelDescriptor.prototype.clearSupportedTiersList = function() {
  this.setSupportedTiersList([]);
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
proto.google.monitoring.v3.NotificationChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.google.monitoring.v3.NotificationChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.monitoring.v3.NotificationChannel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.monitoring.v3.NotificationChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    userLabelsMap: (f = msg.getUserLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    verificationStatus: jspb.Message.getFieldWithDefault(msg, 9, 0),
    enabled: (f = msg.getEnabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.google.monitoring.v3.NotificationChannel}
 */
proto.google.monitoring.v3.NotificationChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.monitoring.v3.NotificationChannel;
  return proto.google.monitoring.v3.NotificationChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.monitoring.v3.NotificationChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.monitoring.v3.NotificationChannel}
 */
proto.google.monitoring.v3.NotificationChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 8:
      var value = msg.getUserLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 9:
      var value = /** @type {!proto.google.monitoring.v3.NotificationChannel.VerificationStatus} */ (reader.readEnum());
      msg.setVerificationStatus(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnabled(value);
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
proto.google.monitoring.v3.NotificationChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.monitoring.v3.NotificationChannel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.monitoring.v3.NotificationChannel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.monitoring.v3.NotificationChannel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getUserLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getVerificationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.monitoring.v3.NotificationChannel.VerificationStatus = {
  VERIFICATION_STATUS_UNSPECIFIED: 0,
  UNVERIFIED: 1,
  VERIFIED: 2
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.monitoring.v3.NotificationChannel.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * map<string, string> user_labels = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getUserLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.monitoring.v3.NotificationChannel.prototype.clearUserLabelsMap = function() {
  this.getUserLabelsMap().clear();
};


/**
 * optional VerificationStatus verification_status = 9;
 * @return {!proto.google.monitoring.v3.NotificationChannel.VerificationStatus}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getVerificationStatus = function() {
  return /** @type {!proto.google.monitoring.v3.NotificationChannel.VerificationStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.google.monitoring.v3.NotificationChannel.VerificationStatus} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setVerificationStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.BoolValue enabled = 11;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.getEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 11));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.monitoring.v3.NotificationChannel.prototype.setEnabled = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.monitoring.v3.NotificationChannel.prototype.clearEnabled = function() {
  this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.monitoring.v3.NotificationChannel.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 11) != null;
};


goog.object.extend(exports, proto.google.monitoring.v3);
