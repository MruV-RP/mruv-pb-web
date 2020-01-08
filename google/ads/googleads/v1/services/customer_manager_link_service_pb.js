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

var google_ads_googleads_v1_resources_customer_manager_link_pb = require('../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_resources_customer_manager_link_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult', null, global);
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
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.displayName = 'proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest';
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.displayName = 'proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest';
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
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.displayName = 'proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation';
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.displayName = 'proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse';
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.displayName = 'proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult';
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
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest}
 */
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest;
  return proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest}
 */
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.GetCustomerManagerLinkRequest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.repeatedFields_ = [2];



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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest;
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.deserializeBinaryFromReader);
      msg.addOperations(value);
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.setCustomerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CustomerManagerLinkOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation>}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation>} value */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.setOperationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkRequest.prototype.clearOperationsList = function() {
  this.setOperationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  UPDATE: 2
};

/**
 * @return {proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.OperationCase}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.oneofGroups_[0]));
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
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation;
  return proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 2:
      var value = new google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink;
      reader.readMessage(value,google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink.deserializeBinaryFromReader);
      msg.setUpdate(value);
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
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v1.resources.CustomerManagerLink update = 2;
 * @return {?proto.google.ads.googleads.v1.resources.CustomerManagerLink}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.getUpdate = function() {
  return /** @type{?proto.google.ads.googleads.v1.resources.CustomerManagerLink} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink, 2));
};


/** @param {?proto.google.ads.googleads.v1.resources.CustomerManagerLink|undefined} value */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.setUpdate = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.clearUpdate = function() {
  this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.CustomerManagerLinkOperation.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.repeatedFields_ = [1];



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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse;
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MutateCustomerManagerLinkResult results = 1;
 * @return {!Array<!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult>}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult, 1));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult>} value */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResponse.prototype.clearResultsList = function() {
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult;
  return proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult}
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateCustomerManagerLinkResult.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v1.services);
