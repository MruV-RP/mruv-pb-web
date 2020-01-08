import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_media_type_pb from '../../../../../google/ads/googleads/v2/enums/media_type_pb';
import * as google_ads_googleads_v2_enums_mime_type_pb from '../../../../../google/ads/googleads/v2/enums/mime_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MediaFile extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getType(): google_ads_googleads_v2_enums_media_type_pb.MediaTypeEnum.MediaType;
  setType(value: google_ads_googleads_v2_enums_media_type_pb.MediaTypeEnum.MediaType): void;

  getMimeType(): google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType;
  setMimeType(value: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType): void;

  getSourceUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSourceUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSourceUrl(): boolean;
  clearSourceUrl(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getFileSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFileSize(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasFileSize(): boolean;
  clearFileSize(): void;

  getImage(): MediaImage | undefined;
  setImage(value?: MediaImage): void;
  hasImage(): boolean;
  clearImage(): void;

  getMediaBundle(): MediaBundle | undefined;
  setMediaBundle(value?: MediaBundle): void;
  hasMediaBundle(): boolean;
  clearMediaBundle(): void;

  getAudio(): MediaAudio | undefined;
  setAudio(value?: MediaAudio): void;
  hasAudio(): boolean;
  clearAudio(): void;

  getVideo(): MediaVideo | undefined;
  setVideo(value?: MediaVideo): void;
  hasVideo(): boolean;
  clearVideo(): void;

  getMediatypeCase(): MediaFile.MediatypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaFile.AsObject;
  static toObject(includeInstance: boolean, msg: MediaFile): MediaFile.AsObject;
  static serializeBinaryToWriter(message: MediaFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaFile;
  static deserializeBinaryFromReader(message: MediaFile, reader: jspb.BinaryReader): MediaFile;
}

export namespace MediaFile {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_media_type_pb.MediaTypeEnum.MediaType,
    mimeType: google_ads_googleads_v2_enums_mime_type_pb.MimeTypeEnum.MimeType,
    sourceUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fileSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    image?: MediaImage.AsObject,
    mediaBundle?: MediaBundle.AsObject,
    audio?: MediaAudio.AsObject,
    video?: MediaVideo.AsObject,
  }

  export enum MediatypeCase { 
    MEDIATYPE_NOT_SET = 0,
    IMAGE = 3,
    MEDIA_BUNDLE = 4,
    AUDIO = 10,
    VIDEO = 11,
  }
}

export class MediaImage extends jspb.Message {
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasData(): boolean;
  clearData(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaImage.AsObject;
  static toObject(includeInstance: boolean, msg: MediaImage): MediaImage.AsObject;
  static serializeBinaryToWriter(message: MediaImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaImage;
  static deserializeBinaryFromReader(message: MediaImage, reader: jspb.BinaryReader): MediaImage;
}

export namespace MediaImage {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

export class MediaBundle extends jspb.Message {
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasData(): boolean;
  clearData(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaBundle.AsObject;
  static toObject(includeInstance: boolean, msg: MediaBundle): MediaBundle.AsObject;
  static serializeBinaryToWriter(message: MediaBundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaBundle;
  static deserializeBinaryFromReader(message: MediaBundle, reader: jspb.BinaryReader): MediaBundle;
}

export namespace MediaBundle {
  export type AsObject = {
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

export class MediaAudio extends jspb.Message {
  getAdDurationMillis(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdDurationMillis(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAdDurationMillis(): boolean;
  clearAdDurationMillis(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaAudio.AsObject;
  static toObject(includeInstance: boolean, msg: MediaAudio): MediaAudio.AsObject;
  static serializeBinaryToWriter(message: MediaAudio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaAudio;
  static deserializeBinaryFromReader(message: MediaAudio, reader: jspb.BinaryReader): MediaAudio;
}

export namespace MediaAudio {
  export type AsObject = {
    adDurationMillis?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class MediaVideo extends jspb.Message {
  getAdDurationMillis(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdDurationMillis(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasAdDurationMillis(): boolean;
  clearAdDurationMillis(): void;

  getYoutubeVideoId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setYoutubeVideoId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasYoutubeVideoId(): boolean;
  clearYoutubeVideoId(): void;

  getAdvertisingIdCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdvertisingIdCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdvertisingIdCode(): boolean;
  clearAdvertisingIdCode(): void;

  getIsciCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIsciCode(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIsciCode(): boolean;
  clearIsciCode(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaVideo.AsObject;
  static toObject(includeInstance: boolean, msg: MediaVideo): MediaVideo.AsObject;
  static serializeBinaryToWriter(message: MediaVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaVideo;
  static deserializeBinaryFromReader(message: MediaVideo, reader: jspb.BinaryReader): MediaVideo;
}

export namespace MediaVideo {
  export type AsObject = {
    adDurationMillis?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    youtubeVideoId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    advertisingIdCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    isciCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

