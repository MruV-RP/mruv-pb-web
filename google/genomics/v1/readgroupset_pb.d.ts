import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_genomics_v1_readgroup_pb from '../../../google/genomics/v1/readgroup_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class ReadGroupSet extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDatasetId(): string;
  setDatasetId(value: string): void;

  getReferenceSetId(): string;
  setReferenceSetId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getReadGroupsList(): Array<google_genomics_v1_readgroup_pb.ReadGroup>;
  setReadGroupsList(value: Array<google_genomics_v1_readgroup_pb.ReadGroup>): void;
  clearReadGroupsList(): void;
  addReadGroups(value?: google_genomics_v1_readgroup_pb.ReadGroup, index?: number): google_genomics_v1_readgroup_pb.ReadGroup;

  getInfoMap(): jspb.Map<string, google_protobuf_struct_pb.ListValue>;
  clearInfoMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadGroupSet.AsObject;
  static toObject(includeInstance: boolean, msg: ReadGroupSet): ReadGroupSet.AsObject;
  static serializeBinaryToWriter(message: ReadGroupSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadGroupSet;
  static deserializeBinaryFromReader(message: ReadGroupSet, reader: jspb.BinaryReader): ReadGroupSet;
}

export namespace ReadGroupSet {
  export type AsObject = {
    id: string,
    datasetId: string,
    referenceSetId: string,
    name: string,
    filename: string,
    readGroupsList: Array<google_genomics_v1_readgroup_pb.ReadGroup.AsObject>,
    infoMap: Array<[string, google_protobuf_struct_pb.ListValue.AsObject]>,
  }
}

