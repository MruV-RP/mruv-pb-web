import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum.AsObject;
  static serializeBinaryToWriter(message: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum;
  static deserializeBinaryFromReader(message: PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum, reader: jspb.BinaryReader): PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum;
}

export namespace PolicyTopicEvidenceDestinationNotWorkingDnsErrorTypeEnum {
  export type AsObject = {
  }

  export enum PolicyTopicEvidenceDestinationNotWorkingDnsErrorType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HOSTNAME_NOT_FOUND = 2,
    GOOGLE_CRAWLER_DNS_ISSUE = 3,
  }
}

