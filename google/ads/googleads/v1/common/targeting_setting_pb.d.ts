import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_targeting_dimension_pb from '../../../../../google/ads/googleads/v1/enums/targeting_dimension_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class TargetingSetting extends jspb.Message {
  getTargetRestrictionsList(): Array<TargetRestriction>;
  setTargetRestrictionsList(value: Array<TargetRestriction>): void;
  clearTargetRestrictionsList(): void;
  addTargetRestrictions(value?: TargetRestriction, index?: number): TargetRestriction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: TargetingSetting): TargetingSetting.AsObject;
  static serializeBinaryToWriter(message: TargetingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetingSetting;
  static deserializeBinaryFromReader(message: TargetingSetting, reader: jspb.BinaryReader): TargetingSetting;
}

export namespace TargetingSetting {
  export type AsObject = {
    targetRestrictionsList: Array<TargetRestriction.AsObject>,
  }
}

export class TargetRestriction extends jspb.Message {
  getTargetingDimension(): google_ads_googleads_v1_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension;
  setTargetingDimension(value: google_ads_googleads_v1_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension): void;

  getBidOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setBidOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasBidOnly(): boolean;
  clearBidOnly(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetRestriction.AsObject;
  static toObject(includeInstance: boolean, msg: TargetRestriction): TargetRestriction.AsObject;
  static serializeBinaryToWriter(message: TargetRestriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetRestriction;
  static deserializeBinaryFromReader(message: TargetRestriction, reader: jspb.BinaryReader): TargetRestriction;
}

export namespace TargetRestriction {
  export type AsObject = {
    targetingDimension: google_ads_googleads_v1_enums_targeting_dimension_pb.TargetingDimensionEnum.TargetingDimension,
    bidOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

