import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListClosingReasonEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListClosingReasonEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListClosingReasonEnum): UserListClosingReasonEnum.AsObject;
  static serializeBinaryToWriter(message: UserListClosingReasonEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListClosingReasonEnum;
  static deserializeBinaryFromReader(message: UserListClosingReasonEnum, reader: jspb.BinaryReader): UserListClosingReasonEnum;
}

export namespace UserListClosingReasonEnum {
  export type AsObject = {
  }

  export enum UserListClosingReason { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNUSED = 2,
  }
}

