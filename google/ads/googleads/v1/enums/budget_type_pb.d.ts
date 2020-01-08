import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class BudgetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetTypeEnum): BudgetTypeEnum.AsObject;
  static serializeBinaryToWriter(message: BudgetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetTypeEnum;
  static deserializeBinaryFromReader(message: BudgetTypeEnum, reader: jspb.BinaryReader): BudgetTypeEnum;
}

export namespace BudgetTypeEnum {
  export type AsObject = {
  }

  export enum BudgetType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STANDARD = 2,
    HOTEL_ADS_COMMISSION = 3,
    FIXED_CPA = 4,
  }
}

