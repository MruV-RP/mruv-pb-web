import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CustomInterestTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestTypeEnum): CustomInterestTypeEnum.AsObject;
  static serializeBinaryToWriter(message: CustomInterestTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestTypeEnum;
  static deserializeBinaryFromReader(message: CustomInterestTypeEnum, reader: jspb.BinaryReader): CustomInterestTypeEnum;
}

export namespace CustomInterestTypeEnum {
  export type AsObject = {
  }

  export enum CustomInterestType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOM_AFFINITY = 2,
    CUSTOM_INTENT = 3,
  }
}
