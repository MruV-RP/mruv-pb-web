import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_datastore_v1_entity_pb from '../../../google/datastore/v1/entity_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_type_latlng_pb from '../../../google/type/latlng_pb';

export class EntityResult extends jspb.Message {
  getEntity(): google_datastore_v1_entity_pb.Entity | undefined;
  setEntity(value?: google_datastore_v1_entity_pb.Entity): void;
  hasEntity(): boolean;
  clearEntity(): void;

  getVersion(): number;
  setVersion(value: number): void;

  getCursor(): Uint8Array | string;
  getCursor_asU8(): Uint8Array;
  getCursor_asB64(): string;
  setCursor(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityResult.AsObject;
  static toObject(includeInstance: boolean, msg: EntityResult): EntityResult.AsObject;
  static serializeBinaryToWriter(message: EntityResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityResult;
  static deserializeBinaryFromReader(message: EntityResult, reader: jspb.BinaryReader): EntityResult;
}

export namespace EntityResult {
  export type AsObject = {
    entity?: google_datastore_v1_entity_pb.Entity.AsObject,
    version: number,
    cursor: Uint8Array | string,
  }

  export enum ResultType { 
    RESULT_TYPE_UNSPECIFIED = 0,
    FULL = 1,
    PROJECTION = 2,
    KEY_ONLY = 3,
  }
}

export class Query extends jspb.Message {
  getProjectionList(): Array<Projection>;
  setProjectionList(value: Array<Projection>): void;
  clearProjectionList(): void;
  addProjection(value?: Projection, index?: number): Projection;

  getKindList(): Array<KindExpression>;
  setKindList(value: Array<KindExpression>): void;
  clearKindList(): void;
  addKind(value?: KindExpression, index?: number): KindExpression;

  getFilter(): Filter | undefined;
  setFilter(value?: Filter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  getOrderList(): Array<PropertyOrder>;
  setOrderList(value: Array<PropertyOrder>): void;
  clearOrderList(): void;
  addOrder(value?: PropertyOrder, index?: number): PropertyOrder;

  getDistinctOnList(): Array<PropertyReference>;
  setDistinctOnList(value: Array<PropertyReference>): void;
  clearDistinctOnList(): void;
  addDistinctOn(value?: PropertyReference, index?: number): PropertyReference;

  getStartCursor(): Uint8Array | string;
  getStartCursor_asU8(): Uint8Array;
  getStartCursor_asB64(): string;
  setStartCursor(value: Uint8Array | string): void;

  getEndCursor(): Uint8Array | string;
  getEndCursor_asU8(): Uint8Array;
  getEndCursor_asB64(): string;
  setEndCursor(value: Uint8Array | string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): void;
  hasLimit(): boolean;
  clearLimit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    projectionList: Array<Projection.AsObject>,
    kindList: Array<KindExpression.AsObject>,
    filter?: Filter.AsObject,
    orderList: Array<PropertyOrder.AsObject>,
    distinctOnList: Array<PropertyReference.AsObject>,
    startCursor: Uint8Array | string,
    endCursor: Uint8Array | string,
    offset: number,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class KindExpression extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KindExpression.AsObject;
  static toObject(includeInstance: boolean, msg: KindExpression): KindExpression.AsObject;
  static serializeBinaryToWriter(message: KindExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KindExpression;
  static deserializeBinaryFromReader(message: KindExpression, reader: jspb.BinaryReader): KindExpression;
}

export namespace KindExpression {
  export type AsObject = {
    name: string,
  }
}

export class PropertyReference extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyReference.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyReference): PropertyReference.AsObject;
  static serializeBinaryToWriter(message: PropertyReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyReference;
  static deserializeBinaryFromReader(message: PropertyReference, reader: jspb.BinaryReader): PropertyReference;
}

export namespace PropertyReference {
  export type AsObject = {
    name: string,
  }
}

export class Projection extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): void;
  hasProperty(): boolean;
  clearProperty(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Projection.AsObject;
  static toObject(includeInstance: boolean, msg: Projection): Projection.AsObject;
  static serializeBinaryToWriter(message: Projection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Projection;
  static deserializeBinaryFromReader(message: Projection, reader: jspb.BinaryReader): Projection;
}

export namespace Projection {
  export type AsObject = {
    property?: PropertyReference.AsObject,
  }
}

export class PropertyOrder extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getDirection(): PropertyOrder.Direction;
  setDirection(value: PropertyOrder.Direction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyOrder.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyOrder): PropertyOrder.AsObject;
  static serializeBinaryToWriter(message: PropertyOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyOrder;
  static deserializeBinaryFromReader(message: PropertyOrder, reader: jspb.BinaryReader): PropertyOrder;
}

export namespace PropertyOrder {
  export type AsObject = {
    property?: PropertyReference.AsObject,
    direction: PropertyOrder.Direction,
  }

  export enum Direction { 
    DIRECTION_UNSPECIFIED = 0,
    ASCENDING = 1,
    DESCENDING = 2,
  }
}

export class Filter extends jspb.Message {
  getCompositeFilter(): CompositeFilter | undefined;
  setCompositeFilter(value?: CompositeFilter): void;
  hasCompositeFilter(): boolean;
  clearCompositeFilter(): void;

  getPropertyFilter(): PropertyFilter | undefined;
  setPropertyFilter(value?: PropertyFilter): void;
  hasPropertyFilter(): boolean;
  clearPropertyFilter(): void;

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
    compositeFilter?: CompositeFilter.AsObject,
    propertyFilter?: PropertyFilter.AsObject,
  }

  export enum FilterTypeCase { 
    FILTER_TYPE_NOT_SET = 0,
    COMPOSITE_FILTER = 1,
    PROPERTY_FILTER = 2,
  }
}

export class CompositeFilter extends jspb.Message {
  getOp(): CompositeFilter.Operator;
  setOp(value: CompositeFilter.Operator): void;

  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  clearFiltersList(): void;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeFilter): CompositeFilter.AsObject;
  static serializeBinaryToWriter(message: CompositeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeFilter;
  static deserializeBinaryFromReader(message: CompositeFilter, reader: jspb.BinaryReader): CompositeFilter;
}

export namespace CompositeFilter {
  export type AsObject = {
    op: CompositeFilter.Operator,
    filtersList: Array<Filter.AsObject>,
  }

  export enum Operator { 
    OPERATOR_UNSPECIFIED = 0,
    AND = 1,
  }
}

export class PropertyFilter extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): void;
  hasProperty(): boolean;
  clearProperty(): void;

