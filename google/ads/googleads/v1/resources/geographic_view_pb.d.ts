import * as jspb from "google-protobuf"

import * as google_ads_googleads_v1_enums_geo_targeting_type_pb from '../../../../../google/ads/googleads/v1/enums/geo_targeting_type_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class GeographicView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getCountryGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCountryGeoTargetConstant(): boolean;
  clearCountryGeoTargetConstant(): void;

  getLocationType(): google_ads_googleads_v1_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingType;
  setLocationType(value: google_ads_googleads_v1_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeographicView.AsObject;
  static toObject(includeInstance: boolean, msg: GeographicView): GeographicView.AsObject;
  static serializeBinaryToWriter(message: GeographicView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeographicView;
  static deserializeBinaryFromReader(message: GeographicView, reader: jspb.BinaryReader): GeographicView;
}

export namespace GeographicView {
  export type AsObject = {
    resourceName: string,
    countryGeoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
    locationType: google_ads_googleads_v1_enums_geo_targeting_type_pb.GeoTargetingTypeEnum.GeoTargetingType,
  }
}

