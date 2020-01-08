import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class OperatingSystemVersionOperatorTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemVersionOperatorTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemVersionOperatorTypeEnum): OperatingSystemVersionOperatorTypeEnum.AsObject;
  static serializeBinaryToWriter(message: OperatingSystemVersionOperatorTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemVersionOperatorTypeEnum;
  static deserializeBinaryFromReader(message: OperatingSystemVersionOperatorTypeEnum, reader: jspb.BinaryReader): OperatingSystemVersionOperatorTypeEnum;
}

export namespace OperatingSystemVersionOperatorTypeEnum {
  export type AsObject = {
  }

  export enum OperatingSystemVersionOperatorType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EQUALS_TO = 2,
    GREATER_THAN_EQUALS_TO = 4,
  }
}

