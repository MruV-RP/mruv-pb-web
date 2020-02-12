import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_common_asset_types_pb from '../../../../../google/ads/googleads/v2/common/asset_types_pb';
import * as google_ads_googleads_v2_enums_asset_type_pb from '../../../../../google/ads/googleads/v2/enums/asset_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class Asset extends jspb.Message {
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

  getType(): google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType;
  setType(value: google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType): void;

  getYoutubeVideoAsset(): google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset | undefined;
  setYoutubeVideoAsset(value?: google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset): void;
  hasYoutubeVideoAsset(): boolean;
  clearYoutubeVideoAsset(): void;

  getMediaBundleAsset(): google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset | undefined;
  setMediaBundleAsset(value?: google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset): void;
  hasMediaBundleAsset(): boolean;
  clearMediaBundleAsset(): void;

  getImageAsset(): google_ads_googleads_v2_common_asset_types_pb.ImageAsset | undefined;
  setImageAsset(value?: google_ads_googleads_v2_common_asset_types_pb.ImageAsset): void;
  hasImageAsset(): boolean;
  clearImageAsset(): void;

  getTextAsset(): google_ads_googleads_v2_common_asset_types_pb.TextAsset | undefined;
  setTextAsset(value?: google_ads_googleads_v2_common_asset_types_pb.TextAsset): void;
  hasTextAsset(): boolean;
  clearTextAsset(): void;

  getAssetDataCase(): Asset.AssetDataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_asset_type_pb.AssetTypeEnum.AssetType,
    youtubeVideoAsset?: google_ads_googleads_v2_common_asset_types_pb.YoutubeVideoAsset.AsObject,
    mediaBundleAsset?: google_ads_googleads_v2_common_asset_types_pb.MediaBundleAsset.AsObject,
    imageAsset?: google_ads_googleads_v2_common_asset_types_pb.ImageAsset.AsObject,
    textAsset?: google_ads_googleads_v2_common_asset_types_pb.TextAsset.AsObject,
  }

  export enum AssetDataCase { 
    ASSET_DATA_NOT_SET = 0,
    YOUTUBE_VIDEO_ASSET = 5,
    MEDIA_BUNDLE_ASSET = 6,
    IMAGE_ASSET = 7,
    TEXT_ASSET = 8,
  }
}

