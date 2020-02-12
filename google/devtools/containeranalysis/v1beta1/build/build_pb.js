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

var google_devtools_containeranalysis_v1beta1_provenance_provenance_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_provenance_provenance_pb);
goog.exportSymbol('proto.grafeas.v1beta1.build.Build', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.build.BuildSignature', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.build.BuildSignature.KeyType', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.build.Details', null, global);
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
proto.grafeas.v1beta1.build.Build = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.build.Build, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.build.Build.displayName = 'proto.grafeas.v1beta1.build.Build';
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
proto.grafeas.v1beta1.build.BuildSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.build.BuildSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.build.BuildSignature.displayName = 'proto.grafeas.v1beta1.build.BuildSignature';
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
proto.grafeas.v1beta1.build.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.build.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.build.Details.displayName = 'proto.grafeas.v1beta1.build.Details';
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
proto.grafeas.v1beta1.build.Build.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.build.Build.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.build.Build} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.Build.toObject = function(includeInstance, msg) {
  var f, obj = {
    builderVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: (f = msg.getSignature()) && proto.grafeas.v1beta1.build.BuildSignature.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.build.Build}
 */
proto.grafeas.v1beta1.build.Build.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.build.Build;
  return proto.grafeas.v1beta1.build.Build.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.build.Build} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.build.Build}
 */
proto.grafeas.v1beta1.build.Build.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuilderVersion(value);
      break;
    case 2:
      var value = new proto.grafeas.v1beta1.build.BuildSignature;
      reader.readMessage(value,proto.grafeas.v1beta1.build.BuildSignature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.grafeas.v1beta1.build.Build.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.build.Build.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.build.Build} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.Build.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuilderVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grafeas.v1beta1.build.BuildSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional string builder_version = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.build.Build.prototype.getBuilderVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grafeas.v1beta1.build.Build.prototype.setBuilderVersion = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BuildSignature signature = 2;
 * @return {?proto.grafeas.v1beta1.build.BuildSignature}
 */
proto.grafeas.v1beta1.build.Build.prototype.getSignature = function() {
  return /** @type{?proto.grafeas.v1beta1.build.BuildSignature} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.build.BuildSignature, 2));
};


/** @param {?proto.grafeas.v1beta1.build.BuildSignature|undefined} value */
proto.grafeas.v1beta1.build.Build.prototype.setSignature = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.grafeas.v1beta1.build.Build.prototype.clearSignature = function() {
  this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.build.Build.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.grafeas.v1beta1.build.BuildSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.build.BuildSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.build.BuildSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.BuildSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: msg.getSignature_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    keyType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.grafeas.v1beta1.build.BuildSignature}
 */
proto.grafeas.v1beta1.build.BuildSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.build.BuildSignature;
  return proto.grafeas.v1beta1.build.BuildSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.build.BuildSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.build.BuildSignature}
 */
proto.grafeas.v1beta1.build.BuildSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 4:
      var value = /** @type {!proto.grafeas.v1beta1.build.BuildSignature.KeyType} */ (reader.readEnum());
      msg.setKeyType(value);
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
proto.grafeas.v1beta1.build.BuildSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.build.BuildSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.build.BuildSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.BuildSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.grafeas.v1beta1.build.BuildSignature.KeyType = {
  KEY_TYPE_UNSPECIFIED: 0,
  PGP_ASCII_ARMORED: 1,
  PKIX_PEM: 2
};

/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grafeas.v1beta1.build.BuildSignature.prototype.setPublicKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.grafeas.v1beta1.build.BuildSignature.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string key_id = 3;
 * @return {string}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.grafeas.v1beta1.build.BuildSignature.prototype.setKeyId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional KeyType key_type = 4;
 * @return {!proto.grafeas.v1beta1.build.BuildSignature.KeyType}
 */
proto.grafeas.v1beta1.build.BuildSignature.prototype.getKeyType = function() {
  return /** @type {!proto.grafeas.v1beta1.build.BuildSignature.KeyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.grafeas.v1beta1.build.BuildSignature.KeyType} value */
proto.grafeas.v1beta1.build.BuildSignature.prototype.setKeyType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.grafeas.v1beta1.build.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.build.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.build.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    provenance: (f = msg.getProvenance()) && google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance.toObject(includeInstance, f),
    provenanceBytes: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.grafeas.v1beta1.build.Details}
 */
proto.grafeas.v1beta1.build.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.build.Details;
  return proto.grafeas.v1beta1.build.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.build.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.build.Details}
 */
proto.grafeas.v1beta1.build.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance.deserializeBinaryFromReader);
      msg.setProvenance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvenanceBytes(value);
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
proto.grafeas.v1beta1.build.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.build.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.build.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.build.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvenance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceBytes();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional grafeas.v1beta1.provenance.BuildProvenance provenance = 1;
 * @return {?proto.grafeas.v1beta1.provenance.BuildProvenance}
 */
proto.grafeas.v1beta1.build.Details.prototype.getProvenance = function() {
  return /** @type{?proto.grafeas.v1beta1.provenance.BuildProvenance} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.BuildProvenance, 1));
};


/** @param {?proto.grafeas.v1beta1.provenance.BuildProvenance|undefined} value */
proto.grafeas.v1beta1.build.Details.prototype.setProvenance = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.grafeas.v1beta1.build.Details.prototype.clearProvenance = function() {
  this.setProvenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.build.Details.prototype.hasProvenance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string provenance_bytes = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.build.Details.prototype.getProvenanceBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.grafeas.v1beta1.build.Details.prototype.setProvenanceBytes = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.grafeas.v1beta1.build);
