import * as jspb from "google-protobuf"

export class FindingTypeStats extends jspb.Message {
  getFindingType(): string;
  setFindingType(value: string): void;

  getFindingCount(): number;
  setFindingCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindingTypeStats.AsObject;
  static toObject(includeInstance: boolean, msg: FindingTypeStats): FindingTypeStats.AsObject;
  static serializeBinaryToWriter(message: FindingTypeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindingTypeStats;
  static deserializeBinaryFromReader(message: FindingTypeStats, reader: jspb.BinaryReader): FindingTypeStats;
}

export namespace FindingTypeStats {
  export type AsObject = {
    findingType: string,
    findingCount: number,
  }
}

