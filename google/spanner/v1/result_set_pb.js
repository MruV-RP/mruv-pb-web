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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_spanner_v1_query_plan_pb = require('../../../google/spanner/v1/query_plan_pb.js');
goog.object.extend(proto, google_spanner_v1_query_plan_pb);
var google_spanner_v1_transaction_pb = require('../../../google/spanner/v1/transaction_pb.js');
goog.object.extend(proto, google_spanner_v1_transaction_pb);
var google_spanner_v1_type_pb = require('../../../google/spanner/v1/type_pb.js');
goog.object.extend(proto, google_spanner_v1_type_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.spanner.v1.PartialResultSet', null, global);
goog.exportSymbol('proto.google.spanner.v1.ResultSet', null, global);
goog.exportSymbol('proto.google.spanner.v1.ResultSetMetadata', null, global);
goog.exportSymbol('proto.google.spanner.v1.ResultSetStats', null, global);
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
proto.google.spanner.v1.ResultSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.spanner.v1.ResultSet.repeatedFields_, null);
};
goog.inherits(proto.google.spanner.v1.ResultSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.spanner.v1.ResultSet.displayName = 'proto.google.spanner.v1.ResultSet';
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
proto.google.spanner.v1.PartialResultSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.spanner.v1.PartialResultSet.repeatedFields_, null);
};
goog.inherits(proto.google.spanner.v1.PartialResultSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.spanner.v1.PartialResultSet.displayName = 'proto.google.spanner.v1.PartialResultSet';
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
proto.google.spanner.v1.ResultSetMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.spanner.v1.ResultSetMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.spanner.v1.ResultSetMetadata.displayName = 'proto.google.spanner.v1.ResultSetMetadata';
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
proto.google.spanner.v1.ResultSetStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.spanner.v1.ResultSetStats.oneofGroups_);
};
goog.inherits(proto.google.spanner.v1.ResultSetStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.spanner.v1.ResultSetStats.displayName = 'proto.google.spanner.v1.ResultSetStats';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.spanner.v1.ResultSet.repeatedFields_ = [2];



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
proto.google.spanner.v1.ResultSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.spanner.v1.ResultSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.spanner.v1.ResultSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.google.spanner.v1.ResultSetMetadata.toObject(includeInstance, f),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    google_protobuf_struct_pb.ListValue.toObject, includeInstance),
    stats: (f = msg.getStats()) && proto.google.spanner.v1.ResultSetStats.toObject(includeInstance, f)
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
 * @return {!proto.google.spanner.v1.ResultSet}
 */
proto.google.spanner.v1.ResultSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.spanner.v1.ResultSet;
  return proto.google.spanner.v1.ResultSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.spanner.v1.ResultSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.spanner.v1.ResultSet}
 */
proto.google.spanner.v1.ResultSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.spanner.v1.ResultSetMetadata;
      reader.readMessage(value,proto.google.spanner.v1.ResultSetMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.ListValue;
      reader.readMessage(value,google_protobuf_struct_pb.ListValue.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    case 3:
      var value = new proto.google.spanner.v1.ResultSetStats;
      reader.readMessage(value,proto.google.spanner.v1.ResultSetStats.deserializeBinaryFromReader);
      msg.setStats(value);
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
proto.google.spanner.v1.ResultSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.spanner.v1.ResultSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.spanner.v1.ResultSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.spanner.v1.ResultSetMetadata.serializeBinaryToWriter
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_struct_pb.ListValue.serializeBinaryToWriter
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.spanner.v1.ResultSetStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResultSetMetadata metadata = 1;
 * @return {?proto.google.spanner.v1.ResultSetMetadata}
 */
proto.google.spanner.v1.ResultSet.prototype.getMetadata = function() {
  return /** @type{?proto.google.spanner.v1.ResultSetMetadata} */ (
    jspb.Message.getWrapperField(this, proto.google.spanner.v1.ResultSetMetadata, 1));
};


/** @param {?proto.google.spanner.v1.ResultSetMetadata|undefined} value */
proto.google.spanner.v1.ResultSet.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSet.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSet.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated google.protobuf.ListValue rows = 2;
 * @return {!Array<!proto.google.protobuf.ListValue>}
 */
proto.google.spanner.v1.ResultSet.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.google.protobuf.ListValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.ListValue, 2));
};


