import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';

export class RunAssetDiscoveryResponse extends jspb.Message {
  getState(): RunAssetDiscoveryResponse.State;
  setState(value: RunAssetDiscoveryResponse.State): void;

  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;
  hasDuration(): boolean;
  clearDuration(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunAssetDiscoveryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunAssetDiscoveryResponse): RunAssetDiscoveryResponse.AsObject;
  static serializeBinaryToWriter(message: RunAssetDiscoveryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunAssetDiscoveryResponse;
  static deserializeBinaryFromReader(message: RunAssetDiscoveryResponse, reader: jspb.BinaryReader): RunAssetDiscoveryResponse;
}

export namespace RunAssetDiscoveryResponse {
  export type AsObject = {
    state: RunAssetDiscoveryResponse.State,
    duration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    COMPLETED = 1,
    SUPERSEDED = 2,
    TERMINATED = 3,
  }
}

