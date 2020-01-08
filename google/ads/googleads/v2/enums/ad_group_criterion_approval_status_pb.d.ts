import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class AdGroupCriterionApprovalStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionApprovalStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionApprovalStatusEnum): AdGroupCriterionApprovalStatusEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupCriterionApprovalStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionApprovalStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupCriterionApprovalStatusEnum, reader: jspb.BinaryReader): AdGroupCriterionApprovalStatusEnum;
}

export namespace AdGroupCriterionApprovalStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupCriterionApprovalStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPROVED = 2,
    DISAPPROVED = 3,
    PENDING_REVIEW = 4,
    UNDER_REVIEW = 5,
  }
}

