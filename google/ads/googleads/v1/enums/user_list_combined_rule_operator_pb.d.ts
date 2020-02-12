import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListCombinedRuleOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListCombinedRuleOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListCombinedRuleOperatorEnum): UserListCombinedRuleOperatorEnum.AsObject;
  static serializeBinaryToWriter(message: UserListCombinedRuleOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListCombinedRuleOperatorEnum;
  static deserializeBinaryFromReader(message: UserListCombinedRuleOperatorEnum, reader: jspb.BinaryReader): UserListCombinedRuleOperatorEnum;
}

export namespace UserListCombinedRuleOperatorEnum {
  export type AsObject = {
  }

  export enum UserListCombinedRuleOperator { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AND = 2,
    AND_NOT = 3,
  }
}

