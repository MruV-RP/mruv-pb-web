import * as jspb from "google-protobuf"

import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_websecurityscanner_v1beta_scan_run_error_trace_pb from '../../../../google/cloud/websecurityscanner/v1beta/scan_run_error_trace_pb';
import * as google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb from '../../../../google/cloud/websecurityscanner/v1beta/scan_run_warning_trace_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class ScanRun extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getExecutionState(): ScanRun.ExecutionState;
  setExecutionState(value: ScanRun.ExecutionState): void;

  getResultState(): ScanRun.ResultState;
  setResultState(value: ScanRun.ResultState): void;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStartTime(): boolean;
  clearStartTime(): void;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasEndTime(): boolean;
  clearEndTime(): void;

  getUrlsCrawledCount(): number;
  setUrlsCrawledCount(value: number): void;

  getUrlsTestedCount(): number;
  setUrlsTestedCount(value: number): void;

  getHasVulnerabilities(): boolean;
  setHasVulnerabilities(value: boolean): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  getErrorTrace(): google_cloud_websecurityscanner_v1beta_scan_run_error_trace_pb.ScanRunErrorTrace | undefined;
  setErrorTrace(value?: google_cloud_websecurityscanner_v1beta_scan_run_error_trace_pb.ScanRunErrorTrace): void;
  hasErrorTrace(): boolean;
  clearErrorTrace(): void;

  getWarningTracesList(): Array<google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb.ScanRunWarningTrace>;
  setWarningTracesList(value: Array<google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb.ScanRunWarningTrace>): void;
  clearWarningTracesList(): void;
  addWarningTraces(value?: google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb.ScanRunWarningTrace, index?: number): google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb.ScanRunWarningTrace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRun.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRun): ScanRun.AsObject;
  static serializeBinaryToWriter(message: ScanRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRun;
  static deserializeBinaryFromReader(message: ScanRun, reader: jspb.BinaryReader): ScanRun;
}

export namespace ScanRun {
  export type AsObject = {
    name: string,
    executionState: ScanRun.ExecutionState,
    resultState: ScanRun.ResultState,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    urlsCrawledCount: number,
    urlsTestedCount: number,
    hasVulnerabilities: boolean,
    progressPercent: number,
    errorTrace?: google_cloud_websecurityscanner_v1beta_scan_run_error_trace_pb.ScanRunErrorTrace.AsObject,
    warningTracesList: Array<google_cloud_websecurityscanner_v1beta_scan_run_warning_trace_pb.ScanRunWarningTrace.AsObject>,
  }

  export enum ExecutionState { 
    EXECUTION_STATE_UNSPECIFIED = 0,
    QUEUED = 1,
    SCANNING = 2,
    FINISHED = 3,
  }

  export enum ResultState { 
    RESULT_STATE_UNSPECIFIED = 0,
    SUCCESS = 1,
    ERROR = 2,
    KILLED = 3,
  }
}

