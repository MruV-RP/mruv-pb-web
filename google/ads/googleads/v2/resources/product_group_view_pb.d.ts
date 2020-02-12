import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ProductGroupView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductGroupView.AsObject;
  static toObject(includeInstance: boolean, msg: ProductGroupView): ProductGroupView.AsObject;
  static serializeBinaryToWriter(message: ProductGroupView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductGroupView;
  static deserializeBinaryFromReader(message: ProductGroupView, reader: jspb.BinaryReader): ProductGroupView;
}

export namespace ProductGroupView {
  export type AsObject = {
    resourceName: string,
  }
}