/** @param {!Array<!proto.google.protobuf.ListValue>} value */
proto.google.spanner.v1.ResultSet.prototype.setRowsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.ListValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.ListValue}
 */
proto.google.spanner.v1.ResultSet.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.ListValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.spanner.v1.ResultSet.prototype.clearRowsList = function() {
  this.setRowsList([]);
};


/**
 * optional ResultSetStats stats = 3;
 * @return {?proto.google.spanner.v1.ResultSetStats}
 */
proto.google.spanner.v1.ResultSet.prototype.getStats = function() {
  return /** @type{?proto.google.spanner.v1.ResultSetStats} */ (
    jspb.Message.getWrapperField(this, proto.google.spanner.v1.ResultSetStats, 3));
};


/** @param {?proto.google.spanner.v1.ResultSetStats|undefined} value */
proto.google.spanner.v1.ResultSet.prototype.setStats = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSet.prototype.clearStats = function() {
  this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSet.prototype.hasStats = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.spanner.v1.PartialResultSet.repeatedFields_ = [2];



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
proto.google.spanner.v1.PartialResultSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.spanner.v1.PartialResultSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.spanner.v1.PartialResultSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.PartialResultSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.google.spanner.v1.ResultSetMetadata.toObject(includeInstance, f),
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    google_protobuf_struct_pb.Value.toObject, includeInstance),
    chunkedValue: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    resumeToken: msg.getResumeToken_asB64(),
    stats: (f = msg.getStats()) && proto.google.spanner.v1.ResultSetStats.toObject(includeInstance, f)
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
 * @return {!proto.google.spanner.v1.PartialResultSet}
 */
proto.google.spanner.v1.PartialResultSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.spanner.v1.PartialResultSet;
  return proto.google.spanner.v1.PartialResultSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.spanner.v1.PartialResultSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.spanner.v1.PartialResultSet}
 */
proto.google.spanner.v1.PartialResultSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.spanner.v1.ResultSetMetadata;
      reader.readMessage(value,proto.google.spanner.v1.ResultSetMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChunkedValue(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResumeToken(value);
      break;
    case 5:
      var value = new proto.google.spanner.v1.ResultSetStats;
      reader.readMessage(value,proto.google.spanner.v1.ResultSetStats.deserializeBinaryFromReader);
      msg.setStats(value);
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
proto.google.spanner.v1.PartialResultSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.spanner.v1.PartialResultSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.spanner.v1.PartialResultSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.PartialResultSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.spanner.v1.ResultSetMetadata.serializeBinaryToWriter
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getChunkedValue();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getResumeToken_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.spanner.v1.ResultSetStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResultSetMetadata metadata = 1;
 * @return {?proto.google.spanner.v1.ResultSetMetadata}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getMetadata = function() {
  return /** @type{?proto.google.spanner.v1.ResultSetMetadata} */ (
    jspb.Message.getWrapperField(this, proto.google.spanner.v1.ResultSetMetadata, 1));
};


/** @param {?proto.google.spanner.v1.ResultSetMetadata|undefined} value */
proto.google.spanner.v1.PartialResultSet.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.PartialResultSet.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.PartialResultSet.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated google.protobuf.Value values = 2;
 * @return {!Array<!proto.google.protobuf.Value>}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Value, 2));
};


/** @param {!Array<!proto.google.protobuf.Value>} value */
proto.google.spanner.v1.PartialResultSet.prototype.setValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Value}
 */
