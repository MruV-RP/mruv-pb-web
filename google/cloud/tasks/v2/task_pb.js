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

var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_cloud_tasks_v2_target_pb = require('../../../../google/cloud/tasks/v2/target_pb.js');
goog.object.extend(proto, google_cloud_tasks_v2_target_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.cloud.tasks.v2.Attempt', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2.Task', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2.Task.View', null, global);
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
proto.google.cloud.tasks.v2.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.tasks.v2.Task.oneofGroups_);
};
goog.inherits(proto.google.cloud.tasks.v2.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2.Task.displayName = 'proto.google.cloud.tasks.v2.Task';
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
proto.google.cloud.tasks.v2.Attempt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2.Attempt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2.Attempt.displayName = 'proto.google.cloud.tasks.v2.Attempt';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.tasks.v2.Task.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2.Task.MessageTypeCase = {
  MESSAGE_TYPE_NOT_SET: 0,
  APP_ENGINE_HTTP_REQUEST: 2,
  HTTP_REQUEST: 3
};

/**
 * @return {proto.google.cloud.tasks.v2.Task.MessageTypeCase}
 */
proto.google.cloud.tasks.v2.Task.prototype.getMessageTypeCase = function() {
  return /** @type {proto.google.cloud.tasks.v2.Task.MessageTypeCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.tasks.v2.Task.oneofGroups_[0]));
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
proto.google.cloud.tasks.v2.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appEngineHttpRequest: (f = msg.getAppEngineHttpRequest()) && google_cloud_tasks_v2_target_pb.AppEngineHttpRequest.toObject(includeInstance, f),
    httpRequest: (f = msg.getHttpRequest()) && google_cloud_tasks_v2_target_pb.HttpRequest.toObject(includeInstance, f),
    scheduleTime: (f = msg.getScheduleTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dispatchDeadline: (f = msg.getDispatchDeadline()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    dispatchCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    responseCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    firstAttempt: (f = msg.getFirstAttempt()) && proto.google.cloud.tasks.v2.Attempt.toObject(includeInstance, f),
    lastAttempt: (f = msg.getLastAttempt()) && proto.google.cloud.tasks.v2.Attempt.toObject(includeInstance, f),
    view: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.google.cloud.tasks.v2.Task}
 */
proto.google.cloud.tasks.v2.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2.Task;
  return proto.google.cloud.tasks.v2.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2.Task}
 */
proto.google.cloud.tasks.v2.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_cloud_tasks_v2_target_pb.AppEngineHttpRequest;
      reader.readMessage(value,google_cloud_tasks_v2_target_pb.AppEngineHttpRequest.deserializeBinaryFromReader);
      msg.setAppEngineHttpRequest(value);
      break;
    case 3:
      var value = new google_cloud_tasks_v2_target_pb.HttpRequest;
      reader.readMessage(value,google_cloud_tasks_v2_target_pb.HttpRequest.deserializeBinaryFromReader);
      msg.setHttpRequest(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduleTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDispatchDeadline(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDispatchCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResponseCount(value);
      break;
    case 9:
      var value = new proto.google.cloud.tasks.v2.Attempt;
      reader.readMessage(value,proto.google.cloud.tasks.v2.Attempt.deserializeBinaryFromReader);
      msg.setFirstAttempt(value);
      break;
    case 10:
      var value = new proto.google.cloud.tasks.v2.Attempt;
      reader.readMessage(value,proto.google.cloud.tasks.v2.Attempt.deserializeBinaryFromReader);
      msg.setLastAttempt(value);
      break;
    case 11:
      var value = /** @type {!proto.google.cloud.tasks.v2.Task.View} */ (reader.readEnum());
      msg.setView(value);
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
proto.google.cloud.tasks.v2.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppEngineHttpRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_cloud_tasks_v2_target_pb.AppEngineHttpRequest.serializeBinaryToWriter
    );
  }
  f = message.getHttpRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_tasks_v2_target_pb.HttpRequest.serializeBinaryToWriter
    );
  }
  f = message.getScheduleTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDispatchDeadline();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDispatchCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getResponseCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getFirstAttempt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.cloud.tasks.v2.Attempt.serializeBinaryToWriter
    );
  }
  f = message.getLastAttempt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.cloud.tasks.v2.Attempt.serializeBinaryToWriter
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2.Task.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  FULL: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.tasks.v2.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.tasks.v2.Task.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppEngineHttpRequest app_engine_http_request = 2;
 * @return {?proto.google.cloud.tasks.v2.AppEngineHttpRequest}
 */
