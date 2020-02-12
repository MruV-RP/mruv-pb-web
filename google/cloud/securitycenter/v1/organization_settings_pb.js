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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.OrganizationSettings', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig', null, global);
goog.exportSymbol('proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode', null, global);
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
proto.google.cloud.securitycenter.v1.OrganizationSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.OrganizationSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.OrganizationSettings.displayName = 'proto.google.cloud.securitycenter.v1.OrganizationSettings';
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
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.displayName = 'proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig';
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
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.OrganizationSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enableAssetDiscovery: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    assetDiscoveryConfig: (f = msg.getAssetDiscoveryConfig()) && proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.securitycenter.v1.OrganizationSettings}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.OrganizationSettings;
  return proto.google.cloud.securitycenter.v1.OrganizationSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.OrganizationSettings}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableAssetDiscovery(value);
      break;
    case 3:
      var value = new proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;
      reader.readMessage(value,proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.deserializeBinaryFromReader);
      msg.setAssetDiscoveryConfig(value);
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
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.OrganizationSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnableAssetDiscovery();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAssetDiscoveryConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.repeatedFields_ = [1];



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
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    inclusionMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;
  return proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addProjectIds(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode} */ (reader.readEnum());
      msg.setInclusionMode(value);
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
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getInclusionMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode = {
  INCLUSION_MODE_UNSPECIFIED: 0,
  INCLUDE_ONLY: 1,
  EXCLUDE: 2
};

/**
 * repeated string project_ids = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.getProjectIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.setProjectIdsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.addProjectIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.clearProjectIdsList = function() {
  this.setProjectIdsList([]);
};


/**
 * optional InclusionMode inclusion_mode = 2;
 * @return {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.getInclusionMode = function() {
  return /** @type {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode} value */
proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.prototype.setInclusionMode = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enable_asset_discovery = 2;
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.getEnableAssetDiscovery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.setEnableAssetDiscovery = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssetDiscoveryConfig asset_discovery_config = 3;
 * @return {?proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.getAssetDiscoveryConfig = function() {
  return /** @type{?proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig, 3));
};


/** @param {?proto.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig|undefined} value */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.setAssetDiscoveryConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.clearAssetDiscoveryConfig = function() {
  this.setAssetDiscoveryConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.securitycenter.v1.OrganizationSettings.prototype.hasAssetDiscoveryConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.google.cloud.securitycenter.v1);
