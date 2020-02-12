import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SharedCriterionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedCriterionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedCriterionErrorEnum): SharedCriterionErrorEnum.AsObject;
  static serializeBinaryToWriter(message: SharedCriterionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedCriterionErrorEnum;
  static deserializeBinaryFromReader(message: SharedCriterionErrorEnum, reader: jspb.BinaryReader): SharedCriterionErrorEnum;
}

export namespace SharedCriterionErrorEnum {
  export type AsObject = {
  }

  export enum SharedCriterionError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CRITERION_TYPE_NOT_ALLOWED_FOR_SHARED_SET_TYPE = 2,
  }
}

