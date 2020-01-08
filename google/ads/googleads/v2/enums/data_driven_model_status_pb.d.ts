import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class DataDrivenModelStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataDrivenModelStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DataDrivenModelStatusEnum): DataDrivenModelStatusEnum.AsObject;
  static serializeBinaryToWriter(message: DataDrivenModelStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataDrivenModelStatusEnum;
  static deserializeBinaryFromReader(message: DataDrivenModelStatusEnum, reader: jspb.BinaryReader): DataDrivenModelStatusEnum;
}

export namespace DataDrivenModelStatusEnum {
  export type AsObject = {
  }

  export enum DataDrivenModelStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AVAILABLE = 2,
    STALE = 3,
    EXPIRED = 4,
    NEVER_GENERATED = 5,
  }
}

