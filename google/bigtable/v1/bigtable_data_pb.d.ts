import * as jspb from "google-protobuf"

export class Row extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getFamiliesList(): Array<Family>;
  setFamiliesList(value: Array<Family>): void;
  clearFamiliesList(): void;
  addFamilies(value?: Family, index?: number): Family;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    key: Uint8Array | string,
    familiesList: Array<Family.AsObject>,
  }
}

export class Family extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): void;
  clearColumnsList(): void;
  addColumns(value?: Column, index?: number): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Family.AsObject;
  static toObject(includeInstance: boolean, msg: Family): Family.AsObject;
  static serializeBinaryToWriter(message: Family, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Family;
  static deserializeBinaryFromReader(message: Family, reader: jspb.BinaryReader): Family;
}

export namespace Family {
  export type AsObject = {
    name: string,
    columnsList: Array<Column.AsObject>,
  }
}

export class Column extends jspb.Message {
  getQualifier(): Uint8Array | string;
  getQualifier_asU8(): Uint8Array;
  getQualifier_asB64(): string;
  setQualifier(value: Uint8Array | string): void;

  getCellsList(): Array<Cell>;
  setCellsList(value: Array<Cell>): void;
  clearCellsList(): void;
  addCells(value?: Cell, index?: number): Cell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    qualifier: Uint8Array | string,
    cellsList: Array<Cell.AsObject>,
  }
}