  getOp(): PropertyFilter.Operator;
  setOp(value: PropertyFilter.Operator): void;

  getValue(): google_datastore_v1_entity_pb.Value | undefined;
  setValue(value?: google_datastore_v1_entity_pb.Value): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyFilter): PropertyFilter.AsObject;
  static serializeBinaryToWriter(message: PropertyFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyFilter;
  static deserializeBinaryFromReader(message: PropertyFilter, reader: jspb.BinaryReader): PropertyFilter;
}

export namespace PropertyFilter {
  export type AsObject = {
    property?: PropertyReference.AsObject,
    op: PropertyFilter.Operator,
    value?: google_datastore_v1_entity_pb.Value.AsObject,
  }

  export enum Operator { 
    OPERATOR_UNSPECIFIED = 0,
    LESS_THAN = 1,
    LESS_THAN_OR_EQUAL = 2,
    GREATER_THAN = 3,
    GREATER_THAN_OR_EQUAL = 4,
    EQUAL = 5,
    HAS_ANCESTOR = 11,
  }
}

export class GqlQuery extends jspb.Message {
  getQueryString(): string;
  setQueryString(value: string): void;

  getAllowLiterals(): boolean;
  setAllowLiterals(value: boolean): void;

  getNamedBindingsMap(): jspb.Map<string, GqlQueryParameter>;
  clearNamedBindingsMap(): void;

