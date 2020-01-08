import * as jspb from "google-protobuf"

import * as google_firestore_v1beta1_document_pb from '../../../google/firestore/v1beta1/document_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class StructuredQuery extends jspb.Message {
  getSelect(): StructuredQuery.Projection | undefined;
  setSelect(value?: StructuredQuery.Projection): void;
  hasSelect(): boolean;
  clearSelect(): void;

  getFromList(): Array<StructuredQuery.CollectionSelector>;
  setFromList(value: Array<StructuredQuery.CollectionSelector>): void;
  clearFromList(): void;
  addFrom(value?: StructuredQuery.CollectionSelector, index?: number): StructuredQuery.CollectionSelector;

  getWhere(): StructuredQuery.Filter | undefined;
  setWhere(value?: StructuredQuery.Filter): void;
  hasWhere(): boolean;
  clearWhere(): void;

  getOrderByList(): Array<StructuredQuery.Order>;
  setOrderByList(value: Array<StructuredQuery.Order>): void;
  clearOrderByList(): void;
  addOrderBy(value?: StructuredQuery.Order, index?: number): StructuredQuery.Order;

  getStartAt(): Cursor | undefined;
  setStartAt(value?: Cursor): void;
  hasStartAt(): boolean;
  clearStartAt(): void;

  getEndAt(): Cursor | undefined;
  setEndAt(value?: Cursor): void;
  hasEndAt(): boolean;
  clearEndAt(): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasLimit(): boolean;
  clearLimit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredQuery.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredQuery): StructuredQuery.AsObject;
  static serializeBinaryToWriter(message: StructuredQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredQuery;
  static deserializeBinaryFromReader(message: StructuredQuery, reader: jspb.BinaryReader): StructuredQuery;
}

