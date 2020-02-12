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

var google_type_expr_pb = require('../../../google/type/expr_pb.js');
goog.object.extend(proto, google_type_expr_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.iam.v1.AuditConfigDelta', null, global);
goog.exportSymbol('proto.google.iam.v1.AuditConfigDelta.Action', null, global);
goog.exportSymbol('proto.google.iam.v1.Binding', null, global);
goog.exportSymbol('proto.google.iam.v1.BindingDelta', null, global);
goog.exportSymbol('proto.google.iam.v1.BindingDelta.Action', null, global);
goog.exportSymbol('proto.google.iam.v1.Policy', null, global);
goog.exportSymbol('proto.google.iam.v1.PolicyDelta', null, global);
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
proto.google.iam.v1.Policy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.v1.Policy.repeatedFields_, null);
};
goog.inherits(proto.google.iam.v1.Policy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.Policy.displayName = 'proto.google.iam.v1.Policy';
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
proto.google.iam.v1.Binding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.v1.Binding.repeatedFields_, null);
};
goog.inherits(proto.google.iam.v1.Binding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.Binding.displayName = 'proto.google.iam.v1.Binding';
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
proto.google.iam.v1.PolicyDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.iam.v1.PolicyDelta.repeatedFields_, null);
};
goog.inherits(proto.google.iam.v1.PolicyDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.PolicyDelta.displayName = 'proto.google.iam.v1.PolicyDelta';
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
proto.google.iam.v1.BindingDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.v1.BindingDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.BindingDelta.displayName = 'proto.google.iam.v1.BindingDelta';
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
proto.google.iam.v1.AuditConfigDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.v1.AuditConfigDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.AuditConfigDelta.displayName = 'proto.google.iam.v1.AuditConfigDelta';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.v1.Policy.repeatedFields_ = [4];



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
proto.google.iam.v1.Policy.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.Policy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.Policy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.Policy.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bindingsList: jspb.Message.toObjectList(msg.getBindingsList(),
    proto.google.iam.v1.Binding.toObject, includeInstance),
    etag: msg.getEtag_asB64()
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
 * @return {!proto.google.iam.v1.Policy}
 */
proto.google.iam.v1.Policy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.Policy;
  return proto.google.iam.v1.Policy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.Policy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.Policy}
 */
proto.google.iam.v1.Policy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.google.iam.v1.Binding;
      reader.readMessage(value,proto.google.iam.v1.Binding.deserializeBinaryFromReader);
      msg.addBindings(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEtag(value);
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
proto.google.iam.v1.Policy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.Policy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.Policy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.Policy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.iam.v1.Binding.serializeBinaryToWriter
    );
  }
  f = message.getEtag_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.google.iam.v1.Policy.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.google.iam.v1.Policy.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Binding bindings = 4;
 * @return {!Array<!proto.google.iam.v1.Binding>}
 */
proto.google.iam.v1.Policy.prototype.getBindingsList = function() {
  return /** @type{!Array<!proto.google.iam.v1.Binding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.v1.Binding, 4));
};


/** @param {!Array<!proto.google.iam.v1.Binding>} value */
proto.google.iam.v1.Policy.prototype.setBindingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.iam.v1.Binding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.v1.Binding}
 */
proto.google.iam.v1.Policy.prototype.addBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.iam.v1.Binding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.iam.v1.Policy.prototype.clearBindingsList = function() {
  this.setBindingsList([]);
};


/**
 * optional bytes etag = 3;
 * @return {string}
 */
proto.google.iam.v1.Policy.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes etag = 3;
 * This is a type-conversion wrapper around `getEtag()`
 * @return {string}
 */
proto.google.iam.v1.Policy.prototype.getEtag_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEtag()));
};


/**
 * optional bytes etag = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEtag()`
 * @return {!Uint8Array}
 */
proto.google.iam.v1.Policy.prototype.getEtag_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEtag()));
};


/** @param {!(string|Uint8Array)} value */
proto.google.iam.v1.Policy.prototype.setEtag = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.v1.Binding.repeatedFields_ = [2];



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
proto.google.iam.v1.Binding.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.Binding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.Binding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.Binding.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getFieldWithDefault(msg, 1, ""),
    membersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    condition: (f = msg.getCondition()) && google_type_expr_pb.Expr.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.v1.Binding}
 */
proto.google.iam.v1.Binding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.Binding;
  return proto.google.iam.v1.Binding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.Binding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.Binding}
 */