  getPositionalBindingsList(): Array<GqlQueryParameter>;
  setPositionalBindingsList(value: Array<GqlQueryParameter>): void;
  clearPositionalBindingsList(): void;
  addPositionalBindings(value?: GqlQueryParameter, index?: number): GqlQueryParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GqlQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GqlQuery): GqlQuery.AsObject;
  static serializeBinaryToWriter(message: GqlQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GqlQuery;
  static deserializeBinaryFromReader(message: GqlQuery, reader: jspb.BinaryReader): GqlQuery;
}

export namespace GqlQuery {
  export type AsObject = {
    queryString: string,
    allowLiterals: boolean,
    namedBindingsMap: Array<[string, GqlQueryParameter.AsObject]>,
    positionalBindingsList: Array<GqlQueryParameter.AsObject>,
  }
}

export class GqlQueryParameter extends jspb.Message {
  getValue(): google_datastore_v1_entity_pb.Value | undefined;
  setValue(value?: google_datastore_v1_entity_pb.Value): void;
  hasValue(): boolean;
  clearValue(): void;

  getCursor(): Uint8Array | string;
  getCursor_asU8(): Uint8Array;
  getCursor_asB64(): string;
  setCursor(value: Uint8Array | string): void;

  getParameterTypeCase(): GqlQueryParameter.ParameterTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GqlQueryParameter.AsObject;
  static toObject(includeInstance: boolean, msg: GqlQueryParameter): GqlQueryParameter.AsObject;
  static serializeBinaryToWriter(message: GqlQueryParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GqlQueryParameter;
  static deserializeBinaryFromReader(message: GqlQueryParameter, reader: jspb.BinaryReader): GqlQueryParameter;
}

export namespace GqlQueryParameter {
  export type AsObject = {
    value?: google_datastore_v1_entity_pb.Value.AsObject,
    cursor: Uint8Array | string,
  }

  export enum ParameterTypeCase { 
    PARAMETER_TYPE_NOT_SET = 0,
    VALUE = 2,
    CURSOR = 3,
  }
}

export class QueryResultBatch extends jspb.Message {
  getSkippedResults(): number;
  setSkippedResults(value: number): void;

  getSkippedCursor(): Uint8Array | string;
  getSkippedCursor_asU8(): Uint8Array;
  getSkippedCursor_asB64(): string;
  setSkippedCursor(value: Uint8Array | string): void;

  getEntityResultType(): EntityResult.ResultType;
  setEntityResultType(value: EntityResult.ResultType): void;

  getEntityResultsList(): Array<EntityResult>;
  setEntityResultsList(value: Array<EntityResult>): void;
  clearEntityResultsList(): void;
  addEntityResults(value?: EntityResult, index?: number): EntityResult;

  getEndCursor(): Uint8Array | string;
  getEndCursor_asU8(): Uint8Array;
  getEndCursor_asB64(): string;
  setEndCursor(value: Uint8Array | string): void;

  getMoreResults(): QueryResultBatch.MoreResultsType;
  setMoreResults(value: QueryResultBatch.MoreResultsType): void;

  getSnapshotVersion(): number;
  setSnapshotVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResultBatch.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResultBatch): QueryResultBatch.AsObject;
  static serializeBinaryToWriter(message: QueryResultBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResultBatch;
  static deserializeBinaryFromReader(message: QueryResultBatch, reader: jspb.BinaryReader): QueryResultBatch;
}

export namespace QueryResultBatch {
  export type AsObject = {
    skippedResults: number,
    skippedCursor: Uint8Array | string,
    entityResultType: EntityResult.ResultType,
    entityResultsList: Array<EntityResult.AsObject>,
    endCursor: Uint8Array | string,
    moreResults: QueryResultBatch.MoreResultsType,
    snapshotVersion: number,
  }

  export enum MoreResultsType { 
    MORE_RESULTS_TYPE_UNSPECIFIED = 0,
    NOT_FINISHED = 1,
    MORE_RESULTS_AFTER_LIMIT = 2,
    MORE_RESULTS_AFTER_CURSOR = 4,
    NO_MORE_RESULTS = 3,
  }
}

