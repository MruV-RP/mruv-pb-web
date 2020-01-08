import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CampaignLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasCampaign(): boolean;
  clearCampaign(): void;

  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLabel(): boolean;
  clearLabel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignLabel): CampaignLabel.AsObject;
  static serializeBinaryToWriter(message: CampaignLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignLabel;
  static deserializeBinaryFromReader(message: CampaignLabel, reader: jspb.BinaryReader): CampaignLabel;
}

export namespace CampaignLabel {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

