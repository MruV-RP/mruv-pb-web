import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class BillingSetupStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSetupStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSetupStatusEnum): BillingSetupStatusEnum.AsObject;
  static serializeBinaryToWriter(message: BillingSetupStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSetupStatusEnum;
  static deserializeBinaryFromReader(message: BillingSetupStatusEnum, reader: jspb.BinaryReader): BillingSetupStatusEnum;
}

export namespace BillingSetupStatusEnum {
  export type AsObject = {
  }

  export enum BillingSetupStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    APPROVED_HELD = 3,
    APPROVED = 4,
    CANCELLED = 5,
  }
}

