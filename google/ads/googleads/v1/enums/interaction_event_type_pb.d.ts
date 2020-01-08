import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class InteractionEventTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionEventTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionEventTypeEnum): InteractionEventTypeEnum.AsObject;
  static serializeBinaryToWriter(message: InteractionEventTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionEventTypeEnum;
  static deserializeBinaryFromReader(message: InteractionEventTypeEnum, reader: jspb.BinaryReader): InteractionEventTypeEnum;
}

export namespace InteractionEventTypeEnum {
  export type AsObject = {
  }

  export enum InteractionEventType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CLICK = 2,
    ENGAGEMENT = 3,
    VIDEO_VIEW = 4,
    NONE = 5,
  }
}

