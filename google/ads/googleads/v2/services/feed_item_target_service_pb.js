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

var google_ads_googleads_v2_resources_feed_item_target_pb = require('../../../../../google/ads/googleads/v2/resources/feed_item_target_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_resources_feed_item_target_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.services.FeedItemTargetOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse', null, global);
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
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.displayName = 'proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest';
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.displayName = 'proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest';
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
proto.google.ads.googleads.v2.services.FeedItemTargetOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v2.services.FeedItemTargetOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.FeedItemTargetOperation.displayName = 'proto.google.ads.googleads.v2.services.FeedItemTargetOperation';
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.displayName = 'proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse';
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.displayName = 'proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult';
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
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest}
 */
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest;
  return proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest}
 */
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.GetFeedItemTargetRequest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.repeatedFields_ = [2];



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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v2.services.FeedItemTargetOperation.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest;
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.ads.googleads.v2.services.FeedItemTargetOperation;
      reader.readMessage(value,proto.google.ads.googleads.v2.services.FeedItemTargetOperation.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.ads.googleads.v2.services.FeedItemTargetOperation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.setCustomerId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FeedItemTargetOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v2.services.FeedItemTargetOperation>}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.services.FeedItemTargetOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v2.services.FeedItemTargetOperation, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v2.services.FeedItemTargetOperation>} value */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.setOperationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v2.services.FeedItemTargetOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsRequest.prototype.clearOperationsList = function() {
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
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  CREATE: 1,
  REMOVE: 2
};

/**
 * @return {proto.google.ads.googleads.v2.services.FeedItemTargetOperation.OperationCase}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v2.services.FeedItemTargetOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_[0]));
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
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.FeedItemTargetOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    create: (f = msg.getCreate()) && google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.toObject(includeInstance, f),
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
 * @return {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.FeedItemTargetOperation;
  return proto.google.ads.googleads.v2.services.FeedItemTargetOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget;
      reader.readMessage(value,google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.FeedItemTargetOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.FeedItemTargetOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.serializeBinaryToWriter
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
 * optional google.ads.googleads.v2.resources.FeedItemTarget create = 1;
 * @return {?proto.google.ads.googleads.v2.resources.FeedItemTarget}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.getCreate = function() {
  return /** @type{?proto.google.ads.googleads.v2.resources.FeedItemTarget} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget, 1));
};


/** @param {?proto.google.ads.googleads.v2.resources.FeedItemTarget|undefined} value */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.setCreate = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.clearCreate = function() {
  this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string remove = 2;
 * @return {string}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.getRemove = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.setRemove = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.clearRemove = function() {
  jspb.Message.setOneofField(this, 2, proto.google.ads.googleads.v2.services.FeedItemTargetOperation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.services.FeedItemTargetOperation.prototype.hasRemove = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.repeatedFields_ = [2];



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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse;
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult;
      reader.readMessage(value,proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.deserializeBinaryFromReader);
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MutateFeedItemTargetResult results = 2;
 * @return {!Array<!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult>}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult, 2));
};


/** @param {!Array<!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult>} value */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetsResponse.prototype.clearResultsList = function() {
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult;
  return proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult}
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.serializeBinaryToWriter = function(message, writer) {
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
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.services.MutateFeedItemTargetResult.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v2.services);