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

var google_cloud_automl_v1beta1_classification_pb = require('../../../../google/cloud/automl/v1beta1/classification_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_classification_pb);
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata', null, global);
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
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.displayName = 'proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata';
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.displayName = 'proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata';
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
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.displayName = 'proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata';
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.displayName = 'proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata';
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
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata;
  return proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoClassificationDatasetMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata;
  return proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingDatasetMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata;
  return proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoClassificationModelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata;
  return proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata}
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.VideoObjectTrackingModelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.google.cloud.automl.v1beta1);
