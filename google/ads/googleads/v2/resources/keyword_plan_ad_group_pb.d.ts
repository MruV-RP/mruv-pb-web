import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class KeywordPlanAdGroup extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getKeywordPlanCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasName(): boolean;
  clearName(): void;

  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroup.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroup): KeywordPlanAdGroup.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanAdGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroup;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroup, reader: jspb.BinaryReader): KeywordPlanAdGroup;
}

export namespace KeywordPlanAdGroup {
  export type AsObject = {
    resourceName: string,
    keywordPlanCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

