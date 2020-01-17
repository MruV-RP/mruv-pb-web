import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class BiddingStrategyStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategyStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategyStatusEnum): BiddingStrategyStatusEnum.AsObject;
  static serializeBinaryToWriter(message: BiddingStrategyStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategyStatusEnum;
  static deserializeBinaryFromReader(message: BiddingStrategyStatusEnum, reader: jspb.BinaryReader): BiddingStrategyStatusEnum;
}

export namespace BiddingStrategyStatusEnum {
  export type AsObject = {
  }

  export enum BiddingStrategyStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 4,
  }
}
