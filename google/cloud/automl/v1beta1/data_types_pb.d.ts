import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class DataType extends jspb.Message {
  getListElementType(): DataType | undefined;
  setListElementType(value?: DataType): void;
  hasListElementType(): boolean;
  clearListElementType(): void;

  getStructType(): StructType | undefined;
  setStructType(value?: StructType): void;
  hasStructType(): boolean;
  clearStructType(): void;

  getTimeFormat(): string;
  setTimeFormat(value: string): void;

  getTypeCode(): TypeCode;
  setTypeCode(value: TypeCode): void;

  getNullable(): boolean;
  setNullable(value: boolean): void;

  getDetailsCase(): DataType.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataType.AsObject;
  static toObject(includeInstance: boolean, msg: DataType): DataType.AsObject;
  static serializeBinaryToWriter(message: DataType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataType;
  static deserializeBinaryFromReader(message: DataType, reader: jspb.BinaryReader): DataType;
}

export namespace DataType {
  export type AsObject = {
    listElementType?: DataType.AsObject,
    structType?: StructType.AsObject,
    timeFormat: string,
    typeCode: TypeCode,
    nullable: boolean,
  }

  export enum DetailsCase { 
    DETAILS_NOT_SET = 0,
    LIST_ELEMENT_TYPE = 2,
    STRUCT_TYPE = 3,
    TIME_FORMAT = 5,
  }
}

export class StructType extends jspb.Message {
  getFieldsMap(): jspb.Map<string, DataType>;
  clearFieldsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructType.AsObject;
  static toObject(includeInstance: boolean, msg: StructType): StructType.AsObject;
  static serializeBinaryToWriter(message: StructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructType;
  static deserializeBinaryFromReader(message: StructType, reader: jspb.BinaryReader): StructType;
}

export namespace StructType {
  export type AsObject = {
    fieldsMap: Array<[string, DataType.AsObject]>,
  }
}

export enum TypeCode { 
  TYPE_CODE_UNSPECIFIED = 0,
  FLOAT64 = 3,
  TIMESTAMP = 4,
  STRING = 6,
  ARRAY = 8,
  STRUCT = 9,
  CATEGORY = 10,
}
