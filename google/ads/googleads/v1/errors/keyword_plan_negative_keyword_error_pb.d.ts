import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class KeywordPlanNegativeKeywordErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanNegativeKeywordErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanNegativeKeywordErrorEnum): KeywordPlanNegativeKeywordErrorEnum.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanNegativeKeywordErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanNegativeKeywordErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanNegativeKeywordErrorEnum, reader: jspb.BinaryReader): KeywordPlanNegativeKeywordErrorEnum;
}

export namespace KeywordPlanNegativeKeywordErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanNegativeKeywordError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
  }
}