export namespace StructuredQuery {
  export type AsObject = {
    select?: StructuredQuery.Projection.AsObject,
    fromList: Array<StructuredQuery.CollectionSelector.AsObject>,
    where?: StructuredQuery.Filter.AsObject,
    orderByList: Array<StructuredQuery.Order.AsObject>,
    startAt?: Cursor.AsObject,
    endAt?: Cursor.AsObject,
    offset: number,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export class CollectionSelector extends jspb.Message {
    getCollectionId(): string;
    setCollectionId(value: string): void;

    getAllDescendants(): boolean;
    setAllDescendants(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionSelector.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionSelector): CollectionSelector.AsObject;
    static serializeBinaryToWriter(message: CollectionSelector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionSelector;
    static deserializeBinaryFromReader(message: CollectionSelector, reader: jspb.BinaryReader): CollectionSelector;
  }

  export namespace CollectionSelector {
    export type AsObject = {
      collectionId: string,
      allDescendants: boolean,
    }
  }


  export class Filter extends jspb.Message {
    getCompositeFilter(): StructuredQuery.CompositeFilter | undefined;
    setCompositeFilter(value?: StructuredQuery.CompositeFilter): void;
    hasCompositeFilter(): boolean;
    clearCompositeFilter(): void;

    getFieldFilter(): StructuredQuery.FieldFilter | undefined;
    setFieldFilter(value?: StructuredQuery.FieldFilter): void;
    hasFieldFilter(): boolean;
    clearFieldFilter(): void;

    getUnaryFilter(): StructuredQuery.UnaryFilter | undefined;
    setUnaryFilter(value?: StructuredQuery.UnaryFilter): void;
    hasUnaryFilter(): boolean;
    clearUnaryFilter(): void;

    getFilterTypeCase(): Filter.FilterTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      compositeFilter?: StructuredQuery.CompositeFilter.AsObject,
      fieldFilter?: StructuredQuery.FieldFilter.AsObject,
      unaryFilter?: StructuredQuery.UnaryFilter.AsObject,
    }

    export enum FilterTypeCase { 
      FILTER_TYPE_NOT_SET = 0,
      COMPOSITE_FILTER = 1,
      FIELD_FILTER = 2,
      UNARY_FILTER = 3,
    }
  }


  export class CompositeFilter extends jspb.Message {
    getOp(): StructuredQuery.CompositeFilter.Operator;
    setOp(value: StructuredQuery.CompositeFilter.Operator): void;

    getFiltersList(): Array<StructuredQuery.Filter>;
    setFiltersList(value: Array<StructuredQuery.Filter>): void;
    clearFiltersList(): void;
    addFilters(value?: StructuredQuery.Filter, index?: number): StructuredQuery.Filter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompositeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CompositeFilter): CompositeFilter.AsObject;
    static serializeBinaryToWriter(message: CompositeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompositeFilter;
    static deserializeBinaryFromReader(message: CompositeFilter, reader: jspb.BinaryReader): CompositeFilter;
  }

  export namespace CompositeFilter {
    export type AsObject = {
      op: StructuredQuery.CompositeFilter.Operator,
      filtersList: Array<StructuredQuery.Filter.AsObject>,
    }

    export enum Operator { 
      OPERATOR_UNSPECIFIED = 0,
      AND = 1,
    }
  }


  export class FieldFilter extends jspb.Message {
    getField(): StructuredQuery.FieldReference | undefined;
    setField(value?: StructuredQuery.FieldReference): void;
    hasField(): boolean;
    clearField(): void;

    getOp(): StructuredQuery.FieldFilter.Operator;
    setOp(value: StructuredQuery.FieldFilter.Operator): void;

    getValue(): google_firestore_v1beta1_document_pb.Value | undefined;
    setValue(value?: google_firestore_v1beta1_document_pb.Value): void;
    hasValue(): boolean;
    clearValue(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldFilter.AsObject;
    static toObject(includeInstance: boolean, msg: FieldFilter): FieldFilter.AsObject;
    static serializeBinaryToWriter(message: FieldFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldFilter;
    static deserializeBinaryFromReader(message: FieldFilter, reader: jspb.BinaryReader): FieldFilter;
  }

  export namespace FieldFilter {
    export type AsObject = {
      field?: StructuredQuery.FieldReference.AsObject,
      op: StructuredQuery.FieldFilter.Operator,
      value?: google_firestore_v1beta1_document_pb.Value.AsObject,
    }

    export enum Operator { 
      OPERATOR_UNSPECIFIED = 0,
      LESS_THAN = 1,
      LESS_THAN_OR_EQUAL = 2,
      GREATER_THAN = 3,
      GREATER_THAN_OR_EQUAL = 4,
      EQUAL = 5,
      ARRAY_CONTAINS = 7,
      IN = 8,
      ARRAY_CONTAINS_ANY = 9,
    }
  }


  export class UnaryFilter extends jspb.Message {
    getOp(): StructuredQuery.UnaryFilter.Operator;
    setOp(value: StructuredQuery.UnaryFilter.Operator): void;

    getField(): StructuredQuery.FieldReference | undefined;
    setField(value?: StructuredQuery.FieldReference): void;
    hasField(): boolean;
    clearField(): void;

    getOperandTypeCase(): UnaryFilter.OperandTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnaryFilter.AsObject;
    static toObject(includeInstance: boolean, msg: UnaryFilter): UnaryFilter.AsObject;
    static serializeBinaryToWriter(message: UnaryFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnaryFilter;
    static deserializeBinaryFromReader(message: UnaryFilter, reader: jspb.BinaryReader): UnaryFilter;
  }

  export namespace UnaryFilter {
    export type AsObject = {
      op: StructuredQuery.UnaryFilter.Operator,
      field?: StructuredQuery.FieldReference.AsObject,
    }

    export enum Operator { 
      OPERATOR_UNSPECIFIED = 0,
      IS_NAN = 2,
      IS_NULL = 3,
    }

    export enum OperandTypeCase { 
      OPERAND_TYPE_NOT_SET = 0,
      FIELD = 2,
    }
  }


  export class Order extends jspb.Message {
    getField(): StructuredQuery.FieldReference | undefined;
    setField(value?: StructuredQuery.FieldReference): void;
    hasField(): boolean;
    clearField(): void;

    getDirection(): StructuredQuery.Direction;
    setDirection(value: StructuredQuery.Direction): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
  }

  export namespace Order {
    export type AsObject = {
      field?: StructuredQuery.FieldReference.AsObject,
      direction: StructuredQuery.Direction,
    }
  }


  export class Projection extends jspb.Message {
    getFieldsList(): Array<StructuredQuery.FieldReference>;
    setFieldsList(value: Array<StructuredQuery.FieldReference>): void;
    clearFieldsList(): void;
    addFields(value?: StructuredQuery.FieldReference, index?: number): StructuredQuery.FieldReference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Projection.AsObject;
    static toObject(includeInstance: boolean, msg: Projection): Projection.AsObject;
    static serializeBinaryToWriter(message: Projection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Projection;
    static deserializeBinaryFromReader(message: Projection, reader: jspb.BinaryReader): Projection;
  }

  export namespace Projection {
    export type AsObject = {
      fieldsList: Array<StructuredQuery.FieldReference.AsObject>,
    }
  }


  export class FieldReference extends jspb.Message {
    getFieldPath(): string;
    setFieldPath(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldReference.AsObject;
    static toObject(includeInstance: boolean, msg: FieldReference): FieldReference.AsObject;
    static serializeBinaryToWriter(message: FieldReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldReference;
    static deserializeBinaryFromReader(message: FieldReference, reader: jspb.BinaryReader): FieldReference;
  }

  export namespace FieldReference {
    export type AsObject = {
      fieldPath: string,
    }
  }


  export enum Direction { 
    DIRECTION_UNSPECIFIED = 0,
    ASCENDING = 1,
    DESCENDING = 2,
  }
}

export class Cursor extends jspb.Message {
  getValuesList(): Array<google_firestore_v1beta1_document_pb.Value>;
  setValuesList(value: Array<google_firestore_v1beta1_document_pb.Value>): void;
  clearValuesList(): void;
  addValues(value?: google_firestore_v1beta1_document_pb.Value, index?: number): google_firestore_v1beta1_document_pb.Value;

  getBefore(): boolean;
  setBefore(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cursor.AsObject;
  static toObject(includeInstance: boolean, msg: Cursor): Cursor.AsObject;
  static serializeBinaryToWriter(message: Cursor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cursor;
  static deserializeBinaryFromReader(message: Cursor, reader: jspb.BinaryReader): Cursor;
}

export namespace Cursor {
  export type AsObject = {
    valuesList: Array<google_firestore_v1beta1_document_pb.Value.AsObject>,
    before: boolean,
  }
}

