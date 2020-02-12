import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class GenderView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderView.AsObject;
  static toObject(includeInstance: boolean, msg: GenderView): GenderView.AsObject;
  static serializeBinaryToWriter(message: GenderView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderView;
  static deserializeBinaryFromReader(message: GenderView, reader: jspb.BinaryReader): GenderView;
}

export namespace GenderView {
  export type AsObject = {
    resourceName: string,
  }
}

