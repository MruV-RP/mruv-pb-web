import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class ClusterOperationStatus extends jspb.Message {
  getState(): ClusterOperationStatus.State;
  setState(value: ClusterOperationStatus.State): void;

  getInnerState(): string;
  setInnerState(value: string): void;

  getDetails(): string;
  setDetails(value: string): void;

  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasStateStartTime(): boolean;
  clearStateStartTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationStatus): ClusterOperationStatus.AsObject;
  static serializeBinaryToWriter(message: ClusterOperationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationStatus;
  static deserializeBinaryFromReader(message: ClusterOperationStatus, reader: jspb.BinaryReader): ClusterOperationStatus;
}

export namespace ClusterOperationStatus {
  export type AsObject = {
    state: ClusterOperationStatus.State,
    innerState: string,
    details: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    UNKNOWN = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

export class ClusterOperationMetadata extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): void;

  getClusterUuid(): string;
  setClusterUuid(value: string): void;

  getStatus(): ClusterOperationStatus | undefined;
  setStatus(value?: ClusterOperationStatus): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getStatusHistoryList(): Array<ClusterOperationStatus>;
  setStatusHistoryList(value: Array<ClusterOperationStatus>): void;
  clearStatusHistoryList(): void;
  addStatusHistory(value?: ClusterOperationStatus, index?: number): ClusterOperationStatus;

  getOperationType(): string;
  setOperationType(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getWarningsList(): Array<string>;
  setWarningsList(value: Array<string>): void;
  clearWarningsList(): void;
  addWarnings(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationMetadata): ClusterOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: ClusterOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationMetadata;
  static deserializeBinaryFromReader(message: ClusterOperationMetadata, reader: jspb.BinaryReader): ClusterOperationMetadata;
}

export namespace ClusterOperationMetadata {
  export type AsObject = {
    clusterName: string,
    clusterUuid: string,
    status?: ClusterOperationStatus.AsObject,
    statusHistoryList: Array<ClusterOperationStatus.AsObject>,
    operationType: string,
    description: string,
    labelsMap: Array<[string, string]>,
    warningsList: Array<string>,
  }
}

