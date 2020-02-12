/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_auth_pb from '../../../../google/api/auth_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CancelJobRequest,
  CreateJobRequest,
  GetJobRequest,
  Job,
  ListJobsRequest,
  ListJobsResponse} from './job_service_pb';

export class JobServiceClient {
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

  methodInfoCreateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    Job,
    (request: CreateJobRequest) => {
      return request.serializeBinary();
    },
    Job.deserializeBinary
  );

  createJob(
    request: CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.JobService/CreateJob',
      request,
      metadata || {},
      this.methodInfoCreateJob,
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
        '/google.cloud.ml.v1.JobService/ListJobs',
      request,
      metadata || {},
      this.methodInfoListJobs,
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
        '/google.cloud.ml.v1.JobService/GetJob',
      request,
      metadata || {},
      this.methodInfoGetJob,
      callback);
  }

  methodInfoCancelJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: CancelJobRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  cancelJob(
    request: CancelJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.ml.v1.JobService/CancelJob',
      request,
      metadata || {},
      this.methodInfoCancelJob,
      callback);
  }

}

