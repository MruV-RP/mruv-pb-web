import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_geo_target_constant_status_pb from '../../../../../google/ads/googleads/v1/enums/geo_target_constant_status_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class GeoTargetConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryCode(): boolean;
  clearCountryCode(): void;

  getTargetType(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetType(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTargetType(): boolean;
  clearTargetType(): void;

  getStatus(): google_ads_googleads_v1_enums_geo_target_constant_status_pb.GeoTargetConstantStatusEnum.GeoTargetConstantStatus;
  setStatus(value: google_ads_googleads_v1_enums_geo_target_constant_status_pb.GeoTargetConstantStatusEnum.GeoTargetConstantStatus): void;

  getCanonicalName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCanonicalName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCanonicalName(): boolean;
  clearCanonicalName(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetConstant.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetConstant): GeoTargetConstant.AsObject;
  static serializeBinaryToWriter(message: GeoTargetConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetConstant;
  static deserializeBinaryFromReader(message: GeoTargetConstant, reader: jspb.BinaryReader): GeoTargetConstant;
}

export namespace GeoTargetConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetType?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v1_enums_geo_target_constant_status_pb.GeoTargetConstantStatusEnum.GeoTargetConstantStatus,
    canonicalName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

