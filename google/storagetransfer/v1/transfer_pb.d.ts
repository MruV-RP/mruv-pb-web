import * as jspb from "google-protobuf"

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_storagetransfer_v1_transfer_types_pb from '../../../google/storagetransfer/v1/transfer_types_pb';

export class GetGoogleServiceAccountRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGoogleServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGoogleServiceAccountRequest): GetGoogleServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetGoogleServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGoogleServiceAccountRequest;
  static deserializeBinaryFromReader(message: GetGoogleServiceAccountRequest, reader: jspb.BinaryReader): GetGoogleServiceAccountRequest;
}

export namespace GetGoogleServiceAccountRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class CreateTransferJobRequest extends jspb.Message {
  getTransferJob(): google_storagetransfer_v1_transfer_types_pb.TransferJob | undefined;
  setTransferJob(value?: google_storagetransfer_v1_transfer_types_pb.TransferJob): void;
  hasTransferJob(): boolean;
  clearTransferJob(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransferJobRequest): CreateTransferJobRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTransferJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferJobRequest;
  static deserializeBinaryFromReader(message: CreateTransferJobRequest, reader: jspb.BinaryReader): CreateTransferJobRequest;
}

export namespace CreateTransferJobRequest {
  export type AsObject = {
    transferJob?: google_storagetransfer_v1_transfer_types_pb.TransferJob.AsObject,
  }
}

export class UpdateTransferJobRequest extends jspb.Message {
  getJobName(): string;
  setJobName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getTransferJob(): google_storagetransfer_v1_transfer_types_pb.TransferJob | undefined;
  setTransferJob(value?: google_storagetransfer_v1_transfer_types_pb.TransferJob): void;
  hasTransferJob(): boolean;
  clearTransferJob(): void;

  getUpdateTransferJobFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateTransferJobFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;
  hasUpdateTransferJobFieldMask(): boolean;
  clearUpdateTransferJobFieldMask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTransferJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTransferJobRequest): UpdateTransferJobRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTransferJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTransferJobRequest;
  static deserializeBinaryFromReader(message: UpdateTransferJobRequest, reader: jspb.BinaryReader): UpdateTransferJobRequest;
}

export namespace UpdateTransferJobRequest {
  export type AsObject = {
    jobName: string,
    projectId: string,
    transferJob?: google_storagetransfer_v1_transfer_types_pb.TransferJob.AsObject,
    updateTransferJobFieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetTransferJobRequest extends jspb.Message {
  getJobName(): string;
  setJobName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferJobRequest): GetTransferJobRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferJobRequest;
  static deserializeBinaryFromReader(message: GetTransferJobRequest, reader: jspb.BinaryReader): GetTransferJobRequest;
}

export namespace GetTransferJobRequest {
  export type AsObject = {
    jobName: string,
    projectId: string,
  }
}

export class ListTransferJobsRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferJobsRequest): ListTransferJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTransferJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferJobsRequest;
  static deserializeBinaryFromReader(message: ListTransferJobsRequest, reader: jspb.BinaryReader): ListTransferJobsRequest;
}

export namespace ListTransferJobsRequest {
  export type AsObject = {
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTransferJobsResponse extends jspb.Message {
  getTransferJobsList(): Array<google_storagetransfer_v1_transfer_types_pb.TransferJob>;
  setTransferJobsList(value: Array<google_storagetransfer_v1_transfer_types_pb.TransferJob>): void;
  clearTransferJobsList(): void;
  addTransferJobs(value?: google_storagetransfer_v1_transfer_types_pb.TransferJob, index?: number): google_storagetransfer_v1_transfer_types_pb.TransferJob;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransferJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransferJobsResponse): ListTransferJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransferJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransferJobsResponse;
  static deserializeBinaryFromReader(message: ListTransferJobsResponse, reader: jspb.BinaryReader): ListTransferJobsResponse;
}

export namespace ListTransferJobsResponse {
  export type AsObject = {
    transferJobsList: Array<google_storagetransfer_v1_transfer_types_pb.TransferJob.AsObject>,
    nextPageToken: string,
  }
}

export class PauseTransferOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseTransferOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseTransferOperationRequest): PauseTransferOperationRequest.AsObject;
  static serializeBinaryToWriter(message: PauseTransferOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseTransferOperationRequest;
  static deserializeBinaryFromReader(message: PauseTransferOperationRequest, reader: jspb.BinaryReader): PauseTransferOperationRequest;
}

export namespace PauseTransferOperationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ResumeTransferOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeTransferOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeTransferOperationRequest): ResumeTransferOperationRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeTransferOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeTransferOperationRequest;
  static deserializeBinaryFromReader(message: ResumeTransferOperationRequest, reader: jspb.BinaryReader): ResumeTransferOperationRequest;
}

export namespace ResumeTransferOperationRequest {
  export type AsObject = {
    name: string,
  }
}

