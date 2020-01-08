import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdScheduleView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdScheduleView.AsObject;
  static toObject(includeInstance: boolean, msg: AdScheduleView): AdScheduleView.AsObject;
  static serializeBinaryToWriter(message: AdScheduleView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdScheduleView;
  static deserializeBinaryFromReader(message: AdScheduleView, reader: jspb.BinaryReader): AdScheduleView;
}

export namespace AdScheduleView {
  export type AsObject = {
    resourceName: string,
  }
}

