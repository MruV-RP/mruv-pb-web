import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class LocationView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationView.AsObject;
  static toObject(includeInstance: boolean, msg: LocationView): LocationView.AsObject;
  static serializeBinaryToWriter(message: LocationView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationView;
  static deserializeBinaryFromReader(message: LocationView, reader: jspb.BinaryReader): LocationView;
}

export namespace LocationView {
  export type AsObject = {
    resourceName: string,
  }
}

