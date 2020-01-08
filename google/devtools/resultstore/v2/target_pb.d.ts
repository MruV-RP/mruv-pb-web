import * as jspb from "google-protobuf"

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';

export class Target extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): Target.Id | undefined;
  setId(value?: Target.Id): void;
  hasId(): boolean;
  clearId(): void;

  getStatusAttributes(): google_devtools_resultstore_v2_common_pb.StatusAttributes | undefined;
  setStatusAttributes(value?: google_devtools_resultstore_v2_common_pb.StatusAttributes): void;
  hasStatusAttributes(): boolean;
  clearStatusAttributes(): void;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;
  hasTiming(): boolean;
  clearTiming(): void;

  getTargetAttributes(): TargetAttributes | undefined;
  setTargetAttributes(value?: TargetAttributes): void;
  hasTargetAttributes(): boolean;
  clearTargetAttributes(): void;

  getTestAttributes(): TestAttributes | undefined;
  setTestAttributes(value?: TestAttributes): void;
  hasTestAttributes(): boolean;
  clearTestAttributes(): void;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  clearPropertiesList(): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  clearFilesList(): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  getVisible(): boolean;
  setVisible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Target.AsObject;
  static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
  static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Target;
  static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
  export type AsObject = {
    name: string,
    id?: Target.Id.AsObject,
    statusAttributes?: google_devtools_resultstore_v2_common_pb.StatusAttributes.AsObject,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    targetAttributes?: TargetAttributes.AsObject,
    testAttributes?: TestAttributes.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
    visible: boolean,
  }

  export class Id extends jspb.Message {
    getInvocationId(): string;
    setInvocationId(value: string): void;

    getTargetId(): string;
    setTargetId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      invocationId: string,
      targetId: string,
    }
  }

}

export class TargetAttributes extends jspb.Message {
  getType(): TargetType;
  setType(value: TargetType): void;

  getLanguage(): google_devtools_resultstore_v2_common_pb.Language;
  setLanguage(value: google_devtools_resultstore_v2_common_pb.Language): void;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  clearTagsList(): void;
  addTags(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TargetAttributes): TargetAttributes.AsObject;
  static serializeBinaryToWriter(message: TargetAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetAttributes;
  static deserializeBinaryFromReader(message: TargetAttributes, reader: jspb.BinaryReader): TargetAttributes;
}

export namespace TargetAttributes {
  export type AsObject = {
    type: TargetType,
    language: google_devtools_resultstore_v2_common_pb.Language,
    tagsList: Array<string>,
  }
}

export class TestAttributes extends jspb.Message {
  getSize(): TestSize;
  setSize(value: TestSize): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: TestAttributes): TestAttributes.AsObject;
  static serializeBinaryToWriter(message: TestAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestAttributes;
  static deserializeBinaryFromReader(message: TestAttributes, reader: jspb.BinaryReader): TestAttributes;
}

export namespace TestAttributes {
  export type AsObject = {
    size: TestSize,
  }
}

export enum TargetType { 
  TARGET_TYPE_UNSPECIFIED = 0,
  APPLICATION = 1,
  BINARY = 2,
  LIBRARY = 3,
  PACKAGE = 4,
  TEST = 5,
}
export enum TestSize { 
  TEST_SIZE_UNSPECIFIED = 0,
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  ENORMOUS = 4,
  OTHER_SIZE = 5,
}
