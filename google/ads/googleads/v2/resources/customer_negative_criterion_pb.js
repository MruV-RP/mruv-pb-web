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

var google_ads_googleads_v2_common_criteria_pb = require('../../../../../google/ads/googleads/v2/common/criteria_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_common_criteria_pb);
var google_ads_googleads_v2_enums_criterion_type_pb = require('../../../../../google/ads/googleads/v2/enums/criterion_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_criterion_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion', null, global);
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
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.displayName = 'proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_ = [[4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.CriterionCase = {
  CRITERION_NOT_SET: 0,
  CONTENT_LABEL: 4,
  MOBILE_APPLICATION: 5,
  MOBILE_APP_CATEGORY: 6,
  PLACEMENT: 7,
  YOUTUBE_VIDEO: 8,
  YOUTUBE_CHANNEL: 9
};

/**
 * @return {proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.CriterionCase}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getCriterionCase = function() {
  return /** @type {proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.CriterionCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0]));
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
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    contentLabel: (f = msg.getContentLabel()) && google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.toObject(includeInstance, f),
    mobileApplication: (f = msg.getMobileApplication()) && google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.toObject(includeInstance, f),
    mobileAppCategory: (f = msg.getMobileAppCategory()) && google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.toObject(includeInstance, f),
    placement: (f = msg.getPlacement()) && google_ads_googleads_v2_common_criteria_pb.PlacementInfo.toObject(includeInstance, f),
    youtubeVideo: (f = msg.getYoutubeVideo()) && google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.toObject(includeInstance, f),
    youtubeChannel: (f = msg.getYoutubeChannel()) && google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion;
  return proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.ads.googleads.v2.enums.CriterionTypeEnum.CriterionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.deserializeBinaryFromReader);
      msg.setContentLabel(value);
      break;
    case 5:
      var value = new google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.deserializeBinaryFromReader);
      msg.setMobileApplication(value);
      break;
    case 6:
      var value = new google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.deserializeBinaryFromReader);
      msg.setMobileAppCategory(value);
      break;
    case 7:
      var value = new google_ads_googleads_v2_common_criteria_pb.PlacementInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.PlacementInfo.deserializeBinaryFromReader);
      msg.setPlacement(value);
      break;
    case 8:
      var value = new google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.deserializeBinaryFromReader);
      msg.setYoutubeVideo(value);
      break;
    case 9:
      var value = new google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.deserializeBinaryFromReader);
      msg.setYoutubeChannel(value);
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
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContentLabel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.serializeBinaryToWriter
    );
  }
  f = message.getMobileApplication();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.serializeBinaryToWriter
    );
  }
  f = message.getMobileAppCategory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlacement();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v2_common_criteria_pb.PlacementInfo.serializeBinaryToWriter
    );
  }
  f = message.getYoutubeVideo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.serializeBinaryToWriter
    );
  }
  f = message.getYoutubeChannel();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v2.enums.CriterionTypeEnum.CriterionType type = 3;
 * @return {!proto.google.ads.googleads.v2.enums.CriterionTypeEnum.CriterionType}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getType = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.CriterionTypeEnum.CriterionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.CriterionTypeEnum.CriterionType} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.ads.googleads.v2.common.ContentLabelInfo content_label = 4;
 * @return {?proto.google.ads.googleads.v2.common.ContentLabelInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getContentLabel = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.ContentLabelInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo, 4));
};


/** @param {?proto.google.ads.googleads.v2.common.ContentLabelInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setContentLabel = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearContentLabel = function() {
  this.setContentLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasContentLabel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v2.common.MobileApplicationInfo mobile_application = 5;
 * @return {?proto.google.ads.googleads.v2.common.MobileApplicationInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getMobileApplication = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.MobileApplicationInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo, 5));
};


/** @param {?proto.google.ads.googleads.v2.common.MobileApplicationInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setMobileApplication = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearMobileApplication = function() {
  this.setMobileApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasMobileApplication = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.ads.googleads.v2.common.MobileAppCategoryInfo mobile_app_category = 6;
 * @return {?proto.google.ads.googleads.v2.common.MobileAppCategoryInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getMobileAppCategory = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.MobileAppCategoryInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo, 6));
};


/** @param {?proto.google.ads.googleads.v2.common.MobileAppCategoryInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setMobileAppCategory = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearMobileAppCategory = function() {
  this.setMobileAppCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasMobileAppCategory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.ads.googleads.v2.common.PlacementInfo placement = 7;
 * @return {?proto.google.ads.googleads.v2.common.PlacementInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getPlacement = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.PlacementInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.PlacementInfo, 7));
};


/** @param {?proto.google.ads.googleads.v2.common.PlacementInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setPlacement = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearPlacement = function() {
  this.setPlacement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasPlacement = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.ads.googleads.v2.common.YouTubeVideoInfo youtube_video = 8;
 * @return {?proto.google.ads.googleads.v2.common.YouTubeVideoInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getYoutubeVideo = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.YouTubeVideoInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo, 8));
};


/** @param {?proto.google.ads.googleads.v2.common.YouTubeVideoInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setYoutubeVideo = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearYoutubeVideo = function() {
  this.setYoutubeVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasYoutubeVideo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.ads.googleads.v2.common.YouTubeChannelInfo youtube_channel = 9;
 * @return {?proto.google.ads.googleads.v2.common.YouTubeChannelInfo}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.getYoutubeChannel = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.YouTubeChannelInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo, 9));
};


/** @param {?proto.google.ads.googleads.v2.common.YouTubeChannelInfo|undefined} value */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.setYoutubeChannel = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.clearYoutubeChannel = function() {
  this.setYoutubeChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.CustomerNegativeCriterion.prototype.hasYoutubeChannel = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);
