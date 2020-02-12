import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class KeywordPlanAdGroupErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupErrorEnum): KeywordPlanAdGroupErrorEnum.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanAdGroupErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupErrorEnum, reader: jspb.BinaryReader): KeywordPlanAdGroupErrorEnum;
}

export namespace KeywordPlanAdGroupErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanAdGroupError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_NAME = 2,
    DUPLICATE_NAME = 3,
  }
}

