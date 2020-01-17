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

goog.exportSymbol('proto.google.cloud.bigquery.storage.v1beta1.AvroRows', null, global);
goog.exportSymbol('proto.google.cloud.bigquery.storage.v1beta1.AvroSchema', null, global);
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
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.bigquery.storage.v1beta1.AvroSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.displayName = 'proto.google.cloud.bigquery.storage.v1beta1.AvroSchema';
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
proto.google.cloud.bigquery.storage.v1beta1.AvroRows = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.bigquery.storage.v1beta1.AvroRows, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.bigquery.storage.v1beta1.AvroRows.displayName = 'proto.google.cloud.bigquery.storage.v1beta1.AvroRows';
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
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    schema: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.AvroSchema}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.bigquery.storage.v1beta1.AvroSchema;
  return proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.AvroSchema}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
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
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchema();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string schema = 1;
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.bigquery.storage.v1beta1.AvroSchema.prototype.setSchema = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.bigquery.storage.v1beta1.AvroRows.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroRows} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedBinaryRows: msg.getSerializedBinaryRows_asB64(),
    rowCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.AvroRows}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.bigquery.storage.v1beta1.AvroRows;
  return proto.google.cloud.bigquery.storage.v1beta1.AvroRows.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroRows} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.AvroRows}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedBinaryRows(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRowCount(value);
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
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.bigquery.storage.v1beta1.AvroRows.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.AvroRows} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedBinaryRows_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRowCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes serialized_binary_rows = 1;
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.getSerializedBinaryRows = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serialized_binary_rows = 1;
 * This is a type-conversion wrapper around `getSerializedBinaryRows()`
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.getSerializedBinaryRows_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedBinaryRows()));
};


/**
 * optional bytes serialized_binary_rows = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedBinaryRows()`
 * @return {!Uint8Array}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.getSerializedBinaryRows_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedBinaryRows()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.setSerializedBinaryRows = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 row_count = 2;
 * @return {number}
 */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.getRowCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.bigquery.storage.v1beta1.AvroRows.prototype.setRowCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.bigquery.storage.v1beta1);