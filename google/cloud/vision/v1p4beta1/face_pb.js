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
var google_cloud_vision_v1p4beta1_geometry_pb = require('../../../../google/cloud/vision/v1p4beta1/geometry_pb.js');
goog.object.extend(proto, google_cloud_vision_v1p4beta1_geometry_pb);
goog.exportSymbol('proto.google.cloud.vision.v1p4beta1.Celebrity', null, global);
goog.exportSymbol('proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams', null, global);
goog.exportSymbol('proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult', null, global);
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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.displayName = 'proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams';
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
proto.google.cloud.vision.v1p4beta1.Celebrity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.vision.v1p4beta1.Celebrity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.vision.v1p4beta1.Celebrity.displayName = 'proto.google.cloud.vision.v1p4beta1.Celebrity';
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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.displayName = 'proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.repeatedFields_ = [1];



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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    celebritySetList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams;
  return proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCelebritySet(value);
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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelebritySetList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string celebrity_set = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.getCelebritySetList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.setCelebritySetList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.addCelebritySet = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionParams.prototype.clearCelebritySetList = function() {
  this.setCelebritySetList([]);
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
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.vision.v1p4beta1.Celebrity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.vision.v1p4beta1.Celebrity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.vision.v1p4beta1.Celebrity}
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.vision.v1p4beta1.Celebrity;
  return proto.google.cloud.vision.v1p4beta1.Celebrity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.vision.v1p4beta1.Celebrity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.vision.v1p4beta1.Celebrity}
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.vision.v1p4beta1.Celebrity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.vision.v1p4beta1.Celebrity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.vision.v1p4beta1.Celebrity.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    celebrity: (f = msg.getCelebrity()) && proto.google.cloud.vision.v1p4beta1.Celebrity.toObject(includeInstance, f),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult;
  return proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.vision.v1p4beta1.Celebrity;
      reader.readMessage(value,proto.google.cloud.vision.v1p4beta1.Celebrity.deserializeBinaryFromReader);
      msg.setCelebrity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCelebrity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.vision.v1p4beta1.Celebrity.serializeBinaryToWriter
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Celebrity celebrity = 1;
 * @return {?proto.google.cloud.vision.v1p4beta1.Celebrity}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.getCelebrity = function() {
  return /** @type{?proto.google.cloud.vision.v1p4beta1.Celebrity} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.vision.v1p4beta1.Celebrity, 1));
};


/** @param {?proto.google.cloud.vision.v1p4beta1.Celebrity|undefined} value */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.setCelebrity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.clearCelebrity = function() {
  this.setCelebrity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.hasCelebrity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.vision.v1p4beta1.FaceRecognitionResult.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.vision.v1p4beta1);
