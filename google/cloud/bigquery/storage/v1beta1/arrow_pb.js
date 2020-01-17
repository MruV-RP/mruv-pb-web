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

goog.exportSymbol('proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch', null, global);
goog.exportSymbol('proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema', null, global);
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.displayName = 'proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema';
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.displayName = 'proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch';
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedSchema: msg.getSerializedSchema_asB64()
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
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema;
  return proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedSchema(value);
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedSchema_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes serialized_schema = 1;
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.getSerializedSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serialized_schema = 1;
 * This is a type-conversion wrapper around `getSerializedSchema()`
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.getSerializedSchema_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedSchema()));
};


/**
 * optional bytes serialized_schema = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedSchema()`
 * @return {!Uint8Array}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.getSerializedSchema_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedSchema()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.bigquery.storage.v1beta1.ArrowSchema.prototype.setSerializedSchema = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedRecordBatch: msg.getSerializedRecordBatch_asB64(),
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
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch;
  return proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedRecordBatch(value);
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
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedRecordBatch_asU8();
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
 * optional bytes serialized_record_batch = 1;
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.getSerializedRecordBatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serialized_record_batch = 1;
 * This is a type-conversion wrapper around `getSerializedRecordBatch()`
 * @return {string}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.getSerializedRecordBatch_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedRecordBatch()));
};


/**
 * optional bytes serialized_record_batch = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedRecordBatch()`
 * @return {!Uint8Array}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.getSerializedRecordBatch_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedRecordBatch()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.setSerializedRecordBatch = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 row_count = 2;
 * @return {number}
 */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.getRowCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.bigquery.storage.v1beta1.ArrowRecordBatch.prototype.setRowCount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.bigquery.storage.v1beta1);