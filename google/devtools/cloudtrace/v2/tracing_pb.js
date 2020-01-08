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
var google_devtools_cloudtrace_v2_trace_pb = require('../../../../google/devtools/cloudtrace/v2/trace_pb.js');
goog.object.extend(proto, google_devtools_cloudtrace_v2_trace_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest', null, global);
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
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.displayName = 'proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.repeatedFields_ = [2];



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
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    spansList: jspb.Message.toObjectList(msg.getSpansList(),
    google_devtools_cloudtrace_v2_trace_pb.Span.toObject, includeInstance)
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
 * @return {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest}
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest;
  return proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest}
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_devtools_cloudtrace_v2_trace_pb.Span;
      reader.readMessage(value,google_devtools_cloudtrace_v2_trace_pb.Span.deserializeBinaryFromReader);
      msg.addSpans(value);
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
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_devtools_cloudtrace_v2_trace_pb.Span.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Span spans = 2;
 * @return {!Array<!proto.google.devtools.cloudtrace.v2.Span>}
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.getSpansList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudtrace.v2.Span>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_devtools_cloudtrace_v2_trace_pb.Span, 2));
};


/** @param {!Array<!proto.google.devtools.cloudtrace.v2.Span>} value */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.setSpansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v2.Span=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudtrace.v2.Span}
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.addSpans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.devtools.cloudtrace.v2.Span, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest.prototype.clearSpansList = function() {
  this.setSpansList([]);
};


goog.object.extend(exports, proto.google.devtools.cloudtrace.v2);
