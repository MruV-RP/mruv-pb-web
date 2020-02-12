import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ParentalStatusTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentalStatusTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ParentalStatusTypeEnum): ParentalStatusTypeEnum.AsObject;
  static serializeBinaryToWriter(message: ParentalStatusTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentalStatusTypeEnum;
  static deserializeBinaryFromReader(message: ParentalStatusTypeEnum, reader: jspb.BinaryReader): ParentalStatusTypeEnum;
}

export namespace ParentalStatusTypeEnum {
  export type AsObject = {
  }

  export enum ParentalStatusType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PARENT = 300,
    NOT_A_PARENT = 301,
    UNDETERMINED = 302,
  }
}

