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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.FeedMappingError', null, global);
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
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.displayName = 'proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum';
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
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum}
 */
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum;
  return proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum}
 */
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.errors.FeedMappingErrorEnum.FeedMappingError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  INVALID_PLACEHOLDER_FIELD: 2,
  INVALID_CRITERION_FIELD: 3,
  INVALID_PLACEHOLDER_TYPE: 4,
  INVALID_CRITERION_TYPE: 5,
  NO_ATTRIBUTE_FIELD_MAPPINGS: 7,
  FEED_ATTRIBUTE_TYPE_MISMATCH: 8,
  CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED: 9,
  MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE: 10,
  MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE: 11,
  MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD: 12,
  MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD: 13,
  UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS: 14,
  LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS: 15,
  CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED: 16,
  INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED: 17,
  INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE: 18
};

goog.object.extend(exports, proto.google.ads.googleads.v2.errors);
