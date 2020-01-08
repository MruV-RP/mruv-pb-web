/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.scheduler.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_cloud_scheduler_v1beta1_job_pb from '../../../../google/cloud/scheduler/v1beta1/job_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

import {
  CreateJobRequest,
  DeleteJobRequest,
  GetJobRequest,
  ListJobsRequest,
  ListJobsResponse,
  PauseJobRequest,
  ResumeJobRequest,
  RunJobRequest,
  UpdateJobRequest} from './cloudscheduler_pb';

export class CloudSchedulerClient {
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
        '/google.cloud.scheduler.v1beta1.CloudScheduler/ListJobs',
      request,
      metadata || {},
      this.methodInfoListJobs,
      callback);
  }

  methodInfoGetJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: GetJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  getJob(
    request: GetJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/GetJob',
      request,
      metadata || {},
      this.methodInfoGetJob,
      callback);
  }

  methodInfoCreateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: CreateJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  createJob(
    request: CreateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/CreateJob',
      request,
      metadata || {},
      this.methodInfoCreateJob,
      callback);
  }

  methodInfoUpdateJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: UpdateJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  updateJob(
    request: UpdateJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/UpdateJob',
      request,
      metadata || {},
      this.methodInfoUpdateJob,
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
        '/google.cloud.scheduler.v1beta1.CloudScheduler/DeleteJob',
      request,
      metadata || {},
      this.methodInfoDeleteJob,
      callback);
  }

  methodInfoPauseJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: PauseJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  pauseJob(
    request: PauseJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/PauseJob',
      request,
      metadata || {},
      this.methodInfoPauseJob,
      callback);
  }

  methodInfoResumeJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: ResumeJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  resumeJob(
    request: ResumeJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/ResumeJob',
      request,
      metadata || {},
      this.methodInfoResumeJob,
      callback);
  }

  methodInfoRunJob = new grpcWeb.AbstractClientBase.MethodInfo(
    google_cloud_scheduler_v1beta1_job_pb.Job,
    (request: RunJobRequest) => {
      return request.serializeBinary();
    },
    google_cloud_scheduler_v1beta1_job_pb.Job.deserializeBinary
  );

  runJob(
    request: RunJobRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_cloud_scheduler_v1beta1_job_pb.Job) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/google.cloud.scheduler.v1beta1.CloudScheduler/RunJob',
      request,
      metadata || {},
      this.methodInfoRunJob,
      callback);
  }

}