proto.google.spanner.v1.PartialResultSet.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.spanner.v1.PartialResultSet.prototype.clearValuesList = function() {
  this.setValuesList([]);
};


/**
 * optional bool chunked_value = 3;
 * @return {boolean}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getChunkedValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.spanner.v1.PartialResultSet.prototype.setChunkedValue = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bytes resume_token = 4;
 * @return {string}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getResumeToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes resume_token = 4;
 * This is a type-conversion wrapper around `getResumeToken()`
 * @return {string}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getResumeToken_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResumeToken()));
};


/**
 * optional bytes resume_token = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResumeToken()`
 * @return {!Uint8Array}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getResumeToken_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResumeToken()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.spanner.v1.PartialResultSet.prototype.setResumeToken = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional ResultSetStats stats = 5;
 * @return {?proto.google.spanner.v1.ResultSetStats}
 */
proto.google.spanner.v1.PartialResultSet.prototype.getStats = function() {
  return /** @type{?proto.google.spanner.v1.ResultSetStats} */ (
    jspb.Message.getWrapperField(this, proto.google.spanner.v1.ResultSetStats, 5));
};


/** @param {?proto.google.spanner.v1.ResultSetStats|undefined} value */
proto.google.spanner.v1.PartialResultSet.prototype.setStats = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.PartialResultSet.prototype.clearStats = function() {
  this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.PartialResultSet.prototype.hasStats = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.google.spanner.v1.ResultSetMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.spanner.v1.ResultSetMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.spanner.v1.ResultSetMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSetMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowType: (f = msg.getRowType()) && google_spanner_v1_type_pb.StructType.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && google_spanner_v1_transaction_pb.Transaction.toObject(includeInstance, f)
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
 * @return {!proto.google.spanner.v1.ResultSetMetadata}
 */
proto.google.spanner.v1.ResultSetMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.spanner.v1.ResultSetMetadata;
  return proto.google.spanner.v1.ResultSetMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.spanner.v1.ResultSetMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.spanner.v1.ResultSetMetadata}
 */
