import * as jspb from "google-protobuf"

import * as google_api_expr_v1alpha1_syntax_pb from '../../../../google/api/expr/v1alpha1/syntax_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class CheckedExpr extends jspb.Message {
  getReferenceMapMap(): jspb.Map<number, Reference>;
  clearReferenceMapMap(): void;

  getTypeMapMap(): jspb.Map<number, Type>;
  clearTypeMapMap(): void;

  getSourceInfo(): google_api_expr_v1alpha1_syntax_pb.SourceInfo | undefined;
  setSourceInfo(value?: google_api_expr_v1alpha1_syntax_pb.SourceInfo): void;
  hasSourceInfo(): boolean;
  clearSourceInfo(): void;

  getExpr(): google_api_expr_v1alpha1_syntax_pb.Expr | undefined;
  setExpr(value?: google_api_expr_v1alpha1_syntax_pb.Expr): void;
  hasExpr(): boolean;
  clearExpr(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckedExpr.AsObject;
  static toObject(includeInstance: boolean, msg: CheckedExpr): CheckedExpr.AsObject;
  static serializeBinaryToWriter(message: CheckedExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckedExpr;
  static deserializeBinaryFromReader(message: CheckedExpr, reader: jspb.BinaryReader): CheckedExpr;
}

export namespace CheckedExpr {
  export type AsObject = {
    referenceMapMap: Array<[number, Reference.AsObject]>,
    typeMapMap: Array<[number, Type.AsObject]>,
    sourceInfo?: google_api_expr_v1alpha1_syntax_pb.SourceInfo.AsObject,
    expr?: google_api_expr_v1alpha1_syntax_pb.Expr.AsObject,
  }
}

export class Type extends jspb.Message {
  getDyn(): google_protobuf_empty_pb.Empty | undefined;
  setDyn(value?: google_protobuf_empty_pb.Empty): void;
  hasDyn(): boolean;
  clearDyn(): void;

  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): void;

  getPrimitive(): Type.PrimitiveType;
  setPrimitive(value: Type.PrimitiveType): void;

  getWrapper(): Type.PrimitiveType;
  setWrapper(value: Type.PrimitiveType): void;

  getWellKnown(): Type.WellKnownType;
  setWellKnown(value: Type.WellKnownType): void;

  getListType(): Type.ListType | undefined;
  setListType(value?: Type.ListType): void;
  hasListType(): boolean;
  clearListType(): void;

  getMapType(): Type.MapType | undefined;
  setMapType(value?: Type.MapType): void;
  hasMapType(): boolean;
  clearMapType(): void;

  getFunction(): Type.FunctionType | undefined;
  setFunction(value?: Type.FunctionType): void;
  hasFunction(): boolean;
  clearFunction(): void;

  getMessageType(): string;
  setMessageType(value: string): void;

  getTypeParam(): string;
  setTypeParam(value: string): void;

  getType(): Type | undefined;
  setType(value?: Type): void;
  hasType(): boolean;
  clearType(): void;

  getError(): google_protobuf_empty_pb.Empty | undefined;
  setError(value?: google_protobuf_empty_pb.Empty): void;
  hasError(): boolean;
  clearError(): void;

  getAbstractType(): Type.AbstractType | undefined;
  setAbstractType(value?: Type.AbstractType): void;
  hasAbstractType(): boolean;
  clearAbstractType(): void;

  getTypeKindCase(): Type.TypeKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    dyn?: google_protobuf_empty_pb.Empty.AsObject,
    pb_null: google_protobuf_struct_pb.NullValue,
    primitive: Type.PrimitiveType,
    wrapper: Type.PrimitiveType,
    wellKnown: Type.WellKnownType,
    listType?: Type.ListType.AsObject,
    mapType?: Type.MapType.AsObject,
    pb_function?: Type.FunctionType.AsObject,
    messageType: string,
    typeParam: string,
    type?: Type.AsObject,
    error?: google_protobuf_empty_pb.Empty.AsObject,
    abstractType?: Type.AbstractType.AsObject,
  }

  export class ListType extends jspb.Message {
    getElemType(): Type | undefined;
    setElemType(value?: Type): void;
    hasElemType(): boolean;
    clearElemType(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListType.AsObject;
    static toObject(includeInstance: boolean, msg: ListType): ListType.AsObject;
    static serializeBinaryToWriter(message: ListType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListType;
    static deserializeBinaryFromReader(message: ListType, reader: jspb.BinaryReader): ListType;
  }

  export namespace ListType {
    export type AsObject = {
      elemType?: Type.AsObject,
    }
  }


  export class MapType extends jspb.Message {
    getKeyType(): Type | undefined;
    setKeyType(value?: Type): void;
    hasKeyType(): boolean;
    clearKeyType(): void;

    getValueType(): Type | undefined;
    setValueType(value?: Type): void;
    hasValueType(): boolean;
    clearValueType(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapType.AsObject;
    static toObject(includeInstance: boolean, msg: MapType): MapType.AsObject;
    static serializeBinaryToWriter(message: MapType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapType;
    static deserializeBinaryFromReader(message: MapType, reader: jspb.BinaryReader): MapType;
  }

  export namespace MapType {
    export type AsObject = {
      keyType?: Type.AsObject,
      valueType?: Type.AsObject,
    }
  }


  export class FunctionType extends jspb.Message {
    getResultType(): Type | undefined;
    setResultType(value?: Type): void;
    hasResultType(): boolean;
    clearResultType(): void;

    getArgTypesList(): Array<Type>;
    setArgTypesList(value: Array<Type>): void;
    clearArgTypesList(): void;
    addArgTypes(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionType.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionType): FunctionType.AsObject;
    static serializeBinaryToWriter(message: FunctionType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionType;
    static deserializeBinaryFromReader(message: FunctionType, reader: jspb.BinaryReader): FunctionType;
  }

  export namespace FunctionType {
    export type AsObject = {
      resultType?: Type.AsObject,
      argTypesList: Array<Type.AsObject>,
    }
  }


  export class AbstractType extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getParameterTypesList(): Array<Type>;
    setParameterTypesList(value: Array<Type>): void;
    clearParameterTypesList(): void;
    addParameterTypes(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbstractType.AsObject;
    static toObject(includeInstance: boolean, msg: AbstractType): AbstractType.AsObject;
    static serializeBinaryToWriter(message: AbstractType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbstractType;
    static deserializeBinaryFromReader(message: AbstractType, reader: jspb.BinaryReader): AbstractType;
  }

  export namespace AbstractType {
    export type AsObject = {
      name: string,
      parameterTypesList: Array<Type.AsObject>,
    }
  }


  export enum PrimitiveType { 
    PRIMITIVE_TYPE_UNSPECIFIED = 0,
    BOOL = 1,
    INT64 = 2,
    UINT64 = 3,
    DOUBLE = 4,
    STRING = 5,
    BYTES = 6,
  }

  export enum WellKnownType { 
    WELL_KNOWN_TYPE_UNSPECIFIED = 0,
    ANY = 1,
    TIMESTAMP = 2,
    DURATION = 3,
  }

  export enum TypeKindCase { 
    TYPE_KIND_NOT_SET = 0,
    DYN = 1,
    NULL = 2,
    PRIMITIVE = 3,
    WRAPPER = 4,
    WELL_KNOWN = 5,
    LIST_TYPE = 6,
    MAP_TYPE = 7,
    FUNCTION = 8,
    MESSAGE_TYPE = 9,
    TYPE_PARAM = 10,
    TYPE = 11,
    ERROR = 12,
    ABSTRACT_TYPE = 14,
  }
}

export class Decl extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIdent(): Decl.IdentDecl | undefined;
  setIdent(value?: Decl.IdentDecl): void;
  hasIdent(): boolean;
  clearIdent(): void;

  getFunction(): Decl.FunctionDecl | undefined;
  setFunction(value?: Decl.FunctionDecl): void;
  hasFunction(): boolean;
  clearFunction(): void;

  getDeclKindCase(): Decl.DeclKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decl.AsObject;
  static toObject(includeInstance: boolean, msg: Decl): Decl.AsObject;
  static serializeBinaryToWriter(message: Decl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decl;
  static deserializeBinaryFromReader(message: Decl, reader: jspb.BinaryReader): Decl;
}

export namespace Decl {
  export type AsObject = {
    name: string,
    ident?: Decl.IdentDecl.AsObject,
    pb_function?: Decl.FunctionDecl.AsObject,
  }

  export class IdentDecl extends jspb.Message {
    getType(): Type | undefined;
    setType(value?: Type): void;
    hasType(): boolean;
    clearType(): void;

    getValue(): google_api_expr_v1alpha1_syntax_pb.Constant | undefined;
    setValue(value?: google_api_expr_v1alpha1_syntax_pb.Constant): void;
    hasValue(): boolean;
    clearValue(): void;

    getDoc(): string;
    setDoc(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdentDecl.AsObject;
    static toObject(includeInstance: boolean, msg: IdentDecl): IdentDecl.AsObject;
    static serializeBinaryToWriter(message: IdentDecl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdentDecl;
    static deserializeBinaryFromReader(message: IdentDecl, reader: jspb.BinaryReader): IdentDecl;
  }

  export namespace IdentDecl {
    export type AsObject = {
      type?: Type.AsObject,
      value?: google_api_expr_v1alpha1_syntax_pb.Constant.AsObject,
      doc: string,
    }
  }


  export class FunctionDecl extends jspb.Message {
    getOverloadsList(): Array<Decl.FunctionDecl.Overload>;
    setOverloadsList(value: Array<Decl.FunctionDecl.Overload>): void;
    clearOverloadsList(): void;
    addOverloads(value?: Decl.FunctionDecl.Overload, index?: number): Decl.FunctionDecl.Overload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionDecl.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionDecl): FunctionDecl.AsObject;
    static serializeBinaryToWriter(message: FunctionDecl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionDecl;
    static deserializeBinaryFromReader(message: FunctionDecl, reader: jspb.BinaryReader): FunctionDecl;
  }

  export namespace FunctionDecl {
    export type AsObject = {
      overloadsList: Array<Decl.FunctionDecl.Overload.AsObject>,
    }

    export class Overload extends jspb.Message {
      getOverloadId(): string;
      setOverloadId(value: string): void;

      getParamsList(): Array<Type>;
      setParamsList(value: Array<Type>): void;
      clearParamsList(): void;
      addParams(value?: Type, index?: number): Type;

      getTypeParamsList(): Array<string>;
      setTypeParamsList(value: Array<string>): void;
      clearTypeParamsList(): void;
      addTypeParams(value: string, index?: number): void;

      getResultType(): Type | undefined;
      setResultType(value?: Type): void;
      hasResultType(): boolean;
      clearResultType(): void;

      getIsInstanceFunction(): boolean;
      setIsInstanceFunction(value: boolean): void;

      getDoc(): string;
      setDoc(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Overload.AsObject;
      static toObject(includeInstance: boolean, msg: Overload): Overload.AsObject;
      static serializeBinaryToWriter(message: Overload, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Overload;
      static deserializeBinaryFromReader(message: Overload, reader: jspb.BinaryReader): Overload;
    }

    export namespace Overload {
      export type AsObject = {
        overloadId: string,
        paramsList: Array<Type.AsObject>,
        typeParamsList: Array<string>,
        resultType?: Type.AsObject,
        isInstanceFunction: boolean,
        doc: string,
      }
    }

  }


  export enum DeclKindCase { 
    DECL_KIND_NOT_SET = 0,
    IDENT = 2,
    FUNCTION = 3,
  }
}

export class Reference extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOverloadIdList(): Array<string>;
  setOverloadIdList(value: Array<string>): void;
  clearOverloadIdList(): void;
  addOverloadId(value: string, index?: number): void;

  getValue(): google_api_expr_v1alpha1_syntax_pb.Constant | undefined;
  setValue(value?: google_api_expr_v1alpha1_syntax_pb.Constant): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    name: string,
    overloadIdList: Array<string>,
    value?: google_api_expr_v1alpha1_syntax_pb.Constant.AsObject,
  }
}

