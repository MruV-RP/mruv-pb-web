import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class SimulationModificationMethodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulationModificationMethodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SimulationModificationMethodEnum): SimulationModificationMethodEnum.AsObject;
  static serializeBinaryToWriter(message: SimulationModificationMethodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulationModificationMethodEnum;
  static deserializeBinaryFromReader(message: SimulationModificationMethodEnum, reader: jspb.BinaryReader): SimulationModificationMethodEnum;
}

export namespace SimulationModificationMethodEnum {
  export type AsObject = {
  }

  export enum SimulationModificationMethod { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNIFORM = 2,
    DEFAULT = 3,
  }
}

