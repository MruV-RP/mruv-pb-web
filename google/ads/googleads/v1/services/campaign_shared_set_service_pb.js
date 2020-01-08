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

var google_ads_googleads_v1_resources_campaign_shared_set_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_resources_campaign_shared_set_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.services.CampaignSharedSetOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse', null, global);
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
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.displayName = 'proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest';
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.displayName = 'proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest';
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
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.services.CampaignSharedSetOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.displayName = 'proto.google.ads.googleads.v1.services.CampaignSharedSetOperation';
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.displayName = 'proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse';
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.displayName = 'proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult';
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
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest}
 */
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest;
  return proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest}
 */
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.GetCampaignSharedSetRequest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.repeatedFields_ = [2];



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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.toObject, includeInstance),
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest;
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.ads.googleads.v1.services.CampaignSharedSetOperation;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.serializeBinaryToWriter
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.setCustomerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CampaignSharedSetOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation>}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation>} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.setOperationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.clearOperationsList = function() {
  this.setOperationsList([]);
};


/**
 * optional bool partial_failure = 3;
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.getPartialFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.setPartialFailure = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool validate_only = 4;
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.getValidateOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsRequest.prototype.setValidateOnly = function(value) {
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
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_ = [[1,3]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  CREATE: 1,
  REMOVE: 3
};

/**
 * @return {proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.OperationCase}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_[0]));
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
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    create: (f = msg.getCreate()) && google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet.toObject(includeInstance, f),
    remove: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.CampaignSharedSetOperation;
  return proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet;
      reader.readMessage(value,google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet.deserializeBinaryFromReader);
      msg.setCreate(value);
      break;
    case 3:
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
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.CampaignSharedSetOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.ads.googleads.v1.resources.CampaignSharedSet create = 1;
 * @return {?proto.google.ads.googleads.v1.resources.CampaignSharedSet}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.getCreate = function() {
  return /** @type{?proto.google.ads.googleads.v1.resources.CampaignSharedSet} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_resources_campaign_shared_set_pb.CampaignSharedSet, 1));
};


/** @param {?proto.google.ads.googleads.v1.resources.CampaignSharedSet|undefined} value */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.setCreate = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.clearCreate = function() {
  this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string remove = 3;
 * @return {string}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.getRemove = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.setRemove = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.clearRemove = function() {
  jspb.Message.setOneofField(this, 3, proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.CampaignSharedSetOperation.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.repeatedFields_ = [2];



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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialFailureError: (f = msg.getPartialFailureError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse;
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult;
      reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.rpc.Status partial_failure_error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.getPartialFailureError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.setPartialFailureError = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.clearPartialFailureError = function() {
  this.setPartialFailureError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.hasPartialFailureError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MutateCampaignSharedSetResult results = 2;
 * @return {!Array<!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult>}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult>} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetsResponse.prototype.clearResultsList = function() {
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult;
  return proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult}
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.services.MutateCampaignSharedSetResult.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v1.services);
