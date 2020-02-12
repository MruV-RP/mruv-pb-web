import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PolicyTopicEvidenceDestinationMismatchUrlTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.AsObject;
  static serializeBinaryToWriter(message: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;
  static deserializeBinaryFromReader(message: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum, reader: jspb.BinaryReader): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;
}

export namespace PolicyTopicEvidenceDestinationMismatchUrlTypeEnum {
  export type AsObject = {
  }

  export enum PolicyTopicEvidenceDestinationMismatchUrlType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DISPLAY_URL = 2,
    FINAL_URL = 3,
    FINAL_MOBILE_URL = 4,
    TRACKING_URL = 5,
    MOBILE_TRACKING_URL = 6,
  }
}

