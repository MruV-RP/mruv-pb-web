/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.talent.v4beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_cloud_talent_v4beta1_common_pb from '../../../../google/cloud/talent/v4beta1/common_pb';
import * as google_cloud_talent_v4beta1_filters_pb from '../../../../google/cloud/talent/v4beta1/filters_pb';
import * as google_cloud_talent_v4beta1_histogram_pb from '../../../../google/cloud/talent/v4beta1/histogram_pb';
import * as google_cloud_talent_v4beta1_job_pb from '../../../../google/cloud/talent/v4beta1/job_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';

import {
  BatchCreateJobsRequest,
  BatchDeleteJobsRequest,
  BatchUpdateJobsRequest,
  CreateJobRequest,
  DeleteJobRequest,
  GetJobRequest,
  ListJobsRequest,
  ListJobsResponse,
  SearchJobsRequest,
  SearchJobsResponse,
  UpdateJobRequest} from './job_service_pb';

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
    google_cloud_talent_v4beta1_job_pb.Job,
    (request: CreateJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_job_pb.Job.deserializeBinary
  );

  createJob(
    request: CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/CreateJob',
      request,
      metadata || {},
      this.methodInfoCreateJob,
      callback);
  }

  methodInfoBatchCreateJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchCreateJobsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchCreateJobs(
    request: BatchCreateJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/BatchCreateJobs',
      request,
      metadata || {},
      this.methodInfoBatchCreateJobs,
      callback);
  }

  methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_job_pb.Job,
    (request: GetJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_job_pb.Job.deserializeBinary
  );

  getJob(
    request: GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/GetJob',
      request,
      metadata || {},
      this.methodInfoGetJob,
      callback);
  }

  methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_talent_v4beta1_job_pb.Job,
    (request: UpdateJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_talent_v4beta1_job_pb.Job.deserializeBinary
  );

  updateJob(
    request: UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_talent_v4beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/UpdateJob',
      request,
      metadata || {},
      this.methodInfoUpdateJob,
      callback);
  }

  methodInfoBatchUpdateJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    google_longrunning_operations_pb.Operation,
    (request: BatchUpdateJobsRequest) => {
      return request.serializeBinary();
    },
    google_longrunning_operations_pb.Operation.deserializeBinary
  );

  batchUpdateJobs(
    request: BatchUpdateJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/BatchUpdateJobs',
      request,
      metadata || {},
      this.methodInfoBatchUpdateJobs,
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
        '/google.cloud.talent.v4beta1.JobService/DeleteJob',
      request,
      metadata || {},
      this.methodInfoDeleteJob,
      callback);
  }

  methodInfoBatchDeleteJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: BatchDeleteJobsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  batchDeleteJobs(
    request: BatchDeleteJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/BatchDeleteJobs',
      request,
      metadata || {},
      this.methodInfoBatchDeleteJobs,
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
        '/google.cloud.talent.v4beta1.JobService/ListJobs',
      request,
      metadata || {},
      this.methodInfoListJobs,
      callback);
  }

  methodInfoSearchJobs = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchJobsResponse,
    (request: SearchJobsRequest) => {
      return request.serializeBinary();
    },
    SearchJobsResponse.deserializeBinary
  );

  searchJobs(
    request: SearchJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/SearchJobs',
      request,
      metadata || {},
      this.methodInfoSearchJobs,
      callback);
  }

  methodInfoSearchJobsForAlert = new grpcWeb.AbstractClientBase.MethodInfo(
    SearchJobsResponse,
    (request: SearchJobsRequest) => {
      return request.serializeBinary();
    },
    SearchJobsResponse.deserializeBinary
  );

  searchJobsForAlert(
    request: SearchJobsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SearchJobsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.talent.v4beta1.JobService/SearchJobsForAlert',
      request,
      metadata || {},
      this.methodInfoSearchJobsForAlert,
      callback);
  }

}

