import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupAdLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getAdGroupAd(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupAd(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;

  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLabel(): boolean;
  clearLabel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdLabel): AdGroupAdLabel.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdLabel;
  static deserializeBinaryFromReader(message: AdGroupAdLabel, reader: jspb.BinaryReader): AdGroupAdLabel;
}

export namespace AdGroupAdLabel {
  export type AsObject = {
    resourceName: string,
    adGroupAd?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

