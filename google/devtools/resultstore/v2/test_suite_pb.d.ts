import * as jspb from "google-protobuf"

import * as google_devtools_resultstore_v2_common_pb from '../../../../google/devtools/resultstore/v2/common_pb';
import * as google_devtools_resultstore_v2_file_pb from '../../../../google/devtools/resultstore/v2/file_pb';

export class TestSuite extends jspb.Message {
  getSuiteName(): string;
  setSuiteName(value: string): void;

  getTestsList(): Array<Test>;
  setTestsList(value: Array<Test>): void;
  clearTestsList(): void;
  addTests(value?: Test, index?: number): Test;

  getFailuresList(): Array<TestFailure>;
  setFailuresList(value: Array<TestFailure>): void;
  clearFailuresList(): void;
  addFailures(value?: TestFailure, index?: number): TestFailure;

  getErrorsList(): Array<TestError>;
  setErrorsList(value: Array<TestError>): void;
  clearErrorsList(): void;
  addErrors(value?: TestError, index?: number): TestError;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;
  hasTiming(): boolean;
  clearTiming(): void;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  clearPropertiesList(): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  clearFilesList(): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestSuite.AsObject;
  static toObject(includeInstance: boolean, msg: TestSuite): TestSuite.AsObject;
  static serializeBinaryToWriter(message: TestSuite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestSuite;
  static deserializeBinaryFromReader(message: TestSuite, reader: jspb.BinaryReader): TestSuite;
}

export namespace TestSuite {
  export type AsObject = {
    suiteName: string,
    testsList: Array<Test.AsObject>,
    failuresList: Array<TestFailure.AsObject>,
    errorsList: Array<TestError.AsObject>,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }
}

export class Test extends jspb.Message {
  getTestCase(): TestCase | undefined;
  setTestCase(value?: TestCase): void;
  hasTestCase(): boolean;
  clearTestCase(): void;

  getTestSuite(): TestSuite | undefined;
  setTestSuite(value?: TestSuite): void;
  hasTestSuite(): boolean;
  clearTestSuite(): void;

  getTestTypeCase(): Test.TestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Test.AsObject;
  static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
  static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Test;
  static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
}

export namespace Test {
  export type AsObject = {
    testCase?: TestCase.AsObject,
    testSuite?: TestSuite.AsObject,
  }

  export enum TestTypeCase { 
    TEST_TYPE_NOT_SET = 0,
    TEST_CASE = 1,
    TEST_SUITE = 2,
  }
}

export class TestCase extends jspb.Message {
  getCaseName(): string;
  setCaseName(value: string): void;

  getClassName(): string;
  setClassName(value: string): void;

  getResult(): TestCase.Result;
  setResult(value: TestCase.Result): void;

  getFailuresList(): Array<TestFailure>;
  setFailuresList(value: Array<TestFailure>): void;
  clearFailuresList(): void;
  addFailures(value?: TestFailure, index?: number): TestFailure;

  getErrorsList(): Array<TestError>;
  setErrorsList(value: Array<TestError>): void;
  clearErrorsList(): void;
  addErrors(value?: TestError, index?: number): TestError;

  getTiming(): google_devtools_resultstore_v2_common_pb.Timing | undefined;
  setTiming(value?: google_devtools_resultstore_v2_common_pb.Timing): void;
  hasTiming(): boolean;
  clearTiming(): void;

  getPropertiesList(): Array<google_devtools_resultstore_v2_common_pb.Property>;
  setPropertiesList(value: Array<google_devtools_resultstore_v2_common_pb.Property>): void;
  clearPropertiesList(): void;
  addProperties(value?: google_devtools_resultstore_v2_common_pb.Property, index?: number): google_devtools_resultstore_v2_common_pb.Property;

  getFilesList(): Array<google_devtools_resultstore_v2_file_pb.File>;
  setFilesList(value: Array<google_devtools_resultstore_v2_file_pb.File>): void;
  clearFilesList(): void;
  addFiles(value?: google_devtools_resultstore_v2_file_pb.File, index?: number): google_devtools_resultstore_v2_file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestCase.AsObject;
  static toObject(includeInstance: boolean, msg: TestCase): TestCase.AsObject;
  static serializeBinaryToWriter(message: TestCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestCase;
  static deserializeBinaryFromReader(message: TestCase, reader: jspb.BinaryReader): TestCase;
}

export namespace TestCase {
  export type AsObject = {
    caseName: string,
    className: string,
    result: TestCase.Result,
    failuresList: Array<TestFailure.AsObject>,
    errorsList: Array<TestError.AsObject>,
    timing?: google_devtools_resultstore_v2_common_pb.Timing.AsObject,
    propertiesList: Array<google_devtools_resultstore_v2_common_pb.Property.AsObject>,
    filesList: Array<google_devtools_resultstore_v2_file_pb.File.AsObject>,
  }

  export enum Result { 
    RESULT_UNSPECIFIED = 0,
    COMPLETED = 1,
    INTERRUPTED = 2,
    CANCELLED = 3,
    FILTERED = 4,
    SKIPPED = 5,
    SUPPRESSED = 6,
  }
}

export class TestFailure extends jspb.Message {
  getFailureMessage(): string;
  setFailureMessage(value: string): void;

  getExceptionType(): string;
  setExceptionType(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  getExpectedList(): Array<string>;
  setExpectedList(value: Array<string>): void;
  clearExpectedList(): void;
  addExpected(value: string, index?: number): void;

  getActualList(): Array<string>;
  setActualList(value: Array<string>): void;
  clearActualList(): void;
  addActual(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestFailure.AsObject;
  static toObject(includeInstance: boolean, msg: TestFailure): TestFailure.AsObject;
  static serializeBinaryToWriter(message: TestFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestFailure;
  static deserializeBinaryFromReader(message: TestFailure, reader: jspb.BinaryReader): TestFailure;
}

export namespace TestFailure {
  export type AsObject = {
    failureMessage: string,
    exceptionType: string,
    stackTrace: string,
    expectedList: Array<string>,
    actualList: Array<string>,
  }
}

export class TestError extends jspb.Message {
  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getExceptionType(): string;
  setExceptionType(value: string): void;

  getStackTrace(): string;
  setStackTrace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestError.AsObject;
  static toObject(includeInstance: boolean, msg: TestError): TestError.AsObject;
  static serializeBinaryToWriter(message: TestError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestError;
  static deserializeBinaryFromReader(message: TestError, reader: jspb.BinaryReader): TestError;
}

export namespace TestError {
  export type AsObject = {
    errorMessage: string,
    exceptionType: string,
    stackTrace: string,
  }
}

