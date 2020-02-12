import * as jspb from "google-protobuf"

import * as google_ads_googleads_v2_enums_mutate_job_status_pb from '../../../../../google/ads/googleads/v2/enums/mutate_job_status_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';

export class MutateJob extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;
  hasId(): boolean;
  clearId(): void;

  getNextAddSequenceToken(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNextAddSequenceToken(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasNextAddSequenceToken(): boolean;
  clearNextAddSequenceToken(): void;

  getMetadata(): MutateJob.MutateJobMetadata | undefined;
  setMetadata(value?: MutateJob.MutateJobMetadata): void;
  hasMetadata(): boolean;
  clearMetadata(): void;

  getStatus(): google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus;
  setStatus(value: google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus): void;

  getLongRunningOperation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongRunningOperation(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasLongRunningOperation(): boolean;
  clearLongRunningOperation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateJob.AsObject;
  static toObject(includeInstance: boolean, msg: MutateJob): MutateJob.AsObject;
  static serializeBinaryToWriter(message: MutateJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateJob;
  static deserializeBinaryFromReader(message: MutateJob, reader: jspb.BinaryReader): MutateJob;
}

export namespace MutateJob {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    nextAddSequenceToken?: google_protobuf_wrappers_pb.StringValue.AsObject,
    metadata?: MutateJob.MutateJobMetadata.AsObject,
    status: google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus,
    longRunningOperation?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class MutateJobMetadata extends jspb.Message {
    getCreationDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreationDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasCreationDateTime(): boolean;
    clearCreationDateTime(): void;

    getCompletionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCompletionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;
    hasCompletionDateTime(): boolean;
    clearCompletionDateTime(): void;

    getEstimatedCompletionRatio(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEstimatedCompletionRatio(value?: google_protobuf_wrappers_pb.DoubleValue): void;
    hasEstimatedCompletionRatio(): boolean;
    clearEstimatedCompletionRatio(): void;

    getOperationCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOperationCount(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasOperationCount(): boolean;
    clearOperationCount(): void;

    getExecutedOperationCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setExecutedOperationCount(value?: google_protobuf_wrappers_pb.Int64Value): void;
    hasExecutedOperationCount(): boolean;
    clearExecutedOperationCount(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MutateJobMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MutateJobMetadata): MutateJobMetadata.AsObject;
    static serializeBinaryToWriter(message: MutateJobMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutateJobMetadata;
    static deserializeBinaryFromReader(message: MutateJobMetadata, reader: jspb.BinaryReader): MutateJobMetadata;
  }

  export namespace MutateJobMetadata {
    export type AsObject = {
      creationDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      completionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      estimatedCompletionRatio?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      operationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      executedOperationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

}