export class Cell extends jspb.Message {
  getTimestampMicros(): number;
  setTimestampMicros(value: number): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  clearLabelsList(): void;
  addLabels(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cell.AsObject;
  static toObject(includeInstance: boolean, msg: Cell): Cell.AsObject;
  static serializeBinaryToWriter(message: Cell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cell;
  static deserializeBinaryFromReader(message: Cell, reader: jspb.BinaryReader): Cell;
}

export namespace Cell {
  export type AsObject = {
    timestampMicros: number,
    value: Uint8Array | string,
    labelsList: Array<string>,
  }
}

export class RowRange extends jspb.Message {
  getStartKey(): Uint8Array | string;
  getStartKey_asU8(): Uint8Array;
  getStartKey_asB64(): string;
  setStartKey(value: Uint8Array | string): void;

  getEndKey(): Uint8Array | string;
  getEndKey_asU8(): Uint8Array;
  getEndKey_asB64(): string;
  setEndKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowRange.AsObject;
  static toObject(includeInstance: boolean, msg: RowRange): RowRange.AsObject;
  static serializeBinaryToWriter(message: RowRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowRange;
  static deserializeBinaryFromReader(message: RowRange, reader: jspb.BinaryReader): RowRange;
}

export namespace RowRange {
  export type AsObject = {
    startKey: Uint8Array | string,
    endKey: Uint8Array | string,
  }
}

export class RowSet extends jspb.Message {
  getRowKeysList(): Array<Uint8Array | string>;
  setRowKeysList(value: Array<Uint8Array | string>): void;
  clearRowKeysList(): void;
  addRowKeys(value: Uint8Array | string, index?: number): void;

  getRowRangesList(): Array<RowRange>;
  setRowRangesList(value: Array<RowRange>): void;
  clearRowRangesList(): void;
  addRowRanges(value?: RowRange, index?: number): RowRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowSet.AsObject;
  static toObject(includeInstance: boolean, msg: RowSet): RowSet.AsObject;
  static serializeBinaryToWriter(message: RowSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowSet;
  static deserializeBinaryFromReader(message: RowSet, reader: jspb.BinaryReader): RowSet;
}

export namespace RowSet {
  export type AsObject = {
    rowKeysList: Array<Uint8Array | string>,
    rowRangesList: Array<RowRange.AsObject>,
  }
}

export class ColumnRange extends jspb.Message {
  getFamilyName(): string;
  setFamilyName(value: string): void;

  getStartQualifierInclusive(): Uint8Array | string;
  getStartQualifierInclusive_asU8(): Uint8Array;
  getStartQualifierInclusive_asB64(): string;
  setStartQualifierInclusive(value: Uint8Array | string): void;

  getStartQualifierExclusive(): Uint8Array | string;
  getStartQualifierExclusive_asU8(): Uint8Array;
  getStartQualifierExclusive_asB64(): string;
  setStartQualifierExclusive(value: Uint8Array | string): void;

  getEndQualifierInclusive(): Uint8Array | string;
  getEndQualifierInclusive_asU8(): Uint8Array;
  getEndQualifierInclusive_asB64(): string;
  setEndQualifierInclusive(value: Uint8Array | string): void;

  getEndQualifierExclusive(): Uint8Array | string;
  getEndQualifierExclusive_asU8(): Uint8Array;
  getEndQualifierExclusive_asB64(): string;
  setEndQualifierExclusive(value: Uint8Array | string): void;

  getStartQualifierCase(): ColumnRange.StartQualifierCase;

  getEndQualifierCase(): ColumnRange.EndQualifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnRange.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnRange): ColumnRange.AsObject;
  static serializeBinaryToWriter(message: ColumnRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnRange;
  static deserializeBinaryFromReader(message: ColumnRange, reader: jspb.BinaryReader): ColumnRange;
}

export namespace ColumnRange {
  export type AsObject = {
    familyName: string,
    startQualifierInclusive: Uint8Array | string,
    startQualifierExclusive: Uint8Array | string,
    endQualifierInclusive: Uint8Array | string,
    endQualifierExclusive: Uint8Array | string,
  }

  export enum StartQualifierCase { 
    START_QUALIFIER_NOT_SET = 0,
    START_QUALIFIER_INCLUSIVE = 2,
    START_QUALIFIER_EXCLUSIVE = 3,
  }

  export enum EndQualifierCase { 
    END_QUALIFIER_NOT_SET = 0,
    END_QUALIFIER_INCLUSIVE = 4,
    END_QUALIFIER_EXCLUSIVE = 5,
  }
}

export class TimestampRange extends jspb.Message {
  getStartTimestampMicros(): number;
  setStartTimestampMicros(value: number): void;

  getEndTimestampMicros(): number;
  setEndTimestampMicros(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampRange): TimestampRange.AsObject;
  static serializeBinaryToWriter(message: TimestampRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampRange;
  static deserializeBinaryFromReader(message: TimestampRange, reader: jspb.BinaryReader): TimestampRange;
}

export namespace TimestampRange {
  export type AsObject = {
    startTimestampMicros: number,
    endTimestampMicros: number,
  }
}

export class ValueRange extends jspb.Message {
  getStartValueInclusive(): Uint8Array | string;
  getStartValueInclusive_asU8(): Uint8Array;
  getStartValueInclusive_asB64(): string;
  setStartValueInclusive(value: Uint8Array | string): void;

  getStartValueExclusive(): Uint8Array | string;
  getStartValueExclusive_asU8(): Uint8Array;
  getStartValueExclusive_asB64(): string;
  setStartValueExclusive(value: Uint8Array | string): void;

  getEndValueInclusive(): Uint8Array | string;
  getEndValueInclusive_asU8(): Uint8Array;
  getEndValueInclusive_asB64(): string;
  setEndValueInclusive(value: Uint8Array | string): void;

  getEndValueExclusive(): Uint8Array | string;
  getEndValueExclusive_asU8(): Uint8Array;
  getEndValueExclusive_asB64(): string;
  setEndValueExclusive(value: Uint8Array | string): void;

  getStartValueCase(): ValueRange.StartValueCase;

  getEndValueCase(): ValueRange.EndValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueRange.AsObject;
  static toObject(includeInstance: boolean, msg: ValueRange): ValueRange.AsObject;
  static serializeBinaryToWriter(message: ValueRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueRange;
  static deserializeBinaryFromReader(message: ValueRange, reader: jspb.BinaryReader): ValueRange;
}

export namespace ValueRange {
  export type AsObject = {
    startValueInclusive: Uint8Array | string,
    startValueExclusive: Uint8Array | string,
    endValueInclusive: Uint8Array | string,
    endValueExclusive: Uint8Array | string,
  }

  export enum StartValueCase { 
    START_VALUE_NOT_SET = 0,
    START_VALUE_INCLUSIVE = 1,
    START_VALUE_EXCLUSIVE = 2,
  }

  export enum EndValueCase { 
    END_VALUE_NOT_SET = 0,
    END_VALUE_INCLUSIVE = 3,
    END_VALUE_EXCLUSIVE = 4,
  }
}

export class RowFilter extends jspb.Message {
  getChain(): RowFilter.Chain | undefined;
  setChain(value?: RowFilter.Chain): void;
  hasChain(): boolean;
  clearChain(): void;

  getInterleave(): RowFilter.Interleave | undefined;
  setInterleave(value?: RowFilter.Interleave): void;
  hasInterleave(): boolean;
  clearInterleave(): void;

  getCondition(): RowFilter.Condition | undefined;
  setCondition(value?: RowFilter.Condition): void;
  hasCondition(): boolean;
  clearCondition(): void;

  getSink(): boolean;
  setSink(value: boolean): void;

  getPassAllFilter(): boolean;
  setPassAllFilter(value: boolean): void;

  getBlockAllFilter(): boolean;
  setBlockAllFilter(value: boolean): void;

  getRowKeyRegexFilter(): Uint8Array | string;
  getRowKeyRegexFilter_asU8(): Uint8Array;
  getRowKeyRegexFilter_asB64(): string;
  setRowKeyRegexFilter(value: Uint8Array | string): void;

  getRowSampleFilter(): number;
  setRowSampleFilter(value: number): void;

  getFamilyNameRegexFilter(): string;
  setFamilyNameRegexFilter(value: string): void;

  getColumnQualifierRegexFilter(): Uint8Array | string;
  getColumnQualifierRegexFilter_asU8(): Uint8Array;
  getColumnQualifierRegexFilter_asB64(): string;
  setColumnQualifierRegexFilter(value: Uint8Array | string): void;

  getColumnRangeFilter(): ColumnRange | undefined;
  setColumnRangeFilter(value?: ColumnRange): void;
  hasColumnRangeFilter(): boolean;
  clearColumnRangeFilter(): void;

  getTimestampRangeFilter(): TimestampRange | undefined;
  setTimestampRangeFilter(value?: TimestampRange): void;
  hasTimestampRangeFilter(): boolean;
  clearTimestampRangeFilter(): void;

  getValueRegexFilter(): Uint8Array | string;
  getValueRegexFilter_asU8(): Uint8Array;
  getValueRegexFilter_asB64(): string;
  setValueRegexFilter(value: Uint8Array | string): void;

  getValueRangeFilter(): ValueRange | undefined;
  setValueRangeFilter(value?: ValueRange): void;
  hasValueRangeFilter(): boolean;
  clearValueRangeFilter(): void;

  getCellsPerRowOffsetFilter(): number;
  setCellsPerRowOffsetFilter(value: number): void;

  getCellsPerRowLimitFilter(): number;
  setCellsPerRowLimitFilter(value: number): void;

  getCellsPerColumnLimitFilter(): number;
  setCellsPerColumnLimitFilter(value: number): void;

  getStripValueTransformer(): boolean;
  setStripValueTransformer(value: boolean): void;

  getApplyLabelTransformer(): string;
  setApplyLabelTransformer(value: string): void;

  getFilterCase(): RowFilter.FilterCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowFilter.AsObject;
  static toObject(includeInstance: boolean, msg: RowFilter): RowFilter.AsObject;
  static serializeBinaryToWriter(message: RowFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowFilter;
  static deserializeBinaryFromReader(message: RowFilter, reader: jspb.BinaryReader): RowFilter;
}

export namespace RowFilter {
  export type AsObject = {
    chain?: RowFilter.Chain.AsObject,
    interleave?: RowFilter.Interleave.AsObject,
    condition?: RowFilter.Condition.AsObject,
    sink: boolean,
    passAllFilter: boolean,
    blockAllFilter: boolean,
    rowKeyRegexFilter: Uint8Array | string,
    rowSampleFilter: number,
    familyNameRegexFilter: string,
    columnQualifierRegexFilter: Uint8Array | string,
    columnRangeFilter?: ColumnRange.AsObject,
    timestampRangeFilter?: TimestampRange.AsObject,
    valueRegexFilter: Uint8Array | string,
    valueRangeFilter?: ValueRange.AsObject,
    cellsPerRowOffsetFilter: number,
    cellsPerRowLimitFilter: number,
    cellsPerColumnLimitFilter: number,
    stripValueTransformer: boolean,
    applyLabelTransformer: string,
  }

  export class Chain extends jspb.Message {
    getFiltersList(): Array<RowFilter>;
    setFiltersList(value: Array<RowFilter>): void;
    clearFiltersList(): void;
    addFilters(value?: RowFilter, index?: number): RowFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Chain.AsObject;
    static toObject(includeInstance: boolean, msg: Chain): Chain.AsObject;
    static serializeBinaryToWriter(message: Chain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Chain;
    static deserializeBinaryFromReader(message: Chain, reader: jspb.BinaryReader): Chain;
  }

  export namespace Chain {
    export type AsObject = {
      filtersList: Array<RowFilter.AsObject>,
    }
  }


  export class Interleave extends jspb.Message {
    getFiltersList(): Array<RowFilter>;
    setFiltersList(value: Array<RowFilter>): void;
    clearFiltersList(): void;
    addFilters(value?: RowFilter, index?: number): RowFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Interleave.AsObject;
    static toObject(includeInstance: boolean, msg: Interleave): Interleave.AsObject;
    static serializeBinaryToWriter(message: Interleave, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Interleave;
    static deserializeBinaryFromReader(message: Interleave, reader: jspb.BinaryReader): Interleave;
  }

  export namespace Interleave {
    export type AsObject = {
      filtersList: Array<RowFilter.AsObject>,
    }
  }


  export class Condition extends jspb.Message {
    getPredicateFilter(): RowFilter | undefined;
    setPredicateFilter(value?: RowFilter): void;
    hasPredicateFilter(): boolean;
    clearPredicateFilter(): void;

    getTrueFilter(): RowFilter | undefined;
    setTrueFilter(value?: RowFilter): void;
    hasTrueFilter(): boolean;
    clearTrueFilter(): void;

    getFalseFilter(): RowFilter | undefined;
    setFalseFilter(value?: RowFilter): void;
    hasFalseFilter(): boolean;
    clearFalseFilter(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
  }

  export namespace Condition {
    export type AsObject = {
      predicateFilter?: RowFilter.AsObject,
      trueFilter?: RowFilter.AsObject,
      falseFilter?: RowFilter.AsObject,
    }
  }


  export enum FilterCase { 
    FILTER_NOT_SET = 0,
    CHAIN = 1,
    INTERLEAVE = 2,
    CONDITION = 3,
    SINK = 16,
    PASS_ALL_FILTER = 17,
    BLOCK_ALL_FILTER = 18,
    ROW_KEY_REGEX_FILTER = 4,
    ROW_SAMPLE_FILTER = 14,
    FAMILY_NAME_REGEX_FILTER = 5,
    COLUMN_QUALIFIER_REGEX_FILTER = 6,
    COLUMN_RANGE_FILTER = 7,
    TIMESTAMP_RANGE_FILTER = 8,
    VALUE_REGEX_FILTER = 9,
    VALUE_RANGE_FILTER = 15,
    CELLS_PER_ROW_OFFSET_FILTER = 10,
    CELLS_PER_ROW_LIMIT_FILTER = 11,
    CELLS_PER_COLUMN_LIMIT_FILTER = 12,
    STRIP_VALUE_TRANSFORMER = 13,
    APPLY_LABEL_TRANSFORMER = 19,
  }
}

export class Mutation extends jspb.Message {
  getSetCell(): Mutation.SetCell | undefined;
  setSetCell(value?: Mutation.SetCell): void;
  hasSetCell(): boolean;
  clearSetCell(): void;

  getDeleteFromColumn(): Mutation.DeleteFromColumn | undefined;
  setDeleteFromColumn(value?: Mutation.DeleteFromColumn): void;
  hasDeleteFromColumn(): boolean;
  clearDeleteFromColumn(): void;

  getDeleteFromFamily(): Mutation.DeleteFromFamily | undefined;
  setDeleteFromFamily(value?: Mutation.DeleteFromFamily): void;
  hasDeleteFromFamily(): boolean;
  clearDeleteFromFamily(): void;

  getDeleteFromRow(): Mutation.DeleteFromRow | undefined;
  setDeleteFromRow(value?: Mutation.DeleteFromRow): void;
  hasDeleteFromRow(): boolean;
  clearDeleteFromRow(): void;

  getMutationCase(): Mutation.MutationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mutation.AsObject;
  static toObject(includeInstance: boolean, msg: Mutation): Mutation.AsObject;
  static serializeBinaryToWriter(message: Mutation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mutation;
  static deserializeBinaryFromReader(message: Mutation, reader: jspb.BinaryReader): Mutation;
}

export namespace Mutation {
  export type AsObject = {
    setCell?: Mutation.SetCell.AsObject,
    deleteFromColumn?: Mutation.DeleteFromColumn.AsObject,
    deleteFromFamily?: Mutation.DeleteFromFamily.AsObject,
    deleteFromRow?: Mutation.DeleteFromRow.AsObject,
  }

  export class SetCell extends jspb.Message {
    getFamilyName(): string;
    setFamilyName(value: string): void;

    getColumnQualifier(): Uint8Array | string;
    getColumnQualifier_asU8(): Uint8Array;
    getColumnQualifier_asB64(): string;
    setColumnQualifier(value: Uint8Array | string): void;

    getTimestampMicros(): number;
    setTimestampMicros(value: number): void;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCell.AsObject;
    static toObject(includeInstance: boolean, msg: SetCell): SetCell.AsObject;
    static serializeBinaryToWriter(message: SetCell, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCell;
    static deserializeBinaryFromReader(message: SetCell, reader: jspb.BinaryReader): SetCell;
  }

  export namespace SetCell {
    export type AsObject = {
      familyName: string,
      columnQualifier: Uint8Array | string,
      timestampMicros: number,
      value: Uint8Array | string,
    }
  }


  export class DeleteFromColumn extends jspb.Message {
    getFamilyName(): string;
    setFamilyName(value: string): void;

    getColumnQualifier(): Uint8Array | string;
    getColumnQualifier_asU8(): Uint8Array;
    getColumnQualifier_asB64(): string;
    setColumnQualifier(value: Uint8Array | string): void;

    getTimeRange(): TimestampRange | undefined;
    setTimeRange(value?: TimestampRange): void;
    hasTimeRange(): boolean;
    clearTimeRange(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFromColumn.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFromColumn): DeleteFromColumn.AsObject;
    static serializeBinaryToWriter(message: DeleteFromColumn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFromColumn;
    static deserializeBinaryFromReader(message: DeleteFromColumn, reader: jspb.BinaryReader): DeleteFromColumn;
  }

  export namespace DeleteFromColumn {
    export type AsObject = {
      familyName: string,
      columnQualifier: Uint8Array | string,
      timeRange?: TimestampRange.AsObject,
    }
  }


  export class DeleteFromFamily extends jspb.Message {
    getFamilyName(): string;
    setFamilyName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFromFamily.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFromFamily): DeleteFromFamily.AsObject;
    static serializeBinaryToWriter(message: DeleteFromFamily, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFromFamily;
    static deserializeBinaryFromReader(message: DeleteFromFamily, reader: jspb.BinaryReader): DeleteFromFamily;
  }

  export namespace DeleteFromFamily {
    export type AsObject = {
      familyName: string,
    }
  }


  export class DeleteFromRow extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFromRow.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFromRow): DeleteFromRow.AsObject;
    static serializeBinaryToWriter(message: DeleteFromRow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFromRow;
    static deserializeBinaryFromReader(message: DeleteFromRow, reader: jspb.BinaryReader): DeleteFromRow;
  }

  export namespace DeleteFromRow {
    export type AsObject = {
    }
  }


  export enum MutationCase { 
    MUTATION_NOT_SET = 0,
    SET_CELL = 1,
    DELETE_FROM_COLUMN = 2,
    DELETE_FROM_FAMILY = 3,
    DELETE_FROM_ROW = 4,
  }
}

export class ReadModifyWriteRule extends jspb.Message {
  getFamilyName(): string;
  setFamilyName(value: string): void;

  getColumnQualifier(): Uint8Array | string;
  getColumnQualifier_asU8(): Uint8Array;
  getColumnQualifier_asB64(): string;
  setColumnQualifier(value: Uint8Array | string): void;

  getAppendValue(): Uint8Array | string;
  getAppendValue_asU8(): Uint8Array;
  getAppendValue_asB64(): string;
  setAppendValue(value: Uint8Array | string): void;

  getIncrementAmount(): number;
  setIncrementAmount(value: number): void;

  getRuleCase(): ReadModifyWriteRule.RuleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadModifyWriteRule.AsObject;
  static toObject(includeInstance: boolean, msg: ReadModifyWriteRule): ReadModifyWriteRule.AsObject;
  static serializeBinaryToWriter(message: ReadModifyWriteRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadModifyWriteRule;
  static deserializeBinaryFromReader(message: ReadModifyWriteRule, reader: jspb.BinaryReader): ReadModifyWriteRule;
}

export namespace ReadModifyWriteRule {
  export type AsObject = {
    familyName: string,
    columnQualifier: Uint8Array | string,
    appendValue: Uint8Array | string,
    incrementAmount: number,
  }

  export enum RuleCase { 
    RULE_NOT_SET = 0,
    APPEND_VALUE = 3,
    INCREMENT_AMOUNT = 4,
  }
}
