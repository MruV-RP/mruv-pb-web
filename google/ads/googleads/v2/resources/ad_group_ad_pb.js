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

var google_ads_googleads_v2_common_policy_pb = require('../../../../../google/ads/googleads/v2/common/policy_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_common_policy_pb);
var google_ads_googleads_v2_enums_ad_group_ad_status_pb = require('../../../../../google/ads/googleads/v2/enums/ad_group_ad_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_ad_group_ad_status_pb);
var google_ads_googleads_v2_enums_ad_strength_pb = require('../../../../../google/ads/googleads/v2/enums/ad_strength_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_ad_strength_pb);
var google_ads_googleads_v2_enums_policy_approval_status_pb = require('../../../../../google/ads/googleads/v2/enums/policy_approval_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_policy_approval_status_pb);
var google_ads_googleads_v2_enums_policy_review_status_pb = require('../../../../../google/ads/googleads/v2/enums/policy_review_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_policy_review_status_pb);
var google_ads_googleads_v2_resources_ad_pb = require('../../../../../google/ads/googleads/v2/resources/ad_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_resources_ad_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.AdGroupAd', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary', null, global);
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
proto.google.ads.googleads.v2.resources.AdGroupAd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.AdGroupAd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.AdGroupAd.displayName = 'proto.google.ads.googleads.v2.resources.AdGroupAd';
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
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.displayName = 'proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary';
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
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.AdGroupAd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    adGroup: (f = msg.getAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    ad: (f = msg.getAd()) && google_ads_googleads_v2_resources_ad_pb.Ad.toObject(includeInstance, f),
    policySummary: (f = msg.getPolicySummary()) && proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.toObject(includeInstance, f),
    adStrength: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.google.ads.googleads.v2.resources.AdGroupAd}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.AdGroupAd;
  return proto.google.ads.googleads.v2.resources.AdGroupAd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.AdGroupAd}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.AdGroupAdStatusEnum.AdGroupAdStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroup(value);
      break;
    case 5:
      var value = new google_ads_googleads_v2_resources_ad_pb.Ad;
      reader.readMessage(value,google_ads_googleads_v2_resources_ad_pb.Ad.deserializeBinaryFromReader);
      msg.setAd(value);
      break;
    case 6:
      var value = new proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary;
      reader.readMessage(value,proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader);
      msg.setPolicySummary(value);
      break;
    case 7:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.AdStrengthEnum.AdStrength} */ (reader.readEnum());
      msg.setAdStrength(value);
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
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.AdGroupAd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAdGroup();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v2_resources_ad_pb.Ad.serializeBinaryToWriter
    );
  }
  f = message.getPolicySummary();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.serializeBinaryToWriter
    );
  }
  f = message.getAdStrength();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.ads.googleads.v2.enums.AdGroupAdStatusEnum.AdGroupAdStatus status = 3;
 * @return {!proto.google.ads.googleads.v2.enums.AdGroupAdStatusEnum.AdGroupAdStatus}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.AdGroupAdStatusEnum.AdGroupAdStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.AdGroupAdStatusEnum.AdGroupAdStatus} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue ad_group = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setAdGroup = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.clearAdGroup = function() {
  this.setAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.hasAdGroup = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Ad ad = 5;
 * @return {?proto.google.ads.googleads.v2.resources.Ad}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getAd = function() {
  return /** @type{?proto.google.ads.googleads.v2.resources.Ad} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_resources_ad_pb.Ad, 5));
};


/** @param {?proto.google.ads.googleads.v2.resources.Ad|undefined} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setAd = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.clearAd = function() {
  this.setAd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.hasAd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AdGroupAdPolicySummary policy_summary = 6;
 * @return {?proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getPolicySummary = function() {
  return /** @type{?proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary, 6));
};


/** @param {?proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary|undefined} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setPolicySummary = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.clearPolicySummary = function() {
  this.setPolicySummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.hasPolicySummary = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.ads.googleads.v2.enums.AdStrengthEnum.AdStrength ad_strength = 7;
 * @return {!proto.google.ads.googleads.v2.enums.AdStrengthEnum.AdStrength}
 */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.getAdStrength = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.AdStrengthEnum.AdStrength} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.AdStrengthEnum.AdStrength} value */
proto.google.ads.googleads.v2.resources.AdGroupAd.prototype.setAdStrength = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.repeatedFields_ = [1];



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
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyTopicEntriesList: jspb.Message.toObjectList(msg.getPolicyTopicEntriesList(),
    google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry.toObject, includeInstance),
    reviewStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    approvalStatus: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary;
  return proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry;
      reader.readMessage(value,google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry.deserializeBinaryFromReader);
      msg.addPolicyTopicEntries(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.PolicyReviewStatusEnum.PolicyReviewStatus} */ (reader.readEnum());
      msg.setReviewStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus} */ (reader.readEnum());
      msg.setApprovalStatus(value);
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
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyTopicEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry.serializeBinaryToWriter
    );
  }
  f = message.getReviewStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getApprovalStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated google.ads.googleads.v2.common.PolicyTopicEntry policy_topic_entries = 1;
 * @return {!Array<!proto.google.ads.googleads.v2.common.PolicyTopicEntry>}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.getPolicyTopicEntriesList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v2.common.PolicyTopicEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry, 1));
};


/** @param {!Array<!proto.google.ads.googleads.v2.common.PolicyTopicEntry>} value */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.setPolicyTopicEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.ads.googleads.v2.common.PolicyTopicEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v2.common.PolicyTopicEntry}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.addPolicyTopicEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.ads.googleads.v2.common.PolicyTopicEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.clearPolicyTopicEntriesList = function() {
  this.setPolicyTopicEntriesList([]);
};


/**
 * optional google.ads.googleads.v2.enums.PolicyReviewStatusEnum.PolicyReviewStatus review_status = 2;
 * @return {!proto.google.ads.googleads.v2.enums.PolicyReviewStatusEnum.PolicyReviewStatus}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.getReviewStatus = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.PolicyReviewStatusEnum.PolicyReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.PolicyReviewStatusEnum.PolicyReviewStatus} value */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.setReviewStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.ads.googleads.v2.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus approval_status = 3;
 * @return {!proto.google.ads.googleads.v2.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus}
 */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.getApprovalStatus = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.PolicyApprovalStatusEnum.PolicyApprovalStatus} value */
proto.google.ads.googleads.v2.resources.AdGroupAdPolicySummary.prototype.setApprovalStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);
