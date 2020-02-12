import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class AdGroupLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroup(): boolean;
  clearAdGroup(): void;

  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLabel(): boolean;
  clearLabel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupLabel): AdGroupLabel.AsObject;
  static serializeBinaryToWriter(message: AdGroupLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupLabel;
  static deserializeBinaryFromReader(message: AdGroupLabel, reader: jspb.BinaryReader): AdGroupLabel;
}

export namespace AdGroupLabel {
  export type AsObject = {
    resourceName: string,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

