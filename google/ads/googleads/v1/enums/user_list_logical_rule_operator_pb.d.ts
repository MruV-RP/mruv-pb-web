import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListLogicalRuleOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListLogicalRuleOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListLogicalRuleOperatorEnum): UserListLogicalRuleOperatorEnum.AsObject;
  static serializeBinaryToWriter(message: UserListLogicalRuleOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListLogicalRuleOperatorEnum;
  static deserializeBinaryFromReader(message: UserListLogicalRuleOperatorEnum, reader: jspb.BinaryReader): UserListLogicalRuleOperatorEnum;
}

export namespace UserListLogicalRuleOperatorEnum {
  export type AsObject = {
  }

  export enum UserListLogicalRuleOperator { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ALL = 2,
    ANY = 3,
    NONE = 4,
  }
}

