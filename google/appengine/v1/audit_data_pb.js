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

var google_appengine_v1_appengine_pb = require('../../../google/appengine/v1/appengine_pb.js');
goog.object.extend(proto, google_appengine_v1_appengine_pb);
var google_iam_v1_iam_policy_pb = require('../../../google/iam/v1/iam_policy_pb.js');
goog.object.extend(proto, google_iam_v1_iam_policy_pb);
goog.exportSymbol('proto.google.appengine.v1.AuditData', null, global);
goog.exportSymbol('proto.google.appengine.v1.CreateVersionMethod', null, global);
goog.exportSymbol('proto.google.appengine.v1.UpdateServiceMethod', null, global);
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
proto.google.appengine.v1.AuditData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.appengine.v1.AuditData.oneofGroups_);
};
goog.inherits(proto.google.appengine.v1.AuditData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.appengine.v1.AuditData.displayName = 'proto.google.appengine.v1.AuditData';
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
proto.google.appengine.v1.UpdateServiceMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.appengine.v1.UpdateServiceMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.appengine.v1.UpdateServiceMethod.displayName = 'proto.google.appengine.v1.UpdateServiceMethod';
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
proto.google.appengine.v1.CreateVersionMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.appengine.v1.CreateVersionMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.appengine.v1.CreateVersionMethod.displayName = 'proto.google.appengine.v1.CreateVersionMethod';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.appengine.v1.AuditData.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.appengine.v1.AuditData.MethodCase = {
  METHOD_NOT_SET: 0,
  UPDATE_SERVICE: 1,
  CREATE_VERSION: 2
};

/**
 * @return {proto.google.appengine.v1.AuditData.MethodCase}
 */
proto.google.appengine.v1.AuditData.prototype.getMethodCase = function() {
  return /** @type {proto.google.appengine.v1.AuditData.MethodCase} */(jspb.Message.computeOneofCase(this, proto.google.appengine.v1.AuditData.oneofGroups_[0]));
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
proto.google.appengine.v1.AuditData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.appengine.v1.AuditData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.appengine.v1.AuditData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.AuditData.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateService: (f = msg.getUpdateService()) && proto.google.appengine.v1.UpdateServiceMethod.toObject(includeInstance, f),
    createVersion: (f = msg.getCreateVersion()) && proto.google.appengine.v1.CreateVersionMethod.toObject(includeInstance, f)
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
 * @return {!proto.google.appengine.v1.AuditData}
 */
proto.google.appengine.v1.AuditData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.appengine.v1.AuditData;
  return proto.google.appengine.v1.AuditData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.appengine.v1.AuditData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.appengine.v1.AuditData}
 */
proto.google.appengine.v1.AuditData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.appengine.v1.UpdateServiceMethod;
      reader.readMessage(value,proto.google.appengine.v1.UpdateServiceMethod.deserializeBinaryFromReader);
      msg.setUpdateService(value);
      break;
    case 2:
      var value = new proto.google.appengine.v1.CreateVersionMethod;
      reader.readMessage(value,proto.google.appengine.v1.CreateVersionMethod.deserializeBinaryFromReader);
      msg.setCreateVersion(value);
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
proto.google.appengine.v1.AuditData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.appengine.v1.AuditData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.appengine.v1.AuditData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.AuditData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.appengine.v1.UpdateServiceMethod.serializeBinaryToWriter
    );
  }
  f = message.getCreateVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.appengine.v1.CreateVersionMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional UpdateServiceMethod update_service = 1;
 * @return {?proto.google.appengine.v1.UpdateServiceMethod}
 */
proto.google.appengine.v1.AuditData.prototype.getUpdateService = function() {
  return /** @type{?proto.google.appengine.v1.UpdateServiceMethod} */ (
    jspb.Message.getWrapperField(this, proto.google.appengine.v1.UpdateServiceMethod, 1));
};


