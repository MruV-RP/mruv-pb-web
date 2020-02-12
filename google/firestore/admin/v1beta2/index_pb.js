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
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index.IndexField', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index.IndexField.Order', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index.QueryScope', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Index.State', null, global);
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
proto.google.firestore.admin.v1beta2.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.firestore.admin.v1beta2.Index.repeatedFields_, null);
};
goog.inherits(proto.google.firestore.admin.v1beta2.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.firestore.admin.v1beta2.Index.displayName = 'proto.google.firestore.admin.v1beta2.Index';
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
proto.google.firestore.admin.v1beta2.Index.IndexField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_);
};
goog.inherits(proto.google.firestore.admin.v1beta2.Index.IndexField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.firestore.admin.v1beta2.Index.IndexField.displayName = 'proto.google.firestore.admin.v1beta2.Index.IndexField';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.firestore.admin.v1beta2.Index.repeatedFields_ = [3];



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
proto.google.firestore.admin.v1beta2.Index.prototype.toObject = function(opt_includeInstance) {
  return proto.google.firestore.admin.v1beta2.Index.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.firestore.admin.v1beta2.Index} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Index.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queryScope: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.google.firestore.admin.v1beta2.Index.IndexField.toObject, includeInstance),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.firestore.admin.v1beta2.Index}
 */
proto.google.firestore.admin.v1beta2.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.firestore.admin.v1beta2.Index;
  return proto.google.firestore.admin.v1beta2.Index.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.firestore.admin.v1beta2.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.firestore.admin.v1beta2.Index}
 */
proto.google.firestore.admin.v1beta2.Index.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.firestore.admin.v1beta2.Index.QueryScope} */ (reader.readEnum());
      msg.setQueryScope(value);
      break;
    case 3:
      var value = new proto.google.firestore.admin.v1beta2.Index.IndexField;
      reader.readMessage(value,proto.google.firestore.admin.v1beta2.Index.IndexField.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 4:
      var value = /** @type {!proto.google.firestore.admin.v1beta2.Index.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.google.firestore.admin.v1beta2.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.firestore.admin.v1beta2.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.firestore.admin.v1beta2.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryScope();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.firestore.admin.v1beta2.Index.IndexField.serializeBinaryToWriter
    );
  }
  f = message.getState();
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
proto.google.firestore.admin.v1beta2.Index.QueryScope = {
  QUERY_SCOPE_UNSPECIFIED: 0,
  COLLECTION: 1,
  COLLECTION_GROUP: 2
};

/**
 * @enum {number}
 */
proto.google.firestore.admin.v1beta2.Index.State = {
  STATE_UNSPECIFIED: 0,
  CREATING: 1,
  READY: 2,
  NEEDS_REPAIR: 3
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.ValueModeCase = {
  VALUE_MODE_NOT_SET: 0,
  ORDER: 2,
  ARRAY_CONFIG: 3
};

/**
 * @return {proto.google.firestore.admin.v1beta2.Index.IndexField.ValueModeCase}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.getValueModeCase = function() {
  return /** @type {proto.google.firestore.admin.v1beta2.Index.IndexField.ValueModeCase} */(jspb.Message.computeOneofCase(this, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_[0]));
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
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.toObject = function(opt_includeInstance) {
  return proto.google.firestore.admin.v1beta2.Index.IndexField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.firestore.admin.v1beta2.Index.IndexField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0),
    arrayConfig: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.firestore.admin.v1beta2.Index.IndexField}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.firestore.admin.v1beta2.Index.IndexField;
  return proto.google.firestore.admin.v1beta2.Index.IndexField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.firestore.admin.v1beta2.Index.IndexField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.firestore.admin.v1beta2.Index.IndexField}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldPath(value);
      break;
    case 2:
      var value = /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.Order} */ (reader.readEnum());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig} */ (reader.readEnum());
      msg.setArrayConfig(value);
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
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.firestore.admin.v1beta2.Index.IndexField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.firestore.admin.v1beta2.Index.IndexField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.Order} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.Order = {
  ORDER_UNSPECIFIED: 0,
  ASCENDING: 1,
  DESCENDING: 2
};

/**
 * @enum {number}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig = {
  ARRAY_CONFIG_UNSPECIFIED: 0,
  CONTAINS: 1
};

/**
 * optional string field_path = 1;
 * @return {string}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.getFieldPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.setFieldPath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Order order = 2;
 * @return {!proto.google.firestore.admin.v1beta2.Index.IndexField.Order}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.getOrder = function() {
  return /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.Order} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.firestore.admin.v1beta2.Index.IndexField.Order} value */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.setOrder = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.clearOrder = function() {
  jspb.Message.setOneofField(this, 2, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ArrayConfig array_config = 3;
 * @return {!proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.getArrayConfig = function() {
  return /** @type {!proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.firestore.admin.v1beta2.Index.IndexField.ArrayConfig} value */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.setArrayConfig = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.clearArrayConfig = function() {
  jspb.Message.setOneofField(this, 3, proto.google.firestore.admin.v1beta2.Index.IndexField.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.firestore.admin.v1beta2.Index.IndexField.prototype.hasArrayConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.firestore.admin.v1beta2.Index.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.firestore.admin.v1beta2.Index.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryScope query_scope = 2;
 * @return {!proto.google.firestore.admin.v1beta2.Index.QueryScope}
 */
proto.google.firestore.admin.v1beta2.Index.prototype.getQueryScope = function() {
  return /** @type {!proto.google.firestore.admin.v1beta2.Index.QueryScope} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.firestore.admin.v1beta2.Index.QueryScope} value */
proto.google.firestore.admin.v1beta2.Index.prototype.setQueryScope = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated IndexField fields = 3;
 * @return {!Array<!proto.google.firestore.admin.v1beta2.Index.IndexField>}
 */
proto.google.firestore.admin.v1beta2.Index.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.google.firestore.admin.v1beta2.Index.IndexField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.firestore.admin.v1beta2.Index.IndexField, 3));
};


/** @param {!Array<!proto.google.firestore.admin.v1beta2.Index.IndexField>} value */
proto.google.firestore.admin.v1beta2.Index.prototype.setFieldsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.firestore.admin.v1beta2.Index.IndexField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.firestore.admin.v1beta2.Index.IndexField}
 */
proto.google.firestore.admin.v1beta2.Index.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.firestore.admin.v1beta2.Index.IndexField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.firestore.admin.v1beta2.Index.prototype.clearFieldsList = function() {
  this.setFieldsList([]);
};


/**
 * optional State state = 4;
 * @return {!proto.google.firestore.admin.v1beta2.Index.State}
 */
proto.google.firestore.admin.v1beta2.Index.prototype.getState = function() {
  return /** @type {!proto.google.firestore.admin.v1beta2.Index.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.firestore.admin.v1beta2.Index.State} value */
proto.google.firestore.admin.v1beta2.Index.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.google.firestore.admin.v1beta2);
