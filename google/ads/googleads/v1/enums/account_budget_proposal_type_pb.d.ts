import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AccountBudgetProposalTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetProposalTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetProposalTypeEnum): AccountBudgetProposalTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AccountBudgetProposalTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetProposalTypeEnum;
  static deserializeBinaryFromReader(message: AccountBudgetProposalTypeEnum, reader: jspb.BinaryReader): AccountBudgetProposalTypeEnum;
}

export namespace AccountBudgetProposalTypeEnum {
  export type AsObject = {
  }

  export enum AccountBudgetProposalType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CREATE = 2,
    UPDATE = 3,
    END = 4,
    REMOVE = 5,
  }
}

