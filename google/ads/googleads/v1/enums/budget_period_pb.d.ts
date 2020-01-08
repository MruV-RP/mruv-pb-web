import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class BudgetPeriodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetPeriodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetPeriodEnum): BudgetPeriodEnum.AsObject;
  static serializeBinaryToWriter(message: BudgetPeriodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetPeriodEnum;
  static deserializeBinaryFromReader(message: BudgetPeriodEnum, reader: jspb.BinaryReader): BudgetPeriodEnum;
}

export namespace BudgetPeriodEnum {
  export type AsObject = {
  }

  export enum BudgetPeriod { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DAILY = 2,
    CUSTOM = 3,
    FIXED_DAILY = 4,
  }
}

