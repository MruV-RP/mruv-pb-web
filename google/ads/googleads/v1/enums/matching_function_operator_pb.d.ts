import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MatchingFunctionOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchingFunctionOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MatchingFunctionOperatorEnum): MatchingFunctionOperatorEnum.AsObject;
  static serializeBinaryToWriter(message: MatchingFunctionOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchingFunctionOperatorEnum;
  static deserializeBinaryFromReader(message: MatchingFunctionOperatorEnum, reader: jspb.BinaryReader): MatchingFunctionOperatorEnum;
}

export namespace MatchingFunctionOperatorEnum {
  export type AsObject = {
  }

  export enum MatchingFunctionOperator { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IN = 2,
    IDENTITY = 3,
    EQUALS = 4,
    AND = 5,
    CONTAINS_ANY = 6,
  }
}

