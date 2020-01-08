import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class LabelStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LabelStatusEnum): LabelStatusEnum.AsObject;
  static serializeBinaryToWriter(message: LabelStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelStatusEnum;
  static deserializeBinaryFromReader(message: LabelStatusEnum, reader: jspb.BinaryReader): LabelStatusEnum;
}

export namespace LabelStatusEnum {
  export type AsObject = {
  }

  export enum LabelStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

