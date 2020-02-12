import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class PolicyTopicEvidenceDestinationNotWorkingDeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum.AsObject;
  static serializeBinaryToWriter(message: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum;
  static deserializeBinaryFromReader(message: PolicyTopicEvidenceDestinationNotWorkingDeviceEnum, reader: jspb.BinaryReader): PolicyTopicEvidenceDestinationNotWorkingDeviceEnum;
}

export namespace PolicyTopicEvidenceDestinationNotWorkingDeviceEnum {
  export type AsObject = {
  }

  export enum PolicyTopicEvidenceDestinationNotWorkingDevice { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DESKTOP = 2,
    ANDROID = 3,
    IOS = 4,
  }
}

