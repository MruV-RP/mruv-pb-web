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

var google_ads_googleads_v2_resources_customer_label_pb = require('../../../../../google/ads/googleads/v2/resources/customer_label_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_resources_customer_label_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.services.CustomerLabelOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.GetCustomerLabelRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateCustomerLabelResult', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse', null, global);
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
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.GetCustomerLabelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.displayName = 'proto.google.ads.googleads.v2.services.GetCustomerLabelRequest';
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.displayName = 'proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest';
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
proto.google.ads.googleads.v2.services.CustomerLabelOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v2.services.CustomerLabelOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.CustomerLabelOperation.displayName = 'proto.google.ads.googleads.v2.services.CustomerLabelOperation';
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.displayName = 'proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse';
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateCustomerLabelResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.displayName = 'proto.google.ads.googleads.v2.services.MutateCustomerLabelResult';
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
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.GetCustomerLabelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.ads.googleads.v2.services.GetCustomerLabelRequest}
 */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.GetCustomerLabelRequest;
  return proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.GetCustomerLabelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.GetCustomerLabelRequest}
 */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
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
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.GetCustomerLabelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.GetCustomerLabelRequest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.repeatedFields_ = [2];



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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v2.services.CustomerLabelOperation.toObject, includeInstance),
    partialFailure: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    validateOnly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest;
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v2.services.CustomerLabelOperation;
      reader.readMessage(value,proto.google.ads.googleads.v2.services.CustomerLabelOperation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartialFailure(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidateOnly(value);
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v2.services.CustomerLabelOperation.serializeBinaryToWriter
    );
  }
  f = message.getPartialFailure();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getValidateOnly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.setCustomerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CustomerLabelOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v2.services.CustomerLabelOperation>}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.services.CustomerLabelOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v2.services.CustomerLabelOperation, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v2.services.CustomerLabelOperation>} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.setOperationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.services.CustomerLabelOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.services.CustomerLabelOperation}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v2.services.CustomerLabelOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.clearOperationsList = function() {
  this.setOperationsList([]);
};


/**
 * optional bool partial_failure = 3;
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.getPartialFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.setPartialFailure = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool validate_only = 4;
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.getValidateOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsRequest.prototype.setValidateOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  CREATE: 1,
  REMOVE: 2
};

/**
 * @return {proto.google.ads.googleads.v2.services.CustomerLabelOperation.OperationCase}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v2.services.CustomerLabelOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_[0]));
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
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.CustomerLabelOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.CustomerLabelOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    create: (f = msg.getCreate()) && google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.toObject(includeInstance, f),
    remove: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.ads.googleads.v2.services.CustomerLabelOperation}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.CustomerLabelOperation;
  return proto.google.ads.googleads.v2.services.CustomerLabelOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.CustomerLabelOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.CustomerLabelOperation}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel;
      reader.readMessage(value,google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemove(value);
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
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.CustomerLabelOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.CustomerLabelOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.ads.googleads.v2.resources.CustomerLabel create = 1;
 * @return {?proto.google.ads.googleads.v2.resources.CustomerLabel}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.getCreate = function() {
  return /** @type{?proto.google.ads.googleads.v2.resources.CustomerLabel} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel, 1));
};


/** @param {?proto.google.ads.googleads.v2.resources.CustomerLabel|undefined} value */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.setCreate = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.clearCreate = function() {
  this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string remove = 2;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.getRemove = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.setRemove = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.clearRemove = function() {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v2.services.CustomerLabelOperation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.CustomerLabelOperation.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.repeatedFields_ = [2];



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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialFailureError: (f = msg.getPartialFailureError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse;
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setPartialFailureError(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v2.services.MutateCustomerLabelResult;
      reader.readMessage(value,proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartialFailureError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.rpc.Status partial_failure_error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.getPartialFailureError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.setPartialFailureError = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.clearPartialFailureError = function() {
  this.setPartialFailureError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.hasPartialFailureError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MutateCustomerLabelResult results = 2;
 * @return {!Array<!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult>}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v2.services.MutateCustomerLabelResult, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult>} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v2.services.MutateCustomerLabelResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelsResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateCustomerLabelResult;
  return proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
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
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateCustomerLabelResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.MutateCustomerLabelResult.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v2.services);
