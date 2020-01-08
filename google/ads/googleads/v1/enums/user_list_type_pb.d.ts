import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListTypeEnum): UserListTypeEnum.AsObject;
  static serializeBinaryToWriter(message: UserListTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListTypeEnum;
  static deserializeBinaryFromReader(message: UserListTypeEnum, reader: jspb.BinaryReader): UserListTypeEnum;
}

export namespace UserListTypeEnum {
  export type AsObject = {
  }

  export enum UserListType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REMARKETING = 2,
    LOGICAL = 3,
    EXTERNAL_REMARKETING = 4,
    RULE_BASED = 5,
    SIMILAR = 6,
    CRM_BASED = 7,
  }
}

