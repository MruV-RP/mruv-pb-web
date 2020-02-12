import * as jspb from "google-protobuf"

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Value extends jspb.Message {
  getNullValue(): google_protobuf_struct_pb.NullValue;
  setNullValue(value: google_protobuf_struct_pb.NullValue): void;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getInt64Value(): number;
  setInt64Value(value: number): void;

  getUint64Value(): number;
  setUint64Value(value: number): void;

  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  getStringValue(): string;
  setStringValue(value: string): void;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): void;

  getEnumValue(): EnumValue | undefined;
  setEnumValue(value?: EnumValue): void;
  hasEnumValue(): boolean;
  clearEnumValue(): void;

  getObjectValue(): google_protobuf_any_pb.Any | undefined;
  setObjectValue(value?: google_protobuf_any_pb.Any): void;
  hasObjectValue(): boolean;
  clearObjectValue(): void;

  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): void;
  hasMapValue(): boolean;
  clearMapValue(): void;

  getListValue(): ListValue | undefined;
  setListValue(value?: ListValue): void;
  hasListValue(): boolean;
  clearListValue(): void;

  getTypeValue(): string;
  setTypeValue(value: string): void;

  getKindCase(): Value.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValue,
    boolValue: boolean,
    int64Value: number,
    uint64Value: number,
    doubleValue: number,
    stringValue: string,
    bytesValue: Uint8Array | string,
    enumValue?: EnumValue.AsObject,
    objectValue?: google_protobuf_any_pb.Any.AsObject,
    mapValue?: MapValue.AsObject,
    listValue?: ListValue.AsObject,
    typeValue: string,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL_VALUE = 1,
    BOOL_VALUE = 2,
    INT64_VALUE = 3,
    UINT64_VALUE = 4,
    DOUBLE_VALUE = 5,
    STRING_VALUE = 6,
    BYTES_VALUE = 7,
    ENUM_VALUE = 9,
    OBJECT_VALUE = 10,
    MAP_VALUE = 11,
    LIST_VALUE = 12,
    TYPE_VALUE = 15,
  }
}

export class EnumValue extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValue.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValue): EnumValue.AsObject;
  static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValue;
  static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
}

export namespace EnumValue {
  export type AsObject = {
    type: string,
    value: number,
  }
}

export class ListValue extends jspb.Message {
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  clearValuesList(): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValue.AsObject;
  static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
  static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValue;
  static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export namespace ListValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export class MapValue extends jspb.Message {
  getEntriesList(): Array<MapValue.Entry>;
  setEntriesList(value: Array<MapValue.Entry>): void;
  clearEntriesList(): void;
  addEntries(value?: MapValue.Entry, index?: number): MapValue.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    entriesList: Array<MapValue.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    getKey(): Value | undefined;
    setKey(value?: Value): void;
    hasKey(): boolean;
    clearKey(): void;

    getValue(): Value | undefined;
    setValue(value?: Value): void;
    hasValue(): boolean;
    clearValue(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      key?: Value.AsObject,
      value?: Value.AsObject,
    }
  }

}

