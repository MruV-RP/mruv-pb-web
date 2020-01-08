import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class RealTimeBiddingSetting extends jspb.Message {
  getOptIn(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOptIn(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasOptIn(): boolean;
  clearOptIn(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealTimeBiddingSetting.AsObject;
  static toObject(includeInstance: boolean, msg: RealTimeBiddingSetting): RealTimeBiddingSetting.AsObject;
  static serializeBinaryToWriter(message: RealTimeBiddingSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealTimeBiddingSetting;
  static deserializeBinaryFromReader(message: RealTimeBiddingSetting, reader: jspb.BinaryReader): RealTimeBiddingSetting;
}

export namespace RealTimeBiddingSetting {
  export type AsObject = {
    optIn?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

