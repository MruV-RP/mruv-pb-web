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
goog.exportSymbol('proto.google.cloud.automl.v1beta1.TextSentimentAnnotation', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics', null, global);
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
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.TextSentimentAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.displayName = 'proto.google.cloud.automl.v1beta1.TextSentimentAnnotation';
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
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.displayName = 'proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics';
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
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    sentiment: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.google.cloud.automl.v1beta1.TextSentimentAnnotation}
 */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.TextSentimentAnnotation;
  return proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.TextSentimentAnnotation}
 */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSentiment(value);
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
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSentiment();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sentiment = 1;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.prototype.getSentiment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentAnnotation.prototype.setSentiment = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.repeatedFields_ = [9];



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
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    precision: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    recall: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    f1Score: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    meanAbsoluteError: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    meanSquaredError: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    linearKappa: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    quadraticKappa: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    confusionMatrix: (f = msg.getConfusionMatrix()) && google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix.toObject(includeInstance, f),
    annotationSpecIdList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics;
  return proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrecision(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRecall(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setF1Score(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMeanAbsoluteError(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMeanSquaredError(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLinearKappa(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuadraticKappa(value);
      break;
    case 8:
      var value = new google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix;
      reader.readMessage(value,google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix.deserializeBinaryFromReader);
      msg.setConfusionMatrix(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addAnnotationSpecId(value);
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
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrecision();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getRecall();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getF1Score();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMeanAbsoluteError();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMeanSquaredError();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getLinearKappa();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getQuadraticKappa();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getConfusionMatrix();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationSpecIdList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional float precision = 1;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setPrecision = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float recall = 2;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getRecall = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setRecall = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float f1_score = 3;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getF1Score = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setF1Score = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float mean_absolute_error = 4;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getMeanAbsoluteError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setMeanAbsoluteError = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float mean_squared_error = 5;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getMeanSquaredError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setMeanSquaredError = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float linear_kappa = 6;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getLinearKappa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setLinearKappa = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float quadratic_kappa = 7;
 * @return {number}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getQuadraticKappa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setQuadraticKappa = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional ClassificationEvaluationMetrics.ConfusionMatrix confusion_matrix = 8;
 * @return {?proto.google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getConfusionMatrix = function() {
  return /** @type{?proto.google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1beta1_classification_pb.ClassificationEvaluationMetrics.ConfusionMatrix, 8));
};


/** @param {?proto.google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix|undefined} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setConfusionMatrix = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.clearConfusionMatrix = function() {
  this.setConfusionMatrix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.hasConfusionMatrix = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string annotation_spec_id = 9;
 * @return {!Array<string>}
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.getAnnotationSpecIdList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<string>} value */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.setAnnotationSpecIdList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.addAnnotationSpecId = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics.prototype.clearAnnotationSpecIdList = function() {
  this.setAnnotationSpecIdList([]);
};


goog.object.extend(exports, proto.google.cloud.automl.v1beta1);
