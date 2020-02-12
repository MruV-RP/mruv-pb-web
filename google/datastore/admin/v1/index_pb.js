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
goog.exportSymbol('proto.google.datastore.admin.v1.Index', null, global);
goog.exportSymbol('proto.google.datastore.admin.v1.Index.AncestorMode', null, global);
goog.exportSymbol('proto.google.datastore.admin.v1.Index.Direction', null, global);
goog.exportSymbol('proto.google.datastore.admin.v1.Index.IndexedProperty', null, global);
goog.exportSymbol('proto.google.datastore.admin.v1.Index.State', null, global);
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
proto.google.datastore.admin.v1.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.datastore.admin.v1.Index.repeatedFields_, null);
};
goog.inherits(proto.google.datastore.admin.v1.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.datastore.admin.v1.Index.displayName = 'proto.google.datastore.admin.v1.Index';
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
proto.google.datastore.admin.v1.Index.IndexedProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.datastore.admin.v1.Index.IndexedProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.datastore.admin.v1.Index.IndexedProperty.displayName = 'proto.google.datastore.admin.v1.Index.IndexedProperty';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.datastore.admin.v1.Index.repeatedFields_ = [6];



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
proto.google.datastore.admin.v1.Index.prototype.toObject = function(opt_includeInstance) {
  return proto.google.datastore.admin.v1.Index.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.datastore.admin.v1.Index} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.datastore.admin.v1.Index.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    indexId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ancestor: jspb.Message.getFieldWithDefault(msg, 5, 0),
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.google.datastore.admin.v1.Index.IndexedProperty.toObject, includeInstance),
    state: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.google.datastore.admin.v1.Index}
 */
proto.google.datastore.admin.v1.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.datastore.admin.v1.Index;
  return proto.google.datastore.admin.v1.Index.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.datastore.admin.v1.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.datastore.admin.v1.Index}
 */
proto.google.datastore.admin.v1.Index.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndexId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 5:
      var value = /** @type {!proto.google.datastore.admin.v1.Index.AncestorMode} */ (reader.readEnum());
      msg.setAncestor(value);
      break;
    case 6:
      var value = new proto.google.datastore.admin.v1.Index.IndexedProperty;
      reader.readMessage(value,proto.google.datastore.admin.v1.Index.IndexedProperty.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 7:
      var value = /** @type {!proto.google.datastore.admin.v1.Index.State} */ (reader.readEnum());
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
proto.google.datastore.admin.v1.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.datastore.admin.v1.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.datastore.admin.v1.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.datastore.admin.v1.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndexId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAncestor();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.datastore.admin.v1.Index.IndexedProperty.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.datastore.admin.v1.Index.AncestorMode = {
  ANCESTOR_MODE_UNSPECIFIED: 0,
  NONE: 1,
  ALL_ANCESTORS: 2
};

/**
 * @enum {number}
 */
proto.google.datastore.admin.v1.Index.Direction = {
  DIRECTION_UNSPECIFIED: 0,
  ASCENDING: 1,
  DESCENDING: 2
};

/**
 * @enum {number}
 */
proto.google.datastore.admin.v1.Index.State = {
  STATE_UNSPECIFIED: 0,
  CREATING: 1,
  READY: 2,
  DELETING: 3,
  ERROR: 4
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
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.google.datastore.admin.v1.Index.IndexedProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.datastore.admin.v1.Index.IndexedProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.datastore.admin.v1.Index.IndexedProperty}
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.datastore.admin.v1.Index.IndexedProperty;
  return proto.google.datastore.admin.v1.Index.IndexedProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.datastore.admin.v1.Index.IndexedProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.datastore.admin.v1.Index.IndexedProperty}
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.datastore.admin.v1.Index.Direction} */ (reader.readEnum());
      msg.setDirection(value);
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
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.datastore.admin.v1.Index.IndexedProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.datastore.admin.v1.Index.IndexedProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Direction direction = 2;
 * @return {!proto.google.datastore.admin.v1.Index.Direction}
 */
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.getDirection = function() {
  return /** @type {!proto.google.datastore.admin.v1.Index.Direction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.datastore.admin.v1.Index.Direction} value */
proto.google.datastore.admin.v1.Index.IndexedProperty.prototype.setDirection = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.datastore.admin.v1.Index.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.datastore.admin.v1.Index.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string index_id = 3;
 * @return {string}
 */
proto.google.datastore.admin.v1.Index.prototype.getIndexId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.datastore.admin.v1.Index.prototype.setIndexId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string kind = 4;
 * @return {string}
 */
proto.google.datastore.admin.v1.Index.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.datastore.admin.v1.Index.prototype.setKind = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional AncestorMode ancestor = 5;
 * @return {!proto.google.datastore.admin.v1.Index.AncestorMode}
 */
proto.google.datastore.admin.v1.Index.prototype.getAncestor = function() {
  return /** @type {!proto.google.datastore.admin.v1.Index.AncestorMode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.google.datastore.admin.v1.Index.AncestorMode} value */
proto.google.datastore.admin.v1.Index.prototype.setAncestor = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated IndexedProperty properties = 6;
 * @return {!Array<!proto.google.datastore.admin.v1.Index.IndexedProperty>}
 */
proto.google.datastore.admin.v1.Index.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.google.datastore.admin.v1.Index.IndexedProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.datastore.admin.v1.Index.IndexedProperty, 6));
};


/** @param {!Array<!proto.google.datastore.admin.v1.Index.IndexedProperty>} value */
proto.google.datastore.admin.v1.Index.prototype.setPropertiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.datastore.admin.v1.Index.IndexedProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.datastore.admin.v1.Index.IndexedProperty}
 */
proto.google.datastore.admin.v1.Index.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.datastore.admin.v1.Index.IndexedProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.datastore.admin.v1.Index.prototype.clearPropertiesList = function() {
  this.setPropertiesList([]);
};


/**
 * optional State state = 7;
 * @return {!proto.google.datastore.admin.v1.Index.State}
 */
proto.google.datastore.admin.v1.Index.prototype.getState = function() {
  return /** @type {!proto.google.datastore.admin.v1.Index.State} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.google.datastore.admin.v1.Index.State} value */
proto.google.datastore.admin.v1.Index.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


goog.object.extend(exports, proto.google.datastore.admin.v1);
