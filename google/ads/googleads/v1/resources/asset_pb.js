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

var google_ads_googleads_v1_common_asset_types_pb = require('../../../../../google/ads/googleads/v1/common/asset_types_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_common_asset_types_pb);
var google_ads_googleads_v1_enums_asset_type_pb = require('../../../../../google/ads/googleads/v1/enums/asset_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v1_enums_asset_type_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.resources.Asset', null, global);
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
proto.google.ads.googleads.v1.resources.Asset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.resources.Asset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.resources.Asset.displayName = 'proto.google.ads.googleads.v1.resources.Asset';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v1.resources.Asset.oneofGroups_ = [[5,6,7,8]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.resources.Asset.AssetDataCase = {
  ASSET_DATA_NOT_SET: 0,
  YOUTUBE_VIDEO_ASSET: 5,
  MEDIA_BUNDLE_ASSET: 6,
  IMAGE_ASSET: 7,
  TEXT_ASSET: 8
};

/**
 * @return {proto.google.ads.googleads.v1.resources.Asset.AssetDataCase}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getAssetDataCase = function() {
  return /** @type {proto.google.ads.googleads.v1.resources.Asset.AssetDataCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_[0]));
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
proto.google.ads.googleads.v1.resources.Asset.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.Asset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.Asset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.Asset.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    youtubeVideoAsset: (f = msg.getYoutubeVideoAsset()) && google_ads_googleads_v1_common_asset_types_pb.YoutubeVideoAsset.toObject(includeInstance, f),
    mediaBundleAsset: (f = msg.getMediaBundleAsset()) && google_ads_googleads_v1_common_asset_types_pb.MediaBundleAsset.toObject(includeInstance, f),
    imageAsset: (f = msg.getImageAsset()) && google_ads_googleads_v1_common_asset_types_pb.ImageAsset.toObject(includeInstance, f),
    textAsset: (f = msg.getTextAsset()) && google_ads_googleads_v1_common_asset_types_pb.TextAsset.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.resources.Asset}
 */
proto.google.ads.googleads.v1.resources.Asset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.Asset;
  return proto.google.ads.googleads.v1.resources.Asset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.Asset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.Asset}
 */
proto.google.ads.googleads.v1.resources.Asset.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.AssetTypeEnum.AssetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new google_ads_googleads_v1_common_asset_types_pb.YoutubeVideoAsset;
      reader.readMessage(value,google_ads_googleads_v1_common_asset_types_pb.YoutubeVideoAsset.deserializeBinaryFromReader);
      msg.setYoutubeVideoAsset(value);
      break;
    case 6:
      var value = new google_ads_googleads_v1_common_asset_types_pb.MediaBundleAsset;
      reader.readMessage(value,google_ads_googleads_v1_common_asset_types_pb.MediaBundleAsset.deserializeBinaryFromReader);
      msg.setMediaBundleAsset(value);
      break;
    case 7:
      var value = new google_ads_googleads_v1_common_asset_types_pb.ImageAsset;
      reader.readMessage(value,google_ads_googleads_v1_common_asset_types_pb.ImageAsset.deserializeBinaryFromReader);
      msg.setImageAsset(value);
      break;
    case 8:
      var value = new google_ads_googleads_v1_common_asset_types_pb.TextAsset;
      reader.readMessage(value,google_ads_googleads_v1_common_asset_types_pb.TextAsset.deserializeBinaryFromReader);
      msg.setTextAsset(value);
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
proto.google.ads.googleads.v1.resources.Asset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.Asset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.Asset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.Asset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getYoutubeVideoAsset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v1_common_asset_types_pb.YoutubeVideoAsset.serializeBinaryToWriter
    );
  }
  f = message.getMediaBundleAsset();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_ads_googleads_v1_common_asset_types_pb.MediaBundleAsset.serializeBinaryToWriter
    );
  }
  f = message.getImageAsset();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v1_common_asset_types_pb.ImageAsset.serializeBinaryToWriter
    );
  }
  f = message.getTextAsset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_ads_googleads_v1_common_asset_types_pb.TextAsset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue name = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.ads.googleads.v1.enums.AssetTypeEnum.AssetType type = 4;
 * @return {!proto.google.ads.googleads.v1.enums.AssetTypeEnum.AssetType}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.AssetTypeEnum.AssetType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.AssetTypeEnum.AssetType} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.ads.googleads.v1.common.YoutubeVideoAsset youtube_video_asset = 5;
 * @return {?proto.google.ads.googleads.v1.common.YoutubeVideoAsset}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getYoutubeVideoAsset = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.YoutubeVideoAsset} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_asset_types_pb.YoutubeVideoAsset, 5));
};


/** @param {?proto.google.ads.googleads.v1.common.YoutubeVideoAsset|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setYoutubeVideoAsset = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearYoutubeVideoAsset = function() {
  this.setYoutubeVideoAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasYoutubeVideoAsset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.ads.googleads.v1.common.MediaBundleAsset media_bundle_asset = 6;
 * @return {?proto.google.ads.googleads.v1.common.MediaBundleAsset}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getMediaBundleAsset = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.MediaBundleAsset} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_asset_types_pb.MediaBundleAsset, 6));
};


/** @param {?proto.google.ads.googleads.v1.common.MediaBundleAsset|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setMediaBundleAsset = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearMediaBundleAsset = function() {
  this.setMediaBundleAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasMediaBundleAsset = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.ads.googleads.v1.common.ImageAsset image_asset = 7;
 * @return {?proto.google.ads.googleads.v1.common.ImageAsset}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getImageAsset = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.ImageAsset} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_asset_types_pb.ImageAsset, 7));
};


/** @param {?proto.google.ads.googleads.v1.common.ImageAsset|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setImageAsset = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearImageAsset = function() {
  this.setImageAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasImageAsset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.ads.googleads.v1.common.TextAsset text_asset = 8;
 * @return {?proto.google.ads.googleads.v1.common.TextAsset}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.getTextAsset = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.TextAsset} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_asset_types_pb.TextAsset, 8));
};


/** @param {?proto.google.ads.googleads.v1.common.TextAsset|undefined} value */
proto.google.ads.googleads.v1.resources.Asset.prototype.setTextAsset = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.ads.googleads.v1.resources.Asset.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.clearTextAsset = function() {
  this.setTextAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v1.resources.Asset.prototype.hasTextAsset = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
