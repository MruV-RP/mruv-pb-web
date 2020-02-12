import * as jspb from "google-protobuf"

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';

export class DownloadMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUploadStatus(): google_devtools_resultstore_v2_common_pb.UploadStatus;
  setUploadStatus(value: google_devtools_resultstore_v2_common_pb.UploadStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadMetadata): DownloadMetadata.AsObject;
  static serializeBinaryToWriter(message: DownloadMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadMetadata;
  static deserializeBinaryFromReader(message: DownloadMetadata, reader: jspb.BinaryReader): DownloadMetadata;
}

export namespace DownloadMetadata {
  export type AsObject = {
    name: string,
    uploadStatus: google_devtools_resultstore_v2_common_pb.UploadStatus,
  }
}

