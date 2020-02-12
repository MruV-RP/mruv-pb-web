import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class LandingPageView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getUnexpandedFinalUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUnexpandedFinalUrl(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasUnexpandedFinalUrl(): boolean;
  clearUnexpandedFinalUrl(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LandingPageView.AsObject;
  static toObject(includeInstance: boolean, msg: LandingPageView): LandingPageView.AsObject;
  static serializeBinaryToWriter(message: LandingPageView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LandingPageView;
  static deserializeBinaryFromReader(message: LandingPageView, reader: jspb.BinaryReader): LandingPageView;
}

export namespace LandingPageView {
  export type AsObject = {
    resourceName: string,
    unexpandedFinalUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

