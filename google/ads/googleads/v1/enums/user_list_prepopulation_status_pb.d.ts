import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class UserListPrepopulationStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListPrepopulationStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListPrepopulationStatusEnum): UserListPrepopulationStatusEnum.AsObject;
  static serializeBinaryToWriter(message: UserListPrepopulationStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListPrepopulationStatusEnum;
  static deserializeBinaryFromReader(message: UserListPrepopulationStatusEnum, reader: jspb.BinaryReader): UserListPrepopulationStatusEnum;
}

export namespace UserListPrepopulationStatusEnum {
  export type AsObject = {
  }

  export enum UserListPrepopulationStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUESTED = 2,
    FINISHED = 3,
    FAILED = 4,
  }
}