proto.google.spanner.v1.ResultSetMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_spanner_v1_type_pb.StructType;
      reader.readMessage(value,google_spanner_v1_type_pb.StructType.deserializeBinaryFromReader);
      msg.setRowType(value);
      break;
    case 2:
      var value = new google_spanner_v1_transaction_pb.Transaction;
      reader.readMessage(value,google_spanner_v1_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
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
proto.google.spanner.v1.ResultSetMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.spanner.v1.ResultSetMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.spanner.v1.ResultSetMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSetMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowType();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_spanner_v1_type_pb.StructType.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_spanner_v1_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructType row_type = 1;
 * @return {?proto.google.spanner.v1.StructType}
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.getRowType = function() {
  return /** @type{?proto.google.spanner.v1.StructType} */ (
    jspb.Message.getWrapperField(this, google_spanner_v1_type_pb.StructType, 1));
};


/** @param {?proto.google.spanner.v1.StructType|undefined} value */
proto.google.spanner.v1.ResultSetMetadata.prototype.setRowType = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.clearRowType = function() {
  this.setRowType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.hasRowType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Transaction transaction = 2;
 * @return {?proto.google.spanner.v1.Transaction}
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.getTransaction = function() {
  return /** @type{?proto.google.spanner.v1.Transaction} */ (
    jspb.Message.getWrapperField(this, google_spanner_v1_transaction_pb.Transaction, 2));
};


/** @param {?proto.google.spanner.v1.Transaction|undefined} value */
proto.google.spanner.v1.ResultSetMetadata.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetMetadata.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.spanner.v1.ResultSetStats.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.google.spanner.v1.ResultSetStats.RowCountCase = {
  ROW_COUNT_NOT_SET: 0,
  ROW_COUNT_EXACT: 3,
  ROW_COUNT_LOWER_BOUND: 4
};

/**
 * @return {proto.google.spanner.v1.ResultSetStats.RowCountCase}
 */
proto.google.spanner.v1.ResultSetStats.prototype.getRowCountCase = function() {
  return /** @type {proto.google.spanner.v1.ResultSetStats.RowCountCase} */(jspb.Message.computeOneofCase(this, proto.google.spanner.v1.ResultSetStats.oneofGroups_[0]));
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
proto.google.spanner.v1.ResultSetStats.prototype.toObject = function(opt_includeInstance) {
  return proto.google.spanner.v1.ResultSetStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.spanner.v1.ResultSetStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSetStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    queryPlan: (f = msg.getQueryPlan()) && google_spanner_v1_query_plan_pb.QueryPlan.toObject(includeInstance, f),
    queryStats: (f = msg.getQueryStats()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    rowCountExact: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rowCountLowerBound: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.spanner.v1.ResultSetStats}
 */
proto.google.spanner.v1.ResultSetStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.spanner.v1.ResultSetStats;
  return proto.google.spanner.v1.ResultSetStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.spanner.v1.ResultSetStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.spanner.v1.ResultSetStats}
 */
proto.google.spanner.v1.ResultSetStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_spanner_v1_query_plan_pb.QueryPlan;
      reader.readMessage(value,google_spanner_v1_query_plan_pb.QueryPlan.deserializeBinaryFromReader);
      msg.setQueryPlan(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setQueryStats(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRowCountExact(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRowCountLowerBound(value);
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
proto.google.spanner.v1.ResultSetStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.spanner.v1.ResultSetStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.spanner.v1.ResultSetStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.spanner.v1.ResultSetStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryPlan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_spanner_v1_query_plan_pb.QueryPlan.serializeBinaryToWriter
    );
  }
  f = message.getQueryStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional QueryPlan query_plan = 1;
 * @return {?proto.google.spanner.v1.QueryPlan}
 */
proto.google.spanner.v1.ResultSetStats.prototype.getQueryPlan = function() {
  return /** @type{?proto.google.spanner.v1.QueryPlan} */ (
    jspb.Message.getWrapperField(this, google_spanner_v1_query_plan_pb.QueryPlan, 1));
};


/** @param {?proto.google.spanner.v1.QueryPlan|undefined} value */
proto.google.spanner.v1.ResultSetStats.prototype.setQueryPlan = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSetStats.prototype.clearQueryPlan = function() {
  this.setQueryPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetStats.prototype.hasQueryPlan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct query_stats = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.spanner.v1.ResultSetStats.prototype.getQueryStats = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.google.spanner.v1.ResultSetStats.prototype.setQueryStats = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.spanner.v1.ResultSetStats.prototype.clearQueryStats = function() {
  this.setQueryStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetStats.prototype.hasQueryStats = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 row_count_exact = 3;
 * @return {number}
 */
proto.google.spanner.v1.ResultSetStats.prototype.getRowCountExact = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.spanner.v1.ResultSetStats.prototype.setRowCountExact = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.spanner.v1.ResultSetStats.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.spanner.v1.ResultSetStats.prototype.clearRowCountExact = function() {
  jspb.Message.setOneofField(this, 3, proto.google.spanner.v1.ResultSetStats.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetStats.prototype.hasRowCountExact = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 row_count_lower_bound = 4;
 * @return {number}
 */
proto.google.spanner.v1.ResultSetStats.prototype.getRowCountLowerBound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.spanner.v1.ResultSetStats.prototype.setRowCountLowerBound = function(value) {
  jspb.Message.setOneofField(this, 4, proto.google.spanner.v1.ResultSetStats.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.spanner.v1.ResultSetStats.prototype.clearRowCountLowerBound = function() {
  jspb.Message.setOneofField(this, 4, proto.google.spanner.v1.ResultSetStats.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.spanner.v1.ResultSetStats.prototype.hasRowCountLowerBound = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.spanner.v1);
