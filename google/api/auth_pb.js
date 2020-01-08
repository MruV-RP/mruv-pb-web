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

goog.exportSymbol('proto.google.api.AuthProvider', null, global);
goog.exportSymbol('proto.google.api.AuthRequirement', null, global);
goog.exportSymbol('proto.google.api.Authentication', null, global);
goog.exportSymbol('proto.google.api.AuthenticationRule', null, global);
goog.exportSymbol('proto.google.api.OAuthRequirements', null, global);
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
proto.google.api.Authentication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Authentication.repeatedFields_, null);
};
goog.inherits(proto.google.api.Authentication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Authentication.displayName = 'proto.google.api.Authentication';
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
proto.google.api.AuthenticationRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.AuthenticationRule.repeatedFields_, null);
};
goog.inherits(proto.google.api.AuthenticationRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.AuthenticationRule.displayName = 'proto.google.api.AuthenticationRule';
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
proto.google.api.AuthProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.AuthProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.AuthProvider.displayName = 'proto.google.api.AuthProvider';
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
proto.google.api.OAuthRequirements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.OAuthRequirements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.OAuthRequirements.displayName = 'proto.google.api.OAuthRequirements';
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
proto.google.api.AuthRequirement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.AuthRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.AuthRequirement.displayName = 'proto.google.api.AuthRequirement';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Authentication.repeatedFields_ = [3,4];



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
proto.google.api.Authentication.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Authentication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Authentication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Authentication.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.AuthenticationRule.toObject, includeInstance),
    providersList: jspb.Message.toObjectList(msg.getProvidersList(),
    proto.google.api.AuthProvider.toObject, includeInstance)
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
 * @return {!proto.google.api.Authentication}
 */
proto.google.api.Authentication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Authentication;
  return proto.google.api.Authentication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Authentication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Authentication}
 */
proto.google.api.Authentication.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.google.api.AuthenticationRule;
      reader.readMessage(value,proto.google.api.AuthenticationRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 4:
      var value = new proto.google.api.AuthProvider;
      reader.readMessage(value,proto.google.api.AuthProvider.deserializeBinaryFromReader);
      msg.addProviders(value);
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
proto.google.api.Authentication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Authentication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Authentication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Authentication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.api.AuthenticationRule.serializeBinaryToWriter
    );
  }
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.api.AuthProvider.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthenticationRule rules = 3;
 * @return {!Array<!proto.google.api.AuthenticationRule>}
 */
proto.google.api.Authentication.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.AuthenticationRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.AuthenticationRule, 3));
};


/** @param {!Array<!proto.google.api.AuthenticationRule>} value */
proto.google.api.Authentication.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.AuthenticationRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.AuthenticationRule}
 */
proto.google.api.Authentication.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.AuthenticationRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.Authentication.prototype.clearRulesList = function() {
  this.setRulesList([]);
};


/**
 * repeated AuthProvider providers = 4;
 * @return {!Array<!proto.google.api.AuthProvider>}
 */
proto.google.api.Authentication.prototype.getProvidersList = function() {
  return /** @type{!Array<!proto.google.api.AuthProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.AuthProvider, 4));
};


/** @param {!Array<!proto.google.api.AuthProvider>} value */
proto.google.api.Authentication.prototype.setProvidersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.api.AuthProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.AuthProvider}
 */
proto.google.api.Authentication.prototype.addProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.api.AuthProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.Authentication.prototype.clearProvidersList = function() {
  this.setProvidersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.AuthenticationRule.repeatedFields_ = [7];



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
proto.google.api.AuthenticationRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.AuthenticationRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.AuthenticationRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthenticationRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oauth: (f = msg.getOauth()) && proto.google.api.OAuthRequirements.toObject(includeInstance, f),
    allowWithoutCredential: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    requirementsList: jspb.Message.toObjectList(msg.getRequirementsList(),
    proto.google.api.AuthRequirement.toObject, includeInstance)
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
 * @return {!proto.google.api.AuthenticationRule}
 */
proto.google.api.AuthenticationRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.AuthenticationRule;
  return proto.google.api.AuthenticationRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.AuthenticationRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.AuthenticationRule}
 */
proto.google.api.AuthenticationRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = new proto.google.api.OAuthRequirements;
      reader.readMessage(value,proto.google.api.OAuthRequirements.deserializeBinaryFromReader);
      msg.setOauth(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowWithoutCredential(value);
      break;
    case 7:
      var value = new proto.google.api.AuthRequirement;
      reader.readMessage(value,proto.google.api.AuthRequirement.deserializeBinaryFromReader);
      msg.addRequirements(value);
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
proto.google.api.AuthenticationRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.AuthenticationRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.AuthenticationRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthenticationRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOauth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.api.OAuthRequirements.serializeBinaryToWriter
    );
  }
  f = message.getAllowWithoutCredential();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRequirementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.api.AuthRequirement.serializeBinaryToWriter
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.AuthenticationRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.AuthenticationRule.prototype.setSelector = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OAuthRequirements oauth = 2;
 * @return {?proto.google.api.OAuthRequirements}
 */
