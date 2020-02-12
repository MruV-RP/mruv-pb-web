import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AccessReasonEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessReasonEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccessReasonEnum): AccessReasonEnum.AsObject;
  static serializeBinaryToWriter(message: AccessReasonEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessReasonEnum;
  static deserializeBinaryFromReader(message: AccessReasonEnum, reader: jspb.BinaryReader): AccessReasonEnum;
}

export namespace AccessReasonEnum {
  export type AsObject = {
  }

  export enum AccessReason { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OWNED = 2,
    SHARED = 3,
    LICENSED = 4,
    SUBSCRIBED = 5,
    AFFILIATED = 6,
  }
}

