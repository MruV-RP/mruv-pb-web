import * as jspb from "google-protobuf"

import * as google_cloud_websecurityscanner_v1beta_scan_config_error_pb from '../../../../google/cloud/websecurityscanner/v1beta/scan_config_error_pb';

export class ScanRunErrorTrace extends jspb.Message {
  getCode(): ScanRunErrorTrace.Code;
  setCode(value: ScanRunErrorTrace.Code): void;

  getScanConfigError(): google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError | undefined;
  setScanConfigError(value?: google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError): void;
  hasScanConfigError(): boolean;
  clearScanConfigError(): void;

  getMostCommonHttpErrorCode(): number;
  setMostCommonHttpErrorCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRunErrorTrace.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRunErrorTrace): ScanRunErrorTrace.AsObject;
  static serializeBinaryToWriter(message: ScanRunErrorTrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRunErrorTrace;
  static deserializeBinaryFromReader(message: ScanRunErrorTrace, reader: jspb.BinaryReader): ScanRunErrorTrace;
}

export namespace ScanRunErrorTrace {
  export type AsObject = {
    code: ScanRunErrorTrace.Code,
    scanConfigError?: google_cloud_websecurityscanner_v1beta_scan_config_error_pb.ScanConfigError.AsObject,
    mostCommonHttpErrorCode: number,
  }

  export enum Code { 
    CODE_UNSPECIFIED = 0,
    INTERNAL_ERROR = 1,
    SCAN_CONFIG_ISSUE = 2,
    AUTHENTICATION_CONFIG_ISSUE = 3,
    TIMED_OUT_WHILE_SCANNING = 4,
    TOO_MANY_REDIRECTS = 5,
    TOO_MANY_HTTP_ERRORS = 6,
  }
}

