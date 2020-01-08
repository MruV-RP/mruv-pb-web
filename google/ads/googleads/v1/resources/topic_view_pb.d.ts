import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class TopicView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicView.AsObject;
  static toObject(includeInstance: boolean, msg: TopicView): TopicView.AsObject;
  static serializeBinaryToWriter(message: TopicView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicView;
  static deserializeBinaryFromReader(message: TopicView, reader: jspb.BinaryReader): TopicView;
}

export namespace TopicView {
  export type AsObject = {
    resourceName: string,
  }
}

