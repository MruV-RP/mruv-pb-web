import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ConversionActionStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionStatusEnum): ConversionActionStatusEnum.AsObject;
  static serializeBinaryToWriter(message: ConversionActionStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionStatusEnum;
  static deserializeBinaryFromReader(message: ConversionActionStatusEnum, reader: jspb.BinaryReader): ConversionActionStatusEnum;
}

export namespace ConversionActionStatusEnum {
  export type AsObject = {
  }

  export enum ConversionActionStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
    HIDDEN = 4,
  }
}

