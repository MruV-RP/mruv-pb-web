import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupCriterionLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;

  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLabel(): boolean;
  clearLabel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionLabel): AdGroupCriterionLabel.AsObject;
  static serializeBinaryToWriter(message: AdGroupCriterionLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionLabel;
  static deserializeBinaryFromReader(message: AdGroupCriterionLabel, reader: jspb.BinaryReader): AdGroupCriterionLabel;
}

export namespace AdGroupCriterionLabel {
  export type AsObject = {
    resourceName: string,
    adGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

