import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SystemManagedResourceSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemManagedResourceSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SystemManagedResourceSourceEnum): SystemManagedResourceSourceEnum.AsObject;
  static serializeBinaryToWriter(message: SystemManagedResourceSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemManagedResourceSourceEnum;
  static deserializeBinaryFromReader(message: SystemManagedResourceSourceEnum, reader: jspb.BinaryReader): SystemManagedResourceSourceEnum;
}

export namespace SystemManagedResourceSourceEnum {
  export type AsObject = {
  }

  export enum SystemManagedResourceSource { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_VARIATIONS = 2,
  }
}