proto.google.api.AuthenticationRule.prototype.getOauth = function() {
  return /** @type{?proto.google.api.OAuthRequirements} */ (
    jspb.Message.getWrapperField(this, proto.google.api.OAuthRequirements, 2));
};


/** @param {?proto.google.api.OAuthRequirements|undefined} value */
proto.google.api.AuthenticationRule.prototype.setOauth = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.api.AuthenticationRule.prototype.clearOauth = function() {
  this.setOauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.AuthenticationRule.prototype.hasOauth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool allow_without_credential = 5;
 * @return {boolean}
 */
proto.google.api.AuthenticationRule.prototype.getAllowWithoutCredential = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.google.api.AuthenticationRule.prototype.setAllowWithoutCredential = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated AuthRequirement requirements = 7;
 * @return {!Array<!proto.google.api.AuthRequirement>}
 */
proto.google.api.AuthenticationRule.prototype.getRequirementsList = function() {
  return /** @type{!Array<!proto.google.api.AuthRequirement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.AuthRequirement, 7));
};


/** @param {!Array<!proto.google.api.AuthRequirement>} value */
proto.google.api.AuthenticationRule.prototype.setRequirementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.api.AuthRequirement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.AuthRequirement}
 */
proto.google.api.AuthenticationRule.prototype.addRequirements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.api.AuthRequirement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.AuthenticationRule.prototype.clearRequirementsList = function() {
  this.setRequirementsList([]);
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
proto.google.api.AuthProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.AuthProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.AuthProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    issuer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jwksUri: jspb.Message.getFieldWithDefault(msg, 3, ""),
    audiences: jspb.Message.getFieldWithDefault(msg, 4, ""),
    authorizationUrl: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.api.AuthProvider}
 */
proto.google.api.AuthProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.AuthProvider;
  return proto.google.api.AuthProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.AuthProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.AuthProvider}
 */
proto.google.api.AuthProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwksUri(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudiences(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationUrl(value);
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
proto.google.api.AuthProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.AuthProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.AuthProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJwksUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAudiences();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuthorizationUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.google.api.AuthProvider.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.AuthProvider.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string issuer = 2;
 * @return {string}
 */
proto.google.api.AuthProvider.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.AuthProvider.prototype.setIssuer = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string jwks_uri = 3;
 * @return {string}
 */
proto.google.api.AuthProvider.prototype.getJwksUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.AuthProvider.prototype.setJwksUri = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string audiences = 4;
 * @return {string}
 */
proto.google.api.AuthProvider.prototype.getAudiences = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.api.AuthProvider.prototype.setAudiences = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string authorization_url = 5;
 * @return {string}
 */
proto.google.api.AuthProvider.prototype.getAuthorizationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.api.AuthProvider.prototype.setAuthorizationUrl = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
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
proto.google.api.OAuthRequirements.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.OAuthRequirements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.OAuthRequirements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.OAuthRequirements.toObject = function(includeInstance, msg) {
  var f, obj = {
    canonicalScopes: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.api.OAuthRequirements}
 */
proto.google.api.OAuthRequirements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.OAuthRequirements;
  return proto.google.api.OAuthRequirements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.OAuthRequirements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.OAuthRequirements}
 */
proto.google.api.OAuthRequirements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCanonicalScopes(value);
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
proto.google.api.OAuthRequirements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.OAuthRequirements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.OAuthRequirements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.OAuthRequirements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanonicalScopes();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string canonical_scopes = 1;
 * @return {string}
 */
proto.google.api.OAuthRequirements.prototype.getCanonicalScopes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.OAuthRequirements.prototype.setCanonicalScopes = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.google.api.AuthRequirement.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.AuthRequirement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.AuthRequirement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthRequirement.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audiences: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.api.AuthRequirement}
 */
proto.google.api.AuthRequirement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.AuthRequirement;
  return proto.google.api.AuthRequirement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.AuthRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.AuthRequirement}
 */
proto.google.api.AuthRequirement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudiences(value);
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
proto.google.api.AuthRequirement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.AuthRequirement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.AuthRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.AuthRequirement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudiences();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string provider_id = 1;
 * @return {string}
 */
proto.google.api.AuthRequirement.prototype.getProviderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.AuthRequirement.prototype.setProviderId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string audiences = 2;
 * @return {string}
 */
proto.google.api.AuthRequirement.prototype.getAudiences = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.AuthRequirement.prototype.setAudiences = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.api);
