import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_mime_type_pb from '../../../../../google/ads/googleads/v2/enums/mime_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class YoutubeVideoAsset extends jspb.Message {
  getYoutubeVideoId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setYoutubeVideoId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasYoutubeVideoId(): boolean;
  clearYoutubeVideoId(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YoutubeVideoAsset.AsObject;
  static toObject(includeInstance: boolean, msg: YoutubeVideoAsset): YoutubeVideoAsset.AsObject;
  static serializeBinaryToWriter(message: YoutubeVideoAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YoutubeVideoAsset;
  static deserializeBinaryFromReader(message: YoutubeVideoAsset, reader: jspb.BinaryReader): YoutubeVideoAsset;
}

export namespace YoutubeVideoAsset {
  export type AsObject = {
    youtubeVideoId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MediaBundleAsset extends jspb.Message {
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasData(): boolean;
  clearData(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaBundleAsset.AsObject;
  static toObject(includeInstance: boolean, msg: MediaBundleAsset): MediaBundleAsset.AsObject;
  static serializeBinaryToWriter(message: MediaBundleAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaBundleAsset;
  static deserializeBinaryFromReader(message: MediaBundleAsset, reader: jspb.BinaryReader): MediaBundleAsset;
}

export namespace MediaBundleAsset {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

export class ImageAsset extends jspb.Message {
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasData(): boolean;
  clearData(): void;

  getFileSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFileSize(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasFileSize(): boolean;
  clearFileSize(): void;

  getMimeType(): google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType;
  setMimeType(value: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType): void;

  getFullSize(): ImageDimension | undefined;
  setFullSize(value?: ImageDimension): void;
  hasFullSize(): boolean;
  clearFullSize(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAsset.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAsset): ImageAsset.AsObject;
  static serializeBinaryToWriter(message: ImageAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAsset;
  static deserializeBinaryFromReader(message: ImageAsset, reader: jspb.BinaryReader): ImageAsset;
}

export namespace ImageAsset {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    fileSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    mimeType: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType,
    fullSize?: ImageDimension.AsObject,
  }
}

export class ImageDimension extends jspb.Message {
  getHeightPixels(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHeightPixels(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasHeightPixels(): boolean;
  clearHeightPixels(): void;

  getWidthPixels(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setWidthPixels(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasWidthPixels(): boolean;
  clearWidthPixels(): void;

  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUrl(): boolean;
  clearUrl(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageDimension.AsObject;
  static toObject(includeInstance: boolean, msg: ImageDimension): ImageDimension.AsObject;
  static serializeBinaryToWriter(message: ImageDimension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageDimension;
  static deserializeBinaryFromReader(message: ImageDimension, reader: jspb.BinaryReader): ImageDimension;
}

export namespace ImageDimension {
  export type AsObject = {
    heightPixels?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    widthPixels?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TextAsset extends jspb.Message {
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasText(): boolean;
  clearText(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAsset.AsObject;
  static toObject(includeInstance: boolean, msg: TextAsset): TextAsset.AsObject;
  static serializeBinaryToWriter(message: TextAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAsset;
  static deserializeBinaryFromReader(message: TextAsset, reader: jspb.BinaryReader): TextAsset;
}

export namespace TextAsset {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

