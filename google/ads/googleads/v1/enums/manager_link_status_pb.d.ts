import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class ManagerLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerLinkStatusEnum): ManagerLinkStatusEnum.AsObject;
  static serializeBinaryToWriter(message: ManagerLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerLinkStatusEnum;
  static deserializeBinaryFromReader(message: ManagerLinkStatusEnum, reader: jspb.BinaryReader): ManagerLinkStatusEnum;
}

export namespace ManagerLinkStatusEnum {
  export type AsObject = {
  }

  export enum ManagerLinkStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ACTIVE = 2,
    INACTIVE = 3,
    PENDING = 4,
    REFUSED = 5,
    CANCELED = 6,
  }
}

