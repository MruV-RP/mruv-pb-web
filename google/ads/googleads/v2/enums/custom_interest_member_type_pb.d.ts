import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class CustomInterestMemberTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestMemberTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestMemberTypeEnum): CustomInterestMemberTypeEnum.AsObject;
  static serializeBinaryToWriter(message: CustomInterestMemberTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestMemberTypeEnum;
  static deserializeBinaryFromReader(message: CustomInterestMemberTypeEnum, reader: jspb.BinaryReader): CustomInterestMemberTypeEnum;
}

export namespace CustomInterestMemberTypeEnum {
  export type AsObject = {
  }

  export enum CustomInterestMemberType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    KEYWORD = 2,
    URL = 3,
  }
}

