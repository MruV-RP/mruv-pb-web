import * as jspb from "google-protobuf"

export class ScanRunWarningTrace extends jspb.Message {
  getCode(): ScanRunWarningTrace.Code;
  setCode(value: ScanRunWarningTrace.Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRunWarningTrace.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRunWarningTrace): ScanRunWarningTrace.AsObject;
  static serializeBinaryToWriter(message: ScanRunWarningTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRunWarningTrace;
  static deserializeBinaryFromReader(message: ScanRunWarningTrace, reader: jspb.BinaryReader): ScanRunWarningTrace;
}

export namespace ScanRunWarningTrace {
  export type AsObject = {
    code: ScanRunWarningTrace.Code,
  }

  export enum Code { 
    CODE_UNSPECIFIED = 0,
    INSUFFICIENT_CRAWL_RESULTS = 1,
    TOO_MANY_CRAWL_RESULTS = 2,
    TOO_MANY_FUZZ_TASKS = 3,
    BLOCKED_BY_IAP = 4,
  }
}

