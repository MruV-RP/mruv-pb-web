import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AgeRangeView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgeRangeView.AsObject;
  static toObject(includeInstance: boolean, msg: AgeRangeView): AgeRangeView.AsObject;
  static serializeBinaryToWriter(message: AgeRangeView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgeRangeView;
  static deserializeBinaryFromReader(message: AgeRangeView, reader: jspb.BinaryReader): AgeRangeView;
}

export namespace AgeRangeView {
  export type AsObject = {
    resourceName: string,
  }
}