proto.google.cloud.tasks.v2.Task.prototype.getAppEngineHttpRequest = function() {
  return /** @type{?proto.google.cloud.tasks.v2.AppEngineHttpRequest} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2_target_pb.AppEngineHttpRequest, 2));
};


/** @param {?proto.google.cloud.tasks.v2.AppEngineHttpRequest|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setAppEngineHttpRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.cloud.tasks.v2.Task.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearAppEngineHttpRequest = function() {
  this.setAppEngineHttpRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasAppEngineHttpRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HttpRequest http_request = 3;
 * @return {?proto.google.cloud.tasks.v2.HttpRequest}
 */
proto.google.cloud.tasks.v2.Task.prototype.getHttpRequest = function() {
  return /** @type{?proto.google.cloud.tasks.v2.HttpRequest} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2_target_pb.HttpRequest, 3));
};


/** @param {?proto.google.cloud.tasks.v2.HttpRequest|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setHttpRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.tasks.v2.Task.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearHttpRequest = function() {
  this.setHttpRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasHttpRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp schedule_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2.Task.prototype.getScheduleTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setScheduleTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearScheduleTime = function() {
  this.setScheduleTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasScheduleTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2.Task.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration dispatch_deadline = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.tasks.v2.Task.prototype.getDispatchDeadline = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setDispatchDeadline = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearDispatchDeadline = function() {
  this.setDispatchDeadline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasDispatchDeadline = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 dispatch_count = 7;
 * @return {number}
 */
proto.google.cloud.tasks.v2.Task.prototype.getDispatchCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.google.cloud.tasks.v2.Task.prototype.setDispatchCount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 response_count = 8;
 * @return {number}
 */
proto.google.cloud.tasks.v2.Task.prototype.getResponseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.google.cloud.tasks.v2.Task.prototype.setResponseCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Attempt first_attempt = 9;
 * @return {?proto.google.cloud.tasks.v2.Attempt}
 */
proto.google.cloud.tasks.v2.Task.prototype.getFirstAttempt = function() {
  return /** @type{?proto.google.cloud.tasks.v2.Attempt} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2.Attempt, 9));
};


/** @param {?proto.google.cloud.tasks.v2.Attempt|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setFirstAttempt = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearFirstAttempt = function() {
  this.setFirstAttempt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasFirstAttempt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Attempt last_attempt = 10;
 * @return {?proto.google.cloud.tasks.v2.Attempt}
 */
proto.google.cloud.tasks.v2.Task.prototype.getLastAttempt = function() {
  return /** @type{?proto.google.cloud.tasks.v2.Attempt} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2.Attempt, 10));
};


/** @param {?proto.google.cloud.tasks.v2.Attempt|undefined} value */
proto.google.cloud.tasks.v2.Task.prototype.setLastAttempt = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Task.prototype.clearLastAttempt = function() {
  this.setLastAttempt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Task.prototype.hasLastAttempt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional View view = 11;
 * @return {!proto.google.cloud.tasks.v2.Task.View}
 */
proto.google.cloud.tasks.v2.Task.prototype.getView = function() {
  return /** @type {!proto.google.cloud.tasks.v2.Task.View} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.google.cloud.tasks.v2.Task.View} value */
proto.google.cloud.tasks.v2.Task.prototype.setView = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
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
proto.google.cloud.tasks.v2.Attempt.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2.Attempt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2.Attempt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2.Attempt.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduleTime: (f = msg.getScheduleTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dispatchTime: (f = msg.getDispatchTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    responseTime: (f = msg.getResponseTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    responseStatus: (f = msg.getResponseStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.tasks.v2.Attempt}
 */
proto.google.cloud.tasks.v2.Attempt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2.Attempt;
  return proto.google.cloud.tasks.v2.Attempt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2.Attempt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2.Attempt}
 */
proto.google.cloud.tasks.v2.Attempt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduleTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDispatchTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setResponseTime(value);
      break;
    case 4:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setResponseStatus(value);
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
proto.google.cloud.tasks.v2.Attempt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2.Attempt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2.Attempt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2.Attempt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDispatchTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp schedule_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.getScheduleTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.tasks.v2.Attempt.prototype.setScheduleTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Attempt.prototype.clearScheduleTime = function() {
  this.setScheduleTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.hasScheduleTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp dispatch_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.getDispatchTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.tasks.v2.Attempt.prototype.setDispatchTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Attempt.prototype.clearDispatchTime = function() {
  this.setDispatchTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.hasDispatchTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp response_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.getResponseTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.tasks.v2.Attempt.prototype.setResponseTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Attempt.prototype.clearResponseTime = function() {
  this.setResponseTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.hasResponseTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.rpc.Status response_status = 4;
 * @return {?proto.google.rpc.Status}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.getResponseStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 4));
};


/** @param {?proto.google.rpc.Status|undefined} value */
proto.google.cloud.tasks.v2.Attempt.prototype.setResponseStatus = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.tasks.v2.Attempt.prototype.clearResponseStatus = function() {
  this.setResponseStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2.Attempt.prototype.hasResponseStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.cloud.tasks.v2);