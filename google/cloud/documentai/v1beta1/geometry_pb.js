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
goog.exportSymbol('proto.google.cloud.documentai.v1beta1.BoundingPoly', null, global);
goog.exportSymbol('proto.google.cloud.documentai.v1beta1.NormalizedVertex', null, global);
goog.exportSymbol('proto.google.cloud.documentai.v1beta1.Vertex', null, global);
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
proto.google.cloud.documentai.v1beta1.Vertex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.documentai.v1beta1.Vertex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.documentai.v1beta1.Vertex.displayName = 'proto.google.cloud.documentai.v1beta1.Vertex';
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
proto.google.cloud.documentai.v1beta1.NormalizedVertex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.documentai.v1beta1.NormalizedVertex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.documentai.v1beta1.NormalizedVertex.displayName = 'proto.google.cloud.documentai.v1beta1.NormalizedVertex';
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
proto.google.cloud.documentai.v1beta1.BoundingPoly = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.documentai.v1beta1.BoundingPoly.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.documentai.v1beta1.BoundingPoly, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.documentai.v1beta1.BoundingPoly.displayName = 'proto.google.cloud.documentai.v1beta1.BoundingPoly';
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
proto.google.cloud.documentai.v1beta1.Vertex.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.documentai.v1beta1.Vertex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.documentai.v1beta1.Vertex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.Vertex.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.documentai.v1beta1.Vertex}
 */
proto.google.cloud.documentai.v1beta1.Vertex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.documentai.v1beta1.Vertex;
  return proto.google.cloud.documentai.v1beta1.Vertex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.documentai.v1beta1.Vertex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.documentai.v1beta1.Vertex}
 */
proto.google.cloud.documentai.v1beta1.Vertex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
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
proto.google.cloud.documentai.v1beta1.Vertex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.documentai.v1beta1.Vertex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.documentai.v1beta1.Vertex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.Vertex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.google.cloud.documentai.v1beta1.Vertex.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.cloud.documentai.v1beta1.Vertex.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.google.cloud.documentai.v1beta1.Vertex.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.google.cloud.documentai.v1beta1.Vertex.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
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
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.documentai.v1beta1.NormalizedVertex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.documentai.v1beta1.NormalizedVertex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.documentai.v1beta1.NormalizedVertex}
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.documentai.v1beta1.NormalizedVertex;
  return proto.google.cloud.documentai.v1beta1.NormalizedVertex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.documentai.v1beta1.NormalizedVertex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.documentai.v1beta1.NormalizedVertex}
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
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
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.documentai.v1beta1.NormalizedVertex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.documentai.v1beta1.NormalizedVertex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.documentai.v1beta1.NormalizedVertex.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.repeatedFields_ = [1,2];



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
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.documentai.v1beta1.BoundingPoly.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.documentai.v1beta1.BoundingPoly} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.toObject = function(includeInstance, msg) {
  var f, obj = {
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.google.cloud.documentai.v1beta1.Vertex.toObject, includeInstance),
    normalizedVerticesList: jspb.Message.toObjectList(msg.getNormalizedVerticesList(),
    proto.google.cloud.documentai.v1beta1.NormalizedVertex.toObject, includeInstance)
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
 * @return {!proto.google.cloud.documentai.v1beta1.BoundingPoly}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.documentai.v1beta1.BoundingPoly;
  return proto.google.cloud.documentai.v1beta1.BoundingPoly.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.documentai.v1beta1.BoundingPoly} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.documentai.v1beta1.BoundingPoly}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.documentai.v1beta1.Vertex;
      reader.readMessage(value,proto.google.cloud.documentai.v1beta1.Vertex.deserializeBinaryFromReader);
      msg.addVertices(value);
      break;
    case 2:
      var value = new proto.google.cloud.documentai.v1beta1.NormalizedVertex;
      reader.readMessage(value,proto.google.cloud.documentai.v1beta1.NormalizedVertex.deserializeBinaryFromReader);
      msg.addNormalizedVertices(value);
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
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.documentai.v1beta1.BoundingPoly.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.documentai.v1beta1.BoundingPoly} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.documentai.v1beta1.Vertex.serializeBinaryToWriter
    );
  }
  f = message.getNormalizedVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.documentai.v1beta1.NormalizedVertex.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vertex vertices = 1;
 * @return {!Array<!proto.google.cloud.documentai.v1beta1.Vertex>}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.google.cloud.documentai.v1beta1.Vertex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.documentai.v1beta1.Vertex, 1));
};


/** @param {!Array<!proto.google.cloud.documentai.v1beta1.Vertex>} value */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.setVerticesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.documentai.v1beta1.Vertex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.documentai.v1beta1.Vertex}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.documentai.v1beta1.Vertex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.clearVerticesList = function() {
  this.setVerticesList([]);
};


/**
 * repeated NormalizedVertex normalized_vertices = 2;
 * @return {!Array<!proto.google.cloud.documentai.v1beta1.NormalizedVertex>}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.getNormalizedVerticesList = function() {
  return /** @type{!Array<!proto.google.cloud.documentai.v1beta1.NormalizedVertex>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.documentai.v1beta1.NormalizedVertex, 2));
};


/** @param {!Array<!proto.google.cloud.documentai.v1beta1.NormalizedVertex>} value */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.setNormalizedVerticesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.documentai.v1beta1.NormalizedVertex=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.documentai.v1beta1.NormalizedVertex}
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.addNormalizedVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.documentai.v1beta1.NormalizedVertex, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.documentai.v1beta1.BoundingPoly.prototype.clearNormalizedVerticesList = function() {
  this.setNormalizedVerticesList([]);
};


goog.object.extend(exports, proto.google.cloud.documentai.v1beta1);
