import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_placement_type_pb from '../../../../../google/ads/googleads/v2/enums/placement_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DetailPlacementView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPlacement(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPlacement(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPlacement(): boolean;
  clearPlacement(): void;

  getDisplayName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasDisplayName(): boolean;
  clearDisplayName(): void;

  getGroupPlacementTargetUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGroupPlacementTargetUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasGroupPlacementTargetUrl(): boolean;
  clearGroupPlacementTargetUrl(): void;

  getTargetUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTargetUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTargetUrl(): boolean;
  clearTargetUrl(): void;

  getPlacementType(): google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType;
  setPlacementType(value: google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailPlacementView.AsObject;
  static toObject(includeInstance: boolean, msg: DetailPlacementView): DetailPlacementView.AsObject;
  static serializeBinaryToWriter(message: DetailPlacementView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailPlacementView;
  static deserializeBinaryFromReader(message: DetailPlacementView, reader: jspb.BinaryReader): DetailPlacementView;
}

export namespace DetailPlacementView {
  export type AsObject = {
    resourceName: string,
    placement?: google_protobuf_wrappers_pb.StringValue.AsObject,
    displayName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    groupPlacementTargetUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    targetUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placementType: google_ads_googleads_v2_enums_placement_type_pb.PlacementTypeEnum.PlacementType,
  }
}