proto.google.iam.v1.Binding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMembers(value);
      break;
    case 3:
      var value = new google_type_expr_pb.Expr;
      reader.readMessage(value,google_type_expr_pb.Expr.deserializeBinaryFromReader);
      msg.setCondition(value);
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
proto.google.iam.v1.Binding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.Binding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.Binding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.Binding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_type_expr_pb.Expr.serializeBinaryToWriter
    );
  }
};


/**
 * optional string role = 1;
 * @return {string}
 */
proto.google.iam.v1.Binding.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.iam.v1.Binding.prototype.setRole = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string members = 2;
 * @return {!Array<string>}
 */
proto.google.iam.v1.Binding.prototype.getMembersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.google.iam.v1.Binding.prototype.setMembersList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.iam.v1.Binding.prototype.addMembers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.iam.v1.Binding.prototype.clearMembersList = function() {
  this.setMembersList([]);
};


/**
 * optional google.type.Expr condition = 3;
 * @return {?proto.google.type.Expr}
 */
proto.google.iam.v1.Binding.prototype.getCondition = function() {
  return /** @type{?proto.google.type.Expr} */ (
    jspb.Message.getWrapperField(this, google_type_expr_pb.Expr, 3));
};


/** @param {?proto.google.type.Expr|undefined} value */
proto.google.iam.v1.Binding.prototype.setCondition = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.iam.v1.Binding.prototype.clearCondition = function() {
  this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.v1.Binding.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.iam.v1.PolicyDelta.repeatedFields_ = [1,2];



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
proto.google.iam.v1.PolicyDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.PolicyDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.PolicyDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.PolicyDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    bindingDeltasList: jspb.Message.toObjectList(msg.getBindingDeltasList(),
    proto.google.iam.v1.BindingDelta.toObject, includeInstance),
    auditConfigDeltasList: jspb.Message.toObjectList(msg.getAuditConfigDeltasList(),
    proto.google.iam.v1.AuditConfigDelta.toObject, includeInstance)
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
 * @return {!proto.google.iam.v1.PolicyDelta}
 */
proto.google.iam.v1.PolicyDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.PolicyDelta;
  return proto.google.iam.v1.PolicyDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.PolicyDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.PolicyDelta}
 */
proto.google.iam.v1.PolicyDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.iam.v1.BindingDelta;
      reader.readMessage(value,proto.google.iam.v1.BindingDelta.deserializeBinaryFromReader);
      msg.addBindingDeltas(value);
      break;
    case 2:
      var value = new proto.google.iam.v1.AuditConfigDelta;
      reader.readMessage(value,proto.google.iam.v1.AuditConfigDelta.deserializeBinaryFromReader);
      msg.addAuditConfigDeltas(value);
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
proto.google.iam.v1.PolicyDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.PolicyDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.PolicyDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.PolicyDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBindingDeltasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.iam.v1.BindingDelta.serializeBinaryToWriter
    );
  }
  f = message.getAuditConfigDeltasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.iam.v1.AuditConfigDelta.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BindingDelta binding_deltas = 1;
 * @return {!Array<!proto.google.iam.v1.BindingDelta>}
 */
proto.google.iam.v1.PolicyDelta.prototype.getBindingDeltasList = function() {
  return /** @type{!Array<!proto.google.iam.v1.BindingDelta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.v1.BindingDelta, 1));
};


/** @param {!Array<!proto.google.iam.v1.BindingDelta>} value */
proto.google.iam.v1.PolicyDelta.prototype.setBindingDeltasList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.iam.v1.BindingDelta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.v1.BindingDelta}
 */
proto.google.iam.v1.PolicyDelta.prototype.addBindingDeltas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.iam.v1.BindingDelta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.iam.v1.PolicyDelta.prototype.clearBindingDeltasList = function() {
  this.setBindingDeltasList([]);
};


/**
 * repeated AuditConfigDelta audit_config_deltas = 2;
 * @return {!Array<!proto.google.iam.v1.AuditConfigDelta>}
 */
proto.google.iam.v1.PolicyDelta.prototype.getAuditConfigDeltasList = function() {
  return /** @type{!Array<!proto.google.iam.v1.AuditConfigDelta>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.iam.v1.AuditConfigDelta, 2));
};


/** @param {!Array<!proto.google.iam.v1.AuditConfigDelta>} value */
proto.google.iam.v1.PolicyDelta.prototype.setAuditConfigDeltasList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.iam.v1.AuditConfigDelta=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.iam.v1.AuditConfigDelta}
 */
