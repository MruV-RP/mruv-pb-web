import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListNumberRuleItemOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListNumberRuleItemOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListNumberRuleItemOperatorEnum): UserListNumberRuleItemOperatorEnum.AsObject;
  static serializeBinaryToWriter(message: UserListNumberRuleItemOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListNumberRuleItemOperatorEnum;
  static deserializeBinaryFromReader(message: UserListNumberRuleItemOperatorEnum, reader: jspb.BinaryReader): UserListNumberRuleItemOperatorEnum;
}

export namespace UserListNumberRuleItemOperatorEnum {
  export type AsObject = {
  }

  export enum UserListNumberRuleItemOperator { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    GREATER_THAN = 2,
    GREATER_THAN_OR_EQUAL = 3,
    EQUALS = 4,
    NOT_EQUALS = 5,
    LESS_THAN = 6,
    LESS_THAN_OR_EQUAL = 7,
  }
}

