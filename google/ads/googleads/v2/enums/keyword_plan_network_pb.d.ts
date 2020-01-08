import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class KeywordPlanNetworkEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanNetworkEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanNetworkEnum): KeywordPlanNetworkEnum.AsObject;
  static serializeBinaryToWriter(message: KeywordPlanNetworkEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanNetworkEnum;
  static deserializeBinaryFromReader(message: KeywordPlanNetworkEnum, reader: jspb.BinaryReader): KeywordPlanNetworkEnum;
}

export namespace KeywordPlanNetworkEnum {
  export type AsObject = {
  }

  export enum KeywordPlanNetwork { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    GOOGLE_SEARCH = 2,
    GOOGLE_SEARCH_AND_PARTNERS = 3,
  }
}

