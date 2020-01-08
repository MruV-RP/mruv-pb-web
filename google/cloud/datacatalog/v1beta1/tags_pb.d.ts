import * as jspb from "google-protobuf"

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Tag extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  getTemplateDisplayName(): string;
  setTemplateDisplayName(value: string): void;

  getColumn(): string;
  setColumn(value: string): void;

  getFieldsMap(): jspb.Map<string, TagField>;
  clearFieldsMap(): void;

  getScopeCase(): Tag.ScopeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    name: string,
    template: string,
    templateDisplayName: string,
    column: string,
    fieldsMap: Array<[string, TagField.AsObject]>,
  }

  export enum ScopeCase { 
    SCOPE_NOT_SET = 0,
    COLUMN = 4,
  }
}

export class TagField extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  getStringValue(): string;
  setStringValue(value: string): void;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestampValue(): boolean;
  clearTimestampValue(): void;

  getEnumValue(): TagField.EnumValue | undefined;
  setEnumValue(value?: TagField.EnumValue): void;
  hasEnumValue(): boolean;
  clearEnumValue(): void;

  getKindCase(): TagField.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagField.AsObject;
  static toObject(includeInstance: boolean, msg: TagField): TagField.AsObject;
  static serializeBinaryToWriter(message: TagField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagField;
  static deserializeBinaryFromReader(message: TagField, reader: jspb.BinaryReader): TagField;
}

export namespace TagField {
  export type AsObject = {
    displayName: string,
    doubleValue: number,
    stringValue: string,
    boolValue: boolean,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    enumValue?: TagField.EnumValue.AsObject,
  }

  export class EnumValue extends jspb.Message {
    getDisplayName(): string;
    setDisplayName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumValue.AsObject;
    static toObject(includeInstance: boolean, msg: EnumValue): EnumValue.AsObject;
    static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumValue;
    static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
  }

  export namespace EnumValue {
    export type AsObject = {
      displayName: string,
    }
  }


  export enum KindCase { 
    KIND_NOT_SET = 0,
    DOUBLE_VALUE = 2,
    STRING_VALUE = 3,
    BOOL_VALUE = 4,
    TIMESTAMP_VALUE = 5,
    ENUM_VALUE = 6,
  }
}

export class TagTemplate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getFieldsMap(): jspb.Map<string, TagTemplateField>;
  clearFieldsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: TagTemplate): TagTemplate.AsObject;
  static serializeBinaryToWriter(message: TagTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagTemplate;
  static deserializeBinaryFromReader(message: TagTemplate, reader: jspb.BinaryReader): TagTemplate;
}

export namespace TagTemplate {
  export type AsObject = {
    name: string,
    displayName: string,
    fieldsMap: Array<[string, TagTemplateField.AsObject]>,
  }
}

export class TagTemplateField extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getType(): FieldType | undefined;
  setType(value?: FieldType): void;
  hasType(): boolean;
  clearType(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagTemplateField.AsObject;
  static toObject(includeInstance: boolean, msg: TagTemplateField): TagTemplateField.AsObject;
  static serializeBinaryToWriter(message: TagTemplateField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagTemplateField;
  static deserializeBinaryFromReader(message: TagTemplateField, reader: jspb.BinaryReader): TagTemplateField;
}

export namespace TagTemplateField {
  export type AsObject = {
    name: string,
    displayName: string,
    type?: FieldType.AsObject,
  }
}

export class FieldType extends jspb.Message {
  getPrimitiveType(): FieldType.PrimitiveType;
  setPrimitiveType(value: FieldType.PrimitiveType): void;

  getEnumType(): FieldType.EnumType | undefined;
  setEnumType(value?: FieldType.EnumType): void;
  hasEnumType(): boolean;
  clearEnumType(): void;

  getTypeDeclCase(): FieldType.TypeDeclCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldType.AsObject;
  static toObject(includeInstance: boolean, msg: FieldType): FieldType.AsObject;
  static serializeBinaryToWriter(message: FieldType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldType;
  static deserializeBinaryFromReader(message: FieldType, reader: jspb.BinaryReader): FieldType;
}

export namespace FieldType {
  export type AsObject = {
    primitiveType: FieldType.PrimitiveType,
    enumType?: FieldType.EnumType.AsObject,
  }

  export class EnumType extends jspb.Message {
    getAllowedValuesList(): Array<FieldType.EnumType.EnumValue>;
    setAllowedValuesList(value: Array<FieldType.EnumType.EnumValue>): void;
    clearAllowedValuesList(): void;
    addAllowedValues(value?: FieldType.EnumType.EnumValue, index?: number): FieldType.EnumType.EnumValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumType.AsObject;
    static toObject(includeInstance: boolean, msg: EnumType): EnumType.AsObject;
    static serializeBinaryToWriter(message: EnumType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumType;
    static deserializeBinaryFromReader(message: EnumType, reader: jspb.BinaryReader): EnumType;
  }

  export namespace EnumType {
    export type AsObject = {
      allowedValuesList: Array<FieldType.EnumType.EnumValue.AsObject>,
    }

    export class EnumValue extends jspb.Message {
      getDisplayName(): string;
      setDisplayName(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EnumValue.AsObject;
      static toObject(includeInstance: boolean, msg: EnumValue): EnumValue.AsObject;
      static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EnumValue;
      static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
    }

    export namespace EnumValue {
      export type AsObject = {
        displayName: string,
      }
    }

  }


  export enum PrimitiveType { 
    PRIMITIVE_TYPE_UNSPECIFIED = 0,
    DOUBLE = 1,
    STRING = 2,
    BOOL = 3,
    TIMESTAMP = 4,
  }

  export enum TypeDeclCase { 
    TYPE_DECL_NOT_SET = 0,
    PRIMITIVE_TYPE = 1,
    ENUM_TYPE = 2,
  }
}

