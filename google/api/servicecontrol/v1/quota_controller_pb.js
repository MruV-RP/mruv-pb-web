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
var google_api_servicecontrol_v1_metric_value_pb = require('../../../../google/api/servicecontrol/v1/metric_value_pb.js');
goog.object.extend(proto, google_api_servicecontrol_v1_metric_value_pb);
goog.exportSymbol('proto.google.api.servicecontrol.v1.AllocateQuotaRequest', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.AllocateQuotaResponse', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.QuotaError', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.QuotaError.Code', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.QuotaOperation', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode', null, global);
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
proto.google.api.servicecontrol.v1.AllocateQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.AllocateQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.AllocateQuotaRequest.displayName = 'proto.google.api.servicecontrol.v1.AllocateQuotaRequest';
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
proto.google.api.servicecontrol.v1.QuotaOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.servicecontrol.v1.QuotaOperation.repeatedFields_, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.QuotaOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.QuotaOperation.displayName = 'proto.google.api.servicecontrol.v1.QuotaOperation';
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
proto.google.api.servicecontrol.v1.AllocateQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.servicecontrol.v1.AllocateQuotaResponse.repeatedFields_, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.AllocateQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.AllocateQuotaResponse.displayName = 'proto.google.api.servicecontrol.v1.AllocateQuotaResponse';
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
proto.google.api.servicecontrol.v1.QuotaError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.QuotaError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.QuotaError.displayName = 'proto.google.api.servicecontrol.v1.QuotaError';
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
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.AllocateQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allocateOperation: (f = msg.getAllocateOperation()) && proto.google.api.servicecontrol.v1.QuotaOperation.toObject(includeInstance, f),
    serviceConfigId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.api.servicecontrol.v1.AllocateQuotaRequest}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.AllocateQuotaRequest;
  return proto.google.api.servicecontrol.v1.AllocateQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.AllocateQuotaRequest}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 2:
      var value = new proto.google.api.servicecontrol.v1.QuotaOperation;
      reader.readMessage(value,proto.google.api.servicecontrol.v1.QuotaOperation.deserializeBinaryFromReader);
      msg.setAllocateOperation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceConfigId(value);
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
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.AllocateQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllocateOperation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.api.servicecontrol.v1.QuotaOperation.serializeBinaryToWriter
    );
  }
  f = message.getServiceConfigId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.setServiceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QuotaOperation allocate_operation = 2;
 * @return {?proto.google.api.servicecontrol.v1.QuotaOperation}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.getAllocateOperation = function() {
  return /** @type{?proto.google.api.servicecontrol.v1.QuotaOperation} */ (
    jspb.Message.getWrapperField(this, proto.google.api.servicecontrol.v1.QuotaOperation, 2));
};


/** @param {?proto.google.api.servicecontrol.v1.QuotaOperation|undefined} value */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.setAllocateOperation = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.clearAllocateOperation = function() {
  this.setAllocateOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.hasAllocateOperation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string service_config_id = 4;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.getServiceConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.AllocateQuotaRequest.prototype.setServiceConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.servicecontrol.v1.QuotaOperation.repeatedFields_ = [5];



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
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.QuotaOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.QuotaOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.QuotaOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consumerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    quotaMetricsList: jspb.Message.toObjectList(msg.getQuotaMetricsList(),
    google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.toObject, includeInstance),
    quotaMode: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.api.servicecontrol.v1.QuotaOperation}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.QuotaOperation;
  return proto.google.api.servicecontrol.v1.QuotaOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.QuotaOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.QuotaOperation}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumerId(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 5:
      var value = new google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;
      reader.readMessage(value,google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.deserializeBinaryFromReader);
      msg.addQuotaMetrics(value);
      break;
    case 6:
      var value = /** @type {!proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode} */ (reader.readEnum());
      msg.setQuotaMode(value);
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
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.QuotaOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.QuotaOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.QuotaOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsumerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getQuotaMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.serializeBinaryToWriter
    );
  }
  f = message.getQuotaMode();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode = {
  UNSPECIFIED: 0,
  NORMAL: 1,
  BEST_EFFORT: 2,
  CHECK_ONLY: 3
};

