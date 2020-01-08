import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_click_location_pb from '../../../../../google/ads/googleads/v2/common/click_location_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ClickView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getGclid(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGclid(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGclid(): boolean;
  clearGclid(): void;

  getAreaOfInterest(): google_ads_googleads_v2_common_click_location_pb.ClickLocation | undefined;
  setAreaOfInterest(value?: google_ads_googleads_v2_common_click_location_pb.ClickLocation): void;
  hasAreaOfInterest(): boolean;
  clearAreaOfInterest(): void;

  getLocationOfPresence(): google_ads_googleads_v2_common_click_location_pb.ClickLocation | undefined;
  setLocationOfPresence(value?: google_ads_googleads_v2_common_click_location_pb.ClickLocation): void;
  hasLocationOfPresence(): boolean;
  clearLocationOfPresence(): void;

  getPageNumber(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPageNumber(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasPageNumber(): boolean;
  clearPageNumber(): void;

  getAdGroupAd(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupAd(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClickView.AsObject;
  static toObject(includeInstance: boolean, msg: ClickView): ClickView.AsObject;
  static serializeBinaryToWriter(message: ClickView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClickView;
  static deserializeBinaryFromReader(message: ClickView, reader: jspb.BinaryReader): ClickView;
}

export namespace ClickView {
  export type AsObject = {
    resourceName: string,
    gclid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    areaOfInterest?: google_ads_googleads_v2_common_click_location_pb.ClickLocation.AsObject,
    locationOfPresence?: google_ads_googleads_v2_common_click_location_pb.ClickLocation.AsObject,
    pageNumber?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    adGroupAd?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