/** @param {?proto.google.appengine.v1.UpdateServiceMethod|undefined} value */
proto.google.appengine.v1.AuditData.prototype.setUpdateService = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.appengine.v1.AuditData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.appengine.v1.AuditData.prototype.clearUpdateService = function() {
  this.setUpdateService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.AuditData.prototype.hasUpdateService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CreateVersionMethod create_version = 2;
 * @return {?proto.google.appengine.v1.CreateVersionMethod}
 */
proto.google.appengine.v1.AuditData.prototype.getCreateVersion = function() {
  return /** @type{?proto.google.appengine.v1.CreateVersionMethod} */ (
    jspb.Message.getWrapperField(this, proto.google.appengine.v1.CreateVersionMethod, 2));
};


/** @param {?proto.google.appengine.v1.CreateVersionMethod|undefined} value */
proto.google.appengine.v1.AuditData.prototype.setCreateVersion = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.appengine.v1.AuditData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.appengine.v1.AuditData.prototype.clearCreateVersion = function() {
  this.setCreateVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.AuditData.prototype.hasCreateVersion = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.google.appengine.v1.UpdateServiceMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.google.appengine.v1.UpdateServiceMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.appengine.v1.UpdateServiceMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.UpdateServiceMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && google_appengine_v1_appengine_pb.UpdateServiceRequest.toObject(includeInstance, f)
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
 * @return {!proto.google.appengine.v1.UpdateServiceMethod}
 */
proto.google.appengine.v1.UpdateServiceMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.appengine.v1.UpdateServiceMethod;
  return proto.google.appengine.v1.UpdateServiceMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.appengine.v1.UpdateServiceMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.appengine.v1.UpdateServiceMethod}
 */
proto.google.appengine.v1.UpdateServiceMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_appengine_v1_appengine_pb.UpdateServiceRequest;
      reader.readMessage(value,google_appengine_v1_appengine_pb.UpdateServiceRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.google.appengine.v1.UpdateServiceMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.appengine.v1.UpdateServiceMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.appengine.v1.UpdateServiceMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.UpdateServiceMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_appengine_v1_appengine_pb.UpdateServiceRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional UpdateServiceRequest request = 1;
 * @return {?proto.google.appengine.v1.UpdateServiceRequest}
 */
proto.google.appengine.v1.UpdateServiceMethod.prototype.getRequest = function() {
  return /** @type{?proto.google.appengine.v1.UpdateServiceRequest} */ (
    jspb.Message.getWrapperField(this, google_appengine_v1_appengine_pb.UpdateServiceRequest, 1));
};


/** @param {?proto.google.appengine.v1.UpdateServiceRequest|undefined} value */
proto.google.appengine.v1.UpdateServiceMethod.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.appengine.v1.UpdateServiceMethod.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.UpdateServiceMethod.prototype.hasRequest = function() {
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
proto.google.appengine.v1.CreateVersionMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.google.appengine.v1.CreateVersionMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.appengine.v1.CreateVersionMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.CreateVersionMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && google_appengine_v1_appengine_pb.CreateVersionRequest.toObject(includeInstance, f)
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
 * @return {!proto.google.appengine.v1.CreateVersionMethod}
 */
proto.google.appengine.v1.CreateVersionMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.appengine.v1.CreateVersionMethod;
  return proto.google.appengine.v1.CreateVersionMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.appengine.v1.CreateVersionMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.appengine.v1.CreateVersionMethod}
 */
proto.google.appengine.v1.CreateVersionMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_appengine_v1_appengine_pb.CreateVersionRequest;
      reader.readMessage(value,google_appengine_v1_appengine_pb.CreateVersionRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.google.appengine.v1.CreateVersionMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.appengine.v1.CreateVersionMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.appengine.v1.CreateVersionMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.appengine.v1.CreateVersionMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_appengine_v1_appengine_pb.CreateVersionRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional CreateVersionRequest request = 1;
 * @return {?proto.google.appengine.v1.CreateVersionRequest}
 */
proto.google.appengine.v1.CreateVersionMethod.prototype.getRequest = function() {
  return /** @type{?proto.google.appengine.v1.CreateVersionRequest} */ (
    jspb.Message.getWrapperField(this, google_appengine_v1_appengine_pb.CreateVersionRequest, 1));
};


/** @param {?proto.google.appengine.v1.CreateVersionRequest|undefined} value */
proto.google.appengine.v1.CreateVersionMethod.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.appengine.v1.CreateVersionMethod.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.appengine.v1.CreateVersionMethod.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.google.appengine.v1);