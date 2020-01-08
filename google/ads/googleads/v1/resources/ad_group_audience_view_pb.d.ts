import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupAudienceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAudienceView.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAudienceView): AdGroupAudienceView.AsObject;
  static serializeBinaryToWriter(message: AdGroupAudienceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAudienceView;
  static deserializeBinaryFromReader(message: AdGroupAudienceView, reader: jspb.BinaryReader): AdGroupAudienceView;
}

export namespace AdGroupAudienceView {
  export type AsObject = {
    resourceName: string,
  }
}

