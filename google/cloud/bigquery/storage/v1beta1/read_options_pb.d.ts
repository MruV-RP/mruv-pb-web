import * as jspb from "google-protobuf"

export class TableReadOptions extends jspb.Message {
  getSelectedFieldsList(): Array<string>;
  setSelectedFieldsList(value: Array<string>): void;
  clearSelectedFieldsList(): void;
  addSelectedFields(value: string, index?: number): void;

  getRowRestriction(): string;
  setRowRestriction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableReadOptions.AsObject;
  static toObject(includeInstance: boolean, msg: TableReadOptions): TableReadOptions.AsObject;
  static serializeBinaryToWriter(message: TableReadOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableReadOptions;
  static deserializeBinaryFromReader(message: TableReadOptions, reader: jspb.BinaryReader): TableReadOptions;
}

export namespace TableReadOptions {
  export type AsObject = {
    selectedFieldsList: Array<string>,
    rowRestriction: string,
  }
}

