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
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js');
goog.object.extend(proto, google_devtools_clouderrorreporting_v1beta1_common_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest', null, global);
goog.exportSymbol('proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse', null, global);
goog.exportSymbol('proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent', null, global);
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.displayName = 'proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest';
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.displayName = 'proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse';
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.displayName = 'proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent';
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    event: (f = msg.getEvent()) && proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest;
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 2:
      var value = new proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent;
      reader.readMessage(value,proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_name = 1;
 * @return {string}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.setProjectName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReportedErrorEvent event = 2;
 * @return {?proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.getEvent = function() {
  return /** @type{?proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent, 2));
};


/** @param {?proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent|undefined} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.setEvent = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.clearEvent = function() {
  this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest.prototype.hasEvent = function() {
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse;
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventTime: (f = msg.getEventTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    serviceContext: (f = msg.getServiceContext()) && google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    context: (f = msg.getContext()) && google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent;
  return proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEventTime(value);
      break;
    case 2:
      var value = new google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext;
      reader.readMessage(value,google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.deserializeBinaryFromReader);
      msg.setServiceContext(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = new google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext;
      reader.readMessage(value,google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext.deserializeBinaryFromReader);
      msg.setContext(value);
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getServiceContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp event_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.getEventTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.setEventTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.clearEventTime = function() {
  this.setEventTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.hasEventTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServiceContext service_context = 2;
 * @return {?proto.google.devtools.clouderrorreporting.v1beta1.ServiceContext}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.getServiceContext = function() {
  return /** @type{?proto.google.devtools.clouderrorreporting.v1beta1.ServiceContext} */ (
    jspb.Message.getWrapperField(this, google_devtools_clouderrorreporting_v1beta1_common_pb.ServiceContext, 2));
};


/** @param {?proto.google.devtools.clouderrorreporting.v1beta1.ServiceContext|undefined} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.setServiceContext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.clearServiceContext = function() {
  this.setServiceContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.hasServiceContext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ErrorContext context = 4;
 * @return {?proto.google.devtools.clouderrorreporting.v1beta1.ErrorContext}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.getContext = function() {
  return /** @type{?proto.google.devtools.clouderrorreporting.v1beta1.ErrorContext} */ (
    jspb.Message.getWrapperField(this, google_devtools_clouderrorreporting_v1beta1_common_pb.ErrorContext, 4));
};


/** @param {?proto.google.devtools.clouderrorreporting.v1beta1.ErrorContext|undefined} value */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.clearContext = function() {
  this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.prototype.hasContext = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.devtools.clouderrorreporting.v1beta1);
