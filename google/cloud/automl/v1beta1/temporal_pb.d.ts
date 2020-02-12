import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class TimeSegment extends jspb.Message {
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): void;

  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): void;
  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSegment.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSegment): TimeSegment.AsObject;
  static serializeBinaryToWriter(message: TimeSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSegment;
  static deserializeBinaryFromReader(message: TimeSegment, reader: jspb.BinaryReader): TimeSegment;
}

export namespace TimeSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

