import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class PaidOrganicSearchTermView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getSearchTerm(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchTerm(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSearchTerm(): boolean;
  clearSearchTerm(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaidOrganicSearchTermView.AsObject;
  static toObject(includeInstance: boolean, msg: PaidOrganicSearchTermView): PaidOrganicSearchTermView.AsObject;
  static serializeBinaryToWriter(message: PaidOrganicSearchTermView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaidOrganicSearchTermView;
  static deserializeBinaryFromReader(message: PaidOrganicSearchTermView, reader: jspb.BinaryReader): PaidOrganicSearchTermView;
}

export namespace PaidOrganicSearchTermView {
  export type AsObject = {
    resourceName: string,
    searchTerm?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

