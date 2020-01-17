import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DateRange extends jspb.Message {
  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasStartDate(): boolean;
  clearStartDate(): void;

  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasEndDate(): boolean;
  clearEndDate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRange.AsObject;
  static toObject(includeInstance: boolean, msg: DateRange): DateRange.AsObject;
  static serializeBinaryToWriter(message: DateRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRange;
  static deserializeBinaryFromReader(message: DateRange, reader: jspb.BinaryReader): DateRange;
}

export namespace DateRange {
  export type AsObject = {
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}
