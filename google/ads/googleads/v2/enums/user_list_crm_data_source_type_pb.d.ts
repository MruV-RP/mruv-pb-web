import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListCrmDataSourceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListCrmDataSourceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListCrmDataSourceTypeEnum): UserListCrmDataSourceTypeEnum.AsObject;
  static serializeBinaryToWriter(message: UserListCrmDataSourceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListCrmDataSourceTypeEnum;
  static deserializeBinaryFromReader(message: UserListCrmDataSourceTypeEnum, reader: jspb.BinaryReader): UserListCrmDataSourceTypeEnum;
}

export namespace UserListCrmDataSourceTypeEnum {
  export type AsObject = {
  }

  export enum UserListCrmDataSourceType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FIRST_PARTY = 2,
    THIRD_PARTY_CREDIT_BUREAU = 3,
    THIRD_PARTY_VOTER_FILE = 4,
  }
}

