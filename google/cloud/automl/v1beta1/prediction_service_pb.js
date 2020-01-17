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
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_cloud_automl_v1beta1_annotation_payload_pb = require('../../../../google/cloud/automl/v1beta1/annotation_payload_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_annotation_payload_pb);
var google_cloud_automl_v1beta1_data_items_pb = require('../../../../google/cloud/automl/v1beta1/data_items_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_data_items_pb);
var google_cloud_automl_v1beta1_io_pb = require('../../../../google/cloud/automl/v1beta1/io_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_io_pb);
var google_cloud_automl_v1beta1_operations_pb = require('../../../../google/cloud/automl/v1beta1/operations_pb.js');
goog.object.extend(proto, google_cloud_automl_v1beta1_operations_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.BatchPredictRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.BatchPredictResult', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.PredictRequest', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.PredictResponse', null, global);
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
proto.google.cloud.automl.v1beta1.PredictRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.PredictRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.PredictRequest.displayName = 'proto.google.cloud.automl.v1beta1.PredictRequest';
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
proto.google.cloud.automl.v1beta1.PredictResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.PredictResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.PredictResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.PredictResponse.displayName = 'proto.google.cloud.automl.v1beta1.PredictResponse';
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
proto.google.cloud.automl.v1beta1.BatchPredictRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.BatchPredictRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.BatchPredictRequest.displayName = 'proto.google.cloud.automl.v1beta1.BatchPredictRequest';
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
proto.google.cloud.automl.v1beta1.BatchPredictResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.BatchPredictResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.BatchPredictResult.displayName = 'proto.google.cloud.automl.v1beta1.BatchPredictResult';
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
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.PredictRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.PredictRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.toObject(includeInstance, f),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.cloud.automl.v1beta1.PredictRequest}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.PredictRequest;
  return proto.google.cloud.automl.v1beta1.PredictRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.PredictRequest}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_automl_v1beta1_data_items_pb.ExamplePayload;
      reader.readMessage(value,google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 3:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.PredictRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.PredictRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.serializeBinaryToWriter
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ExamplePayload payload = 2;
 * @return {?proto.google.cloud.automl.v1beta1.ExamplePayload}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.getPayload = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ExamplePayload} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_data_items_pb.ExamplePayload, 2));
};


/** @param {?proto.google.cloud.automl.v1beta1.ExamplePayload|undefined} value */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.setPayload = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> params = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.automl.v1beta1.PredictRequest.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.PredictResponse.repeatedFields_ = [1];



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
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.PredictResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.PredictResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.PredictResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadList: jspb.Message.toObjectList(msg.getPayloadList(),
    google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload.toObject, includeInstance),
    preprocessedInput: (f = msg.getPreprocessedInput()) && google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.cloud.automl.v1beta1.PredictResponse}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.PredictResponse;
  return proto.google.cloud.automl.v1beta1.PredictResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.PredictResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.PredictResponse}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload;
      reader.readMessage(value,google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload.deserializeBinaryFromReader);
      msg.addPayload(value);
      break;
    case 3:
      var value = new google_cloud_automl_v1beta1_data_items_pb.ExamplePayload;
      reader.readMessage(value,google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.deserializeBinaryFromReader);
      msg.setPreprocessedInput(value);
      break;
    case 2:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.PredictResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.PredictResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.PredictResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload.serializeBinaryToWriter
    );
  }
  f = message.getPreprocessedInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_automl_v1beta1_data_items_pb.ExamplePayload.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * repeated AnnotationPayload payload = 1;
 * @return {!Array<!proto.google.cloud.automl.v1beta1.AnnotationPayload>}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.getPayloadList = function() {
  return /** @type{!Array<!proto.google.cloud.automl.v1beta1.AnnotationPayload>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_automl_v1beta1_annotation_payload_pb.AnnotationPayload, 1));
};


/** @param {!Array<!proto.google.cloud.automl.v1beta1.AnnotationPayload>} value */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.setPayloadList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.AnnotationPayload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.automl.v1beta1.AnnotationPayload}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.addPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.automl.v1beta1.AnnotationPayload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.clearPayloadList = function() {
  this.setPayloadList([]);
};


/**
 * optional ExamplePayload preprocessed_input = 3;
 * @return {?proto.google.cloud.automl.v1beta1.ExamplePayload}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.getPreprocessedInput = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ExamplePayload} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_data_items_pb.ExamplePayload, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.ExamplePayload|undefined} value */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.setPreprocessedInput = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.clearPreprocessedInput = function() {
  this.setPreprocessedInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.hasPreprocessedInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> metadata = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.automl.v1beta1.PredictResponse.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
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
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.BatchPredictRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputConfig: (f = msg.getInputConfig()) && google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig.toObject(includeInstance, f),
    outputConfig: (f = msg.getOutputConfig()) && google_cloud_automl_v1beta1_io_pb.BatchPredictOutputConfig.toObject(includeInstance, f),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.cloud.automl.v1beta1.BatchPredictRequest}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.BatchPredictRequest;
  return proto.google.cloud.automl.v1beta1.BatchPredictRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.BatchPredictRequest}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig.deserializeBinaryFromReader);
      msg.setInputConfig(value);
      break;
    case 4:
      var value = new google_cloud_automl_v1beta1_io_pb.BatchPredictOutputConfig;
      reader.readMessage(value,google_cloud_automl_v1beta1_io_pb.BatchPredictOutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
      break;
    case 5:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.BatchPredictRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig.serializeBinaryToWriter
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_automl_v1beta1_io_pb.BatchPredictOutputConfig.serializeBinaryToWriter
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BatchPredictInputConfig input_config = 3;
 * @return {?proto.google.cloud.automl.v1beta1.BatchPredictInputConfig}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.getInputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.BatchPredictInputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.BatchPredictInputConfig, 3));
};


/** @param {?proto.google.cloud.automl.v1beta1.BatchPredictInputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.setInputConfig = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.clearInputConfig = function() {
  this.setInputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.hasInputConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BatchPredictOutputConfig output_config = 4;
 * @return {?proto.google.cloud.automl.v1beta1.BatchPredictOutputConfig}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.getOutputConfig = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.BatchPredictOutputConfig} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_io_pb.BatchPredictOutputConfig, 4));
};


/** @param {?proto.google.cloud.automl.v1beta1.BatchPredictOutputConfig|undefined} value */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.setOutputConfig = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.clearOutputConfig = function() {
  this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.hasOutputConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> params = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.automl.v1beta1.BatchPredictRequest.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
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
proto.google.cloud.automl.v1beta1.BatchPredictResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.BatchPredictResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.cloud.automl.v1beta1.BatchPredictResult}
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.BatchPredictResult;
  return proto.google.cloud.automl.v1beta1.BatchPredictResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.BatchPredictResult}
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.google.cloud.automl.v1beta1.BatchPredictResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.BatchPredictResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.BatchPredictResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> metadata = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.automl.v1beta1.BatchPredictResult.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
};


goog.object.extend(exports, proto.google.cloud.automl.v1beta1);