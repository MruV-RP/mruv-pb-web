import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';

export class Schema extends jspb.Message {
  getColumnsList(): Array<ColumnSchema>;
  setColumnsList(value: Array<ColumnSchema>): void;
  clearColumnsList(): void;
  addColumns(value?: ColumnSchema, index?: number): ColumnSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    columnsList: Array<ColumnSchema.AsObject>,
  }
}

export class ColumnSchema extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): void;

  getType(): string;
  setType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMode(): string;
  setMode(value: string): void;

  getSubcolumnsList(): Array<ColumnSchema>;
  setSubcolumnsList(value: Array<ColumnSchema>): void;
  clearSubcolumnsList(): void;
  addSubcolumns(value?: ColumnSchema, index?: number): ColumnSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnSchema.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnSchema): ColumnSchema.AsObject;
  static serializeBinaryToWriter(message: ColumnSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnSchema;
  static deserializeBinaryFromReader(message: ColumnSchema, reader: jspb.BinaryReader): ColumnSchema;
}

export namespace ColumnSchema {
  export type AsObject = {
    column: string,
    type: string,
    description: string,
    mode: string,
    subcolumnsList: Array<ColumnSchema.AsObject>,
  }
}

