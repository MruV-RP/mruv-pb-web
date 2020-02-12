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
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.AppEngineRouting', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.HttpMethod', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.PullMessage', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.PullTarget', null, global);
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
proto.google.cloud.tasks.v2beta2.PullTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.PullTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.PullTarget.displayName = 'proto.google.cloud.tasks.v2beta2.PullTarget';
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
proto.google.cloud.tasks.v2beta2.PullMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.PullMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.PullMessage.displayName = 'proto.google.cloud.tasks.v2beta2.PullMessage';
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.displayName = 'proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget';
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.displayName = 'proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest';
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
proto.google.cloud.tasks.v2beta2.AppEngineRouting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.AppEngineRouting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.AppEngineRouting.displayName = 'proto.google.cloud.tasks.v2beta2.AppEngineRouting';
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
proto.google.cloud.tasks.v2beta2.PullTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.PullTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.PullTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.PullTarget.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.cloud.tasks.v2beta2.PullTarget}
 */
proto.google.cloud.tasks.v2beta2.PullTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.PullTarget;
  return proto.google.cloud.tasks.v2beta2.PullTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.PullTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.PullTarget}
 */
proto.google.cloud.tasks.v2beta2.PullTarget.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.tasks.v2beta2.PullTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.PullTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.PullTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.PullTarget.serializeBinaryToWriter = function(message, writer) {
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
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.PullMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.PullMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.PullMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: msg.getPayload_asB64(),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.tasks.v2beta2.PullMessage}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.PullMessage;
  return proto.google.cloud.tasks.v2beta2.PullMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.PullMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.PullMessage}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
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
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.PullMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.PullMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.PullMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes payload = 1;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes payload = 1;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.PullMessage.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    appEngineRoutingOverride: (f = msg.getAppEngineRoutingOverride()) && proto.google.cloud.tasks.v2beta2.AppEngineRouting.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget;
  return proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.tasks.v2beta2.AppEngineRouting;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.AppEngineRouting.deserializeBinaryFromReader);
      msg.setAppEngineRoutingOverride(value);
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppEngineRoutingOverride();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.tasks.v2beta2.AppEngineRouting.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppEngineRouting app_engine_routing_override = 1;
 * @return {?proto.google.cloud.tasks.v2beta2.AppEngineRouting}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.getAppEngineRoutingOverride = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AppEngineRouting} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.AppEngineRouting, 1));
};


/** @param {?proto.google.cloud.tasks.v2beta2.AppEngineRouting|undefined} value */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.setAppEngineRoutingOverride = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.clearAppEngineRoutingOverride = function() {
  this.setAppEngineRoutingOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget.prototype.hasAppEngineRoutingOverride = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpMethod: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appEngineRouting: (f = msg.getAppEngineRouting()) && proto.google.cloud.tasks.v2beta2.AppEngineRouting.toObject(includeInstance, f),
    relativeUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : [],
    payload: msg.getPayload_asB64()
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
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest;
  return proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.tasks.v2beta2.HttpMethod} */ (reader.readEnum());
      msg.setHttpMethod(value);
      break;
    case 2:
      var value = new proto.google.cloud.tasks.v2beta2.AppEngineRouting;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.AppEngineRouting.deserializeBinaryFromReader);
      msg.setAppEngineRouting(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelativeUrl(value);
      break;
    case 4:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
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
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAppEngineRouting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.tasks.v2beta2.AppEngineRouting.serializeBinaryToWriter
    );
  }
  f = message.getRelativeUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional HttpMethod http_method = 1;
 * @return {!proto.google.cloud.tasks.v2beta2.HttpMethod}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getHttpMethod = function() {
  return /** @type {!proto.google.cloud.tasks.v2beta2.HttpMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.cloud.tasks.v2beta2.HttpMethod} value */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.setHttpMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AppEngineRouting app_engine_routing = 2;
 * @return {?proto.google.cloud.tasks.v2beta2.AppEngineRouting}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getAppEngineRouting = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AppEngineRouting} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.AppEngineRouting, 2));
};


/** @param {?proto.google.cloud.tasks.v2beta2.AppEngineRouting|undefined} value */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.setAppEngineRouting = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.clearAppEngineRouting = function() {
  this.setAppEngineRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.hasAppEngineRouting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string relative_url = 3;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getRelativeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.setRelativeUrl = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> headers = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
};


/**
 * optional bytes payload = 5;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes payload = 5;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest.prototype.setPayload = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
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
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.AppEngineRouting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineRouting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    instance: jspb.Message.getFieldWithDefault(msg, 3, ""),
    host: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineRouting}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.AppEngineRouting;
  return proto.google.cloud.tasks.v2beta2.AppEngineRouting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineRouting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.AppEngineRouting}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
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
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.AppEngineRouting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.AppEngineRouting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.setService = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string instance = 3;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.getInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.setInstance = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string host = 4;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2beta2.AppEngineRouting.prototype.setHost = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.HttpMethod = {
  HTTP_METHOD_UNSPECIFIED: 0,
  POST: 1,
  GET: 2,
  HEAD: 3,
  PUT: 4,
  DELETE: 5
};

goog.object.extend(exports, proto.google.cloud.tasks.v2beta2);
