import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class StandardSqlDataType extends jspb.Message {
  getTypeKind(): StandardSqlDataType.TypeKind;
  setTypeKind(value: StandardSqlDataType.TypeKind): void;

  getArrayElementType(): StandardSqlDataType | undefined;
  setArrayElementType(value?: StandardSqlDataType): void;
  hasArrayElementType(): boolean;
  clearArrayElementType(): void;

  getStructType(): StandardSqlStructType | undefined;
  setStructType(value?: StandardSqlStructType): void;
  hasStructType(): boolean;
  clearStructType(): void;

  getSubTypeCase(): StandardSqlDataType.SubTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlDataType.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlDataType): StandardSqlDataType.AsObject;
  static serializeBinaryToWriter(message: StandardSqlDataType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlDataType;
  static deserializeBinaryFromReader(message: StandardSqlDataType, reader: jspb.BinaryReader): StandardSqlDataType;
}

export namespace StandardSqlDataType {
  export type AsObject = {
    typeKind: StandardSqlDataType.TypeKind,
    arrayElementType?: StandardSqlDataType.AsObject,
    structType?: StandardSqlStructType.AsObject,
  }

  export enum TypeKind { 
    TYPE_KIND_UNSPECIFIED = 0,
    INT64 = 2,
    BOOL = 5,
    FLOAT64 = 7,
    STRING = 8,
    BYTES = 9,
    TIMESTAMP = 19,
    DATE = 10,
    TIME = 20,
    DATETIME = 21,
    GEOGRAPHY = 22,
    NUMERIC = 23,
    ARRAY = 16,
    STRUCT = 17,
  }

  export enum SubTypeCase { 
    SUB_TYPE_NOT_SET = 0,
    ARRAY_ELEMENT_TYPE = 2,
    STRUCT_TYPE = 3,
  }
}

export class StandardSqlField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): StandardSqlDataType | undefined;
  setType(value?: StandardSqlDataType): void;
  hasType(): boolean;
  clearType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlField.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlField): StandardSqlField.AsObject;
  static serializeBinaryToWriter(message: StandardSqlField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlField;
  static deserializeBinaryFromReader(message: StandardSqlField, reader: jspb.BinaryReader): StandardSqlField;
}

export namespace StandardSqlField {
  export type AsObject = {
    name: string,
    type?: StandardSqlDataType.AsObject,
  }
}

export class StandardSqlStructType extends jspb.Message {
  getFieldsList(): Array<StandardSqlField>;
  setFieldsList(value: Array<StandardSqlField>): void;
  clearFieldsList(): void;
  addFields(value?: StandardSqlField, index?: number): StandardSqlField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardSqlStructType.AsObject;
  static toObject(includeInstance: boolean, msg: StandardSqlStructType): StandardSqlStructType.AsObject;
  static serializeBinaryToWriter(message: StandardSqlStructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardSqlStructType;
  static deserializeBinaryFromReader(message: StandardSqlStructType, reader: jspb.BinaryReader): StandardSqlStructType;
}

export namespace StandardSqlStructType {
  export type AsObject = {
    fieldsList: Array<StandardSqlField.AsObject>,
  }
}