proto.google.iam.v1.PolicyDelta.prototype.addAuditConfigDeltas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.iam.v1.AuditConfigDelta, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.iam.v1.PolicyDelta.prototype.clearAuditConfigDeltasList = function() {
  this.setAuditConfigDeltasList([]);
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
proto.google.iam.v1.BindingDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.BindingDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.BindingDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.BindingDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: jspb.Message.getFieldWithDefault(msg, 2, ""),
    member: jspb.Message.getFieldWithDefault(msg, 3, ""),
    condition: (f = msg.getCondition()) && google_type_expr_pb.Expr.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.v1.BindingDelta}
 */
proto.google.iam.v1.BindingDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.BindingDelta;
  return proto.google.iam.v1.BindingDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.BindingDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.BindingDelta}
 */
proto.google.iam.v1.BindingDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.iam.v1.BindingDelta.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMember(value);
      break;
    case 4:
      var value = new google_type_expr_pb.Expr;
      reader.readMessage(value,google_type_expr_pb.Expr.deserializeBinaryFromReader);
      msg.setCondition(value);
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
proto.google.iam.v1.BindingDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.BindingDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.BindingDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.BindingDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMember();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_type_expr_pb.Expr.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.v1.BindingDelta.Action = {
  ACTION_UNSPECIFIED: 0,
  ADD: 1,
  REMOVE: 2
};

/**
 * optional Action action = 1;
 * @return {!proto.google.iam.v1.BindingDelta.Action}
 */
proto.google.iam.v1.BindingDelta.prototype.getAction = function() {
  return /** @type {!proto.google.iam.v1.BindingDelta.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.iam.v1.BindingDelta.Action} value */
proto.google.iam.v1.BindingDelta.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.google.iam.v1.BindingDelta.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.iam.v1.BindingDelta.prototype.setRole = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string member = 3;
 * @return {string}
 */
proto.google.iam.v1.BindingDelta.prototype.getMember = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.iam.v1.BindingDelta.prototype.setMember = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.type.Expr condition = 4;
 * @return {?proto.google.type.Expr}
 */
proto.google.iam.v1.BindingDelta.prototype.getCondition = function() {
  return /** @type{?proto.google.type.Expr} */ (
    jspb.Message.getWrapperField(this, google_type_expr_pb.Expr, 4));
};


/** @param {?proto.google.type.Expr|undefined} value */
proto.google.iam.v1.BindingDelta.prototype.setCondition = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.iam.v1.BindingDelta.prototype.clearCondition = function() {
  this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.v1.BindingDelta.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.google.iam.v1.AuditConfigDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.AuditConfigDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.AuditConfigDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.AuditConfigDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    service: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exemptedMember: jspb.Message.getFieldWithDefault(msg, 3, ""),
    logType: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.iam.v1.AuditConfigDelta}
 */
proto.google.iam.v1.AuditConfigDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.AuditConfigDelta;
  return proto.google.iam.v1.AuditConfigDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.AuditConfigDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.AuditConfigDelta}
 */
proto.google.iam.v1.AuditConfigDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.iam.v1.AuditConfigDelta.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExemptedMember(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogType(value);
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
proto.google.iam.v1.AuditConfigDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.AuditConfigDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.AuditConfigDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.AuditConfigDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExemptedMember();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLogType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.iam.v1.AuditConfigDelta.Action = {
  ACTION_UNSPECIFIED: 0,
  ADD: 1,
  REMOVE: 2
};

/**
 * optional Action action = 1;
 * @return {!proto.google.iam.v1.AuditConfigDelta.Action}
 */
proto.google.iam.v1.AuditConfigDelta.prototype.getAction = function() {
  return /** @type {!proto.google.iam.v1.AuditConfigDelta.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.iam.v1.AuditConfigDelta.Action} value */
proto.google.iam.v1.AuditConfigDelta.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string service = 2;
 * @return {string}
 */
proto.google.iam.v1.AuditConfigDelta.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.iam.v1.AuditConfigDelta.prototype.setService = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string exempted_member = 3;
 * @return {string}
 */
proto.google.iam.v1.AuditConfigDelta.prototype.getExemptedMember = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.iam.v1.AuditConfigDelta.prototype.setExemptedMember = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string log_type = 4;
 * @return {string}
 */
proto.google.iam.v1.AuditConfigDelta.prototype.getLogType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.iam.v1.AuditConfigDelta.prototype.setLogType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.google.iam.v1);
