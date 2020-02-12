/**
 * @fileoverview gRPC-Web generated client stub for google.storagetransfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_storagetransfer_v1_transfer_types_pb from '../../../google/storagetransfer/v1/transfer_types_pb';

import {
  CreateTransferJobRequest,
  GetGoogleServiceAccountRequest,
  GetTransferJobRequest,
  ListTransferJobsRequest,
  ListTransferJobsResponse,
  PauseTransferOperationRequest,
  ResumeTransferOperationRequest,
  UpdateTransferJobRequest} from './transfer_pb';

export class StorageTransferServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetGoogleServiceAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount,
    (request: GetGoogleServiceAccountRequest) => {
      return request.serializeBinary();
    },
    google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount.deserializeBinary
  );

  getGoogleServiceAccount(
    request: GetGoogleServiceAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/GetGoogleServiceAccount',
      request,
      metadata || {},
      this.methodInfoGetGoogleServiceAccount,
      callback);
  }

  methodInfoCreateTransferJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_storagetransfer_v1_transfer_types_pb.TransferJob,
    (request: CreateTransferJobRequest) => {
      return request.serializeBinary();
    },
    google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
  );

  createTransferJob(
    request: CreateTransferJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/CreateTransferJob',
      request,
      metadata || {},
      this.methodInfoCreateTransferJob,
      callback);
  }

  methodInfoUpdateTransferJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_storagetransfer_v1_transfer_types_pb.TransferJob,
    (request: UpdateTransferJobRequest) => {
      return request.serializeBinary();
    },
    google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
  );

  updateTransferJob(
    request: UpdateTransferJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/UpdateTransferJob',
      request,
      metadata || {},
      this.methodInfoUpdateTransferJob,
      callback);
  }

  methodInfoGetTransferJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_storagetransfer_v1_transfer_types_pb.TransferJob,
    (request: GetTransferJobRequest) => {
      return request.serializeBinary();
    },
    google_storagetransfer_v1_transfer_types_pb.TransferJob.deserializeBinary
  );

  getTransferJob(
    request: GetTransferJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/GetTransferJob',
      request,
      metadata || {},
      this.methodInfoGetTransferJob,
      callback);
  }

  methodInfoListTransferJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTransferJobsResponse,
    (request: ListTransferJobsRequest) => {
      return request.serializeBinary();
    },
    ListTransferJobsResponse.deserializeBinary
  );

  listTransferJobs(
    request: ListTransferJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTransferJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/ListTransferJobs',
      request,
      metadata || {},
      this.methodInfoListTransferJobs,
      callback);
  }

  methodInfoPauseTransferOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: PauseTransferOperationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  pauseTransferOperation(
    request: PauseTransferOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/PauseTransferOperation',
      request,
      metadata || {},
      this.methodInfoPauseTransferOperation,
      callback);
  }

  methodInfoResumeTransferOperation = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: ResumeTransferOperationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resumeTransferOperation(
    request: ResumeTransferOperationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.storagetransfer.v1.StorageTransferService/ResumeTransferOperation',
      request,
      metadata || {},
      this.methodInfoResumeTransferOperation,
      callback);
  }

}

