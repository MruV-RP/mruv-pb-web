import * as jspb from "google-protobuf"

import * as google_firestore_admin_v1_index_pb from '../../../../google/firestore/admin/v1/index_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class Field extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIndexConfig(): Field.IndexConfig | undefined;
  setIndexConfig(value?: Field.IndexConfig): void;
  hasIndexConfig(): boolean;
  clearIndexConfig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    name: string,
    indexConfig?: Field.IndexConfig.AsObject,
  }

  export class IndexConfig extends jspb.Message {
    getIndexesList(): Array<google_firestore_admin_v1_index_pb.Index>;
    setIndexesList(value: Array<google_firestore_admin_v1_index_pb.Index>): void;
    clearIndexesList(): void;
    addIndexes(value?: google_firestore_admin_v1_index_pb.Index, index?: number): google_firestore_admin_v1_index_pb.Index;

    getUsesAncestorConfig(): boolean;
    setUsesAncestorConfig(value: boolean): void;

    getAncestorField(): string;
    setAncestorField(value: string): void;

    getReverting(): boolean;
    setReverting(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfig.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfig): IndexConfig.AsObject;
    static serializeBinaryToWriter(message: IndexConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfig;
    static deserializeBinaryFromReader(message: IndexConfig, reader: jspb.BinaryReader): IndexConfig;
  }

  export namespace IndexConfig {
    export type AsObject = {
      indexesList: Array<google_firestore_admin_v1_index_pb.Index.AsObject>,
      usesAncestorConfig: boolean,
      ancestorField: string,
      reverting: boolean,
    }
  }

}