/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.setOperationId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string method_name = 2;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.setMethodName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string consumer_id = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getConsumerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.setConsumerId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * repeated MetricValueSet quota_metrics = 5;
 * @return {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getQuotaMetricsList = function() {
  return /** @type{!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, 5));
};


/** @param {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} value */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.setQuotaMetricsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.api.servicecontrol.v1.MetricValueSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.servicecontrol.v1.MetricValueSet}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.addQuotaMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.api.servicecontrol.v1.MetricValueSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.clearQuotaMetricsList = function() {
  this.setQuotaMetricsList([]);
};


/**
 * optional QuotaMode quota_mode = 6;
 * @return {!proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode}
 */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.getQuotaMode = function() {
  return /** @type {!proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.api.servicecontrol.v1.QuotaOperation.QuotaMode} value */
proto.google.api.servicecontrol.v1.QuotaOperation.prototype.setQuotaMode = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.repeatedFields_ = [2,3];



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
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.AllocateQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allocateErrorsList: jspb.Message.toObjectList(msg.getAllocateErrorsList(),
    proto.google.api.servicecontrol.v1.QuotaError.toObject, includeInstance),
    quotaMetricsList: jspb.Message.toObjectList(msg.getQuotaMetricsList(),
    google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.toObject, includeInstance),
    serviceConfigId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.api.servicecontrol.v1.AllocateQuotaResponse}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.AllocateQuotaResponse;
  return proto.google.api.servicecontrol.v1.AllocateQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.AllocateQuotaResponse}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    case 2:
      var value = new proto.google.api.servicecontrol.v1.QuotaError;
      reader.readMessage(value,proto.google.api.servicecontrol.v1.QuotaError.deserializeBinaryFromReader);
      msg.addAllocateErrors(value);
      break;
    case 3:
      var value = new google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;
      reader.readMessage(value,google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.deserializeBinaryFromReader);
      msg.addQuotaMetrics(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceConfigId(value);
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
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.AllocateQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.AllocateQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllocateErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.api.servicecontrol.v1.QuotaError.serializeBinaryToWriter
    );
  }
  f = message.getQuotaMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.serializeBinaryToWriter
    );
  }
  f = message.getServiceConfigId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.setOperationId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated QuotaError allocate_errors = 2;
 * @return {!Array<!proto.google.api.servicecontrol.v1.QuotaError>}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.getAllocateErrorsList = function() {
  return /** @type{!Array<!proto.google.api.servicecontrol.v1.QuotaError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.servicecontrol.v1.QuotaError, 2));
};


/** @param {!Array<!proto.google.api.servicecontrol.v1.QuotaError>} value */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.setAllocateErrorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.api.servicecontrol.v1.QuotaError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.servicecontrol.v1.QuotaError}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.addAllocateErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.api.servicecontrol.v1.QuotaError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.clearAllocateErrorsList = function() {
  this.setAllocateErrorsList([]);
};


/**
 * repeated MetricValueSet quota_metrics = 3;
 * @return {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.getQuotaMetricsList = function() {
  return /** @type{!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, 3));
};


/** @param {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} value */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.setQuotaMetricsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.servicecontrol.v1.MetricValueSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.servicecontrol.v1.MetricValueSet}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.addQuotaMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.servicecontrol.v1.MetricValueSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.clearQuotaMetricsList = function() {
  this.setQuotaMetricsList([]);
};


/**
 * optional string service_config_id = 4;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.getServiceConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.AllocateQuotaResponse.prototype.setServiceConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
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
proto.google.api.servicecontrol.v1.QuotaError.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.QuotaError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.QuotaError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.QuotaError.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.google.api.servicecontrol.v1.QuotaError}
 */
proto.google.api.servicecontrol.v1.QuotaError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.QuotaError;
  return proto.google.api.servicecontrol.v1.QuotaError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.QuotaError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.QuotaError}
 */
proto.google.api.servicecontrol.v1.QuotaError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.api.servicecontrol.v1.QuotaError.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
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
proto.google.api.servicecontrol.v1.QuotaError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.QuotaError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.QuotaError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.QuotaError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSubject();
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
 * @enum {number}
 */
proto.google.api.servicecontrol.v1.QuotaError.Code = {
  UNSPECIFIED: 0,
  RESOURCE_EXHAUSTED: 8,
  BILLING_NOT_ACTIVE: 107,
  PROJECT_DELETED: 108,
  API_KEY_INVALID: 105,
  API_KEY_EXPIRED: 112
};

/**
 * optional Code code = 1;
 * @return {!proto.google.api.servicecontrol.v1.QuotaError.Code}
 */
proto.google.api.servicecontrol.v1.QuotaError.prototype.getCode = function() {
  return /** @type {!proto.google.api.servicecontrol.v1.QuotaError.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.api.servicecontrol.v1.QuotaError.Code} value */
proto.google.api.servicecontrol.v1.QuotaError.prototype.setCode = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.QuotaError.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.QuotaError.prototype.setSubject = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.QuotaError.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.QuotaError.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.google.api.servicecontrol.v1);
