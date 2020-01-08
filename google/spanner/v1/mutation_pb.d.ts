import * as jspb from "google-protobuf"

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_spanner_v1_keys_pb from '../../../google/spanner/v1/keys_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';

export class Mutation extends jspb.Message {
  getInsert(): Mutation.Write | undefined;
  setInsert(value?: Mutation.Write): void;
  hasInsert(): boolean;
  clearInsert(): void;

  getUpdate(): Mutation.Write | undefined;
  setUpdate(value?: Mutation.Write): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getInsertOrUpdate(): Mutation.Write | undefined;
  setInsertOrUpdate(value?: Mutation.Write): void;
  hasInsertOrUpdate(): boolean;
  clearInsertOrUpdate(): void;

  getReplace(): Mutation.Write | undefined;
  setReplace(value?: Mutation.Write): void;
  hasReplace(): boolean;
  clearReplace(): void;

  getDelete(): Mutation.Delete | undefined;
  setDelete(value?: Mutation.Delete): void;
  hasDelete(): boolean;
  clearDelete(): void;

  getOperationCase(): Mutation.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mutation.AsObject;
  static toObject(includeInstance: boolean, msg: Mutation): Mutation.AsObject;
  static serializeBinaryToWriter(message: Mutation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mutation;
  static deserializeBinaryFromReader(message: Mutation, reader: jspb.BinaryReader): Mutation;
}

export namespace Mutation {
  export type AsObject = {
    insert?: Mutation.Write.AsObject,
    update?: Mutation.Write.AsObject,
    insertOrUpdate?: Mutation.Write.AsObject,
    replace?: Mutation.Write.AsObject,
    pb_delete?: Mutation.Delete.AsObject,
  }

  export class Write extends jspb.Message {
    getTable(): string;
    setTable(value: string): void;

    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): void;
    clearColumnsList(): void;
    addColumns(value: string, index?: number): void;

    getValuesList(): Array<google_protobuf_struct_pb.ListValue>;
    setValuesList(value: Array<google_protobuf_struct_pb.ListValue>): void;
    clearValuesList(): void;
    addValues(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Write.AsObject;
    static toObject(includeInstance: boolean, msg: Write): Write.AsObject;
    static serializeBinaryToWriter(message: Write, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Write;
    static deserializeBinaryFromReader(message: Write, reader: jspb.BinaryReader): Write;
  }

  export namespace Write {
    export type AsObject = {
      table: string,
      columnsList: Array<string>,
      valuesList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    }
  }


  export class Delete extends jspb.Message {
    getTable(): string;
    setTable(value: string): void;

    getKeySet(): google_spanner_v1_keys_pb.KeySet | undefined;
    setKeySet(value?: google_spanner_v1_keys_pb.KeySet): void;
    hasKeySet(): boolean;
    clearKeySet(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delete.AsObject;
    static toObject(includeInstance: boolean, msg: Delete): Delete.AsObject;
    static serializeBinaryToWriter(message: Delete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delete;
    static deserializeBinaryFromReader(message: Delete, reader: jspb.BinaryReader): Delete;
  }

  export namespace Delete {
    export type AsObject = {
      table: string,
      keySet?: google_spanner_v1_keys_pb.KeySet.AsObject,
    }
  }


  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    INSERT = 1,
    UPDATE = 2,
    INSERT_OR_UPDATE = 3,
    REPLACE = 4,
    DELETE = 5,
  }
}

