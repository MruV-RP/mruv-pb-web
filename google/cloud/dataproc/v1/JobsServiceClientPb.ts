/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dataproc.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CancelJobRequest,
  DeleteJobRequest,
  GetJobRequest,
  Job,
  ListJobsRequest,
  ListJobsResponse,
  SubmitJobRequest,
  UpdateJobRequest} from './jobs_pb';

export class JobControllerClient {
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

  methodInfoSubmitJob = new grpcWeb.AbstractClientBase.MethodInfo(
    Job,
    (request: SubmitJobRequest) => {
      return request.serializeBinary();
    },
    Job.deserializeBinary
  );

  submitJob(
    request: SubmitJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/SubmitJob',
      request,
      metadata || {},
      this.methodInfoSubmitJob,
      callback);
  }

  methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(
    Job,
    (request: GetJobRequest) => {
      return request.serializeBinary();
    },
    Job.deserializeBinary
  );

  getJob(
    request: GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/GetJob',
      request,
      metadata || {},
      this.methodInfoGetJob,
      callback);
  }

  methodInfoListJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    ListJobsResponse,
    (request: ListJobsRequest) => {
      return request.serializeBinary();
    },
    ListJobsResponse.deserializeBinary
  );

  listJobs(
    request: ListJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/ListJobs',
      request,
      metadata || {},
      this.methodInfoListJobs,
      callback);
  }

  methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    Job,
    (request: UpdateJobRequest) => {
      return request.serializeBinary();
    },
    Job.deserializeBinary
  );

  updateJob(
    request: UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/UpdateJob',
      request,
      metadata || {},
      this.methodInfoUpdateJob,
      callback);
  }

  methodInfoCancelJob = new grpcWeb.AbstractClientBase.MethodInfo(
    Job,
    (request: CancelJobRequest) => {
      return request.serializeBinary();
    },
    Job.deserializeBinary
  );

  cancelJob(
    request: CancelJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/CancelJob',
      request,
      metadata || {},
      this.methodInfoCancelJob,
      callback);
  }

  methodInfoDeleteJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: DeleteJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteJob(
    request: DeleteJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.dataproc.v1.JobController/DeleteJob',
      request,
      metadata || {},
      this.methodInfoDeleteJob,
      callback);
  }

}

