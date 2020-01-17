import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class Video extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasId(): boolean;
  clearId(): void;

  getChannelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setChannelId(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasChannelId(): boolean;
  clearChannelId(): void;

  getDurationMillis(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDurationMillis(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasDurationMillis(): boolean;
  clearDurationMillis(): void;

  getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTitle(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasTitle(): boolean;
  clearTitle(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Video.AsObject;
  static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
  static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Video;
  static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    channelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    durationMillis?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    title?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}
