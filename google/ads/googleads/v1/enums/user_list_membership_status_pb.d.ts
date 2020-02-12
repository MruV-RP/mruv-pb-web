import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListMembershipStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListMembershipStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListMembershipStatusEnum): UserListMembershipStatusEnum.AsObject;
  static serializeBinaryToWriter(message: UserListMembershipStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListMembershipStatusEnum;
  static deserializeBinaryFromReader(message: UserListMembershipStatusEnum, reader: jspb.BinaryReader): UserListMembershipStatusEnum;
}

export namespace UserListMembershipStatusEnum {
  export type AsObject = {
  }

  export enum UserListMembershipStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPEN = 2,
    CLOSED = 3,
  }
}

