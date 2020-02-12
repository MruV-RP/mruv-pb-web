import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ParsedExpr extends jspb.Message {
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): void;
  hasExpr(): boolean;
  clearExpr(): void;

  getSourceInfo(): SourceInfo | undefined;
  setSourceInfo(value?: SourceInfo): void;
  hasSourceInfo(): boolean;
  clearSourceInfo(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParsedExpr.AsObject;
  static toObject(includeInstance: boolean, msg: ParsedExpr): ParsedExpr.AsObject;
  static serializeBinaryToWriter(message: ParsedExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParsedExpr;
  static deserializeBinaryFromReader(message: ParsedExpr, reader: jspb.BinaryReader): ParsedExpr;
}

export namespace ParsedExpr {
  export type AsObject = {
    expr?: Expr.AsObject,
    sourceInfo?: SourceInfo.AsObject,
  }
}

export class Expr extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getConstExpr(): Constant | undefined;
  setConstExpr(value?: Constant): void;
  hasConstExpr(): boolean;
  clearConstExpr(): void;

  getIdentExpr(): Expr.Ident | undefined;
  setIdentExpr(value?: Expr.Ident): void;
  hasIdentExpr(): boolean;
  clearIdentExpr(): void;

  getSelectExpr(): Expr.Select | undefined;
  setSelectExpr(value?: Expr.Select): void;
  hasSelectExpr(): boolean;
  clearSelectExpr(): void;

  getCallExpr(): Expr.Call | undefined;
  setCallExpr(value?: Expr.Call): void;
  hasCallExpr(): boolean;
  clearCallExpr(): void;

  getListExpr(): Expr.CreateList | undefined;
  setListExpr(value?: Expr.CreateList): void;
  hasListExpr(): boolean;
  clearListExpr(): void;

  getStructExpr(): Expr.CreateStruct | undefined;
  setStructExpr(value?: Expr.CreateStruct): void;
  hasStructExpr(): boolean;
  clearStructExpr(): void;

  getComprehensionExpr(): Expr.Comprehension | undefined;
  setComprehensionExpr(value?: Expr.Comprehension): void;
  hasComprehensionExpr(): boolean;
  clearComprehensionExpr(): void;

  getExprKindCase(): Expr.ExprKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    id: number,
    constExpr?: Constant.AsObject,
    identExpr?: Expr.Ident.AsObject,
    selectExpr?: Expr.Select.AsObject,
    callExpr?: Expr.Call.AsObject,
    listExpr?: Expr.CreateList.AsObject,
    structExpr?: Expr.CreateStruct.AsObject,
    comprehensionExpr?: Expr.Comprehension.AsObject,
  }

  export class Ident extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ident.AsObject;
    static toObject(includeInstance: boolean, msg: Ident): Ident.AsObject;
    static serializeBinaryToWriter(message: Ident, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ident;
    static deserializeBinaryFromReader(message: Ident, reader: jspb.BinaryReader): Ident;
  }

  export namespace Ident {
    export type AsObject = {
      name: string,
    }
  }


  export class Select extends jspb.Message {
    getOperand(): Expr | undefined;
    setOperand(value?: Expr): void;
    hasOperand(): boolean;
    clearOperand(): void;

    getField(): string;
    setField(value: string): void;

    getTestOnly(): boolean;
    setTestOnly(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Select.AsObject;
    static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
    static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Select;
    static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
  }

  export namespace Select {
    export type AsObject = {
      operand?: Expr.AsObject,
      field: string,
      testOnly: boolean,
    }
  }


  export class Call extends jspb.Message {
    getTarget(): Expr | undefined;
    setTarget(value?: Expr): void;
    hasTarget(): boolean;
    clearTarget(): void;

    getFunction(): string;
    setFunction(value: string): void;

    getArgsList(): Array<Expr>;
    setArgsList(value: Array<Expr>): void;
    clearArgsList(): void;
    addArgs(value?: Expr, index?: number): Expr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Call.AsObject;
    static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
    static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Call;
    static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
  }

  export namespace Call {
    export type AsObject = {
      target?: Expr.AsObject,
      pb_function: string,
      argsList: Array<Expr.AsObject>,
    }
  }


  export class CreateList extends jspb.Message {
    getElementsList(): Array<Expr>;
    setElementsList(value: Array<Expr>): void;
    clearElementsList(): void;
    addElements(value?: Expr, index?: number): Expr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateList.AsObject;
    static toObject(includeInstance: boolean, msg: CreateList): CreateList.AsObject;
    static serializeBinaryToWriter(message: CreateList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateList;
    static deserializeBinaryFromReader(message: CreateList, reader: jspb.BinaryReader): CreateList;
  }

  export namespace CreateList {
    export type AsObject = {
      elementsList: Array<Expr.AsObject>,
    }
  }


  export class CreateStruct extends jspb.Message {
    getMessageName(): string;
    setMessageName(value: string): void;

    getEntriesList(): Array<Expr.CreateStruct.Entry>;
    setEntriesList(value: Array<Expr.CreateStruct.Entry>): void;
    clearEntriesList(): void;
    addEntries(value?: Expr.CreateStruct.Entry, index?: number): Expr.CreateStruct.Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateStruct.AsObject;
    static toObject(includeInstance: boolean, msg: CreateStruct): CreateStruct.AsObject;
    static serializeBinaryToWriter(message: CreateStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateStruct;
    static deserializeBinaryFromReader(message: CreateStruct, reader: jspb.BinaryReader): CreateStruct;
  }

  export namespace CreateStruct {
    export type AsObject = {
      messageName: string,
      entriesList: Array<Expr.CreateStruct.Entry.AsObject>,
    }

    export class Entry extends jspb.Message {
      getId(): number;
      setId(value: number): void;

      getFieldKey(): string;
      setFieldKey(value: string): void;

      getMapKey(): Expr | undefined;
      setMapKey(value?: Expr): void;
      hasMapKey(): boolean;
      clearMapKey(): void;

      getValue(): Expr | undefined;
      setValue(value?: Expr): void;
      hasValue(): boolean;
      clearValue(): void;

      getKeyKindCase(): Entry.KeyKindCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Entry.AsObject;
      static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
      static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Entry;
      static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
    }

    export namespace Entry {
      export type AsObject = {
        id: number,
        fieldKey: string,
        mapKey?: Expr.AsObject,
        value?: Expr.AsObject,
      }

      export enum KeyKindCase { 
        KEY_KIND_NOT_SET = 0,
        FIELD_KEY = 2,
        MAP_KEY = 3,
      }
    }

  }


  export class Comprehension extends jspb.Message {
    getIterVar(): string;
    setIterVar(value: string): void;

    getIterRange(): Expr | undefined;
    setIterRange(value?: Expr): void;
    hasIterRange(): boolean;
    clearIterRange(): void;

    getAccuVar(): string;
    setAccuVar(value: string): void;

    getAccuInit(): Expr | undefined;
    setAccuInit(value?: Expr): void;
    hasAccuInit(): boolean;
    clearAccuInit(): void;

    getLoopCondition(): Expr | undefined;
    setLoopCondition(value?: Expr): void;
    hasLoopCondition(): boolean;
    clearLoopCondition(): void;

    getLoopStep(): Expr | undefined;
    setLoopStep(value?: Expr): void;
    hasLoopStep(): boolean;
    clearLoopStep(): void;

    getResult(): Expr | undefined;
    setResult(value?: Expr): void;
    hasResult(): boolean;
    clearResult(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comprehension.AsObject;
    static toObject(includeInstance: boolean, msg: Comprehension): Comprehension.AsObject;
    static serializeBinaryToWriter(message: Comprehension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comprehension;
    static deserializeBinaryFromReader(message: Comprehension, reader: jspb.BinaryReader): Comprehension;
  }

  export namespace Comprehension {
    export type AsObject = {
      iterVar: string,
      iterRange?: Expr.AsObject,
      accuVar: string,
      accuInit?: Expr.AsObject,
      loopCondition?: Expr.AsObject,
      loopStep?: Expr.AsObject,
      result?: Expr.AsObject,
    }
  }


  export enum ExprKindCase { 
    EXPR_KIND_NOT_SET = 0,
    CONST_EXPR = 3,
    IDENT_EXPR = 4,
    SELECT_EXPR = 5,
    CALL_EXPR = 6,
    LIST_EXPR = 7,
    STRUCT_EXPR = 8,
    COMPREHENSION_EXPR = 9,
  }
}

export class Constant extends jspb.Message {
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

  getDurationValue(): google_protobuf_duration_pb.Duration | undefined;
  setDurationValue(value?: google_protobuf_duration_pb.Duration): void;
  hasDurationValue(): boolean;
  clearDurationValue(): void;

  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTimestampValue(): boolean;
  clearTimestampValue(): void;

  getConstantKindCase(): Constant.ConstantKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constant.AsObject;
  static toObject(includeInstance: boolean, msg: Constant): Constant.AsObject;
  static serializeBinaryToWriter(message: Constant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constant;
  static deserializeBinaryFromReader(message: Constant, reader: jspb.BinaryReader): Constant;
}

export namespace Constant {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValue,
    boolValue: boolean,
    int64Value: number,
    uint64Value: number,
    doubleValue: number,
    stringValue: string,
    bytesValue: Uint8Array | string,
    durationValue?: google_protobuf_duration_pb.Duration.AsObject,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ConstantKindCase { 
    CONSTANT_KIND_NOT_SET = 0,
    NULL_VALUE = 1,
    BOOL_VALUE = 2,
    INT64_VALUE = 3,
    UINT64_VALUE = 4,
    DOUBLE_VALUE = 5,
    STRING_VALUE = 6,
    BYTES_VALUE = 7,
    DURATION_VALUE = 8,
    TIMESTAMP_VALUE = 9,
  }
}

export class SourceInfo extends jspb.Message {
  getSyntaxVersion(): string;
  setSyntaxVersion(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getLineOffsetsList(): Array<number>;
  setLineOffsetsList(value: Array<number>): void;
  clearLineOffsetsList(): void;
  addLineOffsets(value: number, index?: number): void;

  getPositionsMap(): jspb.Map<number, number>;
  clearPositionsMap(): void;

  getMacroCallsMap(): jspb.Map<number, Expr>;
  clearMacroCallsMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SourceInfo): SourceInfo.AsObject;
  static serializeBinaryToWriter(message: SourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceInfo;
  static deserializeBinaryFromReader(message: SourceInfo, reader: jspb.BinaryReader): SourceInfo;
}

export namespace SourceInfo {
  export type AsObject = {
    syntaxVersion: string,
    location: string,
    lineOffsetsList: Array<number>,
    positionsMap: Array<[number, number]>,
    macroCallsMap: Array<[number, Expr.AsObject]>,
  }
}

export class SourcePosition extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLine(): number;
  setLine(value: number): void;

  getColumn(): number;
  setColumn(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourcePosition.AsObject;
  static toObject(includeInstance: boolean, msg: SourcePosition): SourcePosition.AsObject;
  static serializeBinaryToWriter(message: SourcePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourcePosition;
  static deserializeBinaryFromReader(message: SourcePosition, reader: jspb.BinaryReader): SourcePosition;
}

export namespace SourcePosition {
  export type AsObject = {
    location: string,
    offset: number,
    line: number,
    column: number,
  }
}

