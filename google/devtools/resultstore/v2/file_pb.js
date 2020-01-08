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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.devtools.resultstore.v2.ArchiveEntry', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.File', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.File.HashType', null, global);
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
proto.google.devtools.resultstore.v2.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.File.displayName = 'proto.google.devtools.resultstore.v2.File';
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
proto.google.devtools.resultstore.v2.ArchiveEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.ArchiveEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.ArchiveEntry.displayName = 'proto.google.devtools.resultstore.v2.ArchiveEntry';
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
proto.google.devtools.resultstore.v2.File.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    length: (f = msg.getLength()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    contentType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    archiveEntry: (f = msg.getArchiveEntry()) && proto.google.devtools.resultstore.v2.ArchiveEntry.toObject(includeInstance, f),
    contentViewer: jspb.Message.getFieldWithDefault(msg, 6, ""),
    hidden: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    digest: jspb.Message.getFieldWithDefault(msg, 9, ""),
    hashType: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.google.devtools.resultstore.v2.File}
 */
proto.google.devtools.resultstore.v2.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.File;
  return proto.google.devtools.resultstore.v2.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.File}
 */
proto.google.devtools.resultstore.v2.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setLength(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 5:
      var value = new proto.google.devtools.resultstore.v2.ArchiveEntry;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.ArchiveEntry.deserializeBinaryFromReader);
      msg.setArchiveEntry(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentViewer(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHidden(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDigest(value);
      break;
    case 10:
      var value = /** @type {!proto.google.devtools.resultstore.v2.File.HashType} */ (reader.readEnum());
      msg.setHashType(value);
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
proto.google.devtools.resultstore.v2.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLength();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArchiveEntry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.devtools.resultstore.v2.ArchiveEntry.serializeBinaryToWriter
    );
  }
  f = message.getContentViewer();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHidden();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getHashType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.File.HashType = {
  HASH_TYPE_UNSPECIFIED: 0,
  MD5: 1,
  SHA1: 2,
  SHA256: 3
};

/**
 * optional string uid = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setUid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value length = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.devtools.resultstore.v2.File.prototype.getLength = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.devtools.resultstore.v2.File.prototype.setLength = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.File.prototype.clearLength = function() {
  this.setLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.File.prototype.hasLength = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string content_type = 4;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setContentType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ArchiveEntry archive_entry = 5;
 * @return {?proto.google.devtools.resultstore.v2.ArchiveEntry}
 */
proto.google.devtools.resultstore.v2.File.prototype.getArchiveEntry = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ArchiveEntry} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.ArchiveEntry, 5));
};


/** @param {?proto.google.devtools.resultstore.v2.ArchiveEntry|undefined} value */
proto.google.devtools.resultstore.v2.File.prototype.setArchiveEntry = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.File.prototype.clearArchiveEntry = function() {
  this.setArchiveEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.File.prototype.hasArchiveEntry = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string content_viewer = 6;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getContentViewer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setContentViewer = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool hidden = 7;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.File.prototype.getHidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.google.devtools.resultstore.v2.File.prototype.setHidden = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string digest = 9;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.File.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.File.prototype.setDigest = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional HashType hash_type = 10;
 * @return {!proto.google.devtools.resultstore.v2.File.HashType}
 */
proto.google.devtools.resultstore.v2.File.prototype.getHashType = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.File.HashType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.google.devtools.resultstore.v2.File.HashType} value */
proto.google.devtools.resultstore.v2.File.prototype.setHashType = function(value) {
  jspb.Message.setProto3EnumField(this, 10, value);
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
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.ArchiveEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.ArchiveEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    length: (f = msg.getLength()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.devtools.resultstore.v2.ArchiveEntry}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.ArchiveEntry;
  return proto.google.devtools.resultstore.v2.ArchiveEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.ArchiveEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.ArchiveEntry}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setLength(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
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
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.ArchiveEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.ArchiveEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value length = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.getLength = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.setLength = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.clearLength = function() {
  this.setLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.hasLength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content_type = 3;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.ArchiveEntry.prototype.setContentType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.google.devtools.resultstore.v2);
